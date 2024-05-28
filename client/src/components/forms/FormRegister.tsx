import { useState } from "react";
import axios from "axios";
import { Formik, Field, ErrorMessage } from "formik";
import yupRegisterSchema from "../../schemes/yupRegisterSchema";
import { useNavigate } from "react-router-dom";


function FormRegister() { 
    const [isFormValid, setIsFormValid] = useState(false);
    
    const navigate = useNavigate();

    const addUserHandler = async (data:any) => {
        try {
            const response = await axios.post(import.meta.env.VITE_PATH_TO_SERVER + "users", data);
            if (response.status == 201) {
                console.log(response);
                navigate("/");
            }
        } 
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Formik 
            initialValues={{
                name:"",
                login:"",
                email:"",
                password:"",
                confirmPassword:"",
            }}
            validationSchema={yupRegisterSchema}
            validationOnInput
            onSubmit={addUserHandler} 
        >
            {({values, errors, touched, isValid, handleSubmit}) => {
                setIsFormValid(isValid);
                return (
                    <form onSubmit={handleSubmit} className="container mt-4 w-50 mt-5">
                        <h2 className="text-center mb-4">Реєстрація</h2>

                        <div className="form-group mt-5">
                            <label htmlFor="name" className="field-label">Ім'я</label>
                            <Field
                                name="name"
                                type="text"
                                className={`form-control ${
                                    touched.name && errors.name ? "is-invalid" : ""
                                } mt-1 field`}
                                id="name"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group mt-3 mb-2">
                            <label htmlFor="login" className="field-label">Логін</label>
                            <Field
                                name="login"
                                type="text"
                                className={`form-control ${
                                    touched.login && errors.login ? "is-invalid" : ""
                                } mt-1 field`}
                                id="login"
                            />
                            <ErrorMessage
                                name="login"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group mt-3 mb-2">
                            <label htmlFor="email" className="field-label">Email</label>
                            <Field
                                name="email"
                                type="email"
                                className={`form-control ${
                                    touched.email && errors.email ? "is-invalid" : ""
                                } mt-1 field`}
                                id="email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group mt-3 mb-2">
                            <label htmlFor="password" className="field-label">Пароль</label>
                            <Field
                                name="password"
                                type="password"
                                className={`form-control ${
                                    touched.password && errors.password ? "is-invalid" : ""
                                } mt-1 field`}
                                id="password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group mt-3 mb-2">
                            <label htmlFor="confirmPassword" className="field-label">Підтвердження пароля</label>
                            <Field
                                name="confirmPassword"
                                type="password"
                                className={`form-control ${
                                    touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                                } mt-1 field`}
                                id="confirmPassword"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <button type="submit" className={`btn btn-primary mt-4 ${!isFormValid && "disabled"}`} disabled={!isFormValid}>
                            Зареєструватися
                        </button>
                    </form>
                );
            }}
        </Formik>
    );
}

export default FormRegister;
