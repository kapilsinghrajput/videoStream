import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

// Video source
const videoSrc = {
  type: "video",
  sources: [
    {
      src: "https://stream-backend-jfgx.onrender.com/video",
      type: "video/mp4",
    },
  ],
  tracks: [
    {
      kind: "captions", // Adding captions
      label: "English",
      srclang: "en",
      src: "https://example.com/captions.vtt", // Link to captions file
      default: true,
    },
  ],
};

// Player options
const playerOptions = {
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "captions", // Captions button
    "settings", // Settings menu
    "fullscreen",
  ],
  settings: ["captions", "quality", "speed"], // Add settings options
  captions: { active: true, language: "en", update: true }, // Captions settings
  quality: {
    default: 576,
    options: [1080, 720, 576, 480, 360], // Video quality options
  },
  speed: {
    selected: 1, // Default playback speed
    options: [0.5, 0.75, 1, 1.25, 1.5, 2], // Available playback speeds
  },
};

export default function App() {
  return (
    <div style={{ position: "relative", width: "60%", height: "400px" }}>
      <MyComponent />
    </div>
  );
}

export const MyComponent = () => {
  return (
    <div>
      <Plyr source={videoSrc} options={playerOptions} />
    </div>
  );
};
