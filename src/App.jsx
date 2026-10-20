


import './App.css'

function App() {
  return (
    <div className="student-card">
      <img src="/student.png" alt="Photo de l'étudiante" className="student-image" />
      <h1>Fiche étudiant</h1>

      <h2>Anwar Romdhane</h2>

      <p><strong>Email :</strong> romdhaneanwar9@gmail.com</p>
      <p><strong>Téléphone :</strong> +216 93812273</p>
      <p><strong>Filière :</strong> Génie Logiciel et Systèmes d'Information</p>
      <p><strong>Année d'étude :</strong> 2ème année</p>
      <p><strong>Groupe :</strong> GLSI 2</p>
      <p><strong>Ville :</strong> Mahdia</p>

      <a href="mailto:romdhaneanwar8@gmail.com" className="contact-button">
        Contacter
      </a>
    </div>
  )
}

export default App
