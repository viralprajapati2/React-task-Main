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
        gender: "",
        acceptTerms: "",
    });
    const [gender] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);

    const inputs = [
        {
            className: "field",
            id: 1,
            name: "FirstName",
            type: "text",
            placeholder: "FirstName",
            errorMessage: "FirstName should be 2-16 characters and shouldn't be any special character ",
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
            maxLength: 10,
            required: true,
        },
    ]

    const radioButtons = {
        male: {
            id: "male",
            value: gender,
            onChange: () => setValues({ ...values, gender: "male" }),
            required: true
        },
        female: {
            id: "female",
            value: gender,
            onChange: () => setValues({ ...values, gender: "Female" }),
            required: true
        },
        other: {
            id: "other",
            value: gender,
            onChange: () => setValues({ ...values, gender: "Other" }),
            required: true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
        if (validateAcceptTerms()) {
        }
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const [acceptTermsError, setAcceptTermsError] = useState("");

    const validateAcceptTerms = () => {
        if (!acceptTerms) {
            setAcceptTermsError("Please accept the terms and conditions");
            setValues({ ...values, acceptTerms: "unChecked" });
            return false;
        }
        else {
            setValues({ ...values, acceptTerms: "Checked" });
        }
        setAcceptTermsError("");
        return true;
    };

    console.log(values);

    return <div className='signup'>
        <form onSubmit={handleSubmit}>
            <h2>Sign Up Page</h2>
            {inputs.map(input => (
                <FormInput key={input.id}
                    {...input} value={values[input.name]} onChange={onChange} >
                </FormInput>
            ))}
            <label htmlFor='Gender'>Gender : </label>
            <div className='gender'>
                {Object.keys(radioButtons).map(key => (
                    <div key={key}>
                        <input type='radio' name="Gender" id={radioButtons[key].id} value={radioButtons[key].value} onChange={radioButtons[key].onChange} required={radioButtons[key].required} />
                        <label htmlFor={radioButtons[key].id}>{key}</label>
                    </div>
                ))}
            </div>

            <input type="checkbox" onSubmit={validateAcceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} style={{ width: "1rem", height: "1rem" }} />I accept Terms & Conditions
            {acceptTermsError && <div className="error" style={{ color: "red" }}>{acceptTermsError}</div>}
            <button className='btn'>Submit</button>
        </form>
    </div>;
};

export default SignUp;
