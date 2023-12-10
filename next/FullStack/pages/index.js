import GameList from '../components/games/GameList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <GameList games={globalCtx.theGlobalObject.games} />
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;