// Load featured events on homepage
document.addEventListener("DOMContentLoaded", function () {
  const featuredContainer = document.getElementById("featured-events");
  const featuredEvents = eventsData.events.slice(0, 3); // Show first 3 events

  featuredEvents.forEach((event) => {
    const eventCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card event-card h-100 d-flex flex-column justify-content-between rounded-top">
                            <img src="${event.image}" class="img-fluid rounded-circle" alt="${event.title}">
                            <div class="card-body d-flex flex-column justify-content-between text-center">
                                <h5 class="card-title">${event.title}</h5>
                                <p class="card-text">${event.description}</p>
                                <p class="text-muted">📅 ${event.date} | 📍 ${event.location}</p>
                                <a href="events.html" class="btn btn-light align-self-end" data-translate="event-details-button">تفاصيل</a>
                            </div>
                        </div>
                    </div>
                `;
    featuredContainer.innerHTML += eventCard;
  });
});
