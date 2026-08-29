import { redirect } from "next/navigation";

interface CatchAllProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function CatchAllPage({ params }: CatchAllProps) {
  const { slug } = await params;
  const section = slug?.[0];

  if (section) {
    redirect(`/#${section}`);
  }

  redirect("/");
}
