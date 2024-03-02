import "./Hero.css";
import next_icon from "../../assets/next_icon.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

function Hero({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) {
  return (
    <div className="hero">
      <div className="text-white mt-[-50px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal sm:leading-relaxed md:leading-loose lg:leading-normal xl:leading-relaxed">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the feature</p>
        <img src={next_icon} alt="" className="icon" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
            className="icon"
          />
          <p>See the video</p>
        </div>
 
      </div>
    </div>
  );
}

export default Hero;
