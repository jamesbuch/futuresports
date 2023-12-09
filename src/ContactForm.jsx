import * as React from 'react'

const ContactForm = (props) => {

	const [formData, setFormData] = React.useState({ name: "", email: "", message: "" })

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
	}

	const submitForm = (e) => {

		e.preventDefault()

		let hasErrors = false
		let errors = 'Please fill out the following fields:<br>'

		if (formData.name == null || formData.name.trim().length == 0) {
			errors += '<strong>name</strong><br>'
			hasErrors = true
		}

		if (formData.email == null || formData.email.trim().length == 0) {
			errors += '<strong>email</strong><br>'
			hasErrors = true
		}

		if (formData.message == null || formData.message.trim().length == 0) {
			errors += '<strong>message</strong>'
			hasErrors = true
		}

		if (hasErrors) {
			let el = document.querySelector('#formErrors')
			el.innerHTML = errors

			return
		}

		// TODO: AJAX request to API to send enquiry
		// eg. using fetch to POST data to futuresports.com.au/api/v1/enquriy
		let el = document.querySelector('#formMessage')
		el.innerHTML = `Thank you for sending an enquiry, ${formData.name}`

		let el2 = document.querySelector('#formErrors')
		el2.innerHTML = ''
	}

  return (
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <form id="encform" onSubmit={submitForm}>
        <div className="mb-3">
          <h3>Enquiries</h3>
        </div>
        <div className="mb-3 text-red" id="formErrors"></div>
        <div className="mb-3 text-bold" id="formMessage"></div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
				value={formData.email} onChange={handleChange}
          />
          <div className="form-text">
            We&quot;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-1">
          <label htmlFor="message" className="form-label">
            Message
          </label>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="message"
            name="message"
				value={formData.message} onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-success"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
