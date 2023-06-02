import Banner from "../Banner/Banner";
import ShowList from "../ShowList/ShowList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container overflow-hidden">
        <ShowList></ShowList>
      </div>
    </div>
  );
};

export default Home;
