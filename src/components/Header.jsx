import notes from '../assets/images/notes.png';
import double_tick from '../assets/images/double-tick.png';
import plusImage from '../assets/images/plus.png';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { added, allClear, allCompleted } from '../redux/todos/todosAction';

export default function Header() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput('');
    };

    const handleAllCompleted = () => {
        dispatch(allCompleted())
    }
    const handleClearCompleted = () => {
        dispatch(allClear())
    }

    return (
        <div>
            <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSubmit}>
                <img src={notes} className="w-6 h-6" alt="Add todo" />
                <input type="text" placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" value={input} onChange={handleInputChange} />
                <button type="submit"
                    className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handleAllCompleted}>
                    <img className="w-4 h-4" src={double_tick} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={handleClearCompleted} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
