import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import './pages.css';

function Packet(): JSX.Element {
    const [time, setTime] = useState([]);
    const [Reception, setReception] = useState([]);
    const [Send, setSend] = useState([]);
    const [Conn, setConn] = useState([]);

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
                var a =time.reverse();
            } catch (error) {
                console.error('Error parsing data:', error);
            }
        };
        }, []);
            // 새 데이터를 사용하여 상태를 업데이트
            

    // useEffect(() => {
    //     const getData = async () => {
    //         const url = '/packetinfo';
    //         try {
    //             const response = await fetch(url);
    //             const data = await response.json();
    //             console.log(data);
    //             setTime(data?.map((item: any) => item._time));
    //             setReception(data?.map((item: any) => item.reception));
    //             setSend(data?.map((item: any) => item.send));
    //             setConn(data?.map((item: any) => item.conn));
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getData();
    //     const interval = setInterval(getData, 5000);

    //     return () => clearInterval(interval);
    // }, []);

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
                text: 'Conn',
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
            colors: ['#11468F'],
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
                text: 'Reception',
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
                text: 'Send',
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
        },
        series: [
            {
                name: 'Bubble1',
                data: [5, 8, 9, 8, 7, 6, 4, 8, 8, 7, 9, 8, 7],
            },
            {
                name: 'Bubble4',
                data: [5, 8, 9, 8, 7, 19, 4, 8, 8, 7, 9, 8, 7],
            },
        ],
    };

    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
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

export default Packet;
