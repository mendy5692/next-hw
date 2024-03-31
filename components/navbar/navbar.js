import { nanoid } from "nanoid";
import { links } from "./links-data";
import "./navbar.css";

export default function Navbar() {
  return (
    <ul className="nav-ul row">
      {links.map((link) => (
        <NavItem key={nanoid()} link={link} />
      ))}
    </ul>
  );
}

function NavItem({ link }) {
  return (
    <li className="nav-li">
      <a href={link.href}>
        {link.title}
      </a>
    </li>
  );
}
