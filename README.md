# Carla's Wedding Websites

A responsive, elegant portfolio and pricing site tailored for **custom wedding website design**. The site showcases my work, design packages, template previews, and offers an easy way for clients to get in touch.

---

## Theme & Purpose

**Theme:** Romantic elegance with soft blush tones, refined typography, and modern, clean layouts. The aesthetic evokes sophistication and warmth suited to wedding clients.

**Purpose:**  
- Showcase a portfolio of bespoke wedding websites.  
- Present clear pricing tiers and customizable design templates.  
- Allow users to explore color palettes and templates easily.  
- Provide an accessible, user-friendly contact form for inquiries and custom build requests.

---

## Site Structure

project-root/
├── index.html # Landing page with hero, portfolio, and about sections
├── style.css # Shared/global styles for layout, typography, header, nav, footer
├── script.js # Mobile menu toggle script
├── pricing-page/
│ ├── pricing.html # Pricing packages, template selection, color palettes
│ └── pricing.css # Pricing page specific styles
├── contact-form/
│ ├── contact.html # Contact form page with validation and modal confirmation
│ └── contact.css # Contact page specific styles
│ └── contact.js # Form submission and modal management
├── Images/ # Gallery images
└── README.md # Project documentation


---

## Key Features & Implementation

- **Responsive Design:** Mobile-first layout with flexible grid and media queries for smooth adaptation on all devices.  
- **Pricing Cards:** Elegant, responsive cards for Essentials, Signature, and Luxury packages with template gallery and color swatches.  
- **Interactive Contact Form:** Custom form with validation, radio button styling (clickable blocks), and modal popup summarizing user input.  
- **Navigation:** Sticky header with hamburger menu for mobile navigation, consistent across all pages using a shared JS file.  
- **Visual Styling:** Custom CSS with transitions and hover effects, no frameworks. Focus on subtle interactivity and soft, wedding-appropriate colors.

---

## Challenges & Solutions

### 1. Mobile Menu Inconsistencies  
**Issue:** Hamburger toggle worked on some pages but not others.  
**Fix:** Centralized the menu toggle script (`script.js`) and ensured correct relative linking on all pages.

### 2. Styling Conflicts & CSS Architecture  
**Issue:** CSS from one page unintentionally affected others; duplication in header/footer styles.  
**Fix:** Shared global styles in `style.css`, page-specific styles isolated in their own CSS files (`pricing.css`, `contact.css`).

### 3. Form Radio Button Styling  
**Issue:** Radio buttons were default circles, not visually appealing or intuitive.  
**Fix:** Hid radio inputs and styled their labels as clickable buttons with clear selected states using CSS `:checked + label`.

### 4. Modal Popup Accessibility  
**Issue:** Making a modal that displays form data and can be dismissed accessibly.  
**Fix:** Created a JS-powered modal with overlay, close button, and dismissal on outside click; prepared for ARIA roles enhancements.

### 5. Consistent Navigation & Layout Across Pages  
**Issue:** Broken links and inconsistent header/footer look due to relative paths and markup variations.  
**Fix:** Standardized markup, fixed relative paths (using `../` when needed), and shared CSS for uniform appearance.

---

## Accessibility & Semantic HTML Best Practices

- **Semantic Elements:** Used `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`, `<fieldset>`, `<legend>`, and `<label>` to give meaningful page structure and improve screen reader navigation.  
- **Labels & Inputs:** Every form input is paired with a `<label>` via `for` and `id` attributes to ensure clarity.  
- **Keyboard Accessibility:** Focus outlines on links/buttons, keyboard operable navigation, and modal dismissal using keyboard or mouse.  
- **ARIA & Roles:** Modal designed with accessible dialog behavior in mind, with plans to add ARIA roles like `role="dialog"`.  
- **Color Contrast:** Text and UI colors meet WCAG contrast guidelines for readability against background palettes.  
- **Responsive Design:** Layout and controls work on all screen sizes; media queries support touch and keyboard users equally.  
- **Alt Text:** All images, especially template previews, include descriptive alt attributes for assistive technologies.

---

## Future Enhancements

- Add ARIA roles and keyboard focus trapping to modal for improved screen reader and keyboard user experience.  
- Expand JavaScript interactivity for template and color selection with live previews.    
- Enhance testing for accessibility and cross-browser compatibility.

---

## Live Demo

[View Live Site] (https://carla-lourens.github.io/wedding-websites-portfolio/) 

---

## Contact

Designed by Carla  
Frontend implementation by Carla 

---

Thank you for exploring **Carla's Wedding Websites** — making beautiful wedding websites as effortless as saying “I do.” 💍✨