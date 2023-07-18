document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.querySelector(".calendar");
    const monthYear = document.getElementById("month-year");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const daysContainer = document.querySelector(".days");
  
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    let currentDate = new Date();
  
    function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const days = new Date(year, month + 1, 0).getDate();
      const firstDayIndex = new Date(year, month, 1).getDay();
  
      monthYear.textContent = `${months[month]} ${year}`;
  
      let daysHTML = "";
      for (let i = 1; i <= firstDayIndex; i++) {
        daysHTML += "<div></div>";
      }
  
      for (let i = 1; i <= days; i++) {
        daysHTML += `<div>${i}</div>`;
      }
  
      daysContainer.innerHTML = daysHTML;
    }
  
    prevBtn.addEventListener("click", function () {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });
  
    nextBtn.addEventListener("click", function () {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });
  
    renderCalendar();
  });
  