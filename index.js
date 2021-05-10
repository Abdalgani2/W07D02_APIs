const express = require("express");

const app = express();
const port = 5000;

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.get("/home",(req,res)=>{
//     res.send("home page")
// })

const users = [
  { name: "Ahmad", age: 20 },
  { name: "Ali", age: 28 },
];

app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});
//parameters
app.get("/users/:name", (req, res) => {
  const name = req.params.name;
  const found = users.find((element) => {
    return element.name === name;
  });
  if (found) {
      res.status(200);
    res.json(found);
  } else {
      res.status(404)
    res.json("user not found");
  }
});
//query
app.get("/user", (req, res) => {
  const age = req.query.age;
  const name = req.query.name;
  // const user ={name:name, age:age}
  const user = { name, age };
  res.json(user);
});

app.post("/creat/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const user = { name, age };

  users.push(user);
  res.status(201);
  res.json("user added");
});

app.listen(port, () => {
  console.log(`the server run on http://localhost:${port}`);
});
