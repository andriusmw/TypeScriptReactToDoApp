type CourseGoalProps = {id: number, title: string, description: string,  onDelete: (id: number) => void;}
// interface CourseGoalProps = {title: string, description: string}

export default function CourseGoal({id, title, description, onDelete}: CourseGoalProps ) {
    return <article className="article">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <button onClick={() => onDelete(id)}  >Delete</button>
    </article>
}