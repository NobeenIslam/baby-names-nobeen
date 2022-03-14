import ButtonElement from "./ButtonElement"
import babyNamesData from "../babyNamesData"

function MainContent():JSX.Element{
    const babyNameButtons = babyNamesData.map((baby)=><ButtonElement id={baby.id} name={baby.name} sex = {baby.sex}/>)
    return (
        <></>
    )
}

export default MainContent