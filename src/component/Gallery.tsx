import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {ItemData} from "../interface/ItemData.tsx";
import Item from "./Item.tsx";

const URL: string = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const count: number = 10;

export default function Gallery() {
    const [items, setItems] = useState<ItemData[]>([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current) return;
        flag.current = true;

        async function fetchItem(id: number) {
            await fetch(URL + id).then(
                response => response.json()
            ).then(data => {
                if (data.primaryImage) {
                    setItems(prev => [...prev, {
                        id: data.objectID,
                        image: data.primaryImage,
                        title: data.title,
                        year: data.accessionYear
                    }]);
                } else {
                    fetchItem(id + count);
                }
            }).catch(reason => console.log(reason));
        }

        for (let i = 0; i < count; i++) {
            fetchItem(i + 1).catch();
        }
    }, []);

    return (
        <List>{
            items.map((itemData: ItemData) => <Item key={itemData.id} itemData={itemData}/>)
        }</List>
    )
}