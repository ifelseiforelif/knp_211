import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, ErrorMessage } from "formik";
import yupAddProductSchema from "../../schemes/yupAddProductSchema";
import ICategory from "../../models/ICategory";
import AddedProduct from "../pages/AddedProduct";
import { useDispatch } from "react-redux";
import ProductType from "../../types/product-type";
import { editProduct } from "../../state/products/products-slice";
import { useParams } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";


function FormEditProduct({ products }: { products: ProductType[] }) { 
    const { id } = useParams();
    const product = products.find((product) => product.id === id);

    const dispatch = useDispatch();
    
    const [isFormValid, setIsFormValid] = useState(false);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_PATH_TO_SERVER + "categories");
                setCategories(response.data);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const addProductHandler = async (e:any) => {
        try {
            const data = {
                id: product?.id,
                ...e,
                isActive: true
            };
            data.priceCent *= 100;

            if (!data.imageUrl) {
                data.imageUrl = "no-image.jpg";
            }

            await dispatch<any>(editProduct(data));
            setFormData(data);
        } 
        catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {formData ? (<AddedProduct product={formData}/>) : (
            <Formik 
                initialValues={{
                    name: product?.name || "",
                    description: product?.description || "",
                    priceCent: formatPrice((product?.priceCent ?? 0) / 100),
                    categoryId: product?.categoryId || "",
                    imageUrl: product?.imageUrl || ""
                }}
                validationSchema={yupAddProductSchema}
                validationOnInput
                onSubmit={addProductHandler}  
            >
                {({values, errors, touched, isValid, handleSubmit}) => {
                    setIsFormValid(isValid);
                    return (
                        <form onSubmit={handleSubmit} className="container w-50 mt-5">
                            <h2 className="text-center">Змінити товар</h2>

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
                                <label htmlFor="imageUrl" className="field-label">Ціна</label>
                                <Field
                                    name="priceCent"
                                    type="text"
                                    className={`form-control ${
                                        touched.priceCent && errors.priceCent ? "is-invalid" : ""
                                    } mt-1 field`}
                                    id="priceCent"
                                />
                                <ErrorMessage name="priceCent" component="div" className="invalid-feedback"/>
                            </div>

                            <div className="form-group mt-3 mb-2">
                                <label htmlFor="categoryId" className="field-label">Категорія</label>
                                <Field
                                    name="categoryId"
                                    as="select"
                                    className={`form-control ${
                                        touched.categoryId && errors.categoryId ? "is-invalid" : ""
                                    } mt-1 field`}
                                    id="categoryId"
                                >
                                    <option value="" disabled>-- оберіть категорію --</option>
                                    {categories.map((el: ICategory) => (
                                        <option key={el.id} value={el.id}>{el.name}</option>
                                    ))}
                                </Field>
                                
                                <ErrorMessage name="categoryId" component="div" className="invalid-feedback"/>
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
                                Змінити товар
                            </button>
                        </form>
                    );
                }}
            </Formik>)}
        </>
    );
}

export default FormEditProduct;