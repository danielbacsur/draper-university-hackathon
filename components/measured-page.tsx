import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/section-header";

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
              <Button>Get Started</Button>
              <Button variant="secondary">Learn More</Button>
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
