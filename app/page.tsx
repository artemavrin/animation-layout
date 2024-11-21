import PlanetList from "@/components/planet-list";
import { planets } from "@/data";

export default function Home() {
  // fetching data from server
  return <PlanetList planets={planets} />;
}
