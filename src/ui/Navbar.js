import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Navbar
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Login
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/pagina1"
                    >
                        Pagina1
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/pagina2"
                    >
                        Pagina2
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/pagina3"
                    >
                        Pagina3
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;