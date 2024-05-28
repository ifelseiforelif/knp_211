import * as yup from "yup"

const MIN_NAME_VALUE = 3;
const MAX_NAME_VALUE = 25;
const decimalPattern = /^\d+(\.\d{0,2})?$/;
const yupAddCategorySchema = yup.object({
    name: yup
        .string()
        .min(MIN_NAME_VALUE, `Назва менше ${MIN_NAME_VALUE} символів`)
        .max(MAX_NAME_VALUE, `Назва менше ${MAX_NAME_VALUE} символів`)
        .required("Введіть назву"),
    description: yup
        .string()
        .required("Введіть опис"),
    priceCent: yup
        .number()
        .positive()
        .test(
            "isDecimal",
            "Ціна повинна мати не більше двох цифр після коми",
            (val: any) => {
                if (val != undefined) {
                    return decimalPattern.test(val);
                }
                return true;
            }
        )
        .required("Введіть ціну"),
    categoryId: yup
        .string()
        .required("Оберіть категорію")
});

export default yupAddCategorySchema;

