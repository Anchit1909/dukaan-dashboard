import { Header } from "@/components/Header";
import { Overview } from "@/components/Overview";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { TransactionTable } from "@/components/TransactionTable/TransactionTable";

export default function Home() {
  return (
    <main className="flex w-full">
      <Sidebar />
      <div className="flex w-full flex-col bg-stone-100">
        <Header />
        <Overview />
        <TransactionTable />
      </div>
    </main>
  );
}
