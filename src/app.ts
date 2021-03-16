import express from "express";
import localStorage from "localStorage";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send(
    "Welcome, \n /increment for adding number \n /decrement for minus number"
  );
});
app.get("/increment", (req, res) => {
  let num = localStorage.getItem("num");
  if (!num) {
    localStorage.setItem("num", 1);
    num = 1;
  } else {
    localStorage.setItem("num", parseInt(num) + 1);
    num++;
  }
  res.send("Your number : " + parseInt(num));
});
app.get("/decrement", (req, res) => {
  let num = localStorage.getItem("num");
  if (!num) {
    localStorage.setItem("num", 0);
    num = 0;
  } else {
    localStorage.setItem("num", parseInt(num) - 1);
    num--;
  }
  res.send("Your number : " + parseInt(num));
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
