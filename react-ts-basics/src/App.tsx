import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/images/goalsImg.jpg"
import Header from "./components/Header.tsx";
import './App.css'
import { useState } from "react";


//Creating an interface for the type of array that is
//gonna be used on goals, setGoals useState.
export type CourseGoal = {
    title: string,
    description: string,
    id: number
}



export default function App(){
const [goals,setGoals] = useState<CourseGoal[]>([]);


function handleAddGoal() {
  // ...
  setGoals(prevGoals => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: 'Learn React + TS',
      description: 'Learn ii in depth'
    }
    return [...prevGoals, newGoal ]
  });
}

  return <main>
    <Header image={{src: goalsImg, alt:"a list of goals"}}>
      <h1>Your course Goals</h1>
    </Header>
    <button onClick={handleAddGoal} >Add Goal</button>
<CourseGoalList goals={goals} />
   
  </main>
}
