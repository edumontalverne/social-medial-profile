
import './App.css'
import edu from "./img/edu.jpeg"

function App() {

  return (
    <>
      <div className="main-card">
        <div>
          <img className="image-cover" src={edu} alt="Eduardo Lopes'picture" />
          <h1>Eduardo Lopes</h1>
          <h2>Frontend Developer</h2>
        </div>
        <h3>Ceará, Brazil</h3>
        <div className='links'>
          <a href="https://www.linkedin.com/in/eduardomontalvernelopes/" target='_blank'>LinkedIn</a>
          <a href="https://github.com/edumontalverne" target='_blank'>GitHub</a>
          <a href="https://www.instagram.com" target='_blank'>Instagram</a>
          <a href="#">Portifolio</a>
        </div>
      </div>
    </>
  )
}

export default App
