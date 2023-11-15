// Name: Angel Solares
// File: tableScript.js
// Date: 11/14/23
// GUI Assignment: Creates a multiplication table generator.

function generateTable() {
    // Get Vals
    const startMultiplier = parseInt(document.getElementById('startMultiplier').value);
    const endMultiplier = parseInt(document.getElementById('endMultiplier').value);
    const startMultiplicand = parseInt(document.getElementById('startMultiplicand').value);
    const endMultiplicand = parseInt(document.getElementById('endMultiplicand').value);

    // Const Range of multipliers and multiplicands
    const minRange = -50;
    const maxRange = 50;

    const validStartMultiplier = Math.max(minRange, Math.min(maxRange, startMultiplier));
    const validEndMultiplier = Math.max(minRange, Math.min(maxRange, endMultiplier));
    const validStartMultiplicand = Math.max(minRange, Math.min(maxRange, startMultiplicand));
    const validEndMultiplicand = Math.max(minRange, Math.min(maxRange, endMultiplicand));

    // Validating valid numbers
    if (isNaN(startMultiplier) || isNaN(endMultiplier) || isNaN(startMultiplicand) || isNaN(endMultiplicand)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Initializing multiplication table
    let tableHTML = '<tr><th></th>';

    // first row
    for (let i = validStartMultiplier; i <= validEndMultiplier; i++) {
        tableHTML += `<th>${i}</th>`;
    }
    tableHTML += '</tr>';

    // Creates table body
    for (let i = validStartMultiplicand; i <= validEndMultiplicand; i++) {
        tableHTML += `<tr><th>${i}</th>`;
        for (let j = validStartMultiplier; j <= validEndMultiplier; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += '</tr>';
    }

    //  Table Display
    document.getElementById('tableBody').innerHTML = tableHTML;
}
