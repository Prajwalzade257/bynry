import React from 'react';

function ProfileCard({ profile, onSummaryClick }) {
  return (
    <div className="profile-card">
      <img src={profile.picture} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
}

export default ProfileCard;