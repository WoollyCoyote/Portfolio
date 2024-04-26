"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";

const CodeHighlight = () => {
useEffect(() => {
Prism.highlightAll();
},[])
   

    return ( 
        <div className="hidden">

        </div>
     );
}
 
export default CodeHighlight;