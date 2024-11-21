import { planets } from "@/data";
import { notFound } from "next/navigation";
import Planet from "@/components/planet";

const Page = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params;
  const planet = planets.find((planet) => planet.name === name);
  if (!planet) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <Planet planet={planet} />
    </div>
  );
};
 
export default Page;