import { User, Tie, db } from './model.js'

const user1 = await User.findOne({ include: Tie })
const tie1 = await Tie.findOne()

// associate tie1 with user1 (make tie1 belong to user1):
// await user1.addTie(tie1)

console.log(await user1.getTies()) // sends a new query to db for all ties associated with user object
console.log(user1.ties) // no new query, but must 'eager load' user object with ties ({ include: Tie })
console.log(tie1)

await db.close()