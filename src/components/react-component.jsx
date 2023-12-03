import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user={
    firstName:"Tymur",
    lastName: "Radjapov"
};

const element=(
    <h1>Welocme to wonderful world, {formatName(user)}</h1>
);

function getGreeting(user){
    if (user){
        return     <h1>Welocme to wonderful world, {formatName(user)}</h1>;
    }
    return     <h1>Welocme to wonderful world, it will be wonderful journey</h1>
}
ReactDOM.render(
    element,
    document.getElementById('root')
);
export default getGreeting;