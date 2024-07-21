import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from './CardList';
import { IoMdSearch } from "react-icons/io";
export default function Card () {
   const [list, setList] = useState([]);

   async function fetchList() {
    const data = await axios.get("http://13.234.213.211/api/cards");
    if (data?.data) {
        setList(data?.data)
    } 
   }

   useEffect(()=> {
       fetchList();
   }, [])

   return (
    <>
    <div className="card-list-filter">
                    <div className="card-list-section">
                        <div className="card-list-input"> Card List</div>
                        {/* <IoMdSearch className="credit-card-icons" /> */}
                    </div>
                </div>
                <div style={{marginTop: '50px'}}>
    {
        list.map(ele => {
            return <div className=".card-list-container">
                <CardList {...ele}/>
            </div>
        })
    }
    </div>
    </>
   )
}