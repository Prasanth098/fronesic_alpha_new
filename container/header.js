import { useRouter } from "next/router"
import styled from "styled-components"
import { Background_Color, Background_Image } from "../styles"

const HeaderCont = styled.div`
    background-color:${Background_Color};
    padding:20px 15px;
    display:flex;
    justify-content:space-between;
    align-content:center;
    // position:fixed;
    // width:100%;

`
const LogoDiv = styled.div`
& img{
    height:35px;
}
`
const ProfileDiv = styled.div`
    cursor:pointer;
    & img{
        height:35px;
        margin:0px 5px;
    }
    & label{
        color:#ffffff;
        font-size:14px;
        font-weight:400;
        cursor:pointer;
    }
`

function Header() {
    const Router = useRouter()
    const isLogin = Router.pathname == "/" ? false : true

    return (
        <HeaderCont>
            <LogoDiv>
                <img alt="Atlas Logo" src={"./img/logo.png"} />
            </LogoDiv>
            {
                isLogin &&
                <ProfileDiv>
                    <img alt="user-logo" src={"./img/profile.png"} />
                    <label>Prasanth Talapadra</label>
                </ProfileDiv>
            }

        </HeaderCont>
    )
}

export default Header