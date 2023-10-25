import React, { useEffect, useState } from 'react';
import './Css/pages.css';
import './Css/Live.css';

function Live(): JSX.Element {

    useEffect(() => {
        // Simple-DataTables
        // https://github.com/fiduswriter/Simple-DataTables/wiki

        const datatablesSimple = document.getElementById('datatablesSimple');
        if (datatablesSimple) {
            new (window as any).simpleDatatables.DataTable(datatablesSimple);
        }
    }, []);
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Real-time Notification</h1>
                        <ol className="breadcrumb mb-4"></ol>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                DataTable
                            </div>
                            <div className="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Info</th>
                                            <th>Src</th>
                                            <th>Src Port</th>
                                            <th>Dst</th>
                                            <th>Dst Port</th>
                                            <th>Protocol</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>No.</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Info</th>
                                            <th>Src</th>
                                            <th>Src Port</th>
                                            <th>Dst</th>
                                            <th>Dst Port</th>
                                            <th>Protocol</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>23/08/22</td>
                                            <td>22:50</td>
                                            <td>Dos</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>80</td>
                                            <td>xxx.xxx.xxx.xx</td>
                                            <td>8080</td>
                                            <td>TCP</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Live;
