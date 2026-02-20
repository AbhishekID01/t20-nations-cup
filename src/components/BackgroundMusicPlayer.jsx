import { useEffect, useState, useRef, useCallback } from "react";
import { Howl } from "howler";
import LowerThirdNotification from "./LowerThirdNotification";

// Mock music tracks (replace with actual URLs for your hosted audio files!)
// Howler.js requires actual audio file URLs (e.g., .mp3, .ogg, .wav).
const mockMusicTracks = [
  {
    id: 1,
    title: "Epic  Anthem",
    artist: "Game Soundz",
    url: "/music/sport1.mp3",
  }, // **Replace this URL!**
  {
    id: 2,
    title: "Stadium Rock Groove",
    artist: "Sports Tunes Inc.",
    url: "/music/sport2.mp3",
  }, // **Replace this URL!**
  {
    id: 3,
    title: "Victory Fanfare",
    artist: "Championship Audio",
    url: "/music/sport3.mp3",
  }, // **Replace this URL!**
];

/**
 * Component to manage background music playback using Howler.js
 * and display current song via a lower third notification.
 */
const BackgroundMusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentSongTitle, setCurrentSongTitle] = useState("");
  const [showLowerThird, setShowLowerThird] = useState(false);

  // useRef to store Howl instances for the playlist
  const playlistRef = useRef([]);
  // useRef to track if audio has started due to user interaction
  const audioStartedRef = useRef(false);

  // Function to play the next track in the playlist
  const playNextTrack = useCallback(() => {
    // If not all tracks are loaded, or if playlist is empty, do nothing
    if (
      playlistRef.current.length === 0 ||
      !playlistRef.current[currentTrackIndex]
    ) {
      return;
    }

    // Stop the currently playing track if any
    const prevTrack = playlistRef.current[currentTrackIndex];
    if (prevTrack && prevTrack.playing()) {
      prevTrack.stop();
    }

    const nextIndex = (currentTrackIndex + 1) % mockMusicTracks.length;
    setCurrentTrackIndex(nextIndex);

    const nextTrackData = mockMusicTracks[nextIndex];
    const nextHowl = playlistRef.current[nextIndex];

    if (nextHowl) {
      nextHowl.play();
      setCurrentSongTitle(nextTrackData.title);
      setShowLowerThird(true);

      // Hide notification after 4 seconds (GSAP animation duration + buffer)
      setTimeout(() => {
        setShowLowerThird(false);
      }, 4000); // Matches GSAP's 4s delay + animation
    }
  }, [currentTrackIndex]); // playNextTrack depends on currentTrackIndex

  useEffect(() => {
    // Initialize Howl instances for each track in the playlist
    playlistRef.current = mockMusicTracks.map((track) => {
      const howl = new Howl({
        src: [track.url],
        volume: 0.1, // Lower volume for background music
        loop: false, // Tracks should not loop individually
        html5: true, // Use HTML5 Audio for better compatibility
      });

      // Attach 'end' event listener to play the next track
      howl.on("end", () => {
        playNextTrack();
      });
      return howl;
    });

    //🔷 Start audio on user interaction
    const startInitialAudio = () => {
      if (!audioStartedRef.current && playlistRef.current.length > 0) {
        const firstTrackData = mockMusicTracks[0];
        const firstHowl = playlistRef.current[0];

        if (firstHowl) {
          firstHowl.play();
          setCurrentSongTitle(firstTrackData.title);
          setShowLowerThird(true);
          setTimeout(() => setShowLowerThird(false), 4000); // Hide after animation

          audioStartedRef.current = true; // Mark audio as started
        }
      }
    };

    // Add event listeners to start audio on any user interaction
    document.documentElement.addEventListener("click", startInitialAudio, {
      once: true,
    });
    document.documentElement.addEventListener("keydown", startInitialAudio, {
      once: true,
    });

    // Cleanup function: unload all sounds when the component unmounts
    return () => {
      document.documentElement.removeEventListener("click", startInitialAudio);
      document.documentElement.removeEventListener(
        "keydown",
        startInitialAudio
      );
      playlistRef.current.forEach((howl) => howl.unload());
      playlistRef.current = [];
    };
  }, [playNextTrack]); // Add playNextTrack to dependencies to ensure it's up-to-date

  return (
    // Render the LowerThirdNotification component
    <LowerThirdNotification
      songTitle={currentSongTitle}
      isVisible={showLowerThird}
    />
  );
};

export default BackgroundMusicPlayer;
