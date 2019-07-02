import React from 'react';
import './NonDisclosureAgreement.css';
import MainForm from './MainForm';

class NonDisclosureAgreement extends React.Component {
	
	render() {
		return (
<div className="App">
      
	  <h1>The private life of merge conflicts</h1>

	<p style={{textAlign: 'justify'}}>Thank you for your time today! This website is part of a research study conducted by Paola Accioly at <a href="https://www.ufca.edu.br">Universidade Federal do Cariri</a>, Paulo Borba and Marcela Cunha at <a href="https://www.ufpe.br/">Universidade Federal de Pernambuco</a>. The goal of this study is to better understand how developers merge code locally by analyzing commands registered in their Git's log file. The information will be used to provide guidance on how to improve the usage of Git to manage collaborative development.</p>
	
	<h2 style={{textAlign: 'left'}}>Procedure</h2>

	<p style={{textAlign: 'left'}}>If you want to continue, in the next page you will be asked to provide log files from you local Git repositories. Also, if you want us to get in touch with our research results you can provide your e-mail.</p>

	<h2 style={{textAlign: 'left'}}>Risks</h2>

	<p style={{textAlign: 'left'}}>The risks and discomfort associated with participation in this study are no greater than those ordinarily encountered in daily life or during other online activities. While we will only store and work with the results in an <strong>anonymized manner</strong>, using external data, the data could be de-anonymized and your identity could be uncovered.</p>

	<h2 style={{textAlign: 'left'}}>Compensation & Costs</h2>


	<p style={{textAlign: 'left'}}>If you choose to provide your e-mail, we will send you a technical report containg information about what commands you used and how does that compare with our general results.</p>

	<p style={{textAlign: 'left'}}>There will be no cost to you if you participate in this study. </p>

	<h2 style={{textAlign: 'left'}}>Future Use of Information</h2>

	<p style={{textAlign: 'left'}}>In the future, <strong>once we have removed all identifiable information from your data</strong>, we may use the data for our future research studies, or we may distribute the data to other researchers for their research studies.  We would do this without getting additional informed consent from you (or your legally authorized representative).  Sharing of data with other researchers will only be done in such a manner that <strong>you will not be identified.</strong></p>


	<h2 style={{textAlign: 'left'}}>Right to Ask Questions & Contact Information</h2>

	<p style={{textAlign: 'left'}}>If you have any questions about this study, you should feel free to ask them by contacting Paola Accioly at the email paola.accioly@ufca.edu.br. If you have questions later, desire additional information, or wish to withdraw your participation please contact Paola by e-mail.  </p>



	<h2 style={{textAlign: 'left'}}>Voluntary Participation</h2>

	<p style={{textAlign: 'left'}}>Your participation in this research is voluntary.  You may discontinue participation at any time during the research activity.  You may print a copy of this consent form for your records.  By opting to continue below, I confirm that I am age 18 or older; that I have read and understand the information above; and that I do want to participate in this research and continue with the survey.</p>

	<form action="/mainform">
   		<button type="submit">Continue</button>
	</form>	
	</div>);
	
	}
	
}

export default NonDisclosureAgreement;