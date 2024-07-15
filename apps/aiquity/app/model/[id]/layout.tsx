import { TooltipProvider } from "@/components/ui/tooltip";

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
