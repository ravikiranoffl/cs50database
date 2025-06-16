import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const project = "https://tljshkeqzwjckqpxxbyw.supabase.co";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsanNoa2VxendqY2txcHh4Ynl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NTYzMzYsImV4cCI6MjA2NTQzMjMzNn0.uWWIiS40As4ZfszcMHfRzlq7V5gTfHD9dJknzR08qt0";

const supabase = createClient(project, apiKey);

let mobile = document.querySelector(".mobile-number");
let formBtn = document.querySelector(".workspace-btn");
let select = document.querySelector(".college");
let spinner = document.querySelector(".spinner");
let alert1 = document.querySelector(".error-alert");
let msg = document.querySelector(".alert-msg");
let registrants = document.querySelector(".registrant-details");
let cs50id = document.querySelector(".cs50id");
let regName = document.querySelector(".reg-name");
let regCourse = document.querySelector(".reg-course");
let regMode = document.querySelector(".reg-mode");
let regStatus = document.querySelector(".reg-status");
let regDate = document.querySelector(".reg-date");
let regDuration = document.querySelector(".reg-duration");
let regAttempt = document.querySelector(".reg-attempt");
let btnText = document.querySelector(".btn-text");
let lang = document.querySelector(".reg-lang");
let underCon = document.querySelector(".under-con");
let firstClose = document.querySelector(".first-close");
let playlist = document.querySelector(".playlist-btn");
let iframe = document.querySelector(".iframe");
let modal = document.querySelector(".modal");
let modalTitle = document.querySelector(".modal-title");
let viewModalBtn = document.querySelector(".view-modal-btn");
let mark = document.querySelector(".mark");
let flashAlert = document.querySelector(".flash-alert");
let alertHead = document.querySelector(".alert-heading");
let mainPage = document.querySelector(".main-page1");
let marqueeIcon = document.querySelector(".marquee-icon");
let isFetched = false;

mobile.addEventListener("paste", (e) => e.preventDefault());
mobile.addEventListener("copy", (e) => e.preventDefault());
mobile.addEventListener("cut", (e) => e.preventDefault());

function range(start, end) {
  let arr = Array.from(
    {
      length: end - start,
    },
    (_, i) => i + start
  );
  return arr;
}
if (mobile.value === "") {
  select.classList.add("d-none");
}

function blockPortal() {
  if (isFetched) return;
  let today = new Date();
  let getHour = today.getHours();
  let block = [23, 0, 1, 2, 3, 4];
  if (block.includes(getHour)) {
    mobile.value = "";
    mobile.disabled = true;
    select.disabled = true;
    mobile.classList.add("no-cursor");
    registrants.classList.add("d-none");
    mainPage.classList.add("cursor-block");

    mobile.classList.add("cursor-block");
    select.classList.add("cursor-block");
    formBtn.classList.add("cursor-block");
    formBtn.disabled = true;
    btnText.textContent = "⚠️ Temporarily Unavailable!";
    formBtn.classList.add("btn-danger");

    flashAlert.classList.add("alert-danger");
    marqueeIcon.classList.add("fa-triangle-exclamation");
    mark.classList.add("marquee-bg-changer");
    alertHead.textContent = "Alert!";
    let firstTime = String(block[0]);
    let lastTime = String(block[block.length - 1]);
    let availTime = String(block[block.length - 1] + 1);

    if (firstTime.length === 1) {
      firstTime = "0" + firstTime;
    }
    if (lastTime.length === 1) {
      lastTime = "0" + lastTime;
    }

    if (availTime.length === 1) {
      availTime = "0" + availTime;
    }

    mark.textContent = `As per Portal Owner daily access to Student portal will be suspended from ${firstTime}:00 to ${lastTime}:59 IST (UTC +5:30). Service will be restored at ${availTime}:00 IST.`;
  } else {
    mobile.disabled = false;
    select.disabled = false;
    mobile.classList.remove("no-cursor");
    mainPage.classList.remove("cursor-block");

    mobile.classList.remove("cursor-block");
    select.classList.remove("cursor-block");
    formBtn.classList.remove("cursor-block");

    btnText.textContent = "Search Workspace ID";
    formBtn.classList.remove("btn-danger");
    formBtn.disabled = false;
    flashAlert.classList.remove("alert-danger");
    mark.classList.remove("marquee-bg-changer");
    marqueeIcon.classList.remove("fa-triangle-exclamation");
    alertHead.textContent = "Update!";
    mark.innerHTML = ` <strong><i class="fa-solid fa-wifi"></i> Mega Update!</strong>   CS50x India Student Portal is now deployed and hosted under Firebase!
        `;
  }
}

blockPortal();
let interval = setInterval(blockPortal, 1000);

firstClose.onclick = () => {
  underCon.classList.remove("d-none");
};

document.querySelector("form").onsubmit = (ev) => {
  ev.preventDefault();
};

const selector = document.getElementById("timezoneSelector");
const clock = document.getElementById("clock");
const flag = document.getElementById("flag");
const clockIcon = document.getElementById("clockIcon");

let currentZone = selector.value;

function updateClock() {
  if (!currentZone) return;
  const now = new Date();
  const options = {
    timeZone: currentZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = now.toLocaleTimeString("en-US", options);
  clock.textContent = time;
}

selector.addEventListener("change", function () {
  currentZone = this.value;
  flag.src = flagMap[currentZone];
});

flag.src = flagMap[currentZone];
setInterval(updateClock, 1000);
updateClock();

mobile.onblur = () => {
  if (mobile.value.length !== 10) {
    alert1.classList.add("alert-warning");
    select.classList.add("d-none");
    msg.textContent = "⚠️ Mobile Number cannot be left empty!";
    alert1.classList.remove("d-none");
    setTimeout(() => {
      alert1.classList.add("d-none");
    }, 4000);
  }
};

const logSession = async (mobile) => {
  try {
    // Get IP & location info
    const res = await fetch("https://ipapi.co/json/");
    const info = await res.json();

    const ip = info.ip;
    const city = info.city;
    const region = info.region;
    const country = info.country_name;
    let now = new Date();

    let date = String(now.getDate()).padStart(2, 0);
    let month = String(now.getMonth()).padStart(2, 0);
    let year = now.getFullYear();
    let hour = String(now.getHours()).padStart(2, 0);
    let minutes = String(now.getMinutes()).padStart(2, 0);
    let seconds = String(now.getSeconds()).padStart(2, 0);
    let week = String(now.getDay());

    let arr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Get device info
    const userAgent = navigator.userAgent;
    const device = /Mobi/i.test(userAgent) ? "mobile" : "desktop";

    // Insert into Supabase
    const { data, error } = await supabase.from("session_log").insert([
      {
        mobile: mobile,
        ip_address: ip,
        location: `${city}, ${region}, ${country}`,
        user_agent: userAgent,
        device: device,
        timestamp: `${date}-${month}-${year} ${hour}:${minutes}:${seconds} IST  ${arr[week]} GMT +5.30`,
      },
    ]);

    if (error) {
      console.error("Insert failed:", error);
    } else {
      console.log("Session logged successfully:", data);
    }
  } catch (err) {
    console.error("Error fetching location or inserting:", err);
  }
};

mobile.onkeyup = () => {
  if (String(mobile.value).length === 10) {
    const findStudent1 = async () => {
      const { data, error } = await supabase
        .from("students")
        .select("mobile")
        .eq("mobile", mobile.value);

      logSession(mobile.value);

      if (data.length === 0) {
        select.classList.add("d-none");
        alert1.classList.add("alert-danger");
        alert1.classList.remove("d-none");
        setTimeout(() => {
          alert1.classList.add("d-none");
          mobile.value = "";
        }, 4000);
        msg.textContent = "⚠️ No records Found!";
      } else {
        select.classList.remove("d-none");
        alert1.classList.remove("alert-primary");
        alert1.classList.add("d-none");
        msg.textContent = "";
      }
    };

    findStudent1();
  }
};

select.onblur = () => {
  if (select.value === "") {
    msg.textContent = "⚠️ College selection cannot be left empty!";
    alert1.classList.remove("d-none");
    setTimeout(() => {
      alert1.classList.add("d-none");
    }, 4000);
  }
};
formBtn.onclick = function () {
  if (mobile.value === "") {
    msg.textContent = "⚠️ Illegal Event Triggered!";
    alert1.classList.add("alert-primary");
    alert1.classList.remove("d-none");
    setTimeout(() => {
      alert1.classList.add("d-none");
    }, 4000);
    return;
  } else {
    msg.textContent = "";
    alert1.classList.remove("alert-danger");
    alert1.classList.add("d-none");
  }
  if (select.value === "") {
    msg.textContent = "⚠️ College selection cannot be left empty!";
    alert1.classList.add("alert-warning");
    alert1.classList.remove("d-none");
    setTimeout(() => {
      alert1.classList.add("d-none");
    }, 4000);
    return;
  } else {
    msg.textContent = "";
    alert1.classList.remove("alert-danger");
    alert1.classList.add("d-none");
  }
  btnText.classList.add("d-none");

  if (mobile.value === "" && select.value !== "") {
    msg.textContent = "⚠️ Mobile Number is Empty!";
    alert1.classList.remove("d-none");
    setTimeout(() => {
      alert1.classList.add("d-none");
    }, 4000);
    btnText.classList.remove("d-none");
  } else {
    const mobileVal = mobile.value.trim();
    const selectedCollege = select.value;
    spinner.classList.remove("d-none");

    // 2nd Database Fetch Successfully Done!

    setTimeout(() => {
      async function fetchStudent2() {
        const { data, error } = await supabase
          .from("students")
          .select("*")
          .eq("mobile", mobile.value)
          .eq("college", select.value);
        if (data.length === 1) {
          return data[0];
        }
      }

      fetchStudent2().then((result) => {
        const student = result;

        if (student.status1 !== "Detained") {
          if (student.college === selectedCollege) {
            let date = new Date(student.date);
            let day = String(date.getDate()).padStart(2, "0");
            let month = date.getMonth();
            let year = date.getFullYear();

            let deadlineDate = new Date("2025-10-30");
            let ddDay = String(deadlineDate.getDate()).padStart(2, "0");
            let ddMonth = deadlineDate.getMonth();
            let ddYear = deadlineDate.getFullYear();
            let months = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];

            spinner.classList.add("d-none");
            registrants.classList.remove("d-none");
            cs50id.textContent = student.id;
            regName.textContent = student.name;
            regCourse.textContent = student.courses;
            lang.textContent = student.lang;
            regStatus.textContent = student["status1"];
            regDate.textContent = `${day}-${months[month]}-${year}`;
            regDuration.textContent = `${ddDay}-${months[ddMonth]}-${ddYear}`;
            regAttempt.textContent = student.attempts;

            if (student.courses === "CS50S") {
              modalTitle.textContent = "CS50S Official Playlist";
              iframe.src =
                "https://cdn.jsdelivr.net/gh/ravikiranoffl/cs50database@personal/cs50sql-introduction.mp4";
              playlist.href =
                "https://www.youtube.com/watch?v=wdzA1Z8tKek&list=PLhQjrBD2T382v1MBjNOhPu9SiJ1fsD4C0";
            } else if (student.courses === "CS50P") {
              modalTitle.textContent = "CS50P Official Playlist";
              iframe.src =
                "https://cdn.jsdelivr.net/gh/ravikiranoffl/cs50database@personal/cs50p-introduction.mp4";
              playlist.href =
                "https://www.youtube.com/playlist?list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V";
            } else {
              modal.classList.add("d-none");
              viewModalBtn.disabled = true;
            }

            btnText.classList.remove("d-none");
            formBtn.classList.remove("btn-warning");
            formBtn.disabled = true;
            isFetched = true;
            mobile.disabled = true;
            select.disabled = true;
            formBtn.classList.add("btn-success");
            formBtn.textContent = "Successfully Results Fetched!";
            students = {};
          } else {
            mobile.value = "";
            select.value = "";
            spinner.classList.add("d-none");
            msg.textContent = "⚠️ Invalid College Selection!";
            select.classList.add("d-none");
            alert1.classList.remove("d-none");
            setTimeout(() => {
              alert1.classList.add("d-none");
            }, 3500);
            btnText.classList.remove("d-none");
          }

          // Database Work Mark 4
        } else if (student.status1 === "Detained") {
          mobile.value = "";
          select.value = "";
          spinner.classList.add("d-none");
          msg.textContent = "⚠️ Student was Frozen and Detained!";
          alert1.classList.remove("d-none");
          alert1.classList.remove("alert-warning");
          alert1.classList.add("alert-danger");
          setTimeout(() => {
            select.classList.add("d-none");
            alert1.classList.add("d-none");
            alert1.classList.add("alert-warning");
            alert1.classList.remove("alert-danger");
          }, 7000);
          btnText.classList.remove("d-none");
        } else {
          mobile.value = "";
          select.value = "";
          spinner.classList.add("d-none");
          alert1.classList.remove("d-none");
          setTimeout(() => {
            alert1.classList.add("d-none");
          }, 3500);
          btnText.classList.remove("d-none");
        }
      });
    }, 3000);
  }
};
