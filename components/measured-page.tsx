import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/section-header";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ViralLoops } from "./viral-loops";

export function MeasuredPage() {
  return (
    <>
      <main>
        <section className="min-h-screen grid place-items-center">
          <PageHeader>
            <PageHeaderHeading>Trade And Invest In AI Models</PageHeaderHeading>
            <PageHeaderDescription>
              Tokenize AI models, enable investors to acquire model shares, and
              distribute equity based on usage. Access Hugging Face's vast AI
              model library
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
              <Button variant="outline">Get Started</Button>
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
