# NASA 3D Satellite Model Viewer

A professional, interactive 3D model viewer showcasing NASA satellites and space elements. Built with modern web technologies and featuring an immersive user experience with 2025 design standards.

## Features

- **Interactive 3D Viewing**: Rotate, zoom, and explore NASA satellite models in real-time
- **Smart Hotspots**: Click on specific parts to learn detailed information about satellite components
- **Real-time Customization**: Adjust lighting, environment, and rendering settings on the fly
- **Augmented Reality**: View models in your physical space using AR (mobile devices)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Themes**: Switch between themes with smooth transitions
- **Professional UI**: Modern glassmorphism design with smooth animations
- **Keyboard Shortcuts**: Efficient controls for power users
- **Screenshot Capture**: Save high-quality images of your favorite views

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern design system with CSS custom properties
- **JavaScript**: Vanilla JS for performance and maintainability
- **model-viewer**: Google's web component for 3D model rendering
- **WebGL**: Hardware-accelerated 3D graphics

## Project Structure

```
MODEL-VIEWER/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles with design system
├── js/
│   └── main.js         # Interactive functionality
├── models/             # NASA GLB 3D models
└── assets/
    └── icons/          # Additional assets
```

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server for testing (optional but recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/brucevalle/model-viewer.git
   cd model-viewer
   ```

2. Open with a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Usage

### Navigation

- **Viewer Tab**: Main 3D model viewer interface
- **Features Tab**: Learn about available features
- **About Tab**: Project information

### Controls

**Mouse/Touch:**
- **Left Click + Drag**: Rotate model
- **Right Click + Drag**: Pan camera
- **Scroll/Pinch**: Zoom in/out

**Keyboard Shortcuts:**
- `F` - Toggle fullscreen
- `R` - Reset camera view
- `S` - Take screenshot
- `Space` - Toggle auto-rotate

### Customization Panel

- **Environment**: Change lighting environment (Neutral, Studio, Warehouse, Outdoor)
- **Exposure**: Adjust brightness and lighting intensity
- **Shadow Intensity**: Control shadow strength
- **Auto Rotate**: Enable/disable automatic model rotation
- **Wireframe Mode**: Toggle wireframe visualization

### Interactive Hotspots

Click on the glowing hotspots to reveal detailed information about specific components of the satellite model.

## Adding NASA Models

To add your own NASA satellite GLB models:

1. Download NASA 3D models from [NASA 3D Resources](https://nasa3d.arc.nasa.gov/)
2. Place `.glb` files in the `models/` directory
3. Update the `src` attribute in `index.html`:
   ```html
   <model-viewer
       src="models/your-nasa-satellite.glb"
       ...
   >
   ```

### Recommended NASA Models

- International Space Station (ISS)
- Hubble Space Telescope
- James Webb Space Telescope
- Mars Rovers (Perseverance, Curiosity)
- Various Earth observation satellites

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |

## Performance Tips

- Models under 10MB load faster
- Use optimized GLB files with compressed textures
- Enable auto-rotate for smooth presentation
- Use appropriate environment lighting for your model

## Customization

### Changing Colors

Edit CSS custom properties in `css/styles.css`:

```css
:root {
    --color-accent-primary: #6366f1;  /* Primary brand color */
    --color-accent-secondary: #8b5cf6; /* Secondary accent */
    /* ... more variables */
}
```

### Adding New Hotspots

Add hotspot buttons in `index.html`:

```html
<button class="hotspot" slot="hotspot-4" data-position="x y z" data-normal="nx ny nz">
    <div class="hotspot-annotation">
        <div class="hotspot-content">
            <h4>Component Name</h4>
            <p>Description of this component</p>
        </div>
    </div>
</button>
```

## Development

### Code Standards

This project follows professional coding standards:

- **Semantic HTML**: Meaningful element names
- **CSS Architecture**: Organized with comments and sections
- **JavaScript Best Practices**: Clear function names, comments, error handling
- **Accessibility**: ARIA labels, keyboard navigation
- **Performance**: Optimized animations, lazy loading

### File Organization

- All styles in `css/styles.css` (design system approach)
- All JavaScript in `js/main.js` (modular functions)
- Models in `models/` directory
- Assets in `assets/` directory

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Write clear, commented code
4. Test on multiple browsers
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Credits

- **Model Viewer**: Google's [@google/model-viewer](https://modelviewer.dev/)
- **NASA 3D Models**: [NASA 3D Resources](https://nasa3d.arc.nasa.gov/)
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## Resources

- [model-viewer Documentation](https://modelviewer.dev/docs/)
- [NASA 3D Resources](https://nasa3d.arc.nasa.gov/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [3D Model Optimization](https://modelviewer.dev/docs/compression.html)

## Support

For issues or questions:
- Open an issue on GitHub
- Check the [model-viewer documentation](https://modelviewer.dev/docs/)

---

Built with ❤️ for space exploration enthusiasts
