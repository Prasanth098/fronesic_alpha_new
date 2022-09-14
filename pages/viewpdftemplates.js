import { useState } from "react"
import styled from "styled-components"
import AccuredIncomeForm from "../components/accurincForm"
import AgeingOfRecForm from "../components/ageingRecForm"
import AllowAgainstRecForm from "../components/allowanceForm"
import ContractAssetsForm from "../components/contractAssetsForm"
import MetaDataForm from "../components/metaDataForm"
import PDFViewer from "../components/pdfViewer"
import ProvisionForm from "../components/provisionForm"

const ViewPdfCont = styled.div`
    padding:20px 30px 10px 30px;
    min-height:100vh;
    & .viewpdftitle{
        padding:0px 0px 5px 0px;
        & img{
            height:20px;
            margin:-5px 5px 0px 0px;
        }
        & label{
            color: #1A3967;
            font-weight:500;
        }
    }
    & .col-group{
        display:flex;
        justify-content:flex-start;
        align-content:center;
        overflow: scroll;
        & .pdf-col{
            margin:5px;
            background: #FFFFFF;
            border: 1px solid #D7D7D7;
            border-radius: 5px;
            & .pdf_image{
                height:365px;
            }
            & .pdf_image_1{
                height:175px;
            }
        }
        & .tabs-col{
            margin:5px;
            background: #FFFFFF;
            border: 1px solid #D7D7D7;
            border-radius: 5px;
            display:flex;
            justify-content:fles-start;
            align-content:center;
            & .tabs{
                width:25%;
                background: #F2F4F8;
                border-radius:5px 0px 0px 5px;
                & ul{
                    padding:0px;
                    margin:0px;
                    & .tab-div{
                        display:flex;
                        justify-content:flex-start;
                        align-content:center;
                        & li{
                            list-style:none;
                            padding:12px 5px;
                            font-size:13px;
                            font-weight:400;
                            cursor:pointer;
                            border-bottom:1px solid #D7D7D7;
                            color: #8A8D91;
                            width:100%;
                            margin:0px 5px;
                        }
                        & .border-left{
                            border:2px solid #1A3967;
                            margin:4px 0px;
                        }
                        & .dummy-border{
                            border:2px solid #F2F4F8;
                            margin:4px 0px;
                        }
                        & .active{
                            color:#1A3967;
                            font-weight:400;
                        }

    
                    }
                    & :hover{
                        & .border-left{
                            border:2px solid #1A3967;
                            margin:4px 0px;
                        }
                        & .dummy-border{
                            border:2px solid #1A3967;
                            margin:4px 0px; 
                        }
                        & li{
                            color:#1A3967;
                            font-weight:400;
                        }
                    }

                }
            }
            & .forms{
                width:75%;
                min-height:100vh;
                & .active{
                    display:block;
                }
                & .inactive{
                    display:none;
                }
            }
        }
    }
`

function ViewPdfTemplates() {
    const [currTab, setCurrTab] = useState("Meta Data")
    const tabs = [
        { id: 1, name: "Meta Data" },
        { id: 2, name: "Accrued Income" },
        { id: 3, name: "Contract Assets" },
        { id: 4, name: "Allowance Against Receivables" },
        { id: 5, name: "Provision Release" },
        { id: 6, name: "Ageing of Receivables" }
    ]

    const handleCurrTab = (tab) => {
        setCurrTab(tab)
    }
    return (
        <ViewPdfCont>
            <div className="viewpdftitle">
                <img src={"./img/pdf_logo.png"} alt="pdf_logo" />
                <label>View PDF</label>
            </div>
            <div className="col-group">
                <div className="pdf-col col-lg-7 col-md-7 col-sm-7">
                    {/* <img src={"./img/pdfImage.png"} alt="pdf_image" className="pdf_image" />
                    <img src={"./img/pdfImage1.png"} alt="pdf_image_1" className="pdf_image_1" /> */}
                    <PDFViewer/>
                </div>
                <div className="tabs-col col-lg-8 col-md-8 col-sm-8">
                    <div className="tabs">
                        <ul>
                            {
                                tabs && tabs.length != 0 && tabs.map((tab, index) => (
                                    <div className="tab-div" key={index}>
                                        <label className={currTab === tab.name ? "border-left" : "dummy-border"}></label>
                                        <li key={index} className={currTab === tab.name ? "active" : ""} onClick={() => { handleCurrTab(tab.name) }}>{tab.name} </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="forms">
                        <div className={currTab === "Meta Data" ? "active" : "inactive"}>
                            <MetaDataForm />
                        </div>
                        <div className={currTab === "Accrued Income" ? "active" : "inactive"}>
                            <AccuredIncomeForm />
                        </div>
                        <div className={currTab === "Contract Assets" ? "active" : "inactive"}>
                            <ContractAssetsForm />
                        </div>
                        <div className={currTab === "Allowance Against Receivables" ? "active" : "inactive"}>
                            <AllowAgainstRecForm />
                        </div>
                        <div className={currTab === "Provision Release" ? "active" : "inactive"}>
                            <ProvisionForm />
                        </div>
                        <div className={currTab === "Ageing of Receivables" ? "active" : "inactive"}>
                            <AgeingOfRecForm />
                        </div>
                    </div>
                </div>
            </div>
        </ViewPdfCont>
    )
}

export default ViewPdfTemplates