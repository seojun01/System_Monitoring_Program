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
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Port Packet Amount',
          align: 'left'
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories : [10,9,8,7,9],
        },
        legend: {
          show: false
        },
        },
        series: [
            {
            data: [10,9,8,7,9]
          },
        ],

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
                                style={{ width: '99.99%', boxShadow: '11px -16px 10px rgba(0, 0, 0, 0.1)' }}
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
                </main>
            </div>
        </div>
    );
}

export default Attack;
