import Stories from "../components/Stories";
import Share from "../components/Share";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper container">
        <Stories />
        <Share />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
