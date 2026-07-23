# Pradyuman Iyer — Portfolio

Live site: **[manurox.github.io](https://manurox.github.io/)**

## How to update content (edit on GitHub)

**One file controls the site:** [`portfolio.json`](./portfolio.json)

1. Open [`portfolio.json`](./portfolio.json)
2. Click the pencil (**Edit this file**)
3. Add or change a project
4. **Commit changes**
5. Wait **1–2 minutes**, then refresh the live site

| `category` | Shows on |
|---|---|
| `"rigging"` | **Home** + **Rigging** |
| `"animation"` | **Home** + **Animation** |

Order in the `projects` list = order of tiles on the site.

---

## Add a new project

Copy one of these into the `projects` array (add a comma after the previous item):

### Rigging

```json
{
  "id": "new-character-rig",
  "title": "New Character Rig",
  "year": "2026",
  "category": "rigging",
  "overview": "Short description of the project.",
  "tools": ["Maya", "Python"],
  "youtubeUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "loopStartMinute": 0,
  "loopEndMinute": 0.5,
  "span": "normal"
}
```

### Animation

```json
{
  "id": "new-acting-shot",
  "title": "New Acting Shot",
  "year": "2026",
  "category": "animation",
  "overview": "Short description of the project.",
  "tools": ["Maya"],
  "youtubeUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "loopStartMinute": 0,
  "loopEndMinute": 0.4,
  "span": "wide"
}
```

### Project fields

| Field | Description |
|---|---|
| `id` | Unique id (lowercase + hyphens) — used in the project URL |
| `title` | Name on the tile |
| `year` | Year label |
| `category` | `"rigging"` or `"animation"` |
| `overview` | Detail page description |
| `tools` | List of software/tools |
| `youtubeUrl` | Full YouTube link |
| `loopStartMinute` | Tile loop start (minutes) |
| `loopEndMinute` | Tile loop end (minutes). Use `0` for full video |
| `span` | `"normal"`, `"wide"`, or `"tall"` |

---

## Name, logo, banner, about

Still in [`portfolio.json`](./portfolio.json), at the top under `site`:

| Field | What it does |
|---|---|
| `fullName` | Name in the menu + home banner |
| `logoUrl` | Menu/banner logo — e.g. `"/logo.png"` |
| `bannerUrl` | Home page banner art — e.g. `"/banner.jpg"` |
| `email` | Contact link |
| `about` | About page text |
| `skills` | About page skill tags |

### Banner image size

- Display: full width × ~220–360px tall
- Recommended file: **2400 × 900** (or **1920 × 720**), JPG/PNG
- Keep important art in the **center** (edges can crop)

To add logo/banner images: upload them into this repo’s root (same place as `portfolio.json`), then set `logoUrl` / `bannerUrl` to `"/your-file.png"`.
