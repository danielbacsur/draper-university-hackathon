"use client";

import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Page() {
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

export default async function Scrollable() {
  return (
    <div className="w-full h-screen">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls infinite damping={0.1} pages={4} distance={1}>
            <Scroll html>
              <div className="absolute -translate-y-full">
                <Page />
              </div>
              <div className="absolute">
                <Page />
              </div>
              <div className="absolute translate-y-full">
                <Page />
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
