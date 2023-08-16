import Stories from "../components/Stories";
import Posts from "../components/Posts";
import Share from "../components/Share";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts />
    </div>
  );
};

export default Home;
