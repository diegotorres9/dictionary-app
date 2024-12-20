export default function DefinitionContainer ({data}) {
    return (
        <section className="results-container">
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </section>
    )
}