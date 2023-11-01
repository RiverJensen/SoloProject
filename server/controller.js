import { User } from "../database/model.js"


let TEMP_DATA = [
    {id: 200 }
]



const handlerFunction = {
    getUserInfo: async(req, res)  =>  {
       const users = await User.findAll()
       res.send(users)
    }
    
}

export default handlerFunction