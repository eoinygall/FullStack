import MeetupDetail from '../../components/games/GameDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
        let temp = globalCtx.theGlobalObject.meetings[ii]
        if (temp.GameId.trim() == router.query.GameId.trim()) {
            returnVal = <GameDetail image={temp.image} title={temp.title} description={temp.description} />
        }
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}
