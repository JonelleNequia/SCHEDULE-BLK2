var PTLEC = document.getElementById('PTLEC');
var DSALEC = document.getElementById('DSALEC');
var PTLAB = document.getElementById('PTLAB');
var ES = document.getElementById('ES');
var ETHICS = document.getElementById('ETHICS');
var SPORTS = document.getElementById('SPORTS');
var DM = document.getElementById('DM');
var OOPLEC = document.getElementById('OOPLEC');
var OOPLAB = document.getElementById('OOPLAB');
var DSALAB = document.getElementById('DSALAB');
var RPH = document.getElementById('RPH');

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

var renderCalendar = () => {
    Dcon.innerHTML = '<img src="assets/Default.svg">By schedule';

    let firstDay = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    
    let calendarHTML = "";

    for (let i = 0; i < firstDay; i++) {
        calendarHTML += "<div class='empty'></div>";
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let day = new Date(currYear, currMonth, i).getDay();

        if (day === 4) {
            dayClass = "thursday";
        } else if (day === 5) {
            dayClass = "friday";
        } else if (day === 6) {
            dayClass = "saturday";
        }
    }

    Dcon.innerHTML += calendarHTML;

    let today = new Date().getDay();

    if (today === 4) {
        Dcon.innerHTML += "<div> - Thursday</div>";
        Dcon.style.width = '200px';
        SPORTS.style.display = 'none';
        OOPLEC.style.display = 'none';
        OOPLAB.style.display = 'none';
        DSALAB.style.display = 'none';
        c_name.style.height = '950px';
        Thursday_sort();
        setInterval(ThursdayCourseTimer, 1000);
    } else if (today === 5) {
        Dcon.innerHTML += "<div> - Friday</div>";
        Dcon.style.width = '170px';
        OOPLEC.style.display = 'none';
        OOPLAB.style.display = 'none';
        PTLAB.style.display = 'none';
        c_name.style.height = '950px';
        Friday_sort();
        setInterval(FridayCourseTimer, 1000);
    } else if (today === 6) {
        Dcon.innerHTML += "<div> - Saturday</div>";
        Dcon.style.width = '190px';
        PTLAB.style.display = 'none';
        DSALAB.style.display = 'none';
        DSALEC.style.display = 'none';
        PTLEC.style.display = 'none';
        c_name.style.height = '950px';
        Saturday_sort();
        setInterval(SaturdayCourseTimer, 1000);
    } else {
        Dcon.innerHTML += "<div></div>";
        Dcon.style.width = '200px'
        c_name.style.height = '1040px';
        time.style.display = 'none';
        By_sched();
    }
};

var Sort = document.getElementById("Sort");
var Dcon = document.getElementById("Dcon");
var Name = document.getElementById("name");
var BTS = document.getElementById("BTS");
var NI = document.querySelector('.name img');
var BTSI = document.querySelector('.BTS img');
var DconImg = Dcon.querySelector('img');
var c_name = document.getElementById("c_name");
var time = document.getElementById("time");
let today = new Date().getDay();

function updateState() {
    var activeElement = localStorage.getItem('activeElement');
    
    if (activeElement === 'name') {
        Unsorted = true;
        Name.style.backgroundColor = '#86c8ff80';
        Name.style.color = '#00569c';
        BTS.style.backgroundColor = 'transparent';
        BTS.style.color = '#494949';
        NI.style.display = 'flex';
        BTSI.style.display = 'none';
        Dcon.style.width = '100px';
        c_name.style.height = '1150px';
        DconImg.src = 'assets/Default.svg';
        Dcon.innerHTML = '<img src="assets/Default.svg">By name';
        if (today === 4) {
            setInterval(ThursdayCourseTimer, 1000);
        } else if (today === 5) {
            setInterval(FridayCourseTimer, 1000);
        } else if (today === 6) {
            setInterval(SaturdayCourseTimer, 1000);
        } else {
            time.style.display = 'none';
        }
        sortDivs();
    } else if (activeElement === 'bts') {
        BTS.style.backgroundColor = '#86c8ff80';
        BTS.style.color = '#00569c';
        Name.style.backgroundColor = 'transparent';
        Name.style.color = '#494949';
        NI.style.display = 'none';
        Dcon.style.width = '200px';
        BTSI.style.display = 'flex';
        DconImg.src = 'assets/Default.svg';
        Dcon.innerHTML = '<img src="assets/Default.svg">By schedule';
        renderCalendar();
    } else {
        Name.style.backgroundColor = 'transparent';
        Name.style.color = '#494949';
        BTS.style.backgroundColor = '#86c8ff80';
        BTS.style.color = '#494949';
        NI.style.display = 'none';
        Dcon.style.width = '200px';
        BTSI.style.display = 'flex';
        DconImg.src = 'assets/Default.svg';
        Dcon.innerHTML = '<img src="assets/Default.svg">By schedule';
        time.style.display = 'none';
        c_name.style.height = '1150px';
        if (today === 4) {
            setInterval(ThursdayCourseTimer, 1000);
        } else if (today === 5) {
            setInterval(FridayCourseTimer, 1000);
        } else if (today === 6) {
            setInterval(SaturdayCourseTimer, 1000);
        } else {
            time.style.display = 'none';
        }
        renderCalendar();
    }
}

updateState();

Sort.addEventListener('click', function() {
    Sort.style.display = 'none';
});

Dcon.addEventListener('click', function() {
    Sort.style.display = 'flex';
});

Name.addEventListener('click', function() {
    Name.style.backgroundColor = '#86c8ff80';
    Name.style.color = '#00569c';
    BTS.style.backgroundColor = 'transparent';
    BTS.style.color = '#494949';
    NI.style.display = 'flex';
    BTSI.style.display = 'none';
    Dcon.style.width = '100px';
    DconImg.src = 'assets/Default.svg';
    Dcon.innerHTML = '<img src="assets/Default.svg">By name';
    localStorage.setItem('activeElement', 'name');
    PTLEC.style.display = 'flex';
    PTLAB.style.display = 'flex';
    DSALEC.style.display = 'flex';
    ES.style.display = 'flex';
    ETHICS.style.display = 'flex';
    SPORTS.style.display = 'flex';
    DM.style.display = 'flex';
    OOPLEC.style.display = 'flex';
    OOPLAB.style.display = 'flex';
    DSALAB.style.display = 'flex';
    RPH.style.display = 'flex';
    c_name.style.height = '1150px';
    updateState();
});

BTS.addEventListener('click', function() {
    Unsorted = false;
    BTS.style.backgroundColor = '#86c8ff80';
    BTS.style.color = '#00569c';
    Name.style.backgroundColor = 'transparent';
    Name.style.color = '#494949';
    NI.style.display = 'none';
    BTSI.style.display = 'flex';
    Dcon.style.width = '200px';
    DconImg.src = 'assets/Default.svg';
    Dcon.innerHTML = '<img src="assets/Default.svg">By schedule';
    localStorage.setItem('activeElement', 'bts');
    renderCalendar();
    updateState();
});

function sortDivs() {
    const divs = Array.from(c_name.children);

    divs.sort((a, b) => {
        const textA = a.querySelector('a').textContent.trim().toLowerCase();
        const textB = b.querySelector('a').textContent.trim().toLowerCase();
        return textA.localeCompare(textB);
    });

    c_name.innerHTML = '';
    divs.forEach(div => c_name.appendChild(div));
}

function By_sched() {
    c_name.insertBefore(OOPLAB, c_name.firstChild);
    c_name.insertBefore(OOPLEC, c_name.firstChild);
    c_name.insertBefore(SPORTS, c_name.firstChild);
    c_name.insertBefore(DSALAB, c_name.firstChild);
    c_name.insertBefore(ETHICS, c_name.firstChild);
    c_name.insertBefore(RPH, c_name.firstChild);
    c_name.insertBefore(DM, c_name.firstChild);
    c_name.insertBefore(ES, c_name.firstChild);
    c_name.insertBefore(PTLAB, c_name.firstChild);
    c_name.insertBefore(DSALEC, c_name.firstChild);
    c_name.insertBefore(PTLEC, c_name.firstChild);
}

function Thursday_sort() {
    c_name.insertBefore(ETHICS, c_name.firstChild);
    c_name.insertBefore(RPH, c_name.firstChild);
    c_name.insertBefore(DM, c_name.firstChild);
    c_name.insertBefore(ES, c_name.firstChild);
    c_name.insertBefore(PTLAB, c_name.firstChild);
    c_name.insertBefore(DSALEC, c_name.firstChild);
    c_name.insertBefore(PTLEC, c_name.firstChild);   
}

function Friday_sort() {
    c_name.insertBefore(ETHICS, c_name.firstChild);
    c_name.insertBefore(RPH, c_name.firstChild);
    c_name.insertBefore(DM, c_name.firstChild);
    c_name.insertBefore(ES, c_name.firstChild);
    c_name.insertBefore(SPORTS, c_name.firstChild);
    c_name.insertBefore(DSALAB, c_name.firstChild);
    c_name.insertBefore(DSALEC, c_name.firstChild);
    c_name.insertBefore(PTLEC, c_name.firstChild);
}

function Saturday_sort() {
    c_name.insertBefore(ETHICS, c_name.firstChild);
    c_name.insertBefore(RPH, c_name.firstChild);
    c_name.insertBefore(DM, c_name.firstChild);
    c_name.insertBefore(ES, c_name.firstChild);
    c_name.insertBefore(SPORTS, c_name.firstChild);
    c_name.insertBefore(OOPLAB, c_name.firstChild);
    c_name.insertBefore(OOPLEC, c_name.firstChild);
}

var courseDate = document.getElementById('course_date');
var pointing_course_date = document.getElementById("pointing_course_date");
var hoursElement = document.getElementById('hours');
var minElement = document.getElementById('min');
var secElement = document.getElementById('sec');
var nextSubject = document.getElementById('nextSubject');
var Subject = document.getElementById('Subject');

function ThursdayCourseTimer() {
    var now = new Date();
    let endTime;
    let showNextSubject = false;

    nextSubject.style.display = 'none';
    Subject.innerHTML = '';

    if ((now.getHours() === 7 && now.getMinutes() >= 30) || 
        (now.getHours() === 8 && now.getMinutes() < 30)) {

        if (now.getHours() === 8 && now.getMinutes() >= 20 && now.getMinutes() < 30) {
            showNextSubject = true;
            nextSubject.style.display = 'flex';
            Subject.innerHTML = 'DATA STRUCTURES AND ALGORITHMS (LEC) - 207';
        }

        endTime = new Date();
        endTime.setHours(8, 30, 0, 0);
        courseDate.innerHTML = '212';
        pointing_course_date.innerHTML = "PLATFORM TECHNOLOGIES 1 (LEC)";
    } else if ((now.getHours() === 8 && now.getMinutes() >= 30) || 
               (now.getHours() === 9 && now.getMinutes() < 30)) {

            if (now.getHours() === 9 && now.getMinutes() >= 20 && now.getMinutes() < 30) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'PLATFORM TECHNOLOGIES 1 (LAB) - 101';
            }

        endTime = new Date();
        endTime.setHours(9, 30, 0, 0);
        courseDate.innerHTML = '207';
        pointing_course_date.innerHTML = "DATA STRUCTURES AND ALGORITHMS (LEC)";
    } else if ((now.getHours() === 9 && now.getMinutes() >= 30) ||
               (now.getHours() === 10 && now.getMinutes() < 30) ||
               (now.getHours() === 10 && now.getMinutes() >= 30) ||
               (now.getHours() === 11 && now.getMinutes() < 30) ||
               (now.getHours() === 11 && now.getMinutes() >= 30) ||
               (now.getHours() === 12 && now.getMinutes() < 30)) {
        endTime = new Date();
        endTime.setHours(12, 30, 0, 0);
        courseDate.innerHTML = "101";
        pointing_course_date.innerHTML = "PLATFORM TECHNOLOGIES 1 (LAB)";
    } else if ((now.getHours() === 12 && now.getMinutes() >= 30) ||
               (now.getHours() === 13 && now.getMinutes() < 0)) {

            if ((now.getHours() === 12 && now.getMinutes() >= 50) ||
                (now.getHours() === 13 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'CHISMISAN TIME - kahit saan';
            }

        endTime = new Date();
        endTime.setHours(13, 0, 0, 0);
        courseDate.innerHTML = "";
        pointing_course_date.innerHTML = "LunchBreak";
    } else if ((now.getHours() === 13 && now.getMinutes() >= 0) ||
               (now.getHours() === 14 && now.getMinutes() < 0)) {

            if ((now.getHours() === 13 && now.getMinutes() >= 50) ||
                now.getHours() === 14 && now.getMinutes() < 0) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'ENVIRONMENTAL SCIENCE - 208';
            }

        endTime = new Date();
        endTime.setHours(14, 0, 0, 0);
        courseDate.innerHTML = "Kahit saan";
        pointing_course_date.innerHTML = "CHISMISAN TIME";
    } else if ((now.getHours() === 14 && now.getMinutes() >= 0) ||
               (now.getHours() === 15 && now.getMinutes() < 0)) {

            if ((now.getHours() === 14 && now.getMinutes() >= 50) ||
                (now.getHours() === 15 && now.getMinutes() > 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'DISCRETE MATHEMATICS - 210';
            }

        endTime = new Date();
        endTime.setHours(15, 0, 0, 0);
        courseDate.innerHTML = "208";
        pointing_course_date.innerHTML = "ENVIRONMENTAL SCIENCE";
    } else if ((now.getHours() === 15 && now.getMinutes() >= 0) ||
               (now.getHours() === 16 && now.getMinutes() < 0)) {

            if ((now.getHours() === 15 && now.getMinutes() >= 50) ||
                (now.getHours() === 16 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'READING IN PHILIPPINE HISTORY - 210';
            }

        endTime = new Date();
        endTime.setHours(16, 0, 0, 0);
        courseDate.innerHTML = "210";
        pointing_course_date.innerHTML = "DISCRETE MATHEMATICS";
    } else if ((now.getHours() === 16 && now.getMinutes() >= 0) ||
               (now.getHours() === 17 && now.getMinutes() < 0)) {

            if ((now.getHours() === 16 && now.getMinutes() >= 50) ||
                (now.getHours() === 17 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'ETHICS - 212';
            }

        endTime = new Date();
        endTime.setHours(17, 0, 0, 0);
        courseDate.innerHTML = "210";
        pointing_course_date.innerHTML = "READING IN PHILIPPINE HISTORY";
    } else if ((now.getHours() === 17 && now.getMinutes() >= 0) ||
               (now.getHours() === 18 && now.getMinutes() < 0)) {
        endTime = new Date();
        endTime.setHours(18, 0, 0, 0);
        courseDate.innerHTML = "212";
        pointing_course_date.innerHTML = "ETHICS";
    } else {
        courseDate.innerHTML = "";
        endTime = null;
        time.style.display = 'none';
        c_name.style.height = '100%';
    }

    if (endTime) {
        const timeDiff = endTime - now;
        
        if (timeDiff <= 0) {
            hoursElement.textContent = '00';
            minElement.textContent = '00';
            secElement.textContent = '00';
            return;
        }

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        hoursElement.textContent = String(hours).padStart(2, '0');
        minElement.textContent = String(minutes).padStart(2, '0');
        secElement.textContent = String(seconds).padStart(2, '0');
    }

    
}

function FridayCourseTimer() {
    var now = new Date();
    let endTime;
    let showNextSubject = false;

    nextSubject.style.display = 'none';
    Subject.innerHTML = '';

    if ((now.getHours() === 7 && now.getMinutes() >= 30) || 
        (now.getHours() === 8 && now.getMinutes() < 30)) {

        if (now.getHours() === 8 && now.getMinutes() >= 20 && now.getMinutes() < 30) {
            showNextSubject = true;
            nextSubject.style.display = 'flex';
            Subject.innerHTML = 'DATA STRUCTURES AND ALGORITHMS (LEC) - 207';
        }
        endTime = new Date();
        endTime.setHours(8, 30, 0, 0);
        courseDate.innerHTML = '212';
        pointing_course_date.innerHTML = "PLATFORM TECHNOLOGIES 1 (LEC)";
    } else if ((now.getHours() === 8 && now.getMinutes() >= 30) || 
               (now.getHours() === 9 && now.getMinutes() < 30)) {

            if (now.getHours() === 9 && now.getMinutes() >= 20 && now.getMinutes() < 30) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'DATA STRUCTURES AND ALGORITHMS (LAB) - 101';
            }
        endTime = new Date();
        endTime.setHours(9, 30, 0, 0);
        courseDate.innerHTML = '207';
        pointing_course_date.innerHTML = "DATA STRUCTURES AND ALGORITHMS (LEC)";
    } else if ((now.getHours() === 9 && now.getMinutes() >= 30) ||
               (now.getHours() === 10 && now.getMinutes() < 30) ||
               (now.getHours() === 10 && now.getMinutes() >= 30) ||
               (now.getHours() === 11 && now.getMinutes() < 30) ||
               (now.getHours() === 11 && now.getMinutes() >= 30) ||
               (now.getHours() === 12 && now.getMinutes() < 30)) {
        endTime = new Date();
        endTime.setHours(12, 30, 0, 0);
        courseDate.innerHTML = "101";
        pointing_course_date.innerHTML = "DATA STRUCTURES AND ALGORITHMS (LAB)";
    } else if ((now.getHours() === 12 && now.getMinutes() >= 30) ||
               (now.getHours() === 13 && now.getMinutes() < 0)) {

            if ((now.getHours() === 12 && now.getMinutes() >= 50) ||
                (now.getHours() === 13 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'SPORTS - GYM1';
            }

        endTime = new Date();
        endTime.setHours(13, 0, 0, 0);
        courseDate.innerHTML = "";
        pointing_course_date.innerHTML = "LunchBreak";
    } else if ((now.getHours() === 13 && now.getMinutes() >= 0) ||
               (now.getHours() === 14 && now.getMinutes() < 0)) {

            if ((now.getHours() === 13 && now.getMinutes() >= 50) ||
                (now.getHours() === 14 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'ENVIRONMENTAL SCIENCE - 208';
            }

        endTime = new Date();
        endTime.setHours(14, 0, 0, 0);
        courseDate.innerHTML = "GYM1";
        pointing_course_date.innerHTML = "SPORTS";
    } else if ((now.getHours() === 14 && now.getMinutes() >= 0) ||
               (now.getHours() === 15 && now.getMinutes() < 0)) {

            if ((now.getHours() === 14 && now.getMinutes() >= 50) ||
                (now.getHours() === 15 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'DISCRETE MATHEMATICS - 210';
            }
                
        endTime = new Date();
        endTime.setHours(15, 0, 0, 0);
        courseDate.innerHTML = "208";
        pointing_course_date.innerHTML = "ENVIRONMENTAL SCIENCE";
    } else if ((now.getHours() === 15 && now.getMinutes() >= 0) ||
               (now.getHours() === 16 && now.getMinutes() < 0)) {

            if ((now.getHours() === 15 && now.getMinutes() >= 50) ||
                (now.getHours() === 16 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'READING IN PHILIPPINE HISTORY - 210';
            }

        endTime = new Date();
        endTime.setHours(16, 0, 0, 0);
        courseDate.innerHTML = "210";
        pointing_course_date.innerHTML = "DISCRETE MATHEMATICS";
    } else if ((now.getHours() === 16 && now.getMinutes() >= 0) ||
               (now.getHours() === 17 && now.getMinutes() < 0)) {

            if ((now.getHours() === 16 && now.getMinutes() >= 50) ||
                (now.getHours() === 17 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'ETHICS - 212';
            }

        endTime = new Date();
        endTime.setHours(17, 0, 0, 0);
        courseDate.innerHTML = "210";
        pointing_course_date.innerHTML = "READING IN PHILIPPINE HISTORY";
    } else if ((now.getHours() === 17 && now.getMinutes() >= 0) ||
               (now.getHours() === 18 && now.getMinutes() < 0)) {
        endTime = new Date();
        endTime.setHours(18, 0, 0, 0);
        courseDate.innerHTML = "212";
        pointing_course_date.innerHTML = "ETHICS";
    } else {
        courseDate.innerHTML = "";
        endTime = null;
    }

    if (endTime) {
        const timeDiff = endTime - now;
        
        if (timeDiff <= 0) {
            hoursElement.textContent = '00';
            minElement.textContent = '00';
            secElement.textContent = '00';
            return;
        }

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        hoursElement.textContent = String(hours).padStart(2, '0');
        minElement.textContent = String(minutes).padStart(2, '0');
        secElement.textContent = String(seconds).padStart(2, '0');
    }
}

function SaturdayCourseTimer() {
    var now = new Date();
    let endTime;
    let showNextSubject = false;

    nextSubject.style.display = 'none';
    Subject.innerHTML = '';

    if ((now.getHours() === 7 && now.getMinutes() >= 30) || 
        (now.getHours() === 8 && now.getMinutes() < 30) ||
        (now.getHours() === 8 && now.getMinutes() >= 30) ||
        (now.getHours() === 9 && now.getMinutes() < 30)) {

        if (now.getHours() === 9 && now.getMinutes() >= 20 && now.getMinutes() < 30) {
            showNextSubject = true;
            nextSubject.style.display = 'flex';
            Subject.innerHTML = 'OBJECT ORIENTED PROGRAMMING (LAB) - 104';
        }
        endTime = new Date();
        endTime.setHours(9, 30, 0, 0);
        courseDate.innerHTML = '207';
        pointing_course_date.innerHTML = "OBJECT ORIENTED PROGRAMMING (LEC)";
    } else if ((now.getHours() === 9 && now.getMinutes() >= 30) ||
               (now.getHours() === 10 && now.getMinutes() < 30) ||
               (now.getHours() === 10 && now.getMinutes() >= 30) ||
               (now.getHours() === 11 && now.getMinutes() < 30) ||
               (now.getHours() === 11 && now.getMinutes() >= 30) ||
               (now.getHours() === 12 && now.getMinutes() < 30)) {
        endTime = new Date();
        endTime.setHours(12, 30, 0, 0);
        courseDate.innerHTML = "104";
        pointing_course_date.innerHTML = "OBJECT ORIENTED PROGRAMMING (LAB)";
    } else if ((now.getHours() === 12 && now.getMinutes() >= 30) ||
               (now.getHours() === 13 && now.getMinutes() < 0)) {

            if ((now.getHours() === 12 && now.getMinutes() >= 50) ||
                (now.getHours() === 13 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'SPORTS - GYM1';
            }

        endTime = new Date();
        endTime.setHours(13, 0, 0, 0);
        courseDate.innerHTML = "";
        pointing_course_date.innerHTML = "LunchBreak";
    } else if ((now.getHours() === 13 && now.getMinutes() >= 0) ||
               (now.getHours() === 14 && now.getMinutes() < 0)) {

            if ((now.getHours() === 13 && now.getMinutes() >= 50) ||
                (now.getHours() === 14 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'ENVIRONMENTAL SCIENCE - 208';
            }

        endTime = new Date();
        endTime.setHours(14, 0, 0, 0);
        courseDate.innerHTML = "GYM1";
        pointing_course_date.innerHTML = "SPORTS";
    } else if ((now.getHours() === 14 && now.getMinutes() >= 0) ||
               (now.getHours() === 15 && now.getMinutes() < 0)) {

            if ((now.getHours() === 14 && now.getMinutes() >= 50) ||
                (now.getHours() === 15 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'DISCRETE MATHEMATICS - 210';
            }

        endTime = new Date();
        endTime.setHours(15, 0, 0, 0);
        courseDate.innerHTML = "208";
        pointing_course_date.innerHTML = "ENVIRONMENTAL SCIENCE";
    } else if ((now.getHours() === 15 && now.getMinutes() >= 0) ||
               (now.getHours() === 16 && now.getMinutes() < 0)) {

            if ((now.getHours() === 15 && now.getMinutes() >= 50) ||
                (now.getHours() === 16 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'READING IN PHILIPPINE HISTORY - 210';
            }

        endTime = new Date();
        endTime.setHours(16, 0, 0, 0);
        courseDate.innerHTML = "210";
        pointing_course_date.innerHTML = "DISCRETE MATHEMATICS";
    } else if ((now.getHours() === 16 && now.getMinutes() >= 0) ||
               (now.getHours() === 17 && now.getMinutes() < 0)) {

            if ((now.getHours() === 16 && now.getMinutes() >= 50) ||
                (now.getHours() === 17 && now.getMinutes() < 0)) {
                showNextSubject = true;
                nextSubject.style.display = 'flex';
                Subject.innerHTML = 'ETHICS - 212';
            }

        endTime = new Date();
        endTime.setHours(17, 0, 0, 0);
        courseDate.innerHTML = "210";
        pointing_course_date.innerHTML = "READING IN PHILIPPINE HISTORY";
    } else if ((now.getHours() === 17 && now.getMinutes() >= 0) ||
               (now.getHours() === 18 && now.getMinutes() < 0)) {
        endTime = new Date();
        endTime.setHours(18, 0, 0, 0);
        courseDate.innerHTML = "212";
        pointing_course_date.innerHTML = "ETHICS";
    } else {
        courseDate.innerHTML = "";
        endTime = null;
    }

    if (endTime) {
        const timeDiff = endTime - now;
        
        if (timeDiff <= 0) {
            hoursElement.textContent = '00';
            minElement.textContent = '00';
            secElement.textContent = '00';
            return;
        }

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        hoursElement.textContent = String(hours).padStart(2, '0');
        minElement.textContent = String(minutes).padStart(2, '0');
        secElement.textContent = String(seconds).padStart(2, '0');
    }
}
