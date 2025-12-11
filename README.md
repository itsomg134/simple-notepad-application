# Notepad App

A simple, elegant notepad application built with React that allows you to create, edit, save, and manage notes with persistent storage.

![Notepad App](https://img.shields.io/badge/React-18.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- ✨ **Clean Interface** - Minimalist design focused on writing
- 📝 **Multiple Notes** - Create and manage multiple notes
- 💾 **Persistent Storage** - Notes are automatically saved and persist across sessions
- 🔍 **Quick Preview** - See note previews in the sidebar
- 🗑️ **Easy Deletion** - Remove notes you no longer need
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Fast & Lightweight** - No backend required, runs entirely in the browser

## Demo

[Live Demo](#) - Add your deployed link here

## Screenshots

```
[Add screenshots of your application here]
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/notepad-app.git
cd notepad-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Creating a New Note

1. Click the **"New Note"** button in the sidebar
2. Start typing in the text area
3. Click **"Save"** to store your note

### Editing an Existing Note

1. Click on any note in the sidebar to open it
2. Make your changes in the text area
3. Click **"Save"** to update the note

### Deleting a Note

1. Click the trash icon (🗑️) next to any note in the sidebar
2. The note will be permanently deleted

## Technical Details

### Built With

- **React** - Frontend framework
- **Lucide React** - Icon library
- **Tailwind CSS** - Styling
- **Browser Storage API** - Persistent data storage

### Architecture

The application uses a simple client-side architecture:

- Notes are stored in browser storage using a key-value system
- Each note has a unique ID, timestamp, and preview
- All data persists locally in the browser
- No backend or database required

### Storage Structure

Notes are stored with the following structure:

```javascript
{
  content: "Note content here",
  timestamp: 1234567890,
  preview: "First 50 characters..."
}
```

## Browser Compatibility

- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Opera (v76+)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Future Enhancements

- [ ] Rich text formatting (bold, italic, lists)
- [ ] Note categories and tags
- [ ] Search functionality
- [ ] Export notes to text/markdown files
- [ ] Dark mode
- [ ] Keyboard shortcuts
- [ ] Note sharing capabilities
- [ ] Cloud sync option

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Built with [React](https://react.dev/)
## 👨‍💻 Author

Om Gedam

GitHub: @itsomg134

Email: omgedam123098@gmail.com

Twitter (X): @omgedam

LinkedIn: Om Gedam

Portfolio: https://ogworks.lovable.app
