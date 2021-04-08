function Box({ height, width, backgroundColor, removeBox }) {
  return (
    <li>
      <div style={{ height, width, backgroundColor }}></div>
      <button onClick={removeBox}>X</button>
    </li>
  );
}

export default Box;