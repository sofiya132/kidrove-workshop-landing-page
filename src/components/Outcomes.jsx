import '../styles/Outcomes.css'

const outcomes = [
  'Understand the basics of Artificial Intelligence and how it powers real-world applications',
  'Build simple robots and program them to perform basic tasks autonomously',
  'Learn block-based and introductory text-based programming with Python',
  'Develop problem-solving and logical thinking through hands-on mini-projects',
  'Create a final capstone project combining AI and Robotics to present on demo day',
  'Gain confidence to explore STEM fields and participate in competitions',
]

function Outcomes() {
  return (
    <section className="outcomes">
      <div className="outcomes-inner">
        <h2>What Your Child Will Learn</h2>
        <ul>
          {outcomes.map((point, index) => (
            <li key={index}>
              <span className="outcome-check">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Outcomes