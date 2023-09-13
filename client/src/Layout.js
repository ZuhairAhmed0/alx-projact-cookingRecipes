import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout({ search, setSearch }) {
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
