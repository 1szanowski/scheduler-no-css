import { useState } from "react";

import "./App.css";

//import components

import Header from "./Components/Header";
import CourseGoalList from "./Components/CourseGoalList";
import NewGoal from "./Components/NewGoal";

// type def goes here

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]); // array state should be look like coursegoal  generic type


  //func for handling
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        description: summary,
        title: goal,
      };
      return [...prev, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  }


  return (
    <div className="mainFrame">
      <Header image={{ src: "/vite.svg", alt: "this is description" }}>
        <h3>Your course goals</h3>
      </Header>
     <NewGoal onAddGoal ={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </div>
  );
}

export default App;
