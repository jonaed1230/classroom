const orderedList = document.querySelector(".coronavirus-list")
const fetchData = async () => {
  const data = await fetch("https://api.covidtracking.com/v2/us/daily.json").then((res) => res.json()).then((data) => data.data).catch((err) => console.error(err));
  data.map(el => {
    const item = document.createElement("li");
    item.classList.add("list-item");
    item.innerHTML = `
      <span class="date">Date: ${el.date}</span>
      <span class="total-case">Total Case: ${el.cases.total.value}</span>
      <span class="total-death">Dead: ${el.outcomes.death.total.value}</span>
      <span class="total-icu">In ICU: ${el.outcomes.hospitalized.in_icu.currently.value}</span>
      <span class="total-ventilator">In Vantilator: ${el.outcomes.hospitalized.on_ventilator.currently.value}</span>
    `;
    orderedList.appendChild(item);
  })
}

fetchData();

// const wait = (time) => new Promise(resolve => setTimeout(resolve, time));

// 1000 * 60 // 1 minute
// 1000 * 60 * 60 // 1 hour
// 1000 * 60 * 60 * 24 // 1 day

// 1000 * 60 * 60 * 24 * 7

// const watchWait = async () => {
//   console.log("You can see me");
//   await wait(3000);
//   console.log("You can see me after 3 second");
//   await wait(10000);
//   console.log("You can see me after 10 second");
// }

// watchWait();
