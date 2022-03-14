import babyProps from "./babyProps";

function ButtonElement(props: babyProps): JSX.Element {
  const className = "button " + props.sex;
  //Made id optional prop as each button didn't need the key but the <ButtonElement/>
  return <button className={className}>{props.name}</button>;
}

export default ButtonElement;
