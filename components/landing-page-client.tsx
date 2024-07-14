"use client";

import { MeasuredPageWrapper } from "@/components/measured-page";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import ReactDOM from "react-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Session } from "next-auth";
import Link from "next/link";

export function LandingPageClient({ session }: { session: Session | null }) {
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
    <>
      <div className="fixed top-12 left-12">
        <Image src="/logo.png" alt="Logo" width={48} height={48} />
      </div>
      <div className="hidden lg:flex fixed top-12 right-12 text-left text-xs leading-normal z-10 space-x-6 items-center">
        <Button variant="link" size="sm" className="px-0" asChild>
          <Link href="/marketplace">Marketplace</Link>
        </Button>
        <Avatar>
          <AvatarImage
            src={session?.user?.image || ""}
            alt={session?.user?.name
              ?.split(" ")
              .slice(0, 2)
              .map((name) => name[0])
              .join("")}
          />
          <AvatarFallback>
            {session?.user?.name
              ?.split(" ")
              .slice(0, 2)
              .map((name) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="hidden lg:block fixed bottom-12 left-12 text-left text-xs leading-normal z-10">
        <div className="font-bold">Decentralized AI for Everyone</div>
        <div>building a cheaper and better future_</div>
      </div>
      <div className="hidden lg:block fixed bottom-12 right-12 text-right text-xs leading-normal z-10">
        <div className="font-bold">All rights reserved &copy; 2024</div>
        <div>&gt; in collaboration with @huggingface</div>
      </div>
      <div className="w-full h-screen">
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <ScrollControls
              infinite
              damping={0.2}
              pages={pages + 1}
              distance={1}
            >
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
    </>
  );
}
