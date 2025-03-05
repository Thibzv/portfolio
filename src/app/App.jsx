import React from "react";
import { createRoot } from "react-dom/client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const App = () => {
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -5,
        width: "100%",
        height: "100%",
      }}
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=4.5&cPolarAngle=90&cameraZoom=1&color1=%23F4F9FF&color2=%23F4F9FF&color3=%23FFFFFF&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=3&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uAmplitude=0&uDensity=2.4&uFrequency=5.5&uSpeed=0.2&uStrength=3&uTime=0&wireframe=false"
      />
    </ShaderGradientCanvas>
  );
};

export default App;

const canvas = createRoot(document.getElementById("canvas"));
canvas.render(<App />);
