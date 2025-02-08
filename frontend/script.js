fetch('http://backend:5000/api')
    .then(response => response.json())
    .then(data => {
        const itemsTableBody = document.getElementById('items-table').getElementsByTagName('tbody')[0];
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = data.message;  // Update this to handle the message properly
        row.appendChild(nameCell);
        itemsTableBody.appendChild(row);
    })
    .catch(error => {
        console.error("Error loading items:", error);
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 2;
        cell.textContent = 'Error loading items.';
        row.appendChild(cell);
        document.getElementById('items-table').getElementsByTagName('tbody')[0].appendChild(row);
    });

