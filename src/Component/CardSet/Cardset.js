import react from 'react';
import Card from './Card';
import cardimage1 from '../../images/1-1.jpg';
import cardimage2 from '../../images/1-2.jpg';
import cardimage3 from '../../images/1-3.jpg';
import cardimage4 from '../../images/2-1.jpg';
import cardimage5 from '../../images/2-2.jpg';


function CardSet()
{
    let cardContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    return(
        <div className="container">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
           <div className="row">
               <div className="col-xl-4 col-md-4 col-sm-6 col-12">
                 <Card image={cardimage1} title="Bootstrap V3.36" showbtn add_width add_margin color="green" btn="green" 
                 content={cardContent} btntext="Button Green"/>
               </div>
     
               <div className="col-xl-4 col-md-4 col-sm-6 col-12">
                 <Card image={cardimage2} title="Responsive Design" showbtn add_width add_margin color="skyblue" btn="skyblue" 
                 content={cardContent} btntext="See Details"/>
               </div>
     
               <div className="col-xl-4 col-md-4 col-sm-6 col-12">
                 <Card image={cardimage3} title="Parallax Layout" showbtn add_width add_margin color="grey" btn="red" content={cardContent} 
                 btntext="Button Red"/>
               </div>
     
               <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                 <Card image={cardimage4} title="Two Colum Left Side" color="grey" content={cardContent} add_margin/>
               </div>
     
               <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                 <Card image={cardimage5} title="Two Colum Left Side" color="grey" showbtn add_margin 
                 content={cardContent} btn="white" btntext="Read More"/>
               </div>
             </div>
           </div>
        </div>
     );
}

export default CardSet;