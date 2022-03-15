import BabyNameButtons from "./BabyNameButtons"
import SearchBar from "./SearchBar";
import babyNamesData from "../babyNamesData";
import alphaBeticalSort from "../utils/alphabeticalSort";

function MainContent(): JSX.Element {
    const sortedBabyNames = babyNamesData.sort(alphaBeticalSort)
return (
    <>
        <SearchBar sortedData = {sortedBabyNames}/>
        <BabyNameButtons sortedData = {sortedBabyNames}/>
    </>
    
    );
}

export default MainContent;
