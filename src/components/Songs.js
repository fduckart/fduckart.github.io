import {useEffect, useState} from 'react';
import {URL_DATA_ROOT} from '../constants';
import SongsTable from "./SongsTable";

export const Songs = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(URL_DATA_ROOT + "songs.json")
            .then(response => response.json())
            .then(result => setSongs(result.songs))
            .catch(error => console.log('Error:', error));
    };

    return (
        <div>
            <h3 className="tab-headings">Favorite Songs</h3>
            <p className="lead text-muted">
                My all time favorite songs!
            </p>
            <SongsTable songs={songs}/>
        </div>
    );

}
