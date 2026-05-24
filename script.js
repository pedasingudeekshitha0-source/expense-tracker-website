let total = 0;

function addExpense() {

    let expenseName =
    document.getElementById("expenseName").value;

    let expenseAmount =
    parseInt(document.getElementById("expenseAmount").value);

    if (expenseName === "" || isNaN(expenseAmount)) {
        alert("Please enter valid details");
        return;
    }

    let li = document.createElement("li");

    li.textContent =
    expenseName + " - ₹" + expenseAmount;
    let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {

    li.remove();

    total -= expenseAmount;

    document.getElementById("totalAmount").textContent = total;
};
    li.appendChild(deleteBtn);

    document.getElementById("expenseList").appendChild(li);

    total += expenseAmount;

    document.getElementById("totalAmount").textContent = total;

    // Clear input fields after adding expense
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}
