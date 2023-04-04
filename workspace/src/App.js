import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { motion,useScroll} from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div
        className='box'
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      />
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
