
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-commerce 423</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-100">
            <div className="d-flex gap-3">
              <NavLink to="/" className="nav__link text-decoration-none text-black">
                Home
              </NavLink>
              <NavLink to="/shop" className="nav__link text-decoration-none text-black">
                Shop
              </NavLink>
              <NavLink to="/cart" className="nav__link text-decoration-none text-black">
                Cart
              </NavLink>
            </div>
            <div className="d-flex gap-3">
              <NavLink to="/login" className="nav__link text-decoration-none text-black">
                Login
              </NavLink>
              <NavLink to="/register" className="nav__link text-decoration-none text-black">
                Register
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default function NavBar() {
//   return (
//     <nav>
//       <div className="container">
//         <div className="d-flex justify-content-between">
//           <div className="d-flex gap-5 align-items-center">
//             <h5 className="logo m-0 fw-bolder">E-commerce 422</h5>
//             <ul className="d-flex gap-4 align-items-center list-unstyled m-0">
//               <li>
//                 <Link to="/" className="text-decoration-none text-black">Home</Link>
//               </li>
//               <li>
//                 <Link to="/shop" className="text-decoration-none text-black">Shop</Link>
//               </li>
//               <li>
//                 <Link to="/cart" className="text-decoration-none text-black">Cart</Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <ul className="d-flex gap-4 align-items-center list-unstyled m-0">
//               <li>
//                 <Link to="/login" className="text-decoration-none text-black">Login</Link>
//               </li>
//               <li>
//                 <Link to="/register" className="text-decoration-none text-black">Register</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
