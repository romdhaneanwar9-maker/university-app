
import "./studentcard.css";

function StudentCard({
  prenom = "Non renseigné",
  nom = "Non renseigné",
  email = "Non renseigné",
  telephone = "Non renseigné",
  filiere = "Génie Logiciel",
  annee = "2ème année",
  photo,
}) {
  return (
    <div className="student-card">
      {photo && (
        <img
          src={photo}
          alt={`Photo de ${prenom} ${nom}`}
          className="student-photo"
        />
      )}

      <h2>Fiche étudiant</h2>
      <p>Nom & Prénom : {prenom} {nom}</p>
      <p>Email : {email}</p>
      <p>Téléphone : {telephone}</p>
    </div>
  );
}

export default StudentCard;
