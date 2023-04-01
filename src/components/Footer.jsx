import React from "react";


var mydate = new Date();
var year = mydate.getFullYear();
function Footer(){
    return (
        <footer>
           <p>Copyright © {year}</p>
        </footer>
    );
}

export default Footer;