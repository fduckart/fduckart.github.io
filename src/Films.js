import React from 'react';
import {Favorites} from './Favorites.js';

export class Films extends Favorites {

    fetchSuccessHandler(result) {
        this.setState({
            items: result.films
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <h3 className="tab-headings">Favorite Films</h3>
                <p className="lead text-muted">
                    These are great films. Watch them.
                </p>
                <table className='table lead'>
                    <tbody>
                    {
                        items.map(i => (
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

    sourceData() {
        return this.sourceDataLocation() + "films.json";
    }

}
