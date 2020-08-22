import React, {Component} from 'react';
import styled from 'styled-components';
import Hero from '../../Assets/Images/Alamo.jpg'
import Aux from "../../hoc/Aux/Aux";
import Navigation from "../../Components/Navigation/Navigation";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 0,
            open: false,
            mobile: true,
        }
    }

    updateDimensions = () => {
        if(window.innerWidth > 1200) {
            this.setState({ columnCount: 4 });
        } else if(window.innerWidth < 1200 && window.innerWidth > 1100) {
            this.setState({ columnCount: 3 });
        } else if(window.innerWidth < 1000 && window.innerWidth > 700) {
            this.setState({columnCount: 2});
        } else if(window.innerWidth < 700) {
            this.setState({columnCount: 1});
        }

        if(window.innerWidth > 800) {
            this.setState({ mobile: true });
        } else{
            this.setState({ mobile: false });
        }
    };

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    componentDidMount () {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    handleNavClick = (navClick) => {
        this.setState({
            activeNav: navClick
        })
    };

    render() {
        return (
            <Aux>
                <Background/>
                <Overlay/>
                <Container>
                    <Navigation
                        active={this.state.activeNav}
                        mobile={this.state.mobile}
                        open={this.state.open}
                        linkClick={this.handleNavClick}
                        toggleMenu={this.handleMenuToggle}
                    />
                </Container>
            </Aux>
        );
    }
}

export default Body

const Background = styled.div`
    background-image: url(${Hero});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
`;

const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    background-color: rgba(0,0,0,.8);
`;

const Container = styled.div`
    width: 75%;
    height: 100vh;
    margin: auto;
    z-index: 1;
`