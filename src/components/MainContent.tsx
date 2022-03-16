import { useState } from "react";
import babyNamesData from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import filterNames from "../utils/filterNames";
import babyProps from "./babyProps";

function MainContent(): JSX.Element {
  const [nameSearch, setSearch] = useState("");
  const [favouriteList, setFavourite] = useState<babyProps[]>([]);

  const alphabeticalBabyNames: babyProps[] =
    babyNamesData.sort(alphaBeticalSort);

  const filteredBabyNames: babyProps[] = filterNames(
    alphabeticalBabyNames,
    nameSearch
  );

  const babyNameButtons = filteredBabyNames.map(
    (baby) => (
      <button
        key={baby.id}
        className={"button " + baby.sex}
        onClick={() => setFavourite([...favouriteList, baby])}
      >
        {baby.name}
      </button>
    )
  );

  const favouriteNameButtons = favouriteList.map(
    (baby,index) => (
      <button
        key={index}
        className={"button " + baby.sex}
        onClick={() => console.log("hello")}
      >
        {baby.name}
      </button>
    )
  );

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
