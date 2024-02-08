import { Link } from "@remix-run/react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Markdown",
    path: "/courses/markdown",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
