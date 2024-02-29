import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/images/goalsImg.jpg"
import Header from "./components/Header.tsx";

export default function App(){
  return <main>
    <Header image={{src: goalsImg, alt:"a list of goals"}}>
      <h1>Your course Goals</h1>
    </Header>
    <CourseGoal 
      title="Learn React" 
      description="using TypeScript"
    />
  </main>
}
