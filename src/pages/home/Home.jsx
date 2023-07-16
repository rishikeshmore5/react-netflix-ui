import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import List1 from "../../components/list/List1";
import List2 from "../../components/list/List2";
import List3 from "../../components/list/List3";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List1 />
      <List2 />
      <List3 />
    </div>
  );
};

export default Home;
