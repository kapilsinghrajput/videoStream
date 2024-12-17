

import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "https://stream-backend-jfgx.onrender.com/video",
    }
  ]
};


export default function App() {
  return (
    <div style={{ position:"relative", width:"500px", maxHeight:"100px"}}>
      <MyComponent />
    </div>
  );
}

export const MyComponent = () => {
  return (
    <div >
      <Plyr source={videoSrc}  />
    </div>
  );
};
