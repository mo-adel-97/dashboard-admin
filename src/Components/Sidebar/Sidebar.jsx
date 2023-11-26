import React, { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Image1 from "../../Images/download.jfif";
import Image2 from "../../Images/download2.png";
import { Button } from '@mui/material';
import { ThemeContext } from '../ThemeContect/ThemeContext';
const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <HomeOutlinedIcon/>,
        to: '/',
        section: ''
    },
    {
        display: 'tickets',
        icon: <DomainVerificationOutlinedIcon/>,
        to: '/started',
        section: 'started'
    },
    {
        display: 'customers',
        icon: <PersonOutlineOutlinedIcon/>,
        to: '/calendar',
        section: 'calendar'
    },
    {
        display: 'Organizations',
        icon: <CorporateFareOutlinedIcon />,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Orders',
        icon:<SettingsOutlinedIcon /> ,
        to: '/order',
        section: 'order'
    },
]

const Sidebar = () => {
    const { theme,toggleTheme } = useContext(ThemeContext);

    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar' style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'}}>
        <br />
        <div className="sidebar__logo">
            <img style={{width:"80px" , heigth:"80px"}}
             src={theme === "dark" ? Image2 :Image1} alt="image" />
            <h6 style={{color:theme === "dark" ? 'white' : 'black'}}>Classera</h6>
        </div>
        <br />
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text" style={{color:theme === "dark" ? 'white' : 'black'}}>
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
            <br/><br/><br/><br/><br/>
            <div style={{textAlign:"center"}}>
             <Button onClick={toggleTheme}>
                MOOD
            </Button>
            </div>
        </div>
    </div>;
};

export default Sidebar;