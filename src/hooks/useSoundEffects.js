import { useEffect, useRef, useCallback } from "react";
import { Howl } from "howler"; // Import Howl from Howler.js

/**
 * Custom hook to manage sound effects using Howler.js.
 * Provides a function to play a hover sound.
 */
const useSoundEffects = () => {
  // useRef to keep the Howl instance persistent across re-renders
  const hoverSoundRef = useRef(null);

  useEffect(() => {
    // Initialize the Howl instance for the hover sound
    // IMPORTANT: Replace this with a short, actual audio file URL (e.g., .wav or .mp3)
    // For demo purposes, we're using a placeholder URL.
    hoverSoundRef.current = new Howl({
      src: [
        "https://cdn.jsdelivr.net/gh/goldfire/howler.js@2.2.3/examples/audio/sound.mp3",
      ], // Placeholder sound, **replace with your own!**
      volume: 0.3, // Adjust volume as needed
      rate: 2, // Play faster for a 'click' feel
      html5: true, // Use HTML5 Audio for better performance on mobile/older devices
    });

    // Cleanup function: unload the sound when the component unmounts
    return () => {
      if (hoverSoundRef.current) {
        hoverSoundRef.current.unload();
        hoverSoundRef.current = null;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Callback function to play the hover sound
  const playHoverSound = useCallback(() => {
    if (hoverSoundRef.current && !hoverSoundRef.current.playing()) {
      hoverSoundRef.current.play();
    }
  }, []); // Memoize the function

  return { playHoverSound };
};

export default useSoundEffects;
