const createbutton = document.getElementById('btn');
const gridSize = document.getElementById('size');
const gridContainer = document.querySelector('.grid-container');
//gridContainer.style.gridTemplateColumns = repeat(4, 1fr);

createbutton.addEventListener('click', () => {
    //alert(prompt("enter number of rows and columns"))
    const size = Number(gridSize.value);
    createGrid(size);
})

function createGrid(size) {
    gridContainer.innerHTML = '';
    // gridContainer.style.gridTemplateColumns = repeat(8, 1fr);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for(let i = 0; i < size * size; i++){
    const div = document.createElement('div');
    div.className = 'item';
    gridContainer.appendChild(div);

}

const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
    item.addEventListener('click',() => {
       const rowInd = Math.floor(index / size);
       const colInd = index % size;
       //row
       for (let i = rowInd * size; i < (rowInd * size) + size; i++){
        items[i].style.backgroundColor = 'red';
        items[i].classList.add('red');  
       }

       //col
       for (let i = colInd; i < items.length; i += size){
        items[i].style.backgroundColor = 'red';
        items[i].classList.add('red');  
       }

       for (let i = index; i < items.length; i += size+1) {
        if (Math.floor(i / size) - rowInd === (i % size) - colInd) {
            items[i].style.backgroundColor = 'red';
            items[i].classList.add('red');
        }
        }

       for (let i = index; i >= 0; i -= size+1) {
        if (Math.floor(i / size) - rowInd === (i % size) - colInd) {
            items[i].style.backgroundColor = 'red';
            items[i].classList.add('red');
        }
        }

        for (let i = index; i < items.length; i += size-1) {
            if (Math.floor(i / size) - rowInd === colInd - (i % size)) {
                items[i].style.backgroundColor = 'red';
                items[i].classList.add('red');
            }
        }
        for (let i = index; i >= 0; i -= size-1) {
            if (Math.floor(i / size) - rowInd === colInd - (i % size)) {
                items[i].style.backgroundColor = 'red';
                items[i].classList.add('red');
            }
        }
        item.style.backgroundColor = 'blue';
        item.classList.add('blue');
    })
})
}

//  items.forEach((item, index) => {
//      item.addEventListener('click',() => {
//          const rowIndex = Math.floor(index / 4);
//          const columnIndex = index % 4;

//          for (let i = 0; i < 16; i++) {
//              if (Math.floor(i / 4) === rowIndex || i % 4 === columnIndex) {
//                  items[i].style.backgroundColor = 'red';
//              }
//          }

//          item.style.backgroundColor = 'blue';
//      })
//  })


//items.forEach((item, index) => {
//        item.addEventListener('click',() => {
//            for(let i=0; i < items.length; i++){
//                let j = 1
//                for(let count = 0; count < 4; count++){
//                    items[j].style.backgroundColor = 'red';
//                    j += 4;
//                }
//                j=1;
//                for(let count = 0; count < 4; count++) {
//                    items[j].style.backgroundColor = 'red';
//                    j -= 4;
//                }
//            }
        
//            item.style.backgroundColor = 'blue';
//        })
//    })




// items.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         const row = Math.floor(index / 8);
//         const col = index % 8

//         item.style.backgroundColor = 'blue';
//         for(let i = 0; i < 8; i++) {
//             items[row + i].style.backgroundColor = 'red';
//             items[i * 8 + col].style.backgroundColor = 'red';
//         }
//     })
// })

/*for(let i = 0; i < 64; i++){
    const div = document.createElement('div');
    div.className = 'item';
    gridContainer.appendChild(div);
}
const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
    item.addEventListener('click',() => {
       const rowInd = Math.floor(index / 8);
       const colInd = index % 8;

       for (let i = rowInd * 8; i < (rowInd * 8) + 8; i++){
        items[i].style.backgroundColor = 'red';
        items[i].classList.add('red');  
       }


       for (let i = colInd; i < items.length; i += 8){
        items[i].style.backgroundColor = 'red';
        items[i].classList.add('red');  
       }

        item.style.backgroundColor = 'blue';
        item.classList.add('blue');
    })
})*/



