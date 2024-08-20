import userModel from "../model/UserModel";
import bcrypt = require("bcrypt");
import crypto = require("crypto");

class UserLoginController {
  public async store(req: any, res: any) {
    let msg = "";
    try {
      const { email = "", password = "" }: any = req.body;
      if (!email || !password){
        msg = "Please provide email and password";
        throw Error;
      }
      const user = await userModel.find(email, password);
      console.log(user);
      if (user.length === 0 ) {
        console.log("od");
        msg = "Email incorrect";
        throw Error;
      }

      const hashedPassword = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
      console.log(hashedPassword);
      if (!(hashedPassword === user[0].password)) {
        msg = "Password incorrect";
        throw Error;
      }

      user.password = "";

      res.status(200).json({
        user: user,
        enter: true,
      });
    } catch (e) {
      console.error(e);
      res.status(404).json({
        message: msg,
        enter: false,
      });
    }
  }
}

export default new UserLoginController();
