import {FaUserAlt, FaUserCheck} from 'react-icons/fa';
import { BsFillBellFill } from "react-icons/bs";
import {RiGitRepositoryPrivateFill} from 'react-icons/ri';
import {IoEnterSharp} from 'react-icons/io5';

const AdminTabData = [
    {
        title: 'my profile',
        icon: <FaUserAlt />,
        link: '/my-profile'
    },
    {
        title: 'requests',
        icon: <BsFillBellFill />,
        link: '/notifications'
    },
    {
        title: 'pending requests',
        icon: <FaUserCheck />,
        link: '/your-hired-workers'
    },
    {
        title: 'work done',
        icon: <IoEnterSharp />,
        link: 'requests'
    },
    {
        title: 'privacy',
        icon: <RiGitRepositoryPrivateFill />,
        link: 'profile'
    },
]

export default AdminTabData;