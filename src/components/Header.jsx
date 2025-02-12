import { navLink } from "../constants/index"
import {Logo}   from "../assets/image/index"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';
import { useState } from "react";
const Header = () => {
    const [activeLink, setActiveLink] = useState(navLink[0])
  return (
    <nav className="max-w-[1200px] mx-auto mt-7 bg-custom-bg border-nav-border-color border font-[JejuMyeongjo] rounded-2xl">
        <div className="h-[68px] md:h-[76] container max-w-[1200px] mx-auto flex justify-between items-center px-4 py-4">
            <div className="">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="md:flex md:gap-3 hidden">
                {navLink.map(link => (
                    <a key={link} href="/" className={`text-[18px] px-3 lg:px-7
                        ${activeLink === link ? 'text-white' : 'text-[#B3B3B3]'}`}
                        onClick={(e) => {
                            e.preventDefault()
                            setActiveLink(link)
                        }}
                    >{link}</a>
                ))}
            </ul>
            
            <Button variant="contained" 
                sx={{
                    backgroundColor: "white",
                    lineHeight: "20px",
                    fontSize: {
                        xs:"14px",
                        md:"16px"
                    },
                    display:"flex",
                    gap:"8px",
                    padding: {
                        xs:"12px 16px",
                        md: "16px 24px"
                    },
                    borderRadius:"12px",
                    color: "#0A0C11",
                    fontFamily: "JejuMyeongjo",
                    '&:hover': {
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: "#0A0C11",
                    },
                    
                }
                }>
                <span>MY TICKETS</span>
                <ArrowRightAltIcon />  
            </Button>
        </div>
    </nav>
  )
}

export default Header