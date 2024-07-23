"use client"
import {useState} from "react"

export default function Search() {

    //all calls have to be authenticated = https://docs.genius.com/#/getting-started-h1
    //do this -> https://www.passportjs.org/
    const getFetchData = async (text: string) => {
        const accessToken = process.env.GENIUS_ACCESS_TOKEN
        const data = await fetch(`https://api.genius.com/search?=${query}`, {
            mode: "no-cors",
            method: "GET",
            headers : {
                Authorization: `Bearer ${accessToken}`
            }
        })

        if (!data.ok) {
            throw new Error(`Error: ${data.statusText}`);
        }
        const response = await data.json();
        setSearchResult(response)
    }

    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState("");

    return (
        <div className={'text-center'} >
            <h1 className={'text-5xl font-bold m-10'}>Welcome to music_link!</h1>
            <p>Type in your words and we'll send you back a song!</p>
            <div className={''}>
                <input className={'text-black drop-shadow-lg bg-gray-200 mt-4 size-4/12 h-8 text-xl'}/>
                <button onClick={e => getFetchData(query)}
                        className={'mx-2 bg-fuchsia-600 p-1.5 rounded-2xl hover:bg-fuchsia-800'}>
                    Get song
                </button>
            </div>

            {/*<div>*/}
            {/*    <p>Result: </p>*/}
            {/*    {searchResult}*/}
            {/*</div>*/}

        </div>
    )
}
