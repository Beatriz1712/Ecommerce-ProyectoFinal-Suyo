import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "../CartWidget/CartWidget";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        
        <div className='container-fluid'>
            <Navbar expand="lg" bg="ligth" className="navbar">
                <Navbar.Brand to="/">BettyStore💎</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Link to="/" className="enlaces">Home</Link>
                    <Link to="/productos" className="enlaces">Todos los productos</Link>
                    <Link to="/contacto" className="enlaces">Contacto</Link>
                    <Link className="enlaces" to="/category/productosA">Productos A</Link>
                    <Link className="enlaces" to="/category/productosB">Productos B</Link>
                    <Link className="enlaces" to="/category/productosC">Productos C</Link>
                    

                </Navbar.Collapse>
                <CartWidget />
            </Navbar>
        </div>
    );
}

export default NavBar;
