import React from 'react'
import { useForm } from 'react-hook-form';
import './ReactForm.css';
// import './style.css';

const ReactForm = () => {

    const {
        register, // track changes for the input field values
        handleSubmit,   //on form submit 
        formState: { errors }, //for validation Errors
        watch, // tracks the values of specified input fields
    } = useForm({
        mode: "onChange",
        // mode:"onBlur",
    });

    const HandleSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="RF">
            <form onSubmit={handleSubmit(HandleSubmit)}>
                <div className="FC">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstname"
                        {...register("firstname", {
                            required: true
                        })}
                    />
                    {errors.firstname && errors.firstname.type === "required" && (
                        <p className="Error">FirstName is required.</p>
                    )}
                </div>
                <div className="FC">
                    <label>E-Mail Address:</label>
                    <input type="text"
                        name="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <p className="Error">Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="Error">Email is not valid.</p>
                    )}
                </div>
                <div className="FC">
                    <label>Phone Number:</label>
                    <input type="text"
                        maxLength={10}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        name="phonenumber" {...register("phonenumber", {
                            required: true,
                            maxLength: 10,
                            pattern: /^[0-9]{10}/,
                        })} />
                    {errors.phonenumber && errors.phonenumber.type === "required" && (
                        <p className="Error">Phone Number is required.</p>
                    )}
                    {errors.phonenumber && errors.phonenumber.type === "pattern" && (
                        <p className="Error">PhoneNumber is not valid.</p>
                    )}
                </div>
                <div className="FC">
                    <label>Password:</label>
                    <input type="password" name="password" {...register("password", {
                        required: true,
                        pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                    })} />
                    {errors.password && errors.password.type === "required" && (
                        <p className="Error">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "pattern" && (
                        <p className="Error">Password is not valid.</p>
                    )}
                </div>
                <div className="FC">
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmpassword" {...register("confirmpassword", {
                        required: true,
                        // pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                        validate: value => value === watch("password")

                    })} />
                    {errors.confirmpassword && errors.confirmpassword.type === "required" && (
                        <p className="Error">Confirm Password is required.</p>
                    )}
                    {errors.confirmpassword && errors.confirmpassword.type === 'validate' && (
                        <p className="Error">Password Must be match.</p>
                    )}
                </div>
                <div className="FC">
                    <label>Choose Your State:</label>
                    <select type="select" name="state" {...register("state", { required: true })}>
                        <option value="">---Select Your State---</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Kerala">Kerala</option>
                    </select>
                    {errors.state && errors.state.type === "required" && (
                        <p className="Error">Please Select State.</p>)}
                </div>
                <div className="RB">
                    <label>Choose Your Gender:</label>
                    <input type="radio" value="male" name="male"{...register("gender", { required: true, })} />Male
                    <input type="radio" value="female" name="female"{...register("gender", { required: true, })} />Female
                    <input type="radio" value="other" name="other"{...register("gender", { required: true, })} />Other
                    {errors.gender && errors.gender.type === "required" && (
                        <p className="Error">Please Select Gender.</p>)}
                </div>
                <br />
                <div className="RB">
                    <input type="checkbox" name="checkbox" {...register("checkbox", {
                        required: true,
                    })} />
                    <label>I Agree all terms and conditions</label>
                    {errors.checkbox && errors.checkbox.type === "required" && (
                        <p className="Error">Please Accept Terms and conditions.</p>)}
                </div>
                <div className="FC">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default ReactForm;
