import { planets } from "@/data";
import { notFound } from "next/navigation";
import Modal from "./modal";

const Page = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params;
  const planet = planets.find((planet) => planet.name === name);
  if (!planet) {
    notFound();
  }

  return <Modal planet={planet} />;
};
 
export default Page;