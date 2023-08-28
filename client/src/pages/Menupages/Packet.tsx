import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './pages.css';

function Packet(): JSX.Element {
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
                categories: ['12:39', '12:40', '12:41', '12:42', '12:43'],
            },
        },

        series: [
            {
                name: '1',
                data: [16, 20, 10, 9, 20],
            },
            {
                name: '2',
                data: [19, 25, 20, 9, 2],
            },
            {
                name: '3',
                data: [10, 23, 40, 9, 30],
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
<<<<<<< HEAD
            <div id="layoutSidenav_content" style={{ backgroundColor: '#f2f2f2', height: '167vh', }}>
=======
            <div id="layoutSidenav_content" style={{ backgroundColor: '#f2f2f2', height: '169vh' }}>
>>>>>>> c68ee191fab937500c45a081c3b8efa0bd2f8e43
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
                    </div>
                    <div id="Packet-chart-container">
                        <div id="chart">
<<<<<<< HEAD
                            <div id="network" style={{ width: '100%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}>
=======
                            <div
                                id="network"
                                style={{ width: '1175px', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}
                            >
>>>>>>> c68ee191fab937500c45a081c3b8efa0bd2f8e43
                                <ReactApexChart
                                    options={chart1.options}
                                    series={chart1.series}
                                    type="area"
                                    height={280}
                                />
                            </div>
<<<<<<< HEAD
                            <div id="at_types" style={{ width: '48.7%', marginTop: '1%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}>
=======
                            <div
                                id="at_types"
                                style={{
                                    width: '570px',
                                    marginTop: '15px',
                                    boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
>>>>>>> c68ee191fab937500c45a081c3b8efa0bd2f8e43
                                <ReactApexChart
                                    options={chart2.options}
                                    series={chart2.series}
                                    type="radar"
                                    height={350}
                                />
                            </div>
<<<<<<< HEAD
                            <div id="at_risk" style={{ width: '48.7%', marginTop: '-31.1%', marginLeft: '51.3%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}>
=======
                            <div
                                id="at_risk"
                                style={{
                                    width: '570px',
                                    marginTop: '-366px',
                                    marginLeft: '604px',
                                    boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
>>>>>>> c68ee191fab937500c45a081c3b8efa0bd2f8e43
                                <ReactApexChart
                                    options={chart3.options}
                                    series={chart3.series}
                                    type="pie"
                                    height={350}
                                />
                            </div>
<<<<<<< HEAD
                            <div id="at_count" style={{ width: '100%', marginTop: '2.2%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}>
=======
                            <div
                                id="at_count"
                                style={{
                                    width: '1175px',
                                    marginTop: '30px',
                                    boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
>>>>>>> c68ee191fab937500c45a081c3b8efa0bd2f8e43
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
