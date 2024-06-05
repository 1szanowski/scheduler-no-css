import { PropsWithChildren, } from "react";
//children is the piece of the jsx component
type CourseGoalProps = PropsWithChildren<{title: string; id:number;  onDelete: (id:number) => void}>

export default function CourseGoal({ title, id, children, onDelete }: CourseGoalProps) {
  return (
    <article className="child">
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
        <button onClick={()=>onDelete(id)}>Delete stuff</button>
      </div>
    </article>
  );
}
