import express from "express";
import { userschema, adminSchema } from "./schemas.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
}

app.post("/register", async (req, res) => {
  const { name, email, password, dob, gen } = req.body;
  if (name && email && password && dob && gen) {
    const age = calculateAge(dob);
    const oldUser = await userschema.findOne({ email });
    if (oldUser) {
      res.status(400).send({
        error: {
          code: 498,
          msg: "This email is already associated with us.",
        },
      });
    } else {
      const user = new userschema({
        name,
        email,
        password,
        dob,
        gen,
        age,
      });
      const result = await user.save();

      res.status(201).send({
        name: result.name,
        email: result.email,
        dob: result.dob,
        gen: user.gen,
        age: user.age,
      });
    }
  } else {
    res.status(200).send({
      error: {
        code: 498,
        msg: "All fields are mandatory.",
      },
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = await userschema.findOne({ email });
    if (user) {
      const isAuthourized = password == user.password;
      if (isAuthourized) {
        res.status(201).send({
          name: user.name,
          email: user.email,
          dob: user.dob,
          gen: user.gen,
          age: user.age,
        });
      } else {
        res.status(200).send({
          error: {
            code: 498,
            msg: "wrong password.",
          },
        });
      }
    } else {
      res.status(200).send({
        error: {
          code: 498,
          msg: "This email does not associated with us.",
        },
      });
    }
  } else {
    res.status(200).send({
      error: {
        code: 498,
        msg: "All fields are mandatory.",
      },
    });
  }
});

app.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await adminSchema.findOne({ username });
  if (admin && username == admin.username && password == admin.password) {
    res.status(201).send({ msg: "admin login successfully.", data: admin });
  } else {
    res.status(300).send("something went wrong.");
  }
});

// app.post("/admin/login/add", async (req, res) => {
//   const { username, password } = req.body;
//   const admin = new adminSchema({
//     username,
//     password,
//   });

//   const data = await admin.save();
//   res.send(data);
// });

app.get("/admin/getAll", async (req, res) => {
  const data = await userschema.find();
  if (data) {
    res.send(data);
  }
});

app.listen(5000, () => {
  console.log("express: 5000");
});
