import { useState } from "react";
import BabyNameButtons from "./BabyNameButtons";
import SearchBar from "./SearchBar";
import babyNamesData from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import filterNames from "../utils/filterNames";
import babyProps from "./babyProps";

function MainContent(): JSX.Element {
  const alphabeticalBabyNames: babyProps[] =
    babyNamesData.sort(alphaBeticalSort);
  const [nameSearch, setTypedMessage] = useState("");
  const filteredList: babyProps[] = filterNames(
    alphabeticalBabyNames,
    nameSearch
  );

  return (
    <>
      <SearchBar input={nameSearch} inputQueue={setTypedMessage} />
      <BabyNameButtons sortedData={filteredList} />
    </>
  );
}

export default MainContent;
