import type {FieldType} from './types'

type FieldProps = {
    field: FieldType
    values: { [key: string]: string }
    setValues: (values: { [key: string]: string}) => void
}

const Field = ({field, values, setValues}: FieldProps) => {

    return (
        <div
            className="flex flex-col py-1 my-4"

        >
            <label htmlFor={field.label} className="text-slate-400">{field.label} </label>
            <input
                id={field.label}
                type={field.type}
                className="w-64 rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 focus:outline-emerald-600"
                onChange={(e) => {
                    setValues({ ...values, [field.label]: e.target.value });
                }}
            />
        </div>
    )
}

export default Field;