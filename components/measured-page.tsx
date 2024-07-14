import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/section-header";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ViralLoops } from "./viral-loops";
import { signInWithGoogle } from "@/actions/auth";

export function MeasuredPage() {
  return (
    <>
      <main>
        <section className="min-h-screen  grid place-items-center">
          <PageHeader>
            <PageHeaderHeading>Trade & Invest In AI Models</PageHeaderHeading>
            <PageHeaderDescription className="font-sans">
              Tokenize AI models, enable investors to acquire model shares, and
              distribute equity based on usage. Deploy and trade
              HuggingFace&trade; models in minutes and start earning.
            </PageHeaderDescription>
            <PageActions>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Join Now</Button>
                </DialogTrigger>
                <DialogContent className="p-0 bg-transparent border-none">
                  <ViralLoops ucid="acpGNiK3NioYynVD71NEwqc71sU" />
                </DialogContent>
              </Dialog>
              <Button variant="outline" onClick={() => signInWithGoogle()}>
                Get Started
              </Button>
            </PageActions>
          </PageHeader>
        </section>
      </main>
    </>
  );
}

export function MeasuredPageWrapper() {
  return (
    <div className="w-screen relative">
      <MeasuredPage />
    </div>
  );
}
