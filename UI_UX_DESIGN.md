# Verse Forms Landing Page - UI/UX Design Specification

**Design Approach**: Refined Minimalism  
**Brand Color**: Black (#000000)  
**Typography**: Geist (headlines) + Inter (body)  
**Animation Style**: Smooth, subtle, GPU-accelerated  

---

## 1. Navigation Bar

**Layout**: Sticky header with transparent background, blur on scroll

**Components**:
- Left: Logo (text "Verse Forms" in Geist Bold, 20px)
- Center: Navigation items (Features, Templates, Pricing, Resources) - 16px Inter Medium
- Right: Sign In (text link), Get Started (black button with white text)

**Styling**:
- Background: Transparent (white on scroll with backdrop blur)
- Text Color: Black (#1a1a1a)
- Button: Black background, white text, 12px padding, 4px border-radius
- Hover: Button scales to 0.98, shadow increases

**Animation**:
- On scroll: Background fades to white/90, backdrop blur effect
- Transition: 300ms ease-out

---

## 2. Hero Section

**Layout**: Two-column asymmetric layout (60% text left, 40% mockup right)

**Left Column**:
- Headline: "Create forms people actually enjoy completing." (56px Geist Bold)
- Supporting text: "Build elegant forms with an experience designed for speed, clarity, and simplicity." (18px Inter Regular, gray #666666)
- CTAs: Two buttons stacked
  - Primary: "Get Started Free" (black button, 16px)
  - Secondary: "Watch Demo" (outline button, transparent with black border)

**Right Column**:
- Floating builder mockup with parallax effect
- Soft shadow beneath mockup
- Responds to mouse movement (subtle parallax)

**Styling**:
- Background: Subtle gradient from white to light gray
- Spacing: 120px top/bottom padding, 80px between text and mockup
- Text alignment: Left-aligned

**Animation**:
- Headline: Fade in + slide up (300ms on page load)
- Supporting text: Fade in (400ms delay)
- Buttons: Fade in (500ms delay)
- Mockup: Fade in + parallax (600ms delay)

---

## 3. Trust Section (Logo Strip)

**Layout**: Centered, horizontal row of company logos

**Components**:
- 5 company logos in monochrome (black)
- Minimal spacing between logos
- "Trusted by leading teams" text above (optional)

**Styling**:
- Background: White
- Logo size: 120px width each
- Padding: 60px top/bottom

**Animation**:
- Logos fade in on scroll (staggered, 100ms between each)

---

## 4. Features Section

**Layout**: 3x3 grid of feature cards

**Card Components**:
- Icon: Minimal geometric icon (32x32px, black)
- Title: 20px Geist Semi-bold
- Description: One sentence, 16px Inter Regular, gray
- Feature list: 3-4 bullet points (optional)

**Features**:
1. Drag & Drop Builder
2. Live Preview
3. Responsive Forms
4. Real-Time Responses
5. Secure Sharing
6. CSV Export
7. Dark Mode
8. File Upload
9. Password Protected Forms

**Styling**:
- Card background: White with 1px light gray border
- Padding: 32px
- Border-radius: 8px
- Hover: Lift effect (transform: translateY(-4px)), shadow increases

**Animation**:
- Cards fade in on scroll (staggered, 80ms between each)
- Hover: 200ms ease-out transition

---

## 5. Product Showcase Section

**Layout**: Centered large mockup with floating UI panels

**Components**:
- Large dashboard mockup (center)
- Floating panels around mockup:
  - Response Analytics (top-left)
  - Template Library (top-right)
  - Share Modal (bottom-left)
  - Recent Forms (bottom-right)

**Styling**:
- Mockup: 800px width, soft shadow
- Panels: Smaller floating cards with soft shadows
- Background: White
- Spacing: 100px padding around mockup

**Animation**:
- Mockup fades in on scroll (300ms)
- Panels float in sequentially (staggered, 150ms between each)
- Panels have subtle floating animation (up/down 8px, 3s duration, infinite)

---

## 6. Template Gallery Section

**Layout**: 4-column grid of template cards

**Card Components**:
- Thumbnail preview (400x300px)
- Title: 18px Geist Semi-bold
- Description: 14px Inter Regular, gray
- Hover CTA: "View Template" button

**Templates**:
1. Contact Form
2. Feedback Survey
3. Registration Form
4. Quiz Template
5. Hospital Intake
6. School Enrollment
7. Hiring Application
8. Event Registration

**Styling**:
- Card background: White with 1px light gray border
- Padding: 16px
- Border-radius: 8px
- Thumbnail: 100% width, 200px height
- Hover: Lift effect, shadow increases

**Animation**:
- Cards fade in on scroll (staggered, 100ms between each)
- Hover: 200ms ease-out transition

---

## 7. Why Verse Forms Section

**Layout**: Comparison/benefits section with 6 key points

**Components**:
- Headline: "Why Verse Forms?" (40px Geist Bold)
- 6 benefit cards in 2x3 grid:
  1. Clean UI
  2. Speed
  3. Security
  4. Reliability
  5. Accessibility
  6. Craftsmanship

**Card Components**:
- Icon: Minimal geometric icon (24x24px)
- Title: 18px Geist Semi-bold
- Description: 2-3 sentences, 16px Inter Regular

**Styling**:
- Background: Very light gray (#f5f5f5)
- Cards: White background with soft border
- Padding: 80px top/bottom

**Animation**:
- Cards fade in on scroll (staggered, 100ms between each)

---

## 8. Testimonials Section

**Layout**: 3 testimonial cards in horizontal row (or stacked on mobile)

**Card Components**:
- Quote: 18px Inter Regular, left-aligned
- Author name: 16px Geist Semi-bold
- Author title: 14px Inter Regular, gray
- Avatar: 48x48px circular image

**Styling**:
- Card background: White with 1px light gray border
- Padding: 32px
- Border-radius: 8px
- Avatar: 48px diameter, circular
- Spacing: 32px between cards

**Animation**:
- Cards fade in on scroll (staggered, 150ms between each)

---

## 9. Pricing Section

**Layout**: 3 pricing cards in horizontal row

**Card Components**:
- Plan name: "Free", "Pro", "Team"
- Price: "$0", "$29/mo", "$99/mo"
- Description: One sentence
- Features list: 5-8 features per plan
- CTA button: "Get Started" or "Upgrade"

**Styling**:
- Free/Team: White background with light gray border
- Pro: White background with black border (2px), highlighted
- Padding: 40px
- Border-radius: 8px
- Button: Black for Pro, outline for others

**Animation**:
- Cards fade in on scroll (staggered, 150ms between each)
- Pro card: Subtle scale effect (1.02x) on hover

---

## 10. FAQ Section

**Layout**: Accordion with 8-10 questions

**Components**:
- Question: 18px Geist Semi-bold
- Answer: 16px Inter Regular, gray
- Expand/collapse icon

**Styling**:
- Background: White
- Accordion items: 1px light gray border
- Padding: 24px
- Border-radius: 8px

**Animation**:
- Accordion expand/collapse: 300ms ease-out
- Content fade in/out: 200ms

---

## 11. Final CTA Section

**Layout**: Centered call-to-action

**Components**:
- Headline: "Start creating better forms today." (48px Geist Bold)
- CTA button: "Create Your First Form" (black button, 18px)

**Styling**:
- Background: White
- Padding: 120px top/bottom
- Text alignment: Center

**Animation**:
- Headline: Fade in on scroll (300ms)
- Button: Fade in (400ms delay)

---

## 12. Footer

**Layout**: 4-column footer with company info

**Columns**:
1. **Company**: About, Blog, Careers, Contact
2. **Product**: Features, Templates, Pricing, Security
3. **Resources**: Documentation, API Docs, Community, Support
4. **Legal**: Privacy, Terms, Cookies, Compliance

**Styling**:
- Background: White with 1px top border (light gray)
- Text: 14px Inter Regular, gray
- Links: Hover underline effect
- Padding: 60px top/bottom, 40px left/right

**Additional**:
- Copyright: "© 2026 Sabeer-Verse. All rights reserved."
- Social links: GitHub, Twitter, LinkedIn (optional)

---

## Global Styling Guidelines

**Spacing System**:
- Base unit: 8px
- Section padding: 80px-120px vertical
- Component padding: 16px-40px
- Gap between elements: 24px-32px

**Typography**:
- H1: 48-56px, Geist Bold, line-height 1.2
- H2: 32-40px, Geist Semi-bold, line-height 1.3
- H3: 24-28px, Geist Semi-bold, line-height 1.4
- Body: 16-18px, Inter Regular, line-height 1.6
- Small: 14px, Inter Regular, line-height 1.5

**Colors**:
- Primary text: #1a1a1a (near black)
- Secondary text: #666666 (medium gray)
- Borders: #e8e8e8 (very light gray)
- Backgrounds: #ffffff (white), #f5f5f5 (light gray)
- Buttons: #000000 (black) with white text

**Shadows**:
- Subtle: 0 2px 8px rgba(0, 0, 0, 0.08)
- Medium: 0 4px 16px rgba(0, 0, 0, 0.12)
- Strong: 0 8px 24px rgba(0, 0, 0, 0.16)

**Border Radius**:
- Buttons: 4px
- Cards: 8px
- Large components: 12px

---

## Animation Timing

**Standard Easing**: `cubic-bezier(0.23, 1, 0.32, 1)` (snappy ease-out)

**Durations**:
- Button interactions: 100-160ms
- Section entrances: 300-500ms
- Hover effects: 200-300ms
- Scroll animations: 300-600ms

**Stagger**:
- Card grids: 80-100ms between items
- List items: 100-150ms between items

---

## Responsive Breakpoints

**Desktop (1024px+)**:
- Full layout with all visual elements
- 3-column grids for features and templates
- Horizontal layouts for testimonials and pricing

**Tablet (768px - 1023px)**:
- 2-column grids for features
- Adjusted spacing (60px padding)
- Stacked pricing cards

**Mobile (< 768px)**:
- Single-column layout
- Stacked cards and buttons
- Hero: Text above mockup (vertical stack)
- Increased touch target sizes (44px minimum)
- Reduced font sizes for mobile (H1: 32px, body: 16px)

---

## Accessibility

- All buttons have focus rings (2px outline)
- Color contrast: 4.5:1 minimum for text
- Icons have alt text or aria-labels
- Animations respect `prefers-reduced-motion`
- Form inputs have proper labels
- Navigation is keyboard accessible

---

## Performance Considerations

- Images: Use webp format with fallbacks
- Animations: GPU-accelerated (transform, opacity only)
- Lazy loading: Images below fold
- Code splitting: Route-based splitting
- CSS: Utility-first with Tailwind CSS

---

## Design Deliverables

1. ✅ Design system document (this file)
2. ✅ Visual assets (hero bg, mockups, icons, panels)
3. ⏳ UI/UX mockup presentation (next step)
4. ⏳ Full implementation with animations
5. ⏳ Responsive testing across devices

---

**Status**: Design specification complete. Ready for visual asset generation and mockup presentation.
