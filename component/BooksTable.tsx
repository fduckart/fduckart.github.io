import useFetch from "@/hook/useFetch";
import {Book} from "@/type/Book";

const BooksTable = () => {
    const {data, isLoading, error} = useFetch("books.json");
    const holder: { books: Book[] } = {books: data ? data["books"] : []};

    return (
        <table className='table lead'>
            <tbody>
            {error && <tr><td>{error}</td></tr>}
            {isLoading && <tr><td>Loading...</td></tr>}
            {
                !isLoading && holder.books.map(b => (
                    <tr key={b.id}>
                        <td>{b.title}</td>
                        <td>{b.author}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
export default BooksTable;
