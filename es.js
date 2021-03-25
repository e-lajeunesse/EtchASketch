



function drawBoard(num){
//outer for loop adds num rows to container
//inner for loop adds num boxes to each row
  const container = document.querySelector('#container');
  for (let i=0; i<num; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    row.setAttribute('id',`row${i}`);
    // row.textContent = i;
    let innerContainer = document.querySelector(`#row${i}`);
    for (let j=0; j<num; j++){
      const box = document.createElement('div');
      box.classList.add('box');
      // box.textContent = `row${i}, column${j}`;
      // box.style.textAlign = 'center';

      innerContainer.appendChild(box);
    }
  }
}

drawBoard(50);






// add event listener to change box color on hover

const draw = function() {
  const grid = document.querySelectorAll('.box');
  console.log('drawing');
  grid.forEach( (grid) =>{
     grid.addEventListener ('mouseover', () => {
       grid.style.backgroundColor = 'blue';
     });
   });
}
draw();

//code to reset screen and prompt user for screen size when pressing button
const btn = document.querySelector('button');
// function to clear screen prior to redrawing

function reset(){
  //code to delete all rows before redrawing with new size
  const rw = document.querySelectorAll('.row');
  rw.forEach( (rw) => {
    rw.remove()
  });
  let getSize = function(){
    n = -1;
    while (n<1 || n>100){
      n=prompt('enter the size screen you want from 1-100');
      if (n<1 || n>100){
        alert('Not a Valid Size');
      }
    }
    return n;
  }
  let size = getSize();
  drawBoard(size);
  draw();
  return;
}





btn.addEventListener('click', () => {

  reset();

});
