import { User, Tie, db } from './model.js'

await Tie.create({
    imgUrl: "example.com/jpg"
})

const ties = await Tie.findAll()

console.log(ties)

await db.close()