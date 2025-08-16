// src/lib/stores/interactiveStore.js
import { writable } from 'svelte/store';

// Function to get initial state from localStorage
const getInitialState = () => {
    if (typeof window !== 'undefined') { // Check if running in browser
        const storedClicks = localStorage.getItem('pantheraClickCount');
        const storedMood = localStorage.getItem('pantheraMood');
        return {
            clickCount: storedClicks ? parseInt(storedClicks, 10) : 0,
            pantheraMood: storedMood || 'neutral'
        };
    }
    return { clickCount: 0, pantheraMood: 'neutral' }; // Default for SSR
};

// Create the writable store with initial state
const { subscribe, set, update } = writable(getInitialState());

// Custom store functions to update and persist to localStorage
export const interactiveStore = {
    subscribe,
    set, // Allows direct setting of the state if needed
    update, // Allows updating based on current state

    // Increment click count and save to localStorage
    incrementClick: () => {
        update(state => {
            const newCount = state.clickCount + 1;
            if (typeof window !== 'undefined') {
                localStorage.setItem('pantheraClickCount', newCount.toString());
            }
            return { ...state, clickCount: newCount };
        });
    },

    // Set panthera mood and save to localStorage
    setMood: (mood) => {
        update(state => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('pantheraMood', mood);
            }
            return { ...state, pantheraMood: mood };
        });
    }
};