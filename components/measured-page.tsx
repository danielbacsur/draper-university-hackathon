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
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";

export function MeasuredPage() {
  return (
    <main className="w-full relative px-4 sm:px-8">
      <section className="min-h-screen px-4 grid place-items-center relative mb-[-180px] lg:mb-0">
        <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            src="/over.svg"
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="block lg:hidden absolute top-[18vh] -translate-y-1/2 left-1/2 -translate-x-1/2">
          <Image src="/logo.png" alt="Logo" width={72} height={72} />
        </div>
        <PageHeader>
          <PageHeaderHeading>Trade & Invest in AI Models</PageHeaderHeading>
          <PageHeaderDescription className="font-sans">
            Tokenize AI models, enable investors to acquire model shares, and
            distribute equity based on usage. Deploy and trade
            HuggingFace&trade; models in minutes and start earning.
          </PageHeaderDescription>
          <PageActions>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Join the Waitlist</Button>
              </DialogTrigger>
              <DialogContent className="p-0 bg-transparent border-none">
                <ViralLoops ucid="xjpxAiuZ4LAcgVvtt6pRtUvYzZk" />
              </DialogContent>
            </Dialog>
            <Button variant="outline" onClick={() => signInWithGoogle()}>
              Get Started
            </Button>
          </PageActions>
        </PageHeader>
      </section>

      <section className="py-10 xl:py-20">
        <div className="container mx-auto max-w-full lg:max-w-[60vw] px-4 xl:px-12 grid grid-cols-1 xl:grid-cols-2 grid-rows-2 xl:grid-rows-1">
          <div className="space-y-3">
            <div className="text-sm">Key Features</div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              <Balancer>
                Unlock Cost Savings with Decentralized AI Solutions
              </Balancer>
            </h2>

            <p className="text-muted-foreground xl:text-xl/relaxed text-justify">
              AiQuity empowers you to tokenize AI models, enabling investors to
              acquire model shares and distribute equity based on usage. Access
              Hugging Face's vast AI model library, revolutionizing the way you
              leverage AI technology.
            </p>
          </div>

          <div className="grid place-items-center">
            <img
              src="/piggy.svg"
              alt="Piggy Bank"
              className="w-2/3 max-w-[250px]"
            />
          </div>
        </div>
      </section>

      <section className="py-10 xl:py-20">
        <div className="container mx-auto max-w-full lg:max-w-[60vw] px-4 xl:px-12 grid grid-cols-1 xl:grid-cols-2 grid-rows-2 xl:grid-rows-1">
          <div className="space-y-3 order-1 xl:order-2">
            <div className="text-sm">Key Features</div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              <Balancer>Maximize Your Returns with AI Investments</Balancer>
            </h2>

            <p className="text-muted-foreground xl:text-xl/relaxed text-justify">
              At AiQuity, investors can acquire shares in cutting-edge AI models
              and earn equity based on usage. Our platform empowers you to
              invest in the future of AI technology, offering attractive returns
              and Bitcoin rewards through a secure, decentralized network.
            </p>
          </div>

          <div className="grid place-items-center order-2 xl:order-1">
            <img
              src="/whale.svg"
              alt="Piggy Bank"
              className="w-2/3 max-w-[250px]"
            />
          </div>
        </div>
      </section>

      <section className="py-10 xl:py-20">
        <div className="container mx-auto max-w-full lg:max-w-[60vw] px-4 xl:px-12 grid grid-cols-1 xl:grid-cols-2 grid-rows-2 xl:grid-rows-1">
          <div className="space-y-3">
            <div className="text-sm">Key Features</div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              <Balancer>
                Monetize Your GPUs with Decentralized AI Mining
              </Balancer>
            </h2>

            <p className="text-muted-foreground xl:text-xl/relaxed text-justify">
              Put your idle GPUs to work and earn money with AiQuity. Join our
              decentralized network, support AI model operations, and receive
              Bitcoin rewards. By leveraging the collective power of user GPUs,
              AiQuity ensures efficient, transparent, and secure processing,
              benefiting AI creators and investors alike.
            </p>
          </div>

          <div className="grid place-items-center">
            <img
              src="/monke.svg"
              alt="Piggy Bank"
              className="w-2/3 max-w-[250px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
