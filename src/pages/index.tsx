import { HeroComponent } from "@components/home/HeroComponent";

export default function HomePage() {
  return (
    <main className="mt-32 px-20">
      <div className="flex items-center ">
        <HeroComponent />
      </div>
    </main>
  );
}
