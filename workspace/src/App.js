import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { motion, useScroll } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ x:500, y:1, opacity:1}}
        animate={{ x:500, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>I</h1>
      </motion.div>

      <motion.div
        initial={{ x:700, y:200, opacity:1}}
        animate={{ x:510, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>M</h1>
      </motion.div>

      <motion.div
        initial={{ x:788, y:1, opacity:1}}
        animate={{ x:550, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>F</h1>
      </motion.div>
        {/* 여기까지 */}
      <motion.div
        initial={{ x:510, y:176, opacity:1}}
        animate={{ x:560, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>E</h1>
      </motion.div>

      <motion.div
        initial={{ x:10, y:30, opacity:1}}
        animate={{ x:570, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>A</h1>
      </motion.div>

      <motion.div
        initial={{ x:50, y:800, opacity:1}}
        animate={{ x:580, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>R</h1>
      </motion.div>

      <motion.div
        initial={{ x:500, y:176, opacity:1}}
        animate={{ x:590, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>L</h1>
      </motion.div>

      <motion.div
        initial={{ x:900, y:1, opacity:1}}
        animate={{ x:600, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>E</h1>
      </motion.div>

      <motion.div
        initial={{ x:100, y:1, opacity:1}}
        animate={{ x:550, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>S</h1>
      </motion.div>

      <motion.div
        initial={{ x:188, y:1, opacity:1}}
        animate={{ x:620, y:176, opacity:1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{color:'white', margin:0}}>S</h1>
      </motion.div>
      {/* <Button style={{marginTop:100}} variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
