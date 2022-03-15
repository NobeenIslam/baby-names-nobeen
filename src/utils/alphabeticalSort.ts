import babyProps from "../components/babyProps"

function alphaBeticalSort (a:babyProps, b:babyProps):number {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}

export default alphaBeticalSort