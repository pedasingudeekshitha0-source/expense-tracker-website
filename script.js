let total = 0;

function addExpense() {

    let expenseName =
    document.getElementById("expenseName").value;

    let expenseAmount =
    parseInt(document.getElementById("expenseAmount").value);

    if (expenseName === "" || isNaN(expenseAmount)) {
        alert("Enter valid details");
        return;
    }

    total += expenseAmount;

    document.getElementById("totalAmount").innerText =
    "Total: ₹" + total;

    let li = document.createElement("li");

    li.innerHTML =
    expenseName + " - ₹" + expenseAmount;

    let deleteBtn =
    document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {

        total -= expenseAmount;

        document.getElementById("totalAmount").innerText =
        "Total: ₹" + total;

        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("expenseList")
    .appendChild(li);

    document.getElementById("expenseName").value = "";

    document.getElementById("expenseAmount").value = "";
}
