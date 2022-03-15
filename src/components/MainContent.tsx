import ButtonElement from "./ButtonElement";
import babyNamesData from "../babyNamesData";
import babyProps from "./babyProps";
import alphaBeticalSort from "../utils/alphabeticalSort";
import SearchBar from "./SearchBar";

function MainContent(): JSX.Element {
    const sortedBabyNames = babyNamesData.sort(alphaBeticalSort)
    const babyNameButtons = sortedBabyNames.map(
        (baby: babyProps): JSX.Element => (
            <ButtonElement key={baby.id} name={baby.name} sex={baby.sex} />
        )
    );
return (
    <>
        <SearchBar/>
        <section>{babyNameButtons}</section>
    </>
    
    );
}

export default MainContent;
