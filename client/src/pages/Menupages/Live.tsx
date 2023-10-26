import React, { useEffect, useState } from 'react';
import './Css/pages.css';
import './Css/Live.css';

function Live(): JSX.Element {
    // const [event_type, setEvent] = useState([]);
    // const [timestamp, setDate] = useState([]);
    // const [signature, setAttack] = useState([]);
    // const [src_ip, setSrcIp] = useState([]);
    // const [dest_ip, setDstIp] = useState([]);
    // const [src_port, setSrcPort] = useState([]);
    // const [dest_port, setDstPort] = useState([]);
    // const [proto, setProtocol] = useState([]);

    // setEvent(data?.map((item: any) => item.event_type));
    // setDate(data?.map((item: any) => item.timestamp));
    // setAttack(data?.map((item: any) => item.signature));
    // setSrcIp(data?.map((item: any) => item.src_ip));
    // setSrcPort(data?.map((item: any) => item.src_port));
    // setDstIp(data?.map((item: any) => item.dest_ip));
    // setDstPort(data?.map((item: any) => item.dest_port));
    // setProtocol(data?.map((item: any) => item.proto));

    type User = {
        id: string;
        event_type: string;
        timestamp: string;
        signature: string;
        src_ip: string;
        src_port: number;
        dest_ip: string;
        dest_port: number;
        proto: string;
    };

    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        fetch('/ips/notificate')
            .then((response) => response.json())
            .then((json: any) => setUsers(json));
    }, []);

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        const dataTable = new (window as any).simpleDatatables.DataTable(datatablesSimple, {
            sortable: false,
        });
    }

    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Real-time Notification</h1>
                        <ol className="breadcrumb mb-4"></ol>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                DataTable
                            </div>
                            <div className="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th>Event</th>
                                            <th>Date</th>
                                            <th>Info</th>
                                            <th>Src</th>
                                            <th>Src Port</th>
                                            <th>Dst</th>
                                            <th>Dst Port</th>
                                            <th>Protocol</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Event</th>
                                            <th>Date</th>
                                            <th>Info</th>
                                            <th>Src</th>
                                            <th>Src Port</th>
                                            <th>Dst</th>
                                            <th>Dst Port</th>
                                            <th>Protocol</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.event_type}</td>
                                                <td>{new Date(user.timestamp).toLocaleString()}</td>
                                                <td>{user.signature}</td>
                                                <td>{user.src_ip}</td>
                                                <td>{user.src_port}</td>
                                                <td>{user.dest_ip}</td>
                                                <td>{user.dest_port}</td>
                                                <td>{user.proto}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Live;
