
import styled from "styled-components"
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const UploadSuccBoxCont = styled.div`
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
    & .succ-box{
        background: #ffffff;
        border: 1px dashed rgba(0, 0, 0, 0.25);
        border-radius:7px;
        text-align:center;
        padding:40px 50px;
        & .tick-mark{
            font-size:45px;
            font-weight:400;
            color:#1A3967;
        }
        & label{
            font-size:14px;
            font-weight:400;
        }
        & .upload-btn-div{
            display:flex;
            justify-content:center;
            align-content:center;
        }
        & .upload-more-btn{
            background-color:#1A3967;
            padding:10px 30px;
            margin:20px;
            border-radius:5px;
            color:#ffffff;
            width:40%;
        }
    }

`



function UploadSuccBox() {
    return (
        <UploadSuccBoxCont>
            <div className="bg-div col-lg-12 col-md-12 col-sm-12">
                <div className="succ-box col-lg-5 col-md-5 col-sm-10">
                    <IoCheckmarkCircleOutline className="tick-mark" /><br />
                    <label>Your Sheets has been successfully uploaded.!</label>
                    <div className="upload-btn-div">
                        <div className="upload-more-btn">
                            Upload more
                        </div>
                        <div className="upload-more-btn">
                            View Files
                        </div>
                    </div>
                </div>
            </div>
        </UploadSuccBoxCont>
    )
}

export default UploadSuccBox