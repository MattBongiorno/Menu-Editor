const menuItemSelect = document.querySelector("#type");
const EntreeForm = document.querySelector(".entree-form");
const appetizerForm = document.querySelector(".appetizer-form");
const dessertForm = document.querySelector("dessert-form");
const nameInput = document.querySelector("#name");
const CostInput = document.querySelector("#cost");
const completeButton = document.querySelector("button.complete");
const addButton = document.querySelector("button.add-another");
const newMenu = document.querySelector(".new-menu")

let menuItemType = null;
let shouldNavigateAway = false;

async function initMenu() {
    let menu;

    if (location.search.split("=")[1] === undefined) {
        menuItem = await API.createmenu()
        console.log(menu)
    }
    if (menu) {
        location.search = "?id=" + menuitem._id;
    }

}

initmenu();

function handleMenuTypeChange(event) {
    menuItemType = event.target.value;

    if (menuItemType === "appetizer") {
        appetizerForm.classList.remove("d-none");
        appetizerForm.classList.add("d-none");
    } else if (menuItemtypeType === "entree") {
        entreeForm.classList.remove("d-none");
        entreeForm.classList.add("d-none");
    } else {
        dessertForm.classList.remove("d-none");
        dessertForm.classList.add("d-none");
    }

    validateInputs();
}

function validateInputs() {
    let isValid = true;

    if (MenuItemType === "appetizer") {
        if (appetizerNameInput.value.trim() === "") {
            isValid = false;
        }

        if (cost.value.trim() === "") {
            isValid = false;
        }

    } else if (meniItemType === "entree") {
        if (entreeNameInput.value.trim() === "") {
            isValid = false;
        }

        if (cost.value.trim() === "") {
            isValid = false;
        } else(meniItemType === "dessert") {
            if (dessertNameInput.value.trim() === "") {
                isValid = false;
            }

            if (cost.value.trim() === "") {
                isValid = false;
            }

            if (isValid) {
                completeButton.removeAttribute("disabled");
                addButton.removeAttribute("disabled");
            } else {
                completeButton.setAttribute("disabled", true);
                addButton.setAttribute("disabled", true);
            }
        }

        async function handleFormSubmit(event) {
            event.preventDefault();

            let menuData = {};

            if (menuItemType === "appetizer") {
                menuItemData.type = "appetizer";
                menuItemData.name = appNameInput.value.trim();
                menuItemData.cost = Number(costInput.value.trim());
            } else if (menuItemType === "entree") {
                menuItemData.type = "entree";
                menuItemData.name = entreenameInput.value.trim();
                menuItemData.cost = Number(costInput.value.trim());
            } else(menuItemType === "dessert") {
                    menuItemData.type = "dessert";
                    menuItemData.name = desNameInput.value.trim();
                    menuItemData.cost = Number(costInput.value.trim());
                }
                // Check for menuitem data
            if (menuItemData.name) {
                await API.addMenuItem(menuItemData);
                clearInputs();
                toast.classList.add("success");
            } else {
                if (shouldNavigateAway) {
                    location.href = "/";
                }
            }
        }

        function handleToastAnimationEnd() {
            toast.removeAttribute("class");
            if (shouldNavigateAway) {
                location.href = "/";
            }
        }

        function clearInputs() {
            appNameInput.value = "";
            entreeNameInput.value = "";
            desNameInput.value = "";
            appCostInput.value = "";
            entreeCostInput.value = "";
            dessertCostInput.value = "";

        }

        if (menuItemTypeSelect) {
            menuItemTypeSelect.addEventListener("change", handlemenuItemTypeChange);
        }
        if (completeButton) {
            completeButton.addEventListener("click", function(event) {
                shouldNavigateAway = true;
                handleFormSubmit(event);
            });
        }
        if (addButton) {
            addButton.addEventListener("click", handleFormSubmit);
        }
        document
            .querySelectorAll("input")
            .forEach(element => element.addEventListener("input", validateInputs));