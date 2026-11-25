import { useState } from "react";
import "./studentform.css";
import defaultImage from "../assets/hero.png";

function StudentForm({ onAjouter }) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState(null);
  const [fileKey, setFileKey] = useState(0); // pour vider le champ file

  function handleImageChange(e) {
    const fichier = e.target.files[0];
    if (fichier) {
      setImage(URL.createObjectURL(fichier));
    }
  }

  function handleSubmit(e) {
    e.preventDefault(); // empêche le rechargement de la page

    const nouvelEtudiant = {
      prenom: prenom.trim(),
      nom: nom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere,
      anneeEtude,
      groupe: groupe.trim(),
      ville: ville.trim(),
      image: image || defaultImage,
    };

    onAjouter(nouvelEtudiant);

    // Réinitialiser le formulaire
    setPrenom("");
    setNom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage(null);
    setFileKey(fileKey + 1);
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Inscription d'un étudiant</h2>

      <div className="grid">
        <div className="field">
          <label htmlFor="prenom">Prénom *</label>
          <input
            id="prenom"
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="nom">Nom *</label>
          <input
            id="nom"
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="telephone">Téléphone *</label>
          <input
            id="telephone"
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            pattern="[0-9+ ]{8,15}"
            title="8 à 15 chiffres (le + et les espaces sont acceptés)"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="filiere">Filière *</label>
          <select
            id="filiere"
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
            required
          >
            <option value="">-- Choisir --</option>
            <option value="Génie Logiciel et Systèmes d'Information">
              Génie Logiciel et Systèmes d'Information
            </option>
            <option value="Licence Computer Science">
              Licence Computer Science
            </option>
            <option value="Licence Business Computing">
              Licence Business Computing
            </option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="anneeEtude">Année d'étude *</label>
          <select
            id="anneeEtude"
            value={anneeEtude}
            onChange={(e) => setAnneeEtude(e.target.value)}
            required
          >
            <option value="">-- Choisir --</option>
            <option value="1ère année">1ère année</option>
            <option value="2ème année">2ème année</option>
            <option value="3ème année">3ème année</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="groupe">Groupe *</label>
          <input
            id="groupe"
            type="text"
            value={groupe}
            onChange={(e) => setGroupe(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="ville">Ville</label>
          <input
            id="ville"
            type="text"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          />
        </div>

        <div className="field full">
          <label htmlFor="photo">Photo</label>
          <input
            key={fileKey}
            id="photo"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && <img className="preview" src={image} alt="Aperçu" />}
        </div>
      </div>

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default StudentForm;
