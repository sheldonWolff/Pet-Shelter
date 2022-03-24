import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const DisplayOne = (props) => {
    const [pet, setPet] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then( res => {
                console.log(res.data)
                setPet(res.data);
            })
            .catch( err => console.log(err) )
    }, [id])
    const deleteAPet = e => {
        console.log('deleting')
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then(res => {
            console.log('deleted');
            navigate('/');
        })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 style={{marginLeft: '15px'}}>Pet Shelter</h1>
            <h2 style={{marginLeft: '15px'}}>Details about: {pet.name}</h2>
            <button onClick={deleteAPet} style={{marginLeft: '15px'}}>
                Adopt
            </button>
            <p style={{marginLeft: '15px'}}>type: {pet.type}</p>
            <p style={{marginLeft: '15px'}}>Description: {pet.description}</p>
            <div style={{display: 'flex', marginLeft: '15px'}}>
                <p>Skills:</p>
                <div style={{marginLeft: '15px'}}>
                    <p>{pet.skillOne}</p>
                    <p>{pet.skillTwo}</p>
                    <p>{pet.skillThree}</p>
                </div>
            </div>
        </div>
    )
}
export default DisplayOne;