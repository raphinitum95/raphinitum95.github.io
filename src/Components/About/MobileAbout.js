import React, {Component} from 'react';
import {Bold, Container, PageColumn, Title} from "../../shared/styledComponents";
import styled from "styled-components"
import Owner from "../../Assets/Images/owner.jpeg"
import Truck from "../../Assets/Images/truck.JPG"

class MobileAbout extends Component {
    render() {
        return (
            <Container
                navSize={this.props.isLandscape ? this.props.height * .2 : this.props.height * .10}
                height={this.props.height}
            >
                <PageColumn isLandscape={this.props.isLandscape}>
                    <Title isLandscape={this.props.isLandscape}>About Serranos</Title>
                    <Paragraph isLandscape={this.props.isLandscape}>
                        Everything in Mexico revolves around family. The greatest memories are around the dinner table.
                        So much glee and laughter that it almost seems unreal. You learn to cook from your parents and you receive the greatest advice at the table.
                        This is why at Serranos, we want <Bold>to make strangers into family</Bold> so that we may
                        create great memories and spread happiness through food.
                    </Paragraph>
                </PageColumn>
                <PageColumn isLandscape={this.props.isLandscape}>
                    <Column isLandscape={this.props.isLandscape}>
                        <Image src={Owner} isLandscape={this.props.isLandscape}/>
                    </Column>
                    <Column isLandscape={this.props.isLandscape}>
                        <Image src={Truck} isLandscape={this.props.isLandscape}/>
                    </Column>
                </PageColumn>
            </Container>
        );
    }
}

export default MobileAbout

const Paragraph = styled.p`
    text-align: center;
    line-height: 1.5rem;
    font-size: ${props => props.isLandscape ? 1 : .8}rem;
`;

const Image = styled.img`
    display: block;
    width: ${props => props.isLandscape ? 50 : 90}%;
    margin: 0 auto;
`;

const Column = styled.div`
    width: ${props => props.isLandscape ? 100 : 50}%;
    display: inline-block;
    padding: .5rem 0;
`;