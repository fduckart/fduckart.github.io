import React from "react";
import {DataService as dataService} from './service/DataService.js';

export class Favorites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: []
        };
    }

    componentDidMount() {
        let success = (result) => {
            this.fetchSuccessHandler(result);
        };

        let failure = (error) => {
            console.log('Error: ', error);
        }

        dataService.retrieve(this.sourceData(), success, failure);
    }

    sourceDataLocation() {
        // Todo: find a good method to determine the url.
        //   https://raw.githubusercontent.com/fduckart/fduckart.github.io/master
        //   https://raw.githubusercontent.com/fduckart/fduckart.github.io/data/v2/
        return "https://raw.githubusercontent.com/fduckart/fduckart.github.io/data/v2/";
    }

    sourceData() {
        throw new Error("You must override the sourceJson function.");
    }

    fetchSuccessHandler() {
        throw new Error("You must override the fetchSuccessHandler function.");
    }

}
