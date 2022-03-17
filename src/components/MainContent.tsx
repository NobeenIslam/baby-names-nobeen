import { useState } from "react";
import Data from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import babyProps from "./babyProps";

function MainContent(): JSX.Element {
  const [nameSearch, setSearch] = useState("");
  const [favouriteList, setFavourite] = useState<babyProps[]>([]);

  const babyNamesData = [...Data];
  const alphabeticalNames: babyProps[] = babyNamesData.sort(alphaBeticalSort);

  const filteredNames = alphabeticalNames
    .filter(doesSearchTermOccurInName)
    .filter(doesMainOverlapWithFav);

  function doesSearchTermOccurInName(nameInfo: babyProps): boolean {
    return nameInfo.name.toLowerCase().includes(nameSearch.toLowerCase());
  }

  function doesMainOverlapWithFav(nameInfo: babyProps): boolean {
    return !favouriteList.includes(nameInfo);
  }

  const babyNameButtons = filteredNames.map((baby, index) => (
    <button
      key={baby.id}
      className={"button " + baby.sex}
      onClick={() => {
        //Splice element from list of current index
        setFavourite([...favouriteList, ...filteredNames.splice(index, 1)]);
      }}
    >
      {baby.name}
    </button>
  ));

  console.log("Favourite List Current Elements", favouriteList);
  console.log("The main list length is now:", filteredNames.length);

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
      <div>Your Favourite Names: {favouriteNameButtons}</div>
      <hr></hr>
      <div>{babyNameButtons}</div>
    </>
  );
}

export default MainContent;
