let totalAmount = 0;

function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);
    const itemQuantity = parseInt(document.getElementById("itemQuantity").value);

    if (itemName === '' || isNaN(itemPrice) || isNaN(itemQuantity)) {
        alert("Please fill all fields correctly!");
        return;
    }

    const itemTotal = itemPrice * itemQuantity;
    totalAmount += itemTotal;

    // Create new row in table
    const table = document.querySelector("#itemTable tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>$${itemPrice.toFixed(2)}</td>
        <td>${itemQuantity}</td>
        <td>$${itemTotal.toFixed(2)}</td>
    `;

    table.appendChild(newRow);

    // Update total amount
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);

    // Clear form fields
    document.getElementById("itemName").value = '';
    document.getElementById("itemPrice").value = '';
    document.getElementById("itemQuantity").value = '';
}

function generateBill() {
    alert("The final bill amount is $" + totalAmount.toFixed(2));
}
