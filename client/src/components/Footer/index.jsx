import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-screen p-4">
      <div className="text-center mb-5">
        <h4>
          Made with{" "}
          <span className="emoji" role="img" aria-label="heart" aria-hidden="false">
            ❤️
          </span>{" "}
          by art connoisseurs.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
