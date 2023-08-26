import ApexCharts from "react-apexcharts";
import Chart from "react-apexcharts";
import './pages.css';

function Packet(): JSX.Element {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active"></li>
                            <div style={{ width: '1000%', height: '90%' }}>
                                        <ApexCharts
                                            type="area"
                                            series={[
                                                {
                                                    name: "패킷 총량",
                                                    data: [19, 25, 20, 9,2],
                                                },
                                            ]}
                                            options={{
                                                chart : {
                                                    height: '10%',
                                                    width: 900
                                                },
                                                title: {
                                                    text: 'Packet',
                                                    align: 'left',
                                                    style: {
                                                      color: 'black',
                                                    },
                                                  },
                                                xaxis: {
                                                    categories:['12:39','12:40','12:41','12:42','12:43']
                                                }
                                            
                                            }}
                                        />
                                </div>
                                <div style={{ width: '38%', height: '50%',position: 'absolute',top: '100%', left: '10%'}}>
                                        <ApexCharts
                                            type="radar"
                                            series={[
                                                {
                                                    name: "패킷 총량",
                                                    data: [19, 25, 20, 9,2],
                                                },
                                            ]}
                                            options={{
                                                chart : {
                                                    height: 100,
                                                    width: 300
                                                },
                                                xaxis: {
                                                    categories:['SQL 인젝션','커맨드 인젝션','Xpath 인젝션','XSS','CSRF']
                                                }
                                            
                                            }}
                                        />
                                </div>
                                <div style={{ width: '26%', height: '50%',position: 'absolute',top: '100%', left: '46%' }}>
                                <ApexCharts
                                    type="pie"
                                    series={[44, 55, 13, 13]}
                                    options={{
                                        chart: {
                                            width: 380,
                                        },
                                        labels: ['관심', '주의', '경고', '위험'],
                                        responsive: [{
                                            breakpoint: 480,
                                            options: {
                                                chart: {
                                                    width: 200,
                                                },
                                                legend: {
                                                    position: 'bottom',
                                                },
                                            },
                                        }],
                                    }}
                                />
                            </div>
                            <div style={{ width: '29%', height: '50%',position: 'absolute',top: '100%', left: '70%' }}>
                                <ApexCharts
                                    type="bar"
                                    series={[
                                        {
                                            name: '정상패킷',
                                            data: [76, 85, 101, 98, 87, 105, 91]
                                        }, {
                                            name: '공격패킷',
                                            data: [35, 41, 36, 26, 45, 48, 52]
                                            
                                        },
                                    ]}
                                    options={{
                                        chart: {
                                            width: 380,
                                        },
                                        responsive: [{
                                            breakpoint: 480,
                                            options: {
                                                chart: {
                                                    width: 200,
                                                },
                                                legend: {
                                                    position: 'bottom',
                                                },
                                            },
                                        }],
                                        xaxis: {
                                            categories:['8:21','8:22','8:23','8:24','8:25','8:26','8.27']
                                        },
                                        colors: ['#1f77b4', '#ff0000']
                                    
                                    }}
                                />
                            </div>
                        </ol>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Packet;
