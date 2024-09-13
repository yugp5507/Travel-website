// Start Sing Up validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.getElementById("gender").value;

  const nameRegex = /^[a-zA-Z\s]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


  if (!name || !nameRegex.test(name)) {
    alert("Please enter a valid name (only alphabets and spaces allowed).");
    return false;
  }

  
  if (!phone || !phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  
  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  
  if (!gender) {
    alert("Please select your gender.");
    return false;
  }

  
  if (!password || !passwordRegex.test(password)) {
    alert(
      "Password must be between 6-20 characters, include at least one number, one lowercase, and one uppercase letter."
    );
    return false;
  }

 
  return true;
}
// End Sing Up validation













// Start Log in validation
function validateform2() {
  const email = document.getElementById('email1').value.trim();
  const password = document.getElementById('password1').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  return true;
}

// End Log in validation














//start booking validation

  
  function validateBookingForm() {
    const destination = document.getElementById('destination').value.trim();
    const people = document.getElementById('people').value;
    const arrival = document.getElementById('arrival').value;
    const departure = document.getElementById('departure').value;
    const details = document.getElementById('details').value.trim();

    
    const textRegex = /^[a-zA-Z\s]+$/;

    
    if (!destination || !textRegex.test(destination)) {
      alert('Please enter a valid destination.');
      return false;
    }

    
    if (!people || people < 1) {
      alert('Please enter the number of people (at least 1).');
      return false;
    }

    
    if (!arrival) {
      alert('Please select an arrival date.');
      return false;
    }

    
    if (!departure) {
      alert('Please select a departure date.');
      return false;
    }

    
    if (new Date(departure) <= new Date(arrival)) {
      alert('Departure date must be after the arrival date.');
      return false;
    }

    
    if (!details || !textRegex.test(details)) {
      alert('Please enter your details (only letters and spaces allowed).');
      return false;
    }

    
    return true;
  }

  
  document.getElementById('booking-form').addEventListener('submit', function(event) {
    if (!validateBookingForm()) {
      event.preventDefault();
    }
  });



// End Booking validation
