import { useEffect, useState} from 'react';
import {URL_DATA_ROOT} from '../constant.js';

export const Records  = () => {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = () => {
        const url =  URL_DATA_ROOT +  "records.json";
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                setRecords(result.records)
            })
            .catch((error)=> console.log('Error:', error));
    };

    return (
        <div>
            <h3 className="tab-headings">Favorite Albums</h3>
            <p className="lead text-muted">
                I have spent hours and hours listening to each and every one.
            </p>
            <table className='table lead'>
                <tbody>
                {
                    records.map(i => (
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
