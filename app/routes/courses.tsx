import { Outlet } from "@remix-run/react";

export default function CoursesLayout() {
  return (
    <main className={"max-w-7xl w-full"}>
      <Outlet />
    </main>
  );
}
