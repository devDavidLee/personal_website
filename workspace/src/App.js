import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { motion, useScroll } from "framer-motion";

function App() {
  return (
    <div>

      <motion.div
        initial={{ x: '60vw', y: '24vh', opacity: 1 }}
        animate={{ x: '30vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>I</h1>
      </motion.div>

      <motion.div
        initial={{ x: '61vw', y: '24vh', opacity: 1 }}
        animate={{ x: '31vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>M</h1>
      </motion.div>

      <motion.div
        initial={{ x: '52vw', y: '24vh', opacity: 1 }} // 39
        animate={{ x: '34vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>F</h1>
      </motion.div>

      <motion.div
        initial={{ x: '36vw', y: '24vh', opacity: 1 }}
        animate={{ x: '35vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>E</h1>
      </motion.div>

      <motion.div
        initial={{ x: '38vw', y: '24vh', opacity: 1 }}
        animate={{ x: '36vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>A</h1>
      </motion.div>

      <motion.div
        initial={{ x: '37vw', y: '24vh', opacity: 1 }}
        animate={{ x: '37vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>R</h1>
      </motion.div>

      <motion.div
        initial={{ x: '31vw', y: '24vh', opacity: 1 }}
        animate={{ x: '38vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>L</h1>
      </motion.div>

      <motion.div
        initial={{ x: '31vw', y: '24vh', opacity: 1 }}
        animate={{ x: '39vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>E</h1>
      </motion.div>

      <motion.div
        initial={{ x: '34vw', y: '24vh', opacity: 1 }}
        animate={{ x: '40vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>S</h1>
      </motion.div>

      <motion.div
        initial={{ x: '35vw', y: '24vh', opacity: 1 }}
        animate={{ x: '41vw', y: '24vh', opacity: 1, rotateZ: 360 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>S</h1>
      </motion.div>

      {/* <Button style={{marginTop:100}} variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
