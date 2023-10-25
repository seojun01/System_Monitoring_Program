import './pages.css';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function Attack(): JSX.Element {
    const [Packet, setPacket] = useState([]);
    const [Src, setSrc] = useState([]);
    const [PortPacket, setPortPacket] = useState([]);
    const [AttPacket, setAttPacket] = useState([]);
    const [AttType, setAttType] = useState([]);
    const [AttRisk, setAttRisk] = useState([]);


    const Packet_Data_chart: any = {
        options: {
            chart: {
                height: 280,
                type: 'line',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            colors: ['#2828CD'],
            title: {
                text: 'Packet Data',
                align: 'left',
            },
            markers: {
                size: 0,
            },
            xaxis: {
                categories: [
                    '12:55:06',
                    '12:55:07',
                    '12:55:08',
                    '12:55:09',
                    '12:55:10',
                    '12:55:11',
                    '12:55:12',
                    '12:55:13',
                    '12:55:14',
                    '12:55:15',
                ],
            },
            legend: {
                show: false,
            },
        },
        series: [
            {
                data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31],
            },
        ],
    };
    const SRC_IP_Packet_Amount_chart: any = {
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            title: {
                text: 'SRC IP Packet Amount',
                align: 'left',
            },
            colors: ['#D25A5A'],
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },

            grid: {
                row: {
                    colors: ['#fff', '#f2f2f2'],
                },
            },
            xaxis: {
                labels: {
                    rotate: -45,
                },
                categories: [
                    '192.168.0.1',
                    '192.168.0.2',
                    '192.168.0.3',
                    '192.168.0.4',
                    '192.168.0.5',
                    '192.168.0.6',
                    '192.168.0.7',
                    '192.168.0.8',
                    '192.168.0.9',
                    '192.168.0.10',
                    '192.168.0.11',
                    '192.168.0.12',
                    '192.168.0.13',
                ],
                tickPlacement: 'on',
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'horizontal',
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100],
                },
            },
        },
        series: [
            {
                name: 'Servings',
                data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
            },
        ],
    };
    const Port_Packet_Amount_chart: any = {
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            title: {
                text: 'Port Packet Amount',
                align: 'left',
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },

            grid: {
                row: {
                    colors: ['#fff', '#f2f2f2'],
                },
            },
            xaxis: {
                labels: {
                    rotate: -45,
                },
                categories: [
                    '80',
                    '22',
                    '8080',
                    '1234',
                    '443',
                    '3389',
                    '5678',
                    '8000',
                    '9000',
                    '8888',
                    '9999',
                    '1111',
                    '2222',
                ],
                tickPlacement: 'on',
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'horizontal',
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100],
                },
            },
        },
        series: [
            {
                name: 'Servings',
                data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
            },
        ],
    };
    const Attack_Packet_Data_Amount_chart: any = {
        options: {
            chart: {
                id: 'chartyear',
                type: 'area',
                height: 280,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            title: {
                text: 'Attack Packet Data Amount',
                align: 'left',
            },
            colors: ['#FF7F00'],
            stroke: {
                width: 0,
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                opacity: 1,
                type: 'solid',
            },
            yaxis: {
                tickAmount: 3,
            },
            xaxis: {
                categories: [
                    '12:55:06',
                    '12:55:07',
                    '12:55:08',
                    '12:55:09',
                    '12:55:10',
                    '12:55:11',
                    '12:55:12',
                    '12:55:13',
                    '12:55:14',
                    '12:55:15',
                    '12:55:16',
                    '12:55:17',
                    '12:55:18',
                ],
            },
        },
        series: [
            {
                name: 'Servings',
                data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
            },
        ],
    };

    const Type_of_attack_chart: any = {
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                type: 'radar',
                height: 350,
            },
            stroke: {
                curve: 'smooth',
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

    const Attack_Risk_chart: any = {
        options: {
            chart: {
                width: 380,
                type: 'pie',
                height: 350,
            },
            title: {
                text: 'Attack Risk',
                align: 'left',
                style: {
                    color: 'black',
                },
            },
            stroke: {
                curve: 'smooth',
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
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Attack Packet</h1>
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                    <div id="allPacket">
                        <ReactApexChart
                            options={Packet_Data_chart.options}
                            series={Packet_Data_chart.series}
                            type={Packet_Data_chart.options.chart.type}
                            height={Packet_Data_chart.options.chart.height}
                        />
                    </div>
                    <div id="srcAndPort">
                        <div id="src">
                            <ReactApexChart
                                options={SRC_IP_Packet_Amount_chart.options}
                                series={SRC_IP_Packet_Amount_chart.series}
                                type={SRC_IP_Packet_Amount_chart.options.chart.type}
                                height={SRC_IP_Packet_Amount_chart.options.chart.height}
                            />
                        </div>
                        <div id="port">
                            <ReactApexChart
                                options={Port_Packet_Amount_chart.options}
                                series={Port_Packet_Amount_chart.series}
                                type={Port_Packet_Amount_chart.options.chart.type}
                                height={Port_Packet_Amount_chart.options.chart.height}
                            />
                        </div>
                    </div>
                    <div id="attack">
                        <ReactApexChart
                            options={Attack_Packet_Data_Amount_chart.options}
                            series={Attack_Packet_Data_Amount_chart.series}
                            type={Attack_Packet_Data_Amount_chart.options.chart.type}
                            height={Attack_Packet_Data_Amount_chart.options.chart.height}
                        />
                    </div>
                    <div id="attackTypeAndRisk">
                        <div id="attackType">
                            <ReactApexChart
                                options={Type_of_attack_chart.options}
                                series={Type_of_attack_chart.series}
                                type={Type_of_attack_chart.options.chart.type}
                                height={Type_of_attack_chart.options.chart.height}
                            />
                        </div>
                        <div id="attackRisk">
                            <ReactApexChart
                                options={Attack_Risk_chart.options}
                                series={Attack_Risk_chart.series}
                                type={Attack_Risk_chart.options.chart.type}
                                height={Attack_Risk_chart.options.chart.height}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Attack;
