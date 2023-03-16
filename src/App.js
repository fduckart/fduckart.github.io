import './css/bootstrap.min.css';

import './js/bootstrap.bundle.min.js';
import './js/bootstrap.bundle.min.js.map';

import './css/font-awesome.min.css';
import './css/fduckart.css';

import {Nav} from './Nav';
import {Content} from "./Content";

function App() {
  return (
      <div className="App">
        <Nav/>
        <Content/>
      </div>
  );
}

export default App;
