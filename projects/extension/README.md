# Go Dodo - Task Manager Browser Extension

A beautiful and productive task manager browser extension with a nature-inspired Forest Green design.

## Features

- **Create Tasks**: Quickly add new tasks with a sleek input interface
- **List Tasks**: View all your tasks in a beautiful, organized list
- **Complete Tasks**: Check off tasks with smooth animations
- **Delete Tasks**: Remove tasks you no longer need
- **Persistent Storage**: Tasks are saved using Chrome Storage API
- **Modern Design**: Forest Green theme with emerald-to-teal gradients

## Design Highlights

- 🌿 Nature-inspired color palette (Emerald, Teal, Sage Green)
- ✨ Smooth animations and transitions
- 🎯 Glassmorphic effects and soft shadows
- 📱 Optimized for 400×600px popup window
- 🎨 Custom checkboxes with animated fills

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Chrome, Edge, or any Chromium-based browser

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server** (for testing in browser):
   ```bash
   npm start
   # or
   ng serve extension
   ```

3. **Build the extension**:
   ```bash
   npm run build:extension
   # or
   ng build extension --configuration production
   ```

   The built extension will be in `dist/extension/browser/`

## Creating Extension Icons

The extension needs PNG icons in multiple sizes. You can convert the provided SVG icon:

### Option 1: Using Online Tools
1. Go to [CloudConvert](https://cloudconvert.com/svg-to-png) or similar
2. Upload `projects/extension/public/icons/icon.svg`
3. Convert to PNG at these sizes: 16×16, 32×32, 48×48, 128×128
4. Save them as `icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-128.png`
5. Place them in `projects/extension/public/icons/`

### Option 2: Using ImageMagick (if installed)
```bash
cd projects/extension/public/icons
convert icon.svg -resize 16x16 icon-16.png
convert icon.svg -resize 32x32 icon-32.png
convert icon.svg -resize 48x48 icon-48.png
convert icon.svg -resize 128x128 icon-128.png
```

### Option 3: Using Inkscape (if installed)
```bash
cd projects/extension/public/icons
inkscape icon.svg --export-filename=icon-16.png -w 16 -h 16
inkscape icon.svg --export-filename=icon-32.png -w 32 -h 32
inkscape icon.svg --export-filename=icon-48.png -w 48 -h 48
inkscape icon.svg --export-filename=icon-128.png -w 128 -h 128
```

## Loading the Extension in Chrome/Edge

### Method 1: Load Unpacked Extension (Development)

1. **Build the extension**:
   ```bash
   ng build extension --configuration production
   ```

2. **Open Chrome/Edge**:
   - Navigate to `chrome://extensions/` (Chrome) or `edge://extensions/` (Edge)
   - Enable "Developer mode" (toggle in top-right corner)

3. **Load the extension**:
   - Click "Load unpacked"
   - Navigate to `dist/extension/browser/` directory
   - Select the folder

4. **Pin the extension**:
   - Click the extensions icon (puzzle piece) in the toolbar
   - Find "Go Dodo - Task Manager"
   - Click the pin icon to keep it visible

### Method 2: Load as Packed Extension (.crx)

1. Build and package:
   ```bash
   ng build extension --configuration production
   cd dist/extension/browser
   # Zip the contents (not the folder itself)
   ```

2. In Chrome, go to `chrome://extensions/`
3. Drag and drop the .zip file

## Project Structure

```
projects/extension/
├── public/
│   ├── manifest.json          # Extension manifest (v3)
│   ├── background.js          # Service worker
│   └── icons/                 # Extension icons
│       ├── icon.svg           # Source SVG
│       ├── icon-16.png
│       ├── icon-32.png
│       ├── icon-48.png
│       └── icon-128.png
├── src/
│   ├── app/
│   │   ├── app.ts             # Root component
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── todo-list.component.ts      # Main todo list component
│   │   ├── todo-list.component.html
│   │   ├── todo-list.component.css
│   │   └── storage.service.ts          # Chrome Storage API service
│   ├── index.html             # Popup HTML
│   ├── main.ts                # Bootstrap
│   └── styles.css             # Global styles
└── README.md                  # This file
```

## Technologies Used

- **Angular 21**: Modern standalone components with signals
- **Tailwind CSS 4**: Utility-first CSS framework
- **Chrome Extension API**: Manifest V3
- **Chrome Storage API**: Persistent data storage
- **TypeScript**: Type-safe development

## Development Tips

### Testing in Development Mode

During development, you can test the extension in two ways:

1. **Browser mode** (with live reload):
   ```bash
   ng serve extension
   ```
   Open `http://localhost:4200` - uses localStorage instead of chrome.storage

2. **Extension mode** (with manual reload):
   ```bash
   ng build extension --watch
   ```
   Load the extension in Chrome, and rebuild triggers auto-reload

### Debugging

1. **Popup debugging**:
   - Right-click the extension icon → "Inspect popup"
   - Opens DevTools for the popup

2. **Background script debugging**:
   - Go to `chrome://extensions/`
   - Click "background page" under your extension
   - Opens DevTools for the service worker

3. **Storage inspection**:
   - In DevTools, go to Application → Storage → Local Storage (dev) or Chrome Storage (extension)

## Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search and filter
- [ ] Import/Export tasks
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] Task statistics

## License

MIT

## Author

Built with ❤️ using Angular and Claude Code
