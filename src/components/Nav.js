import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function Nav() {
    return (
        <div className="nav">
        <div>
          <ChevronLeftIcon width={24} height={24} className="chevronArrowLeft" />
          <ChevronRightIcon width={24} height={24} className="chevronArrowRight" />
        </div>
        <div className="navRight">
          <div className="navButton">
            <ArrowDownCircleIcon width={18} height={18} />
            <p>Install App</p>
          </div>
          <img src="./images/profile.jpeg" alt="profile" className="profile" />
        </div>
      </div>
    )
}