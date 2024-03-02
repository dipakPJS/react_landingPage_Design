import "./Background.css";
import rollsroyace from "../../assets/rollsroyace.mp4";
import roll1 from "../../assets/roll1.jpg";
import roll2 from "../../assets/roll2.jpg";
import roll3 from "../../assets/roll3.jpg";

function Background({ playStatus, heroCount }) {
  
 if(playStatus) {
  return (
    <video className="background" autoPlay loop >
      <source src={rollsroyace} type="video/mp4" />
    </video>  
    
  )
 } 
 else if(heroCount === 0){
  return (
    <div className="main-background">
    <img src={roll1} className="background fade-in" alt="" />
    <div className="background1"></div>
  </div>
  )
 }
 else if(heroCount === 1){
  return (
    <div className="main-background">
    <img src={roll2} className="background fade-in" alt="" />
    <div className="background1"></div>
  </div>
 
  )
 }
 else if(heroCount === 2){
  return (
    
    <div className="main-background">
    <img src={roll3} className="background fade-in" alt="" />
    <div className="background1"></div>
  </div>
   
  )
 }
}

export default Background;
