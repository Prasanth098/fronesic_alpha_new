import styled from "styled-components"


const AllowAgainstRecCont = styled.div`
        padding:20px;
        & .first-row{
            display:flex;
            justify-content:space-between;
            align-content:flex-end;
            & .disc-div,prior-div{
                margin:0px 5px;
            }
            & label{
                font-size:11px;
                & img{
                    height:11px;
                }
            }
            & .input-box{
                background: #FFFFFF;
                border: 0.5px solid #CBCCCD;
                border-radius: 2px;
                display:flex;
                justify-content:center;
                align-content:center;
                padding:2px;
                width:100%;
                margin:5px 0px;
                & input{                
                    outline:none;
                    border:none;
                    width:98%;
                    border-radius:10px;

                    :focus{
                        outline:none;
                    }
                    ::-webkit-input-placeholder { /* Edge */
                        color:#8A8D91;
                        font-size:14px;
                        font-weight:400;
                    }
                    :-ms-input-placeholder { /* Internet Explorer */
                        color:#8A8D91;
                        font-size:14px;
                        font-weight:400;
                    }
                    ::placeholder {
                        color:#8A8D91;
                        font-size:14px;
                        font-weight:400;
                    }
                }

                & select{
                    outline:none;
                    border:none;
                    width:98%;
                    border-radius:10px;
                    color:#000000;
                    font-size:12px;
                    font-weight:300;
                    padding:2px 0px;
                    cursor:pointer;

                    :focus{
                        outline:none;
                    }
                }
            }
        }
        & .left-div{
            display:flex;
            justify-content:flex-start;
            align-content:flex-start;
            & .disc-div, & .prior-div{
                padding:0px 5px;
            }
            & label{
                font-size:12px;
                font-weight:300;
            }
        }
        & .right-div{
            display:flex;
            justify-content:flex-start;
            align-items:flex-end;
            & .box{
                margin:0px 5px;
            }
        }

        & .second-row{
            padding:15px 5px 0px 5px;
            & table{
                background-color:#F2F4F8;
                width:100%;
                & th,td{
                    font-size:14px;
                    font-weight:400;
                    color: #1A3967;
                }
                & .custom-width{
                    width:150px;
                }
                & th{
                    border-right:1px solid #D7D7D7;
                }
                & td{
                    border-right:1px solid #D7D7D7;
                    border-top: 1px solid #D7D7D7;
                }
                & .no-border{
                    border-right:0px
                }
                & .no-top-border{
                    border-top:0px;
                }
                & th,td{
                    padding:10px;
                    & .input-box{
                        background: #FFFFFF;
                        border: 0.5px solid #CBCCCD;
                        border-radius: 2px;
                        display:flex;
                        justify-content:center;
                        align-content:center;
                        padding:2px;
                        width:95%;
                        & input{                
                            outline:none;
                            border:none;
                            width:98%;
                            border-radius:10px;
            
                            :focus{
                                outline:none;
                            }
                            ::-webkit-input-placeholder { /* Edge */
                                color:#8A8D91;
                                font-size:12px;
                                font-weight:300;
                            }
                            :-ms-input-placeholder { /* Internet Explorer */
                                color:#8A8D91;
                                font-size:12px;
                                font-weight:300;
                            }
                            ::placeholder {
                                color:#8A8D91;
                                font-size:12px;
                                font-weight:300;
                            }
                        }
            
                        & select{
                            outline:none;
                            border:none;
                            width:98%;
                            border-radius:10px;
                            color:#000000;
                            font-size:12px;
                            font-weight:300;
                            padding:2px 0px;
                            cursor:pointer;
            
                            :focus{
                                outline:none;
                            }
                        }
                    }

                    & .add-item-btn{
                            border:1px solid #4A86DE;
                            background:#ffffff;
                            color:#4A86DE;
                            font-size:12px;
                            padding:5px;
                            border-radius:4px;
                            font-weight:300;
                            text-align:center;
                            cursor:pointer;
                            & .plus-icon{
                                margin:0px 5px;
                            }
                    }

                }
            }
        }
                & .btns-group{
            padding:15px 0px;
            & .btn{
                & img{
                    height:16px;
                    margin:0px 0px;
                }
                padding:7px 25px;
                border-radius:4px;
                color:#ffffff;
                font-size:12px;
                cursor:pointer;
                margin:0px 5px;
            }
            & .save-btn{
                background-color:#4A86DE;
            }
            & .cancel-btn{
                background-color:#ffffff;
                border:1px solid #4A86DE;
                color:#4A86DE;
            }
        }
    }

`
function AllowAgainstRecForm() {
    return (
        <AllowAgainstRecCont>
            <div className="first-row">
                <div className="left-div">
                    <div className="disc-div">
                        <label>Disclosure Status <img src="./img/info-com.png"/></label>
                        <div className="input-box">
                            <select name="cars" id="cars">
                                <option value="select">Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="prior-div">
                        <label>Receivable Type</label>
                        <div className="input-box">
                            <select name="cars" id="cars">
                                <option value="select">Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>

                    <div className="prior-div">
                        <label>Net or Gross <img src="./img/info-com.png"/></label>
                        <div className="input-box">
                            <select name="cars" id="cars">
                                <option value="select">Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="right-div">
                    <div className="input-box box">
                        <select name="cars" id="cars">
                            <option value="select">Currency</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="input-box box">
                        <select name="cars" id="cars">
                            <option value="select">Denomination</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="second-row">
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th className="custom-width">2022</th>
                            <th className="custom-width">2021</th>
                            <th className="custom-width no-border"></th>
                        </tr>
                        <tr>
                            <td className="title">Receivables</td>
                            <td className="custom-width">
                                <div className="input-box">
                                    <input />
                                </div>
                            </td>
                            <td className="custom-width">
                                <div className="input-box">
                                    <input />
                                </div>
                            </td>
                            <td className="custom-width no-border"> </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="second-row">
                <table>
                    <tbody>
                        <tr>
                            <td className="title no-top-border">
                                Allowance
                            </td>
                            <td className="custom-width no-top-border">
                                <div className="input-box">
                                    <input
                                        type="text"
                                        name="value"
                                    />
                                </div>
                            </td>
                            <td className="custom-width no-top-border">
                                <div className="input-box">
                                    <input
                                        type="text"
                                        name="value1"
                                    />
                                </div>
                            </td>
                            <td className="custom-width no-border no-top-border"> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="btns-group">
                <div className="save-btn btn">
                    Save
                </div>
                <div className="cancel-btn btn">
                    Cancel
                </div>
            </div>
        </AllowAgainstRecCont>
    )
}

export default AllowAgainstRecForm