const list = categories.children

// Вивід кількості категорій у консолі

let itemsInList = list.length
console.log(`Number of categories: ${itemsInList}`);

// Вивід назви і кількості елементів у списку

list.forEach(item => {
    const title = item.querySelector('h2');
  if (title) {
    console.log(`Category: ${title.textContent}`);
}
});
