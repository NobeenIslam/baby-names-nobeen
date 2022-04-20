import babyProps from "./babyProps";

interface babyNameButtonsProps {
  filteredNames: babyProps[],
  favouriteList: babyProps[],
  setFavourite: (arg0: babyProps[])=>void
}

function BabyNameButtons(props: babyNameButtonsProps): JSX.Element {
  const babyNameButtons = props.filteredNames.map((baby) => (
    <button
      key={baby.id}
      className={"button " + baby.sex}
      onClick={() => {
        props.setFavourite([...props.favouriteList, baby]);
      }}
    >
      {baby.name}
    </button>
  ));

  return <div>{babyNameButtons}</div>;
}

export default BabyNameButtons;
