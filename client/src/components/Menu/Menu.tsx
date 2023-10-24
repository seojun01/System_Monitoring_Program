import './Menu.css';

function Menu(): JSX.Element {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">core</div>
                            <a className="nav-link" href="/">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-brands fa-watchman-monitoring"></i>
                                </div>
                                Attack Packet
                            </a>
                            <a className="nav-link" href="/network">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                Network Packet
                            </a>
                            <a className="nav-link" href="/live">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-circle-info"></i>
                                </div>
                                Live
                            </a>
                            <div className="sb-sidenav-menu-heading">mantle</div>
                            <a className="nav-link" href="/system_info">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-microchip"></i>
                                </div>
                                Perfmon
                            </a>
                            <div className="sb-sidenav-menu-heading">crust</div>
                            <a className="nav-link" href="/mypage">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-file"></i>
                                </div>
                                MyPage
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
