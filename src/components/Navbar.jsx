import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="brand" to="/client-logos">
          Veridian Advisory
        </NavLink>
        <div className="nav-links">
          <NavLink className="nav-link" to="/client-logos">
            Client Logos
          </NavLink>
          <NavLink className="nav-link" to="/service-breakdown">
            Service Breakdown
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
