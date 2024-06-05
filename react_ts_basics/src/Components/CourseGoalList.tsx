import CourseGoal from "./CourseGoal";
import { type CourseGoal as TypeCourseGoal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type CourseGoalListProps = {
  goals: TypeCourseGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no goals, add something!</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length > 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Too much goals!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <div className="holder">
        {goals.map((el) => (
          <CourseGoal title={el.title} id={el.id} onDelete={onDeleteGoal}>
            <p>{el.description}</p>
          </CourseGoal>
        ))}
      </div>
    </>
  );
}
