import React, { useState, useEffect } from "react";
import "./css/index.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar } from "@material-ui/core";
// import Avatar from "@mui/material/Avatar";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

import axios from "axios";


function Header() {
 

  const [showProfileIcon, setShowProfileIcon] = useState(false);



  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    console.log(loggedInUser);
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);
      setShowProfileIcon(true);
    }
  }, [showProfileIcon]);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   if(localStorage.getItem("username") === null || localStorage.getItem("username") ===""  || localStorage.getItem("password") === undefined){
  //     setShowProfileIcon(false);
  //   }
  //   else{
  //     setShowProfileIcon(true);
  //   }
  // });
 
  const user = useSelector(selectUser);
  // console.log(user);
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
      },
      children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }


  


  function handleLogout(){
    localStorage.clear();
    setShowProfileIcon(false);
    
  }
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
              alt="logo"
            />
          </Link>

          <h3>Products</h3>
          <h3>About</h3>
          <h3>For Teams</h3>
        </div>

        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />

           

            <input
              type="text"
              placeholder="Search..."
 
            />
          </div>
        </div>

    


        

        {/* Ternaty cond if user loggined : lohout profile .. : login  */}

         {/* After login */}

         { showProfileIcon === true ?
               <div className="header-right">
               <div className="header-right-container">
                 {window.innerWidth < 768 && <SearchIcon />}
     
     
                 <Link to="/userprofile">
                   <Avatar
                     style={{
                       cursor: "pointer",
                     }}
                     // {...stringAvatar(user && user.displayName)}
                     // onClick={() => auth.signOut()}
                   />
                 </Link>
     
                 <InboxIcon />
                 <HelpIcon />
                 <svg
                   aria-hidden="true"
                   class="svg-icon iconStackExchange"
                   width="24"
                   height="24"
                   viewBox="0 0 18 18"
                   fill="rgba(0,0,0,0.5)"
                   style={{
                     cursor: "pointer",
                   }}
                 >
                   <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                 </svg>
                 <Link to="/">
                   <button onClick={handleLogout}>Logout</button>
                 </Link>
               </div>
             </div>
          :
          <div className="header-right">
          <div className="header-right-container">
            {window.innerWidth < 768 && <SearchIcon />}

            <Link to="/auth">
              <button>Login</button>
            </Link>
          </div>
        </div>
         }

       




        {/* Before Login */}
        

        


      </div>
    </header>
  );
}

export default Header;
