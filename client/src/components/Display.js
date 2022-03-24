import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Display = (props) => {
    const [pets, setPets] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                console.log(res.data)
                setPets(res.data)
            })
    }, [])

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={'/add/pet'}>add a pet to the shelter</Link>
            <h2>These pets are looking for a good home</h2>
            <table style={{textAlign: "center", marginLeft: "500px", width: "500px", border: "1px solid black", borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={{border: "1px solid black", borderCollapse: "collapse"}}>Name</th>
                        <th style={{border: "1px solid black", borderCollapse: "collapse"}}>Type</th>
                        <th style={{border: "1px solid black", borderCollapse: "collapse"}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet, index) => {
                            return(
                                <tr key={index}>
                                    <td style={{border: "1px solid black", borderCollapse: "collapse"}}>
                                        {pet.name}
                                    </td>
                                    <td style={{border: "1px solid black", borderCollapse: "collapse"}}>
                                        {pet.type}
                                    </td>
                                    <td style={{border: "1px solid black", borderCollapse: "collapse"}}>
                                        <Link to={`/pet/${pet._id}`}>
                                            details
                                        </Link>
                                        <p style={{display: "inline-block", margin: "10px"}}>
                                            |
                                        </p>
                                        <Link to={`/edit/${pet._id}`}>
                                            edit
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    
                </tbody>
                
            </table>
        </div>
    )
}


export default Display;