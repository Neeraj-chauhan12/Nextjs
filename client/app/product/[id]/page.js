import Link from "next/link";
export default async function Product({ params }) {
  const { id } = await params;
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log("api data", data);

  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="text-4xl font-bold">this is the product page {id} 🚀</h1>
      <div>
        {data.map((items) => (
          <div className="text-2xl font-bold bg-gray-400 p-2 mt-4 rounded text-white shadow-2xl shadow-black" key={items.id}>{items.id}:{items.title}</div>
        ))}
      </div>
      <Link
        className="text-2xl font-bold bg-green-400 p-2 mt-4 rounded"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}
