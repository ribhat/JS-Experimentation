import { useState } from "react";

import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import FirstButton from "./Components/TestButton";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is an alert
        </Alert>
      )}
      <FirstButton color="primary" onClick={() => setAlertVisibility(true)}>
        This is a button
      </FirstButton>
    </div>
  );
}

export default App;
