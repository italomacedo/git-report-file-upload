import React from 'react';
import './MainForm.css';
import axios from 'axios';

class MainForm extends React.Component {
	
	data: {
        message: '{}'
    }
  
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
	
	let base64 = require('base-64');
	
	var username = 'paolarga';
    var password = '190387';
    
	var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + base64.encode(username + ":" + password)
    }
	
	axios.post('http://localhost:8293/api-git-report-upload/importLog', data, {headers: headers})

		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
  }
	
  render() {
	  return(
    <div className="MainForm">

		<h1>The private life of merge conflicts</h1>
		<p>Thank you for agreeing to participate in our research study. Please fill in the form bellow.</p>
		<form onSubmit={this.handleSubmit}>
			<div>
				<label for="name">Name (optional):</label>
				<p>
					<input id="name"type="text" name="name" placeholder="John Smith"/>
				</p>
				<label for="email">E-mail (optional):</label>
				<p>
					<input id="email" type="email" name="email" placeholder="john@foo.com"/>
				</p>
				<label for="company">Who do you work for (optional):</label>
				<p>
				<input id="company" type="text" name="company" placeholder="company"/>
				</p>
				<label for="log">Path for you Git Log file:</label>
				<p>
					<input id="log" type="file" name="log" placeholder="log file path" required/>
					<a href="findlog">How can I find this file?</a>
				</p>
				<label for="repo">If your repository is available online on GitHub or any other platform, please provide the repository url:</label>
				<p>
					<input id="repo" type="text" name="repo" placeholder="https://github.com/user/repo" required/>

				</p>
				<button type="submit">Send logs</button>
				<label id="message"/>
			</div>			
		</form>
	</div>
  );
  }
}

export default MainForm;
