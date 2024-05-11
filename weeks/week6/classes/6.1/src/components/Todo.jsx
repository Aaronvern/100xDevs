import React from 'react';

function Todo({title,desc}) {
    return (
        <div>
            <h1>title:{title}</h1>
            <h2>description:{desc}</h2>
        </div>
    );
}

export default Todo;