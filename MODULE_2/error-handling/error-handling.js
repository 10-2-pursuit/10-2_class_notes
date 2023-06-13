const guests = [
  { id: 1, name: "Isaac Price", email: "iprice@gmail.com" },
  { id: 2, name: "Angelica Russo", email: "angie.russo@gmail.com" },
  { id: 3, },
];

// What is this function doing?

// If an error were thrown where would it trigger?

// How can we update it to throw an error?
// whats our happy path
function markGuestAsAttending(guest) {
  if (!guest.name) {
    // the THROW keyword creates and sends an error out of the scope of this function
      // if the error is not caught the entire program STOPs
    throw "GUEST NEEDS A NAME DUMMY.";
  }

  guest.isAttending = true;
  return guest;
}
// console.log(markGuestAsAttending(guests))

// how can we update this to throw an error?

// how can we update it to throw specific errors if name or email are missing?

function guestIsValid(guest) {
  if(!guest) throw "no guest entered"
  if (!guest.name && !guest.email) {
    throw "Guest is missing email and name";
  }
  if (!guest.id) {
    throw "Guest is missing ID";
  }
  if (!guest.email) {
    throw "Guest is missing email.";
  }
  if (!guest.name) {
    throw "Guest is missing name.";
  }

  return true;
}
console.log(guestIsValid(guests[0]));

function guestHasName(guest) {
  if (!guest.name) {
   throw`Guest ${guest.id} is missing a name!`;
  }
}

function checkInAllGuests(guests) {
  for (let guest of guests) {
    guest.checkedIn = true;
  }
}
// Explain what the following code does
// what is the `try`

// what is the `catch`

try {
  console.log("Checking in all guests...");
  for (let guest of guests) {
    guestHasName(guest);
  }

  checkInAllGuests(guests);
} catch (taco) {
  console.log("Guest check-in failed!");
  console.log(taco.toUpperCase());
}

console.log("file is complete!");
