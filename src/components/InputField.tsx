import { useState, useEffect, useRef } from 'react';
import { genshinCharacters } from "../assets/gameData/genshin.tsx"

function InputField({ game } : { game: string }) {
  const [query, setQuery] = useState<string>('');
  const [matches, setMatches] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [noMatches, setNoMatches] = useState<boolean>(true);
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
        name.toLowerCase().includes(input.toLowerCase())
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
        name.toLowerCase().includes(query.toLowerCase())
      );
      setMatches(filteredMatches);
      setNoMatches(true);
    }
  };

  const handleSelect = (match: string) => {
    console.log("asda")
    setQuery(match);
    setMatches([]);
    setIsFocused(false);
    setNoMatches(true)
  };

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node) && !(event.target instanceof HTMLElement && event.target.closest('.input-results'))) {
        setMatches([]);
        setNoMatches(false);
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
                  <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>{match}</span>
                }
              </div>
            ))}
          </div>
        )}
        {isFocused && matches.length === 0 && query && noMatches && (
          <div 
            className="input-results"
            style={{padding: '4px', cursor: 'pointer', textAlign: 'center', border: '1px black solid' }}
          >
            No matches found
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;