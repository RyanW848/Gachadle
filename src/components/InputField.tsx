import { useState, useEffect, useRef } from 'react';

function InputField({ game } : { game: string }) {
  const [query, setQuery] = useState<string>('');
  const [matches, setMatches] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  // Recalculate matches when input gains focus
  const handleFocus = () => {
    setIsFocused(true);
    if (query.length > 0) {
      const filteredMatches = characterNames.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
      setMatches(filteredMatches);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    setMatches([]); 
  };

  const handleSelect = (match: string) => {
    setQuery(match);
    setMatches([]);
    setIsFocused(false);
  };

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setMatches([]); 
      } 
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="centered">
      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur} 
          placeholder="Search for a character..."
          style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        {matches.length > 0 && (
          <div className="input-results" >
            {matches.map((match) => (
              <div
                className="input-item"
                onClick={() => handleSelect(match)}
              >
                {match}
              </div>
            ))}
          </div>
        )}
        {isFocused && matches.length === 0 && query && (
        <div className="input-results input-item">
          No matches found
        </div>
      )}
      </div>
    </div>
  );
};

export default InputField;