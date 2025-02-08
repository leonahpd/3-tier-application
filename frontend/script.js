fetch('http://backend:5000/api')
    .then(response => response.json())
    .then(data => {
        const itemsTableBody = document.getElementById('items-table').getElementsByTagName('tbody')[0];

        data.items.forEach(item => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;

            const priceCell = document.createElement('td');
            priceCell.textContent = item.price;

            row.appendChild(nameCell);
            row.appendChild(priceCell);
            itemsTableBody.appendChild(row);
        });
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
