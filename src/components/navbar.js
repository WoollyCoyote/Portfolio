
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbarDiv">
      <div className="">
        
              <Link className="link" href="#landing">
                Home{" "}
              </Link>
              <Link className="link" href="#portfolio">
                Projects{" "}
              </Link>
              <Link className="link" href="#contact">
                Contact Me{" "}
              </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
