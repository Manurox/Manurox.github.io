"use client";

import { useEffect, useId, useRef, useState } from "react";
import { loadYouTubeAPI } from "@/lib/youtube-api";

interface YouTubeLoopProps {
  videoId: string;
  loopStartMinute?: number;
  loopEndMinute?: number;
  className?: string;
  /** If false, waits until near viewport before loading the player */
  eager?: boolean;
}

function thumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function YouTubeLoop({
  videoId,
  loopStartMinute = 0,
  loopEndMinute = 0,
  className = "",
  eager = false,
}: YouTubeLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const playerId = useId().replace(/:/g, "");
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isReady, setIsReady] = useState(false);

  const startSec = loopStartMinute * 60;
  const endSec = loopEndMinute * 60;
  const hasSegment = loopEndMinute > 0 && endSec > startSec;

  // Lazy mount when near viewport
  useEffect(() => {
    if (eager || shouldLoad) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, shouldLoad]);

  // Create / destroy player
  useEffect(() => {
    if (!shouldLoad || !mountRef.current) return;

    let cancelled = false;
    setIsReady(false);

    // Ensure mount has a unique id for YT.Player
    mountRef.current.id = playerId;

    loadYouTubeAPI().then(() => {
      if (cancelled || !mountRef.current) return;

      playerRef.current = new window.YT.Player(playerId, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          ...(hasSegment
            ? { start: Math.floor(startSec) }
            : { loop: 1, playlist: videoId }),
        },
        events: {
          onReady: (event) => {
            if (cancelled) return;
            if (hasSegment) {
              event.target.seekTo(startSec, true);
            }
            event.target.playVideo();

            if (hasSegment) {
              intervalRef.current = setInterval(() => {
                try {
                  const current = event.target.getCurrentTime();
                  if (current >= endSec - 0.25) {
                    event.target.seekTo(startSec, true);
                  }
                } catch {
                  // player may be destroyed
                }
              }, 250);
            }

            setIsReady(true);
          },
          onStateChange: (event) => {
            // Keep muted looping tiles playing
            if (event.data === 0 /* ENDED */ && !hasSegment) {
              event.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      try {
        playerRef.current?.destroy();
      } catch {
        // ignore
      }
      playerRef.current = null;
    };
  }, [shouldLoad, videoId, startSec, endSec, hasSegment, playerId]);

  // Pause when offscreen, resume when back
  useEffect(() => {
    if (!shouldLoad) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const player = playerRef.current;
        if (!player) return;
        try {
          if (entry.isIntersecting) {
            player.playVideo();
          } else {
            player.pauseVideo();
          }
        } catch {
          // ignore
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden bg-ink ${className}`}
    >
      {/* Instant poster — makes the grid feel responsive */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailUrl(videoId)}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isReady ? "opacity-0" : "opacity-100"
        }`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />

      {!isReady && (
        <div className="absolute inset-0">
          <div className="tile-loader absolute inset-0 opacity-70" />
          <div className="tile-loader-sweep absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-8 w-8">
              <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.75"
                  className="text-border"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  className="text-accent animate-[spin_2.4s_linear_infinite]"
                  strokeDasharray="24 70"
                  style={{ transformOrigin: "20px 20px" }}
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {shouldLoad && (
        <div
          className={`absolute top-1/2 left-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <div ref={mountRef} className="h-full w-full" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-ink/15" />
    </div>
  );
}
