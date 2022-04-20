import babyProps from "./babyProps";

interface favouriteListProps {
  favouriteList: babyProps[],
  setFavourite: (arg0:babyProps[])=> void
}

function FavouriteList(props: favouriteListProps): JSX.Element {
  
  const favouriteNameButtons = props.favouriteList.map((baby, index) => (
    <button
      key={baby.id}
      className={"button " + baby.sex}
      onClick={() => {
        const newFavouriteList = [...props.favouriteList];
        newFavouriteList.splice(index, 1);
        props.setFavourite(newFavouriteList);
      }}
    >
      {baby.name}
    </button>
  ));

  return <div>Your Favourite Names: {favouriteNameButtons}</div>;
}

export default FavouriteList;
