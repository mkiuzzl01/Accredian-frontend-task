import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="max-w-7xl m-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Home></Home>
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default Layout;
