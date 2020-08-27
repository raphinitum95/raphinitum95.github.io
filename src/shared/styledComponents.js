import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    height: ${props => props.height - props.navSize - 10}px;
    padding-top: ${props => props.navSize + 10}px;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    font-size: 12px;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: ${props => props.isLandscape ? 1 : 1.5}rem;
`;

export const PageColumn = styled.div`
    width: ${props => props.isLandscape ? 50 : 100}%;
    display: inline-block;
    
    &.map{
        height: ${props => props.isLandscape ? 60 : 40}%;
    };
`;

export const Bold = styled.span`
    font-weight: 900;
`;