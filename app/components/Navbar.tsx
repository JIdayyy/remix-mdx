import { Link } from "@remix-run/react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    path: "/courses",
  },
];

export default function Navbar() {
  return (
    <nav
      className={
        "w-full sticky bg-gray-900 justify-center align-middle top-0 z-40 flex shadow-zinc-800  shadow p-5"
      }
    >
      <ul className={"w-full max-w-7xl flex justify-between"}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
