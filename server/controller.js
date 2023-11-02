import { User } from "../database/model.js"

let globalId = 5

const usersDataBase = await User.findAll()


const handlerFunction = {
    getUserInfo: async(req, res)  =>  {
       res.send(usersDataBase)
    },

    addTie: async(req, res) => {
        const username = req.body.username
        const newObj = {
                userId: globalId,
                name: name,
                username: username,
                tier: tier,
                color: color,
                length: length,
                imgUrl: imgUrl,
        }
        usersDataBase.push(newObj)
        globalId++
        res.send(newObj)
    }
    
}

export default handlerFunction