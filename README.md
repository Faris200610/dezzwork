# Dezzwork Landing Page

وظيفتك وتخليص خدماتك.. كله على واتساب

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Logo Setup

**IMPORTANT**: Place your `deezwork.png` logo file in the `public` folder:

```
c:\dezzwork\public\deezwork.png
```

The logo will appear in:
- Navbar (large size)
- Phone mockup background (watermark)

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
dezzwork/
├── app/
│   ├── dezzwork/
│   │   └── page.tsx          # Main landing page
│   ├── layout.tsx             # Root layout with RTL support
│   ├── globals.css            # Global styles with Arabic fonts
│   └── page.tsx               # Home redirect
├── components/
│   ├── Navbar.tsx             # Simple navbar with logo
│   ├── PhoneMockup.tsx        # iPhone mockup with WhatsApp notification
│   └── BentoGrid.tsx          # Feature cards grid
├── public/
│   └── deezwork.png           # Logo file (add this!)
└── Dezzwork-Config.json       # Content configuration
```

## 🎨 Design Features

- **Mobile-First**: Fully responsive design optimized for mobile devices
- **RTL Support**: Right-to-left layout for Arabic content
- **WhatsApp Green**: Primary accent color (#25D366)
- **Arabic Typography**: Cairo for headings, IBM Plex Sans Arabic for body
- **Clean & Modern**: High-conversion SaaS landing page design
- **Fixed Navbar**: Simple navbar with large logo display

## 📱 Sections

1. **Navbar**: Fixed top navbar with logo
2. **Hero Section**: Split-screen with headline and phone mockup (with logo watermark)
3. **Features Grid**: 3 BentoGrid cards highlighting key benefits
4. **Pricing Section**: Simple pricing card with CTA
5. **Contact Banner**: WhatsApp support call-to-action
6. **Footer**: Copyright and legal links

## 🛠 Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **Google Fonts**: Cairo & IBM Plex Sans Arabic

## 📞 Contact

WhatsApp: 0573621277
