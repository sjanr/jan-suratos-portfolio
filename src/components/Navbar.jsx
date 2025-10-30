import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-name">JAN SURATOS</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
