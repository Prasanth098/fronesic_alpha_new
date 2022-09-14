import styled from "styled-components"


const MetaDataCont = styled.div`
    padding:20px;
    & .form-field{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding:0px 0px 20px 0px;
        & label{
            font-size:12px;
            font-weight:300;
            & img{
                height:12px;
                margin:0px 3px;
            }
        }
        & .input-box{
            background: #FFFFFF;
            border: 0.5px solid #8A8D91;
            border-radius: 2px;
            display:flex;
            justify-content:center;
            align-content:center;
            padding:2px;
            width:50%;
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
                font-size:14px;
                font-weight:300;
                padding:2px 0px;

                :focus{
                    outline:none;
                }
            }
        }
    }

    & .btns-group{
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

`
function MetaDataForm() {
    return (
        <MetaDataCont className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4">Region</label>
                <div className="input-box">
                    <input />
                </div>
            </div>
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4">Filling Type <img src={"./img/info-com.png"} alt="information about Filling type" /></label>
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
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4"> Prelim or Final? <img src={"./img/info-com.png"} alt="information about Perlim or Final" /></label>
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
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4">CIQ ID </label>
                <div className="input-box">
                    <input />
                </div>
            </div>
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4">Short Name </label>
                <div className="input-box">
                    <input />
                </div>
            </div>
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4">Filing Year <img src={"./img/info-com.png"} alt="information about Filling year" /> </label>
                <div className="input-box">
                    <input />
                </div>
            </div>
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4">Year End <img src={"./img/info-com.png"} alt="information about Year end" /></label>
                <div className="input-box">
                    <input />
                </div>
            </div>
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4">Reporting Currency </label>
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
            <div className="form-field">
                <label className="col-lg-4 col-md-4 col-sm-4">Reporting Denomination</label>
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

            <div className="btns-group">
                <div className="save-btn btn">
                    Save
                </div>
                <div className="cancel-btn btn">
                    Cancel
                </div>
            </div>

        </MetaDataCont>
    )
}

export default MetaDataForm