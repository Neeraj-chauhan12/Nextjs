import Link from "next/link";
export default function About() {
  return (
    <div className=" h-screen flex items-center bg-gray-500 justify-center">
      <h1 className="text-4xl font-bold">this is the about page 🚀</h1>
      <Link className="text-2xl font-bold bg-green-400 p-2 mt-4 rounded" href="/">Home</Link>
    </div>
  );
}