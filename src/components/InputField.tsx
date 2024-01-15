import React from 'react'
import "./style.css";

function InputField() {
	return (
		<form className='input'>
			<input type='input' placeholder='Enter a task'
				className='input__box'
			/>
			<button className='input_submit'>Go</button>
		</form>
	);
}

export default InputField