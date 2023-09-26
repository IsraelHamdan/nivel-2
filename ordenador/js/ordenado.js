var numbers = [];
var sortedNumbers = [];

const getDataFromUser = () => {
  const getBtn = document.getElementById("btn");
  getBtn.addEventListener("click", () => {
    const getValueFromImput = parseInt(document.getElementById("value").value);
    if (!isNaN(getValueFromImput)) {
      numbers.push(getValueFromImput);
    }
    document.getElementById("value").value = "";
    postListToUser(numbers);
  });
};

const postListToUser = (numbers) => {
  const getList = document.getElementById("list");
  getList.innerHTML = numbers
    .map((i) => `<li>${i}</li>`)
    .reduce((a, i) => a + i, "");
  sortedNumbers = [...numbers];
};

const order = () => {
  const getSelect = document.getElementById("select");
  const getBtnOrdernate = document.getElementById("ordenateBtn");
  let start, end;

  getBtnOrdernate.addEventListener("click", () => {
    const getSelectOption = getSelect.value;
    switch (getSelectOption) {
      case "buble":
        bubleSort([...numbers]);
        break;
      case "selection":
        selectionSort([...numbers]);
        break;
      case "insert":
        insertionSort([...numbers]);
        break;
      case "quick":
        start = 0;
        end = numbers.length - 1;
        quickSort([...numbers], start, end);
        break;
      default:
        console.log([...numbers]);
    }
  });
};

const bubleSort = (num) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i] > num[i + 1]) {
        swap(num, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  postListToUser(num);
};

const swap = (num, i, j) => {
  const temp = num[i];
  num[i] = num[j];
  num[j] = temp;
};

const selectionSort = (num) => {
  let small;

  for (let i = 0; i < num.length - 1; i++) {
    small = i;
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] < num[small]) {
        small = j;
      }
    }
    if (small !== i) {
      [num[i], num[small]] = [num[small], num[i]];
    }
  }
  postListToUser(num);
};

const insertionSort = (num) => {
  let current;
  for (let i = 1; i < num.length; i++) {
    let j = i - 1;
    current = num[i];
    while (j >= 0 && current < num[j]) {
      num[j + 1] = num[j];
      j--;
    }
    num[j + 1] = current;
  }
  const numbersOrderd = [...num];
  postListToUser(numbersOrderd);
  return numbersOrderd;
};

const quickSort = (numbers, start, end) => {
  if (start < end) {
    const pivotIndex = partition(numbers, start, end);
    quickSort(numbers, start, pivotIndex - 1);
    quickSort(numbers, pivotIndex + 1, end);
  }
};

const partition = (numbers, start, end) => {
  const pivot = numbers[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (numbers[j] < pivot) {
      i++;
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  }

  [numbers[i + 1], numbers[end]] = [numbers[end], numbers[i + 1]];
  return i + 1;
};

const shuffle = () => {
  const getMixBtn = document.getElementById("shuffle");
  getMixBtn.addEventListener("click", () => {
    for (let i = sortedNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sortedNumbers[i], sortedNumbers[j]] = [
        sortedNumbers[j],
        sortedNumbers[i],
      ];
    }
    postListToUser(sortedNumbers);
  });
};

order();
shuffle(numbers);
getDataFromUser();
