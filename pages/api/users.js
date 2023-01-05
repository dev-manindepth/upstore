import db from "../../utils/db";

export default function handler(req, res) {
  db.connectDB();
  return res.status(200).json({ message: "Welcome to upstore" });
}
