import { useState, useEffect, useRef } from 'react';
import { genshinCharacters } from "../assets/gameData/genshin.tsx"

function InputField({ game } : { game: string }) {
  const [query, setQuery] = useState<string>('');
  const [matches, setMatches] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const gameToData: Record<string, any> = {
    "Genshin" : genshinCharacters
  }

  const characterNames = Object.keys(gameToData[game]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setQuery(input);

    if (input.length > 0) {
      const filteredMatches = characterNames.filter(name =>
        name.toLowerCase().startsWith(input.toLowerCase())
      );
      setMatches(filteredMatches);
    } else {
      setMatches([]);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (query.length > 0) {
      const filteredMatches = characterNames.filter((name) =>
        name.toLowerCase().startsWith(query.toLowerCase())
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
      if (inputRef.current && !inputRef.current.contains(event.target as Node) && !(event.target instanceof HTMLElement && event.target.closest('.input-results'))) {
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
          ref={inputRef}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur} 
          placeholder="Search for a character..."
          style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        {matches.length > 0 && (
          <div className="input-results" >
            {matches.map((match) => (
              <div
                key={match}
                className="input-item"
                onClick={() => handleSelect(match)}
              >
                <img
                  src={`/src/assets/headshots/${game.toLowerCase()}/${match.replace(' ', '_')}.png`}
                  alt={match}
                  className="icon"
                />
                { 
                  <span style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>{match}</span>
                }
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