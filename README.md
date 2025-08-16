
# Panthera-Uncia: The Snow Leopard Interactive Zoo Exhibit

Welcome to Panthera-Uncia, a SvelteKit project for YSWS Hack Club, The Zoo! We have our snow leopard (Panthera uncia - I called him Panthuncia), facts about them, some "animations"(I tried), and *responsive*, doesn't look bad on mobile, I really tried my best. Explore, learn, and interact with the snow leopard [Pantuncia].

## Project Overview
Panthera-Uncia is all about celebrating the snow leopard. Here’s what you’ll find:
- **Dynamic facts panel** (powered by JSON, not hardcoded!)
- **Animated snow effect** (just click the snowflake!)
- **Interactive animal scene** (pet the cub, reveal secrets, see stars)
- **Easter egg** (rare, random, and rewarding)
- **Responsive design** (looks great on mobile and desktop)
- **Svelte 5 runes** (`$state`, `$derived`, `$effect`) for true reactivity
- **ZooBanner** on every page

---

## Interactive Features (How I Earned My Mynts!)

### 1. Snow Effect Button ❄️
- **What:** A floating snowflake button in the corner. Click it and watch a magical snowstorm sweep across the screen for a few seconds. Keyboard and screen reader friendly!
- **How:** Svelte state, timers, and a sprinkle of CSS. Try it on mobile too!

### 2. Animated Data Cards 📊
- **What:** Stats about snow leopards (population, leap, range, etc.) count up as you scroll. Hover for a little bounce!
- **How:** IntersectionObserver triggers the animation. Svelte handles the counting and reactivity.

### 3. Moving "Vulnerable" Tag 🏷️
- **What:** A tag that vibrates and moves, highlighting the snow leopard’s conservation status.
- **How:** CSS animation and a styled span.

### 4. Dynamic Facts Panel 🧠
- **What:** Learn cool facts about Panthuncia! Navigate with previous/next buttons and see your progress. When you’ve seen all the facts, a special button unlocks the interactive page.
- **How:** Facts are loaded from a JSON file. Progress is tracked with `$state` and `$derived`. No hardcoded facts!

### 5. Easter Egg 🥚
- **What:** Sometimes, a secret message pops up in the facts panel. It’s a rare event (60% chance) and disappears after you move to the next fact. Try refreshing to find it!
- **How:** Random chance logic and Svelte reactivity.

### 6. Interactive Animal Scene 🐾
- **What:** On the `/meetup` page, interact with Panthuncia’s world:
        - Click the snow pile to reveal the cub.
        - Dialogue changes based on your actions (external stimulus: clicks; internal stimulus: random chance, time).
        - Pet the cub and watch stars appear!
        - If you don’t click the snow pile, the dialogue changes in a different way.
- **How:** All logic managed with `$state`, event handlers, and Svelte’s `$effect` for side effects.

### 7. ZooBanner Component 🦁
- **What:** The official ZooBanner is imported and displayed at the top of every page (not copy-pasted!).
- **How:** Imported in the global layout (`+layout.svelte`).

### 8. Responsive & Accessible Design 📱
- **What:** Everything adapts to mobile and desktop. Buttons are big, navigation is easy, and all controls are accessible.
- **How:** Media queries, semantic HTML, and ARIA labels.

### 9. Svelte 5 Runes Everywhere ⚡
- **What:** `$state`, `$derived`, and `$effect` are used in both the main page and the interactive animal scene. Effects have unique purposes (title changes, progress tracking, etc.).
- **How:** See the code for runes in action!

---

## How to Run
1. Clone the repo
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Open in your browser and explore!

---

## Credits
See the footer for vector and image credits. All assets used with permission or under free licenses. (Big thanks to Vecteezy!)

---

Enjoy learning about Panthera uncia and help protect this incredible species! If you have feedback or want to see more features, let me know. 🐾
