import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-[10px] tracking-[0.25em] uppercase text-accent">404</p>
      <h1 className="font-display text-4xl font-medium text-cream md:text-5xl">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 border border-border px-8 py-3 text-xs tracking-[0.2em] uppercase text-cream transition-colors duration-200 hover:border-accent hover:text-accent"
      >
        Back to work
      </Link>
    </section>
  );
}
