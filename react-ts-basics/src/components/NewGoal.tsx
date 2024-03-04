import {type FormEvent } from 'react';

export default function NewGoal(){

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text"/>
        
      
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text"/>
        
        
            <button>Add Goal</button>
       


    </form>
}