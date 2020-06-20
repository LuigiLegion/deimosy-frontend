// Imports
import axios from 'axios';

import { Coord } from '../../interfaces';

// Initializations
const optimalPath = async (start: Coord, end: Coord) => {
  const p5 = document.getElementById('p5') as HTMLInputElement;
  const { cursor } = p5.style;

  try {
    p5.style.cursor = 'wait';

    const { data }: { data: number[][] } = await axios.post(
      process.env.REACT_APP_PATH_URL || '',
      {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start, end }),
      }
    );

    return data;
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    p5.style.cursor = cursor;
  }
};

// Exports
export default optimalPath;
