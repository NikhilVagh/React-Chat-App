import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export const Login = () => {


    const [err, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");

        } catch (err) {
            setError(true);
        }
    }


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo" > Chat </span>
                <span className="title" > Login </span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                {err && <span>Something went wrong</span>}
                <p>Don't have account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};