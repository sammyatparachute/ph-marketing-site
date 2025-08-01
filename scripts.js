// === GLOBAL CONSTANTS ===
const blackOutDates = [
  "May 13 2025",
  "May 14 2025",
  "May 15 2025",
  "May 16 2025",
  "May 26 2025",
];

const timeSlots = {
  default: ["11:00am", "11:30am", "2:00pm", "2:30pm"],
  alt: ["12:00pm", "12:30pm", "3:00pm", "3:30pm"],
};

const typeformURL = "https://parachutehealthdme.typeform.com/to/hUhvu4QC";

// === MAIN LOADER ===
async function loadInfoCenterTabs() {
  const infoCenterTabs = document.getElementById("info-center-tabs");
  const demoSchedule = document.getElementById("demo-schedule");

  // Guard Clause: If neither target element exists, stop the script.
  if (!infoCenterTabs && !demoSchedule) {
    console.log("Required elements for script not found. Exiting.");
    return;
  }

  try {
    const res = await fetch(
      "https://sammyatparachute.github.io/ph-marketing-site/info-center-tabs.html"
    );
    const htmlText = await res.text();

    if (infoCenterTabs) {
      infoCenterTabs.innerHTML = htmlText;
    }

    // Parse the HTML string to extract specific parts
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");

    // Select the specific div you want to load
    const webinarSchduleDiv = doc.querySelector("#webinar-div-container");

    // Inject webinar schedule on demo page if the element exists
    if (demoSchedule && webinarSchduleDiv) {
      demoSchedule.innerHTML = webinarSchduleDiv.innerHTML;
    }

    // Wait for the dynamically injected content to be ready
    await waitForElement("firstDate");

    updateSupplierText();
    updateSignupLinks();
    await trainingTabInfo();
    bindTypeformSpans();
    hideBlackoutDates();
  } catch (err) {
    console.log("Something went wrong.", err);
  }
}

// === SUPPORTING FUNCTIONS ===
function updateSupplierText() {
  document.getElementsByName("supplier-name").forEach((e) => {
    e.textContent = supplier_name;
  });
}

function updateSignupLinks() {
  document.getElementsByName("sign-up-link").forEach((e) => {
    e.outerHTML = `<a href="https://dme.parachutehealth.com/organic_sign_up?supplier_id=${supplier_id}#/create-account" style="color:#520079;font-weight:400;">signing up here</a>!`;
  });
}

function hideBlackoutDates() {
  document.querySelectorAll(".webinar-div-2 > div").forEach((div) => {
    const dateText = div.querySelector("h4")?.textContent.trim();
    if (dateText && blackOutDates.some((date) => dateText.includes(date))) {
      div.style.display = "none";
    }
  });
}

function waitForElement(elementId, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const element = document.getElementById(elementId);
      if (element) {
        clearInterval(interval);
        resolve(element);
      } else if (Date.now() - startTime > timeout) {
        clearInterval(interval);
        reject(new Error(`Element with id #${elementId} not found after ${timeout}ms.`));
      }
    }, 100); // Check for the element every 100ms
  });
}

async function trainingTabInfo() {
  let currentDate = getNextWeekday(new Date(), 1);

  for (let i = 0; i < 10; i++) {
    currentDate = getNextWeekday(currentDate, i === 0 ? 0 : 1);

    const formattedDate = formatDate(currentDate);
    const slotType = isAltDay(currentDate) ? "alt" : "default";
    const slots = timeSlots[slotType];

    const ordinalName = ordinal(i + 1);
    const dateId = `${ordinalName}Date`;
    const slotPrefix = `${ordinalName}DateTimeSlot`;

    document.getElementById(dateId).textContent = formattedDate;

    slots.forEach((slot, j) => {
      const slotId = `${slotPrefix}${j + 1}`;
      document.getElementById(slotId).textContent = slot;
      window[`${slotPrefix}String${j + 1}`] = `${formattedDate} ${slot}`;
    });
  }

  loadTypeformScript();
}

function bindTypeformSpans() {
  for (let i = 0; i < 10; i++) {
    const ordinalName = ordinal(i + 1);
    const slotPrefix = `${ordinalName}DateTimeSlotString`;

    for (let j = 0; j < 4; j++) {
      const spanId = `${ordinalName}DateTimeSlot${j + 1}`;
      const slotVar = `${slotPrefix}${j + 1}`;

      const span = document.getElementById(spanId);
      if (span && window[slotVar]) {
        span.addEventListener("click", () => openTypeForm(window[slotVar]));
      }
    }
  }
}

function openTypeForm(slotString) {
  typeformPopup(
    typeformURL,
    slotString,
    "webinar",
    supplier_id,
    supplier_name,
    mobile_app
  );
}

function typeformPopup(
  typeformURL,
  webinarSlot,
  request_type,
  supplier_id,
  supplier_name,
  mobile_app
) {
  const reference = typeformEmbed.makePopup(
    `${typeformURL}?webinarslot=${webinarSlot}&request_type=${request_type}&supplier_id=${supplier_id}&supplier_name=${supplier_name}&mobile_app=${mobile_app}`,
    { mode: "popup", autoClose: 5, hideHeaders: true, hideFooters: true }
  );
  reference.open();
}

function loadTypeformScript() {
  const id = "typef_orm_share";
  if (!document.getElementById(id)) {
    const js = document.createElement("script");
    js.id = id;
    js.src = "https://embed.typeform.com/embed.js";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(js, firstScript);
  }
}

function getNextWeekday(date, daysToAdd) {
  const d = new Date(date);
  d.setDate(d.getDate() + daysToAdd);
  while (["Sat", "Sun"].includes(d.toString().substring(0, 3))) {
    d.setDate(d.getDate() + 1);
  }
  return d;
}

function isAltDay(date) {
  return ["Tue", "Thu"].includes(date.toString().substring(0, 3));
}

function formatDate(date) {
  return date.toString().substring(0, 15);
}

function ordinal(n) {
  const map = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
  ];
  return map[n - 1];
}

// === START SCRIPT ===
// Wait for the initial HTML document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  loadInfoCenterTabs();
});
