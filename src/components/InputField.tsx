import React, { useRef } from 'react'
import "./style.css";

interface Props{
	todo: string,
	setTodo: React.Dispatch<React.SetStateAction<string>>,
	handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);


	return (
		<form className='input' onSubmit={(e) =>{ 
			inputRef.current?.blur();
			handleAdd(e)
			}}>
			<input type='input' placeholder='Enter a task'
				className='input__box'
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className='input_submit'>Go</button>
		</form>
	);
}

export default InputField