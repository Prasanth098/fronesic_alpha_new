import styled from "styled-components"


const ProcFillCont = styled.div`
min-height:80vh;
& .bg-div{
    background-image: url('./img/bg30_crop.png');
    background-size:cover;
    background-repeat: no-repeat;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 76vh;
}

& .upload-box{
    background: #ffffff;
    border: 1px dashed rgba(0, 0, 0, 0.25);
    border-radius:7px;
    & .title-div{
        background: #F2F4F8;    
        border-radius: 7px 7px 0px 0px;
        padding:10px 30px;
        color:#1A3967;
        align-items:center;
        font-weight:500;
    }
    & .fields-box{
        padding:30px;

        & .buttons-div{
            display:flex;
            justify-content:center;
            align-content:center;
            margin:20px 0px 10px 0px;
            & .confirm{
                background-color:#1A3967;
                padding:10px 50px;
                border-radius:5px;
                color:#ffffff;
                font-size:14px;
                cursor:pointer;
                border:1px solid #1A3967;
                margin:0px 10px;
            }
            & .cancel{
                background-color:#ffffff;
                padding:10px 50px;
                border-radius:5px;
                color:#1A3967;
                font-size:14px;
                cursor:pointer;
                border:1px solid #1A3967;
                margin:0px 10px;
            }
        }

    }


    & .fields-div{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        background-color:#ffffff;
        padding: 10px 0px;
        border-radius:0px 0px 7px 7px;
        & .input-title{
            font-size:14px;
        }

        & .input-box{
            background: #FFFFFF;
            border: 0.5px solid #8A8D91;
            border-radius: 5px;
            display:flex;
            justify-content:center;
            align-content:center;
            padding:5px;
            width:72%;
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
        }
    
        & .browse-btn{
            background: #D7D7D7;
            border-radius: 5px;
            padding:10px 35px;
            font-size:13px;
            font-weight:400;
            cursor:pointer;
            text-align:center;
        }
    }

}


`





function ProcessFiling() {
    return (
        <ProcFillCont className="col-lg-12 col-md-12 col-sm-12">
            <div className="bg-div col-lg-12 col-md-12 col-sm-12">
                <div className="upload-box col-lg-5 col-md-5 col-sm-10">
                    <div className="title-div">
                        Process Filing
                    </div>

                    <div className="fields-box">

                        <div className="fields-div">
                            <label className="input-title col-lg-4 col-md-4 col-sm-4">Assignee Name</label>
                            <div className="input-box">
                                <input />
                            </div>
                        </div>

                        <div className="fields-div">
                            <label className="input-title col-lg-4 col-md-4 col-sm-4">Company Name</label>
                            <div className="input-box">
                                <input />
                            </div>
                        </div>

                        <div className="fields-div">
                            <label className="input-title col-lg-4 col-md-4 col-sm-4">Filling Type</label>
                            <div className="input-box">
                                <input />
                            </div>
                        </div>

                        <div className="fields-div">
                            <label className="input-title col-lg-4 col-md-4 col-sm-4">Attach Sheet</label>
                            <div className="browse-btn">
                                Browse File
                            </div>
                        </div>


                        <div className="buttons-div">
                            <div className="confirm">
                                Confirm
                            </div>
                            <div className="cancel">
                                Cancel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProcFillCont>
    )
}

export default ProcessFiling