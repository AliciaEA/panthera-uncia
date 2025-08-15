# Panthera-Uncia: The Snow Leopard Interactive Zoo Exhibit

Welcome to Panthera-Uncia, a SvelteKit project for YSWS Hack Club, The Zoo! We have our snow leopard (Panthera uncia - I called him Panthuncia), facts about them, some "animations"(I tried), and *responsive*, doesn't look bad on mobile, I really tried my best. Explore, learn, and interact with the snow leopard [Pantuncia].

## Project Overview
Panthera-Uncia is designed to educate users about the snow leopard, featuring:
- Dynamic facts panel powered by JSON data
- Animated snow effect with accessible controls
- Interactive animal scene with external and internal stimuli
- Easter egg discovery
- Responsive, mobile-friendly layout
- Svelte 5 runes (`state`, `derived`, `effect`) for reactivity and side effects
- All components imported and organized for maintainability

## Interactive Elements & Implementation

## Interactive

### Snow Effect Button
- **What:** A floating button with a snowflake icon. When clicked, it spins and triggers a snowfall animation for several seconds.
- **How:** Implemented in `src/lib/components/snow.svelte` using Svelte state and timers. Accessible via keyboard and screen readers.

### Moving Tag
- **What:** A moving tag, from right to left, saying <<Vulnerable>>
- **How:** Span Tag

### Animated Data Cards
- **What:** Cards display key statistics (population, range, leap distance) with animated counting when scrolled into view. *COUNTER and HOVER*
- **How:** Implemented in `src/lib/components/DataCard.svelte` using IntersectionObserver and Svelte's lifecycle hooks.

### 2. Dynamic Facts Panel
- **What:** A panel presenting snow leopard facts, navigable with previous/next buttons and progress dots. Viewing all facts unlocks a special interactive link.
- **How:** Implemented in `src/lib/components/FactPanel.svelte` using Svelte 5 runes (`state`, `derived`, `effect`). Facts are loaded from a JSON file. Tracks viewed facts and triggers an easter egg with random chance.

### 3. Easter Egg
- **What:** Occasionally, a special message appears in the facts panel, celebrating the user's discovery.
- **How:** Controlled by a random chance (60% - if you want to get it, try refreshing. it will disappear after going to the next fact) in the FactPanel's logic, using Svelte's reactivity.


### 5. Interactive Animal Scene
- **What:** On the `/meetup` page, users interact with a snow pile to reveal a snow leopard cub. Dialogue changes based on user actions, and a star effect appears when the cub is found. 
        -If you dont click on the snow pile, it will change dialogue. 
        -After you do, It will only change each time you click on [Panthuncia], and give you stars too.
- **How:** Uses Svelte 5's `effect` rune for global side effects (star animation). Dialogue logic is managed with state variables and event handlers.

### 6. ZooBanner Component
- **What:** A banner at the top of every page. -> requirement
- **How:** Imported in the global layout (`+layout.svelte`) for compliance. (I had to change the color, sorry)

### 7. Responsive & Accessible Design
- **What:** All elements are styled for mobile and desktop.
- **How:** Buttons and navigation controls are accessible.

## Svelte 5 Runes Usage
- `state`, `derived`, and `effect` runes are used in both the main page and interactive animal scene for reactivity and side effects.

## How to Run
1. Clone the repo
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Open in your browser and explore!

## Credits
See the footer for vector and image credits. All assets used with permission or under free licenses. <<I Used vectors from Vecteezy>>

---
Enjoy learning about Panthera uncia and help protect this incredible species!
