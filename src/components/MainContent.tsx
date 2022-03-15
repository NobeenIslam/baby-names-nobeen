import ButtonElement from "./ButtonElement";
import babyNamesData from "../babyNamesData";
import babyProps from "./babyProps";
import alphaBeticalSort from "./alphabeticalSort";

function MainContent(): JSX.Element {
    const sortedBabyNames = babyNamesData.sort(alphaBeticalSort)
    const babyNameButtons = sortedBabyNames.map(
        (baby: babyProps): JSX.Element => (
            <ButtonElement key={baby.id} name={baby.name} sex={baby.sex} />
        )
    );
return <section>{babyNameButtons}</section>;
}

export default MainContent;
