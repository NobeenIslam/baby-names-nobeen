import { useState } from "react";
import babyProps from "./babyProps"

interface searchBarProps{
    sortedData: babyProps[]
}

function SearchBar(props: searchBarProps): JSX.Element {
  const [nameSearch, setTypedMessage] = useState("");

  return (
      <input
        value={nameSearch}
        onChange={(event) => {
          setTypedMessage(event.target.value);
        }}
        placeholder="Search name here.."
      />
  );
}

export default SearchBar;
