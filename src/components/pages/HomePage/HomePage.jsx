import Header from '../../Header/Header'
import About from './About/About'
import Collection from './Collection/Collection'
import Slider from './Slider/Slider'
import Tovars from './Tovars/Tovars'
import Footer from '../../Footer/Footer'
import styles from './HomePage.module.css'

function HomePage() {

  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Collection></Collection>
      <Tovars></Tovars>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default HomePage