function StudentCard({ name, group, favoriteSubject }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '250px',
      display: 'inline-block',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3>{name}</h3>
      <p><strong>Группа:</strong> {group}</p>
      <p><strong>Любимый предмет:</strong> {favoriteSubject}</p>
    </div>
  );
}

export default StudentCard;
