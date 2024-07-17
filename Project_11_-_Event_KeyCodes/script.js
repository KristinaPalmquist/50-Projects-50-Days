const insert = document.getElementById('insert');
// const keys = document.getElementsByClassName('key');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>`;
  //   keys[0].innerText = e.key;
  //   keys[1].innerText = e.keyCode;
  //   keys[2].innerText = e.code;
});
