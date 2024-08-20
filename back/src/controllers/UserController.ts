import userModel from "../model/UserModel";
import bcrypt = require("bcrypt");
import crypto = require('crypto')

class UserController {
  public async store(req: any, res: any) {
    try {
      let { name, age, sobrenome, year, month, day, password, gen,email} = req.body;
      console.log(email);
      age = parseInt(age);
      year = parseInt(year);
      day = parseInt(day);

      const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
      console.log(hashedPassword);

      await userModel.store(name, sobrenome, year, month, day, hashedPassword, gen,email);
      res.status(200).json({
        message: "User created successfully",
        enter: true,
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "An error occurred while creating the user",
        enter: false,
      });
    }
  }

    
}

export default new UserController();
