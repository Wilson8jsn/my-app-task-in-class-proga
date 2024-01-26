import React, { useState } from 'react';

export default function CharacterStats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16,
  });

  function handleChange(e) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div style={centerStyle}>
      <h1>Character Stats Form</h1>
      <form style={formStyle}>
        <label style={labelStyle}>
          Name:
          <input
            name="name"
            value={character.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Strength:
          <input
            name="strength"
            value={character.strength}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Intelligence:
          <input
            name="intelligence"
            value={character.intelligence}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Charisma:
          <input
            name="charisma"
            value={character.charisma}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
      </form>
    </div>
  );
}

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const formStyle = {
  width: '100%',
  maxWidth: '300px',
  border: '1px solid #ccc',
  borderRadius: '30px',
  padding: '20px',
  margin: '0 auto',
};

const labelStyle = {
  marginBottom: '10px',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #aaa',
  marginTop: '5px',
  width: '100%',
};
