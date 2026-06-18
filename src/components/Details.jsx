import '../styles/Details.css'

const details = [
  { icon: '👧', label: 'Age Group', value: '8–14 Years' },
  { icon: '⏱', label: 'Duration', value: '4 Weeks' },
  { icon: '💻', label: 'Mode', value: 'Online' },
  { icon: '💰', label: 'Fee', value: '₹2,999' },
  { icon: '📅', label: 'Start Date', value: '15 July 2026' },
]

function Details() {
  return (
    <section className="details">
      <h2>Workshop Details</h2>
      <div className="details-grid">
        {details.map((item) => (
          <div className="detail-card" key={item.label}>
            <span className="detail-icon">{item.icon}</span>
            <p className="detail-label">{item.label}</p>
            <p className="detail-value">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Details