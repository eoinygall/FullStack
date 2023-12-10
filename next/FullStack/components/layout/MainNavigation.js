import classes from './MainNavigation.module.css'
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import HamMenuFAB from "../generic/HamMenuFAB"
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import HamMenuContent from "./HamMenuContent"
import { useRouter } from 'next/router'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function toggleMenuHide() {
    globalCtx.updateGlobals({cmd: 'hideHamMenu', newVal: false})
  }


  const contents = [
    {title: 'Home', webAddress: '/'}, 
    {title: 'Consoles', webAddress: '/'}, 
    {title: 'All Games', webAddress: '/'}, 
    {title: 'Delete all Data', webAddress: '/'}, 

  ]
  return (
    <header className={classes.header}>
      <HamMenuContent contents={contents} />
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <nav>
        <ul>
          <li>
            <Link href='/'>All Games</Link>
          </li>
          <li>
            <Link href='/new-game'>Add New Game</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
