interface SearchControlProps {
    search: string;
    setSearch: (arg0: string)=>void;
  }
  function SearchControls(props: SearchControlProps): JSX.Element {
    return (
      <>
        <input
          value={props.search}
          onChange={(event) => {
            props.setSearch(event.target.value);
          }}
          placeholder="Search name here.."
        />
        <button onClick={() => props.setSearch("")}>Clear Search</button>
      </>
    );
  }

  export default SearchControls