import React, {Component} from 'react';
import {GoogleMap, Marker, InfoBox, useLoadScript} from "@react-google-maps/api"
import Horns from "../../Assets/Images/Horns-Transparent.png"
import styled from "styled-components";

export default function MobileSchedule(props) {
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
    const center = {
        lat: 29.437410,
        lng: -98.479330
    };
    return (
        <Container
            navSize={props.isLandscape ? props.height * .2 : props.height * .10}
            height={props.height}
        >
            <Title>Schedule</Title>
            <Disclaimer>
                Our hours of operation and location are subject to change. <br />Please refer back to this page to get our most up to date schedule.
            </Disclaimer>
            <MapContainer>
                <a href={`https://goo.gl/maps/qLv7zfVRTGG6BeVu6`} target={"blank"}>
                    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={16} center={center}>
                        <Marker position={center} icon={iconPin}></Marker>
                        <InfoBox position={center} >
                            <div style={{ backgroundColor: "#E61935", opacity: 0.65, padding: 10, textAlign: "center" }}>
                                <div style={{ fontSize: 14, color: "white" }}>
                                    Porta Rossa Bar
                                </div>
                            </div>
                        </InfoBox>
                    </GoogleMap>
                </a>
            </MapContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: ${props => props.height - props.navSize - 10}px;
    padding-top: ${props => props.navSize + 10}px;
    margin-top: -18px;
    position: relative;
`;

const MapContainer = styled.div`
    width: 100%;
    height: 40%;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 1.5rem;
`;

const Disclaimer = styled.p`
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    color: #bc041f;
    font-size: .7rem;
    max-width: 85%;
    margin: 0 auto;
    padding: 0 0 1rem;
    
    &:before, &:after {
        content: '***';
        font-weight: bold;
    }
`;

const List = styled.ul`
    list-style: none;
    width: 100%;
    position: relative;
`;
