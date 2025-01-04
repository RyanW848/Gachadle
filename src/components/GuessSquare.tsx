export default function GuessSquare(value:any = '', onChange:any) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={{
        width: '300px',
        height: '300px',
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: '1px solid black',
      }}
    />
  );
};
