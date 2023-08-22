import userSchema from "@/schemas/userSchema";
import { model, models } from "mongoose";

const User = models.User || model('User', userSchema);

export default User