import React from 'react';
import { Redirect } from 'react-router-dom';

export default function AddTodo(props){

    if (!props.loggedInUser) {
        return <Redirect to='/sign-in' />
    }
    return (
        <>
            <form onSubmit={props.onAdd}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" name="description" id="description" />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}