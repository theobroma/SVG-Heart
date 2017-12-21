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
      }
    );
};

pos = [
  {
    x: 218,
    y: 174
  },
  {
    x: 326,
    y: 170
  }
];
const i = 0;
drawPath(i);
