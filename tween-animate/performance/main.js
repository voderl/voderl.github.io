const WIDTH = 32;
const HEIGHT = WIDTH;
function createZone() {
  const div = document.createElement('div');
  const el = document.createElement('canvas');
  el.width = WIDTH;
  el.height = HEIGHT;
  el.style.cssText = `
    width: 200px;
    height: 200px;
    image-rendering: pixelated;
  `;
  div.appendChild(el);
  div.style.cssText = `
    display: inline-block;
    background-color: black;
  `;
  document.body.appendChild(div);
  return el.getContext('2d');
}

function getImageData(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      resolve(ctx);
    };
    img.onerror = (err) => reject(err);
  });
}
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
  Animate.update();
}
requestAnimationFrame(animate);
(function () {
  async function tweenImageData() {
    const ctx = await getImageData('icons.png');
    (function () {
      const fromData = ctx.getImageData(0, 32 * 3, 32, 32);
      const toData = ctx.getImageData(0, 32 * 4, 32, 32);
      const playStage = createZone();
      playStage.putImageData(fromData, 0, 0);
      const btn = document.createElement('button');
      btn.innerText = 'get start with tween-animate v3';
      document.body.appendChild(btn);
      btn.addEventListener('click', () => {
        btn.disabled = true;
        Animate(toData.data, {
          time: 1000,
        })
          .transform('yoyo')
          .apply(fromData.data)
          .on('update', (v) => {
            playStage.putImageData(fromData, 0, 0);
          })
          .on('complete', () => (btn.disabled = false));
      });
    })();
    document.body.appendChild(document.createElement('br'));
    (function () {
      const { Animate, AnimationFrame, update, Transform, Easing } = Tween;
      const fromData = ctx.getImageData(0, 32 * 3, 32, 32);
      const toData = ctx.getImageData(0, 32 * 4, 32, 32);
      const playStage = createZone();
      playStage.putImageData(fromData, 0, 0);
      const btn = document.createElement('button');
      btn.innerText = 'get start with tween-animate v2';
      document.body.appendChild(btn);
      btn.addEventListener('click', () => {
        btn.disabled = true;
        Animate(toData.data)
          .transform('yoyo')
          .apply(fromData.data, 1000)
          .on('update', () => {
            playStage.putImageData(fromData, 0, 0);
          })
          .on('complete', () => (btn.disabled = false));
      });
    })();
    document.body.appendChild(document.createElement('br'));
    (function () {
      const fromData = ctx.getImageData(0, 32 * 3, 32, 32);
      const toData = ctx.getImageData(0, 32 * 4, 32, 32);
      const playStage = createZone();
      playStage.putImageData(fromData, 0, 0);
      const btn = document.createElement('button');
      btn.innerText = 'get start with tween.js';
      document.body.appendChild(btn);
      btn.addEventListener('click', () => {
        btn.disabled = true;
        new TWEEN.Tween(fromData.data)
          .to(toData.data, 1000)
          .onUpdate(() => {
            playStage.putImageData(fromData, 0, 0);
          })
          .repeat(1)
          .yoyo(true)
          .onComplete(() => (btn.disabled = false))
          .start();
      });
    })();
  }
  tweenImageData();
})();
