import ReactDOM from 'react-dom';
import React from 'react';

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      records: []
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/fduckart/fduckart.github.io/master/files/records.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            records: result.records
          });
        },
        (error) => {
            console.log('Error: ', error);
        }
      )
  }

render() {
    const { records } = this.state;
      return (
        <div>
            <table class='table lead'>
                <tbody>
                    {records.map(item => (
                        <tr>
                            <td>{item.title}</td><td>{item.artist}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    }
}

ReactDOM.render(<Records />, document.getElementById('recordTable'));
