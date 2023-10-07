import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";

function Home({ intersect }) {
  return (
    <div id="home">
      <Navbar intersect={intersect} />
      <Header />
    </div>
  );
}

export default Home;
