import React, { Component } from 'react';
import './table.css';



export const TableHead = () => {
    return(
        <thead>
        <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Marks Obtained</th>
            <th scope="col">Grade</th>
            <th scope="col" colspan="3">Actions</th>
        </tr>
        </thead>
    )
}
export const TableRow = (props) => {
        return (
        <tbody>
        <tr>
            <td>{props.name}</td>
            <td>{props.marks}</td>
            <td>{props.grade}</td>
            <td><button>Edit</button></td>
            <td><button>delete</button></td>
        </tr>
        </tbody>
        )
    }


export const Student = () => {
    
        console.log(this.state.student);
    
}

export const Data = props =>{
    return(
        <p>
        Student Name:    <input type="text" onChange = {props.changedName} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Marks Obtained:    <input type="text" onChange = {props.changedMarks} />   
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick = {props.click}>Add Student</button>        
        <table className="table">
        <TableHead></TableHead>
        <TableRow name={props.name} marks={props.marks}></TableRow>
        </table>
        </p>
    )
}

      
