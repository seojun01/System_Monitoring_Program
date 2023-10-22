import './pages.css';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function Attack(): any {
    const chart1: any = {
        options : {
          chart: {
            background: '#ffffff',
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                  speed: 1000
                }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#2828CD'],
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Packet Data',
          align: 'left'
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories : ["12:55:06", "12:55:07", "12:55:08", "12:55:09", "12:55:10", "12:55:11", "12:55:12", "12:55:13", "12:55:14", "12:55:15", "12:55:16", "12:55:17", "12:55:18"],
        },
        legend: {
          show: false
        },
        },
        series: [
            {
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
          },
        ],

    };
    const chart2 : any = {
        options : {  
            chart: {
              background: '#ffffff',
              height: 350,
              type: 'bar',
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              },
            },
            title: {
              text: 'SRC IP Packet Amount',
              align: 'left'
            },
            colors: ['#D25A5A'],
            plotOptions: {
              bar: {
                columnWidth: '50%',
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 2
            },

            grid: {
              row: {
                colors: ['#fff', '#f2f2f2']
              }
            },
            xaxis: {
              labels: {
                rotate: -45
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
              tickPlacement: 'on'
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
              },
            }
            },
            series: [{
              name: 'Servings',
              data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
            }],

          }
          const chart3 : any = {
            options : {  
                chart: {
                  background: '#ffffff',
                  height: 350,
                  type: 'bar',
                  toolbar: {
                    show: false
                  },
                  zoom: {
                    enabled: false
                  },
                },
                title: {
                  text: 'Port Packet Amount',
                  align: 'left'
                },
                plotOptions: {
                  bar: {
                    columnWidth: '50%',
                  }
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  width: 2
                },
    
                grid: {
                  row: {
                    colors: ['#fff', '#f2f2f2']
                  }
                },
                xaxis: {
                  labels: {
                    rotate: -45
                  },
                  categories: ['80', '22', '8080', '1234', '443', '3389',
                    '5678', '8000', '9000', '8888', '9999', '1111', '2222'
                  ],
                  tickPlacement: 'on'
                },
                fill: {
                  type: 'gradient',
                  gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100]
                  },
                }
                },
                series: [{
                  name: 'Servings',
                  data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
                }],
    
              };
        const chart4: any = {
          options : {
            chart: {
              id: 'chartyear',
              type: 'area',
              height: 160,
              background: '#ffffff',
             toolbar: {
                show: false,
                autoSelected: 'pan'
              },
          },
          title: {
            text: 'Attack Packet Data Amount',
            align: 'left'
          },
          colors: ['#FF7F00'],
          stroke: {
            width: 0,
            curve: 'smooth'
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            opacity: 1,
            type: 'solid'
          },
          yaxis: {
            tickAmount: 3,
          },
          xaxis: {
            categories: ["12:55:06", "12:55:07", "12:55:08", "12:55:09", "12:55:10", "12:55:11", "12:55:12", "12:55:13", "12:55:14", "12:55:15", "12:55:16", "12:55:17", "12:55:18"],
          }
          },
          series: [{
            name: 'Servings',
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
          }],
        };

        const chart5: any = {
          options: {
              chart: {
                  background: '#ffffff',
                  toolbar: {
                      show: false,
                  },
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
    
      const chart6: any = {
            options: {
                chart: {
                    background: '#ffffff',
                    width: 380,
                },
                title: {
                    text: 'Attack Risk',
                    align: 'left',
                    style: {
                        color: 'black',
                    },
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
                            Attack Packet
                        </h1>
                        <ol className="breadcrumb mb-4"></ol>
                    </div>
                    <div id="Packet-chart-container">
                        <div id="chart">
                            <div
                                id="network"
                                style={{ width: '100%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}
                            >
                                <ReactApexChart
                                    options={chart1.options}
                                    series={chart1.series}
                                    type="line"
                                    height={280}
                                />
                                 </div>
                            </div>
                     </div>
                     <div
                                id="at_types_and_risk"
                                style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1%' }}
                            >
                                <div
                                    id="at_types"
                                    style={{ width: '46.3%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',marginLeft: "2.5%" }}
                                >
                                    <ReactApexChart
                                        options={chart2.options}
                                        series={chart2.series}
                                        type="bar"
                                        height={350}
                                    />
                                </div>
                          <div
                                    id="at_risk"
                                    style={{ width: '46.3%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',marginRight: "2.5%" }}
                                >
                                    <ReactApexChart
                                        options={chart3.options}
                                        series={chart3.series}
                                        type="bar"
                                        height={350}
                                    />
                              </div>
                      </div>
                      <div id="Packet-chart-container">
                        <div id="chart">
                            <div
                                id="network"
                                style={{ width: '100%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',marginTop: '1%' }}
                            >
                                <ReactApexChart
                                    options={chart4.options}
                                    series={chart4.series}
                                    type="area"
                                    height={280}
                                />
                                 </div>
                            </div>
                     </div>
                      <div
                                id="at_types_and_risk"
                                style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1%' }}
                            >
                                <div
                                    id="at_types"
                                    style={{ width: '46.3%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',marginLeft: "2.5%" }}
                                >
                                    <ReactApexChart
                                        options={chart5.options}
                                        series={chart5.series}
                                        type="radar"
                                        height={350}
                                    />
                                </div>
                                <div
                                    id="at_risk"
                                    style={{ width: '46.3%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)',marginRight: "2.5%" }}
                                >
                                    <ReactApexChart
                                        options={chart6.options}
                                        series={chart6.series}
                                        type="pie"
                                        height={350}
                                    />
                                </div>
                            </div>
                </main>
            </div>
        </div>
    );
}

export default Attack;
