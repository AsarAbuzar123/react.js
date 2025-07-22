import { NavLink, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();


function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Web Page</h1>
      <ul>
        {/* <Link to={'/'}><li>Home</li></Link>
        <Link to={'/about'}><li>About</li></Link>
        <Link to={'/product'}><li>Product</li></Link> */}

        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/about'}><li>About</li></NavLink>
      </ul>
    </div>
  );
}
export default Navbar;