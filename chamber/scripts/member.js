const membersContainer = document.getElementById("members");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

// Fetch and display members
async function loadMembers() {
    try {
        const response = await fetch("data/member.json");
        const members = await response.json();

        membersContainer.innerHTML = ""; // Clear container

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
        <img src="${member.image}" alt="${member.name}" width="400" height="250">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership:</strong> ${member.membership === 3 ? "Gold" : member.membership === 2 ? "Silver" : "Member"}</p>
        <p>${member.notes}</p>
      `;

            membersContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// Toggle views
gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
});

// Initialize
loadMembers();