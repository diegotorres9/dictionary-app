import { useEffect } from "react"

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
                <div className="grid grid-cols-top-grid">
                    <h1 className="text-base lg:text-lg font-bold">{word}</h1>
                    <span className="text-violet">{phonetic}</span>
                    {sounds.map((sound, ix) => {
                    const pronounce = sound.audio;
                    const audio = new Audio(pronounce);
                    return (
                        <button className="col-start-2 row-start-1 row-span-2" key={ix} onClick={() => audio.play()}>
                        <svg className="group" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle className="group-hover:opacity-100" cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path className="group-hover:fill-white" d="M29 27v21l21-10.5z"/></g></svg>
                        </button>
                    )
                    })}
                </div>
                <div>
                    {meanings.map((meaning, idx) => (
                        <div key={idx}>
                            <span className="font-bold italic">{meaning.partOfSpeech}</span>
                            <p>Meaning</p>
                            <ul className="marker:text-violet list-disc mx-6 mt-[17px] lg:ml-6 lg:mt-6 lg:mb-6">
                                {meaning.definitions.map((define, index) => (
                                    <li key={index} className="mb-[13px] leading-6">{define.definition}</li>
                                ))}
                            </ul>
                            <div>
                                <p>{meaning.synonyms.length === 0 ? '' : 'Synonymns'}</p>
                                <ul className="marker:text-violet list-disc">
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