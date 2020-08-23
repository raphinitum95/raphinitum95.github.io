import React, {Component} from 'react';
import Aux from "../../hoc/Aux/Aux";
import Logo from "../../Assets/Images/MobileLogo.png";
import Horns from "../../Assets/Images/Horns-Transparent.png"
import styled, {css} from "styled-components";
import {GiFoodTruck, GiTacos} from "react-icons/gi"
import {SiAboutDotMe} from "react-icons/si"
import {RiContactsLine} from "react-icons/ri"


class Mobilenav extends Component {
    render() {
        return (
            <Aux>
                <Container
                    open={this.props.open}
                >
                    <Topnav
                        open={this.props.open}
                    >
                        <Image src={Logo}
                           open={this.props.open}
                        />
                        <SmallLogo src={Horns}
                           className={this.props.open ? "open" : ""}
                           open={this.props.open}
                        />
                        <MenuIcon
                            open={this.props.open}
                            onClick={this.props.toggleMenu}
                        >
                            <div className={this.props.open ? "change bar1" : "normal bar1"} />
                            <div className={this.props.open ? "change bar2" : "normal bar2"} />
                            <div className={this.props.open ? "change bar3" : "normal bar3"} />
                        </MenuIcon>
                    </Topnav>
                    <Nav
                        open={this.props.open}
                    >
                        <ul>
                            <div className={"line1"} />
                            <div className={"line2"} />
                            <Li className={"schedule"}>
                                <div>
                                    <GiFoodTruck />
                                    Truck Schedule
                                </div>
                            </Li>
                            <Li className={"menu"}>
                                <div>
                                    <GiTacos />
                                    Menu
                                </div>
                            </Li>
                            <Li className={"about"}>
                                <div>
                                    <SiAboutDotMe />
                                    About Us
                                </div>
                            </Li>
                            <Li className={"contact"}>
                                <div>
                                    <RiContactsLine />
                                    Contact
                                </div>
                            </Li>
                        </ul>
                    </Nav>
                </Container>
            </Aux>
        );
    }
}

export default Mobilenav

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: ${props => props.open ? "100vh" : "10%"};
    background-color: black;
    color: white;
    position: relative;
    display: flex;
    flex-flow: column;
`;

const Topnav = styled.div`
    width: 100%;
    overflow: hidden;
    height: 8rem;
    background-color: "black";
    color: white;
    position: relative;
    
    & .open{
        animation: slide 1.2s;
        animation-fill-mode: forwards;
    }
    
    @keyframes slide{
        from {left: 50%; transform: translate(50%, -50%);}
        to {left: 0; transform: translate(0, -50%);}
    }
`;

const Image = styled.img`
    height: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    margin: 0 auto;
    opacity: ${props => props.open ? 0 : 1};
`;

const SmallLogo = styled.img`
    position: absolute;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(50%, -50%);
    opacity: ${props => props.open ? 1 : 0};
`;

const Nav = styled.nav`
    flex: 1 1 auto;
    background-color: #047bbc;
    display: flex;
    & ul {
        color: white;
        list-style: none;
        -webkit-transition: max-height 1s;
        -moz-transition: max-height 1s;
        transition: max-height 1s;
        overflow: hidden;
        padding: 0;
        margin: 0;
        width: 100%;
        position: relative;
        
        .line1, .line2 {
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        .line1 {
            height: 90%;
            width 1px;
        }
        
        .line2 {
            height: 1px;
            width 90%;
        }
    }
    ${({ open }) =>
    open && css`
        max-height: 100%
    `};
    
    ${({ open }) =>
    !open && css`
        max-height: 0;
        display: none;
    `};
`;

const MenuIcon = styled.div`
    display: block;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    
    .bar1, .bar2, .bar3 {
        width: 50px;
        height: 4px;
        background-color: white;
        margin: 4px auto;
        transition: 0.4s;
        cursor: pointer;
    }
    
    .bar3:before
    {
        content: 'MENU';
        position: absolute;
        top: 26px;
        right: 0;
        left: 0;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        text-align: center;
    }
    
    .change.bar3:before {
        animation: moveUpThenDown 1.2s, shakeWhileMovingUp 1.2s;
        animation-fill-mode: forwards;
        animation-delay: .3s;
    }
    
    .change.bar3 {
        animation: burnColor 0.8s;
        animation-fill-mode: forwards;
    }
    
    .normal.bar3 {
        animation: cleanColor 0.8s;
        animation-fill-mode: forwards;
    }
    
    .change.bar2 {
        animation: burnColor 0.8s, exitRight 1s;
        animation-fill-mode: forwards;
    }
    
    .normal.bar2 {
        animation: cleanColor 0.8s, enterRight 1s;
        animation-fill-mode: forwards;
    }
    
    .change.bar1 {
        animation: burnColor 0.8s, exitLeft 1s;
        animation-fill-mode: forwards;
    }
    
    .normal.bar1 {
        animation: cleanColor 0.8s, enterLeft 1s;
        animation-fill-mode: forwards;
    }
    
    @keyframes burnColor{
        from {background-color: white;}
        to {background-color: #bc041f;}
    }
    
    @keyframes cleanColor{
        from {background-color: #bc041f;}
        to {background-color: white;}
    }
    
    @keyframes exitRight{
        from {transform: translateX(0);}
        to {transform: translateX(50px);}
    }
    
    @keyframes enterRight{
        from {transform: translateX(50px);}
        to {transform: translateX(0);}
    }
    
    @keyframes exitLeft{
        from {transform: translateX(0);}
        to {transform: translateX(-50px);}
    }
    
    @keyframes enterLeft{
        from {transform: translateX(-50px);}
        to {transform: translateX(0);}
    }
    
    @keyframes moveUpThenDown
    {
        0%{ top:26; }
        50%{ top:-5px;}
        100%{ top:5px; }
    }
    
    @keyframes shakeWhileMovingUp
    {
        0%{ transform: rotateZ(0); }
        25%{ transform:rotateZ(-15deg); }
        50%{ transform:rotateZ(0deg); }
        75%{ transform:rotateZ(15deg); }
        100%{ transform:rotateZ(0); }
    }
`;

const Li = styled.li`
    display: inline-block;
    text-align: center;
    width: 50%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box; 
    height: 50%;
    cursor: pointer;
    position: relative;
    
    &:hover{
        color: #bc041f;
    }
    
    & div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        & svg {
            display: block;
            width: 50%;
            height: 50%;
            margin: 1rem auto;
        }
    }
`;