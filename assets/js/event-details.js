document.addEventListener("DOMContentLoaded", function () {
  const eventId = localStorage.getItem("selectedEventId");
  const event = eventsData.events.find((e) => e.id == eventId);
  const detailsContainer = document.getElementById("event-details-container");
  const registrationContainer = document.getElementById("registration-section");

  if (event) {
    // Inject event details
    detailsContainer.innerHTML = `
                    <nav aria-label="breadcrumb" class="mb-4">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="events.html">Events</a></li>
                            <li class="breadcrumb-item active">${
                              event.title
                            }</li>
                        </ol>
                    </nav>
                    
                    <img src="${
                      event.image
                    }" class="rounded-circle mb-4 d-block img-fluid" alt="${
      event.title
    }">
                    
                    <span class="badge bg-primary mb-4">${event.category}</span>
                    <h1 class="mb-3">${event.title}</h1>
                    
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <p><strong>📅 <span data-translate="event-date">التاريخ:</span></strong> ${
                              event.date
                            }</p>
                            <p><strong>⏰ <span data-translate="event-time">الوقت:</span></strong> ${
                              event.time
                            }</p>
                        </div>
                        <div class="col-md-6">
                            <p><strong>📍 <span data-translate="event-location">الموقع:</span></strong> ${
                              event.location
                            }</p>
                            <p><strong>💰 <span data-translate="event-entry-fee">سعر الدخولية:</span></strong> ${
                              event.price
                            }</p>
                        </div>
                    </div>
                    
                    <h4 class="mb-3" data-translate="about-event">حول الفعالية</h4>
                    <p class="lead">${event.fullDescription}</p>
                    
                    ${
                      event.speakers
                        ? `
                        <h4 class="mt-5 mb-3" data-translate="event-speakers">أبرز المتحدثين</h4>
                        <ul class="list-group">
                            ${event.speakers
                              .map(
                                (speaker) =>
                                  `<li class="list-group-item">${speaker}</li>`
                              )
                              .join("")}
                        </ul>
                    `
                        : ""
                    }
                    
                    ${
                      event.lineup
                        ? `
                        <h4 class="mt-5 mb-3" data-translate="event-lineup">مؤديي العرض</h4>
                        <ul class="list-group">
                            ${event.lineup
                              .map(
                                (performer) =>
                                  `<li class="list-group-item">${performer}</li>`
                              )
                              .join("")}
                        </ul>
                    `
                        : ""
                    }
                `;
  } else {
    detailsContainer.innerHTML = `
                    <div class="alert alert-warning">
                        Event not found. <a href="events.html">Return to events</a>
                    </div>
                `;
  }
});
