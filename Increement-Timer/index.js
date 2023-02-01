const count = document.querySelectorAll(".counter");
// console.log(count);
count.forEach((counter) => {
  // console.log(counter);
  counter.innerHTML = 0;
  const updateCount = () => {
    const startCount = Number(counter.innerHTML);
    const endCount = +counter.getAttribute("data-target");
    const incr = endCount / 100;
    if (startCount < endCount) {
      counter.innerHTML = `${startCount + incr}`;
      setTimeout(updateCount, 10);
    } else {
      counter.innerHTML = endCount;
    }
  };
  updateCount();
});
