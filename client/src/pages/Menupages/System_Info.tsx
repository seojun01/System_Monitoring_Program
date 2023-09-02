import React, { useEffect, useState } from 'react';
import './pages.css';
import ReactApexChart from 'react-apexcharts';

function Cpu(): any {
    const [systemInfo, setSystemInfo] = useState(null);
    const [cpuInfo, setCpuInfo] = useState({ cpuUsage: 0, cpuTemp: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(''); // 백엔드 API 엔드포인트 설정 필요
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
        const fetchData = () => {
            fetch('')
                .then((response) => response.json())
                .then((data) => {
                    setSystemInfo(data);
                })
                .catch((error) => {
                    console.error('데이터 가져오기 에러:', error);
                });
        };

        fetchData();

        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);
    }, []);
    /*
	사용방법: 
	systemInfo.hostName, systemInfo.OSRelease,
    systemInfo.kernelVersion, systemInfo.serverUptime,
    systemInfo.memoryUsage, systemInfo.memoryAvailable,
    systemInfo.totalDiskSize, systemInfo.diskUsage
    */

    if (systemInfo === null) {
        return null;
    }

    const chart1: any = {
        options: {
            chart: {
                height: 280,
                type: 'area',
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
                data: [31, 40, 28, 51, 42, 90, 70] /*cpuInfo.cpuUsage*/,
            },
            {
                name: 'TEMP',
                data: [60, 65, 64, 60, 67, 70, 68] /*cpuInfo.cpuTemp*/,
            },
        ],
    };

    const chart2: any = {
        series: systemInfo.memoryUsage,
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
                            formatter: function (val: number) {
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
        series: systemInfo.memoryAvailable,
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
                            formatter: function (val: number) {
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

    const chart4: any = {
        series: [systemInfo.totalDiskSize, systemInfo.diskUsage],
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
                        size: '30%',
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
                fontSize: '16px',
                position: 'left',
                offsetX: 40,
                offsetY: 15,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 0,
                },
                formatter: function (seriesName: string, opts: any) {
                    return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
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
                    </div>
                    <div id="chart">
                        <div id="chart1">
                            <ReactApexChart
                                options={chart1.options}
                                series={chart1.series}
                                type="area"
                                height={chart1.options.chart.height}
                            />
                        </div>
                    </div>
                    <div id="chart-container">
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
                                <tr>
                                    <th scope="row">Host</th>
                                    <td>{systemInfo.hostName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">OS</th>
                                    <td>{systemInfo.OSRelease}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Kernel</th>
                                    <td>{systemInfo.kernelVersion}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Uptime</th>
                                    <td>{systemInfo.serverUptime}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Cpu;
