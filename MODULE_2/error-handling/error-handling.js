  
  const guests = [
    { id: 1, name: "Isaac Price", email: "iprice@gmail.com" },
    { id: 2, name: "Angelica Russo", email: "angie.russo@gmail.com" },
    { id: 3, email: "chloe.barker@gmail.com" },
  ];

// What is this function doing?

// If an error were thrown where would it trigger?

// How can we update it to throw an error?

function markGuestAsAttending(guest) {
  if (!guest.name) {
    return "Guest must have a name to be marked as attending.";
  }

  guest.isAttending = true;
  return guest;
}

// how can we update this to throw an error?

// how can we update it to throw specific errors if name or email are missing?

function guestIsValid(guest) {
  if (!guest.name || !guest.email) {
    return "Guest is missing fields.";
  }

  return true;
}

function guestHasName(guest) {
    if (!guest.name) {
      throw `Guest ${guest.id} is missing a name!`;
    }
  }
  
  function checkInAllGuests(guests) {
    for (let guest of guests) {
      guest.checkedIn = true;
    }
  }

  
  // try {
  //   console.log("Checking in all guests...");
  //   for (let guest of guests) {
  //     guestHasName(guest);
  //   }
  
  //   checkInAllGuests(guests);
  // } catch (error) {
  //   console.log("Guest check-in failed!");
  //   console.log(error);
  // }

  console.log("file is complete!")
