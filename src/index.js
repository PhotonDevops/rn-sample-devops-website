import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Import the components
import Login from './Login';

const Nav = () => {
  return (
  	<div className="container">
      	<Router>
      		<div>
		        <Route path="/" exact component={Login}/>
	    	</div>
      	</Router>
    </div>
  )
}

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();
