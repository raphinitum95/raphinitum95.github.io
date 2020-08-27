import React, {Component} from 'react';
import Aux from "../../hoc/Aux/Aux";
import Logo from "../../Assets/Images/Logo-White-Transparent.png";
import Horns from "../../Assets/Images/Horns-Transparent.png"
import styled, {css} from "styled-components";
import {GiFoodTruck, GiTacos} from "react-icons/gi"
import {RiContactsLine} from "react-icons/ri"
import {ImProfile} from "react-icons/im"


class Mobilenav extends Component {
    constructor(props) {
        super(props);
        this.myLogo = React.createRef()
    }


    render() {
        return (
            <Aux>
                <Container
                    open={this.props.open}
                    height={this.props.height}
                    isLandscape={this.props.width > this.props.height}
                    clicked={this.props.clicked}
                >
                    <Topnav
                        open={this.props.open}
                        height={this.props.height}
                        isLandscape={this.props.width > this.props.height}
                    >
                        <Image
                            src={Logo}
                            ref={this.myLogo}
                            open={this.props.open}
                            clicked={this.props.clicked}
                        />
                        <SmallLogo src={Horns}
                            open={this.props.open}
                            bigLogo={this.myLogo.current === null ? 0 : this.myLogo.current.offsetWidth}
                            clicked={this.props.clicked}
                        />
                        <MenuIcon
                            open={this.props.open}
                            clicked={this.props.clicked}
                            onClick={this.props.toggleMenu}
                        >
                            <div className={`bar1 ${this.props.open ? "change" : this.props.clicked ? "normal" : ""}`} />
                            <div className={`bar2 ${this.props.open ? "change" : this.props.clicked ? "normal" : ""}`} />
                            <div className={`bar3 ${this.props.open ? "change" : this.props.clicked ? "normal" : ""}`} />
                        </MenuIcon>
                    </Topnav>

                    <Nav
                        open={this.props.open}
                        clicked={this.props.clicked}
                        height={this.props.height}
                    >
                        <ul>
                            <Li
                                className={`schedule ${this.props.active === 0 ? "active" : ""}`}
                                isLandscape={this.props.width > this.props.height}
                                onClick={() => this.props.linkClick(0)}
                            >
                                <div>
                                    <GiFoodTruck />
                                    Truck Schedule
                                </div>
                            </Li>
                            <Li
                                className={`menu ${this.props.active === 1 ? "active" : ""}`}
                                isLandscape={this.props.width > this.props.height}
                                onClick={() => this.props.linkClick(1)}
                            >
                                <div>
                                    <GiTacos />
                                    Menu
                                </div>
                            </Li>
                            <Li
                                className={`about ${this.props.active === 2 ? "active" : ""}`}
                                isLandscape={this.props.width > this.props.height}
                                onClick={() => this.props.linkClick(2)}
                            >
                                <div>
                                    <ImProfile />
                                    About Us
                                </div>
                            </Li>
                            <Li
                                className={`contact ${this.props.active === 3 ? "active" : ""}`}
                                isLandscape={this.props.width > this.props.height}
                                onClick={() => this.props.linkClick(3)}
                            >
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
    width: 100vw;
    background-color: transparent;
    overflow-x: hidden;
    color: white;
    position: absolute;
    height: ${props => props.height}px;
    z-index: 100;
    
    ${({ open, clicked }) =>
    !open && clicked && css`
        animation: small 1ms;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
        
        @keyframes small{
            from { height: ${props => props.height}px; }
            to { height: ${props => props.isLandscape ? props.height * .2 + 10 : props.height * .10 + 10}px; }
        }
    `};
    
    ${({ open }) =>
    open && css`
        height: ${props => props.height}px;
    `};
    
    ${({ clicked }) =>
    !clicked && css`
        height: ${props => props.isLandscape ? props.height * .2 + 10 : props.height * .10 + 10}px;
    `};
`;

const Topnav = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: black;
    height: ${props => props.isLandscape ? props.height * .20 : props.height * .10}px;
    color: white;
    position: relative;
    border-bottom: #bc041f 10px solid;
`;

const Image = styled.img`
    height: 60%;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(0, -50%);
    display: block;
    margin: 0 auto;
    
    ${({ clicked }) =>
    !clicked && css`
        opacity: 1;
    `};
    
    ${({ open }) =>
    open && css`
        opacity: 0;
    `};
    
    ${({ open, clicked }) =>
    !open && clicked && css`
        animation: show  1.2s;
        animation-fill-mode: forwards;
        
        @keyframes show{
            0% { opacity: 0; }
            85% { opacity: 0; }
            100% { opacity: 1; }
        }
    `};
`;

const SmallLogo = styled.img`
    position: absolute;
    height: 65%;
    top: 50%;
    transform: translate(50%, -50%);

    ${({ clicked }) =>
    !clicked && css`
        opacity: 0;
        height: 35%;
    `};
    
    ${({ open }) =>
    open && css`
        opacity: 1;
        height: 35%;
        animation: slide 1.2s, fix 1ms 1.2s 1;
        animation-fill-mode: forwards;
        
        @keyframes slide{
            0% {
                left: ${props => props.bigLogo * .65}px;
                top: 50%;
                height: 35%;  
                transform: translate(50%, -50%);
            }
            80% {
                transform: translateY(-90%);
            }
            100% {
                left: 5%; 
                top: 50%;
                height: 65%; 
                transform: translate(0, -90%);
            }
        }
        
        @keyframes fix{
            from{ transform: translateY(-80%); }
            to{ transform: translateY(-50%); }
        }
        
    `};
    
    ${({ open, clicked }) =>
    !open && clicked && css`
        animation: 
            slideBack 1.2s,
            hide .1s 1.1s 1;
        animation-fill-mode: forwards;
        
        @keyframes slideBack{
            from {
                left: 5%;
                height: 65%; 
                transform: translate(0, -50%);
            }
            to {
                left: ${props => props.bigLogo * .60}px;  
                height: 45%;
                transform: translate(50%, -50%);
            }
        }
        
        @keyframes hide {
            from { opacity: 1;}
            to{ opacity: 0;}
        }
    `};
`;

const Nav = styled.nav`
    background-color: #119A7F;
    height: ${props => props.height }px;
    width: 10rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    
    & ul {
        color: white;
        list-style: none;
        overflow: hidden;
        padding: 0;
        margin: 0;
        height: 100%;
        position: relative;
        overflow-y: scroll;
    }
    
    ${({ clicked }) =>
    !clicked && css`
        transform: translateX(100%);
    `};
    
    ${({ open }) =>
    open && css`
        animation: openMenu 1.5s;
        animation-fill-mode: forwards;
        
        @keyframes openMenu{
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
    `};
    
    ${({ open, clicked }) =>
    !open && clicked && css`
        animation: closeMenu 1.4s;
        animation-fill-mode: forwards;
        
        @keyframes closeMenu{
            from { transform: translateX(0); }
            to { transform: translateX(100%); }
        }
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
    
    ${({ open }) =>
    open && css`
        animation: slideLeft 1.5s;
        animation-fill-mode: forwards;
        
        
        @keyframes slideLeft{
            from {right: 1rem;}
            to {right: 10.2rem;}
        }
    `};
    
    ${({ open, clicked }) =>
    !open && clicked && css`
        animation: slideRight 1.5s;
        animation-fill-mode: forwards;
        
        @keyframes slideRight{
            from {right: 10.2rem;}
            to {right: 1rem;}
        }
    `};
    
    .bar1, .bar2, .bar3 {
        width: 2.5rem;
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
        top: 3rem;
        right: 0;
        left: 0;
        color: white;
        font-size: 10px;
        font-weight: bold;
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
        to {transform: translateX(3rem);}
    }
    
    @keyframes enterRight{
        from {transform: translateX(3rem);}
        to {transform: translateX(0);}
    }
    
    @keyframes exitLeft{
        from {transform: translateX(0);}
        to {transform: translateX(-3rem);}
    }
    
    @keyframes enterLeft{
        from {transform: translateX(-3rem);}
        to {transform: translateX(0);}
    }
    
    @keyframes moveUpThenDown
    {
        0%{ top:3rem; }
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
    cursor: url('${Horns}'), auto;
    display: block;
    text-align: center;
    width: 100%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box; 
    cursor: url("${Horns}"), pointer;
    position: relative;
    -webkit-box-sizing: border-bottom: white 1px solid; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-bottom: white 1px solid;   /* Firefox, other Gecko */
    border-bottom: white 1px solid;
    
    &.active {
        background-color: #004D3E;
    }
    
    & div {
        padding-bottom: ${props => props.isLandscape ? ".2rem" : ".9rem"};
        padding-top: ${props => props.isLandscape ? ".1rem" : ".3rem"};

        & svg {
            display: block;
            height: 2rem;
            width: 2rem;
            margin: 1rem auto;
        }
    }
`;