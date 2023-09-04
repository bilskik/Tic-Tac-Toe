import Navbar from './navbar/Navbar'
import "./home.css"
import MainSection from './mainSection/MainSection'
import useAuth from '../../hooks/useAuth'
import { MenuDisplayProvider } from '../../context/MenuDisplayProvider'
import useGameMenuDisplay from '../../hooks/useGameMenuDisplay'
import GameMenuModal from './mainSection/modal/GameMenuModal'
const Home = () => {
  const { auth } = useAuth();
  const { state, dispatch } = useGameMenuDisplay();
  return (
    <div className='page__home'>
        {
          state.showPlayWithFriendMenuPopup && <GameMenuModal/>
        }
        <Navbar nickName={`${auth.username}`}/>
        <MainSection/>
    </div>
  )
}

export default Home