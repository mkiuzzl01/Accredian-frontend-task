import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="max-w-7xl m-auto">
      <header className="sticky top-0 z-10">
        <Navbar></Navbar>
      </header>
      <main>
        <Home></Home>
      </main>
    </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
