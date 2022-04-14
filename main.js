let chess = []

for (let i = 8; i >= 1; i--) {
  for (let j = 1; j <= 8; j++) {
    let obj = {
      y: i,
      x: j,
    }
    chess.push(obj)
  }
}

let list = document.querySelector('.chess__list');

chess.forEach((items) => {
  let n;
  let li = document.createElement('li');
  li.className = "chess__item"
  n = items.x + items.y
  if (n % 2 != 0) {
    li.classList.add('itemWhite');
  } else {
    li.classList.add('itemBlack');
  }
  li.innerHTML = `
            <span class="span1">${items.y}</span>
            <span class="span2">${items.x}</span>`;
  list.appendChild(li);
})

let items = document.querySelectorAll('.chess__item');
let span1 = document.querySelectorAll('.span1');
let span2 = document.querySelectorAll('.span2');
let yNum = document.querySelector('.y-num');
let xNum = document.querySelector('.x-num');
let x, y;
let count = 1;


// let chessBtn = document.querySelectorAll('#chess__btn');
let chessBtn1 = document.querySelector('#chess__btn1');
let chessBtn2 = document.querySelector('#chess__btn2');
let chessBtn3 = document.querySelector('#chess__btn3');
let chessBtn4 = document.querySelector('#chess__btn4');
let chessBtn5 = document.querySelector('#chess__btn5');
let chessBtn6 = document.querySelector('#chess__btn6');

function turan() {
  chessBtn1.addEventListener('click', () => {
    chessBtn1.classList.add('forms__act');
    chessBtn2.classList.remove('forms__act');
    chessBtn3.classList.remove('forms__act');
    chessBtn4.classList.remove('forms__act');
    chessBtn5.classList.remove('forms__act');
    chessBtn6.classList.remove('forms__act');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('movItem')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('movItem')
        })
        e.classList.add('movItem')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn1.addEventListener('click', forms1(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} turan()


function hourse() {
  chessBtn2.addEventListener('click', () => {
    chessBtn1.classList.remove('forms__act');
    chessBtn2.classList.add('forms__act');
    chessBtn3.classList.remove('forms__act');
    chessBtn4.classList.remove('forms__act');
    chessBtn5.classList.remove('forms__act');
    chessBtn6.classList.remove('forms__act');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('movItem')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('movItem')
        })
        e.classList.add('movItem')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn1.addEventListener('click', forms2(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} hourse()


function bishop() {
  chessBtn3.addEventListener('click', () => {
    chessBtn1.classList.remove('forms__act');
    chessBtn2.classList.remove('forms__act');
    chessBtn3.classList.add('forms__act');
    chessBtn4.classList.remove('forms__act');
    chessBtn5.classList.remove('forms__act');
    chessBtn6.classList.remove('forms__act');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('movItem')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('movItem')
        })
        e.classList.add('movItem')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn3.addEventListener('click', forms3(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} bishop()


function quenn() {
  chessBtn4.addEventListener('click', () => {
    chessBtn1.classList.remove('forms__act');
    chessBtn2.classList.remove('forms__act');
    chessBtn3.classList.remove('forms__act');
    chessBtn4.classList.add('forms__act');
    chessBtn5.classList.remove('forms__act');
    chessBtn6.classList.remove('forms__act');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('movItem')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('movItem')
        })
        e.classList.add('movItem')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn4.addEventListener('click', forms4(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} quenn()


function king() {
  chessBtn5.addEventListener('click', () => {
    chessBtn1.classList.remove('forms__act');
    chessBtn2.classList.remove('forms__act');
    chessBtn3.classList.remove('forms__act');
    chessBtn4.classList.remove('forms__act');
    chessBtn5.classList.add('forms__act');
    chessBtn6.classList.remove('forms__act');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('movItem')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('movItem')
        })
        e.classList.add('movItem')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn5.addEventListener('click', forms5(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} king()


function paw() {
  chessBtn6.addEventListener('click', () => {
    chessBtn1.classList.remove('forms__act');
    chessBtn2.classList.remove('forms__act');
    chessBtn3.classList.remove('forms__act');
    chessBtn4.classList.remove('forms__act');
    chessBtn5.classList.remove('forms__act');
    chessBtn6.classList.add('forms__act');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('movItem')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('movItem')
        })
        e.classList.add('movItem')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn6.addEventListener('click', forms6(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} paw()



function itemsFun() {
  items.forEach((e) => {
    e.addEventListener('mouseout', () => {
      e.classList.remove('movItem')
    })
    e.addEventListener('mouseover', () => {
      items.forEach((ee) => {
        ee.classList.remove('movItem')
      })
      e.classList.add('movItem')
      xNum.innerHTML = e.childNodes[1].textContent;
      yNum.innerHTML = e.childNodes[3].textContent;
    })
    e.classList.remove('movItem')
  })
} itemsFun()


function forms1(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == x || itmm.childNodes[3].textContent == y) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function forms2(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 1) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function forms3(x, y) {
  items.forEach((itmm) => {
    if (
      itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
      itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
      itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
      itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
      itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
      itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function forms4(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == x || itmm.childNodes[3].textContent == y) {
      itmm.classList.add('green')
    }
    else if (
      itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
      itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
      itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
      itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
      itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
      itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function forms5(x, y) {
  items.forEach((itmm) => {
    console.log(x, y);
    if (itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) ||
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) ||
      itmm.childNodes[1].textContent == eval(x) && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1
    ) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function forms6(x, y) {
  items.forEach((itmm) => {
    console.log(x, y);
    if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) && itmm.childNodes[1].textContent != x && x != 1 ||
      x == 2 && itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y)) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

list.addEventListener('mouseout', () => {
  items.forEach((im) => {
    im.classList.remove('green')
  })
})

