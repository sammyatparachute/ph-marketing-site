//Get supplierUrl from URL parameter
//var url = window.location.href;

//function getSupUrl() {
//  if (url.indexOf("?") < 1) {
//    return null;
//  } else {
//    return encodeURIComponent(url.substring(url.indexOf("?") + 1, url.length));
//}};

//var supplierUrl = getSupUrl();

//var selectedSupplier = suppliers.filter(obj => {
//  return obj.url === supplierUrl;
//})

//const defaultHeadline = "A better way to order medical equipment";
//const defaultDescription = `${selectedSupplier[0].name} has partnered with Parachute Health to provide you easy online ordering, at no cost, that gets your patients the products they need at a click's notice.`;

// Populate the info center tabs from remote html
fetch("https://sammyatparachute.github.io/ph-marketing-site/info-center-tabs.html")
  .then(function (response) {
    // The API call was successful!
    return response.text();
  })
  .then(function (html) {
    // This is the HTML from our response as a text string
    document.getElementById("info-center-tabs").innerHTML = html;
  })
  .then(function () {
    document
      .getElementsByName("supplier-name")
      .forEach((e) => (e.textContent = supplier_name));
  })
  .then(function () {
    document
      .getElementsByName("sign-up-link")
      .forEach(
        (e) =>
          (e.outerHTML = `<a href="https://dme.parachutehealth.com/organic_sign_up?supplier_id=${supplier_id}" style="color:#520079;font-weight:400;">signing up here</a>!`)
      );
  })
  .then(function() {
    // MOBILE NAVIGATION
function mobileSelect() {
  var x = document.getElementById("mobileMenu").value;
  document.getElementById(x).checked = true;
}
function overviewChecked() {
  document.getElementById("overview").checked = true;
}

function trainingChecked() {
  document.getElementById("training").checked = true;
}
function signupChecked() {
  document.getElementById("signup").checked = true;
}
function faqsChecked() {
  document.getElementById("faqs").checked = true;
}
function requestmoreinfoChecked() {
  document.getElementById("requestmoreinfo").checked = true;
}

// Generate Typeform link
function typeformPopup(typeformURL, webinarSlot, request_type, supplier_id, supplier_name) {
  var reference = typeformEmbed.makePopup(
    typeformURL +
      "?" +
      "webinarslot=" +
      webinarSlot +
      "&request_type=" +
      request_type +
      "&supplier_id=" +
      supplier_id +
      "&supplier_name=" +
      supplier_name,
    { mode: "popup", autoClose: 5, hideHeaders: true, hideFooters: true }
  );
  reference.open();
}

var typeformURL = "https://parachutehealthdme.typeform.com/to/hUhvu4QC";

timeSlot1 = "11:00am";
timeSlot2 = "11:30am";
timeSlot3 = "12:00pm";
timeSlot4 = "12:30pm";
timeSlot5 = "2:00pm";
timeSlot6 = "2:30pm";
timeSlot7 = "3:00pm";
timeSlot8 = "3:30pm";

// Populate Calendar Options for Training Tab
function trainingTabInfo() {
  if (
    new Date(new Date().setDate(new Date().getDate() + 1))
      .toString()
      .includes("Sat")
  ) {
    firstDate = new Date(new Date().setDate(new Date().getDate() + 3));
  } else if (
    new Date(new Date().setDate(new Date().getDate() + 1))
      .toString()
      .includes("Sun")
  ) {
    firstDate = new Date(new Date().setDate(new Date().getDate() + 2));
  } else {
    firstDate = new Date(new Date().setDate(new Date().getDate() + 1));
  }
  document.getElementById("firstDate").textContent = firstDate
    .toString()
    .substring(0, 15);

  if (
    firstDate.toString().includes("Tue") ||
    firstDate.toString().includes("Thu")
  ) {
    document.getElementById("firstDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("firstDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("firstDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("firstDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("firstDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("firstDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("firstDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("firstDateTimeSlot4").textContent = timeSlot6;
  }
  firstDateTimeSlotString1 =
    firstDate.toString().substring(0, 15) +
    " " +
    document.getElementById("firstDateTimeSlot1").textContent;
  firstDateTimeSlotString2 =
    firstDate.toString().substring(0, 15) +
    " " +
    document.getElementById("firstDateTimeSlot2").textContent;
  firstDateTimeSlotString3 =
    firstDate.toString().substring(0, 15) +
    " " +
    document.getElementById("firstDateTimeSlot3").textContent;
  firstDateTimeSlotString4 =
    firstDate.toString().substring(0, 15) +
    " " +
    document.getElementById("firstDateTimeSlot4").textContent;

  var secondDateCheck = new Date(firstDate.setDate(firstDate.getDate() + 1));
  if (secondDateCheck.toString().includes("Sat")) {
    secondDate = new Date(
      secondDateCheck.setDate(secondDateCheck.getDate() + 2)
    );
  } else if (secondDateCheck.toString().includes("Sun")) {
    secondDate = new Date(
      secondDateCheck.setDate(secondDateCheck.getDate() + 1)
    );
  } else {
    secondDate = new Date(secondDateCheck.setDate(secondDateCheck.getDate()));
  }
  document.getElementById("secondDate").textContent = secondDate
    .toString()
    .substring(0, 15);

  if (
    secondDate.toString().includes("Tue") ||
    secondDate.toString().includes("Thu")
  ) {
    document.getElementById("secondDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("secondDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("secondDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("secondDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("secondDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("secondDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("secondDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("secondDateTimeSlot4").textContent = timeSlot6;
  }
  secondDateTimeSlotString1 =
    secondDate.toString().substring(0, 15) +
    " " +
    document.getElementById("secondDateTimeSlot1").textContent;
  secondDateTimeSlotString2 =
    secondDate.toString().substring(0, 15) +
    " " +
    document.getElementById("secondDateTimeSlot2").textContent;
  secondDateTimeSlotString3 =
    secondDate.toString().substring(0, 15) +
    " " +
    document.getElementById("secondDateTimeSlot3").textContent;
  secondDateTimeSlotString4 =
    secondDate.toString().substring(0, 15) +
    " " +
    document.getElementById("secondDateTimeSlot4").textContent;

  var thirdDateCheck = new Date(secondDate.setDate(secondDate.getDate() + 1));
  if (thirdDateCheck.toString().includes("Sat")) {
    thirdDate = new Date(thirdDateCheck.setDate(thirdDateCheck.getDate() + 2));
  } else if (thirdDateCheck.toString().includes("Sun")) {
    thirdDate = new Date(thirdDateCheck.setDate(thirdDateCheck.getDate() + 1));
  } else {
    thirdDate = new Date(thirdDateCheck.setDate(thirdDateCheck.getDate()));
  }
  document.getElementById("thirdDate").textContent = thirdDate
    .toString()
    .substring(0, 15);

  if (
    thirdDate.toString().includes("Tue") ||
    thirdDate.toString().includes("Thu")
  ) {
    document.getElementById("thirdDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("thirdDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("thirdDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("thirdDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("thirdDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("thirdDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("thirdDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("thirdDateTimeSlot4").textContent = timeSlot6;
  }
  thirdDateTimeSlotString1 =
    thirdDate.toString().substring(0, 15) +
    " " +
    document.getElementById("thirdDateTimeSlot1").textContent;
  thirdDateTimeSlotString2 =
    thirdDate.toString().substring(0, 15) +
    " " +
    document.getElementById("thirdDateTimeSlot2").textContent;
  thirdDateTimeSlotString3 =
    thirdDate.toString().substring(0, 15) +
    " " +
    document.getElementById("thirdDateTimeSlot3").textContent;
  thirdDateTimeSlotString4 =
    thirdDate.toString().substring(0, 15) +
    " " +
    document.getElementById("thirdDateTimeSlot4").textContent;

  var fourthDateCheck = new Date(thirdDate.setDate(thirdDate.getDate() + 1));
  if (fourthDateCheck.toString().includes("Sat")) {
    fourthDate = new Date(
      fourthDateCheck.setDate(fourthDateCheck.getDate() + 2)
    );
  } else if (fourthDateCheck.toString().includes("Sun")) {
    fourthDate = new Date(
      fourthDateCheck.setDate(fourthDateCheck.getDate() + 1)
    );
  } else {
    fourthDate = new Date(fourthDateCheck.setDate(fourthDateCheck.getDate()));
  }
  document.getElementById("fourthDate").textContent = fourthDate
    .toString()
    .substring(0, 15);

  if (
    fourthDate.toString().includes("Tue") ||
    fourthDate.toString().includes("Thu")
  ) {
    document.getElementById("fourthDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("fourthDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("fourthDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("fourthDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("fourthDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("fourthDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("fourthDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("fourthDateTimeSlot4").textContent = timeSlot6;
  }
  fourthDateTimeSlotString1 =
    fourthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("fourthDateTimeSlot1").textContent;
  fourthDateTimeSlotString2 =
    fourthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("fourthDateTimeSlot2").textContent;
  fourthDateTimeSlotString3 =
    fourthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("fourthDateTimeSlot3").textContent;
  fourthDateTimeSlotString4 =
    fourthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("fourthDateTimeSlot4").textContent;

  var fifthDateCheck = new Date(fourthDate.setDate(fourthDate.getDate() + 1));
  if (fifthDateCheck.toString().includes("Sat")) {
    fifthDate = new Date(fifthDateCheck.setDate(fifthDateCheck.getDate() + 2));
  } else if (fifthDateCheck.toString().includes("Sun")) {
    fifthDate = new Date(fifthDateCheck.setDate(fifthDateCheck.getDate() + 1));
  } else {
    fifthDate = new Date(fifthDateCheck.setDate(fifthDateCheck.getDate()));
  }
  document.getElementById("fifthDate").textContent = fifthDate
    .toString()
    .substring(0, 15);

  if (
    fifthDate.toString().includes("Tue") ||
    fifthDate.toString().includes("Thu")
  ) {
    document.getElementById("fifthDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("fifthDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("fifthDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("fifthDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("fifthDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("fifthDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("fifthDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("fifthDateTimeSlot4").textContent = timeSlot6;
  }
  fifthDateTimeSlotString1 =
    fifthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("fifthDateTimeSlot1").textContent;
  fifthDateTimeSlotString2 =
    fifthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("fifthDateTimeSlot2").textContent;
  fifthDateTimeSlotString3 =
    fifthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("fifthDateTimeSlot3").textContent;
  fifthDateTimeSlotString4 =
    fifthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("fifthDateTimeSlot4").textContent;

  var sixthDateCheck = new Date(fifthDate.setDate(fifthDate.getDate() + 1));
  if (sixthDateCheck.toString().includes("Sat")) {
    sixthDate = new Date(sixthDateCheck.setDate(sixthDateCheck.getDate() + 2));
  } else if (sixthDateCheck.toString().includes("Sun")) {
    sixthDate = new Date(sixthDateCheck.setDate(sixthDateCheck.getDate() + 1));
  } else {
    sixthDate = new Date(sixthDateCheck.setDate(sixthDateCheck.getDate()));
  }
  document.getElementById("sixthDate").textContent = sixthDate
    .toString()
    .substring(0, 15);

  if (
    sixthDate.toString().includes("Tue") ||
    sixthDate.toString().includes("Thu")
  ) {
    document.getElementById("sixthDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("sixthDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("sixthDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("sixthDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("sixthDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("sixthDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("sixthDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("sixthDateTimeSlot4").textContent = timeSlot6;
  }
  sixthDateTimeSlotString1 =
    sixthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("sixthDateTimeSlot1").textContent;
  sixthDateTimeSlotString2 =
    sixthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("sixthDateTimeSlot2").textContent;
  sixthDateTimeSlotString3 =
    sixthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("sixthDateTimeSlot3").textContent;
  sixthDateTimeSlotString4 =
    sixthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("sixthDateTimeSlot4").textContent;

  var seventhDateCheck = new Date(sixthDate.setDate(sixthDate.getDate() + 1));
  if (seventhDateCheck.toString().includes("Sat")) {
    seventhDate = new Date(
      seventhDateCheck.setDate(seventhDateCheck.getDate() + 2)
    );
  } else if (seventhDateCheck.toString().includes("Sun")) {
    seventhDate = new Date(
      seventhDateCheck.setDate(seventhDateCheck.getDate() + 1)
    );
  } else {
    seventhDate = new Date(
      seventhDateCheck.setDate(seventhDateCheck.getDate())
    );
  }
  document.getElementById("seventhDate").textContent = seventhDate
    .toString()
    .substring(0, 15);

  if (
    seventhDate.toString().includes("Tue") ||
    seventhDate.toString().includes("Thu")
  ) {
    document.getElementById("seventhDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("seventhDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("seventhDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("seventhDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("seventhDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("seventhDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("seventhDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("seventhDateTimeSlot4").textContent = timeSlot6;
  }
  seventhDateTimeSlotString1 =
    seventhDate.toString().substring(0, 15) +
    " " +
    document.getElementById("seventhDateTimeSlot1").textContent;
  seventhDateTimeSlotString2 =
    seventhDate.toString().substring(0, 15) +
    " " +
    document.getElementById("seventhDateTimeSlot2").textContent;
  seventhDateTimeSlotString3 =
    seventhDate.toString().substring(0, 15) +
    " " +
    document.getElementById("seventhDateTimeSlot3").textContent;
  seventhDateTimeSlotString4 =
    seventhDate.toString().substring(0, 15) +
    " " +
    document.getElementById("seventhDateTimeSlot4").textContent;

  var eighthDateCheck = new Date(
    seventhDate.setDate(seventhDate.getDate() + 1)
  );
  if (eighthDateCheck.toString().includes("Sat")) {
    eighthDate = new Date(
      eighthDateCheck.setDate(eighthDateCheck.getDate() + 2)
    );
  } else if (eighthDateCheck.toString().includes("Sun")) {
    eighthDate = new Date(
      eighthDateCheck.setDate(eighthDateCheck.getDate() + 1)
    );
  } else {
    eighthDate = new Date(eighthDateCheck.setDate(eighthDateCheck.getDate()));
  }
  document.getElementById("eighthDate").textContent = eighthDate
    .toString()
    .substring(0, 15);

  if (
    eighthDate.toString().includes("Tue") ||
    eighthDate.toString().includes("Thu")
  ) {
    document.getElementById("eighthDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("eighthDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("eighthDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("eighthDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("eighthDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("eighthDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("eighthDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("eighthDateTimeSlot4").textContent = timeSlot6;
  }
  eighthDateTimeSlotString1 =
    eighthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("eighthDateTimeSlot1").textContent;
  eighthDateTimeSlotString2 =
    eighthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("eighthDateTimeSlot2").textContent;
  eighthDateTimeSlotString3 =
    eighthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("eighthDateTimeSlot3").textContent;
  eighthDateTimeSlotString4 =
    eighthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("eighthDateTimeSlot4").textContent;

  var ninthDateCheck = new Date(eighthDate.setDate(eighthDate.getDate() + 1));
  if (ninthDateCheck.toString().includes("Sat")) {
    ninthDate = new Date(ninthDateCheck.setDate(ninthDateCheck.getDate() + 2));
  } else if (ninthDateCheck.toString().includes("Sun")) {
    ninthDate = new Date(ninthDateCheck.setDate(ninthDateCheck.getDate() + 1));
  } else {
    ninthDate = new Date(ninthDateCheck.setDate(ninthDateCheck.getDate()));
  }
  document.getElementById("ninthDate").textContent = ninthDate
    .toString()
    .substring(0, 15);

  if (
    ninthDate.toString().includes("Tue") ||
    ninthDate.toString().includes("Thu")
  ) {
    document.getElementById("ninthDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("ninthDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("ninthDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("ninthDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("ninthDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("ninthDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("ninthDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("ninthDateTimeSlot4").textContent = timeSlot6;
  }
  ninthDateTimeSlotString1 =
    ninthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("ninthDateTimeSlot1").textContent;
  ninthDateTimeSlotString2 =
    ninthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("ninthDateTimeSlot2").textContent;
  ninthDateTimeSlotString3 =
    ninthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("ninthDateTimeSlot3").textContent;
  ninthDateTimeSlotString4 =
    ninthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("ninthDateTimeSlot4").textContent;

  var tenthDateCheck = new Date(ninthDate.setDate(ninthDate.getDate() + 1));
  if (tenthDateCheck.toString().includes("Sat")) {
    tenthDate = new Date(tenthDateCheck.setDate(tenthDateCheck.getDate() + 2));
  } else if (tenthDateCheck.toString().includes("Sun")) {
    tenthDate = new Date(tenthDateCheck.setDate(tenthDateCheck.getDate() + 1));
  } else {
    tenthDate = new Date(tenthDateCheck.setDate(tenthDateCheck.getDate()));
  }
  document.getElementById("tenthDate").textContent = tenthDate
    .toString()
    .substring(0, 15);

  if (
    tenthDate.toString().includes("Tue") ||
    tenthDate.toString().includes("Thu")
  ) {
    document.getElementById("tenthDateTimeSlot1").textContent = timeSlot3;
    document.getElementById("tenthDateTimeSlot2").textContent = timeSlot4;
    document.getElementById("tenthDateTimeSlot3").textContent = timeSlot7;
    document.getElementById("tenthDateTimeSlot4").textContent = timeSlot8;
  } else {
    document.getElementById("tenthDateTimeSlot1").textContent = timeSlot1;
    document.getElementById("tenthDateTimeSlot2").textContent = timeSlot2;
    document.getElementById("tenthDateTimeSlot3").textContent = timeSlot5;
    document.getElementById("tenthDateTimeSlot4").textContent = timeSlot6;
  }
  tenthDateTimeSlotString1 =
    tenthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("tenthDateTimeSlot1").textContent;
  tenthDateTimeSlotString2 =
    tenthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("tenthDateTimeSlot2").textContent;
  tenthDateTimeSlotString3 =
    tenthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("tenthDateTimeSlot3").textContent;
  tenthDateTimeSlotString4 =
    tenthDate.toString().substring(0, 15) +
    " " +
    document.getElementById("tenthDateTimeSlot4").textContent;

  (function () {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm_share",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q);
    }
  })();
}

setTimeout(() => {
  trainingTabInfo();
}, "3000");
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });


  // Popup Typeform with Populated URL Parameters
function openTypeForm1() {
  typeformPopup(typeformURL, firstDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm2() {
  typeformPopup(typeformURL, firstDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm3() {
  typeformPopup(typeformURL, firstDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm4() {
  typeformPopup(typeformURL, firstDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm5() {
  typeformPopup(typeformURL, secondDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm6() {
  typeformPopup(typeformURL, secondDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm7() {
  typeformPopup(typeformURL, secondDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm8() {
  typeformPopup(typeformURL, secondDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm9() {
  typeformPopup(typeformURL, thirdDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm10() {
  typeformPopup(typeformURL, thirdDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm11() {
  typeformPopup(typeformURL, thirdDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm12() {
  typeformPopup(typeformURL, thirdDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm13() {
  typeformPopup(typeformURL, fourthDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm14() {
  typeformPopup(typeformURL, fourthDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm15() {
  typeformPopup(typeformURL, fourthDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm16() {
  typeformPopup(typeformURL, fourthDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm17() {
  typeformPopup(typeformURL, fifthDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm18() {
  typeformPopup(typeformURL, fifthDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm19() {
  typeformPopup(typeformURL, fifthDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm20() {
  typeformPopup(typeformURL, fifthDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm21() {
  typeformPopup(typeformURL, sixthDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm22() {
  typeformPopup(typeformURL, sixthDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm23() {
  typeformPopup(typeformURL, sixthDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm24() {
  typeformPopup(typeformURL, sixthDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm25() {
  typeformPopup(typeformURL, seventhDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm26() {
  typeformPopup(typeformURL, seventhDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm27() {
  typeformPopup(typeformURL, seventhDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm28() {
  typeformPopup(typeformURL, seventhDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm29() {
  typeformPopup(typeformURL, eighthDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm30() {
  typeformPopup(typeformURL, eighthDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm31() {
  typeformPopup(typeformURL, eighthDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm32() {
  typeformPopup(typeformURL, eighthDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm33() {
  typeformPopup(typeformURL, ninthDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm34() {
  typeformPopup(typeformURL, ninthDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm35() {
  typeformPopup(typeformURL, ninthDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm36() {
  typeformPopup(typeformURL, ninthDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
function openTypeForm37() {
  typeformPopup(typeformURL, tenthDateTimeSlotString1, "webinar", supplier_id, supplier_name);
}
function openTypeForm38() {
  typeformPopup(typeformURL, tenthDateTimeSlotString2, "webinar", supplier_id, supplier_name);
}
function openTypeForm39() {
  typeformPopup(typeformURL, tenthDateTimeSlotString3, "webinar", supplier_id, supplier_name);
}
function openTypeForm40() {
  typeformPopup(typeformURL, tenthDateTimeSlotString4, "webinar", supplier_id, supplier_name);
}
  /*
// Sort suppliers alphabetically
const sortedSuppliers = suppliers.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
});

// Create cards for all suppliers
function popSuppliers() {
  sortedSuppliers.forEach((supplier) => {
    let supplierLink = document.createElement("a");
    supplierList.append(supplierLink);
    supplierLink.outerHTML = `<a href="${
      supplier.url
    }" class="supplier-info-center-card">
    <div>
        ${supplier.logo ? `<img src="${supplier.logo}">` : ""}
      <div class="supplier-name">
        <h3>
          ${supplier.name}
        </h3>
      </div>
      <div class="supplier-info-center-card-learn-more">
        <p>Learn More</p>
      </div>
    </div>
  </a>`;
  });
}

// Remove all supplier cards and then recreate cards for suppliers in selected state
function selectState(state) {
  let supplierCards = document.querySelectorAll(".supplier-info-center-card");
  supplierCards.forEach((div) => {
    div.remove();
  });
  if (state == "All") {
    popSuppliers();
  } else {
    sortedSuppliers.forEach((supplier) => {
      if (supplier.service_area.includes(state)) {
        supplierLink = document.createElement("a");
        supplierList.append(supplierLink);
        supplierLink.outerHTML = `<a href="/${
          supplier.url
        }" class="supplier-info-center-card">
      <div>
      ${supplier.logo ? `<img src="${supplier.logo}">` : ""}
        <div class="supplier-name">
          <h3>
            ${supplier.name}
          </h3>
        </div>
        <div class="supplier-info-center-card-learn-more">
          <p>Learn More</p>
        </div>
      </div>
    </a>`;
      }
    });
  }
}

// Populate Suppliers's Headline
//function popSupplierHeadline() {
//  supplierHeadline.innerText =  supplier.headline;
//}
*/