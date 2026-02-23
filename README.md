# Indiva Innovations - Commercial Cooling Solutions

A high-performance, single-page application (SPA) landing page designed to drive B2B and bulk orders for Indiva Innovations' flagship commercial cooler, the Storm 5000. 

Live Demo: [Insert Vercel Link Here]

## 🚀 Project Overview

This landing page was developed to transition Indiva Innovations into a pan-India supplier. The UI is built with a focus on maximizing conversion rates (phone calls and emails) from event organizers, tent house owners, and B2B clients. 

Key features include:
- **Bento-Box UI Design:** Modern, asymmetrical feature highlighting.
- **Micro-Interactions:** Smooth scroll animations and hover states powered by Framer Motion.
- **Mobile-First Optimization:** Carefully structured to look incredible on mobile devices, where the majority of B2B client traffic originates.
- **Sticky Actions:** Floating WhatsApp and quick-call buttons for immediate conversion.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

The project utilizes a modular component architecture to ensure maintainability:

```text
src/
├── assets/            # Static images and logo
├── components/        # Modular UI components
│   ├── Navbar.jsx     # Glassmorphism navigation
│   ├── Hero.jsx       # High-impact hero section
│   ├── Spotlight.jsx  # Bento-box product breakdown
│   ├── Applications.jsx# Usage gallery
│   ├── Specs.jsx      # Technical specifications table
│   ├── Factory.jsx    # Manufacturing & Pan-India focus
│   ├── FAQ.jsx        # B2B common questions
│   ├── Footer.jsx     # Main footer
│   └── FloatingContact.jsx # Sticky conversion buttons
├── App.jsx            # Main layout assembler
├── index.css          # Tailwind entry point
└── main.jsx           # React DOM rendering
