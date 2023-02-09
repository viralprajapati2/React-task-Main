import React, { useState } from "react";
import './Form.css';

const Form = () => {
    const [FormData, setFormData] = useState({
        FirstName: 'Viral',
        LastName: 'Prajapati',
        Email: 'Viral@gamil.com',
        Gender: 'male',
        Address: 'Ahmedabad',
        MobileNumber: '8238976168',
        isAgree: false,
    });
    const [errorFname, setErrorFname] = useState(false);
    const [errorLname, setErrorLname] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorAddr, setErrorAddr] = useState(false);
    const [errorMnum, setErrorMnum] = useState(false);
    const [isclick, setIsclick] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...FormData, [e.target.name]: e.target.value,
        });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.checked })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    const errorcheckFname = (e) => {
        if (FormData.FirstName.length === 0 || FormData.FirstName.length === "") {
            setErrorFname(true);
        }
    }

    const errorcheckLname = (e) => {
        if (FormData.LastName.length === 0 || FormData.LastName.length === "") {
            setErrorLname(true);
        }
    }

    const errorcheckAddr = (e) => {
        if ((FormData.Address.length === 0 || FormData.Address.length === "")) {
            setErrorAddr(true);
        }
    }

    const errorcheckEmail = (e) => {
        if (FormData.Email.length === 0 || FormData.Email === " ") {
            setErrorEmail(true);
        }
        else {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!FormData.Email.match(mailformat)) {
                alert("please Enter valid Email address");
            }
        }
    }

    const errorcheckMnum = (e) => {
        if (FormData.MobileNumber.length === 0 || FormData.MobileNumber === " ") {
            setErrorMnum(true);
        }
        else {
            var Mnum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (!FormData.MobileNumber.match(Mnum)) {
                alert("please Enter the Correct Mobile Number");
            }
        }
    }   

    function edit() {
        if (isclick === true) {
            setIsclick(false);
        }
        else {
            setIsclick(true);
        }
    }

    console.log(FormData);

    return (
        <>

            {isclick ? <>
                <div className="Form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="FirstName">First Name:</label>
                            <input
                                type="text"
                                id="FirstName"
                                name="FirstName"
                                defaultValue={FormData.FirstName}
                                onChange={handleChange}
                                onBlur={errorcheckFname}
                                required
                            />
                            <br />
                            {errorFname && FormData.FirstName.length === 0 ? <label>Enter The FirstName</label> : ""}

                        </div>
                        <br />
                        <div>
                            <label htmlFor="LastName">Last Name:</label>
                            <input
                                type="text"
                                id="LastName"
                                name="LastName"
                                defaultValue={FormData.LastName}
                                onChange={handleChange}
                                onBlur={errorcheckLname}
                                required
                            />
                            <br />
                            {errorLname && FormData.LastName.length === 0 ? <label>Enter The LastName</label> : ""}
                        </div>
                        <br />
                        <div>
                            <label htmlFor="Email">Email:</label>
                            <input
                                type="Email"
                                id="Email"
                                name="Email"
                                defaultValue={FormData.Email}
                                onChange={handleChange}
                                onBlur={errorcheckEmail}
                                required
                            />
                            <br />
                            {errorEmail && FormData.Email.length === 0 ? <label>Enter The Email</label> : ""}
                        </div>
                        <br />
                        <div>
                            <label htmlFor="Gender">Gender:</label>
                            {FormData.Gender === "male" ?
                                <input
                                    type="radio"
                                    id="Gender"
                                    name="Gender"
                                    value="male"
                                    defaultChecked={true}
                                    onChange={handleChange}
                                /> : <input
                                    type="radio"
                                    id="Gender"
                                    name="Gender"
                                    value="male"
                                    onChange={handleChange}
                                />}
                            <label htmlFor="Gender">Male</label>
                            {FormData.Gender === "female" ?
                                <input
                                    type="radio"
                                    id="Gender"
                                    name="Gender"
                                    value="female"
                                    defaultChecked={true}
                                    onChange={handleChange}
                                /> : <input
                                    type="radio"
                                    id="Gender"
                                    name="Gender"
                                    value="female"
                                    onChange={handleChange}
                                />}

                            <label htmlFor="Gender">Female</label>
                            {FormData.Gender === "other" ?
                                <input
                                    type="radio"
                                    id="Gender"
                                    name="Gender"
                                    value="other"
                                    defaultChecked={true}
                                    onChange={handleChange}
                                /> : <input
                                    type="radio"
                                    id="Gender"
                                    name="Gender"
                                    value="other"
                                    onChange={handleChange}
                                />}
                            <label htmlFor="Gender">Other</label>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="Address">Address:</label>
                            <input
                                type="text"
                                id="Address"
                                name="Address"
                                defaultValue={FormData.Address}
                                onChange={handleChange}
                                onBlur={errorcheckAddr}
                            />
                            <br />
                            {errorAddr && FormData.Address.length === 0 ? <label>Enter The Adddress</label> : ""}
                        </div>
                        <br />
                        <div>
                            <label htmlFor="MobileNumber">Mobile Number:</label>
                            <input
                                type="text"
                                id="MobileNumber"
                                name="MobileNumber"
                                defaultValue={FormData.MobileNumber}
                                onChange={handleChange}
                                maxLength={10}
                                onBlur={errorcheckMnum}
                            />
                            <br />
                            {errorMnum && FormData.MobileNumber.length === 0 ? <label>Enter The Mobile Number</label> : ""}
                        </div>
                        <br />
                        <div>
                            <input
                                type="checkbox"
                                id="isAgree"
                                name="isAgree"
                                defaultChecked={FormData.isAgree}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="isAgree">I accept Terms and conditions</label>
                        </div>
                        <br />
                        <div>
                            <button type="submit" onClick={edit}>Submit</button>
                        </div>
                    </form>
                </div></>

                :

                <div className="Form">
                    <label>FirstName:{FormData.FirstName}</label><br />
                    <label>LastName:{FormData.LastName}</label><br />
                    <label>Email:{FormData.Email}</label><br />
                    <label>Gender:{FormData.Gender}</label><br />
                    <label>Address:{FormData.Address}</label><br />
                    <label>MobileNumber:{FormData.MobileNumber}</label><br />
                    <label>isAgree:{FormData.isAgree.toString()}</label><br />
                    <button type="submit" onClick={edit}>EDIT</button>
                </div>

            }

        </>
    )
};

export default Form;
