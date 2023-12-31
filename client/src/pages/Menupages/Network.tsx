import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Css/pages.css';

function NetworkPacket(): JSX.Element {
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
                text: '연결',
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
            colors: ['#7400b8'],
        },
        series: [
            {
                name: 'conn',
                data: Conn.slice(0, 10).reverse(),
            },
        ],
    };

    const reception_chart: any = {
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                type: 'area',
                height: 350,
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
                text: '수신',
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
            colors: ['#FA2C25'],
        },
        series: [
            {
                name: 'Reception',
                data: Reception.slice(0, 10).reverse(),
            },
        ],
    };
    const send_chart: any = {
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                type: 'area',
                height: 350,
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
                text: '송신',
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
            colors: ['#3739FA'],
        },
        series: [
            {
                name: 'send',
                data: Send.slice(0, 10).reverse(),
            },
        ],
    };

    const UDP_TCP_chart: any = {
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                height: 320,
                type: 'bar',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            fill: {
                opacity: 0.8,
            },
            title: {
                text: 'UDP And TCP',
            },
            xaxis: {
                tickAmount: 12,
                type: 'category',
            },
            colors: ['#5390d9', '#f26a8d'],
        },
        series: [
            {
                name: 'UDP',
                data: [5, 8, 9, 8, 7, 6, 4, 8, 8, 7, 9, 8, 7],
            },
            {
                name: 'TCP',
                data: [5, 8, 9, 8, 7, 19, 4, 8, 8, 7, 9, 8, 7],
            },
        ],
    };

    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Network Packet</h1>
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
                    <div id="packetContainer">
                        <div id="reception">
                            <ReactApexChart
                                options={reception_chart.options}
                                series={reception_chart.series}
                                type={reception_chart.options.chart.type}
                                height={reception_chart.options.chart.height}
                            />
                        </div>
                        <div id="send">
                            <ReactApexChart
                                options={send_chart.options}
                                series={send_chart.series}
                                type={send_chart.options.chart.type}
                                height={send_chart.options.chart.height}
                            />
                        </div>
                    </div>
                    <div id="protocol">
                        <ReactApexChart
                            options={UDP_TCP_chart.options}
                            series={UDP_TCP_chart.series}
                            type={UDP_TCP_chart.options.chart.type}
                            height={UDP_TCP_chart.options.chart.height}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default NetworkPacket;
