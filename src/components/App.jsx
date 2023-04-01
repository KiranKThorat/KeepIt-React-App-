import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App(){
    return (
    <div>
    <Header />
    {notes.map((notedata) =>
        <Note 
        key = {notedata.id}
        title = {notedata.title}
        content = {notedata.content}
        />
    )}
    <Footer />
    </div>
    ); 
}

export  default App;