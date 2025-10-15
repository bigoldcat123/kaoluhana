# 薫る花は凛と咲く (Kaoru Hana wa Rin to Saku) - Website Clone

A practice project recreating the official anime website for "薫る花は凛と咲く" (The Fragrant Flower Blooms with Dignity).

## 🌸 Overview

This is a clone of the official anime website [kaoruhana-anime.com](https://kaoruhana-anime.com/) built as a learning exercise. The project recreates the visual design, layout, and interactive elements of the original site using modern web technologies.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Runtime**: [Bun](https://bun.sh/) 
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: Custom React components
- **Build Tool**: Next.js with Turbopack

## ✨ Features

### Homepage Sections
- **Hero Banner**: Animated header with official artwork
- **Movie Section**: Video gallery with promotional videos (PVs)
- **News Board**: Latest announcements and updates
- **Introduction**: Anime synopsis and information
- **Footer**: Contact information and copyright details

### Interactive Components
- Responsive navigation menu
- Loading animations and transitions
- Social media integration (Twitter, Line, Facebook)
- Sakura petal animations
- Mini character cards
- News item cards with dates

## 🏗️ Project Structure

```
kaoruhana/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main homepage
│   │   └── layout.tsx        # App layout
│   ├── components/
│   │   ├── home/
│   │   │   ├── banner.tsx    # Hero banner section
│   │   │   ├── MovieList.tsx # Video gallery
│   │   │   ├── news-board.tsx# News section
│   │   │   ├── introduction.tsx # Anime info
│   │   │   ├── menu.tsx      # Navigation
│   │   │   └── footer.tsx    # Footer section
│   │   ├── MovieItem.tsx     # Individual movie component
│   │   ├── news-item.tsx     # News card component
│   │   ├── mini-card.tsx     # Character cards
│   │   ├── sakura.tsx        # Sakura animations
│   │   ├── loading.tsx       # Loading components
│   │   └── social components # Social media icons
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   ├── home/                 # Homepage assets
│   ├── movie/                # Video thumbnails
│   ├── introduction/         # Character images
│   ├── menu/                 # Navigation assets
│   └── bg.jpg               # Background image
└── configuration files
```

## 🛠️ Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed
- Node.js 18+ (if not using Bun)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kaoruhana
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production with Turbopack
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1920px)
- Mobile (320px - 768px)

## 🎨 Design Features

- **Authentic Recreation**: Faithful reproduction of the original website's design
- **Smooth Animations**: CSS transitions and loading effects
- **Japanese Typography**: Proper handling of Japanese text
- **Visual Effects**: Sakura petal animations and hover effects
- **Color Scheme**: Matching the anime's pink and white theme

## 📂 Assets

The project includes placeholder assets organized by section:
- Character artwork and promotional images
- Video thumbnails for the movie section
- Background images and UI elements
- Social media icons

## 🔧 Customization

### Adding New Content

1. **News Items**: Update the news data in `news-board.tsx`
2. **Movies**: Add new video items in `MovieList.tsx`
3. **Characters**: Update character information in `introduction.tsx`

### Styling
- Global styles are handled through Tailwind CSS
- Component-specific styles use Tailwind utility classes
- Custom animations are defined in component files

## 📝 Learning Goals

This project was created to practice:
- Modern React patterns with Next.js App Router
- TypeScript in a React environment
- Tailwind CSS for responsive design
- Component architecture and reusability
- Asset optimization and organization
- Japanese web design principles

## ⚠️ Disclaimer

This is a fan-made clone created for educational purposes only. All artwork, content, and intellectual property belong to their respective owners:

- **Original Anime**: 薫る花は凛と咲く (The Fragrant Flower Blooms with Dignity)
- **Copyright**: ©三香見サカ・講談社／「薫る花は凛と咲く」製作委員会
- **Original Website**: [kaoruhana-anime.com](https://kaoruhana-anime.com/)

This project is not affiliated with the official production committee or distributors.

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are welcome! Feel free to:
- Report bugs or issues
- Suggest improvements
- Share your own learning experiences

## 📄 License

This project is for educational use only. Please respect the intellectual property rights of the original creators.

---

**Note**: This clone was created as a web development exercise to study modern React/Next.js patterns and Japanese web design aesthetics.