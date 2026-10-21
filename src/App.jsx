
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const etudiants = [
    {
      prenom: "Anwar",
      nom: "Romdhane",
      email: "romdhaneanwar@gmail.tn",
      telephone: "+216 93812273",
      filiere: "Génie Logiciel",
      annee: "2ème année",
      photo: "https://placehold.co/100x100?text=Anwar",
    },
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slim@universite.tn",
      telephone: "+216 22123456",
      filiere: "Informatique",
      annee: "2ème année",
      photo: "https://placehold.co/100x100?text=Slim",
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra@universite.tn",
      telephone: "+216 25123456",
      filiere: "Génie Logiciel",
      annee: "2ème année",
      photo: "https://placehold.co/100x100?text=Sarra",
    },
  ];

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main>
        <h2 id="etudiants">Liste des étudiants</h2>
        <p className="subtitle">
          GLSI 2 - Année universitaire 2026-2027
        </p>

        <div className="students-container">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              annee={etudiant.annee}
              photo={etudiant.photo}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

