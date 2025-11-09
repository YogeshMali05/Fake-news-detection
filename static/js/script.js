/*document.getElementById("newsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const input = document.getElementById("userInput").value.trim();
    const resultDiv = document.getElementById("result");

    // Placeholder for prediction logic (you can replace this with actual prediction logic)
    let prediction;

    // Simple logic to determine "real" or "fake"
    if (prediction == "True") {
        resultDiv.textContent = "This is a Real News.";
        resultDiv.style.color = "green";
        resultDiv.style.fontSize = "16px";
    } else if (prediction == "Fake") {
        resultDiv.textContent = "This is a Fake News.";
        resultDiv.style.color = "red";
        resultDiv.style.fontSize = "16px";
    } else {
        resultDiv.textContent = "NO Data Match !!";
        resultDiv.style.color = "orange";
        resultDiv.style.fontSize = "16px";
    }

    document.getElementById("userInput").value = '';
    document.getElementById("userInput").focus();

});

console.log("js");
function showfake()
{
    document.getElementById("real").style.visibility="hidden";
    document.getElementById("fakepara").style.visibility="visible";
}
function showreal()
{
    document.getElementById("fake").style.visibility="hidden";
    document.getElementById("realpara").style.visibility="visible";
}



*/




window.addEventListener("load", function() {
    // Check if the page is being loaded for the first time or reloaded
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // Redirect to the home page
        window.location.href = '/'; // Change this to your home route
    }
});




const toggleButton = document.getElementById("toggleButton").querySelector('input');
const body = document.body;
const font = document.querySelector("h1");
const but = document.querySelector(".chng");
    


    toggleButton.addEventListener("click", function() {
        if (toggleButton.classList.contains("Light")) {
            toggleButton.classList.remove("Light");
            toggleButton.classList.add("Dark");
            but.style.backgroundColor ="#6A9C89";
            body.classList.remove("Light");
            body.classList.add("Dark");
            font.style.color ="#E9EFEC";
           /* toggleButton.style.backgroundColor ="#6A9C89";*/
           // toggleButton.textContent = "Light"; // Change text to "On"
        } else {
            toggleButton.classList.remove("Dark");
            toggleButton.classList.add("Light");
            body.classList.remove("Dark");
            body.classList.add("Light");
            font.style.color ="#16423C";
            but.style.backgroundColor ="#16423C";
          /*  toggleButton.style.backgroundColor ="#16423C";*/
          /*  toggleButton.textContent = "Dark"; // Change text to "Off"*/
}});

//New

