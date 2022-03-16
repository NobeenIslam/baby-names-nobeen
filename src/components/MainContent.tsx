import { useState } from "react";
import babyNamesData from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";
import filterNames from "../utils/filterNames";
import babyProps from "./babyProps";

function MainContent(): JSX.Element {
  const [nameSearch, setSearch] = useState("");

  const alphabeticalBabyNames: babyProps[] =
    babyNamesData.sort(alphaBeticalSort);

    const filteredBabyNames: babyProps[] = filterNames(
      alphabeticalBabyNames,
      nameSearch
    );
  
  const babyNameButtons = filteredBabyNames.map(
    (baby: babyProps): JSX.Element => (
      <button key = {baby.id} className={"button "+ baby.sex}>{baby.name}</button>
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
      <hr></hr>
      <div>{babyNameButtons}</div>
    </>
  );
}

export default MainContent;
