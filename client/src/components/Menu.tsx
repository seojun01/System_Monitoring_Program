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
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                Logs
                            </a>
                            <a className="nav-link" href="/details">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-circle-info"></i>
                                </div>
                                Details
                            </a>
                            <div className="sb-sidenav-menu-heading">mantle</div>
                            <a className="nav-link" href="/cpu">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-microchip"></i>
                                </div>
                                Cpu
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
