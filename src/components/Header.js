import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="headerContainers">
        <HomeIcon width={26} height={26} />
        <Link to="/" className="link">
          <p className="linkName">Home</p>
        </Link>
      </div>
      <div className="headerContainers">
        <MagnifyingGlassIcon width={26} height={26} />
        <Link to="/search" className="link">
          <p className="linkName">Search</p>
        </Link>
      </div>
    </div>
  );
}
