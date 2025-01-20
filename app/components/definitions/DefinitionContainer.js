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
                <div className="grid grid-cols-top-grid mb-9 lg:mb-10">
                    <h1 className="text-heading lg:text-heading-lg font-bold">{word}</h1>
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
                            <div className="flex items-center">
                                <span className="font-bold italic text-lg">{meaning.partOfSpeech}</span>
                                <svg className="ml-[16px]" width="100%" height="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="1" fill="#3A3A3A"/>
                                </svg>
                            </div>
                            <div className="mt-8 lg:mt-11 mb-6 lg:mb-10">
                                <p className="text-dark-gray text-base">Meaning</p>
                                <ul className="marker:text-violet list-disc mx-6 mt-[17px] lg:ml-6 lg:mt-6 lg:mb-6">
                                    {meaning.definitions.map((define, index) => (
                                        <li key={index} className="mb-[13px] leading-6 text-sm lg:text-md">{define.definition}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex mb-8 lg:mb-10">
                                <p>{meaning.synonyms.length === 0 ? '' : 'Synonymns'}</p>
                                <ul className="list-none w-1/2">
                                    {meaning.synonyms.map((synonym, i) => (
                                        <li className="text-violet font-bold text-xl flex-wrap inline-block ml-6 hover:underline hover:cursor-pointer" key={i}>{synonym.length === 0 ? '' : synonym}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="source-wrapper lg:flex mb-20 lg:mb-32">
                    <p className="text-[14px] text-dark-gray underline mb-[7px] lg:mb-0 lg:mr-6">Source</p>
                    <div className="flex items-center">
                        <a className="underline mr-[10px]" href={sourceUrls[0]}>{sourceUrls[0]}</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg>
                    </div>
                </div>
            </div>
            )

        })}
        </section>
    )
}