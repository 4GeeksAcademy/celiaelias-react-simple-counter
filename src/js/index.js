//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../styles/index.css'
import './icons.js';

function SimpleCounter(props) {
	return (
		<React.Fragment>
			<div className="bigCounter">
				<div className="clock">
					<FontAwesomeIcon icon={['far', 'clock']} />
				</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>,

			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6 allButtons m-auto w-auto">
						<button type="button" className="btn btn-danger" onClick={StopCounter1}>Stop</button>
						<button type="button" className="btn btn-primary" onClick={ResumeCounter1}>Resume</button>
						<button type="button" className="btn btn-success" onClick={ResetCounter1}>Reset</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);

}

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

function SecondCounter(props) {
	return (
		<React.Fragment>
			<div className="bigCounter">
				<div className="clock">
					<FontAwesomeIcon icon={['far', 'clock']} />
				</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>,

			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6 allButtons m-auto w-auto">
						<button type="button" className="btn btn-danger" onClick={StopCounter2}>Stop</button>
						<button type="button" className="btn btn-primary" onClick={ResumeCounter2}>Resume</button>
						<button type="button" className="btn btn-success" onClick={ResetCounter2}>Reset</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

SecondCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let maxCountDown = 9999;
let countdown = maxCountDown;
let counter = 0;
let minCounter = counter;
let userPrompt = parseInt(prompt("What number do you want?"));

setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	const four2 = Math.floor(countdown / 1000);
	const three2 = Math.floor(countdown / 100);
	const two2 = Math.floor(countdown / 10);
	const one2 = Math.floor(countdown / 1);

	if (userPrompt == counter) {
		alert('Hey! That is your number!')
	}

	ReactDOM.render(
		<React.Fragment>
			<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
			<SecondCounter digitOne={one2} digitTwo={two2} digitThree={three2} digitFour={four2} />,
		</React.Fragment>,
		document.querySelector('#app')
	);
}, 1000);

let test1 = setInterval(function () {
	counter++;
}, 1000);

let test2 = setInterval(function () {
	countdown--;
}, 1000);


//Stop buttons
function StopCounter1() {
	clearInterval(test1);
}

function StopCounter2() {
	clearInterval(test2);
}

//Resume buttons
function ResumeCounter1() {
	test1 = setInterval(function () {
		counter++;
	}, 1000);
}

function ResumeCounter2() {
	test2 = setInterval(function () {
		countdown--;
	}, 1000);
}

// Reset buttons
function ResetCounter1() {
	counter = minCounter;
}

function ResetCounter2() {
	countdown = maxCountDown;
}
