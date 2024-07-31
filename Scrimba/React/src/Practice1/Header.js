export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img
          className="nav-logo"
          src="Icons/react-icon.png"
          alt="React Logo."
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
