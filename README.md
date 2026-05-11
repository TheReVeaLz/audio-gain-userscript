# 🎧 Audio Gain Userscript

A lightweight userscript that adds audio gain control and volume boosting to web video players for a better listening experience.

Works on streaming sites such as:
- https://reanime.to
- https://flixcloud.*
- Any HTML5 video-based website (with proper `@match` rules)

---

## ✨ Features

- 🔊 Adjustable audio gain (volume boost up to 5x)
- ⌨️ Keyboard controls (PageUp / PageDown)
- 🎥 Works with dynamically loaded video players
- 🧠 Automatic iframe sync (keeps volume consistent across frames)
- 🍞 On-screen toast notifications
- ⚡ Uses Web Audio API for clean amplification (no quality loss vs simple volume scaling)

---

## ⌨️ Controls

| Key | Action |
|-----|--------|
| `PageUp` | Increase gain |
| `PageDown` | Decrease gain |

You can also manually set volume:

```js
window.SetVolume(value)
```