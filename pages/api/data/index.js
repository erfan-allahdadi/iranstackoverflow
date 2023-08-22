import User from "@/models/userModel";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  await connectDB();

  const name = req.body.name;

  // const user = new User({name})
  // await user.save()

  const user = await User.create({ name });
}
