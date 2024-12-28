import { useEffect } from "react"
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
                </div>
                {result.meanings.map((speech, idx) => (
                    <div key={idx}>
                        <span>{speech.partOfSpeech}</span>
                        <p>Meaning</p>
                        {speech.definitions.map((definition, i) => (
                            <div>
                                <ul key={i}>
                                    <li>{definition.definition}</li>
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