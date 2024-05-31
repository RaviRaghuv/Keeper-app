import React from "react";

function Footer(){
    const currentYear= new Date().getFullYear();
    return (
        <footer>
         Copywrite © {currentYear};

         </footer>
    )
}
export default Footer;