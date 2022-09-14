import styled from "styled-components";

const CommBgCont = styled.div`
    background-image: url('./img/bg30_crop.png');
    background-size:cover;
    background-repeat:no-repeat;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 77vh;
`


function CommonBackGround(props) {
    const { children } = props
    return (
        <CommBgCont>
            {children}
        </CommBgCont>
    )
}

export default CommonBackGround