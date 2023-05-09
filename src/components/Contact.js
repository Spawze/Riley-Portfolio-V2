import React, { useState } from "react";
import { validateEmail } from "../util/helpers";

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setError] = useState('')
    const [successMessage, setSuccess] = useState('')

    const handleInputChange = (e) => {
        const { target } = e;
        switch (target.id) {
            case 'name':
                setName(target.value)
                break;
            case 'email':
                setEmail(target.value)
                break;
            case 'message':
                setMessage(target.value)
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        

        if (!email) {
            setError("Please enter an email address!")
            return
        }else if (!name) {
            setError("Please enter a name!")
            return
        }else if (!message) {
            setError("Please enter a message!")
            return
        } else if (!validateEmail(email)){
            setError("Please enter a valid email address!")
            return
        }
        setError('')
        setSuccess('Message submitted! Thank you so much!')
        setEmail('')
        setName('')
        setMessage('')

    }
    return (
        <div className="container row">
            <h1 className="col s12">Contact</h1>
            <form className="col s12">
                <div className="row">
                    <div className="input-field  col s12">
                        <input
                            value={name}
                            className="white-text validate"
                            id="name"
                            type="text"
                            onChange={handleInputChange} />

                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field  col s12">
                        <input
                            value={email}
                            className="white-text validate"
                            id="email"
                            type="email"
                            onChange={handleInputChange} />
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="Please enter valid email address"></span>
                    </div>
                    <div className="input-field col s12">
                        <textarea
                            value={message}
                            onChange={handleInputChange}
                            id="message"
                            className="materialize-textarea white-text"
                            maxLength={400}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                </div>
                <button
                    className="btn waves-effect green"
                    onClick={handleFormSubmit}
                >SUBMIT<i className="material-icons right">send</i></button>
            </form>
            <div className="row">
                <p className="red-text col">{errorMessage}</p>
                <p className="green-text col ">{successMessage}</p>
            </div>
        </div>
    )
}