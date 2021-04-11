



function drawBoard(num, color) {
  //outer for loop adds num rows to container
  //inner for loop adds num boxes to each row
  const container = document.querySelector('#container');
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    row.setAttribute('id', `row${i}`);
    // row.textContent = i;
    let innerContainer = document.querySelector(`#row${i}`);
    for (let j = 0; j < num; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      // box.textContent = `row${i}, column${j}`;
      // box.style.textAlign = 'center';
      box.style.backgroundColor = color;
      innerContainer.appendChild(box);
    }
  }

}

drawBoard(50);


const secondarySelect = document.querySelector('#secondary-colors');

const board = document.querySelector('#container');
let clickedOnBoard = false;
board.addEventListener('mousedown', () => {
  clickedOnBoard = true;
  board.addEventListener('mouseup', () => { clickedOnBoard = false; })
});


// add event listener to change box color on hover

const draw = function (color) {
  const grid = document.querySelectorAll('.box');
  console.log('drawing');
  grid.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      if (clickedOnBoard) {
        grid.style.backgroundColor = color;
      }
    });
  });
  secondarySelect.value = color;
}
draw('blue');




const save = document.querySelector('#save');
save.addEventListener('click', () => {  
  html2canvas(document.querySelector("#container")).then(canvas => {
    //document.body.appendChild(canvas)
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    console.log(image);
    window.location.href = image;
  });
})

//code to reset screen and prompt user for screen size when pressing button
const btn = document.querySelector('button');
// function to clear screen prior to redrawing

function reset() {
  //code to delete all rows before redrawing with new size
  const rw = document.querySelectorAll('.row');
  rw.forEach((rw) => {
    rw.remove()
  });
  let getSize = function () {
    let n = -1;
    while (n < 1 || n > 100) {
      n = prompt('enter the size screen you want from 1-100');
      if (n < 1 || n > 100) {
        alert('Not a Valid Size');
      }
    }
    return n;
  }
  let colors = ['blue', 'red', 'green', 'yellow', 'black', 'orange', 'white', 'purple', 'gray','brown', 'tan','pink'];
  let size = getSize();
  let getColor = function () {
    let color;
    while (!colors.includes(color)) {
      color = prompt('Enter desired background color').toLowerCase();
      if (!colors.includes(color)) {
        alert('Invalid color, valid colors are: blue,red,green,yellow,black,orange,purple,gray,pink');
      }
    }
    return color;
  }

  let getSecondColor = function () {
    let color;
    while (!colors.includes(color)) {
      color = prompt('Enter desired drawing color').toLowerCase();
      if (!colors.includes(color)) {
        alert('Invalid color, valid colors are: blue,red,green,yellow,black,orange,purple,gray,brown,tan,pink');
      }
    }
    return color;
  }

  let color = getColor();
  let secondColor = getSecondColor();
  drawBoard(size, color);
  draw(secondColor);
  return;
}


secondarySelect.addEventListener("change", () => {
  const grid = document.querySelectorAll('.box');
  grid.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      if (clickedOnBoard) {
        grid.style.backgroundColor = secondarySelect.value;
      }

    });
  });
});


btn.addEventListener('click', () => {
  reset();
});


