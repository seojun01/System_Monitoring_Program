import '../Menupages/Css/pages.css';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function Attack(): JSX.Element {
    const [SrcIp, setSrcIp] = useState([]);
    const [SrcPort, setSrcPort] = useState([]);
    const [DstIp, setDstIp] = useState([]);
    const [DstPort, setDstPort] = useState([]);
    const [time, setTime] = useState([]);
    const [Reception, setReception] = useState([]);
    const [Send, setSend] = useState([]);
    const [Conn, setConn] = useState([]);
    const [Udp, setUdp] = useState([]);
    const [Tcp, setTcp] = useState([]);
    const [Drop, setDrop] = useState([]);
    const [Flow, setFlow] = useState([]);
    const [Alert, setAlert] = useState([]);
    const [Stats, setStats] = useState([]);
    const [Ssh, setSsh] = useState([]);
    const [Dns, setDns] = useState([]);
    const [Http, setHttp] = useState([]);
    const [Rdp, setRdp] = useState([]);
    const [SysScan, setSysScan] = useState([]);
    const [SysFlood, setSysFlood] = useState([]);
    const [FinScan, setFinScan] = useState([]);
    const [XmasScan, setXmasScan] = useState([]);
    const [NullScan, setNullScan] = useState([]);

    useEffect(() => {
        const eventSource = new EventSource('/packetinfo');
        eventSource.onmessage = (msg) => {
            try {
                const data = JSON.parse(msg.data); // JSON 문자열을 파싱
                //console.log(data);

                // Update the state with the new data
                setTime(data?.map((item: any) => item._time));
                setReception(data?.map((item: any) => item.reception));
                setSend(data?.map((item: any) => item.send));
                setConn(data?.map((item: any) => item.conn));
            } catch (error) {
                console.error('Error parsing data:', error);
            }
        };
        const Iport = async () => {
            try {
                const response = await fetch('/ips/iport');
                const data = await response.json();
                setSrcIp(data?.map((item: any) => item.src_ip));
                setSrcPort(data?.map((item: any) => item.src_port));
                setDstIp(data?.map((item: any) => item.dest_ip));
                setDstPort(data?.map((item: any) => item.dest_port));
                // const srcIpCounts: Map<string, number> = new Map();
                // for (const entry of data) {
                //     const srcIp = data.src_ip;
                //     if (srcIp && srcIp !== "") {
                //         if (srcIpCounts.has(srcIp)) {
                //             srcIpCounts.set(srcIp, srcIpCounts.get(srcIp)! + 1);
                //         } else {
                //             srcIpCounts.set(srcIp, 1);
                //         }
                //     }
                // }

                // for (const [srcIp, count] of srcIpCounts.entries()) {
                //     if (count > 1) {
                //         console.log(`src_ip: ${srcIp} 중복 횟수: ${count}`);
                //     }
                // }
            } catch (error) {
                console.error('/ips/iport', error);
            }
        };
        Iport();
        const proto = async () => {
            try {
                const response = await fetch('/ips/proto');
                const data = await response.json();
                setUdp(data?.udp);
                setTcp(data?.tcp);
            } catch (error) {
                console.error('proto', error);
            }
        };
        proto();

        const Eventtype = async () => {
            try {
                const response = await fetch('/ips/eventtype');
                const data = await response.json();
                setDrop(data?.drop);
                setFlow(data?.flow);
                setAlert(data?.alert);
                setStats(data?.stats);
                setSsh(data?.ssh);
                setDns(data?.dns);
                setHttp(data?.http);
                setRdp(data?.rdp);
            } catch (error) {
                console.error('proto', error);
            }
        };
        Eventtype();
        const Attacks = async () => {
            try {
                const response = await fetch('/ips/attacks');
                const data = await response.json();
                setSysScan(data?.synScan);
                setSysFlood(data?.synFlood);
                setFinScan(data?.finScan);
                setXmasScan(data?.xmasScan);
                setNullScan(data?.nullScan);
            } catch (error) {
                console.error('proto', error);
            }
        };
        Attacks();
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
                text: 'Src IP',
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
                text: 'Src Port',
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
                text: 'Dst IP',
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
                categories: ['Drop', 'Flow', 'Alert', 'Stats', 'Ssh', 'Dns', 'Http', 'Rdp'],
            },
        },
        series: [
            {
                data: [Drop, Flow, Alert, Stats, Ssh, Dns, Http, Rdp],
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
                categories: ['SynScan', 'SynFlood', 'FinScan', 'XmasScan', 'NullScan'],
            },
        },
        series: [
            {
                name: 'Series 1',
                data: [SysScan, SysFlood, FinScan, XmasScan, NullScan],
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
        series: [Tcp, Udp],
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
