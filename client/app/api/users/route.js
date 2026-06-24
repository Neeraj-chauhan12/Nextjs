import {connectDB} from "@/lib/db"
import User from "@/models/User"

export async function POST(request) {
  await connectDB();

  const body = await request.json();

  const user = await User.create(body);

  return Response.json(user);
}


export async function GET() {
  await connectDB();

  const users = await User.find();

  return Response.json(users);
}