import { useState } from "react"
import type { FieldType } from "./types";
import Field from './Field'

type AuthFormProps = {
    fields: FieldType[]
    submitButtonLabel: string
    onSubmit: (values: { [key: string]: string }) => void
}

const AuthForm = ({ fields, submitButtonLabel, onSubmit }: AuthFormProps) => {
    const [values, setValues] = useState(() => {
        const initialState: { [key: string]: string } = {};
        for (let field of fields) {
            initialState[field.label] = ''
        }
        return initialState;
    })

    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
    }

    return (
        <form className="bg-white border border-slate-300 rounded-lg m-4 p-4" onSubmit={(e) => handleSubmit(e)}>
            {
                fields.map((field: FieldType) => <Field key={field.label} field={field} values={values} setValues={setValues} />)
            }
            <button className="w-full rounded-lg bg-emerald-600 p-2 text-white relative" type="submit">
                {submitButtonLabel}
                {loading && 
                <div className="absolute top-0 right-4 flex items-center h-full">
                    <i className="fa-solid fa-spinner text-green-300 text-2xl animate-spin"></i>
                </div>
                }
            </button>
        </form>
    )
}

export default AuthForm;