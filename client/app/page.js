import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex items-center flex-col justify-center">
      <h1 className="text-4xl font-bold">Hello Next.js 🚀</h1>
      <Link className="text-2xl font-bold bg-green-400 p-2 mt-4 rounded" href="/about">About</Link>
    </div>
  );
}
