import React from 'react';
import {GoogleMap, Marker, InfoBox, useLoadScript} from "@react-google-maps/api"
import Horns from "../../Assets/Images/Horns-Transparent.png"
import styled from "styled-components";
import {Container, Title, PageColumn, Bold} from "../../shared/styledComponents"

export default function MobileSchedule(props) {
    let [latitude, setLatitude] = React.useState(29.437410)
    let [longitude, setLongitude] = React.useState(-98.479330)
    let [address, setAddress] = React.useState('1221 Broadway, San Antonio, TX 78215')

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
    });

    const mapContainerStyle = {
        width: "100%",
        height: "100%"
    }

    if(loadError) return "loading error";
    if(!isLoaded) return "Loading Map";
    const iconPin = {
        url: Horns,
        scaledSize: new window.google.maps.Size(50,40), //to reduce the size of icons
    };

    const defaultOptions = {
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
    }

    const standardTime = "7PM - 2AM"
    return (
        <Container
            navSize={props.isLandscape ? props.height * .2 : props.height * .10}
            height={props.height}
        >
            <PageColumn isLandscape={props.isLandscape}>
                <Title isLandscape={props.isLandscape}>Schedule</Title>
                <Disclaimer isLandscape={props.isLandscape}>
                    Our hours of operation and location are subject to change. <br />Please refer back to this page to get our most up to date schedule.
                </Disclaimer>
                <List isLandscape={props.isLandscape}>
                    <ListItem><Bold>Monday: <Red>Closed</Red></Bold></ListItem>
                    <ListItem><Bold>Friday:</Bold> {standardTime}</ListItem>
                    <ListItem><Bold>Tuesday: <Red>Closed</Red></Bold></ListItem>
                    <ListItem><Bold>Saturday:</Bold> {standardTime}</ListItem>
                    <ListItem><Bold>Wednesday: <Red>Closed</Red></Bold></ListItem>
                    <ListItem><Bold>Sunday: <Red>Closed</Red></Bold></ListItem>
                    <ListItem><Bold>Thursday:</Bold> {standardTime}</ListItem>
                </List>
                <Column><p><Bold>Currently location:</Bold></p></Column>
                <Column><p>{address}</p></Column>
            </PageColumn>
            <PageColumn className={"map"} isLandscape={props.isLandscape}>
                <MapContainer>
                    {/*<a href={`https://goo.gl/maps/qLv7zfVRTGG6BeVu6`} target={"blank"}>*/}
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            zoom={15}
                            center={{lat: latitude, lng: longitude}}
                            options={defaultOptions}
                        >
                            <Marker position={{lat: latitude, lng: longitude}} icon={iconPin}/>
                            <InfoBox position={{lat: latitude, lng: longitude}} >
                                <div style={{ backgroundColor: "white", opacity: 0.75, padding: 10}}>
                                    <div style={{ fontSize: 12, color: "black" }}>
                                        Porta Rossa Bar<br/>{address}
                                    </div>
                                </div>
                            </InfoBox>
                        </GoogleMap>
                    {/*</a>*/}
                </MapContainer>
            </PageColumn>
        </Container>
    );
}

const MapContainer = styled.div`
    width: 100%;
    height: 100%
`;

const Disclaimer = styled.p`
    color: #bc041f;
    font-size: ${props => props.isLandscape ? .5 : .7}rem;
    display: inline-block;
    margin: 0 auto;
    padding: 0 0 .5rem;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    font-size: 12px;
    
    &:before, &:after {
        content: '***';
        font-weight: bold;
    }
`;

const List = styled.ul`
    list-style: none;
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    font-size: ${props => props.isLandscape ? 10 : 12}px;
`;

const ListItem = styled.li`
    width: 50%;
    display: inline-block;
    position: relative;
    margin: .4rem 0;
`;

const Red = styled.span`
    color: #bc041f;
`;

const Column = styled.span`
    width: 50%;
    display: inline-block;
    padding: 0 0 .5rem;
`;
