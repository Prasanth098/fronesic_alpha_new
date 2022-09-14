import axios from "axios";
import { useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";
import { LOGIN_API } from "../../apiUrls";
import Spinner from 'react-bootstrap/Spinner';
import 'antd/dist/antd.css';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import { BiError } from "react-icons/bi";
import { useRouter } from "next/router";

const LoginCont = styled.div`
    & .bg-div{
        background-image: url('./img/bg30_crop.png');
        background-size:cover;
        background-repeat: no-repeat;
        display:flex;
        align-items:center;
        justify-content:center;
        height: 80vh;
    }
    
    & .login-box{
        background:#ffffff;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
        border-radius:10px;
        padding:40px 50px;
        margin:20px;
        display:flex;
        flex-direction:column;
        & .login-title{
            color:#1A3967;
            font-size:21px;
            font-weight:500;
        }
        & .forgot-pass{
            color:#1A3967;
            font-size:14px;
            font-weight:500;
            cursor:pointer; 
            padding:30px 0px 10px 0px;
        }

        & .input-box{
            background: #FFFFFF;
            border: 0.5px solid #8A8D91;
            border-radius: 5px;
            display:flex;
            justify-content:center;
            align-content:center;
            padding:8px;
            margin-top:20px;
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

        & .login-btn{
            padding:10px;
            background-color:#1A3967;
            text-align:center;
            color:#ffffff;
            border-radius:5px;
            cursor:pointer;
            margin-top:20px;
            border:1px solid #ffffff;
            :hover{    
                border:1px solid #1A3967;
                box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
            }
        }
    }
`
const ShakeEffect = keyframes`
    10%,90% {transform: translate3d(-1px, 0, 0);}
    20%,80% {transform: translate3d(2px, 0, 0);}
    30%,50%,70% {transform: translate3d(-4px, 0, 0);}
    40%,60% {transform: translate3d(4px, 0, 0);}
`
const ErrorText = styled.div`
        margin:10px 0px;
        font-size:12px;
        color:red;
        animation-name: ${ShakeEffect};
        animation-duration: 1s;
        animation-iteration-count:3;
`

function Login() {
    const Router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //errors and btn-disabled
    const [error, setError] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [loader, setLoader] = useState(false)

    // Focus email Input
    const emailInput = useCallback((inputElement) => {
        if (inputElement) {
            inputElement.focus()
        }
    }, [])

    //Email input
    const handleEmail = (e) => {
        const { value, pattern } = e.target
        setEmail(value)
    }

    //Password Input
    const handlePassword = (e) => {
        const { value } = e.target
        setPassword(value)
    }

    const openNotification = (message, desc) => {
        notification.open({
            message: message,
            description: desc,
            icon: (
                <BiError
                    style={{
                        color: 'red',
                    }}
                />
            ),
        });
    };


    const handleLogin = () => {
        if (email.length === 0) {
            const message = "Email is Missing"
            const desc = "Please enter an Email address."
            openNotification(message, desc)
        } else if (password.length === 0) {
            const message = "Password is Missing."
            const desc = "Please enter a Password."
            openNotification(message, desc)
        } else {
            setLoader(true)
            const body = {
                email: email,
                password: password
            }
            const url = `${LOGIN_API}`
            axios.post(url, body)
                .then((res) => {
                    if (res && res.status === 200) {
                        console.log("response", res)
                        localStorage.setItem("forensic_user_details", JSON.stringify(res && res.data))
                        Router.push("/newfillings")
                        setLoader(false)
                    }
                })
                .catch((res) => {
                    const err = res && res.data && res.data.detail
                    console.log("err", err)
                    setLoader(false)
                })
        }
    }


    return (
        <LoginCont className="col-lg-12 col-md-12 col-sm-12">
            <div className="bg-div col-lg-12 col-md-12 col-sm-12">
                <div className="login-box col-lg-4 col-md-6 col-sm-10">
                    <label className="login-title">Login to your account</label>
                    <ErrorText>{error}</ErrorText>
                    <div className="input-box">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            autoFocus ref={emailInput}
                            autoComplete="off"
                            value={email}
                            pattern={"/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"}
                            onChange={(e) => { handleEmail(e) }}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            onChange={(e) => { handlePassword(e) }}
                            value={password}
                        />
                    </div>
                    <div className="login-btn" onClick={() => { handleLogin() }}>
                        {loader ? <Spinner animation="border" variant="light" size="sm" /> : "Login"}
                    </div>
                    <label className="forgot-pass">Forgot Password?</label>
                </div>
            </div>
        </LoginCont>
    )
}

export default Login;