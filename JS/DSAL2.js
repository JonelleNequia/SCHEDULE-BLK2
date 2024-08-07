var currentDate = document.getElementById("current_date");
var daysTag = document.getElementById("days");
var nextIcon = document.getElementById("next_icon");
var prevIcon = document.getElementById("prev_icon");
var pop = document.getElementById("pop-up");


let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

var renderCalendar = () => {
    daysTag.innerHTML = '';

    let firstDay = new Date(currYear, currMonth, 1).getDay(); 
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

    let liTag = "";

    for (let i = 1; i <= firstDay; i++) {
        liTag += `<li></li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let day = new Date(currYear, currMonth, i).getDay();
        if (day === 5) {
            liTag += `<li class="highlight">${i}</li>`;
        } else {
            liTag += `<li>${i}</li>`;
        }
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;

    daysTag.innerHTML = liTag;

    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    if (currMonth === currentMonth && currYear === currentYear) {
        let allLiTags = daysTag.getElementsByTagName("li");
        for (let li of allLiTags) {
            if (parseInt(li.textContent) === currentDay) {
                li.classList.add("days");
            }
        }
    }
}

function nextMonth() {
    currMonth++;
    if (currMonth > 11) {
        currMonth = 0;
        currYear++;
    }
    renderCalendar();
}

function prevMonth() {
    currMonth--;
    if (currMonth < 0) {
        currMonth = 11;
        currYear--;
    }
    renderCalendar();
}

nextIcon.addEventListener("click", nextMonth);
prevIcon.addEventListener("click", prevMonth);

renderCalendar();

function b_arrow() {
    window.history.back();
}