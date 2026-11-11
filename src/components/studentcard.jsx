
import { useState } from "react";

function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere,
  annee,
  photo,
  onSupprimer,
  onModifier,
}) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  const basculerInformations = () => {
    setCoordonneesVisibles(!coordonneesVisibles);
  };

  return (
    <div className="student-card">
      <img src={photo} alt={prenom} width="100" />

      <h3>{prenom} {nom}</h3>

      <p>Filière : {filiere}</p>
      <p>Niveau : {annee}</p>

      <button onClick={basculerInformations}>
        {coordonneesVisibles
          ? "Masquer les informations"
          : "Afficher les informations"}
      </button>

      {coordonneesVisibles && (
        <div>
          <p>Email : {email}</p>
          <p>Téléphone : {telephone}</p>
        </div>
      )}

      <button onClick={onModifier}>
        Modifier
      </button>

      <button onClick={onSupprimer}>
        Supprimer
      </button>
    </div>
  );
}

export default StudentCard;
