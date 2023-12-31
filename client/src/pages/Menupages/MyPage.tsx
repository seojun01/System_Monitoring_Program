import { useEffect, useState } from 'react';
import './Css/pages.css';
function MyPage(): JSX.Element {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [name, setName] = useState([]);
    const [mobile, setMobile] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = '/auth/profile';
            try {
                const response = await fetch(url);
                const data = await response.json();
                setEmail(data?.map((item: any) => item.email));
                setPassword(data?.map((item: any) => item.password));
                setName(data?.map((item: any) => item.name));
                setMobile(data?.map((item: any) => item.mobile));
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    });

    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main id="main">
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">MyPage</h1>
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                    <div id="myPage">
                        <table className="myTable">
                            <tr className="row">
                                <th>Email : </th>
                                <td>ekfefaoi@lsrfjs</td>
                            </tr>
                            <tr className="row">
                                <th>Password : </th>
                                <td>{password}</td>
                            </tr>
                            <tr className="row">
                                <th>Name : </th>
                                <td>{name}</td>
                            </tr>
                            <tr className="row">
                                <th>Mobile : </th>
                                <td>{mobile}</td>
                            </tr>
                            <tr className="row5">
                                <td></td>
                                <td>
                                    <button>
                                        <span className="button_top"> Edit</span>
                                    </button>
                                </td>
                                <td>
                                    <button>
                                        <span className="button_top"> Reset</span>
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MyPage;
