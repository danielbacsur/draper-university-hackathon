"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MeasuredPage } from "@/components/measured-page";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Session } from "next-auth";
import Link from "next/link";

export function LandingPageClient({ session }: { session: Session | null }) {
  return (
    <main className="pb-32">
      <div className="hidden lg:block fixed top-12 left-12">
        <Image src="/logo.png" alt="Logo" width={48} height={48} />
      </div>

      <div className="hidden lg:flex fixed top-12 right-12 text-left text-xs leading-normal z-10 space-x-6 items-center">
        <Button variant="link" size="sm" className="px-0" asChild>
          <Link href="/marketplace">Marketplace</Link>
        </Button>
        {session?.user && (
          <Avatar className="hidden md:block">
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
        )}
      </div>

      <div className="hidden xl:block fixed bottom-12 left-12 text-left text-xs leading-normal z-10">
        <div className="font-bold">Decentralized AI for Everyone</div>
        <div>building a cheaper and better future_</div>
      </div>

      <div className="hidden xl:block fixed bottom-12 right-12 text-right text-xs leading-normal z-10">
        <div className="font-bold">All rights reserved &copy; 2024</div>
        <div>&gt; in collaboration with @huggingface</div>
      </div>

      <MeasuredPage />
    </main>
  );
}
