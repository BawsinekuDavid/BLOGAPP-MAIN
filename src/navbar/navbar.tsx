// import { Link } from "react-router-dom";
// import "./navbar.css";

// export default function Navbar() {
//   const user = true;
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <i className="topIcon fab fa-facebook-square"></i>
//         <i className="topIcon fab fa-instagram-square"></i>
//         <i className="topIcon fab fa-pinterest-square"></i>
//         <i className="topIcon fab fa-twitter-square"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               HOME
//             </Link>
//           </li>
//           <li className="topListItem">ABOUT</li>
//           <li className="topListItem">CONTACT</li>
//           <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//           {user && <li className="topListItem">LOGOUT</li>}
//         </ul>
//       </div>
//       <div className="topRight">
//         {user ? (
//           <Link className="link" to="/settings">
//             <img
//               className="topImg"
//               src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//             />
//           </Link>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = true;
  return (
   
<nav className="navbar navbar-default" style={{ position:"relative",  width:"100%", top:0, background:"#fff"}}>
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div>
       {user ? (
           <Link className="link" to="/settings">
             <img
               className="topImg"
               src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
               alt=""
               style={{height:"60px", width:"60px", borderRadius:500 }}
             />
           </Link>
         ) : (
           <ul className="topList">
             <li className="topListItem">
               <Link className="link" to="/login">
                 LOGIN
               </Link>
             </li>
             <li className="topListItem">
               <Link className="link" to="/register">
                 REGISTER
               </Link>
             </li>
           </ul>
         )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
     
        
    </div>

   
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        {/* <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li> */}       
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li><Link to="/">HOME</Link></li>
        <li><Link to="#" >ABOUT</Link></li>
        <li><Link to="#">CONTACT</Link></li>
        <li><Link to="/write">WRITE</Link></li>
         
      </ul>
    </div> 
  </div> 
</nav>

  )
}
