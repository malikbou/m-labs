import Link from "next/link";

export default function Home() {
  const variants = [1, 2, 3, 4, 5];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-2xl font-light tracking-tight">m.</h1>
      <p className="text-muted-foreground text-sm">design variants</p>
      <nav className="flex gap-4">
        {variants.map((n) => (
          <Link
            key={n}
            href={`/${n}`}
            className="w-12 h-12 flex items-center justify-center border border-border rounded-md text-sm hover:bg-accent transition-colors"
          >
            {n}
          </Link>
        ))}
      </nav>
    </main>
  );
}
