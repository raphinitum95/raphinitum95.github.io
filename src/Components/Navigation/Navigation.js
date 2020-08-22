import React, {Component} from 'react';
import Logo from "../../Assets/Images/Logo-Transparent.png";
import Aux from "../../hoc/Aux/Aux";
import styled, {css} from "styled-components";

class Navigation extends Component {
    render() {
        return (
            <Aux>
                <Navbar>
                    <Image src={Logo} />
                    <Nav
                        open={this.props.open}
                    >
                        <MenuIcon
                            mobile={this.props.mobile}
                            open={this.props.open}
                            onClick={this.props.toggleMenu}
                        >
                            <div className={this.props.open ? "change bar1" : "bar1"} />
                            <div className={this.props.open ? "change bar2" : "bar2"} />
                            <div className={this.props.open ? "change bar3" : "bar3"} />
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
        -webkit-transition: max-height 0.8s;
        -moz-transition: max-height 0.8s;
        transition: max-height 0.8s;
        overflow: hidden;
    }
    ${({ open }) =>
    open && css`
        & ul {
            max-height: 100px;
        }`
    };
    
    ${({ open }) =>
    !open && css`
        & ul {
            max-height: 0;
            
        }`
    };
`;

const MenuIcon = styled.div`
    display: ${props => props.mobile === true ? "block" : "none"};
    cursor: pointer;
    .bar1, .bar2, .bar3 {
        width: 30px;
        height: 3px;
        background-color: white;
        margin: 4px auto;
        transition: 0.4s;
        cursor: pointer;
    }
    
    .change.bar1 {
        background-color: #bc041f;
        -webkit-transform: rotate(-45deg) translate(-2px, 2px);
        transform: rotate(-45deg) translate(-2px, 2px);
    }
    
    .change.bar2 {opacity: 0;}
    
    .change.bar3 {
        background-color: #bc041f;
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
`;