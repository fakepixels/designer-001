import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Hello World</h1>
      <div className="flex flex-col space-y-4">
        <Button variant="default">Welcome to Canva</Button>
      </div>
    </main>
  );
}
