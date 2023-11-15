import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbarDiv">
      <div className="card">
        
              <Link className="link" href="#landing">
                Home{" "}
              </Link>
              <Link className="link" href="#portfolio">
                Portfolio{" "}
              </Link>
              <Link className="link" href="#contact">
                Contact{" "}
              </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
