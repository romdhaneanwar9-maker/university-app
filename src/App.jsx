
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Anwar",
      nom: "Romdhane",
      email: "romdhaneanwar@gmail.com",
      telephone: "+216 93812273",
      filiere: "Génie Logiciel",
      annee: "2ème année",
      photo: "https://placehold.co/100x100?text=Anwar",
    },
    {
      id: 2,
      prenom: "Slim",
      nom: "Boubaker",
      email: "slim@universite.tn",
      telephone: "+216 22123456",
      filiere: "Informatique",
      annee: "2ème année",
      photo: "https://placehold.co/100x100?text=Slim",
    },
    {
      id: 3,
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra@universite.tn",
      telephone: "+216 25123456",
      filiere: "Génie Logiciel",
      annee: "2ème année",
      photo: "https://placehold.co/100x100?text=Sarra",
    },
  ]);

  const [recherche, setRecherche] = useState("");

  // Ajouter un étudiant
  const ajouterEtudiant = () => {
    const prenom = prompt("Donner le prénom :");
    if (prenom === null || prenom.trim() === "") return;

    const nom = prompt("Donner le nom :");
    if (nom === null || nom.trim() === "") return;

    const email = prompt("Donner l'email :");
    if (email === null || email.trim() === "") return;

    const nouvelEtudiant = {
      id: Date.now(),
      prenom: prenom.trim(),
      nom: nom.trim(),
      email: email.trim(),
      telephone: "Non renseigné",
      filiere: "Génie Logiciel",
      annee: "2ème année",
      photo: "https://placehold.co/100x100?text=Etudiant",
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  };

  // Supprimer un étudiant
  const supprimerEtudiant = (id) => {
    setEtudiants(etudiants.filter((etudiant) => etudiant.id !== id));
  };

  // Modifier le prénom d'un étudiant
  const modifierEtudiant = (id) => {
    const nouveauPrenom = prompt("Donner le nouveau prénom :");

    if (nouveauPrenom === null || nouveauPrenom.trim() === "") return;

    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === id
          ? { ...etudiant, prenom: nouveauPrenom.trim() }
          : etudiant
      )
    );
  };

  // Rechercher un étudiant
  const etudiantsFiltres = etudiants.filter((etudiant) => {
    const texte = recherche.toLowerCase();

    return (
      etudiant.prenom.toLowerCase().includes(texte) ||
      etudiant.nom.toLowerCase().includes(texte) ||
      etudiant.filiere.toLowerCase().includes(texte)
    );
  });

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main>
        <h2 id="etudiants">Liste des étudiants</h2>

        <p className="subtitle">
          GLSI 2 - Année universitaire 2026-2027
        </p>

        <button onClick={ajouterEtudiant}>
          Ajouter un étudiant
        </button>

        <br />
        <br />

        <input
          type="text"
          placeholder="Rechercher par nom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />

        <div className="students-container">
          {etudiantsFiltres.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              annee={etudiant.annee}
              photo={etudiant.photo}
              onSupprimer={() => supprimerEtudiant(etudiant.id)}
              onModifier={() => modifierEtudiant(etudiant.id)}
            />
          ))}
        </div>

        {etudiantsFiltres.length === 0 && (
          <p>Aucun étudiant trouvé<b>♥</b>.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
