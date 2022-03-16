import { useState } from "react";
import Data from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import filterNames from "../utils/filterNames";
import babyProps from "./babyProps";

function MainContent(): JSX.Element {
  const [nameSearch, setSearch] = useState("");
  const [favouriteList, setFavourite] = useState<babyProps[]>([]);

  const babyNamesData = [...Data];
  const alphabeticalNames: babyProps[] = babyNamesData.sort(alphaBeticalSort);

  const [filteredNames, setFilteredNames] = useState(
    filterNames(alphabeticalNames, nameSearch)
  );

  const babyNameButtons = filteredNames.map((baby, index) => (
    <button
      key={baby.id}
      className={"button " + baby.sex}
      onClick={() => {
        const cut = filteredNames.splice(index, 1);
        setFavourite([...favouriteList, ...cut]);
        setFilteredNames(filteredNames);
        console.log(index);
      }}
    >
      {baby.name}
    </button>
  ));

  const favouriteNameButtons = favouriteList.map((baby, index) => (
    <button
      key={index}
      className={"button " + baby.sex}
      onClick={() => console.log("hello")}
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
