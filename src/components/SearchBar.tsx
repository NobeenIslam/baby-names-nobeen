import { useState } from "react";

function SearchBar(): JSX.Element {
  const [nameSearch, setTypedMessage] = useState("");

  return (
      <input
        value={nameSearch}
        onChange={(event) => {
          setTypedMessage(event.target.value);
        }}
      />
  );
}

export default SearchBar;
