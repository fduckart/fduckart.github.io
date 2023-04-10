import useFetch from "../hooks/useFetch";

const BooksTable = () => {
    const {data, isLoading, error} = useFetch("books.json");

    return (
        <table className='table lead'>
            <tbody>
                {error && <tr><td>{error}</td></tr>}
                {isLoading && <tr><td>Loading...</td></tr>}
                {data && data.books.map(b => (
                    <tr key={b.id}>
                        <td>{b.title}</td><td>{b.author}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default BooksTable;
