import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import StudentCard from "./components/studentcard.jsx";
import StudentForm from "./components/studentform.jsx";
import heroImage from "./assets/hero.png";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: heroImage,
    },
    {
      id: 2,
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 11 111 111",
      filiere: "Licence Computer Science",
      anneeEtude: "1ère année",
      groupe: "LCS 1",
      ville: "Sousse",
      image: heroImage,
    },
    {
      id: 3,
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Licence Business Computing",
      anneeEtude: "2ème année",
      groupe: "LBC 2",
      ville: "",
      image: heroImage,
    },
  ]);

  const [recherche, setRecherche] = useState("");

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = { ...nouvelEtudiant, id: Date.now() };
    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  }

  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id)
    );
  }

  function modifierEtudiant(id) {
    const nouveauPrenom = prompt("Entrez le nouveau prénom :");
    if (nouveauPrenom !== null && nouveauPrenom.trim() !== "") {
      setEtudiants((anciensEtudiants) =>
        anciensEtudiants.map((etudiant) =>
          etudiant.id === id
            ? { ...etudiant, prenom: nouveauPrenom.trim() }
            : etudiant
        )
      );
    }
  }

  const texte = recherche.toLowerCase();
  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      etudiant.nom.toLowerCase().includes(texte) ||
      etudiant.prenom.toLowerCase().includes(texte) ||
      etudiant.filiere.toLowerCase().includes(texte)
  );

  return (
    <>
      <Header />
      <Navbar />

      <main className="main">
        <StudentForm onAjouter={ajouterEtudiant} />

        <input
          className="search-bar"
          type="text"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />

        <div className="cards">
          {etudiantsFiltres.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              id={etudiant.id}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              anneeEtude={etudiant.anneeEtude}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
              image={etudiant.image}
              onSupprimer={supprimerEtudiant}
              onModifier={modifierEtudiant}
            />
          ))}
        </div>

        {etudiantsFiltres.length === 0 && (
          <p className="empty">Aucun étudiant trouvé.</p>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;