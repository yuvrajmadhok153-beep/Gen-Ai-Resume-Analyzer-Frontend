// import React,{useState} from 'react'
// import { useNavigate, Link } from 'react-router'
// import { useAuth } from '../hooks/useAuth'

// const Register = () => {

//     const navigate = useNavigate()
//     const [ username, setUsername ] = useState("")
//     const [ email, setEmail ] = useState("")
//     const [ password, setPassword ] = useState("")

//     const {loading,handleRegister} = useAuth()
    
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         await handleRegister({username,email,password})
//         navigate("/")
//     }

//     if(loading){
//         return (<main><h1>Loading.......</h1></main>)
//     }

//     return (
//         <main>
//             <div className="form-container">
//                 <h1>Register</h1>

//                 <form onSubmit={handleSubmit}>

//                     <div className="input-group">
//                         <label htmlFor="username">Username</label>
//                         <input
//                             onChange={(e) => { setUsername(e.target.value) }}
//                             type="text" id="username" name='username' placeholder='Enter username' />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             onChange={(e) => { setEmail(e.target.value) }}
//                             type="email" id="email" name='email' placeholder='Enter email address' />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             onChange={(e) => { setPassword(e.target.value) }}
//                             type="password" id="password" name='password' placeholder='Enter password' />
//                     </div>

//                     <button className='button primary-button' >Register</button>

//                 </form>

//                 <p>Already have an account? <Link to={"/login"} >Login</Link> </p>
//             </div>
//         </main>
//     )
// }

// export default Register


import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        navigate("/")
    }

    if (loading) {
        return (
            <main style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <h1>Loading.......</h1>
            </main>
        )
    }

    return (
        <main style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className="form-container" style={{
                width: "380px",
                padding: "30px",
                borderRadius: "10px",
                border: "1px solid #ddd"
            }}>
                <h1 style={{
                    textAlign: "center",
                    marginBottom: "25px"
                }}>
                    Register
                </h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group" style={{ marginBottom: "18px" }}>
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "6px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                outline: "none"
                            }}
                        />
                    </div>

                    <div className="input-group" style={{ marginBottom: "18px" }}>
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email address"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "6px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                outline: "none"
                            }}
                        />
                    </div>

                    <div className="input-group" style={{ marginBottom: "22px" }}>
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "6px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                outline: "none"
                            }}
                        />
                    </div>

                    <button
                        className="button primary-button"
                        style={{
                            width: "100%",
                            padding: "10px",
                            cursor: "pointer",
                            borderRadius: "6px",
                            border: "1px solid transparent"
                        }}
                    >
                        Register
                    </button>

                </form>

                <p style={{
                    textAlign: "center",
                    marginTop: "15px"
                }}>
                    Already have an account?{" "}
                    <Link to={"/login"}>
                        Login
                    </Link>
                </p>
            </div>
        </main>
    )
}

export default Register