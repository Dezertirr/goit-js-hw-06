const list = document.querySelectorAll('#categories .item')

// Вивід кількості категорій у консолі

console.log(`Number of categories: ${list.length}`);

// Вивід назви і кількості елементів у списку


list.forEach ((category) => {
  let title = category.querySelector('h2').textContent;
  let cutEl = category.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${cutEl}`);
})