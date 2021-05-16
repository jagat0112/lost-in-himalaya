const collabsible = document.querySelectorAll(".collapsible");

collabsible.forEach((c) => {
  c.addEventListener("click", function () {
    this.classList.toggle("collapsible--active");
  });
});

// const person = {
//   name: "norgen",
//   hobbies: ["a", "b"],
//   age: 10,
//   change(name) {
//     this.name = name;
//   },
//   hob: [1, 2, 3],

//   greet() {
//     this.hobbies.forEach(
//       function (hob) {
//         console.log(hob);
//       }.bind(this)
//     );
//   },
// };

// person.greet();

// callPerson();

// function CallingAnother(name) {
//   this.name = name;
//   this.calling = () => {
//     console.log(this.name);
//   };
// }

// const action = new CallingAnother("jagat shrestha");
// action.calling();

// const callPerson = (nam) => {
//   return {
//     nam,
//     calling: () => {
//       console.log(nam);
//     },
//   };
// };
// const callAnu = callPerson("Anu");
// callAnu.calling();

// function CallPerson2(nam) {
//   this.nam = nam;
//   this.calling = () => {
//     console.log(nam);
//   };
//   this.greet = () => {
//     console.log(`Hello ${name}`);
//   };
// }
// const calls = new CallPerson2("krishan pradhan");
// const calls1 = new CallPerson2("mami");

// calls.calling();
// calls.greet();
