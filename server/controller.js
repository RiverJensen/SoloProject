import { User, Tie, db } from "../database/model.js";

let globalId = 5;

const handlerFunction = {
  getUserInfo: async (req, res) => {
    const usersData = await User.findAll();
    res.send(usersData);
  },

  getTieInfo: async (req, res) => {
    const tieData = await Tie.findAll();
    res.send(tieData);
  },

  getTieByUser: async (req, res) => {
    const userID = req.params.userId;
    const userTies = await Tie.findAll({
      where: {
        userId: userID,
      },
    });

    res.send(userTies);
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    console.log(username);
    console.log(password);
    console.log("session data", req.session);
    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      res.json({
        message: "No username found",
        status: 404,
        userId: "",
      });
      return;
    } else if (user && user.password === password) {
      req.session.user = user;

      res.json({
        message: "Login successful",
        status: 200,
        userId: user.userId,
      });
      return;
    }

    res.json({
      message: "Password incorrect",
      status: 401,
      userId: "",
    });
    return;
  },

  register: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const NewReg = await User.create({
      username: username,
      password: password,
    });
    req.session.user = NewReg;

    res.json({
      message: "Creat successful",
      userId: NewReg.userId,
    });

    // db.query("INSERT INTO User (username, password) VALUES (?,?)", [username,password],
    // (err,result) => {
    //     console.log(err)
    // })
    // res.send('test')
  },

  addTie: async (req, res) => {
    const username = req.body.username;
    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    user.username = req.body.username;
    user.name = req.body.name;

    const newObj = {
      userId: globalId,
      name: req.body.name,
      username: username,
      tier: req.body.tier,
      color: req.body.color,
      length: req.body.length,
      imgUrl: req.body.imgUrl,
    };

    const addNewTie = await User.findAll();
    addNewTie.push(newObj); //not sure if this is how to do it

    globalId++;
    res.send(newObj);
  },

  editTie: async (req, res) => {
    const changTie = await User.findAll();

    const { userId } = req.params;
    const { imgUrl, length, color, tier, username, name } = req.body;

    const index = changTie.findIndex((invoice) => invoice.userId == userId);
    const tieNumberIndex = changTie[index];

    tieNumberIndex.imgUrl = imgUrl;
    tieNumberIndex.length = +length;
    tieNumberIndex.color = color;
    tieNumberIndex.tier = tier;
    tieNumberIndex.username = username;
    tieNumberIndex.name = name;

    res.send(tieNumberIndex);
  },

  GetTieBySessionUser: async (req, res) => {
    if (req.session.user) {
      const ties = await Tie.findAll({
        where: {
          userId: req.session.user.userId,
        },
      });

      res.send({
        username: req.session.user.username,
        userTies: ties,
      });
    } else {
      res.send({ message: "no user in session" });
    }
  },
};

export default handlerFunction;
