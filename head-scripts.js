function typeformPopup(typeformURL, webinarSlot, request_type, supplier) {
  var reference = typeformEmbed.makePopup(
    typeformURL +
      "?" +
      "webinarslot=" +
      webinarSlot +
      "&request_type=" +
      request_type +
      "&supplier=" +
      supplier,
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
