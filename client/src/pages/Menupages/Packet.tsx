import './pages.css';

function Packet(): JSX.Element {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">GRAPH</li>
                        </ol>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Packet;
