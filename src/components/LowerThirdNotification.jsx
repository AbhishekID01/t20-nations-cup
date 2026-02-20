import { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import { Music } from "lucide-react";

/**
 * Component to display a song title as a lower-third notification,
 * animating its entrance and exit using GSAP.
 */
const LowerThirdNotification = ({ songTitle, isVisible }) => {
  const notificationRef = useRef(null); // Ref for the notification div

  useEffect(() => {
    const el = notificationRef.current;
    if (!el) return;

    // Always kill any existing animations on this element to prevent conflicts
    gsap.killTweensOf(el);

    if (isVisible && songTitle) {
      // Animate in: slide from left, fade in
      gsap.fromTo(
        el,
        { x: "-100%", opacity: 0 }, // Start position: off-screen left, invisible
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" } // End position: fully visible
      );
    } else {
      // Animate out: slide back left, fade out
      // This will run when isVisible becomes false, ensuring smooth exit
      gsap.to(el, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        // We no longer need 'delay' or 'clearProps' here; the parent component
        // (BackgroundMusicPlayer) will manage the duration 'isVisible' is true.
      });
    }

    // Cleanup function to kill animations when component unmounts or dependencies change
    return () => {
      gsap.killTweensOf(el);
    };
  }, [isVisible, songTitle]); // Re-run effect when visibility or song title changes

  return (
    <div
      ref={notificationRef}
      className={`
        fixed bottom-8 left-8 p-4 bg-card dark:bg-gray-800 text-foreground dark:text-white 
        rounded-lg shadow-xl flex items-center space-x-3 z-50
      `}
      style={{
        // Initial hidden state, GSAP will override these on animation
        transform: "translateX(-100%)",
        opacity: 0,
        minWidth: "250px", // Maintain min-width for consistent layout
      }}
      aria-live="polite" // Announce changes to screen readers
      aria-atomic="true"
    >
      {/* Music Icon */}
      <Music className="text-primary dark:text-emerald-400" />
      {/* Song Title */}
      <span className="font-semibold text-xl font-[Bebas_Neue] tracking-wider">
        {songTitle}
      </span>
    </div>
  );
};

export default LowerThirdNotification;
