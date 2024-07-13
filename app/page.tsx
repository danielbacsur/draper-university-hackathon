"use client";

import { MeasuredPageWrapper } from "@/components/measured-page";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Suspense, useState, useEffect,  } from "react";
import { Canvas } from "@react-three/fiber";
import ReactDOM from "react-dom";

export default function OffScreenHeightMeasurer() {
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const offScreenDiv = document.createElement("div");
    offScreenDiv.style.position = "absolute";
    offScreenDiv.style.left = "-9999px";
    offScreenDiv.style.width = "100%";
    document.body.appendChild(offScreenDiv);

    ReactDOM.render(<MeasuredPageWrapper />, offScreenDiv, () => {
      setPages(offScreenDiv.offsetHeight / window.innerHeight);
      ReactDOM.unmountComponentAtNode(offScreenDiv);
      document.body.removeChild(offScreenDiv);
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls infinite damping={0.2} pages={pages + 1} distance={1}>
            <Scroll html>
              <div className="absolute -translate-y-full">
                <MeasuredPageWrapper />
              </div>
              <div className="absolute">
                <MeasuredPageWrapper />
              </div>
              <div className="absolute translate-y-full">
                <MeasuredPageWrapper />
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
