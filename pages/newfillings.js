
import styled from "styled-components";
import 'antd/dist/antd.css';
import { Divider } from "antd";
import { Tabs } from 'antd';
import { Avatar, Badge } from 'antd';
import { IoCheckboxOutline } from "react-icons/io5";
import { MdOutlineBlock } from "react-icons/md";

const NewFillingsCont = styled.div`
    padding:30px;
    min-height:80vh;

    & .ant-tabs-tab{
        margin:0px 40px 0px 0px;
        color:rgba(26, 57, 103, 0.5);
    }



    // & .ant-tabs-tab-active{
    //     color: #1A3967;
    // }

    & .ant-tabs-ink-bar{
        background-color: #1A3967;
    }
    & .title-tabs{
        & .ant-tabs-tab, & .ant-tabs-tab-active,& .ant-tabs-tab-btn{
            color: #1A3967;
        }
        & .ant-tabs-tab-btn{
            color:rgba(26, 57, 103, 0.5);
        }
    }
`
const TableCont = styled.div`
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 5px;
    & .new-fill-table{
        width:100%;
        background: #F2F4F8;
        border:5px 5px 0px 0px;
        & .new-fill-row{
            & .new-fill-head{
                & label{
                    font-size:14px;
                    font-weight:400;
                    padding:10px;
                    width:100px;
                    margin:0px 5px;
                }
                & .custom-width{
                    width:120px;
                }
            }
        }
    }
    & .new-fill-body{
        width:100%;
        & .new-fill-body-row{
            width:100%;
            border-top: 1px solid #E0E0E0;
            & .new-fill-body-data{
                & label{
                    padding:15px 10px;
                    font-size:14px;
                    font-weight:200;
                    width:100px;
                    margin:0px 5px;
                }
                & .cust-width{
                    width:120px;
                }
                & .alignment{
                    text-align:center;
                }
                & .check-icon{
                    font-size:20px;
                    color:#00CC6A;
                }
                & .block-icon{
                    color:#8A8D91;
                    font-size:20px;
                }
            }
            & .btns-group{
                margin:0px 20px 0px 0px;
                & .process-btn{
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
                    background: #4A86DE;
                    text-align:center;
                }
            }
        }
    }
`
const NewFillingsTabCont = styled.div`
    & .ant-badge{
        & .new-fillings{
            color:rgba(26, 57, 103, 0.5);
        }
        & sup{
            top:-6px;
            right:-15px;
            border-radius:2px;
            background:#2D6CC9;
        }

    }

`


function NewFillings() {

    const data = [
        {
            id: 1,
            ciq_id: "IQ5522640",
            name_short: "Carlsberg A/S",
            filling: "Q2 22",
            filling_date: "18 Aug 22",
            sys_inp_date: "19 Aug",
            sys_inp_time: "8:43",
            ann_report: "yes",
            gov_report: "no"
        },
        {
            id: 2,
            ciq_id: "IQ5522640",
            name_short: "Carlsberg A/S",
            filling: "Q2 22",
            filling_date: "18 Aug 22",
            sys_inp_date: "19 Aug",
            sys_inp_time: "8:43",
            ann_report: "yes",
            gov_report: "yes"
        },

    ]
    const NewFillingsTab = () => {
        return (
            <NewFillingsTabCont>
                <Badge count={312} overflowCount={10000} style={{ marginBottom: 10 }} >
                    <label className="new-fillings">
                        New Fillings
                    </label>
                </Badge>
            </NewFillingsTabCont>
        )
    }
    const NewFillTabChild = () => {
        return (
            <TableCont>
                <table className="new-fill-table">
                    <tbody>
                        <tr className="new-fill-row">
                            <th className="new-fill-head">
                                <label className="new-fil-sub-head">CIQ ID</label>
                                <label className="new-fil-sub-head custom-width">Name Short</label>
                                <label className="new-fil-sub-head">Filling</label>
                                <label className="new-fil-sub-head">Filling Date</label>
                                <label className="new-fil-sub-head">System Input Date</label>
                                <label className="new-fil-sub-head">System Input Time(UTC)</label>
                                <label className="new-fil-sub-head">Annual Reporting Outstanding?</label>
                                <label className="new-fil-sub-head">Governance Report Outstanding?</label>
                            </th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
                <table className="new-fill-body">
                    <tbody>
                        {data && data.map((d, index) => (
                            <tr className="new-fill-body-row">
                                <td className="new-fill-body-data">
                                    <label className="new-fill-body-data-cell">{d.ciq_id}</label>
                                    <label className="new-fill-body-data-cell cust-width">{d.name_short}</label>
                                    <label className="new-fill-body-data-cell">{d.filling}</label>
                                    <label className="new-fill-body-data-cell">{d.filling_date}</label>
                                    <label className="new-fill-body-data-cell">{d.sys_inp_date}</label>
                                    <label className="new-fill-body-data-cell">{d.sys_inp_time}</label>
                                    <label className="new-fill-body-data-cell alignment">
                                        {d.ann_report == "yes"
                                            ?
                                            <IoCheckboxOutline className="check-icon" />
                                            :
                                            <MdOutlineBlock className="block-icon" />
                                        }
                                    </label>
                                    <label className="new-fill-body-data-cell alignment">
                                        {d.gov_report == "yes"
                                            ?
                                            <IoCheckboxOutline className="check-icon" />
                                            :
                                            <MdOutlineBlock className="block-icon" />
                                        }
                                    </label>
                                </td>
                                <td className="btns-group">
                                    <div className="process-btn">
                                        Process
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </TableCont>
        )
    }
    const items = [
        { label: <NewFillingsTab />, key: 'item-1', children: <NewFillTabChild /> }, // remember to pass the key prop
        { label: 'Filling Workflow', key: 'item-2', children: 'Content 2' },
    ];

    return (
        <NewFillingsCont>
            <Tabs items={items} className="title-tabs" />
        </NewFillingsCont>
    )
}

export default NewFillings