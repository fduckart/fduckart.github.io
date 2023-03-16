import React from 'react';
import {Favorites} from './Favorites.js';

export class Songs extends Favorites {

    fetchSuccessHandler(result) {
        this.setState({
            items: result.songs
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <h3>Favorite Songs</h3>
                <p className="lead text-muted">
                    My all time favorite songs.
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
        return this.sourceDataLocation() + "songs.json";
    }

}
