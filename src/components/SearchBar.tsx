interface searchBarProps {
  input: string;
  inputQueue(string: string): void;
}

function SearchBar(props: searchBarProps): JSX.Element {
  return (
    <input
      value={props.input}
      onChange={(event) => {
        props.inputQueue(event.target.value);
      }}
      placeholder="Search name here.."
    />
  );
}

export default SearchBar;
