init();

async function init() {
    if (location.search.split("=")[1] === undefined) {
        const workout = await API.getlatestMenu();
        if (menuItem) {
            location.search = "?id=" + menuItem._id;
        } else {
            document.querySelector("#continue-btn").classList.add("d-none")
        }
    }
}