import axios from "axios";

class GoogleGeo{
    async coordenadas(end){
        const endCod = encodeURIComponent(end)
        const key = process.env.KEY
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${endCod}&key=${key}`
        const response = await axios.get(url)
        //console.log(response.data);
        return{
            coord: response.data.results,
            endereco: end
        }
    }
}

export default GoogleGeo