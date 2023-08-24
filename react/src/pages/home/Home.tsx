import Navbar from './navbar/Navbar'
import "./home.css"
import MainSection from './mainSection/MainSection'

const Home = () => {
  return (
    <div className='page__home'>
        <Navbar nickName={`xKamil0`}/>
        <MainSection/>
    </div>
  )
}

export default Home