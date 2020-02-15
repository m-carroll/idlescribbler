function searchOnEnter(event) {
    if (event.keyCode !== 13) {
        return;
    }
    event.preventDefault();
    document.getElementById("website-search-button").click();
}

function search(event) {

}
