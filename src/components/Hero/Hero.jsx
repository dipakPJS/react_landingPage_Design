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
    <div className="hero px-4 py-8 sm:py-12">
      <div className="text-white text-center mt-[-50px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal sm:leading-relaxed md:leading-loose lg:leading-normal xl:leading-relaxed">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore mt-4 sm:mt-6 text-center">
        <div className="bg-[#1F2937] text-white md:w-[300px] lg:w-[300px] sm:w-full lg:m-auto md:m-auto lg:flex md-flex items-center justify-center text-center py-5 px-5 rounded-[200px] sm:rounded-[100px] md:rounded-[200px] lg:rounded-[50px]">
        <p className="text-xl">Explore the feature</p>
        <img src={next_icon} alt="" className="icon mx-auto md:mt-0 lg:mt-0" />
        </div>
      </div>
      <div className="hero-dot-play md:mt-10 lg:mt-10">
        <ul className="hero-dots flex justify-center">
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
        <div className="hero-play text-center">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
            className="icon mx-auto"
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
