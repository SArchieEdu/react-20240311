import { Link } from "react-router-dom";
import { Button } from "../components/button/component";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => navigate("/about-us", { replace: true })}>
        To AboutUs
      </Button>
      <Link to="/about-us">About Us</Link>
      <Link to="/headphones">Headphone</Link>
    </div>
  );
};
