import React, {Component} from 'react';
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api"
import Horns from "../../Assets/Images/Horns-Transparent.png"
import styled from "styled-components";

export default function MobileSchedule(props) {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
    });

    const mapContainerStyle = {
        width: "100%",
        height: "50%"
    }

    if(loadError) return "loading error";
    if(!isLoaded) return "Loading Map";
    const iconPin = {
        url: Horns,
        scaledSize: new window.google.maps.Size(50,40), //to reduce the size of icons
    };
    return (
        <Container
            navSize={props.isLandscape ? props.height * .2 : props.height * .10}
            height={props.height}
        >
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={{lat: 29.437410, lng: -98.479330}}>
                <Marker position={{lat: 29.437410, lng: -98.479330}} icon={iconPin}></Marker>
            </GoogleMap>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: ${props => props.height - props.navSize - 10}px;
    padding-top: ${props => props.navSize + 10}px;
    margin-top: -18px;
    display: flex;
    flex-direction: row;
`;
