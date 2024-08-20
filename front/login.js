let nome = "";
let sobrenome = "";
let idade = 2024;
let dataNascimento = new Date();
let sexo = "";
class App {
  constructor() {
    this.consume = new Consume();
  }
  sendLogin() {
    const form = document.getElementById("login");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e.target);
      this.consume.login();
    });
  }
}

class Consume {
  constructor() {
    this.url = "http://localhost:3000";

    const options = {
      mode: "cors",
    };
  }

  setData(data) {
    nome = data.name;
    sobrenome = data.sobrenome;
    idade = 2024 - data.year_born;
    // dataNascimento = new Date(data.birthdate);
    sexo = data.sex;
    console.log(nome, sobrenome, idade, dataNascimento, sexo);
  }

  async login() {
    const dataAtual = new Date();
    const yearCurrent = dataAtual.getFullYear();
    try {
      const response = await fetch(this.url + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        }),
      });
    console.log(response.status); 
    const data = await response.json();
      if (response.status === 200) {
        alert(`Olá ${data.user[0].name}`);
        console.log(yearCurrent);
        alert(`Voce nasceu em ${yearCurrent - data.user[0].year_born}`);
      } else {
        alert(data.message);
        throw new Error(`Error: ${response}`);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

class MyeVue {
  constructor() {
    new Vue({
      el: "#app",
      data: {
        isLoggedIn: true,
        nome: "Kainom",
        sobrenome: "",
        idade: 2024,
        month: "Agosto",
        day: "19",
        sexo: "Male",
        email: "",
      },
      methods: {
        getData(data) {
          this.nome = data.name;
          this.sobrenome = data.lastname;
          this.idade = data.year_bor - 2024;
          this.day = data.day;
          this.sexo = data.gender;
        },
      },
      computed: {},
      watch: {},
    });
  }
}

new MyeVue();
const app = new App();
app.sendLogin();
