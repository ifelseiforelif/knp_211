import * as yup from "yup"

const MIN_NAME_VALUE = 3;
const MAX_NAME_VALUE = 25;
const yupAddCategorySchema = yup.object({
    name: yup
        .string()
        .min(MIN_NAME_VALUE, `Назва менше ${MIN_NAME_VALUE} символів`)
        .max(MAX_NAME_VALUE, `Назва менше ${MAX_NAME_VALUE} символів`)
        .required("Введіть назву"),
    description: yup
        .string()
        .required("Введіть опис"),
});

export default yupAddCategorySchema;

