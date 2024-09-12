import './App.css';
import EventMessage from './components/EventMessage.jsx';
import Home from './components/home.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Browse from './components/Browse.jsx';
import BestSeller from './components/BestSeller.jsx';
import Collection from './components/Collection.jsx';
import SameDay from './components/SameDay.jsx';
import TrainCards from './components/TrainCards.jsx';
import Offer from './components/Offer.jsx';
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
