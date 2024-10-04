const allBtn = document.getElementsByClassName('allBtn');
let newTotalprice = 0;
const priceLimit = 25000;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        // Get the "Left" value, ensure it's not below 0
        const leftString = document.getElementById('left').innerText;
        const left = parseFloat(leftString);

        // Check if adding another player exceeds the player limit (7 players)
        if (left <= 0) {
            alert('You cannot buy more than 7 players!');
            return; // Prevent adding this player
        }

        // Get the price of the selected player
        const price = parseFloat(e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText);

        // Check if adding this player exceeds the total price limit
        if (newTotalprice + price > priceLimit) {
            alert('Total price cannot exceed $1000!');
            return; // Prevent adding this player
        }

        // Decrease the "Left" value by 1 and update it in the DOM
        const newLeft = left - 1;
        document.getElementById('left').innerText = newLeft;

        // Update the "Cart" value by increasing it
        const addString = document.getElementById('add').innerText;
        const add = parseFloat(addString);
        const newAdd = add + 1;
        document.getElementById('add').innerText = newAdd;

        // Update the total and grand total prices
        newTotalprice += price;
        document.getElementById('total').innerText = newTotalprice;
        document.getElementById('grand-total').innerText = newTotalprice;

        // Get the name and category of the selected player
        const name = e.target.parentNode.parentNode.childNodes[1].innerText;
        const category = e.target.parentNode.parentNode.childNodes[5].innerText;

        // Append the selected player's name and category to the selected list
        const selectedArea = document.getElementById('selected');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = name;
        const p2 = document.createElement('p');
        p2.innerText = category;
        li.appendChild(p);
        li.appendChild(p2);
        selectedArea.appendChild(li);
    });
}
