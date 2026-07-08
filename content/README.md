# Portfolio content

Edit **`portfolio.json`** in this folder to update the site. After you save and push to GitHub, the site rebuilds automatically and your changes go live.

## Project fields

| Field | Description |
|-------|-------------|
| `id` | Unique URL slug (e.g. `character-rig-reel` → `/work/character-rig-reel/`) |
| `title` | Project name shown on the tile |
| `year` | Year label (e.g. `"2025"`) |
| `category` | `"rigging"` or `"animation"` |
| `overview` | Description on the project detail page |
| `tools` | Array of software/tools used |
| `youtubeUrl` | Full YouTube link for the tile video |
| `loopStartMinute` | Where the tile loop starts, in minutes (e.g. `0` or `1.5`) |
| `loopEndMinute` | Where the tile loop ends, in minutes. Set to `0` to loop the full video |
| `span` | Optional tile size: `"normal"`, `"wide"`, or `"tall"` |

## Example project

```json
{
  "id": "my-new-project",
  "title": "My New Project",
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

## Site section

The `site` object at the top controls name, email, about text, social links, and skills on the About page.
