import { useRef, type FormEvent } from "react";

type NewGoalProp = {
  onAddGoal :( goal: string, summary: string) => void
}

export default function NewGoal({onAddGoal}: NewGoalProp) {
  //add type of event!
  const goal = useRef<HTMLInputElement>(null); //default was undefined
  const summary = useRef<HTMLInputElement>(null); //default was undefined


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  const enteredGoal = goal.current!.value
  const enteredSummary = summary.current!.value
  event.currentTarget.reset()
  onAddGoal(enteredGoal, enteredSummary)
  }
  //useREf hook
 

  

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <div>
          <input id="goal" type="text" ref={goal}/>
        </div>
      </p>

      <p>
        <label htmlFor="summary">Short Summary</label>
        <div>
        <input id="summary" type="text" ref={summary}/>
        </div>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
