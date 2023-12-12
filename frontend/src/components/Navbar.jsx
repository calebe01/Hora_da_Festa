import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ onClose }) => {
  return (
    <nav id="navbar">
      <h2>Hora da Festa!</h2>
      <ul>
        <li>
          <NavLink to="/" className="btn">Minhas Festas</NavLink>
        </li>
        <li>
          <NavLink to="/party/new" className="btn">
            Criar Festa
          </NavLink>
        </li>
        <li>          
          <NavLink to="/" onClick={onClose} className="btn-close ">
            Sair
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;