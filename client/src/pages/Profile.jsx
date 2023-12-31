import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Feed from "../components/Feed";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profile-container container">
        <div className="profile-wrapper">
          <div className="user-info">
            <div className="user-info__name">
              <span>Jane Doe</span>
            </div>
            <div className="user-info__socials">
              <a href="http://facebook.com">
                <FacebookTwoToneIcon fontSize="large" />
              </a>
              <a href="http://facebook.com">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="http://facebook.com">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="http://facebook.com">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="http://facebook.com">
                <PinterestIcon fontSize="large" />
              </a>
            </div>
            <div className="user-info__extra">
              <div className="location">
                <div className="item">
                  <PlaceIcon />
                  <span>USA</span>
                </div>
                <div className="item">
                  <LanguageIcon />
                  <span>lama.dev</span>
                </div>
              </div>
            </div>
            <div className="follow">
              <button>follow</button>
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className="user-feed">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Profile;
