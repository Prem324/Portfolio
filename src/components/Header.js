import { Link } from "react-router";
import {
  IoMdHome,
  IoMdPerson,
  IoMdSchool,
  IoMdAddCircle,
  IoMdRocket,
} from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";

function Header() {
  return (
    <nav className="border border-t-2 border-cyan-50 fixed top-0 w-full z-50 flex justify-evenly items-center p-4 backdrop-blur-xl bg-opacity-80">
      <h3 className="font-caveat text-6xl">
        <Link to="/">Portfolio</Link>
      </h3>
      <ul className="flex list-none font-breeserif">
        <li className="text-lg mx-4 nav-underline p-1 hover:shadow-lg">
          <Link to="/" className="flex items-center">
            <IoMdHome className="mr-1" />
            Home
          </Link>
        </li>
        <li className="text-lg mx-4 nav-underline p-1 hover:shadow-lg">
          <Link to="/about" className="flex items-center">
            <IoMdPerson className="mr-1" />
            About
          </Link>
        </li>
        <li className="text-lg mx-4 nav-underline p-1 hover:shadow-lg">
          <Link to="education" className="flex items-center">
            <IoMdSchool className="mr-1" />
            Education
          </Link>
        </li>
        <li className="text-lg mx-4 nav-underline p-1 hover:shadow-lg">
          <Link to="/skills" className="flex items-center">
            <IoMdAddCircle className="mr-1" />
            Skills
          </Link>
        </li>
        <li className="text-lg mx-4 nav-underline p-1 hover:shadow-lg">
          <Link to="/projects" className="flex items-center">
            <IoMdRocket className="mr-1" />
            Projects
          </Link>
        </li>
        <li className="text-lg mx-4 nav-underline p-1 hover:shadow-lg">
          <Link to="/certificates" className="flex items-center">
            <PiCertificateFill className="mr-1" />
            Certifications
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
