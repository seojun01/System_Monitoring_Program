import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Css/pages.css';

function Perfmon(): JSX.Element {
    const [host, setHost] = useState([]);
    const [osVer, setOsver] = useState([]);
    const [kernelVer, setKernelver] = useState([]);
    const [totalDisk, setTotaldisk] = useState([]);
    const [memUsage, setMemusage] = useState([]);
    const [memUsageDetail, setMemusagedetail] = useState([]);
    const [memAvail, setMemavail] = useState([]);
    const [diskUsage, setDiskusage] = useState([]);
    const [upTime, setUptime] = useState([]);
    const [cpuTemp, setCpuTemp] = useState([]);
    const [cpuUsage, setCpuUsage] = useState([]);
    const [cpuUsageDetail, setCpuUsageDetail] = useState([]);
    const [command, setCommand] = useState([]);
    const [cpuTime, setCpuTime] = useState([]);

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

        const eventSource1 = new EventSource('/cpuinfo');
        eventSource1.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setCpuTemp(data?.map((item: any) => item.cpuTemp));
                setCpuUsage(data?.map((item: any) => item.cpuUsage));
                setCpuTime(data?.map((item: any) => item._time));
            } catch (error) {
                console.log(error);
            }
        };

        const eventSource2 = new EventSource('/varinfo');
        eventSource2.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setMemavail(data?.map((item: any) => item.memavail));
                setMemusage(data?.map((item: any) => item.memusage));
                setDiskusage(data?.map((item: any) => item.diskusage));
                setUptime(data?.map((item: any) => item.uptime));
            } catch (error) {
                console.log(error);
            }
        };

        const eventSource3 = new EventSource('/psinfo');
        eventSource3.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setCpuUsageDetail(data?.map((item: any) => item.cpuUsageDetail));
                setMemusagedetail(data?.map((item: any) => item.memUsageDetail));
                setCommand(data?.map((item: any) => item.command));
            } catch (error) {
                console.log(error);
            }
        };
    }, []);

    const cpuChart1: any = {
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
                text: 'CPU Usage',
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
            ],
            grid: {
                show: false,
            },
            colors: ['#11468F'],
        },
        series: [
            {
                name: 'USAGE',
                data: cpuUsage.slice(0, 10).reverse() /*cpuInfo. */,
            },
        ],
    };

    const cpuChart2: any = {
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
                text: 'CPU Temp',
                align: 'left',
            },
            yaxis: [
                {
                    title: {
                        text: 'Celsius',
                    },
                    labels: {
                        formatter: function (value0: any): string {
                            return value0 + '℃';
                        },
                    },
                },
            ],
            grid: {
                show: false,
            },
            colors: ['#DA1212'],
        },
        series: [
            {
                name: 'TEMP',
                data: cpuTemp.slice(0, 10).reverse() /*cpuInfo. */,
            },
        ],
    };

    const memoryChart1: any = {
        series: [memUsage],
        options: {
            chart: {
                height: 315,
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
            colors: ['#11468F'],
            labels: ['메모리 사용량'],
        },
    };

    const memoryChart2: any = {
        series: [memAvail],
        options: {
            chart: {
                height: 315,
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
            colors: ['#11468F'],
            labels: ['메모리 잔여량'],
        },
    };

    const cpuChart3: any = {
        series: [
            {
                name: 'CPU Usage',
                data: cpuUsageDetail.slice(0, 5).reverse(),
            },
        ],
        options: {
            chart: {
                height: 315,
                type: 'bar',
                toolbar: {
                    show: false,
                },
            },
            title: {
                text: 'CPU Detail',
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
            legend: {
                show: false,
            },
            xaxis: {
                categories: command.slice(0, 5).reverse(),
                labels: {
                    style: {
                        fontSize: '12px',
                    },
                },
            },
            colors: ['#11468F'],
        },
    };

    const memoryChart3: any = {
        series: [
            {
                name: 'Memory Usage',
                data: memUsageDetail.slice(0, 5).reverse(),
            },
        ],
        options: {
            chart: {
                height: 315,
                type: 'bar',
                toolbar: {
                    show: false,
                },
            },
            title: {
                text: 'Memory Detail',
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
            legend: {
                show: false,
            },
            xaxis: {
                categories: command.slice(0, 5).reverse(),
                labels: {
                    style: {
                        fontSize: '12px',
                    },
                },
            },
            colors: ['#11468F'],
        },
    };

    const diskChart: any = {
        series: [totalDisk, diskUsage],
        options: {
            chart: {
                height: 315,
                type: 'radialBar',
            },
            title: {
                text: 'Disk Usage',
                align: 'left',
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
            colors: ['#11468F', '#041562'],
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
                        <h1 className="mt-4">Performance Monitor</h1>
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                    <div id="cpu1">
                        <ReactApexChart
                            options={cpuChart1.options}
                            series={cpuChart1.series}
                            type={cpuChart1.options.chart.type}
                            height={cpuChart1.options.chart.height}
                        />
                    </div>
                    <div id="cpu2">
                        <ReactApexChart
                            options={cpuChart2.options}
                            series={cpuChart2.series}
                            type={cpuChart2.options.chart.type}
                            height={cpuChart2.options.chart.height}
                        />
                    </div>
                    <div id="memContainer">
                        <div id="memory1">
                            <ReactApexChart
                                options={memoryChart1.options}
                                series={memoryChart1.series}
                                type={memoryChart1.options.chart.type}
                                height={memoryChart1.options.chart.height}
                            />
                        </div>
                        <div id="memory2">
                            <ReactApexChart
                                options={memoryChart2.options}
                                series={memoryChart2.series}
                                type={memoryChart2.options.chart.type}
                                height={memoryChart2.options.chart.height}
                            />
                        </div>
                    </div>
                    <div id="detailContainer">
                        <div id="cpu3">
                            <ReactApexChart
                                options={cpuChart3.options}
                                series={cpuChart3.series}
                                type={cpuChart3.options.chart.type}
                                height={cpuChart3.options.chart.height}
                            />
                        </div>
                        <div id="memory3">
                            <ReactApexChart
                                options={memoryChart3.options}
                                series={memoryChart3.series}
                                type={memoryChart3.options.chart.type}
                                height={memoryChart3.options.chart.height}
                            />
                        </div>
                    </div>
                    <div id="disk-table">
                        <div id="disk">
                            <ReactApexChart
                                options={diskChart.options}
                                series={diskChart.series}
                                type={diskChart.options.chart.type}
                                height={diskChart.options.chart.height}
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

export default Perfmon;
