import React from 'react'
import { useState, useEffect } from 'react'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";


const Dark = () => {
    const [dark, setDark] = useState(() =>{
        if (localStorage.getItem("theme") === "dark") {
            return true;
        } else {
            return false;
        }
    });


    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);
  return (
    <button onClick={() => setDark(!dark)}>
        {dark ? <CiLight /> : <CiDark />}
    </button>
  )
}

export default Dark