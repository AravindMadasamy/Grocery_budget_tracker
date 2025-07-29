let budget = 0;
let totalSpent = 0;
const items = [];

function setBudget() {
  const budgetInput = document.getElementById("budget").value;
  if (budgetInput && budgetInput > 0) {
    budget = parseFloat(budgetInput);
    updateSummary();
  } else {
    alert("Please enter a valid budget amount.");
  }
}

function addItem() {
  const name = document.getElementById("item-name").value.trim();
  const costInput = document.getElementById("item-cost").value;

  if (!name || !costInput || costInput <= 0) {
    alert("Enter valid item and cost.");
    return;
  }

  const cost = parseFloat(costInput);
  items.push({ name, cost });
  totalSpent += cost;
  updateSummary();
  renderList();

  document.getElementById("item-name").value = "";
  document.getElementById("item-cost").value = "";
}

function renderList() {
  const itemList = document.getElementById("item-list");
  itemList.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.cost.toFixed(2)}
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
    itemList.appendChild(li);
  });
}

function removeItem(index) {
  totalSpent -= items[index].cost;
  items.splice(index, 1);
  updateSummary();
  renderList();
}

function updateSummary() {
  document.getElementById("total-budget").textContent = budget.toFixed(2);
  document.getElementById("total-spent").textContent = totalSpent.toFixed(2);
  document.getElementById("remaining").textContent = (budget - totalSpent).toFixed(2);
}
