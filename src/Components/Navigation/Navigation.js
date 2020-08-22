import React, {Component} from 'react';
import Logo from "../../Assets/Images/Logo-Transparent.png";
import Aux from "../../hoc/Aux/Aux";
import styled from "styled-components";

class Navigation extends Component {
    render() {
        return (
            <Aux>
                <Navbar>
                    <Image src={Logo} />
                    <Nav>
                        <MenuIcon onClick="myFunction(this)">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </MenuIcon>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Truck Schedule
                            </li>
                            <li>
                                Menu
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </Nav>
                </Navbar>
            </Aux>
        );
    }
}

export default Navigation

const Image = styled.img`
    width: 80%;
    display: block;
    margin: 0 auto;
    padding-top: 1.5rem;
`;

const Navbar = styled.div`
    width: inherit;
    height: auto;
    display: block;
    position: fixed;
`;

const Nav = styled.nav`
    & ul {
        color: white;
        list-style: none;
    }
`;

const MenuIcon = styled.div`
    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }
    
    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
    }
    
    .change .bar2 {opacity: 0;}
    
    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
`;