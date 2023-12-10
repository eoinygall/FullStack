// our-dimain.com/new-game
import NewGameForm from '../../components/games/NewGameForm'
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

function NewGamePage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addGameHandler(enteredGameData)  {
        await globalCtx.updateGlobals({cmd: 'addGame', newVal: enteredGameData})
        router.push('/');
    }

    return <NewGameForm onAddGame={addGameHandler} />
}

export default NewGamePage