import styled from "styled-components"
import { Background_Color } from "../styles";


const FooterCont = styled.div`
    background-color:${Background_Color};
    padding:7px 15px;
    text-align:center;
`
const LogoDiv = styled.div`
        & img{
            height:16px;
        }
`
const TextDiv = styled.div`
        color:#ffffff;
        font-size:11px;
        font-weight:300;
        padding:15px 10px 0px 10px;

`

function Footer() {
    return (
        <FooterCont>
            <LogoDiv>
                <img alt="forensic_aplha_logo" src={"./img/forensic_alpha_logo.png"} />
            </LogoDiv>
            <TextDiv>
                Forensic Alpha Limited is authorised and regulated by the Financial Conduct Authority (Reference number: 763770) <br />
                © 2022 Forensic Alpha Limited. All rights reserved.
            </TextDiv>
        </FooterCont>
    )
}
export default Footer;