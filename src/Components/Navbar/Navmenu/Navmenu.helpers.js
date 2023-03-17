import navHome from "../../../assets/image/nav-home.svg";
import navNetwork from "../../../assets/image/nav-network.svg";
import navJobs from "../../../assets/image/nav-jobs.svg";
import navMessage from "../../../assets/image/nav-messaging.svg";
import navNotifications from "../../../assets/image/nav-notifications.svg";
import navUser from "../../../assets/image/user.svg"
import navDown from "../../../assets/image/down-icon.svg"
import navWork from "../../../assets/image/nav-work.svg"

export const icons = [
  {
    name: "Home",
    value: navHome,
    to: "/",
  },
  {
    name: "My Network",
    value: navNetwork,
    to: "",
  },
  {
    name: "Jobs",
    value: navJobs,
    to: "",
  },
  {
    name: "Message",
    value: navMessage,
    to: "",
  },
  {
    name: "Notifications",
    value: navNotifications,
    to: "",
  },
];



export  {navUser} ;
export {navDown} ;
export {navWork};