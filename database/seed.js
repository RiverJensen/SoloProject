import { Op } from "sequelize";
import {User,Transfer ,Server, db} from "./model.js";

await db.sync({ force: true })

const FakeJohn = await User.create({

    name: 'FakeJohn',
    
    username: 'Fake_John123',
    
    tier: 'Gold',

    color: 'Red',

    length: 12,

    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_lZziU2ZsWEyWCwnvCqxzElEvskSpJybkEhEth2h3hs39XntcBh5ezZnuoXN2SkpKo4&usqp=CAU'

})

const FakeMike = await User.create({

    name: 'FakeMike',
    
    username: 'Fake_John321',
    
    tier: 'Silver',

    color: 'blue',

    length: 32,

    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_lZziU2ZsWEyWCwnvCqxzElEvskSpJybkEhEth2h3hs39XntcBh5ezZnuoXN2SkpKo4&usqp=CAU'

})



await db.close()