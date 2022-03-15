import babyProps from "../components/babyProps"

function filterNames(data:babyProps[], input:string): babyProps[]{
    return data.filter(data => data.name.includes(input))

}

export default filterNames