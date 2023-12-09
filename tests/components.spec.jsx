import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import ContactForm from '../src/ContactForm'
import userEvent from '@testing-library/user-event'

describe('Components Test', async () => {
  
	it.concurrent('displays contact form', async () => {
    render(<ContactForm />)
    expect(screen.getByText('Enquiries')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Name'})).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email address'})).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Message'})).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it.concurrent('contact form is usable', async () => {
	render(<ContactForm />)
	const nameInput = screen.getByRole('textbox', { name: 'Name' })
	const emailInput = screen.getByRole('textbox', { name: 'Email address', })
	const messageInput = screen.getByRole('textbox', { name: 'Message' })
	const btn = screen.getByRole('button')
	await userEvent.type(nameInput, 'James')
	await userEvent.type(emailInput, 'james@example.com')
	await userEvent.type(messageInput, 'Test message')
	await userEvent.click(btn)
	expect(screen.getByText('Thank you for sending an enquiry, James'))
 })

})
