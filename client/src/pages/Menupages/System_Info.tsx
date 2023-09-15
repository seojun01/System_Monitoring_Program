import React, { useEffect, useState } from 'react';
import './pages.css';
import ReactApexChart from 'react-apexcharts';

function Cpu(): any {
    const [host, setHost] = useState([]);
    const [osVer, setOsver] = useState([]);
    const [kernelVer, setKernelver] = useState([]);
    const [totalDisk, setTotaldisk] = useState([]);
    const [memUsage, setMemusage] = useState([]);
    const [memAvail, setMemavail] = useState([]);
    const [diskUsage, setDiskusage] = useState([]);
    const [upTime, setUptime] = useState([]);
    const [cpuTemp, setCpuTemp] = useState([]);
    const [cpuUsage, setCpuUsage] = useState([]);
    const [cpuTime, setCpuTime] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = '/cpuinfo';
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCpuTemp(data?.map((item: any) => item.cpuTemp));
                setCpuUsage(data?.map((item: any) => item.cpuUsage));
                setCpuTime(data?.map((item: any) => item._time));
            } catch (error) {
                console.log(error);
            }
        };
        getData();

        const interval = setInterval(getData, 1000);

        return () => clearInterval(interval);
    }, []);
    /*사용 방법: cpuUsage, cpuTemp*/

    useEffect(() => {
        const getData = async () => {
            const url = '/fixedinfo';
            try {
                const response = await fetch(url);
                const data = await response.json();
                setHost(data?.map((item: any) => item.host));
                setOsver(data?.map((item: any) => item.osver));
                setKernelver(data?.map((item: any) => item.kernelver));
                setTotaldisk(data?.map((item: any) => item.totaldisk));
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
                const data = await response.json();
                setMemavail(data?.map((item: any) => item.memavail));
                setMemusage(data?.map((item: any) => item.memusage));
                setDiskusage(data?.map((item: any) => item.diskusage));
                setUptime(data?.map((item: any) => item.uptime));
            } catch (error) {
                console.log(error);
            }
        };
        getData();
        const interval = setInterval(getData, 10000);

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
                categories: cpuTime.slice(0, 10).reverse(),
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
                data: cpuUsage.slice(0, 10).reverse() /*cpuInfo. */,
            },
            {
                name: 'TEMP',
                data: cpuTemp.slice(0, 10).reverse() /*cpuInfo. */,
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
                    <div id="chart1">
                        <ReactApexChart
                            options={chart1.options}
                            series={chart1.series}
                            type="area"
                            height={chart1.options.chart.height}
                        />
                    </div>
                    <div id="memContainer">
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
                    </div>
                    <div id="disk-table">
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
