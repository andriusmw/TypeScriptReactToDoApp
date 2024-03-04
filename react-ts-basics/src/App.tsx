import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/images/goalsImg.jpg"
import Header from "./components/Header.tsx";
import './App.css'
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";


//Creating an interface for the type of array that is
//gonna be used on goals, setGoals useState.
export type CourseGoal = {
    title: string,
    description: string,
    id: number
}



export default function App(){
const [goals,setGoals] = useState<CourseGoal[]>([]);

//-----------------------------FUNCTIONS-----------------------------------
//-------------------------------------------------------------------------

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

//-----------------------------------

function handleDeleteGoal(id: number) {
  setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id ))
  // filter checks the array items searching for the id and compares to the condition, which is if goal.id
  // is NOT the same as the parameter then we keep it (cause it checks the condition and its true) if the id is the same
  // then the condition is false and we do not save it
}




//---------------RETURN & COMPONENTS & HTML------------------

  return <main>
    <Header image={{src: goalsImg, alt:"a list of goals"}}>
      <h1>Your course Goals</h1>
    </Header>
    <NewGoal />
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
   
  </main>
}
