import ButtonElement from "./ButtonElement";
import babyProps from "./babyProps";

interface favouriteListProps {
  list: babyProps[];
}

function FavouriteList(props: favouriteListProps): JSX.Element {
  const favouriteList = props.list.map((baby: babyProps) => (
    <ButtonElement key={baby.id} name={baby.name} sex={baby.sex} />
  ));
  return <section>{favouriteList}</section>;
}

export default FavouriteList;
