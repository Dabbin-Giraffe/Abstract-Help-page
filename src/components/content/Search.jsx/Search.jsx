import React, { useRef, useState, useEffect } from 'react'
import "./Search.css";
import rightArrow from "../../../assets/images/right-arrow.svg";

const Search = () => {

    const [isClicked, setIsClicked] = useState(false);
    const divRef = useRef(null);

    const handleClick = (e) => {
        if (divRef.current && divRef.current.contains(e.target)) {
            setIsClicked(!isClicked);
        }
        else {
            setIsClicked(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [isClicked])

    return (
        <div className="search-wrapper">
            <div className="search-container">
                <p className="xlg-text">How can we help?</p>
                <div
                    ref={divRef}
                    className={isClicked ? `is-clicked search` : `search`}
                >
                    <input type="text" className='med-text' placeholder='Search' />
                    <img src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Search
