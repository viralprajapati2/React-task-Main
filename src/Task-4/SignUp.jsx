import React from 'react';
import { useState } from 'react';
import FormInput from './FormInput';
import './SignUp.css';

const SignUp = () => {
    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        MobileNumber: "",
        Address: "",
    });
    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);

    const inputs = [
        {
            className: "field",
            id: 1,
            name: "FirstName",
            type: "text",
            placeholder: "FirstName",
            errorMessage: "FirstName should be 3-16 characters and shouldn't be any special character ",
            label: "FirstName:",
            pattern: "^[A-Za-z0-9]{2,16}$",
            required: true,
        },
        {
            className: "field",
            id: 2,
            name: "LastName",
            type: "text",
            placeholder: "LastName",
            errorMessage: "LastName should be 3-16 characters and shouldn't be any special character ",
            label: "LastName:",
            pattern: "^[A-Za-z0-9]{2,16}$",
            required: true,
        },
        {
            className: "field",
            id: 3,
            name: "Email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be valid Email address",
            label: "Email:",
            required: true,
        },
        {
            className: "field",
            id: 5,
            name: "Address",
            type: "text",
            placeholder: "Address",
            errorMessage: "Please Enter Valid City.",
            label: "Address:",
            pattern: "^[A-Za-z]{2,15}$",
            required: true,
        },
        {
            className: "field",
            id: 6,
            name: "MobileNumber",
            type: "text",
            placeholder: "MobileNumber",
            errorMessage: "Mobile number should contain 10 digits",
            label: "MobileNumber:",
            pattern: "^[0-9]{10}$",
            required: true,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
        if (validateGender()) {
        }
        if (validateAcceptTerms()) {
        }
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const validateGender = () => {
        if (!gender) {
            setGenderError("Please select a gender");
            return false;
        }
        setGenderError("");
        return true;
    };

    const [acceptTermsError, setAcceptTermsError] = useState("");

    const validateAcceptTerms = () => {
        if (!acceptTerms) {
            setAcceptTermsError("Please accept the terms and conditions");
            return false;
        }
        setAcceptTermsError("");
        return true;
    };

    console.log(values);
    console.log(gender);

    return <div className='signup'>
        <form onSubmit={handleSubmit}>
            <h2>Sign Up Page</h2>
            {inputs.map(input => (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <br />
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={handleGenderChange}>
                <option value="">Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            {genderError && <div className="error" style={{ color: "red" }}>{genderError}</div>}
            <br />
            <br />
            <input type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} style={{ width: "1rem", height: "1rem" }} />I accept Terms & Conditions
            {acceptTermsError && <div className="error" style={{ color: "red" }}>{acceptTermsError}</div>}
            <button className='btn'>Submit</button>
        </form>
    </div>;
};

export default SignUp;
