import './App.css';
import image from './images/bg-1.jpg';
import bannerimage from './images/bg-2.jpg';
import Banner from './Component/Banner/Banner';
import Navigation from './Component/Navigation/nav';
import CardSet from './Component/CardSet/Cardset';
import ServiceCardSet from './Component/ServiceCardSet/ServiceCardSet';
import Bannerform from './Component/Bannerform/Bannerform';



function App() {
  
const bannerImageStyle = 
{
  height:'500px'
}


  return (
   <>
   <Navigation/>
   <Banner heading ='CONQUER' image={image} body='Simple Bootstrap Template' />
   <CardSet />
    <div className="container-fluid">
      <Banner image={bannerimage} heading ='Our Services' imageStyle={bannerImageStyle} body='Some quick example text to build on the card 
      title and make up the bulk of the card content.'/>
    </div>
    <ServiceCardSet/>
    <Bannerform/>
   </> 
  );
}

export default App;
