import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">🏛️ Apex Bank</div>
      <ul className="nav-links">
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/deposit">Deposit</NavLink></li>
        <li><NavLink to="/withdraw">Withdraw</NavLink></li>
        <li><NavLink to="/transactions">Transactions</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;