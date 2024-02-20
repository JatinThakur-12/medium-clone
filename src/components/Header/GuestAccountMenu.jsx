import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { ListItemIcon } from "@mui/material";
import { Settings } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
// import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import PremiumSvg from "../PremiumSvg";
import WriteSvg from "./WriteSvg";
// import { useScrollTrigger } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import authService from "../../appwriteServices/auth";
import { logout } from '../../app/authSlice'




export default function GuestAccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const authStatus = useSelector((state) => state.status);
  const userData = useSelector((state) => state.userData);
  const [userMaskedEmail,setUserMaskedEmail] = React.useState(userData?.email ? maskEmail(userData.email) : '')
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log("LOgout called");
    authService.logout()
      .then(() => {
        dispatch(logout())
      })
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const maskedEmail = () => {
    let maskedEmail = maskEmail(userData?.email);
    setUserMaskedEmail(maskedEmail);
    // console.log("Masked Email",maskedEmail);
  }


  useEffect(() => {
    const handleScroll = () => {
      // Add your logic to determine when to close the menu
      // For example, close the menu when the user scrolls
      handleClose();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    if(authStatus){
      maskedEmail()
    }
  }, [userData])

  function maskEmail(email) {
    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const CharactersToKeep = 2;
    if (!emailRegex.test(email)) {
      // Return the original email if it's not valid
      return email;
    }

    // Split the email into local part and domain
    const [localPart, domain] = email.split('@');

    // Get the first two characters of the local part
    const maskedLocalPart = localPart.slice(0, CharactersToKeep);

    // Replace the remaining characters with asterisks
    const maskedEmail = maskedLocalPart + '*'.repeat(localPart.length - CharactersToKeep) + '@' + domain;

    return maskedEmail;
  }


  return (
    <React.Fragment>

      <Tooltip title="User settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ p: 0, }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 30, height: 30 }}>
            {
              authStatus ?
                userData?.name?.charAt(0).toUpperCase() : 
                <img src="/user.png" className='h-8 w-8 rounded-full block' alt="" />
            }
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflowY: "auto",
            overflowX: "hidden",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            width: 270,
            color: "#536271",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "& .css-6hp17o-MuiList-root-MuiMenu-list": {
              paddingY: "16px",
            },
            zIndex: 50
          },

        }}
        disableScrollLock={true}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!authStatus &&
          <div className="px-6 py-4">
            <div className="flex flex-col mss w-full">
              <h2 className="font-semibold text-sm tracking-tighter  w-full text-center">
                Get Started On Medium
              </h2>
              <div className="pt-5">
                <Link to="/signup"><div className={`flex justify-center text-[#e9e9e9] border-[#e9e9e9] bg-[#1A8917]  hover:bg-[#156D12] duration-100 px-3 py-1 font-medium text-sm rounded-full border cursor-pointer`}>Sign up</div></Link>
              </div>
              <div className="pt-5">
                <Link to="/login"><div className={`flex text-sm justify-center font-medium border-black px-3 py-1 rounded-full border cursor-pointer`}>Sign in</div></Link>
              </div>
            </div>
          </div>
        }
        {
          authStatus &&
          (<div>
            <div className="pb-4">
              <MenuItem sx={{ paddingX: 3, paddingY: 1 }} onClick={handleClose}>
                <ListItemIcon sx={{ paddingRight: 1, minWidth: "" }}>
                  <PersonOutlineOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <span className="text-sm">Profile</span>
              </MenuItem>
              <MenuItem sx={{ paddingX: 3, paddingY: 1 }} onClick={handleClose}>
                <ListItemIcon sx={{ paddingRight: 1, minWidth: "" }}>
                  <BookmarksOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <span className="text-sm">Library</span>
              </MenuItem>
              <MenuItem sx={{ paddingX: 3, paddingY: 1 }} onClick={handleClose}>
                <ListItemIcon sx={{ paddingRight: 1, minWidth: "" }}>
                  <ArticleOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <span className="text-sm">Stories</span>
              </MenuItem>
              <MenuItem sx={{ paddingX: 3, paddingY: 1 }} onClick={handleClose}>
                <ListItemIcon sx={{ paddingRight: 1, minWidth: "" }}>
                  <SignalCellularAltOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <span className="text-sm">Stats</span>
              </MenuItem>
            </div>
            <Divider />
            <div className="py-4">
              <MenuItem sx={{ paddingX: 3, fontSize: "14px" }} onClick={handleClose}>
                <div>
                  Settings
                </div>
              </MenuItem>
              <MenuItem sx={{ paddingX: 3, fontSize: "14px" }} onClick={handleClose}>
                <div>
                  Refine recommendations
                </div>
              </MenuItem>
              <MenuItem sx={{ paddingX: 3, fontSize: "14px" }} onClick={handleClose}>
                <div>
                  Manage publications
                </div>
              </MenuItem>
              <MenuItem sx={{ paddingX: 3, fontSize: "14px" }} onClick={handleClose}>
                <div>
                  Help
                </div>
              </MenuItem>
            </div>
          </div>
          )
        }
        <Divider />

        <div className="block sm:hidden">
          <div className='group px-6 py-2 flex text-slate-500 items-center gap-1 pr-8 hover:text-black hover:stroke-black stroke-slate-400'>
            <WriteSvg />
            <div className='text-sm tracking-tighter items-center align-middle font-medium'>Write</div>
          </div>
          <Divider />
        </div>

        <MenuItem sx={{ paddingX: 3, marginTop: 2 }} onClick={handleClose}>
          <div className="mss text-[14px] font-medium  items-center tracking-tight flex flex-row">
            Become a Medium member
            <PremiumSvg width="16" height="16" classes={"h-4 w-4 ml-5"} />
          </div>
        </MenuItem>
        <MenuItem sx={{ paddingX: 3 }} onClick={handleClose}>
          <div className="mss text-[14px] font-medium  items-center tracking-tight flex flex-row">
            Create a Mastodon account
          </div>
        </MenuItem>
        <MenuItem sx={{ paddingX: 3 }} onClick={handleClose}>
          <div className="mss text-[14px] font-medium  items-center tracking-tight flex flex-row">
            Welcome User!
          </div>
        </MenuItem>
        {authStatus && <Divider/>}
        {authStatus && (
          <div className="px-6 py-2 cursor-pointer" onClick={logoutHandler}>
            <div className="text-[14px] font-medium leading-tight mb-2 hover:text-black tracking-tight"   >Sign out</div>
            <div className="text-xs font-medium leading-tight ">{userMaskedEmail}</div>
          </div>
        )}
      </Menu>



    </React.Fragment>
  );
}
