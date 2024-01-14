
import React from "react";
import './../styles/App.css';

const App = () => {

  const data = { temperature: 25, 
                 conditions: "Sunny" }



  return (
    <div>
        {/* Do not remove the main div */}
        {
          (data.temperature > 20 && <p style={{color : "red"}}>{data.conditions} </p>) || (data.temperature < 20 && <p style={{color : "blue"}}>{data.conditions}</p>)
        }
      

    </div>
  )
}

export default App
