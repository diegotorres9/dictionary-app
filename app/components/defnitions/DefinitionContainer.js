import { useEffect } from "react"
import Image from "next/image";
import PlayButton from "../../../public/images/icon-play.svg";

export default function DefinitionContainer ({data}) {
    useEffect(() => {
        console.log(data);
        // let results = data;
    }, [data])
    return (
        <section className="results-container">
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {data.map((result, index) => (
            <div key={index}>
                <div>
                    <h1>{result.word}</h1>
                    <span>{result.phonetic}</span>
                    {result.phonetics.map((sound, ind) => {
                        const pronounce = sound.audio;
                        const audio = new Audio(pronounce);
                        console.log(sound.audio);
                        return (
                            <button key={ind} onClick={() => audio.play()}>
                                <Image 
                                    width={75}
                                    height={75}
                                    alt=""
                                    src={PlayButton}
                                />
                            </button>
                        )
                    })}

                </div>
                {result.meanings.map((meaning, idx) => (
                    <div key={idx}>
                        <span>{meaning.partOfSpeech}</span>
                        <p>Meaning</p>
                        {meaning.definitions.map((definition, i) => (
                            <div key={i}>
                                <ul>
                                    <li>{definition.definition}</li>
                                </ul>
                            </div>
                        ))}
                        {meaning.synonyms.length == 0 ? '' : <p>Synonyms</p>}
                        {meaning.synonyms.map((synonym, indx) => (
                            <div key={indx}>
                                <ul>
                                    <li>{synonym}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        ))}
        </section>
    )
}