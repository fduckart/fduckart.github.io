import React from 'react';
import {Favorites} from './Favorites.js';

export class Books extends Favorites {

    fetchSuccessHandler(result) {
        this.setState({
            items: result.books
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <h3>Favorite Books</h3>
                <p className="lead text-muted">
                    This odd mix of books make up my favorites.
                </p>
                <table className='table lead'>
                    <tbody>
                    {
                        items.map(i => (
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

    sourceData() {
        return this.sourceDataLocation() + "books.json";
    }

}
