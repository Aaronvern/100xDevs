import React, { useState } from 'react';

// Sample word list for generating paragraphs
const words = [
    "debugging","dumb","cohort","what","am i","even","writing", "commit", "push", "pull", "merge", "conflict", "npm install", "React",
    "Redux", "Node.js", "Express", "MongoDB", "JavaScript"
];

const generateParagraph = (wordCount) => {
  let paragraph = '';
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    paragraph += words[randomIndex] + ' ';
  }
  return paragraph.trim() + '.';
};

const ParagraphGenerator = () => {
  const [wordCount, setWordCount] = useState(50); // Default word count
  const [paragraph, setParagraph] = useState('');

  const handleGenerateClick = () => {
    const newParagraph = generateParagraph(wordCount);
    setParagraph(newParagraph);
  };

  return (
    <div classname='container'>
      <h1>Paragraph Generator</h1>
        <input
          type="number"
          placeholder='enetr number of words'
          value={wordCount}
          onChange={(e) => setWordCount(parseInt(e.target.value, 10))}
          min="1"
        />
      <button onClick={handleGenerateClick}>Generate Paragraph</button>
      <p>{paragraph}</p>
    </div>
  );
};

export default ParagraphGenerator;
