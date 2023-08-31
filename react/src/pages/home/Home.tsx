import Navbar from './navbar/Navbar'
import "./home.css"
import MainSection from './mainSection/MainSection'
import useAuth from '../../hooks/useAuth'
const Home = () => {
  const { auth } = useAuth();
  
  return (
    <div className='page__home'>
        <Navbar nickName={`${auth.username}`}/>
        <MainSection/>
    </div>
  )
}

export default Home