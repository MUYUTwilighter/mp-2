import './App.css'
import Gallery from "./component/Gallery.tsx";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    text-align: center;
    
    @media screen and (max-width: 15cm) {
        font-size: 8mm;
    }
`;

export default function App() {
    return <Main>
        <Title>The Metropolitan Museum of Art</Title>
        <Gallery/>
    </Main>;
}
