import { Link } from "@remix-run/react";

export default function Courses() {
  return (
    <div className={"w-full"}>
      <h1>Courses</h1>
      <p>Welcome to the courses page</p>

      <Link to={"/courses/internal-rules"}>Rules</Link>
    </div>
  );
}
