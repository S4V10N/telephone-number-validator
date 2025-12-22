// 5. When you click on the #check-btn element without entering a value into the #user-input element, an alert should appear with the text "Please provide a phone number".
// Failed:6. When you click on the #clear-btn element, the content within the #results-div element should be removed.
// Failed:7. When the #user-input element contains 1 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 555-555-5555".
// Failed:8. When the #user-input element contains 1 (555) 555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 (555) 555-5555".
// Failed:9. When the #user-input element contains 5555555555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 5555555555".
// Failed:10. When the #user-input element contains 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 555-555-5555".
// Failed:11. When the #user-input element contains (555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: (555)555-5555".
// Failed:12. When the #user-input element contains 1(555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1(555)555-5555".
// Failed:13. When the #user-input element contains 555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 555-5555".
// Failed:14. When the #user-input element contains 5555555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 5555555".
// Failed:15. When the #user-input element contains 1 555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 1 555)555-5555".
// Failed:16. When the #user-input element contains 1 555 555 5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 555 555 5555".
// Failed:17. When the #user-input element contains 1 456 789 4444 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 456 789 4444".
// Failed:18. When #user-input contains 123**&!!asdf# and #check-btn is clicked, #results-div should contain the text "Invalid US number: 123**&!!asdf#".
// Failed:19. When the #user-input element contains 55555555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 55555555".
// Failed:20. When the #user-input element contains (6054756961) and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (6054756961)".
// Failed:21. When the #user-input element contains 2 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2 (757) 622-7382".
// Failed:22. When the #user-input element contains 0 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 0 (757) 622-7382".
// Failed:23. When the #user-input element contains -1 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: -1 (757) 622-7382".
// Failed:24. When the #user-input element contains 2 757 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2 757 622-7382".
// Failed:25. When the #user-input element contains 10 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 10 (757) 622-7382".
// Failed:26. When the #user-input element contains 27576227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 27576227382".
// Failed:27. When the #user-input element contains (275)76227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (275)76227382".
// Failed:28. When the #user-input element contains 2(757)6227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2(757)6227382".
// Failed:29. When the #user-input element contains 2(757)622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2(757)622-7382".
// Failed:30. When the #user-input element contains 555)-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 555)-555-5555".
// Failed:31. When the #user-input element contains (555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (555-555-5555".
// Failed:32. When #user-input contains (555)5(55?)-5555 and #check-btn is clicked, #results-div should contain the text "Invalid US number: (555)5(55?)-5555".
// Failed:33. When the #user-input element contains 55 55-55-555-5 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 55 55-55-555-5".
// Failed:34. When the #user-input element contains 11 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 11 555-555-5555".
// Failed:35. When the #user-input element contains a valid US number and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: " followed by the number.
// Failed:36. When the #user-input element contains an invalid US number and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: " followed by the number.

const telNumber = document.querySelector("#user-input");
const resultsDiv = document.querySelector("#results-div");
const validTelNumber = document.querySelector(".tel-number");
const submitBtn = document.querySelector("#check-btn");
const resetBtn = document.querySelector("#clear-btn");

telNumber.addEventListener("input", () => {
    telNumber.value = telNumber.value.slice(0, 20);
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (telNumber.value.length === 0) {
        alert("Please provide a phone number");
        return;
    } else {
        resultsDiv.classList.remove("hidden");
        validTelNumber.innerHTML = telNumber.value;
    }
});

resetBtn.addEventListener("click", () => {
    resultsDiv.classList.add("hidden");
});
