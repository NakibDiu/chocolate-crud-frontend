import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div className="container mx-auto my-8 lg:my-16">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
