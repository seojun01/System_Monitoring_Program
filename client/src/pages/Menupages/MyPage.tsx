import './pages.css';

function MyPage(): any {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">MyPage</h1>
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MyPage;
