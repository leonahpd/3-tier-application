fetch('http://backend:5000/api')
    .then(response => response.json())
    .then(data => {
        console.log('Data received from backend:', data);  // Debugging log
        const itemsTableBody = document.getElementById('items-table').getElementsByTagName('tbody')[0];
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        
        if (data.message) {
            nameCell.textContent = data.message;  // Assign the message if present
        } else {
            nameCell.textContent = "No message available";  // Fallback if message doesn't exist
        }
        
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
