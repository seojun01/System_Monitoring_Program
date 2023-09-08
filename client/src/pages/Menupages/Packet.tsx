import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import './pages.css';

function Packet(): JSX.Element {
    interface TrafficData {
        reception: number[];
        send: number[];
        _time: string[];
        conn: number[];
    }
    const [trafficData, setTrafficData] = useState<TrafficData>({
        reception: [1, 2, 3, 4, 5],
        send: [1, 10, 3, 4, 5, 1, 5],
        _time: ['1', '2', '3', '4', '5', '6', '7', '8'],
        conn: [1, 10, 3, 4, 5, 1, 5],
    });

    useEffect(() => {
        const fetchData = () => {
            fetch('/packetinfo/1')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setTrafficData(data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        };
        const interval = setInterval(fetchData, 1000);

        return () => clearInterval(interval);
    }, [trafficData]);

    function lentime() {
        var time: any[] = [];
        for (var i = 5; i >= 1; i--) {
            time.push(trafficData._time[trafficData._time.length - i]);
        }
        return time;
    }

    function lenreception() {
        var reception: any[] = [];
        for (var i = 5; i >= 1; i--) {
            reception.push(trafficData.reception[trafficData.reception.length - i]);
        }
        return reception;
    }

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
                categories: trafficData._time.slice(-5),
            },
        },

        series: [
            {
                name: 'reception',
                data: trafficData.reception.slice(-5),
            },
            {
                name: 'send',
                data: trafficData.send.slice(-5),
            },
            {
                name: 'conn',
                data: trafficData.conn.slice(-5),
            },
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
            <div id="layoutSidenav_content" style={{ backgroundColor: '#f2f2f2', height: '100%' }}>
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
                            Dashboard
                        </h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active"></li>
                        </ol>
                    </div>
                    <div id="Packet-chart-container">
                        <div id="chart">
                            <div
                                id="network"
                                style={{ width: '99.99%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}
                            >
                                <ReactApexChart
                                    options={chart1.options}
                                    series={chart1.series}
                                    type="area"
                                    height={280}
                                />
                            </div>
                            <div
                                id="at_types_and_risk"
                                style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1%' }}
                            >
                                <div
                                    id="at_types"
                                    style={{ width: '49%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <ReactApexChart
                                        options={chart2.options}
                                        series={chart2.series}
                                        type="radar"
                                        height={350}
                                    />
                                </div>
                                <div
                                    id="at_risk"
                                    style={{ width: '49%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <ReactApexChart
                                        options={chart3.options}
                                        series={chart3.series}
                                        type="pie"
                                        height={350}
                                    />
                                </div>
                            </div>
                            <div
                                id="at_count"
                                style={{
                                    width: '100%',
                                    marginTop: '2.2%',
                                    boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <ReactApexChart
                                    options={chart4.options}
                                    series={chart4.series}
                                    type="bar"
                                    height={380}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Packet;
