import { useState } from 'react'
import '../styles/FAQ.css'

const faqs = [
  {
    q: 'Do I need any prior coding or robotics experience?',
    a: 'No prior experience is needed at all! This workshop is designed for complete beginners aged 8–14. Our instructors start from scratch and make learning fun and easy to follow.',
  },
  {
    q: 'What equipment or software does my child need?',
    a: 'Just a laptop or desktop with a stable internet connection. All software used is free and browser-based, so there is nothing to install beforehand. We will send setup instructions before the workshop starts.',
  },
  {
    q: 'How are the online sessions conducted?',
    a: 'Sessions are conducted live over Zoom in small batches of 10–15 students to ensure every child gets personal attention. Sessions are also recorded so your child can revise at their own pace.',
  },
  {
    q: 'What happens if my child misses a session?',
    a: 'All sessions are recorded and shared with enrolled students within 24 hours, so missing a session is never a problem. Your child can catch up easily before the next class.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes. If you are not satisfied after the first session, we offer a full refund, no questions asked. We are confident your child will love the experience!',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            key={index}
          >
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.q}
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="faq-answer">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ