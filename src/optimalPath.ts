// Imports
import axios from 'axios';

import { Coord } from './interfaces';

// Initializations
const optimalPath = async (start: Coord, end: Coord) => {
  const p5 = document.getElementById('p5') as HTMLInputElement;

  try {
    p5.style.cursor = 'wait';

    const { data }: { data: number[][] } = await axios.post(
      'http://localhost:5000/path',
      {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start, end }),
      }
    );

    p5.style.cursor = 'auto';

    return data;
  } catch (error) {
    console.error(error);
    p5.style.cursor = 'auto';
    return [];
  }
};

// Exports
export default optimalPath;
