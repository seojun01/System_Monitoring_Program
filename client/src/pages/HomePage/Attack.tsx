import '../Menupages/Css/pages.css';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function Attack(): JSX.Element {
    const [Packet, setPacket] = useState([]);
    const [Src, setSrc] = useState([]);
    const [PortPacket, setPortPacket] = useState([]);
    const [AttPacket, setAttPacket] = useState([]);
    const [AttType, setAttType] = useState([]);
    const [AttRisk, setAttRisk] = useState([]);
    const [time, setTime] = useState([]);
    const [Reception, setReception] = useState([]);
    const [Send, setSend] = useState([]);
    const [Conn, setConn] = useState([]);
    const [Udp, setUdp] = useState([]);
    const [Tcp, setTcp] = useState([]);

    useEffect(() => {
        const eventSource = new EventSource('/packetinfo');
        eventSource.onmessage = (msg) => {
            try {
                const data = JSON.parse(msg.data); // JSON 문자열을 파싱
                console.log(data);

                // Update the state with the new data
                setTime(data?.map((item: any) => item._time));
                setReception(data?.map((item: any) => item.reception));
                setSend(data?.map((item: any) => item.send));
                setConn(data?.map((item: any) => item.conn));
                setUdp(data?.map((item: any) => item.udp));
                setTcp(data?.map((item: any) => item.tcp));
            } catch (error) {
                console.error('Error parsing data:', error);
            }
        };
    }, []);

    const conn_chart: any = {
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                type: 'area',
                height: 280,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            markers: {
                size: 0,
            },
            title: {
                text: 'Network Packet',
                align: 'left',
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100],
                },
            },
            xaxis: {
                categories: time.slice(0, 10).reverse(),
            },
            yaxis: {
                min: 0,
            },
            colors: ['#7400b8', '#FA2C25', '#3739FA'],
        },
        series: [
            {
                name: 'Connection',
                data: Conn.slice(0, 10).reverse(),
            },
            {
                name: 'Reception',
                data: Reception.slice(0, 10).reverse(),
            },
            {
                name: 'Send',
                data: Send.slice(0, 10).reverse(),
            },
        ],
    };

    const SRC_IP_Packet_Amount_chart: any = {
        options: {
            chart: {
                height: 360,
                type: 'bar',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            title: {
                text: 'SRC IP Packet',
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
                height: 300,
                type: 'bar',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            title: {
                text: 'Port Packet',
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

    const dst_ip: any = {
        options: {
            chart: {
                height: 315,
                type: 'bar',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            colors: ['#5B0888'],
            title: {
                text: 'Dst Ip',
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

    const dst_port: any = {
        options: {
            chart: {
                height: 315,
                type: 'bar',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            colors: ['#DA0C81'],
            title: {
                text: 'Dst Port',
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

    const Event_Type_chart: any = {
        options: {
            chart: {
                type: 'bar',
                height: 280,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            title: {
                text: 'Event Type',
                align: 'left',
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: [
                    'South Korea',
                    'Canada',
                    'United Kingdom',
                    'Netherlands',
                    'Italy',
                    'France',
                    'Japan',
                    'United States',
                    'China',
                    'Germany',
                ],
            },
        },
        series: [
            {
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
            },
        ],
    };

    const Drop_chart: any = {
        options: {
            chart: {
                height: 300,
                type: 'radar',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            title: {
                text: 'Drop',
                align: 'left',
            },
            xaxis: {
                categories: ['DDOS', 'SQL', 'March', 'April', 'May', 'June'],
            },
        },
        series: [
            {
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            },
        ],
    };

    const UDP_TCP_chart: any = {
        options: {
            chart: {
                height: 300,
                type: 'donut',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
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
            title: {
                text: 'TCP And UDP',
                align: 'left',
            },
            labels: ['TCP', 'UDP'],
        },
        name: 'TCP And UDP',
        series: [44, 55],
    };

    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Network</h1>
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                    <div id="conn">
                        <ReactApexChart
                            options={conn_chart.options}
                            series={conn_chart.series}
                            type={conn_chart.options.chart.type}
                            height={conn_chart.options.chart.height}
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
                    <div id="srcAndPort">
                        <div id="src">
                            <ReactApexChart
                                options={dst_ip.options}
                                series={dst_ip.series}
                                type={dst_ip.options.chart.type}
                                height={dst_ip.options.chart.height}
                            />
                        </div>
                        <div id="port">
                            <ReactApexChart
                                options={dst_port.options}
                                series={dst_port.series}
                                type={dst_port.options.chart.type}
                                height={dst_port.options.chart.height}
                            />
                        </div>
                    </div>
                    <div className="container-fluid px-4">
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                    <div id="allPacket">
                        <ReactApexChart
                            options={Event_Type_chart.options}
                            series={Event_Type_chart.series}
                            type={Event_Type_chart.options.chart.type}
                            height={Event_Type_chart.options.chart.height}
                        />
                    </div>
                    <div id="srcAndPort">
                        <div id="src">
                            <ReactApexChart
                                options={UDP_TCP_chart.options}
                                series={UDP_TCP_chart.series}
                                type={UDP_TCP_chart.options.chart.type}
                                height={UDP_TCP_chart.options.chart.height}
                            />
                        </div>
                        <div id="port">
                            <ReactApexChart
                                options={Drop_chart.options}
                                series={Drop_chart.series}
                                type={Drop_chart.options.chart.type}
                                height={Drop_chart.options.chart.height}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Attack;
