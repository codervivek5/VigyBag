const DarkModeToggle = () => {
  console.log("DarkModeToggle is rendering!"); // Debug log
  
  const handleClick = () => {
    console.log("Toggle clicked!");
    alert("Dark mode toggle clicked!");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: '#ff0000',
        color: 'white',
        border: '5px solid #000',
        padding: '15px 25px',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: 999999,
        position: 'relative'
      }}
    >
      TEST BUTTON - CLICK ME!
    </button>
  );
};

export default DarkModeToggle;