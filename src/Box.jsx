function Box({ height, width, backgroundColor, removeBox }) {
  return (
    <div>
      <div className="Box-box" style={{ height, width, backgroundColor }}></div>
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;