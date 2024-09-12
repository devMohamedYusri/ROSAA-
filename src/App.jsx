import './App.css';
import EventMessage from './components/EventMessage';
import Home from './components/home';
import Nav from './components/Nav';
import About from './components/About';
import Browse from './components/Browse';
import BestSeller from './components/BestSeller';
import Collection from './components/Collection';
import SameDay from './components/SameDay';
import TrainCards from './components/TrainCards';
import Offer from './components/Offer';
function App() {
  return (
    <>
      <EventMessage message='save 10$ On Mothers Day Flowers with flex Delivery' />
      <Nav/>
      <Home text="it's Almost mom's day" pText="celebrate Mom with beautiful flowers." btext="shop mother's day"/>
      <About/>
      <Browse/>
      <BestSeller/>
      <Collection/>
      <SameDay/>
      <TrainCards/>
      <Offer/>
    </>
  )
}

export default App
