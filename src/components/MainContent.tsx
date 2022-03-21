import { useState } from "react";
import Data from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import babyProps from "./babyProps";

function MainContent(): JSX.Element {
  const babyNamesData = [...Data];
  const alphabeticalNames: babyProps[] = babyNamesData.sort(alphaBeticalSort);

  const [nameSearch, setSearch] = useState("");
  const [favouriteList, setFavourite] = useState<babyProps[]>([]);
  const [isAllSelected,setIsAll] = useState<boolean>(true)
  const [isMaleSelected, setIsMale] = useState<boolean>(false);
  const [isFemaleSelected, setIsFemale] = useState<boolean>(false);


  let filteredNames = alphabeticalNames

  if (isMaleSelected) {
    filteredNames = alphabeticalNames
      .filter(doesSearchTermOccurInName)
      .filter(doesMainOverlapWithFav)
      .filter(isNameMale);
  } else if (isFemaleSelected) {
    filteredNames = alphabeticalNames
      .filter(doesSearchTermOccurInName)
      .filter(doesMainOverlapWithFav)
      .filter(isNameFemale);
  } else if (isAllSelected){
    filteredNames = alphabeticalNames
      .filter(doesSearchTermOccurInName)
      .filter(doesMainOverlapWithFav);
  }

  console.log(isAllSelected, filteredNames.length)


  function doesSearchTermOccurInName(nameInfo: babyProps): boolean {
    return nameInfo.name.toLowerCase().includes(nameSearch.toLowerCase());
  }

  function doesMainOverlapWithFav(nameInfo: babyProps): boolean {
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
        onClick = {()=> {setIsAll(true); setIsFemale(false); setIsMale(false)}}
      >
        All
      </button>
      <button
        onClick = {()=> {setIsAll(false); setIsFemale(false); setIsMale(true)}}
      >
        Male
      </button>
      <button
        onClick = {()=> {setIsAll(false); setIsFemale(true); setIsMale(false)}}
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
