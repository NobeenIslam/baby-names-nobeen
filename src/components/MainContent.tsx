import { useState } from "react";
import Data from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import babyProps from "./babyProps";

function MainContent(): JSX.Element {
  const babyNamesData = [...Data];
  const alphabeticalNames: babyProps[] = babyNamesData.sort(alphaBeticalSort);

  const [nameSearch, setSearch] = useState("");
  const [favouriteList, setFavourite] = useState<babyProps[]>([]);
  const [[isMaleSelected, isFemaleSelected], setWhichButtonSelected] = useState<
    boolean[]
  >([false, false]);
  const [[isAllActive, isMaleActive, isFemaleActive], setActive] = useState<
    string[]
  >(["active", "", ""]);

  let filteredNames = alphabeticalNames
    .filter(doesSearchTermOccurInName)
    .filter(isNameNotInFav);

  if (isMaleSelected) {
    filteredNames = filteredNames.filter(isNameMale);
  } else if (isFemaleSelected) {
    filteredNames = filteredNames.filter(isNameFemale);
  }

  function doesSearchTermOccurInName(nameInfo: babyProps): boolean {
    return nameInfo.name.toLowerCase().includes(nameSearch.toLowerCase());
  }

  function isNameNotInFav(nameInfo: babyProps): boolean {
    return !favouriteList.includes(nameInfo);
  }

  function isNameMale(nameInfo: babyProps): boolean {
    return nameInfo.sex.includes("m");
  }

  function isNameFemale(nameInfo: babyProps): boolean {
    return nameInfo.sex.includes("f");
  }

  const babyNameButtons = filteredNames.map((baby) => (
    <button
      key={baby.id}
      className={"button " + baby.sex}
      onClick={() => {
        setFavourite([...favouriteList, baby]);
      }}
    >
      {baby.name}
    </button>
  ));

  const favouriteNameButtons = favouriteList.map((baby, index) => (
    <button
      key={index}
      className={"button " + baby.sex}
      onClick={() => {
        const newFavouriteList = [...favouriteList];
        newFavouriteList.splice(index, 1);
        setFavourite(newFavouriteList);
      }}
    >
      {baby.name}
    </button>
  ));

  return (
    <>
      <input
        value={nameSearch}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Search name here.."
      />
      <button
        className={isAllActive}
        onClick={() => {
          setWhichButtonSelected([false, false]);
          setActive(["active", "", ""]);
        }}
      >
        All
      </button>
      <button
        className={isMaleActive}
        onClick={() => {
          setWhichButtonSelected([true, false]);
          setActive(["", "active", ""]);
        }}
      >
        Male
      </button>
      <button
        className={isFemaleActive}
        onClick={() => {
          setWhichButtonSelected([false, true]);
          setActive(["", "", "active"]);
        }}
      >
        Female
      </button>
      <button onClick={() => setFavourite([])}>Reset Favourite</button>
      <div>Your Favourite Names: {favouriteNameButtons}</div>
      <hr></hr>
      <div>{babyNameButtons}</div>
    </>
  );
}

export default MainContent;
