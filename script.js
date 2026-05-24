let total = 0;

function addExpense(){

    let expenseName =
    document.getElementById("expenseName").value;

    let expenseAmount =
    parseInt(document.getElementById("expenseAmount").value);

    if(expenseName === "" || isNaN(expenseAmount)){
        alert("Please enter valid details");
        return;
    }

    let li = document.createElement("li");

    li.textContent =
    expenseName + " - ₹" + expenseAmount;

    document.getElementById("expenseList").appendChild(li);

    total += expenseAmount;

    document.getElementById("total").innerText =
    "Total: ₹" + total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}
