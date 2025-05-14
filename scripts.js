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
  try {
    const res = await fetch("https://sammyatparachute.github.io/ph-marketing-site/info-center-tabs.html");
    const html = await res.text();
    document.getElementById("info-center-tabs").innerHTML = html;

    await waitForDOMLoad();

    updateSupplierText();
    updateSignupLinks();
    await trainingTabInfo();
    registerOpenTypeFormFunctions();
    hideBlackoutDates();

  } catch (err) {
    console.warn("Something went wrong.", err);
  }
}

// === SUPPORTING FUNCTIONS ===
function updateSupplierText() {
  document.getElementsByName("supplier-name").forEach(e => {
    e.textContent = supplier_name;
  });
}

function updateSignupLinks() {
  document.getElementsByName("sign-up-link").forEach(e => {
    e.outerHTML = `<a href="https://dme.parachutehealth.com/organic_sign_up?supplier_id=${supplier_id}#/create-account" style="color:#520079;font-weight:400;">signing up here</a>!`;
  });
}

function hideBlackoutDates() {
  document.querySelectorAll(".webinar-div-2 > div").forEach(div => {
    const dateText = div.querySelector("h4")?.textContent.trim();
    if (dateText && blackOutDates.some(date => dateText.includes(date))) {
      div.style.display = "none";
    }
  });
}

function waitForDOMLoad() {
  return new Promise(resolve => setTimeout(resolve, 200));
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

function registerOpenTypeFormFunctions() {
  for (let i = 0; i < 10; i++) {
    const ordinalName = ordinal(i + 1);
    const slotPrefix = `${ordinalName}DateTimeSlotString`;

    for (let j = 0; j < 4; j++) {
      const fnName = `openTypeForm${i * 4 + j + 1}`;
      const slotVar = `${slotPrefix}${j + 1}`;

      window[fnName] = () => openTypeForm(window[slotVar]);
    }
  }
}

function openTypeForm(slotString) {
  typeformPopup(typeformURL, slotString, "webinar", supplier_id, supplier_name);
}

function typeformPopup(typeformURL, webinarSlot, request_type, supplier_id, supplier_name) {
  const reference = typeformEmbed.makePopup(
    `${typeformURL}?webinarslot=${webinarSlot}&request_type=${request_type}&supplier_id=${supplier_id}&supplier_name=${supplier_name}`,
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
  const map = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
  return map[n - 1];
}

// === START SCRIPT ===
loadInfoCenterTabs();
