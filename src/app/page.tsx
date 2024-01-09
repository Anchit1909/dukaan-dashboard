import Footer from "@/components/Navigation/Footer";
import { Header } from "@/components/Navigation/Header";
import { Overview } from "@/components/Overview/Overview";
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
        <Footer />
      </div>
    </main>
  );
}
