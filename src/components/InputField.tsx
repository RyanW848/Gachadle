import { useState } from 'react';

function InputField({ game } : { game: String }) {
  const [query, setQuery] = useState<string>('');
  const [matches, setMatches] = useState<string[]>([]);

  const characterNames = ['Gandalf', 'Gerry', 'Gabby', 'Red']

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setQuery(input);

    if (input.length > 0) {
      const filteredMatches = characterNames.filter(name =>
        name.toLowerCase().includes(input.toLowerCase())
      );
      setMatches(filteredMatches);
    } else {
      setMatches([]);
    }
  };

  const handleSelect = (match: string) => {
    setQuery(match);
    setMatches([]); // Clear suggestions after selecting a match
  };

  return (
    <div className="autocomplete-container" style={{ position: 'relative', width: '300px' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a character..."
        style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      {matches.length > 0 && (
        <div className="autocomplete-results" style={{
          position: 'relative', top: '100%', left: '0', right: '0', maxHeight: '200px', overflowY: 'auto',
          border: '1px solid #ccc', borderTop: 'none', backgroundColor: 'white', zIndex: 10
        }}>
          {matches.map((match, index) => (
            <div
              key={index}
              className="autocomplete-item"
              style={{
                padding: '8px', cursor: 'pointer', backgroundColor: '#fff'
              }}
              onClick={() => handleSelect(match)}
            >
              {match}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputField;