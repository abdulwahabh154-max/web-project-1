let currentLanguage = localStorage.getItem("lang") || "ar";
let translations = {
  en: {
    // navigation
    "nav-brand": "EventHub",
    "nav-home": "Home",
    "nav-events": "Events",
    "nav-about": "About",
    "nav-contact": "Contact",
    // theme switch
    "theme-switch-label": "",
    // hero
    "hero-heading": "Browse events in your city",
    "hero-subheading":
      "Search and discover the best events in your city, from tech conferences to music and sports events",
    "hero-cta": "Browse Events",
    // sections
    "featured-heading": "Featured Events",
    "team-heading": "Project Developers",
    // events
    "event-details-button": "Details",
    // table headers
    "table-col-num": "#",
    "table-col-name": "Name",
    "table-col-id": "Student Id",
    "table-col-class": "Class",
    // footer
    "footer-about-heading": "About EventHub",
    "footer-about-text":
      "Your first stop to discover and register for great events. We connect people with unforgettable experiences since 2024.",
    //quick links
    "footer-quick-links": "Quick Links",
    "quicklink-home": "Home",
    "quicklink-events": "Events",
    "quicklink-about": "About",
    "quicklink-contact": "Contact",
    "quicklink-blog": "Blog",
    // categories
    "footer-categories": "Categories",
    "footer-category-art": "Art",
    "footer-category-buisness": "Business",
    "footer-category-music": "Music",
    "footer-category-sport": "Sports",
    "footer-category-tech": "Tech",
    // -------------------
    "footer-newsletter-heading": "Stay Informed",
    "footer-address": "Damascus, Bab Touma, Office 25",
    "footer-phone": "+963 (954) 486 495",
    "footer-email": "info@eventhub.com",
    "newsletter-button": "Subscribe",
    "newsletter-text": "Subscribe to our newsletter to receive event updates:",
    "footer-copyright": "© 2024 EventHub. All rights reserved.",
    // events page
    "upcoming-events-title": "Upcoming Events",
    // events cateegories
    "event-category-all": "All Categories",
    "event-category-nature": "Nature",
    "event-category-buisness": "Business",
    "event-category-fashion": "Fashion",
    "event-category-music": "Music",
    "event-category-education": "Education",
    "event-category-cienema": "Cienema",
    "event-category-culture": "Culture",
    "event-category-theatre": "Theatre",
    "event-category-sport": "Sport",
    "event-category-food": "Food",
    "event-category-art": "Art",
    "event-category-tech": "Tech",
    // about page
    "about-title": "About Us",
    "about-lead":
      "Event hub is your first destination to discover and register for distinguished events in your city.",
    "about-mission-header": "Our Mission",
    "about-mission-text":
      "We connect people with meaningful experiences. Whether you're looking for professional development opportunities, cultural experiences, or entertainment events, Event hub makes it easy to find and register for events that match your interests.",
    "about-why-us": "Why choose Event hub?",
    "about-us-li-1": "Curated selection of quality events",
    "about-us-li-2": "Easy registeration proccess",
    "about-us-li-3": "Personalized recommendations",
    "about-us-li-4": "Secure payment processing",
    // contact us page
    "contact-title": "Contact Us",
    "contact-send-title": "Send a Message",
    "contact-username": "Name",
    "contact-useremail": "Email",
    "contact-message": "Message",
    "contact-send-button": "Sends Message",
    // event details page
    "about-event": "About the Event",
    "event-speakers": "Key Speakers",
    "event-lineup": "Performance Lineup",
    "event-date": "Date",
    "event-time": "Time",
    "event-location": "Location",
    "event-entry-fee": "Entry Fee",
  },
  ar: {
    // navigation
    "nav-brand": "مدينة ايفينتس",
    "nav-home": "الصفحة الرئيسية",
    "nav-events": "الفعاليات",
    "nav-about": "من نحن",
    "nav-contact": "تواصل معنا",
    // theme switch
    "theme-switch-label": "",
    // hero
    "hero-heading": "تصفح الفعاليات في مدينتك",
    "hero-subheading":
      "ابحث وتعرف على افضل الفعاليات في مدينتك, بدءا من المؤتمرات التكنولوجية حتى فعاليات الموسيقا والرياضة",
    "hero-cta": "تصفح الفعاليات",
    // sections
    "featured-heading": "أبرز الفعاليات",
    "team-heading": "مبرمجي المشروع",
    // events
    "event-details-button": "تفاصيل",
    // table headers
    "table-col-num": "#",
    "table-col-name": "الاسم",
    "table-col-id": "المعرف",
    "table-col-class": "الشعبة",
    // footer
    "footer-about-heading": "عن مدينة إيفينتس",
    "footer-about-text":
      "وجهتك الأولى لاكتشاف والتسجيل في الفعاليات المميزة. نربط الناس بتجارب لا تُنسى منذ 2024.",
    //quick links
    "footer-quick-links": "روابط سريعة",
    "quicklink-home": "الصفحة الرئيسية",
    "quicklink-events": "الفعاليات",
    "quicklink-about": "من نحن",
    "quicklink-contact": "اتصل بنا",
    "quicklink-blog": "المدونة",
    // categories
    "footer-categories": "الفئات",
    "footer-category-art": "فن",
    "footer-category-buisness": "أعمال",
    "footer-category-music": "موسيقا",
    "footer-category-sport": "رياضة",
    "footer-category-tech": "تكنولوجيا",
    // -------------------
    "footer-newsletter-heading": "ابقَ على اطلاع",
    "footer-address": "دمشق باب توما محضر 25",
    "footer-phone": "+963 (954) 486 495",
    "footer-email": "info@eventhub.com",
    "newsletter-button": "اشترك",
    "newsletter-text": "اشترك في نشرتنا الإخبارية لتصلك تحديثات الفعاليات:",
    "footer-copyright": "© 2024 مدينة ايفينتس. جميع الحقوق محفوظة.",
    // events page
    "upcoming-events-title": "الفعاليات القادمة",
    // events cateegories
    "event-category-all": "جميع الفئات",
    "event-category-nature": "طبيعة",
    "event-category-buisness": "أعمال",
    "event-category-fashion": "أزياء",
    "event-category-music": "موسيقى",
    "event-category-education": "تعليم",
    "event-category-cienema": "سينما",
    "event-category-culture": "ثقافة",
    "event-category-theatre": "مسرح",
    "event-category-sport": "رياضة",
    "event-category-food": "طعام",
    "event-category-art": "فن",
    "event-category-tech": "تكنولوجيا",
    // about page
    "about-title": "عن مدينة ايفينتس",
    "about-lead":
      "مدينة إيفينتس هي وجهتك الأولى لاكتشاف والتسجيل في الفعاليات المميزة في مدينتك.",
    "about-mission-header": "هدفنا",
    "about-mission-text":
      "نربط الناس بتجارب ذات معنى. سواء كنت تبحث عن فرص للتطوير المهني، تجارب ثقافية أو فعاليات ترفيهية، تجعل مدينة إيفينتس من السهل العثور على الفعاليات والتسجيل فيها بما يتناسب مع اهتماماتك.",
    "about-why-us": "لماذا تختار مدينة ايفينتس؟",
    "about-us-li-1": "اختيار مُنسق من الفعاليات ذات الجودة",
    "about-us-li-2": "عملية تسجيل سهلة",
    "about-us-li-3": "توصيات مخصصة",
    "about-us-li-4": "معالجة دفع اّمنة",
    // contact us page
    "contact-title": "تواصل معنا",
    "contact-send-title": "أرسل رسالة",
    "contact-username": "الأسم",
    "contact-useremail": "البريد الإلكتروني",
    "contact-message": "الرسالة",
    "contact-send-button": "إرسال الرسالة",
    // event details page
    "about-event": "حول الفعالية",
    "event-speakers": "أبرز المتحدثين",
    "event-lineup": "مؤديي الفعالية",
    "event-date": "التاريخ",
    "event-time": "الوقت",
    "event-location": "الموقع",
    "event-entry-fee": "سعر الدخولية",
  },
};
const langSwitch = document.getElementById("lang-button");
const langImage = document.getElementById("lang-image");

function switchLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "ar";
    localStorage.setItem("lang", "ar");
  } else {
    localStorage.setItem("lang", "en");
    currentLanguage = "en";
  }
  updateLanguage();
}

langSwitch.addEventListener("click", () => {
  switchLanguage();
});

function updateLanguage() {
  // update icon
  if (currentLanguage === "ar") langImage.src = "./assets/img/sy.webp";
  else langImage.src = "./assets/img/us.webp";

  const elements = document.querySelectorAll("[data-translate]");
  if (currentLanguage === "ar") {
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      // search in arabic dict
      const text = translations.ar[key];
      if (text) element.textContent = text;
    });
  } else if (currentLanguage === "en") {
    // search in english dict

    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      // search in arabic dict
      const text = translations.en[key];
      if (text) element.textContent = text;
    });
  }
  // injecting contact info
  const contactInfoContainer = document.querySelector("[data-contact-info]");
  if (contactInfoContainer) {
    if (currentLanguage === "ar") {
      contactInfoContainer.innerHTML = `<h4>معلومات التواصل</h4>
              <p>📧 البريد الإلكتروني: info@eventhub.com</p>
              <p>📞 الهاتف: +963 (954) 486 495</p>
              <p>📍 العنوان: دمشق باب توما محضر 25</p>

              <h5 class="mt-4">ساعات العمل</h5>
              <p>الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً</p>
              <p>السبت: 10:00 صباحًا - 4:00 مساءً</p>
              <p>الأحد: مغلق</p>`;
    } else if (currentLanguage === "en") {
      contactInfoContainer.innerHTML = `<h4>Contact Information</h4>
              <p>📧 Email: info@eventhub.com</p>
              <p>📞 Phone: +963 (954) 486 495</p>
              <p>📍 Address: Damascus, Bab Touma, Mahdar 25</p>

              <h5 class="mt-4">Opening Hours</h5>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>`;
    }
  }
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
});
