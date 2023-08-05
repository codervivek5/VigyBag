
// Show Pop-Up
// Get the modal
var ebModal = document.getElementById('mySizeChartModal');
var ebBtn = document.getElementById("mySizeChart");
var ebSpan = document.getElementsByClassName("ebcf_close")[0];
var modalImg = document.getElementById("modalImage");

ebBtn = function() {
    ebModal.style.display = "block";
}

ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}