function Header() {
    return (
      <header className="header">
        <h2>Alejandro Albarran</h2>
        <nav>
            <ul className="nav_links">
                <li><a href="#">Home</a></li>
                <li><a href="#">CV</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </nav>
        <a className="cta" href="#"><button>Contact</button></a>
      </header>
    );
  }
  
  export default Header;
  