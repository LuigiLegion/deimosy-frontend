// Imports
import { P, Img, Coord } from './interfaces';
import optimalPath from './optimalPath';

// Initializations
const sketch = (p: P) => {
  let img: Img;
  let start: Coord = { x: null, y: null };
  let end: Coord = { x: null, y: null };
  let path: number[][] = [];
  let paths: number[][][] = [];

  p.preload = async () => {
    img = await p.loadImage('http://localhost:5000/static/1.png');
  };

  p.setup = () => {
    const { width, height, pixels } = img;
    const map: number[][] = [];

    p.pixelDensity(1);
    p.createCanvas(width, height);
    p.frameRate(12);
    p.image(img, 0, 0);

    img.loadPixels();
    p.loadPixels();

    const d = p.pixelDensity();

    for (let x = 0; x < width; x++) {
      map.push([]);

      for (let y = 0; y < height; y++) {
        const idx = (Math.round(x * d) + Math.round(y * d) * width) * 4;
        map[x].push(Math.floor(pixels[idx]));
      }
    }
  };

  p.draw = () => {
    p.smooth();
    p.noFill();

    if (paths.length) {
      paths.forEach(path => {
        p.stroke(90, 180, 30);
        p.strokeWeight(2);

        p.beginShape();

        p.curveVertex(path[0][0], path[0][1]);
        for (let i = 1; i < path.length; i += 10) {
          p.curveVertex(path[i][0], path[i][1]);
        }
        p.curveVertex(path[path.length - 1][0], path[path.length - 1][1]);

        p.endShape();

        p.strokeWeight(1);
        p.ellipse(path[path.length - 1][0], path[path.length - 1][1], 20, 20);
        p.strokeWeight(1);
        p.ellipse(path[path.length - 1][0], path[path.length - 1][1], 30, 30);

        start = end;
        end = { x: null, y: null };
        paths = [];
      });
    }

    p.noStroke();
    p.fill(90, 180, 30);

    if (start.x && !end.x) {
      p.ellipse(start.x, start.y, 10, 10);
    } else if (start.x && end.x) {
      p.ellipse(end.x, end.y, 10, 10);
    }
  };

  p.mousePressed = async () => {
    if (!start.x && !start.y && p.mouseY > 0) {
      start.x = Math.ceil(p.mouseX);
      start.y = Math.ceil(p.mouseY);
    } else if (start.x && start.y && p.mouseY > 0) {
      end.x = Math.ceil(p.mouseX);
      end.y = Math.ceil(p.mouseY);

      path = await optimalPath(start, end);

      if (path) {
        paths.push(path);
      }
    }
  };

  p.myCustomRedrawAccordingToNewPropsHandler = () => {
    if (path.length) {
      start.x = null;
      start.y = null;
      end.x = null;
      end.y = null;
      path = [];
      paths = [];
      p.image(img, 0, 0);
    }
  };
};

// Exports
export default sketch;
