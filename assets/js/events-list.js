document.addEventListener("DOMContentLoaded", function () {
  const eventsContainer = document.getElementById("events-container");

  function displayEvents(events) {
    eventsContainer.innerHTML = "";

    events.forEach((event) => {
      const eventCol = `
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card event-card h-100">
                                <img src="${event.image}" class="card-img-top rounded-circle" alt="${event.title}">
                                <div class="card-body">
                                    <span class="badge bg-primary mb-2">${event.category}</span>
                                    <h5 class="card-title">${event.title}</h5>
                                    <p class="card-text">${event.description}</p>
                                    <div class="mb-2">
                                        <small class="text-muted">📅 ${event.date} | ⏰ ${event.time}</small>
                                    </div>
                                    <div class="mb-3">
                                        <small class="text-muted">📍 ${event.location}</small>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="fw-bold text-primary">${event.price}</span>
                    <button class="btn btn-outline-primary view-details" data-event-id="${event.id}" data-translate="event-details-button">
                      تفاصيل
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
      eventsContainer.innerHTML += eventCol;
    });

    // Add click event listeners to details buttons
    document.querySelectorAll(".view-details").forEach((button) => {
      button.addEventListener("click", function () {
        const eventId = this.getAttribute("data-event-id");
        // Store selected event ID and redirect
        localStorage.setItem("selectedEventId", eventId);
        window.location.href = "event.html";
      });
    });
  }

  // Initial display of all events
  displayEvents(eventsData.events);

  // Search functionality
  document
    .getElementById("search-events")
    .addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();
      const filteredEvents = eventsData.events.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm) ||
          event.description.toLowerCase().includes(searchTerm)
      );
      displayEvents(filteredEvents);
    });

  // Category filter
  document
    .getElementById("category-filter")
    .addEventListener("change", function (e) {
      const category = e.target.value;
      const filteredEvents = category
        ? eventsData.events.filter((event) => event.category === category)
        : eventsData.events;
      displayEvents(filteredEvents);
    });
});
