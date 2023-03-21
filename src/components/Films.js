import { useEffect, useState} from 'react';
import {URL_DATA_ROOT} from '../constant.js';

export const Films  = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = () => {
        const url =  URL_DATA_ROOT +  "films.json";
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                setFilms(result.films)
            })
            .catch((error)=> console.log('Error:', error));
    };

    return (
        <div>
            <h3 className="tab-headings">Favorite Films</h3>
            <p className="lead text-muted">
                These are great films. Watch them.
            </p>
            <table className='table lead'>
                <tbody>
                {
                    films.map(i => (
                        <tr key={i.id}>
                                <td>{i.title}</td><td>{i.director}</td>
                            </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );

}
