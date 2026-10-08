import { useState } from 'react'
import Reveal from './Reveal.jsx'
import './Contact.css'

const INTERESTS = ['Full Membership', 'Guest Membership', 'Corporate', 'General Inquiry']

const INITIAL = { name: '', email: '', phone: '', interest: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (data) => {
    const e = {}
    if (!data.name.trim()) e.name = 'Please enter your full name.'
    if (!data.email.trim()) {
      e.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      e.email = 'Please enter a valid email address.'
    }
    if (data.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(data.phone.trim())) {
      e.phone = 'Please enter a valid phone number.'
    }
    if (!data.interest) e.interest = 'Please select a membership interest.'
    if (!data.message.trim()) e.message = 'Please enter a message.'
    return e
  }

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const eMap = validate(form)
    setErrors(eMap)
    if (Object.keys(eMap).length === 0) {
      setSubmitted(true)
      setForm(INITIAL)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <Reveal className="contact-inner">
          <p className="eyebrow contact-eyebrow">Contact</p>
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-lead">
            We'd be delighted to answer your questions and welcome you to Pinecrest.
            Please share a few details and our team will be in touch.
          </p>

          {submitted ? (
            <div className="contact-success" role="status">
              <div className="success-mark" aria-hidden="true">✓</div>
              <h3>Thank you for reaching out</h3>
              <p>Your inquiry has been received. A member of our team will contact you shortly.</p>
              <button className="btn btn-outline-dark" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-err' : undefined}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <span id="name-err" className="form-error">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <span id="email-err" className="form-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-err' : undefined}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <span id="phone-err" className="form-error">{errors.phone}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="interest">Membership Interest</label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={handleChange('interest')}
                    aria-invalid={!!errors.interest}
                    aria-describedby={errors.interest ? 'interest-err' : undefined}
                  >
                    <option value="" disabled>Select an option</option>
                    {INTERESTS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.interest && <span id="interest-err" className="form-error">{errors.interest}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'msg-err' : undefined}
                  placeholder="Tell us how we can help…"
                />
                {errors.message && <span id="msg-err" className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary form-submit">Submit Inquiry</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
