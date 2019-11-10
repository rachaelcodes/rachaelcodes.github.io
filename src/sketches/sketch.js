export default function sketch(p){
  let canvas;
  let positions = [];

  function randomTwinkle () {
    return Math.random() < 0.95 ? 2 : 1;
  }

  p.setup = () => {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    p.noStroke();
  }

  p.draw = () => {
    if (p.frameCount % 15 === 0) {
      p.clear();
      positions.forEach(pos => {
        p.circle(pos[0], pos[1], randomTwinkle())
      });
    }
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if (!canvas) {
      // canvas = p.createCanvas(newProps.dimensions.width, newProps.dimensions.height);
    }
    // if(canvas) //Make sure the canvas has been created
    //   {
        // console.log(newProps)
        positions = newProps.positions;
      // } // p.fill(newProps.color);

  }
}