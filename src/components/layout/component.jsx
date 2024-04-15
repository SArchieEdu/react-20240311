import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/headphones">Headphone</Link>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>footer</footer>
    </div>
  );
};
