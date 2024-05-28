import { useState } from "react";
import axios from "axios";
import { Formik, Field, ErrorMessage } from "formik";
import yupAddCategorySchema from "../../schemes/yupAddCategorySchema";
import AddedCategory from "../pages/AddedCategory";


function FormAddCategory() { 
    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState(null);

    const addCategoryHandler = async (e:any) => {
        try {
            const data = {
                slug: "",
                ...e,
                isActive: true
            };

            if (!data.imageUrl) {
                data.imageUrl = "no-image.jpg";
            }

            const response = await axios.post(import.meta.env.VITE_PATH_TO_SERVER + "categories", data);
            if (response.status == 201) {
                console.log(response);
                setFormData(data);
            }
        } 
        catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {formData ? (<AddedCategory props={formData}/>) : (
            <Formik 
                initialValues={{
                    name: "",
                    description: "",
                    imageUrl: ""
                }}
                validationSchema={yupAddCategorySchema}
                validationOnInput
                onSubmit={addCategoryHandler}  
            >
                {({values, errors, touched, isValid, handleSubmit}) => {
                    setIsFormValid(isValid);
                    return (
                        <form onSubmit={handleSubmit} className="container w-50 mt-5">
                            <h2 className="text-center mb-4">Додати категорію</h2>

                            <div className="form-group mt-5">
                                <label htmlFor="name" className="field-label">Назва</label>
                                <Field
                                    name="name"
                                    type="text"
                                    className={`form-control ${
                                        touched.name && errors.name ? "is-invalid" : ""
                                    } mt-1 field`}
                                    id="name"
                                />
                                <ErrorMessage name="name" component="div" className="invalid-feedback"/>
                            </div>

                            <div className="form-group mt-3 mb-2">
                                <label htmlFor="description" className="field-label">Опис</label>
                                <Field
                                    name="description"
                                    type="text"
                                    className={`form-control ${
                                        touched.description && errors.description ? "is-invalid" : ""
                                    } mt-1 field`}
                                    id="description"
                                />
                                <ErrorMessage name="description" component="div" className="invalid-feedback"/>
                            </div>

                            <div className="form-group mt-3 mb-2">
                                <label htmlFor="imageUrl" className="field-label">URL зображення</label>
                                <Field
                                    name="imageUrl"
                                    type="text"
                                    className={`form-control ${
                                        touched.imageUrl && errors.imageUrl ? "is-invalid" : ""
                                    } mt-1 field`}
                                    id="imageUrl"
                                />
                                <ErrorMessage name="imageUrl" component="div" className="invalid-feedback"/>
                            </div>

                            <button type="submit" className={`btn btn-primary mt-4 ${!isFormValid && "disabled"}`} disabled={!isFormValid}>
                                Додати категорію
                            </button>
                        </form>
                    );
                }}
            </Formik>)}
        </>
    );
}

export default FormAddCategory;