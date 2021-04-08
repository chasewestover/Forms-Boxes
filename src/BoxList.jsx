import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid';

function BoxList() {
  const [boxList, setBoxList] = useState([]);

  function removeBox(box){
    setBoxList(blist => blist.filter(b => b !== box));
  }

  function addBox(box) {
    box.key = uuid()
    setBoxList(blist => [...blist, box]);
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <ul>
      {boxList.map(box => (
        <Box
          height={box.height}
          width={box.width}
          backgroundColor={box.backgroundColor}
          removeBox={() => removeBox(box)}/>
      ))}
      </ul>
    </div>
  );
}

export default BoxList;