import Link from "next/link";

export default function About() {
  async function saveData(formData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");

    console.log("Name:", name);
    console.log("Email:", email);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
      <h1 className="text-4xl font-bold">
        This is the About Page 🚀
      </h1>

      <form action={saveData} className="flex flex-col gap-3">
        <input
          className="border p-2"
          name="name"
          type="text"
          placeholder="Enter your name"
        />

        <input
          className="border p-2"
          name="email"
          type="email"
          placeholder="Enter your email"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>

      <Link
        className="text-2xl font-bold bg-green-400 p-2 rounded"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}