import './input.scss'
import { useField } from "formik"

function TextInput({ ...props }) {

    const [field, meta, helper] = useField(props)

    return (
        <>
            <div className="error-group">
                <input className="input-primary" type="text" {...field} {...props} />
                {meta.touched && meta.error && (
                    <span>{meta.error}</span>
                )}
            </div>
        </>
    )
}

export default TextInput