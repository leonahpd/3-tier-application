fetch('http://backend:5000/api')
    .then(response => response.json())
    .then(data => {
        console.log('Data received from backend:', data);  // Debugging log to check the data structure
        const itemsTableBody = document.getElementById('items-table').getElementsByTagName('tbody')[0];
        const row = document.createElement('tr');
        const messageCell = document.createElement('td');
        
        if (data.message) {
            messageCell.textContent = data.message;  // Assuming 'message' exists in the response
        } else {
            messageCell.textContent = "No message available";  // Fallback text
        }
        
        row.appendChild(messageCell);
        itemsTableBody.appendChild(row);
    })
    .catch(error => {
        console.error("Error loading items:", error);
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 1;
        cell.textContent = 'Error loading items.';
        row.appendChild(cell);
        document.getElementById('items-table').getElementsByTagName('tbody')[0].appendChild(row);
    });
