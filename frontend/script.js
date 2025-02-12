// Fetch the existing message
fetch('http://localhost:5000/api')
    .then(response => response.json())
    .then(data => {
        console.log("Backend Data:", data); // Debugging
        const itemsTableBody = document.getElementById('items-table').getElementsByTagName('tbody')[0];
        itemsTableBody.innerHTML = ""; // Clear existing rows

        const row = document.createElement('tr');
        const messageCell = document.createElement('td');
        messageCell.textContent = data.message || "No message received";
        row.appendChild(messageCell);
        itemsTableBody.appendChild(row);

        // Pre-fill the input field with the current message
        document.getElementById('message-input').value = data.message || "";
    })
    .catch(error => {
        console.error("Error loading items:", error);
        document.getElementById('items-table').getElementsByTagName('tbody')[0].innerHTML =
            "<tr><td>Error loading items.</td></tr>";
    });

// Function to update the message
function updateMessage() {
    const newMessage = document.getElementById('message-input').value;

    fetch('http://backend:5000/api/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show success message
        location.reload(); // Refresh to fetch the new message
    })
    .catch(error => {
        console.error("Error updating message:", error);
        alert("Failed to update message.");
    });
}
