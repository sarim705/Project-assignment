import React from 'react';
import Panel from './Panel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Panel />
      </div>
    </DndProvider>
  );
}

export default App;
