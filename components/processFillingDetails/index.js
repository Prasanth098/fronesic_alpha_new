

import styled from "styled-components"
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import { GoPrimitiveDot } from "react-icons/go";
import { Pagination } from 'antd';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const DefectLogsCont = styled.div`
    padding:10px 30px;
    min-height:80vh;
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
        & .arrow-icon{
            margin:0px 0px 0px 10px;
        }
        & label{
            font-size:15px;
            font-weight:500;
        }
    }
    & .btns-group{
        & .btn{
            & img{
                height:16px;
                margin:0px 5px;
            }
            padding:7px 25px;
            border-radius:4px;
            color:#ffffff;
            font-size:12px;
            cursor:pointer;
            margin:0px 5px;
        }
        & .upload-btn{
            background-color:#4A86DE;
        }
        & .ticket-btn{
            background-color:#00CC6A;
        }
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
        & .reasons-headings-row{
            & .reasons-headings{
                padding:10px;
                font-weight:500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                border-style:none;
                text-align: start;
                font-size:15px;
            }
            & .custom-width{
                width:40%;
            }
            & .custom-width-1{
                width:20%;
            }
        }
    }


    & .data-cont{
        background-color:#F5F5F5;
        width:100%;
        & .data-div{
            border-top:1px solid #f5f5f5;
            & .res-dat-cel{
                padding:13px;
                font-size:13px;
                font-weight:200;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                background-color:#ffffff;
            }
            & .id-cel{
                width:6.5%;
                font-weight:500;
                border-radius:0px 0px 0px 5px;
            }
            & .cust-width{
                width:45%;
                color:#2D6CC9;
                font-weight:400;
            }
            & .cust-width-1{
                width:20%;
                font-weight:500;
            }
            & .cust-width-2{
                font-weight:500;  
                border-radius:0px 0px 5px 0px;
            }

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

const NewTableCont = styled.div`
    border: 1px solid rgba(138, 141, 145, 0.3);
    border-radius:5px;

`

const ReasonsDiv = styled.div`
        padding:30px 0px;
        & .reasons-title{
            & label{
                font-weight:500;
                padding:10px 0px;
            }
        }


`

const StatusBar = styled.div`
        background: rgba(0, 204, 106, 0.1);
        padding:15px 30px;
        & .tick-mark{
            color:#00CC6A;
            font-size:20px;
            margin:0px 5px;
        }
        & label{
            color:#000000;
        }
`

function ProcessFillingDetails() {
    const tableHeadings = [
        { id: 1, name: "Log ID" },
        { id: 2, name: "CIQ ID" },
        { id: 3, name: "Name Short" },
        { id: 4, name: "Processed by" },
        { id: 5, name: "Data Processed" },
        { id: 6, name: "Time Processed(UTC)" },
        { id: 7, name: "Status" }
    ]

    const tableHeadings1 = [
        { id: 1, name: "#" },
        { id: 2, name: "Red Flags" },
        { id: 3, name: "Previous Risk Score" },
        { id: 4, name: "Current Risk Score" }
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
    ]

    const data1 = [
        {
            id: 1,
            red_flag: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            prev_risk: 8,
            curr_risk: 10
        },
        {
            id: 2,
            red_flag: "Maecenas facilisis metus quis ipsum placerat, in sollicitudin posuere. ",
            prev_risk: 8,
            curr_risk: 10
        },
        {
            id: 3,
            red_flag: "Donec dapibus, ante quis tincidunt cursus, arcu tortor pretium erat.",
            prev_risk: 8,
            curr_risk: 10
        },
        {
            id: 4,
            red_flag: "Aliquam nec consectetur lectus. Proin convallis consectetur turpis.",
            prev_risk: 8,
            curr_risk: 10
        },
        {
            id: 5,
            red_flag: "Nam luctus ipsum nec diam imperdiet, ut accumsan nibh fringilla. ",
            prev_risk: 8,
            curr_risk: 10
        },
    ]


    return (
        <>
            <StatusBar>
                <IoCheckmarkCircleOutline className="tick-mark" />
                <label>Your Sheet has been Accepted</label>
            </StatusBar>
            <DefectLogsCont>
                <HeaderRow>
                    <div className="title-div">
                        <img alt="defects-logs" src={"./img/defect_logs.png"} />
                        <label>Red Flags </label>
                        <MdOutlineArrowForwardIos className="arrow-icon" />
                        <label>IQ5522640</label>
                    </div>
                    <div className="btns-group">
                        <div className="upload-btn btn">
                            Preview Report
                        </div>
                        <div className="ticket-btn btn">
                            Raise a Ticket
                        </div>
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


                <ReasonsDiv>
                    <div className="reasons-title">
                        <label>5 Red Flags Found</label>
                    </div>
                    <TableCont>
                        <table className="heading-cont">
                            <tbody>
                                <tr className="reasons-headings-row">
                                    <th className="reasons-headings">#</th>
                                    <th className="reasons-headings custom-width">Red Flags</th>
                                    <th className="reasons-headings custom-width-1">Previous Risk Score</th>
                                    <th className="reasons-headings">Current Risk Score</th>
                                </tr>
                            </tbody>
                        </table>

                        <table className="data-cont">
                            <tbody>
                                {data1 && data1.length != 0 && data1.map((d, index) => (
                                    <>
                                        <tr key={index} className="data-div">
                                            <td className="res-dat-cel id-cel">{d.id}</td>
                                            <td className="res-dat-cel cust-width">{d.red_flag}</td>
                                            <td className="res-dat-cel cust-width-1">{d.prev_risk}</td>
                                            <td className="res-dat-cel cust-width-2">{d.curr_risk}</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </TableCont>
                </ReasonsDiv>


            </DefectLogsCont>
        </>

    )
}


export default ProcessFillingDetails