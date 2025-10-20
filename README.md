# Windows 11 Calculator - Web Application

A modern, responsive web-based calculator that replicates the Windows 11 Calculator design and functionality. Built with React, Vite, HTML, CSS, and JavaScript.

## Features

### Standard Operations
- ✅ Addition (+)
- ✅ Subtraction (-)
- ✅ Multiplication (×)
- ✅ Division (÷)
- ✅ Percentage (%)
- ✅ Square Root (√x)
- ✅ Square (x²)
- ✅ Reciprocal (1/x)
- ✅ Sign Toggle (±)

### Memory Functions
- ✅ Memory Clear (MC)
- ✅ Memory Recall (MR)
- ✅ Memory Add (M+)
- ✅ Memory Subtract (M-)
- ✅ Memory Store (MS)

### UI Features
- ✅ Windows 11 inspired design
- ✅ Responsive layout (works on desktop, tablet, and mobile)
- ✅ Display shows current operation and previous value
- ✅ Memory indicator
- ✅ Smooth animations and transitions
- ✅ Error handling (division by zero, invalid operations)

## Technology Stack

- **React 18.2** - UI library
- **Vite 5.0** - Build tool and development server
- **HTML5** - Structure
- **CSS3** - Styling with responsive design
- **JavaScript (ES6+)** - Logic and interactivity

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   The optimized build will be in the `dist` folder

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
Week05/
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Individual button component
│   │   ├── Button.css          # Button styles
│   │   ├── ButtonPanel.jsx     # Grid of all calculator buttons
│   │   ├── ButtonPanel.css     # Button panel layout
│   │   ├── Display.jsx         # Calculator display component
│   │   └── Display.css         # Display styles
│   ├── App.jsx                 # Main calculator logic
│   ├── App.css                 # Main app styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## How to Use

### Basic Operations
1. Click number buttons (0-9) to input numbers
2. Click operation buttons (+, -, ×, ÷) to select an operation
3. Click equals (=) to calculate the result
4. Click C to clear everything
5. Click CE to clear the current entry
6. Click ⌫ (backspace) to delete the last digit

### Advanced Operations
- **Percentage (%)**: Calculates percentage of the previous value in an operation
- **Square Root (√x)**: Calculates the square root of the current number
- **Square (x²)**: Squares the current number
- **Reciprocal (1/x)**: Calculates 1 divided by the current number
- **Sign (±)**: Toggles between positive and negative

### Memory Functions
- **MC**: Clear memory
- **MR**: Recall value from memory
- **M+**: Add current value to memory
- **M-**: Subtract current value from memory
- **MS**: Store current value in memory

## Design Features

### Windows 11 Styling
- Acrylic material effect with backdrop blur
- Modern color scheme matching Windows 11
- Rounded corners and subtle shadows
- Gradient backgrounds
- Hover and active states for all buttons

### Responsive Design
- **Desktop**: Full-size calculator (400px width)
- **Tablet**: Adjusted button sizes and spacing
- **Mobile**: Optimized for small screens with touch-friendly buttons
- Breakpoints at 480px and 360px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Practices

- ✅ Component-based architecture
- ✅ React Hooks for state management
- ✅ Modular CSS with component-specific styles
- ✅ No backend required - runs entirely in the browser
- ✅ Modern ES6+ JavaScript
- ✅ Fast development with Vite HMR (Hot Module Replacement)

## Future Enhancements (Optional)

- Scientific mode
- Programmer mode
- History of calculations
- Keyboard support
- Theme customization
- Unit converter

## License

This project is created for educational purposes.

## Author

Created as part of Web Application Development course.
