
import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content";

function App() {
  return (
    <div>
      <div>
        {accordionData.map(({ title, content})=> {
         return <Accordion title={title} content={content}/>
          
        })}
    </div>

   </div>
  );
}

export default App;
