// @ts-nocheck

"use client";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/section-header";
import Image from "next/image";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import seedrandom from "seedrandom";
import Link from "next/link";

const months = ["J9", "J10", "J11", "J12", "J13", "J14"];

const generateRandomChartData = (downloads: number) => {
  const rng = seedrandom(downloads.toString());
  const data = [];
  for (let i = 0; i < 6; i++) {
    data.push({
      month: months[i],
      desktop: Math.floor(rng() * 1000),
    });
  }
  return data;
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function MarketplacePage() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchModels() {
      try {
        const response = await fetch(
          "https://huggingface.co/api/models?sort=downloads&direction=-1&filter=text-generation&limit=100"
        );
        const data = await response.json();
        setModels(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching models:", error);
        setLoading(false);
      }
    }

    fetchModels();
  }, []);

  return (
    <>
      <div className="absolute -top-40 left-0 w-full aspect-video">
        <img src="/upper.svg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col min-h-[100dvh] md:pt-16 lg:pt-24">
        <main className="flex-1">
          <section className="px-4">
            <PageHeader>
              <PageHeaderHeading>Marketplace</PageHeaderHeading>
              <PageHeaderDescription className="font-sans">
                Explore Our diverse ecosystem of AI models, from
                state-of-the-art language processors to specialized industry
                solutions. Invest and earn Bitcoin rewards through our secure,
                decentralized network.
              </PageHeaderDescription>
            </PageHeader>
          </section>
          <section className="container px-4 md:px-6 pb-8 md:pb-8 lg:pb-20 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {models.map((model) => (
                  <Link href={"/model/" + model._id}>
                    <Card className="" key={model.id}>
                      <CardHeader>
                        <CardTitle className="whitespace-nowrap overflow-hidden mask-gradient">{model.id}</CardTitle>
                        <CardDescription>
                          downloads: {model.downloads} likes: {model.likes}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer config={chartConfig}>
                          <LineChart
                            accessibilityLayer
                            data={generateRandomChartData(model.downloads)}
                            margin={{
                              left: 12,
                              right: 12,
                            }}
                          >
                            <CartesianGrid vertical={false} />
                            <XAxis
                              dataKey="month"
                              tickLine={false}
                              axisLine={false}
                              tickMargin={8}
                              tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                              cursor={false}
                              content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                              dataKey="desktop"
                              type="linear"
                              stroke="var(--color-desktop)"
                              strokeWidth={2}
                              dot={false}
                            />
                          </LineChart>
                        </ChartContainer>
                      </CardContent>
                      <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                          Trending up by {
                            Math.round(
                              model.downloads / model.likes / 100
                            ) / 10
                          }%
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground flex gap-4 w-full">
                          <Button asChild  variant="secondary" className="pointer-events-auto z-30">
                            <Link className="w-full" href={"/model/" + model._id}>
                              Deploy
                            </Link>
                          </Button>
                          <Button asChild  className="pointer-events-auto z-30">
                            <Link className="w-full" href={"/model/" + model._id}>
                              Invest
                            </Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
              ))}
            </div>
          </section>
        </main>
        <section className="px-4 md:px-6 pb-8 md:pb-8 lg:pb-20"></section>
      </div>
    </>
  );
}
