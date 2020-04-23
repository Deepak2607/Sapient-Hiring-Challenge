import React from 'react';

const Game =(props)=> {

    return (   
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.platform}</td>
            <td>{props.score}</td>
            <td>{props.genre}</td>
            <td>{props.editors_choice}</td>
            <td>{props.release_year}</td>
            <td><a href={props.link} target="_blank" rel="noopener noreferrer">Game Link</a></td>
        </tr>
       )  
}

export default Game;

