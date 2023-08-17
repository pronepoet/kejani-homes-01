'use client'
import React, {useState, useEffect} from 'react'

export const Update = () => {
   
    const [homes, setHomes] = useState([]);
    const [selectedHome, setSelectedHome] = useState(null);
    const [updateStatus, setUpdateStatus] = useState(null);
    useEffect(() => {
        const fetchHomes = () => {
            const homes = require('../../../data')
            setHomes(homes)
        }
      
       fetchHomes();
    },[]);

    const handleUserSelect = (home) => {
        setSelectedHome(home);
        setUpdateStatus(null); // Reset the update status when a new home is selected
      };
  return (
    <>
      <ul>
        {homes.map((home) => (
          <li key={home.id}>
            {home.houseDetails}
            <button className={styles.my_button} onClick={() => handleHomeSelect(home)}>Select</button>
          </li>
        ))}
      </ul>

    </>
  )
}
