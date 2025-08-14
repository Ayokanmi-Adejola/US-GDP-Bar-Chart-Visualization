
# US GDP Bar Chart Visualization

An interactive and fully responsive web application visualizing United States Gross Domestic Product (GDP) data from 1947 to 2015. Built with React, TypeScript, D3.js, and Tailwind CSS, this project showcases best practices in modern frontend development and data visualization. Features include dynamic bar charts, real-time data fetching, accessibility enhancements, and seamless performance across all devices

<img width="1920" height="894" alt="image" src="https://github.com/user-attachments/assets/3a4e91a1-c7e0-453b-8e69-a8a5f03104f3" />


## 📊 Features

- **Interactive Bar Chart**: Hover over bars to view detailed GDP information
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Real-time Data**: Fetches live GDP data from FreeCodeCamp's API
- **Smooth Animations**: Engaging user experience with subtle transitions
- **Accessibility**: Screen reader friendly with proper ARIA labels
- **Modern Tech Stack**: Built with React, TypeScript, and D3.js

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Visualization**: D3.js v7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Code Quality**: ESLint, TypeScript strict mode

## 📋 Requirements Compliance

This project fulfills all FreeCodeCamp Data Visualization certification requirements:

- ✅ Chart title with `id="title"`
- ✅ X-axis with `id="x-axis"` and proper tick marks
- ✅ Y-axis with `id="y-axis"` and proper tick marks
- ✅ Bar elements with `class="bar"` and data attributes
- ✅ Interactive tooltip with `id="tooltip"`
- ✅ Proper data alignment and scaling
- ✅ Responsive design and accessibility

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ayokanmi-Adejola/us-gdp-bar-chart.git
cd us-gdp-bar-chart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component with D3 visualization
├── main.tsx         # React application entry point
├── index.css        # Global styles and Tailwind imports
└── vite-env.d.ts    # TypeScript environment declarations
```

## 🎯 Key Implementation Details

### Data Visualization
- Utilizes D3.js scales for precise data mapping
- Implements time-based x-axis for chronological data display
- Linear y-axis scaling for GDP values
- Responsive bar width calculation based on dataset size

### User Experience
- Interactive tooltips showing quarterly GDP data
- Hover effects with smooth color transitions
- Professional color scheme with accessibility considerations
- Mobile-responsive design with proper touch interactions

### Code Quality
- TypeScript for type safety and better developer experience
- ESLint configuration for consistent code style
- Modular component architecture
- Clean separation of concerns

## 🧪 Testing

Run the FreeCodeCamp test suite:
```bash
# The test suite is automatically loaded via CDN
# Open the application and click "Run Tests" to verify compliance
```

## 📈 Performance Optimizations

- Efficient D3.js data binding and updates
- Optimized re-rendering with React hooks
- Minimal bundle size with tree-shaking
- Fast development server with Vite

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [FreeCodeCamp](https://www.freecodecamp.org/) for the project requirements and test suite
- [D3.js](https://d3js.org/) for the powerful data visualization library
- [U.S. Bureau of Economic Analysis](https://www.bea.gov/) for the GDP data source
