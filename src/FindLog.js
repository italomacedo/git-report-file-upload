import React from 'react';
import './NonDisclosureAgreement.css';
import MainForm from './MainForm';

class FindLog extends React.Component {
	
	render() {
		return (
			<div className="App">
				<h1>The private life of merge conflicts</h1>
				<p>The log file will be located inside the directory .git in you git repository.</p>
				<img src="images/file_path.png" alt="Path to find Git's log file"/>
			</div>
		);
	}
}

export default FindLog;
