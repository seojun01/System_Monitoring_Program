import React, { useEffect, useState } from 'react';
import './pages.css';
import ReactApexChart from 'react-apexcharts';

function Cpu(): any {
    /*const [cpuInfo, setCpuInfo] = useState(null); */
    const [host, setHost] = useState([]);
    const [osVer, setOsver] = useState([]);
    const [kernelVer, setKernelver] = useState([]);
    const [totalDisk, setTotaldisk] = useState([]);
    const [memUsage, setMemusage] = useState([]);
    const [memAvail, setMemavail] = useState([]);
    const [diskUsage, setDiskusage] = useState([]);
    const [upTime, setUptime] = useState([]);

    /* <<제거    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/cpuinfo'); // 백엔드 API 엔드포인트 설정 필요
                if (!response.ok) {
                    throw new Error('데이터 가져오기 실패');
                }
                const data = await response.json();
                setCpuInfo(data);
            } catch (error) {
                console.error('데이터 가져오기 에러:', error);
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 1000);

        return () => clearInterval(interval);
    }, []);
    /*사용 방법: cpuInfo.cpuUsage, cpuInfo.cpuTemp*/

    useEffect(() => {
        const getData = async () => {
            const url = '/fixedinfo';
            try {
                const response = await fetch(url);
                const host = await response.json();
                setHost(host?.map((item: any) => item.host));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            const url = '/fixedinfo';
            try {
                const response = await fetch(url);
                const osVer = await response.json();
                setOsver(osVer?.map((item: any) => item.osver));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            const url = '/fixedinfo';
            try {
                const response = await fetch(url);
                const kernelVer = await response.json();
                setKernelver(kernelVer?.map((item: any) => item.kernelver));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            const url = '/fixedinfo';
            try {
                const response = await fetch(url);
                const totalDisk = await response.json();
                setTotaldisk(totalDisk?.map((item: any) => item.totaldisk));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const url = '/varinfo';
            try {
                const response = await fetch(url);
                const memAvail = await response.json();
                console.log(memAvail);
                setMemavail(memAvail?.map((item: any) => item.memavail));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
        const interval = setInterval(getData, 5000); /* 5초 */

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const getData = async () => {
            const url = '/varinfo';
            try {
                const response = await fetch(url);
                const memUsage = await response.json();
                setMemusage(memUsage?.map((item: any) => item.memusage));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
        const interval = setInterval(getData, 5000); /* 5초 */

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const getData = async () => {
            const url = '/varinfo';
            try {
                const response = await fetch(url);
                const diskUsage = await response.json();
                setDiskusage(diskUsage?.map((item: any) => item.diskusage));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
        const interval = setInterval(getData, 5000); /* 5초 */

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const getData = async () => {
            const url = '/varinfo';
            try {
                const response = await fetch(url);
                const upTime = await response.json();
                setUptime(upTime?.map((item: any) => item.uptime));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
        const interval = setInterval(getData, 5000); /* 5초 */

        return () => clearInterval(interval);
    }, []);

    var chart1: any = {
        options: {
            chart: {
                height: 280,
                type: 'area',
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
            xaxis: {
                type: 'datetime',
                categories: [
                    '2023-09-5T01:00:00.000Z',
                    '2023-09-5T02:00:00.000Z',
                    '2023-09-5T03:00:00.000Z',
                    '2023-09-5T04:00:00.000Z',
                    '2023-09-5T05:00:00.000Z',
                    '2023-09-5T06:00:00.000Z',
                    '2023-09-5T07:00:00.000Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
            title: {
                text: 'CPU',
                align: 'left',
            },
            yaxis: [
                {
                    title: {
                        text: 'Percentage',
                    },
                    labels: {
                        formatter: function (value0: any): string {
                            return value0 + '%';
                        },
                    },
                },
                {
                    opposite: true,
                    title: {
                        text: 'Celsius',
                    },
                },
            ],
            grid: {
                show: false,
            },
        },
        series: [
            {
                name: 'USAGE',
                data: [50, 40, 28, 51, 42, 90, 70] /*cpuInfo. */,
            },
            {
                name: 'TEMP',
                data: [60, 65, 64, 60, 67, 70, 68] /*cpuInfo. */,
            },
        ],
    };

    const chart2: any = {
        series: [memUsage],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -20,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120,
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val: any) {
                                return val + '%';
                            },
                        },
                    },
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                },
            },
            stroke: {
                dashArray: 4,
            },
            labels: ['메모리 사용량'],
        },
    };

    const chart3: any = {
        series: [memAvail],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -20,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120,
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val: any) {
                                return val + '%';
                            },
                        },
                    },
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                },
            },
            stroke: {
                dashArray: 4,
            },
            labels: ['메모리 잔여량'],
        },
    };

    var chart4: any = {
        series: [totalDisk, diskUsage],
        options: {
            chart: {
                height: 390,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '50%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        },
                    },
                },
            },
            colors: ['#1ab7ea', '#0084ff'],
            labels: ['디스크 총 용량', '디스크 사용량'],
            legend: {
                show: true,
                floating: true,
                fontSize: '14%',
                position: 'left',
                offsetX: -10,
                offsetY: 15,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 0,
                },
                formatter: function (seriesName: any, opts: any) {
                    return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex] + 'GB';
                },
                itemMargin: {
                    vertical: 3,
                },
            },
            responsive: [
                {
                    breakpoint: 48,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        },
    };

    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
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
                            System_Info
                        </h1>
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                    <div id="chart-container">
                        <div id="chart1">
                            <ReactApexChart
                                options={chart1.options}
                                series={chart1.series}
                                type="area"
                                height={chart1.options.chart.height}
                            />
                        </div>
                        <div id="memory1">
                            <ReactApexChart
                                options={chart2.options}
                                series={chart2.series}
                                type="radialBar"
                                height={chart2.options.chart.height}
                            />
                        </div>
                        <div id="memory2">
                            <ReactApexChart
                                options={chart3.options}
                                series={chart3.series}
                                type="radialBar"
                                height={chart3.options.chart.height}
                            />
                        </div>
                        <div id="disk">
                            <ReactApexChart
                                options={chart4.options}
                                series={chart4.series}
                                type="radialBar"
                                height={chart4.options.chart.height}
                            />
                        </div>
                        <div id="table">
                            <table className="type04">
                                <tbody>
                                    <tr>
                                        <th scope="row">host</th>
                                        <td>{host}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">os</th>
                                        <td>{osVer}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">kernel</th>
                                        <td>{kernelVer}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">uptime</th>
                                        <td>{upTime}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Cpu;
