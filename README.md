# FaceScan AI - Deep Learning Face Detection System

A modern web application that uses advanced neural network analysis to detect AI-generated faces with high accuracy. Built with React, TypeScript, and cutting-edge machine learning techniques.

![React](https://img.shields.io/badge/react-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.8.3-blue)
![Vite](https://img.shields.io/badge/vite-5.4.19-green)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Features

- **Real-time Analysis**: Instant AI face detection with deep learning models
- **High Accuracy Detection**: Advanced neural network analysis with multiple metrics
- **Detailed Metrics**: 
  - Symmetry Analysis
  - Skin Texture Detection
  - Eye Reflection Analysis
  - Hair Detail Inspection
  - Artifact Scoring

- **Visual Interface**: Modern, responsive UI with animated scanner effects
- **Verdict System**: Classify images as REAL, FAKE, or SUSPICIOUS
- **Confidence Scores**: Get detailed confidence percentages for each analysis
- **Warning Alerts**: Receive specific warnings about detected anomalies

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd friendly-face-faker

# Install dependencies
npm install
# or
yarn install
```

### Development

Start the development server with hot-reload:

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:8080`

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Application header with branding
│   ├── UploadZone.tsx  # Image upload interface
│   ├── ScannerView.tsx # Analysis scanner view
│   ├── AnalysisResults.tsx # Results display component
│   ├── NavLink.tsx     # Navigation link component
│   └── ui/             # shadcn-ui components library
├── pages/              # Page components
│   ├── Index.tsx       # Main application page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile detection hook
│   └── use-toast.ts    # Toast notifications hook
├── lib/                # Utility functions
│   ├── fakeAnalysis.ts # Analysis logic
│   └── utils.ts        # Common utilities
├── App.tsx             # Root application component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - UI library with hooks
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Lightning-fast build tool

### UI & Styling
- **shadcn-ui** - High-quality React components
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Lucide Icons** - Beautiful SVG icons

### Routing & State Management
- **React Router DOM 6.30.1** - Client-side routing
- **React Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form state management

### Visualization
- **Recharts 2.15.4** - React charts library
- **Sonner 1.7.4** - Toast notifications

### Development Tools
- **ESLint 9.32.0** - Code quality
- **TypeScript ESLint** - TypeScript linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🎨 Design System

The application uses a custom color scheme with cyberpunk-inspired design:

- **Primary Color**: Cyan (#00E5FF)
- **Accent Color**: Magenta/Pink (#FF00FF)
- **Background**: Dark Navy (#0F1419)
- **Fonts**: Orbitron (display), Share Tech Mono (mono)

### Custom CSS Features
- Glow effects and animations
- Scanline animations
- Data flow effects
- Grid background patterns
- Noise overlays

## 🔧 Configuration Files

### `netlify.toml`
Netlify deployment configuration with:
- Build command: `npm run build`
- Publish directory: `dist/`
- SPA redirects for React Router
- Development server settings

### `vite.config.ts`
Vite build configuration with:
- React with SWC compiler
- Path aliases (@/ → src/)
- Production build optimizations
- Source map disabled for performance

### `tsconfig.json`
TypeScript configuration for strict type checking and ES2020 compatibility

## 📦 NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run build:dev` | Build with development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |

## 🌐 Deployment

### Deploy to Netlify

#### Option 1: Connected Git (Recommended)
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Netlify will auto-detect `netlify.toml` and deploy automatically

#### Option 2: Manual Upload
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist/` folder
4. Your site will be live instantly

### Environment Variables
No environment variables required for basic deployment. Configure as needed in your Netlify dashboard.

## 📊 Analysis Metrics

The application analyzes images based on:

- **Symmetry Score** (0-100): Facial symmetry detection
- **Skin Texture** (0-100): Natural skin texture analysis
- **Eye Reflection** (0-100): Natural eye reflection detection
- **Hair Detail** (0-100): Hair detail and realism assessment
- **Artifact Score** (0-100): Compression and generation artifacts

## ⚠️ Verdict Classifications

- **REAL**: Image appears to be a genuine human face
- **FAKE**: Image is detected as AI-generated
- **SUSPICIOUS**: Inconclusive results requiring further review

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔒 Privacy

- No images are stored on servers
- All analysis is processed locally
- Images are deleted after analysis
- No data collection or tracking

## 📧 Support

For issues, feature requests, or questions, please create an issue on GitHub.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn-ui Components](https://ui.shadcn.com)

---

**Made with ❤️ using React and TypeScript**
