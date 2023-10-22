import './pages.css';

function Attack(): any {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1
                            className="mt-4"
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold',
                                fontSize: '2rem',
                                color: '#333',
                            }}
                        >
                            Attack Packet
                        </h1>
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Attack;
