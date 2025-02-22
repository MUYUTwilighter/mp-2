import styled from "styled-components";
import {ItemData} from "../interface/ItemData.tsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1cm;
    margin: 0.5cm;
    background-color: #444444;
`;

const Image = styled.img`
    width: 8cm;
`;

const Title = styled.h3`
    font-weight: bold;
`;

const Details = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 4mm;
    width: 100%;
`;

const Id = styled.i`
    color: gray;
    font-style: italic;
`;

const Year = styled.span`
`;

export default function Item(props: { itemData: ItemData }) {
    return <Container>
        <Image src={props.itemData.image} alt="item"/>
        <Title>{props.itemData.title}</Title>
        <Details>
            <Id>id:{props.itemData.id}</Id>
            <Year>Acquire Year: {props.itemData.year}</Year>
        </Details>
    </Container>
}