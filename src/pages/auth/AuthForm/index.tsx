import { useState } from "react"
import type { FieldType } from "./types";
import Field from './Field'

type AuthFormProps = {
    fields: FieldType[]
    submitButtonLabel: string
}

const AuthForm = ({ fields, submitButtonLabel }: AuthFormProps) => {
    const [values, setValues] = useState(() => {
        const initialState: { [key: string]: string } = {};
        for (let field of fields) {
            initialState[field.label] = ''
        }
        return initialState;
    })

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <form className="bg-white border border-slate-300 rounded-lg m-4 p-4" onSubmit={(e) => handleSubmit(e)}>
            {
                fields.map((field: FieldType) => <Field key={field.label} field={field} values={values} setValues={setValues} />)
            }
            <button className="w-full rounded-lg bg-emerald-600 p-2 text-white" type="submit">{submitButtonLabel}</button>
        </form>
    )
}

export default AuthForm;