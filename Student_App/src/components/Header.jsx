import { Component } from "react";

// class Header extends Component{
//     render(){
//         return<>
//         <div
//           className="d-flex justify-content-center align-items-center shadow-lg"
//           style={{
//             height: "70px",
//             background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
//             color: "white",
//             fontWeight: "bold",
//             fontSize: "24px",
//             letterSpacing: "1px",
//             textTransform: "uppercase",
//           }}
//         >
//           Student Management System
//         </div>
//         </>
//     }
// }
const Header = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center shadow-lg"
      style={{
        height: "70px",
        background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
        color: "white",
        fontWeight: "bold",
        fontSize: "24px",
        letterSpacing: "1px",
        textTransform: "uppercase",
      }}
    >
      Student Management System
    </div>
  );
};
export default Header;