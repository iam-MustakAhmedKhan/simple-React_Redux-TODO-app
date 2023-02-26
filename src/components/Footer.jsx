import React from 'react';
import { colorChanged, statusChange } from '../redux/filter/filterAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Footer() {
    const dispatch=useDispatch()

    const todos = useSelector(state => state.todos)
    const remaining = todos.filter(todo => !todo.completed).length
    const filter = useSelector(state => state.filter)
    const {status,colors}=filter

    const statusChangeHandler = (value) => {
        dispatch(statusChange(value))
    }
    
    const colorChangeHandler = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color,'removed'))
        } else {
            dispatch(colorChanged(color,'added'))
        }
    }
    
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{`${remaining} tasks left`}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && 'font-bold'}` }onClick={() => statusChangeHandler('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => statusChangeHandler('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => statusChangeHandler('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') &&'bg-green-500'}`} onClick={() => colorChangeHandler('green')}>
                </li>
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'} `}onClick={() => colorChangeHandler('red')}></li>
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`} onClick={() => colorChangeHandler('yellow')}>
                </li>
            </ul>
        </div>
    );
}
