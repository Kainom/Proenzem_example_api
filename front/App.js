class App {
  constructor() {
    this.consume = new Consume();
  }
  sendData() {
    const form = document.getElementById("cadastro");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e.target);
      this.consume.postDate();
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

  
  async getDateBack() {
    try {
      const coisa = await fetch(this.url, this.options);
      coisa.json().then((e) => console.log(e.data));
    } catch (e) {
      console.log(e);
      return;
    }
  }

  getFrontData() {
    const name = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const password = document.querySelector("#password");
    const email = document.querySelector("#email");
    const selectYear = document.querySelector("#ano");
    const selectMonth = document.querySelector("#mes");
    const selectDay = document.querySelector("#dia");
    const gen = document.querySelector('input[name="sex"]:checked');

    return {
      name: name.value,
      sobrenome: sobrenome.value,
      year: selectYear.value,
      month: selectMonth.value,
      day: selectDay.value,
      password: password.value,
      gen: gen.value,
      email: email.value, name: name.value,
      sobrenome: sobrenome.value,
      year: selectYear.value,
      month: selectMonth.value,
      day: selectDay.value,
      password: password.value,
      gen: gen.value,
      email: email.value,
    };
  }


  async postDate() {
    try {
      const response = await fetch(this.url + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.getFrontData()),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.location.href = 'http://127.0.0.1:5500/login.html';
      } else {
        alert(response.status);
        throw new Error(`Error: ${response.status}`);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

class MyeVue {
  constructor() {
    new Vue({
      el: "#sign",
      data: {
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        selectedNumberDay: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ],
        selectedDay: new Date().getDate(),
        selectedMounth: "",
        selectCurrenteYear: new Date().getFullYear(),
      },
      methods: {
        getCurrentMonth() {
          const monthCurrent = new Date().toLocaleString("default", {
            month: "long",
          });
          this.selectedMounth = monthCurrent;
        },
      },
      computed: {
        getYears() {
          const year = new Date().getFullYear();
          const years = [];

          for (let i = 0; i < 100; i++) {
            years.push(year - i);
          }
          return years;
        },
      },
      watch: {},
    });
  }
}

 new MyeVue();
const app = new App();
app.sendData();

