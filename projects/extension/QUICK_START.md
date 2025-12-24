# Quick Start Guide - Go Dodo Extension

Get your extension running in 5 minutes!

## Step 1: Build the Extension

```bash
npm run build:extension
```

This creates a production build in `dist/extension/browser/`

## Step 2: Create Icon Files (Temporary Workaround)

**Quick option**: For now, you can skip creating icons and the extension will use default icons.

**OR** Create simple placeholder icons:

```bash
cd projects/extension/public/icons

# Option A: Use online converter
# 1. Go to https://www.iloveimg.com/resize-image/resize-svg
# 2. Upload icon.svg
# 3. Resize to 16x16, 32x32, 48x48, 128x128
# 4. Save as icon-16.png, icon-32.png, icon-48.png, icon-128.png

# Option B: Use any image editor
# Open icon.svg in any editor and export as PNG at different sizes
```

**OR** Temporarily modify manifest to remove icon references:
- Open `projects/extension/public/manifest.json`
- Remove the `"icons"` and `"default_icon"` sections (Chrome will use a default icon)

## Step 3: Load in Chrome

1. Open Chrome and go to: **`chrome://extensions/`**

2. Enable **"Developer mode"** (toggle in top-right)

3. Click **"Load unpacked"**

4. Navigate to and select: **`dist/extension/browser/`**

5. Done! Your extension is now installed

## Step 4: Use the Extension

1. Click the puzzle piece icon (🧩) in Chrome toolbar
2. Find "Go Dodo - Task Manager" and pin it
3. Click the extension icon to open your todo list
4. Start adding tasks!

## Development Mode (with live reload)

If you want to develop and see changes in real-time:

```bash
# Terminal 1: Watch for changes and rebuild
npm run watch:extension

# Chrome: After each build completes, click the refresh icon
# on your extension in chrome://extensions/
```

Or test in browser mode:

```bash
npm run start:extension
# Open http://localhost:4200
# Note: Uses localStorage instead of chrome.storage in this mode
```

## Troubleshooting

### "Manifest file is missing or unreadable"
- Make sure you selected the `dist/extension/browser/` folder, not the project root
- Rebuild the extension: `npm run build:extension`

### "Extension icons not showing"
- Either create the PNG icons as described in Step 2
- Or temporarily remove icon references from manifest.json

### "Tasks not persisting"
- This is expected in `ng serve` mode (uses localStorage)
- In extension mode (loaded in Chrome), tasks use chrome.storage and persist correctly

### Changes not showing up
- In Chrome, go to `chrome://extensions/`
- Click the refresh icon (🔄) on your extension
- Close and reopen the extension popup

## Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Explore the Forest Green design and animations
- Add your first tasks and check them off!

---

**Happy task managing! 🌿✅**
