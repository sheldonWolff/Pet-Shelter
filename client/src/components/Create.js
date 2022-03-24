import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom";

const Create = (props) => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState([]);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/create', {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree,
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setPets([...pets, res.data])
                navigate('/');
            })
            .catch(err=>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors);
            })  
    }



    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={'/'}>back to home</Link>
            <h2>Know a pet needing a home?</h2>
            <form onSubmit={onSubmitHandler} style={{marginLeft: "500px", width: "600px"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        { errors.name ? 
                            <p>{errors.name.message}</p>
                            : null
                        }
                        <label htmlFor='name'>Pet Name:</label>
                        <br/>
                        <input type='text' onChange = {(e)=>setName(e.target.value)} value={name} />
                        <br />
                        { errors.type ? 
                            <p>{errors.type.message}</p>
                            : null
                        }
                        <label htmlFor='type'>Type:</label>
                        <br/>
                        <input type='text' onChange = {(e)=>setType(e.target.value)} value={type} />
                        <br />
                        { errors.description ? 
                            <p>{errors.description.message}</p>
                            : null
                        }
                        <label htmlFor='description'>Description:</label>
                        <br/>
                        <input type='text' onChange = {(e)=>setDescription(e.target.value)} value={description} />
                        <br />
                    </div>
                    <div>
                        <p>Skills (optional):</p>
                        <label htmlFor='skills'>Skill 1:</label>
                        <br />
                        <input type='text' onChange = {(e)=>setSkillOne(e.target.value)} value={skillOne} />
                        <br/>
                        <label htmlFor='skills'>Skill 2:</label>
                        <br/>
                        <input type='text' onChange = {(e)=>setSkillTwo(e.target.value)} value={skillTwo} />
                        <br />
                        <label htmlFor='skills'>Skill 3:</label>
                        <br/>
                        <input type='text' onChange = {(e)=>setSkillThree(e.target.value)} value={skillThree} />
                    </div>
                </div>
                <br />
                <input type='submit'/>
            </form>
        </div>
    )
}


export default Create;