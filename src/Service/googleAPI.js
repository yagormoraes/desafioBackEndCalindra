import axios from "axios";

class GoogleAPI{
    async coordinates(address){
        const endCod = encodeURIComponent(address)
        const key = process.env.KEY
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${endCod}&key=${key}`
        const response = await axios.get(url)
        
        return{
            coord: response.data.results[0].geometry.location,
            given_addres:address,
            formatted_address:  response.data.results[0].formatted_address
        }
    }

    async coordinatesGroup(addresses){
        let ArrayAddress = []
        for(let i = 0; i<addresses.length; i++){
            let coordValue = await this.coordinates(addresses[i])
            ArrayAddress.push(coordValue)
        }
        return ArrayAddress
    }
}


export default GoogleAPI