"use client";

import { ScrollControls, Scroll } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import ReactDOM from "react-dom";

function Content() {
  return (
    <>
      <div className="h-screen w-screen grid place-items-center bg-red-500 text-4xl">
        Red
      </div>
      <div className="h-screen w-screen grid place-items-center bg-blue-500 text-4xl">
        Blue
      </div>
      <div className="h-screen w-screen grid place-items-center bg-green-500 text-4xl">
        Green
      </div>
    </>
  );
}

export default function OffScreenHeightMeasurer() {
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const offScreenDiv = document.createElement("div");
    offScreenDiv.style.position = "absolute";
    offScreenDiv.style.left = "-9999px";
    offScreenDiv.style.width = "100%";
    document.body.appendChild(offScreenDiv);

    ReactDOM.render(<Content  />, offScreenDiv, () => {
      setPages(offScreenDiv.offsetHeight / window.innerHeight);
      ReactDOM.unmountComponentAtNode(offScreenDiv);
      document.body.removeChild(offScreenDiv);
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls infinite damping={0.1} pages={pages + 1} distance={1}>
            <Scroll html>
              <div className="absolute -translate-y-full">
                <Content />
              </div>
              <div className="absolute">
                <Content />
              </div>
              <div className="absolute translate-y-full">
                <Content />
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
