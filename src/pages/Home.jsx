import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Policy from '../components/Policy'
import Footer from '../components/Footer'
import Collections from '../components/Collections'

const Home = () => {
  return (
    <div className='font-outfit'>
      <Navbar/>
      <Banner/>
      <Collections/>
      <Policy/>
      <Footer/>
    </div>
  )
}

export default Home
