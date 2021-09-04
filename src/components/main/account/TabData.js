import {FaUserAlt, FaUserCheck} from 'react-icons/fa';
import { BsFillBellFill } from "react-icons/bs";
import {RiGitRepositoryPrivateFill} from 'react-icons/ri';

const TabData = [
    {
        title: 'my profile',
        icon: <FaUserAlt />,
        link: '/profile'
    },
    {
        title: 'notifications',
        icon: <BsFillBellFill />,
        link: '/notifications'
    },
    {
        title: 'your hired',
        icon: <FaUserCheck />,
        link: 'profile'
    },
    {
        title: 'privacy',
        icon: <RiGitRepositoryPrivateFill />,
        link: 'profile'
    },
]

export default TabData;