import GoogleAPI from "../Service/googleAPI.js";
import geolocationModel from "../Model/geolocationModel.js";

const geolocationController = (app) =>{
    const api = new GoogleAPI()
    const model = new geolocationModel()

    app.get('/', (req,res)=>{
        const queryValues = Object.values(req.query)

        api.coordinatesGroup(queryValues)
        .then((groupBy)=>{
            res.status(200).json(model.itIsLocal(groupBy))
        })
        .catch((e)=>{
            res.status(404).json(e.message)
        })
    })
}

export default geolocationController

