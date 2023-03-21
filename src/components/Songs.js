import {useEffect, useState} from 'react';
import {URL_DATA_ROOT} from '../constant.js';

export const Songs = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const url = URL_DATA_ROOT + "songs.json";
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                setSongs(result.songs)
            })
            .catch((error) => console.log('Error:', error));
    };

    return (
        <div>
            <h3 className="tab-headings">Favorite Songs</h3>
            <p className="lead text-muted">
                My all time favorite songs.
            </p>
            <table className='table lead'>
                <tbody>
                {
                    songs.map(i => (
                        <tr key={i.id}>
                            <td>{i.title}</td><td>{i.artist}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );

}
