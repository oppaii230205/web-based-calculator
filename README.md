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
- ✅ **NEW**: Memory List Panel - View and manage multiple memory values

### History Features

- ✅ **NEW**: Calculation History Panel - View all previous calculations
- ✅ **NEW**: Click history items to recall results
- ✅ **NEW**: History displayed in reverse chronological order (newest first)

### UI Features

- ✅ Windows 11 inspired design
- ✅ **NEW**: Responsive layout with sidebar (History & Memory tabs) on medium+ screens
- ✅ **NEW**: Buttons scale larger as screen size increases
- ✅ **NEW**: Tab interface to switch between History and Memory
- ✅ Display shows current operation and previous value
- ✅ Memory indicator
- ✅ Smooth animations and transitions
- ✅ Error handling (division by zero, invalid operations)

### Responsive Breakpoints

- **Mobile (< 768px)**: Single column, compact buttons, no sidebar
- **Tablet (768px - 1023px)**: Calculator + 320px sidebar, larger buttons
- **Desktop (1024px - 1279px)**: Larger calculator + 360px sidebar
- **Large Desktop (1280px+)**: Maximum size with 400px sidebar

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
│   │   ├── Display.css         # Display styles
│   │   ├── Sidebar.jsx         # History & Memory panel with tabs
│   │   └── Sidebar.css         # Sidebar styles
│   ├── App.jsx                 # Main calculator logic & state
│   ├── App.css                 # Responsive grid layout
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

- **MC**: Clear all memory
- **MR**: Recall value from memory
- **M+**: Add current value to memory
- **M-**: Subtract current value from memory
- **MS**: Store current value in memory (adds new item to memory list)

### History & Memory Panels (Tablet & Desktop)

On screens 768px and wider, a sidebar appears on the right with two tabs:

#### History Tab

- View all your previous calculations
- Click any history item to recall its result
- Automatically updated after each calculation with "="
- Newest calculations appear at the top

#### Memory Tab

- View all stored memory values
- Click "MR" button next to any value to recall it
- Click "MC" button to remove individual memory items
- Use the main calculator's "MS" button to add new values

## Design Features

### Windows 11 Styling

- Acrylic material effect with backdrop blur
- Modern color scheme matching Windows 11
- Rounded corners and subtle shadows
- Gradient backgrounds
- Hover and active states for all buttons

### Responsive Design

- **Mobile (< 768px)**: Compact single-column layout, no sidebar
- **Tablet (768px+)**: Calculator with History/Memory sidebar, larger buttons
- **Desktop (1024px+)**: Expanded layout with even larger interactive elements
- **Large Desktop (1280px+)**: Maximum size for optimal visibility
- Buttons scale proportionally with screen size
- All breakpoints maintain Windows 11 design consistency

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
