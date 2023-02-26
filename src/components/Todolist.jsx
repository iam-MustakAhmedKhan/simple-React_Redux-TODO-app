import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

export default function Todolist() {

  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">

      {todos
        .filter(todo => {
          const { status } = filter;

          switch (status) {
            case 'Complete':
              return todo.completed;
            case 'Incomplete':
              return !todo.completed;
            default:
              return true;
          }
        })
        .filter(todo => {
          const { colors } = filter;
          if (colors.length > 0) {
            return colors.includes(todo?.color);
          }
          return true;
        })
        .map(todo => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
}
