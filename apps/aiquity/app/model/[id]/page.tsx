import { Dashboard } from "./client";
import { auth } from "@/auth";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const session = await auth();

  return <Dashboard session={session} params={params} />;
}
