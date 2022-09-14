import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { FcMenu } from "react-icons/fc";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { AiOutlineHome, AiOutlineCalendar, AiFillPlusCircle, AiOutlineSetting, } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Head from 'next/head'
import Header from "../container/header";
import Footer from "../container/footer";

const MainDiv = styled.div`
`

function MainLayout(props) {
    const { children } = props

    return (
        <>
            <MainDiv>
                <Header />
                {children}
                <Footer />
            </MainDiv>
        </>
    )
}

export default MainLayout;