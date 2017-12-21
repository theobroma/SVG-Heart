const paper = Snap('#preloader__logo');
// By default its black, lets change its attributes
// paper.attr({
//   fill: '#bada55',
//   stroke: '#000',
//   strokeWidth: 5
// });

// const path = paper.path('M 10,50 L 100,200');
const renderNodes = i => {
  const node = paper.circle(pos[i].x, pos[i].y, 10);
  node.attr({
    fill: '#fff'
  });
};

const drawPath = i => {
  const path = paper
    .path(`M ${pos[i].x}, ${pos[i].y}`)
    .attr({
      fill: 'transparent',
      stroke: '#fff'
    })
    .animate(
      { d: `M ${pos[i].x}, ${pos[i].y} L ${pos[i + 1].x}, ${pos[i + 1].y}` },
      1000,
      mina.easeinout,
      function() {
        renderNodes(i);
        drawPath(i + 1);
      }
    );
};

pos = [
  {
    x: 298,
    y: 231
  },
  {
    x: 417,
    y: 227
  },
  {
    x: 500,
    y: 293
  },
  {
    x: 587,
    y: 221
  },
  {
    x: 687,
    y: 221
  },
  {
    x: 753,
    y: 287
  },
  {
    x: 772,
    y: 398
  },
  {
    x: 719,
    y: 467
  },
  {
    x: 500,
    y: 682
  },
  {
    x: 300,
    y: 496
  },
  {
    x: 233,
    y: 415
  },
  {
    x: 235,
    y: 306
  },
  {
    x: 298,
    y: 231
  }
];
const i = 0;
drawPath(i);
