import { Form, Formik } from 'formik'
import TextInput from '../../forms/input'
import RichTextInput from '../../forms/textarea'
import './contact.scss'
import toast, { Toaster } from 'react-hot-toast'
import { formSchema } from './formSchema'
import axios from 'axios'

function Contact() {
	const submitHandle = async (values, { resetForm }) => {
		const res = await axios.post(
			process.env.REACT_APP_ENDPOINT + 'contact/',
			JSON.stringify(values),
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		if (res?.status === 201) toast.success('Mesajınız iletildi!')
		else toast.error('İletişim bilgilerinde hata!')

		resetForm()
	}

	return (
		<>
			<section id="contact">
				<div className="container">
					<h2>CONTACT US</h2>
					<h1>Let's Talk</h1>
					<div className="contact-form">
						<Formik
							initialValues={{
								name: '',
								email: '',
								phone: '',
								subject: '',
								message: '',
							}}
							onSubmit={submitHandle}
							validationSchema={formSchema}
						>
							{(props) => (
								<Form>
									<div className="input-group">
										<div className="form-element">
											<TextInput name="name" placeholder="Your name" />
										</div>
										<div className="form-element">
											<TextInput name="email" placeholder="Your email" />
										</div>
										<div className="form-element">
											<TextInput name="phone" placeholder="Your phone" />
										</div>
										<div className="form-element">
											<TextInput name="subject" placeholder="Your subhect" />
										</div>
										<div className="form-element element-full">
											<RichTextInput
												name="message"
												placeholder="Your message"
											/>
										</div>
										<div className="form-element element-full">
											<button type="submit" className="contact-button">
												Send Message
											</button>
										</div>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</section>
			<Toaster
				toastOptions={{
					duration: 5000,
				}}
				position="top-right"
			/>
		</>
	)
}

export default Contact
