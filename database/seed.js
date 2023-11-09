import { Op } from "sequelize";
import { User, Tie, db } from "./model.js";

await db.sync({ force: true });

const FakeJohn = await User.create({
 

  username: "Fake_John123",

  password: "asd",


  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_lZziU2ZsWEyWCwnvCqxzElEvskSpJybkEhEth2h3hs39XntcBh5ezZnuoXN2SkpKo4&usqp=CAU",
});


const fakeTie = await Tie.create({

   imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_lZziU2ZsWEyWCwnvCqxzElEvskSpJybkEhEth2h3hs39XntcBh5ezZnuoXN2SkpKo4&usqp=CAU",

})
// const FakeMike = await User.create({
//   name: "FakeMike",

//   username: "Fake_John321",

//   tier: "Silver",

//   color: "blue",

//   length: 32,

//   imgUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_lZziU2ZsWEyWCwnvCqxzElEvskSpJybkEhEth2h3hs39XntcBh5ezZnuoXN2SkpKo4&usqp=CAU",
// });

await db.close();
