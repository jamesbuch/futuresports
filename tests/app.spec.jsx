import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import App from '../src/App'

describe('App', () => {
  
  it.concurrent('renders', () => {
    render(<App />)
  })
  
  it.concurrent('has one navbar-brand element', () => {
    const { container } = render(<App />)
    expect(container.getElementsByClassName('navbar-brand').length).toBe(1)
  })
  
  it.concurrent('has FutureSports in the navbar', () => {
    const { container } = render(<App />)
    expect(container.getElementsByClassName('navbar-brand')[0]).toHaveTextContent('FutureSports')
  })

  it.concurrent('displays Welcome to the club in header', () => {
    const { container } = render(<App />)
    expect(container.getElementsByClassName('bgheader')[0]).toHaveTextContent('Welcome to the club')
  })

  it.concurrent('displays open to new members in cta-box', () => {
    const { container } = render(<App />)
    expect(container.getElementsByClassName('cta-box')[0]).toHaveTextContent('open to new members')
  })

})
