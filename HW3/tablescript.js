// Name: Angel Solares
// File: tableScript.html
// Date: 11/14/23
// GUI Assignment: Creates a multiplication table generator.

function generateTable() {
    // Get vals
    const startMultiplier = parseInt(document.getElementById('startMultiplier').value);
    const endMultiplier = parseInt(document.getElementById('endMultiplier').value);
    const startMultiplicand = parseInt(document.getElementById('startMultiplicand').value);
    const endMultiplicand = parseInt(document.getElementById('endMultiplicand').value);

    // Validate form values
    if (isNaN(startMultiplier) || isNaN(endMultiplier) || isNaN(startMultiplicand) || isNaN(endMultiplicand)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Multiplication table
    let tableHTML = '<tr><th></th>'; 

    // Top row
    for (let i = startMultiplier; i <= endMultiplier; i++) {
        tableHTML += `<th>${i}</th>`;
    }
    tableHTML += '</tr>'; 

    // creates the body 
    for (let i = startMultiplicand; i <= endMultiplicand; i++) {
        tableHTML += `<tr><th>${i}</th>`;
        for (let j = startMultiplier; j <= endMultiplier; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += '</tr>';
    }

    // Display
    document.getElementById('tableBody').innerHTML = tableHTML;
}
