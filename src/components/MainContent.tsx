import ButtonElement from "./ButtonElement";
import babyNamesData from "../babyNamesData";
import babyProps from "./babyProps";

function MainContent(): JSX.Element {
  const babyNameButtons = babyNamesData.map(
    (baby: babyProps): JSX.Element => (
      <ButtonElement key={baby.id} name={baby.name} sex={baby.sex} />
    )
  );
  return <section>{babyNameButtons}</section>;
}

export default MainContent;
