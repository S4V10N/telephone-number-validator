const telNumber = document.querySelector("#user-input");
const resultsDiv = document.querySelector("#results-div");
const submitBtn = document.querySelector("#check-btn");
const resetBtn = document.querySelector("#clear-btn");

telNumber.addEventListener("input", () => {
    telNumber.value = telNumber.value.replace(/[a-z]/gi, "").slice(0, 20);
});
const regex = /^(?:1\s?)?(?:\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (telNumber.value.length === 0) {
        alert("Please provide a phone number");
        return;
    } else {
        if (regex.test(telNumber.value)) {
            resultsDiv.innerHTML = `Valid US number: ${telNumber.value}`;
            return;
        } else {
            resultsDiv.innerHTML = `Invalid US number: ${telNumber.value}`;
            return;
        }
    }
});

resetBtn.addEventListener("click", () => {
    resultsDiv.innerHTML = "";
});
