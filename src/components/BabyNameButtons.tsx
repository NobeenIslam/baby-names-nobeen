import ButtonElement from "./ButtonElement";
import babyProps from "./babyProps";

interface babyNameButtonsProps {
  sortedData: babyProps[];
}

function BabyNameButtons(props: babyNameButtonsProps): JSX.Element {
  const babyNameButtons = props.sortedData.map(
    (baby: babyProps): JSX.Element => (
      <ButtonElement key={baby.id} name={baby.name} sex={baby.sex} />
    )
  );
  return <section>{babyNameButtons}</section>;
}

export default BabyNameButtons;
