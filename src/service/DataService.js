import React from "react";

export class DataService extends React.Component {

    static retrieve (url, success, failure) {
        fetch(url)
            .then(response => response.json())
            .then(success)
            .catch(failure);
    }
}
