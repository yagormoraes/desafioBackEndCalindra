class geolocationModel{
    euclidianDistance(x1,x2,y1,y2){
        let x =Math.abs(x2-x1)
        let y = Math.abs(y2-y1)
        return Math.sqrt((x**2) + (y**2))
    }

    multipleDistances(array){
        let distanceArray = []
        for (let i = 0; i< array.length; i++){
            for(let j=0; j<array.length; j++){
                if(i!=j){
                    let calulatedValue = this.euclidianDistance(
                        array[i].coord.lat,
                        array[j].coord.lat,
                        array[i].coord.lng,
                        array[j].coord.lng
                    )
                    const wayTo = {
                        start:`${array[i].formatted_address}`,
                        end: `${array[j].formatted_address}`
                    }
                    
    
                    const distance = {
                        way: wayTo,
                        dist: calulatedValue 
                    }
    
                    distanceArray.push(distance)

                }
            }
        }
        return distanceArray
    }

    orderDistance(array){
        let populated = this.multipleDistances(array).sort((a,b)=>{
            if(a.dist < b.dist){return -1}
            else if(a.dist > b.dist){return 1}
            else{ return 0}
            
        })
        return populated
    }

    itIsLocal(array){
        let list = this.orderDistance(array)
        let empty = 0
        list = list.filter(item => item.dist!=empty)
        let last = list.length -1
        return{
            neaby:list[0],
            farAway:list[last]
        }
    }


}

export default geolocationModel