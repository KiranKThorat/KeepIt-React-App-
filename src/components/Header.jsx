import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import Zoom from '@mui/material/Zoom';

function Header(){
    return (
    <header>
     <Zoom in="true">
        <h1><EditNoteIcon/>Keepit</h1>
        </Zoom>
    </header>
    );
}

export default Header;