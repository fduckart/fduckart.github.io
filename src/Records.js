import React from 'react';
import {Favorites} from './Favorites.js';

export class Records extends Favorites {

    fetchSuccessHandler(result) {
        this.setState({
            items: result.records
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <h3 className="tab-headings">Favorite Albums</h3>
                <p className="lead text-muted">
                    I have spent hours and hours listening to each and every one.
                </p>
                <table className='table lead'>
                    <tbody>
                    {
                        items.map(i => (
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

    sourceData() {
        return this.sourceDataLocation() + "records.json";
    }

}