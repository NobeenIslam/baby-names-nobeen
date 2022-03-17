import { useState } from "react";
import Data from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import filterNames from "../utils/filterNames";
import babyProps from "./babyProps";
import FavouriteList from "./FavouriteList";

function MainContent(): JSX.Element {
  const [nameSearch, setSearch] = useState("");
  const [favouriteList, setFavourite] = useState<babyProps[]>([]);
 

  const babyNamesData = [...Data];
  const alphabeticalNames: babyProps[] = babyNamesData.sort(alphaBeticalSort);

  //const filteredNames = filterNames(alphabeticalNames,nameSearch)

  const [filteredNames, setFilteredNames] = useState(
    filterNames(alphabeticalNames, nameSearch)
  );
    
  //console.log(nameSearch,filteredNames)
  const babyNameButtons = filteredNames.map((baby, index) => (
    <button
      key={baby.id}
      className={"button " + baby.sex}
      onClick={() => {
        const cut = filteredNames.splice(index, 1);
        //Splice element from list of current index
        setFavourite([...favouriteList, ...cut]);
        //setFilteredNames(filteredNames);
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
        const cut = favouriteList.splice(index, 1);
        setFavourite(favouriteList);
        //setFilteredNames(filteredNames)
        console.log(favouriteList)
        console.log(cut)
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
