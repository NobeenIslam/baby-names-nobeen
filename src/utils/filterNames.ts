import babyProps from "../components/babyProps"
function filterNames(data:babyProps[], input:string){
    data.filter(data => data.name.includes(input))

}

export default filterNames