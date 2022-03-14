import babyProps from "./babyProps"

function ButtonElement(props: babyProps):JSX.Element{
    return(
        <button key = {props.id} className={props.sex}>{props.name}</button>
    )
}