document.addEventListener("DOMContentLoaded", function() {

//<-- COLLECT INFO FROM FORM -->
    const myForm = document.forms.collect;
    const yearsPlaceholder = document.getElementById("yearsPlaceholder");
    const monthsPlaceholder = document.getElementById("monthsPlaceholder");
    const daysPlaceholder = document.getElementById("daysPlaceholder");
//<---------------------------->

//<-- CALCULATE AGE FUNCTION -->
    const calculateAge = (birthDate) => {
        const currentDate = new Date();
        const birthDateObj = new Date(birthDate);
      
        let ageYears = currentDate.getFullYear() - birthDateObj.getFullYear();
        const currentMonth = currentDate.getMonth();
        const birthMonth = birthDateObj.getMonth();
      
        if(currentMonth < birthMonth || (currentMonth === birthMonth && currentMonth < birthMonth)) {
            years--;
        }
      
        let ageMonths = (currentDate.getMonth() + 12) - birthDateObj.getMonth();
        ageMonths = ageMonths % 12;
      
        const currentDay = currentDate.getDate();
        const birthDay = birthDateObj.getDate();
      
        let ageDays = currentDay - birthDay;
      
        if (ageDays < 0) {
          // Get the number of days left in the previous month
          const daysInPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
          ageDays = daysInPreviousMonth + ageDays;
          ageMonths--; // Adjust for day being earlier than the birth day
        }
      
        return {
          years: ageYears,
          months: ageMonths,
          days: ageDays,
        };
      }
//<----------------------------->

//<-- UPDATE PLACE HOLDERS -->
    const updatePlaceholders = () => {
      const dayInput = myForm.elements.day.value;
      const monthInput = myForm.elements.month.value;
      const yearsInput = myForm.elements.years.value;
  
      // Validate the input (Check if day, month, and year are not empty)
      if (!dayInput || !monthInput || !yearsInput) {
        yearsPlaceholder.innerText = "-- ";
        monthsPlaceholder.innerText = "-- ";
        daysPlaceholder.innerText = "-- ";
        return;
      }
  
      const birthDate = `${yearsInput}-${monthInput.padStart(2, '0')}-${dayInput.padStart(2, '0')}`;
      const age = calculateAge(birthDate);
  
      yearsPlaceholder.innerText = age.years;
      monthsPlaceholder.innerText = age.months;
      daysPlaceholder.innerText = age.days;
    }

//<-------------------------->
  
//<-- SUBMIT BUTTON -->
    myForm.addEventListener('submit', function(event) {
      event.preventDefault();
      updatePlaceholders();
    });
//<------------------->  

//<-- Update placeholders whenever inputs change -->
    myForm.elements.day.addEventListener('change', updatePlaceholders);
    myForm.elements.month.addEventListener('change', updatePlaceholders);
    myForm.elements.years.addEventListener('change', updatePlaceholders);
  });
  
//<------------------------------------------------>
  
