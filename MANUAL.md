# AFH Consultant Curriculum - Complete Manual

## Table of Contents

1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Installation Guide](#installation-guide)
4. [Project Structure](#project-structure)
5. [Configuration](#configuration)
6. [Content Management](#content-management)
7. [Customization Guide](#customization-guide)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)
10. [Advanced Features](#advanced-features)

## Introduction

The AFH Success Consultant Curriculum is a comprehensive web application built with Next.js 14, designed to train consultants who guide prospective Adult Family Home owners through the complete process of setting up and operating financially sound businesses in Washington State.

### Purpose

This application provides:
- Complete training curriculum (7 modules)
- Interactive practice exams
- Compliance tools and checklists
- Legal templates
- Financial calculators
- Master consultant handbook

## System Requirements

### Minimum Requirements

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (or yarn/pnpm equivalent)
- **Operating System**: macOS, Windows, or Linux
- **RAM**: 4GB minimum (8GB recommended)
- **Disk Space**: 500MB for dependencies

### Recommended

- Node.js 20.x LTS
- 8GB+ RAM for optimal performance
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Installation Guide

### Step 1: Clone or Download

If using git:
```bash
git clone [repository-url]
cd AFHconsultant
```

Or extract the project folder if downloaded as ZIP.

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- All required dependencies

### Step 3: Verify Installation

```bash
npm run dev
```

Open `http://localhost:3000` in your browser. You should see the homepage.

## Project Structure

```
AFHconsultant/
├── app/                          # Next.js App Router
│   ├── curriculum/               # Curriculum modules
│   │   ├── business-foundation/
│   │   ├── site-selection/
│   │   ├── pricing/
│   │   ├── marketing/
│   │   ├── billing/
│   │   ├── medication/
│   │   └── rights-services/
│   ├── exam/                     # Practice exam
│   ├── tools/                     # Tools and resources
│   │   ├── checklists/
│   │   ├── templates/
│   │   ├── calculators/
│   │   └── scripts/
│   ├── handbook/                 # Master handbook
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── Navigation.tsx
│   └── Footer.tsx
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind config
├── next.config.js                # Next.js config
└── README.md                     # Project overview
```

## Configuration

### Tailwind CSS Configuration

Edit `tailwind.config.ts` to customize:
- Colors (primary theme colors)
- Fonts
- Spacing
- Breakpoints

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize your color palette
      }
    }
  }
}
```

### Next.js Configuration

Edit `next.config.js` for:
- Environment variables
- Image optimization
- Redirects
- Headers

### TypeScript Configuration

Edit `tsconfig.json` for:
- Compiler options
- Path aliases
- Include/exclude patterns

## Content Management

### Adding a New Curriculum Module

1. Create a new folder in `app/curriculum/[module-name]/`
2. Create `page.tsx` with your content
3. Add a link in `app/curriculum/page.tsx`
4. Update navigation if needed

Example structure:
```typescript
export default function NewModule() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1>Module Title</h1>
      {/* Your content */}
    </div>
  )
}
```

### Adding Exam Questions

Edit `app/exam/page.tsx` and add to the `sampleQuestions` array:

```typescript
{
  id: 6,
  category: 'Category Name',
  question: 'Your question?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correct: 0, // Index of correct answer
  explanation: 'Why this is correct',
  wac: 'WAC 388-76-XXXXX' // Optional
}
```

### Adding Tools

1. Create a new page in `app/tools/[tool-name]/page.tsx`
2. Add a link in `app/tools/page.tsx`
3. Follow the existing pattern for consistency

## Customization Guide

### Changing Colors

1. Edit `tailwind.config.ts`
2. Update primary color values
3. Colors will automatically apply throughout the site

### Modifying Navigation

Edit `/components/Navigation.tsx`:
- Add/remove menu items
- Change logo text
- Modify mobile menu behavior

### Updating Footer

Edit `/components/Footer.tsx`:
- Change links
- Update copyright information
- Modify footer sections

### Styling Pages

All pages use Tailwind CSS utility classes. Common patterns:

```tsx
// Container
<div className="container mx-auto px-4 py-12">

// Cards
<div className="bg-white border-2 border-gray-200 rounded-lg p-6">

// Primary buttons
<button className="bg-primary-600 text-white px-6 py-2 rounded-lg">

// Sections
<section className="mb-8 bg-primary-50 p-6 rounded-lg">
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

#### Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

#### Start Production Server

```bash
npm start
```

#### Static Export (Optional)

Add to `next.config.js`:
```javascript
output: 'export'
```

Then:
```bash
npm run build
```

This creates a static site in `out/` folder.

### Environment Variables

Create `.env.local` for:
- API keys (if needed)
- Database URLs (if added)
- Other secrets

Never commit `.env.local` to git!

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

#### Module Not Found Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

#### TypeScript Errors

```bash
# Check TypeScript config
npx tsc --noEmit

# Restart TypeScript server in your IDE
```

#### Tailwind Styles Not Applying

1. Check `tailwind.config.ts` content paths
2. Verify `globals.css` imports Tailwind
3. Restart dev server

### Getting Help

1. Check Next.js documentation: https://nextjs.org/docs
2. Check Tailwind CSS docs: https://tailwindcss.com/docs
3. Review error messages in terminal
4. Check browser console for client-side errors

## Advanced Features

### Adding Authentication

1. Install NextAuth.js:
```bash
npm install next-auth
```

2. Create API route: `app/api/auth/[...nextauth]/route.ts`
3. Add session provider to layout

### Adding Database

1. Choose database (PostgreSQL, MongoDB, etc.)
2. Install ORM (Prisma, Mongoose, etc.)
3. Create database models
4. Add API routes for data operations

### Adding Search

1. Install search library (Algolia, Meilisearch, etc.)
2. Index content
3. Create search component
4. Add search API route

### Performance Optimization

- Use Next.js Image component for images
- Implement code splitting
- Add loading states
- Optimize fonts
- Use React.memo for expensive components

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Update to latest versions (careful!)
npm install package@latest
```

### Backup

- Commit code to git regularly
- Backup database (if added)
- Export content regularly

### Monitoring

- Set up error tracking (Sentry, etc.)
- Monitor performance (Vercel Analytics, etc.)
- Track user engagement

## Support

For questions or issues:
1. Review this manual
2. Check the tutorial guide
3. Review code comments
4. Consult Next.js documentation

---

**Last Updated**: 2024
**Version**: 1.0.0

