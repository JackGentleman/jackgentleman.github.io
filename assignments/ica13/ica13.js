const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  // alice1.animate(aliceTumbling, aliceTiming);

  // Problem #1
  // alice1.animate(aliceTumbling, aliceTiming).finished
  //   .then (() => {
  //     alice2.animate(aliceTumbling, aliceTiming).finished
  //       .then(() => {
  //         alice3.animate(aliceTumbling, aliceTiming);
  //       })
  //   })

  // Problem #2
  // alice1.animate(aliceTumbling, aliceTiming).finished
  //   .then (() => {
  //     return alice2.animate(aliceTumbling, aliceTiming).finished;
  //   })
  //   .then (() => {
  //     alice3.animate(aliceTumbling, aliceTiming);
  //   })

  // Problem #3
  async function animAlice () {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    alice3.animate(aliceTumbling, aliceTiming);
  }
  animAlice();