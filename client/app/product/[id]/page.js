import Link from "next/link";
export default async function Product({ params }) {

  const { id } = await params;

  return (
    <div className="  flex items-center  justify-center">
      <h1 className="text-4xl font-bold">this is the product page {id} 🚀</h1>
      <Link className="text-2xl font-bold bg-green-400 p-2 mt-4 rounded" href="/">Home</Link>
    </div>
  );
}