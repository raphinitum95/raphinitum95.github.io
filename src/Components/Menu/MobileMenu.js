import React, {Component} from 'react';
import Burritos from "../../Assets/Images/Burritos.png"
import Chucherias from "../../Assets/Images/Chucherias.png"
import styled from "styled-components";

class MobileMenu extends Component {
    render() {
        return (
            <Container
                navSize={this.props.isLandscape ? this.props.height * .2 : this.props.height * .10}
                height={this.props.height}
            >
                <Column
                    navSize={this.props.isLandscape ? this.props.height * .2 : this.props.height * .10}
                    height={this.props.height}
                    isLandscape={this.props.isLandscape}
                >
                    <Title src={Burritos} isLandscape={this.props.isLandscape} />
                    <ul className={"itemParent"}>
                        <MenuItem isLandscape={this.props.isLandscape}>Norteño</MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Picadillo | Papa</MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Guiso Poblano</MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Guiso Chipotle</MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Machacado</MenuItem>
                    </ul>
                </Column>
                <Column
                    className={"right"}
                    navSize={this.props.isLandscape ? this.props.height * .2 : this.props.height * .10}
                    height={this.props.height}
                    isLandscape={this.props.isLandscape}
                >
                    <Title src={Chucherias} isLandscape={this.props.isLandscape}/>
                    <ul className={"itemParent"}>
                        <MenuItem isLandscape={this.props.isLandscape}>Street Tacos</MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Qesadillas</MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Tostitos Preparados</MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Taco Chimuelo<p>Beans, rice, cheese, and salsa</p></MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Rice</MenuItem>
                        <MenuItem isLandscape={this.props.isLandscape}>Beans<p>Refried or Charro style</p></MenuItem>
                    </ul>
                </Column>
            </Container>
        );
    }
}

export default MobileMenu

const Container = styled.div`
    width: 100vw;
    height: ${props => props.height - props.navSize - 10}px;
    padding-top: ${props => props.navSize + 10}px;
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -20;
    
    & .itemParent {

        list-style: none;
        padding: 0;
    }
`;

const MenuItem = styled.li`
    color: black;
    padding: ${props => props.isLandscape ? "0" : "1.2rem 0"};
    margin: 0 auto;

    & p {
        color: #bc041f;
        font-size: 10px;
        margin: 0;
    }
    
`;

const Title = styled.img`
    width: ${props => props.isLandscape ? 40 : 65}%;
    padding: 1rem 0;
`;