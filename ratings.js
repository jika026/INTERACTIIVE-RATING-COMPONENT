const rates = document.querySelectorAll(".rates div");
const submit = document.querySelector(".submit");
const submitText = document.querySelector(".submit a");
const container = document.querySelector(".container");
let value;
submitText.addEventListener("click", (event) => {
  event.preventDefault();
});
// To select a particular rating

rates.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    value = e.target.dataset.num;
    rates.forEach((otherRate) => {
      if (otherRate !== rate) {
        otherRate.classList.remove("rate-active");
      }
    });
    rate.classList.toggle("rate-active");
  });
  rate.addEventListener("mouseover", () => {
    const paragraph = rate.querySelector("p");
    paragraph.style.color = "white";
  });
  rate.addEventListener("mouseout", () => {
    const paragraph = rate.querySelector("p");
    paragraph.style.color = "";
  });
});
// to submit the rating chosen

submit.addEventListener("click", () => {
  if (value != null) {
    container.innerHTML = `
    <div class="thanks-container">
        <div style="margin-block: 3rem;">
            <img src="images/illustration-thank-you.svg" alt="" />
        </div>
        <div class="selection" style="margin-bottom: 3rem; padding: 0.5rem 1.5rem; border-radius: 24px;">
            <p>You selected  ${value} out of 5</p>
        </div>
        <div class="head">
            <h1>Thank you!</h1>
        </div>
        <div class="appreciation" style="text-align: center;">
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
