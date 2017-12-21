const paper = Snap('#preloader__logo');
// By default its black, lets change its attributes
// paper.attr({
//   fill: '#bada55',
//   stroke: '#000',
//   strokeWidth: 5
// });

// const path = paper.path('M 10,50 L 100,200');
const renderNodes = i => {
  const node = paper.circle(pos[i].x, pos[i].y, Math.random() * (10 - 3) + 3);
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
      50,
      mina.easeinout,
      function() {
        renderNodes(i);
        drawPath(i + 1);
      }
    )
    .animate({ stroke: '#A3E2F5' }, 5000);
};

pos = [
  {
    x: 298, //1
    y: 231
  },
  {
    x: 417, //2
    y: 227
  },
  {
    x: 500, //3
    y: 293
  },
  {
    x: 587, //4
    y: 221
  },
  {
    x: 687, //5
    y: 221
  },
  {
    x: 753, //6
    y: 287
  },
  {
    x: 772, //7
    y: 398
  },
  {
    x: 719, //8
    y: 467
  },
  {
    x: 500, //9
    y: 682
  },
  {
    x: 300, //10
    y: 496
  },
  {
    x: 233, //11
    y: 415
  },
  {
    x: 235, //12
    y: 306
  },
  {
    x: 298, //1
    y: 231 //last in heart border
  },
  {
    x: 365, //13
    y: 252
  },
  {
    x: 417, //2
    y: 227
  },
  {
    x: 353, //14
    y: 354
  },
  {
    x: 298, //1
    y: 231
  },
  {
    x: 235, //12
    y: 306
  },
  {
    x: 353, //14
    y: 354
  },
  {
    x: 233, //11
    y: 415
  },
  {
    x: 300, //10
    y: 496
  },
  {
    x: 353, //14
    y: 354
  },
  {
    x: 403, //16
    y: 579
  },
  {
    x: 579, //17
    y: 585
  },
  {
    x: 462, //18
    y: 630
  },
  {
    x: 500, //9
    y: 682
  },
  {
    x: 403, //16
    y: 579
  },
  {
    x: 579, //17
    y: 585
  },
  {
    x: 541, //19
    y: 392
  },
  {
    x: 403, //16
    y: 579
  },
  {
    x: 353, //14
    y: 354
  },
  {
    x: 500, //3
    y: 293
  },
  {
    x: 541, //19
    y: 392
  },
  {
    x: 403, //16
    y: 579
  },
  {
    x: 462, //18
    y: 630
  },
  {
    x: 579, //17
    y: 585
  },
  {
    x: 634, //20
    y: 544
  },
  {
    x: 645, //21
    y: 517
  },
  {
    x: 541, //19
    y: 392
  },
  {
    x: 719, //8
    y: 467
  },
  {
    x: 645, //21
    y: 517
  },
  {
    x: 541, //19
    y: 392
  },
  {
    x: 772, //7
    y: 398
  },
  {
    x: 695, //22
    y: 246
  },
  {
    x: 587, //4
    y: 221
  },
  {
    x: 687, //5
    y: 221
  },
  {
    x: 695, //22
    y: 246
  },
  {
    x: 687, //5
    y: 221
  },
  {
    x: 541, //19
    y: 392
  }
];
const i = 0;
drawPath(i);
