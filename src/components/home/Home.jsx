import Socials from "../Socials/Socials"
import "./Home.scss"
import homeImg from "../../assets/frontopen.png"
import ReactPlayer from "react-player"


export const Home = () => {
  return (
    <div className="home">
    <img className="home-img" src={homeImg} alt="homeimg" />
        <Socials />
       <iframe className="home-video" width="630" height="315" src="https://www.youtube.com/embed/FrE8-coyg2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <div>
      <ReactPlayer
        url="https://soundcloud.com/geerich"
      />
    </div>
    </div>

  )
}

export default Home
