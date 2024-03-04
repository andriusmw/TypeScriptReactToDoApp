import {useRef, type FormEvent } from 'react';

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({onAddGoal}: NewGoalProps){

   const goal = useRef<HTMLInputElement>(null);
   const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

       const enteredGoal = goal.current!.value;
       const enteredSummary = summary.current!.value;

       onAddGoal(enteredGoal,enteredSummary)
    }

    return <form onSubmit={handleSubmit}>
        
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" name='goal' ref={goal}/>
        
      
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" name='summary' ref={summary}/>
        
        
            <button>Add Goal</button>
       


    </form>
}