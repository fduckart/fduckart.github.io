import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Records.js';

function App() {
  return (
    <div className="App">
        <div class="card-block">
            <h3 class="tab-headings">Favorite Albums</h3>
            <p class="lead text-muted">
                I have spent hours and hours listening to each and every one.
            </p>
            <div id="recordTable"></div>
        </div>
    </div>
  );
}

export default App;
