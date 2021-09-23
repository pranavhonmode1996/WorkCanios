import {FaUserAlt, FaUserCheck} from 'react-icons/fa';
import { BsFillBellFill } from "react-icons/bs";
import {RiGitRepositoryPrivateFill} from 'react-icons/ri';
import {IoEnterSharp} from 'react-icons/io5';

const TabData = [
    {
        title: 'my profile',
        icon: <FaUserAlt />,
        link: '/my-profile'
    },
    {
        title: 'notifications',
        icon: <BsFillBellFill />,
        link: '/notifications'
    },
    {
        title: 'your hired',
        icon: <FaUserCheck />,
        link: '/your-hired-workers'
    },
    {
        title: 'requests',
        icon: <IoEnterSharp />,
        link: 'requests'
    },
    {
        title: 'privacy',
        icon: <RiGitRepositoryPrivateFill />,
        link: 'profile'
    },
]

export default TabData;