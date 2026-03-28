const spotlightContainer = document.querySelector("#spotlights");
const url = "data/members.json";

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displaySpotlights(data);
}

function displaySpotlights(members) {

    const filtered = members.filter(member =>
        member.membership === 2 || member.membership === 3
    );

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selected.forEach(member => {
        const div = document.createElement("div");
        div.className = "spotlight-card";

        const membershipLevel = member.membership === 3 ? 'Gold' : 'Silver';
        const membershipClass = member.membership === 3 ? 'gold' : 'silver';

        div.innerHTML = `
            <div class="spotlight-header">
                <img src="${member.image}" alt="${member.name} logo" loading="lazy" width="300" height="200">
                <div class="membership-badge ${membershipClass}">${membershipLevel}</div>
            </div>
            <div class="spotlight-content">
                <h3>${member.name}</h3>
                <div class="contact-info">
                    <p class="address">${member.address}</p>
                    <p class="phone">${member.phone}</p>
                </div>
                <a href="${member.website}" target="_blank" rel="noopener" class="visit-btn">Visit Website</a>
            </div>
        `;

        spotlightContainer.appendChild(div);
    });
}

getMembers();