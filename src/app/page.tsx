import { Header } from "@/components/Header";
import { Overview } from "@/components/Overview";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex w-full">
      <Sidebar />
      <div className="flex w-full flex-col bg-stone-100">
        <Header />
        <Overview />
      </div>
    </main>
  );
}
