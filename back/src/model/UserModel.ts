import mysl2 = require("mysql2");
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { Query } from "mysql2/typings/mysql/lib/protocol/sequences/Query";

const conneection: Connection = mysl2.createConnection({
  host: "localhost",
  user: "root",
  password: "rosadesangue123",
  database: "students_becker",
});

conneection.connect((err: any) => {
  if (err) throw err;
  console.log("Connected!");
});

class UserModel {
  constructor() {}

 public store(
    name: string,
    sobrenome: string,
    year: number,
    month: number,
    day: number,
    password: string,
    gen: string,
    email: string
  ) {
    const sql: string =
      "INSERT INTO students (name, sobrenome,year_born,month_born,day_born,password,gen,email) VALUES(?,?,?,?,?,?,?,?);";

    const sq2: string =
      "INSERT INTO students (name, sobrenome,year_born,month_born,day_born,password,gen,email) VALUES(" +
      name +
      "," +
      sobrenome +
      "," +
      year +
      "," +
      month +
      "," +
      day +
      "," +
      password +
      "," +
      gen +
      "," +
      email +
      ");";
    const values = [name, sobrenome, year, month, day, password, gen, email];

    conneection.query(sql, values, (err) => {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }

  public async find(email: string, password: string):Promise<any>{
    const sql: string = `SELECT  name,sobrenome,year_born,gen,password  FROM students where email LIKE '%${email}%'`;


    return new Promise((resolve, reject) =>
      conneection.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
        //  return date = result;
      })
    );

  }
}

export default new UserModel();
