import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu(): JSX.Element {
    const navigate = useNavigate();

    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">core</div>
                            <a
                                onClick={() => {
                                    window.location.replace('/');
                                }}
                                className="nav-link"
                            >
                                <div className="sb-nav-link-icon">
                                    <i className="fa-brands fa-watchman-monitoring"></i>
                                </div>
                                Network Monitor
                            </a>
                            {/* <a className="nav-link" href="/network">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                Network Packet
                            </a> */}
                            <a
                                onClick={() => {
                                    //navigate('/realtime');
                                    window.location.replace('/realtime');
                                }}
                                className="nav-link"
                            >
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-circle-info"></i>
                                </div>
                                Attack Notification
                            </a>
                            <div className="sb-sidenav-menu-heading">mantle</div>
                            <a
                                onClick={() => {
                                    //navigate('/perfmon');
                                    window.location.replace('/perfmon');
                                }}
                                className="nav-link"
                            >
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-microchip"></i>
                                </div>
                                Performance Monitor
                            </a>
                            {/* <div className="sb-sidenav-menu-heading">crust</div>
                            <a className="nav-link" href="/mypage">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-file"></i>
                                </div>
                                MyPage
                            </a> */}
                        </div>
                    </div>
                    {/* <div className="sb-sidenav-footer">
                        <div className="small">Logged in as</div>
                        <div className="name">최정헌</div>
                    </div> */}
                </nav>
            </div>
        </div>
    );
}

export default Menu;
