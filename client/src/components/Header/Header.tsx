import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header(): JSX.Element {
    const navigate = useNavigate();

    const handleSideBarToggle = () => {
        const body = document.body;
        body.classList.toggle('sb-sidenav-toggled');

        const isToggled = body.classList.contains('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', isToggled.toString());
    };
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a
                onClick={() => {
                    window.location.replace('/');
                }}
                className="navbar-brand ps-3"
            >
                Monitoring Dashboard
            </a>
            <a className="order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={handleSideBarToggle}>
                <i className="fas fa-bars"></i>
            </a>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    {/* <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fas fa-user fa-fw"></i>
                    </a> */}
                    {/* <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="/mypage">
                                MyPage
                            </a>
                            <hr />
                            <a className="dropdown-item" href="/login">
                                Logout
                            </a>
                        </li>
                    </ul> */}
                </li>
            </ul>
        </nav>
    );
}

export default Header;
