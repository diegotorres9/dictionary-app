import { useEffect } from "react"
import Image from "next/image";
import PlayButton from "../../../public/images/icon-play.svg";

export default function DefinitionContainer ({data}) {
    useEffect(() => {
    }, [data]);
    return (
        <section className="results-container">
        {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
        {data.map((result, idx) => {
            const {word, phonetic, sourceUrls, meanings, phonetics} = result;

            const sounds = Object.values(phonetics).filter(sounds => sounds.audio !== "");

            return (
            <div key={idx} className="definition-wrapper">
                <div>
                    <h1 className="text-9xl">{word}</h1>
                    <span>{phonetic}</span>
                    {sounds.map((sound) => {
                    const pronounce = sound.audio;
                    const audio = new Audio(pronounce);
                    return (
                        <button key={crypto.randomUUID()} onClick={() => audio.play()}>
                            <Image 
                                width={78}
                                height={78}
                                alt=""
                                src={PlayButton}
                            />
                        </button>
                    )
                    })}
                </div>
                <div>
                    {meanings.map((meaning, idx) => (
                        <div key={idx}>
                            <span>{meaning.partOfSpeech}</span>
                            <p>Meaning</p>
                            <ul>
                                {meaning.definitions.map((define, index) => (
                                    <li key={index}>{define.definition}</li>
                                ))}
                            </ul>
                            <div>
                                <p>{meaning.synonyms.length === 0 ? '' : 'Synonymns'}</p>
                                <ul>
                                    {meaning.synonyms.map((synonym, i) => (
                                        <li key={i}>{synonym.length === 0 ? '' : synonym}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="source-wrapper">
                    <p>Source</p>
                    <a href={sourceUrls[0]}>{sourceUrls[0]}</a>
                </div>
            </div>
            )

        })}
        </section>
    )
}