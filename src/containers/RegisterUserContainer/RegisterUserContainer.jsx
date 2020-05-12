import React, { useState } from 'react'
import {InputText} from "../../components/Form/InputText";
import {Button} from "../../components/Button/Button";

const RegisterUserContainer = ({onSubmit}) => {
    const [form, changeForm] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    })
    const {name, email, password, repeatPassword} = form
    const [error, changeError] = useState(null)
    const handleChange = (event) => {
        changeForm({...form, [event.target.name]: event.target.value})
    }
    const handleSubmit = () => {
        changeError(null)
        if (password === repeatPassword) {
            onSubmit({name, email, password})
        } else {
            changeError('Passwords should match')
        }
    }
    return (
        <form>
            <div className="form-row form-group">
                <div className="col-6">
                    <InputText value={name} onChange={handleChange} title='Name' type="text" required name='name'/>
                    <InputText value={email} onChange={handleChange} title='Email' required name='email' type='email'/>
                </div>
                <div className="col-6">
                    <InputText value={password} onChange={handleChange} title='Password' required name='password' type='password'/>
                    <InputText value={repeatPassword} onChange={handleChange} title='Repeat Password' required name='repeatPassword' type='password'/>
                </div>
            </div>
            <div className='auth__button'>
                <Button onClick={handleSubmit}>Register</Button>
            </div>
            {error &&
                <div>{error}</div>
            }
        </form>
    )
}

export default RegisterUserContainer