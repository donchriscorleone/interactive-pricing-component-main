// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
let pageView = 0;

const range = document.querySelector("input.input-range");
const headerText = document.querySelector("h2.card__header-text");
const price = document.querySelector("span.card__body-price");
const toggle = document.querySelector('input.toggle');

range.addEventListener('input', (e) => {
    changeValue(e.target.value);
})

toggle.addEventListener('click', (e) => {
    changeValue(e.target.value);
    console.log(toggle.checked)
})

function changeValue(value) {
    let p = value * 10000;
    if (toggle.checked) p = p - (p * .25);
    console.log(p);
    if (p <= 10000) changeContent(8, "10K")
    else if (p > 10000 && p <= 50000) changeContent(12, "50K")
    else if (p > 50000 && p <= 100000) changeContent(16, "100K")
    else if (p > 100000 && p <= 500000) changeContent(24, "500K")
    else if (p > 500000 && p <= 1000000) changeContent(36, "1M")
}

function changeContent(dollar, views) {
    price.innerHTML = '$' + dollar
    headerText.innerHTML = `${views} pageviews`
}