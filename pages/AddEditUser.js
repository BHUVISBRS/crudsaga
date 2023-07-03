import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, showUserResClean, showUserStart, updateUserStart } from '../Redux/action';
import { useFormik } from 'formik';
import * as Yup from "yup";
import "./add.css";
import { toast } from 'react-hot-toast';


function AddEditUser() {
    const navigate = useNavigate();
    /* ` const [formvalue, setformvalue] = useState(initaialState);` */
    const { type } = useParams();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { users } = useSelector((state) => state.data);
    useEffect(() => {
        if (id) {
            dispatch(showUserStart(id))
        }
        return () => {
            dispatch(showUserResClean())
        }
    }, [id])

    // useEffect(() => {
    //     if (id) {

    //         const singleuser = users.find((user) => user.id === id);
    //         /*  console.log({ ...singleuser }); */
    //         /* console.log(singleuser); */
    //         formik.setFieldValue('email', singleuser?.email)
    //         formik.setFieldValue('phone', singleuser?.phone)
    //         /*   console.log("Log", singleuser) */

    //     }

    // }, [id]);

    const initialEditVal = users.find((user) => user.id === id);
    useEffect(() => {
        if (id) {
            for (const key in initialEditVal) {
                formik.setFieldValue(key, initialEditVal[key]);
            }
        }
    }, [initialEditVal, id])


    const { response } = useSelector((state) => state.data);
    console.log(response);
    const Validation = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format")
            .max(250, "Maximum 250 characters")
            .required("Required"),
        phone: Yup.string().min(6, "Too Short!").required("Required"),

    });

    const formik = useFormik({
        initialValues: {
            email: "",
            phone: "",
        },
        validationSchema: Validation,

        onSubmit: (values) => {
            if (type === "add") {
                dispatch(createUserStart(values));
                // setTimeout(() => navigate("/home"), 5000);
            }
            else {

                dispatch(updateUserStart(id, values));
            }

        },

    });

    useEffect(() => {
        if (!id) {
            dispatch(showUserStart(id))
        }
    }, [id])

    useEffect(() => {
        if (response?.statusText === "Created") {
            toast.success(response?.statusText)
            navigate("/home")

        }
        else if (response?.statusText === 'OK') {
            toast.success(response?.statusText)
            navigate("/home")
        }

    }, [response])

    return (
        <div className='formwrapper'>

            <div className='formgroup'>
                <center><h3>{type === 'add' ? "Create New User" : "Edit User Details"}</h3></center>
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <div>
                        <label>Email</label>
                        <input type='text' id='email' placeholder='email id'
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            formik={formik}
                        />
                        {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}


                    </div>
                    <label>phone</label>
                    <input type='phone' id='phone' placeholder='phone'
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        formik={formik}
                    /><br />
                    {formik.errors.phone && formik.touched.phone && <p className="error">{formik.errors.phone}</p>}

                    <div className='btncontainer'>

                        <button className='btn1' type="submit">{type === "add" ? "Add user" : "Update user"}</button>

                        <button className='btn1' onClick={() => navigate("/home")}>Cancel</button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default AddEditUser

