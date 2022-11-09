import "./Socials.scss"
import facebookIcon from "../../assets/facebook.png"
import instagramIcon from "../../assets/instagram.png"
import soundcloudIcon from "../../assets/soundcloud.png"
import youtubeIcon from "../../assets/youtube.png"
import spotifyIcon from "../../assets/spotify.png"
import twitterIcon from "../../assets/twitter.png"

const Socials = () => {
  return (
    <div className="social-media">
        <a href="https://www.facebook.com/G.RICHdj" target="_blank" rel="noreferrer">
        <div className="social-media-icon">
            <img className="social-media-icon-img" src={facebookIcon} alt="facebook-icon" />
        </div>
        </a>
        <a href="https://www.instagram.com/g_rich_/" target="_blank" rel="noreferrer">
        <div className="social-media-icon">
            <img className="social-media-icon-img" src={instagramIcon} alt="instagram-icon" />
        </div>
        </a>
        <a href="https://soundcloud.com/geerich" target="_blank" rel="noreferrer">
        <div className="social-media-icon">
            <img className="social-media-icon-img" src={soundcloudIcon} alt="soundcloud-icon" />
        </div>
        </a>
        <a href="https://www.youtube.com/channel/UCHiIL70xatHRPvXjxzG6LNw" target="_blank" rel="noreferrer">
        <div className="social-media-icon">
            <img className="social-media-icon-img" src={youtubeIcon} alt="youtube-icon" />
        </div>
        </a>
        <a href="https://twitter.com/G_RICH_" target="_blank" rel="noreferrer">
        <div className="social-media-icon">
            <img className="social-media-icon-img" src={spotifyIcon} alt="spotify-icon" />
        </div>
        </a>
        <a href="https://twitter.com/G_RICH_" target="_blank" rel="noreferrer">
        <div className="social-media-icon">
            <img className="social-media-icon-img" src={twitterIcon} alt="twitter-icon" />
        </div>
        </a>
    </div>
  ) 

}

export default Socials