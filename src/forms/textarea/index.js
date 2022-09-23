import './textarea.scss'
import { useField } from 'formik'

function RichTextInput({ ...props }) {
	const [field, meta, helper] = useField(props)

	return (
		<>
			<div className="error-group">
				<textarea className="input-primary rich-box" {...field} {...props} />
				{meta.touched && meta.error && <span>{meta.error}</span>}
			</div>
		</>
	)
}

export default RichTextInput
