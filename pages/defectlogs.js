import styled from "styled-components"
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import { GoPrimitiveDot } from "react-icons/go";
import { Pagination } from 'antd';

const DefectLogsCont = styled.div`
    padding:10px 30px;
    & .pagination-div{
        padding:20px 0px;
        & .ant-pagination-item{
            color:#2D6CC9;
            border-radius:7px;
            font-size:13px;
        }
        & .ant-pagination-item-active{
            background-color:#2D6CC9;
            color:#ffffff;
        }
        & .ant-pagination-prev{
            color:#2D6CC9;
            font-size:13px;
            & button{
                border-radius:7px;
            }
            & span{
                color:#2D6CC9;
                & svg{
                    margin:-5px 0px 0px 0px;
                }
            }
        }
        & .ant-pagination-next{
            color:#2D6CC9;
            border-radius:7px;
            font-size:13px;
            & button{
                border-radius:7px;
            }
            & span{
                color:#2D6CC9;
                & svg{
                    margin:-5px 0px 0px 0px;
                }
            }
        }
        & .ant-pagination-disabled{
            & button{
                background-color:#F2F4F8;
            }
        }
    }

`
const HeaderRow = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin:0px 0px 10px 0px;
    & .title-div{
        & img{
            height:20px;
            margin:-5px 5px 0px 5px;
        }
        & label{
            font-size:15px;
            font-weight:400;
        }
    }
    & .upload-btn{
        background-color:#1A3967;
        & img{
            height:16px;
            margin:0px 5px;
        }
        padding:7px 15px;
        border-radius:4px;
        color:#ffffff;
        font-size:12px;
        cursor:pointer;
    }
`

const TableCont = styled.div`
    border: 1px solid rgba(138, 141, 145, 0.3);
    border-radius:5px;
    & .heading-cont{
        background: #F2F4F8;
        border-radius: 5px 5px 0px 0px;
        width:100%;
        & .heading-div{
            & .headings{
                padding:10px;
                font-weight:500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                border-style:none;
                text-align: start;
                font-size:15px;
                max-width:50px;
            }
        }
    }
    & .data-cont{
        background-color:#F5F5F5;
        width:100%;
        & .data-div{
            border-top:1px solid #f5f5f5;
            & .data-cell{
                padding:13px;
                font-size:13px;
                font-weight:200;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width:45px;
                background-color:#ffffff;
                & .dot-icon{
                    font-size:24px;
                }
                & .accept{
                    color:#00CC6A;
                }
                & .reject{
                    color:#EC0606;
                }
            }
            & .logid{
                font-weight:500;
                border-radius:0px 0px 0px 5px;
            }
            & .status{
                border-radius:0px 0px 5px 0px;
            }
            & .ciqid{
                color:#2D6CC9;
                cursor:pointer;
                font-weight:400;
            }
        }
    }
`

function DefectLogs() {
    const tableHeadings = [
        { id: 1, name: "Log ID" },
        { id: 2, name: "CIQ ID" },
        { id: 3, name: "Name Short" },
        { id: 4, name: "Processed by" },
        { id: 5, name: "Data Processed" },
        { id: 6, name: "Time Processed(UTC)" },
        { id: 7, name: "Status" }
    ]


    const data = [
        {
            id: 1,
            logid: 1001,
            ciqid: "IQ5522640",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 2,
            logid: 1023,
            ciqid: "IQ5522542",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Rejected",
        },
        {
            id: 3,
            logid: 1024,
            ciqid: "IQ5523412",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 4,
            logid: 1045,
            ciqid: "IQ5529651",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 5,
            logid: 1034,
            ciqid: "IQ5522640",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 6,
            logid: 1001,
            ciqid: "IQ5522542",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Rejected",
        },
        {
            id: 7,
            logid: 1023,
            ciqid: "IQ5523412",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 8,
            logid: 1024,
            ciqid: "IQ5529651",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 9,
            logid: 1045,
            ciqid: "IQ5522640",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 10,
            logid: 1034,
            ciqid: "IQ5522542",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Rejected",
        },
        {
            id: 11,
            logid: 1001,
            ciqid: "IQ5523412",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 12,
            logid: 1023,
            ciqid: "IQ5529651",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 13,
            logid: 1024,
            ciqid: "IQ5522640",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 14,
            logid: 1045,
            ciqid: "IQ5522542",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Accepted",
        },
        {
            id: 15,
            logid: 1034,
            ciqid: "IQ5523412",
            nameshort: "Carlsberg A/S",
            processedby: "Niharika",
            dateprocess: "19-Aug-2022",
            timeprocess: "10:41 AM",
            status: "Rejected",
        },

    ]
    return (
        <DefectLogsCont>
            <HeaderRow>
                <div className="title-div">
                    <img alt="defects-logs" src={"./img/defect_logs.png"} />
                    <label>Defect Logs</label>
                </div>
                <div className="upload-btn">
                    <img alt="upload-button" src={"./img/upload1.png"} />
                    Upload File
                </div>
            </HeaderRow>
            <TableCont>
                <table className="heading-cont">
                    <tbody>
                        <tr className="heading-div">
                            {
                                tableHeadings && tableHeadings.length != 0 && tableHeadings.map((tab, index) => (
                                    <th key={index} className="headings">{tab.name}</th>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>

                <table className="data-cont">
                    <tbody>
                        {data && data.length != 0 && data.map((d, index) => (
                            <>
                                <tr key={index} className="data-div">
                                    <td className="data-cell logid">{d.logid}</td>
                                    <td className="data-cell ciqid">{d.ciqid}</td>
                                    <td className="data-cell">{d.nameshort}</td>
                                    <td className="data-cell">{d.processedby}</td>
                                    <td className="data-cell">{d.dateprocess}</td>
                                    <td className="data-cell">{d.timeprocess}</td>
                                    <td className="data-cell status">
                                        <GoPrimitiveDot className={d.status === "Accepted" ? "dot-icon accept" : "dot-icon reject"} />
                                        {d.status}
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </TableCont>
            <div className="pagination-div">
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </DefectLogsCont>
    )
}


export default DefectLogs