import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import App from '../src/App'

describe('App Tests', () => {
  
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

  it.concurrent('has a sports statistics table', () => {
    render(<App />)
    expect(screen.getByText('FutureSports Team Statistics')).toBeInTheDocument()
  })

  it.concurrent('displays club news', () => {
    render(<App />)
    const elts = screen.getAllByText('Club News')
    expect(elts.length).toBeGreaterThan(1)
  })

  it.concurrent('displays an embedded video component', () => {
    render(<App />)
    expect(screen.getByText('Matildas')).toBeInTheDocument()
  })

  it.concurrent('has a privacy statement', () => {
    render(<App />)
    expect(screen.getByText('Privacy Statement')).toBeInTheDocument()
  })

  it.concurrent('has terms and conditions', () => {
    render(<App />)
    expect(screen.getByText('Terms and Conditions')).toBeInTheDocument()
  })

  it.concurrent('has a copyright notice', () => {
    render(<App />)
    expect(screen.getByText('©2023 FutureSports. All rights reserved.')).toBeInTheDocument()
  })

})
