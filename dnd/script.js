const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// Item Lists
const listColumns = document.querySelectorAll('.drag-item-list');
const backlogList = document.getElementById('backlog-list');
const progressList = document.getElementById('progress-list');
const completeList = document.getElementById('complete-list');
const progressList1 = document.getElementById('progress-list1');
const completeList1 = document.getElementById('complete-list1');
const onHoldList = document.getElementById('on-hold-list');

// console.log(listColumns[0]);

// Items
let updatedOnLoad = false;

// Initialize Arrays
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let progressListArray1 = [];
let completeListArray1 = [];
let onHoldListArray = [];
let listArrays = []

// Drag Functionality
let draggedItem;
let dragging = false;
let currentColumn;

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns() {
  if (localStorage.getItem('backlogItems')) {
    backlogListArray = JSON.parse(localStorage.backlogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    progressListArray1 = JSON.parse(localStorage.pg1Items);
    completeListArray1 = JSON.parse(localStorage.cmp1Items);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    backlogListArray = ['Release the course', 'Sit back and relax'];
    progressListArray = ['Work on projects', 'Listen to music'];
    completeListArray = ['Being cool', 'Getting stuff done'];
    progressListArray1 = ['CSAT', 'Geaography'];
    completeListArray1 = ['Sophisticated', 'Hello World'];
    onHoldListArray = ['Being uncool'];
  }
}

// getSavedColumns();
// updateSavedColumns();



// Set localStorage Arrays
function updateSavedColumns() {
  listArrays = [backlogListArray, onHoldListArray, progressListArray, completeListArray, progressListArray1, completeListArray1];
  const arrayNames = ['backlog', 'onHold', 'progress', 'complete', 'pg1', 'cmp1'];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
  });
  // localStorage.setItem('backlogItems', JSON.stringify(backlogListArray));
  // localStorage.setItem('onHoldItems', JSON.stringify(onHoldListArray));
  // localStorage.setItem('progressItems', JSON.stringify(progressListArray));
  // localStorage.setItem('completeItems', JSON.stringify(completeListArray));
  // localStorage.setItem('progressItems1', JSON.stringify(progressListArray1));
  // localStorage.setItem('completeItems1', JSON.stringify(completeListArray1));
}

function filterArray(array) {
  const filteredArray = array.filter(item => item !== null)
  return filteredArray
}

// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
  // console.log('columnEl:', columnEl);
  // console.log('column:', column);
  // console.log('item:', item);
  // console.log('index:', index);
  // List Item
  const listEl = document.createElement('li');
  listEl.classList.add('drag-item');
  listEl.textContent = item;
  listEl.draggable = true;
  listEl.setAttribute('ondragstart', 'drag(event)')
  listEl.contentEditable = true;
  listEl.id = index;
  listEl.setAttribute('onfocusout', `updateItem(${index}, ${column})`)
  // Append //
  columnEl.appendChild(listEl)

}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  // Check localStorage once
  if (!updatedOnLoad) {
    getSavedColumns();
  }
  // Backlog Column
  backlogList.textContent = '';
  backlogListArray.forEach((backlogItem, index) => {
    createItemEl(backlogList, 0, backlogItem, index);
  })
  backlogListArray = filterArray(backlogListArray)

  // On Hold Column
  onHoldList.textContent = '';
  onHoldListArray.forEach((onHoldItem, index) => {
    createItemEl(onHoldList, 1, onHoldItem, index);
  })
  onHoldListArray = filterArray(onHoldListArray)

  // Progress Column
  progressList.textContent = '';
  progressListArray.forEach((progressItem, index) => {
    createItemEl(progressList, 2, progressItem, index);
  })
  progressListArray = filterArray(progressListArray)

  // Progress Column1
  progressList1.textContent = '';
  progressListArray1.forEach((pg1Items, index) => {
    createItemEl(progressList1, 3, pg1Items, index);
  })
  progressListArray1 = filterArray(progressListArray1)

  // Complete Column
  completeList.textContent = '';
  completeListArray.forEach((completeItem, index) => {
    createItemEl(completeList, 4, completeItem, index);
  })
  completeListArray = filterArray(completeListArray)

  // Complete Column1
  completeList1.textContent = '';
  completeListArray1.forEach((cmp1, index) => {
    createItemEl(completeList1, 5, cmp1, index);
  })
  completeListArray1 = filterArray(completeListArray1)



  // Run getSavedColumns only once, Update Local Storage
  updatedOnLoad = true;
  updateSavedColumns();

}

function updateItem(id, column) {
  const selectedArray = listArrays[column];
  const selectedColumnEl = listColumns[column].children;
  if (!dragging) {
    if (!selectedColumnEl[id].textContent) {
      delete selectedArray[id];
    } else {
      selectedArray[id] = selectedColumnEl[id].textContent;
    }
    updateDOM()
  }
}


function addToColumn(column) {
  const itemText = addItems[column].textContent;
  const selectedArray = listArrays[column];
  selectedArray.push(itemText);
  addItems[column].textContent = ''
  updateDOM();
  // console.log(addItems[column].textContent);
}

function showinputBox(column) {
  addBtns[column].style.visibility = 'hidden';
  saveItemBtns[column].style.display = 'flex';
  addItemContainers[column].style.display = 'flex';

}

function hideinputBox(column) {
  addBtns[column].style.visibility = 'visible';
  saveItemBtns[column].style.display = 'none';
  addItemContainers[column].style.display = 'none';
  addToColumn(column)
}

function rebuildArrays() {
  backlogListArray = []
  for (let i = 0; i < backlogList.children.length; i++) {
    backlogListArray.push(backlogList.children[i].textContent)
  }
  onHoldListArray = []
  for (let i = 0; i < onHoldList.children.length; i++) {
    onHoldListArray.push(onHoldList.children[i].textContent)
  }
  progressListArray = []
  for (let i = 0; i < progressList.children.length; i++) {
    progressListArray.push(progressList.children[i].textContent)
  }
  completeListArray = []
  for (let i = 0; i < completeList.children.length; i++) {
    completeListArray.push(completeList.children[i].textContent)
  }
  progressListArray1 = []
  for (let i = 0; i < progressList1.children.length; i++) {
    progressListArray1.push(progressList1.children[i].textContent)
  }
  completeListArray1 = []
  for (let i = 0; i < completeList1.children.length; i++) {
    completeListArray1.push(completeList1.children[i].textContent)
  }

  updateDOM()
}

function drag(e) {
  draggedItem = e.target;
  dragging = true;
}

function dragEnter(column) {
  listColumns[column].classList.add('over')
  currentColumn = column
}


function allowDrop(e) {
  e.preventDefault();

}

function drop(e) {
  e.preventDefault()
  const parent = listColumns[currentColumn]
  listColumns.forEach((column) => {
    column.classList.remove('over')
  })
  parent.appendChild(draggedItem)
  dragging = false
  rebuildArrays()
}



updateDOM()



