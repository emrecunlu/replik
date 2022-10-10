import { Form, Formik } from 'formik'
import TextInput from '../../forms/input'
import RichTextInput from '../../forms/textarea'
import './contact.scss'
import toast, { Toaster } from 'react-hot-toast'
import { formSchema } from './formSchema'
import axios from 'axios'
import { getCookie } from '../../helper'
import { useEffect } from 'react'

function Contact() {
	const submitHandle = async (values, { resetForm }) => {
		try {
			const res = await axios.post(
				process.env.REACT_APP_ENDPOINT + '/contact/',
				JSON.stringify({
					...values,
					csrftoken: getCookie('csrftoken'),
				}),
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			toast.success('Mesajınız başarıyla gönderildi!');
		} catch(err) {
			toast.error(err.message)
		}

		resetForm()
	}

	return (
		<>
			<section id="contact">
				<div className="container">
					<h2>İletişim</h2>
					<h1>Daha İyi Çözümler İçin</h1>
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
											<TextInput name="name" placeholder="İsminiz" />
										</div>
										<div className="form-element">
											<TextInput name="email" placeholder="E-posta Adresi" />
										</div>
										<div className="form-element">
											<TextInput name="phone" placeholder="Telefon Numarası" />
										</div>
										<div className="form-element">
											<TextInput name="subject" placeholder="Konu" />
										</div>
										<div className="form-element element-full">
											<RichTextInput
												name="message"
												placeholder="Mesajınız"
											/>
										</div>
										<div className="form-element element-full">
											<button type="submit" className="contact-button">
												Gönder
											</button>
										</div>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</section>
			
		</>
	)
}

export default Contact
