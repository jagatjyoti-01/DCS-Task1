import React, { useState } from 'react';

const SkillsList = () => {
  const [skills, setSkills] = useState({
    Creativity: 5,
    Leadership: 4,
    Communication: 3,
    Collaboration: 4,
    Inquisitiveness: 4,
  });

  // Function to toggle the background color of the selected checkbox
  const handleCheckboxClick = (skill, level) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [skill]: prevSkills[skill] === level ? level - 1 : level,
    }));
  };

  return (
    <ul className="list-unstyled text-start ps-4">
      {Object.entries(skills).map(([skill, level]) => (
        <li key={skill} className="pt-2">
          {skill}:{' '}
          {[...Array(5)].map((_, idx) => (
            <input
              key={idx}
              type="checkbox"
              className="form-check-input mx-1"
              style={{
                borderRadius: '50%',
                backgroundColor: idx < level ? '#104b60' : 'transparent',
              }}
              checked={idx < level}
              onChange={() => handleCheckboxClick(skill, idx + 1)}
            />
          ))}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
