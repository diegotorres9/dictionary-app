"use client";

import { useState } from "react";
import Searchbar from "./components/searchbar/Searchbar";
import DefinitionContainer from "./components/definitions/DefinitionContainer";


export default function Page() {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);

        const handleSearch = (e) => {
        setInputValue(e.target.value);
    };


    const fetchData = async (event) => {
        if(event) event.preventDefault();
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
            const data = await response.json()
            setData(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };


    return (
        <main>
            <Searchbar 
                handleSearch={handleSearch}
                fetchData={fetchData}
            />
            <DefinitionContainer data={data}/>
        </main>
    )
}