
    let age = 25;
    let hasLicense = true;
    let isSober = true;

    if (age >= 18 && hasLicense && isSober) {
      console.log("You can drive.");
    } else {
      console.log("You cannot drive.");
    }
    

  
    let score = 85;

    if (score >= 90) {
      console.log("Grade: A");
    } else if (score >= 80) {
      console.log("Grade: B");
    } else if (score >= 70) {
      console.log("Grade: C");
    } else if (score >= 60) {
      console.log("Grade: D");
    } else {
      console.log("Grade: F");
    }
    


    let user = {
      age: 30,
      hasMembership: true,
      membershipType: 'gold',
      hasGuestPass: false
    };

    if (user.age >= 18 && user.hasMembership && (user.membershipType === 'gold' || user.membershipType === 'platinum')) {
      console.log("Access to all areas.");
    } else if (user.age >= 18 && user.hasMembership && user.membershipType === 'silver') {
      console.log("Access to standard areas.");
    } else if (user.age >= 18 && user.hasGuestPass) {
      console.log("Access with guest pass.");
    } else if (user.age < 18) {
      console.log("You are too young to enter.");
    } else {
      console.log("No access without membership or guest pass.");
    }
  

    function canAccessEvent(user) {
      if (user.age >= 18 && user.hasTicket && user.isVIP) {
        return "Access to VIP section.";
      } else if (user.age >= 18 && user.hasTicket && user.hasGuestPass) {
        return "Access with guest pass.";
      } else if (user.age >= 18 && user.hasTicket) {
        return "Access to general section.";
      } else if (user.age < 18) {
        return "You are too young to enter.";
      } else {
        return "No access without a ticket.";
      }
    }

    let user1 = {
      age: 20,
      hasTicket: true,
      isVIP: false,
      hasGuestPass: true
    };

    console.log(canAccessEvent(user));
    
