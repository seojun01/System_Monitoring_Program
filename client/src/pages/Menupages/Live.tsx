import React, { useEffect, useState } from 'react';
import './Css/pages.css';
import './Css/Live.css';

function Live(): JSX.Element {
    const [event, setEvent] = useState([]);
    const [date, setDate] = useState([]);
    const [attack, setAttack] = useState([]);
    const [srcIp, setSrcIp] = useState([]);
    const [dstIp, setDstIp] = useState([]);
    const [srcPort, setSrcPort] = useState([]);
    const [dstPort, setDstPort] = useState([]);
    const [protocol, setProtocol] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/ips/notificate');
                const data = await response.json();
                setEvent(data?.map((item: any) => item.event));
                setDate(data?.map((item: any) => item.date));
                setAttack(data?.map((item: any) => item.attack));
                setSrcIp(data?.map((item: any) => item.srcIp));
                setSrcPort(data?.map((item: any) => item.srcPort));
                setDstIp(data?.map((item: any) => item.dstIp));
                setDstPort(data?.map((item: any) => item.dstPort));
                setProtocol(data?.map((item: any) => item.Protocol));
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        // Simple-DataTables
        // https://github.com/fiduswriter/Simple-DataTables/wiki

        const datatablesSimple = document.getElementById('datatablesSimple');
        if (datatablesSimple) {
            new (window as any).simpleDatatables.DataTable(datatablesSimple);
        }
    }, []);
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
                                        <tr>
                                            <td>{event}</td>
                                            <td>{date}</td>
                                            <td>{attack}</td>
                                            <td>{srcIp}</td>
                                            <td>{srcPort}</td>
                                            <td>{dstIp}</td>
                                            <td>{dstPort}</td>
                                            <td>{protocol}</td>
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
