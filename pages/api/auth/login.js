import { connectToDatabase } from "../../../util/mongodb";
import bcrypt from "bcryptjs";
export default async (req, res) => {
  if (req.method == "POST") {
    const { db } = await connectToDatabase();
    let userData = await db
      .collection("userData")
      .find({ username: req.body.username })
      .limit(1)
      .toArray();
    if (userData.length == 0) {
      res.status(202).send("username");
    } else {
      bcrypt.compare(
        req.body.password,
        userData[0].password,
        function (err, result) {
          if (result) {
            userData.images = [];
            res.status(200).send(userData);
          } else {
            res.status(202).send("password");
          }
        }
      );
    }
  } else {
    res.status(202).json("error");
  }
};
