import React, {useState, useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';
import './pages.css';
import { log } from 'console';
import { url } from 'inspector';

function Packet(): JSX.Element {
    const [time, setTime] = useState([]);
    const [Reception, setReception] = useState([]);
    const [Send, setSend] = useState([]);
    const [Conn, setConn] = useState([]);
      
    useEffect(() => {
        const getData = async () => {
            const url = '/packetinfo';
        try {
            const response = await fetch(url);
            const time = await response.json();
            setTime(time?.map((item: any) => item._time))

        } catch (error) {
            console.log(error)
        }
    };
    getData();
    const interval = setInterval(getData, 5000); /* 5초 */

    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const getData = async () => {
            const url = '/packetinfo';
        try {
            const response = await fetch(url);
            const Reception = await response.json();
            setReception(Reception?.map((item: any) => item.reception))

        } catch (error) {
            console.log(error)
        }
    };
    getData();
    const interval = setInterval(getData, 5000); /* 5초 */

    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const getData = async () => {
            const url = '/packetinfo';
        try {
            const response = await fetch(url);
            const Send = await response.json();
            setSend(Send?.map((item: any) => item.send))

        } catch (error) {
            console.log(error)
        }
    };
    getData();
    const interval = setInterval(getData, 5000); /* 5초 */

    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const getData = async () => {
            const url = '/packetinfo';
        try {
            const response = await fetch(url);
            const Conn = await response.json();
            setConn(Conn?.map((item: any) => item.conn))

        } catch (error) {
            console.log(error)
        }
    };
    getData();
    const interval = setInterval(getData, 5000); /* 5초 */

    return () => clearInterval(interval);
    }, []);
        

    const chart1: any = {
        options: {
            chart: {
                background: '#ffffff',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            title: {
                text: 'Packet',
                align: 'left',
                style: {
                    color: 'black',
                },
            },
            xaxis: {
                categories: time.slice(-5),
            },
        },

        series: [
            {
                name: 'reception',
                data: Reception.slice(-5),
            },
            {
                name: 'send',
                data: Send.slice(-5),
            },
            {
                name: 'conn',
                data: Conn.slice(-5),
            }
        ],
    };

    const chart2: any = {
        options: {
            chart: {
                background: '#ffffff',
                toolbar: {
                    show: false,
                },
            },
            title: {
                text: 'Type of attack',
                align: 'left',
                style: {
                    color: 'black',
                },
            },
            xaxis: {
                categories: ['SQL 인젝션', '커맨드 인젝션', 'Xpath 인젝션', 'XSS', 'CSRF'],
            },
        },
        series: [
            {
                name: '공격종류',
                data: [19, 25, 20, 9, 2],
            },
        ],
    };

    const chart3: any = {
        options: {
            chart: {
                background: '#ffffff',
                width: 380,
            },
            title: {
                text: 'Attack Risk',
                align: 'left',
                style: {
                    color: 'black',
                },
            },
            labels: ['관심', '주의', '경고', '위험'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        toolbar: {
                            show: false,
                        },
                    },
                },
            ],
        },
        name: '위험도',
        series: [44, 55, 13, 13],
    };

    const chart4: any = {
        options: {
            chart: {
                background: '#ffffff',
                toolbar: {
                    show: false,
                },
            },
            title: {
                text: 'Number of attacks',
                align: 'left',
                style: {
                    color: 'black',
                },
            },

            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
            xaxis: {
                categories: ['8:21', '8:22', '8:23', '8:24', '8:25', '8:26', '8.27'],
            },
            colors: ['#D25A5A'],
        },
        series: [
            {
                name: '공격횟수',
                data: [19, 25, 20, 9, 2, 5, 8],
            },
        ],
    };

    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content" style={{ backgroundColor: '#f2f2f2', height: '100%', }}>
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4" style={{
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            color: '#333'
                        }}>Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active"></li>
                        </ol>
                    </div>
                    <div id="Packet-chart-container">
                        <div id="chart">
                            <div id="network" style={{ width: '99.99%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}>
                                <ReactApexChart
                                    options={chart1.options}
                                    series={chart1.series}
                                    type="area"
                                    height={280} />
                            </div>
                            <div id="at_types_and_risk" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1%' }}>
                                <div id="at_types" style={{ width: '49%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}>
                                    <ReactApexChart
                                        options={chart2.options}
                                        series={chart2.series}
                                        type="radar"
                                        height={350}
                                    />
                                </div>
                                <div id="at_risk" style={{ width: '49%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}>
                                    <ReactApexChart
                                        options={chart3.options}
                                        series={chart3.series}
                                        type="pie"
                                        height={350}
                                    />
                                </div>
                            </div>
                            <div id="at_count" style={{ width: '100%', marginTop: '2.2%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}>
                                <ReactApexChart
                                    options={chart4.options}
                                    series={chart4.series}
                                    type="bar"
                                    height={380} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Packet;