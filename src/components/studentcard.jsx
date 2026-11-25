import { useState } from "react";
import "./studentcard.css";

function StudentCard({
  id,
  prenom,
  nom,
  email,
  telephone,
  filiere,
  anneeEtude,
  groupe,
  ville,
  image,
  onSupprimer,
  onModifier,
}) {
  // Chaque fiche gère sa propre visibilité
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  // Valeur par défaut si la ville n'est pas fournie
  const villeAffichee = ville || "Non renseignée";

  function basculerInformations() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      <img src={image} alt={`Photo de ${prenom}`} />

      <h2>Fiche étudiant</h2>

      <p>
        <strong>Nom &amp; Prénom :</strong> {prenom} {nom}
      </p>
      <p>
        <strong>Filière :</strong> {filiere}
      </p>
      <p>
        <strong>Année d'étude :</strong> {anneeEtude}
      </p>
      <p>
        <strong>Groupe :</strong> {groupe}
      </p>
      <p>
        <strong>Ville :</strong> {villeAffichee}
      </p>

      {coordonneesVisibles && (
        <div className="coordonnees">
          <p>
            <strong>Email :</strong> {email}
          </p>
          <p>
            <strong>Téléphone :</strong> {telephone}
          </p>
        </div>
      )}

      <div className="actions">
        <button type="button" onClick={basculerInformations}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>
        <a className="contact-btn" href={`mailto:${email}`}>
          Contacter
        </a>
        <button type="button" onClick={() => onModifier(id)}>
          Modifier
        </button>
        <button
          type="button"
          className="danger"
          onClick={() => onSupprimer(id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
