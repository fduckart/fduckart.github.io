import {useEffect, useState} from 'react';
import {URL_DATA_ROOT} from '../constants';

export const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const url = URL_DATA_ROOT + "books.json";
        fetch(url)
            .then(response => response.json())
            .then(result => setBooks(result.books))
            .catch(error => console.log('Error:', error));
    };

    return (
        <div>
            <h3>Favorite Books</h3>
            <p className="lead text-muted">
                This odd mix of books make up my favorites.
            </p>
            <table className='table lead'>
                <tbody>
                {
                    books.map(i => (
                        <tr key={i.id}>
                            <td>{i.title}</td><td>{i.author}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );

}
