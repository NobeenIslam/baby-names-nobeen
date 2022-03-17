import babyProps from "../components/babyProps";

function filterNamesBySearch(data: babyProps[], input: string): babyProps[] {
  return data.filter((data) =>
    data.name.toUpperCase().includes(input.toUpperCase())
  );
}


export default filterNamesBySearch;
