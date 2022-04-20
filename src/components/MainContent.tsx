import { useState } from "react";
import Data from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import babyProps from "./babyProps";
import SearchControls from "./SearchControls";
import GenderControls from "./GenderControls";
import BabyNameButtons from "./BabyNameButtons";
import FavouriteList from "./FavouriteList";

function MainContent(): JSX.Element {
  const babyNamesData = [...Data];
  const alphabeticalNames: babyProps[] = babyNamesData.sort(alphaBeticalSort);

  const [nameSearch, setSearch] = useState("");
  const [favouriteList, setFavourite] = useState<babyProps[]>([]);
  const [
    [isMaleSelected, isFemaleSelected, isSalihSelected],
    setWhichButtonSelected,
  ] = useState<boolean[]>([false, false, false]);
  const [
    [isAllActive, isMaleActive, isFemaleActive, isSalihActive],
    setActiveCss,
  ] = useState<string[]>(["active", "", "", "", ""]);

  let filteredNames = alphabeticalNames
    .filter(doesSearchTermOccurInName)
    .filter(isNameNotInFav);

  if (isMaleSelected) {
    filteredNames = filteredNames.filter(isNameMale);
  } else if (isFemaleSelected) {
    filteredNames = filteredNames.filter(isNameFemale);
  } else if (isSalihSelected) {
    filteredNames = filteredNames.map((baby) => {
      const salihBaby: babyProps = {
        id: baby.id,
        name: "Salih",
        sex: baby.sex,
      };
      return salihBaby;
    });
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

  return (
    <>
      <SearchControls search={nameSearch} setSearch={setSearch} />
      <GenderControls
        isAllActive={isAllActive}
        isMaleActive={isMaleActive}
        isFemaleActive={isFemaleActive}
        isSalihActive={isSalihActive}
        setButtonSelect={setWhichButtonSelected}
        setActiveCss={setActiveCss}
      />
      <button onClick={() => setFavourite([])}>Reset Favourite</button>
      <FavouriteList
        favouriteList={favouriteList}
        setFavourite={setFavourite}
      />
      <hr></hr>
      <BabyNameButtons
        filteredNames={filteredNames}
        favouriteList={favouriteList}
        setFavourite={setFavourite}
      />
    </>
  );
}

export default MainContent;
