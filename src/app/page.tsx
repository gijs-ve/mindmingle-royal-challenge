import { Crown } from "@/lib/Crown";
import { LinkItems } from "@/lib/LinkItems";

export default function Home() {
  return (
    <main className="flex h-screen bg-slate-500 flex-col items-center justify-center p-24">
      <Crown />
      <input
        type="checkbox"
        className="size-48 appearance-none border-orange-900 border-2 rounded bg-red-900 checked:bg-orange-600"
      />
      <LinkItems />
    </main>
  );
}
