const a0_0x23081b = a0_0x346e;
(function (_0x15e14e, _0x18e988) {
  const _0x29de5d = a0_0x346e,
    _0x35db66 = _0x15e14e();
  while (!![]) {
    try {
      const _0x35de32 =
        (parseInt(_0x29de5d(0x100)) / 0x1) *
          (-parseInt(_0x29de5d(0xe9)) / 0x2) +
        parseInt(_0x29de5d(0xd5)) / 0x3 +
        (-parseInt(_0x29de5d(0xdc)) / 0x4) * (parseInt(_0x29de5d(0xad)) / 0x5) +
        parseInt(_0x29de5d(0xba)) / 0x6 +
        parseInt(_0x29de5d(0xa1)) / 0x7 +
        (-parseInt(_0x29de5d(0x108)) / 0x8) *
          (-parseInt(_0x29de5d(0xcc)) / 0x9) +
        parseInt(_0x29de5d(0x9a)) / 0xa;
      if (_0x35de32 === _0x18e988) break;
      else _0x35db66["push"](_0x35db66["shift"]());
    } catch (_0x43df70) {
      _0x35db66["push"](_0x35db66["shift"]());
    }
  }
})(a0_0x1c3d, 0xc7793);
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
function a0_0x346e(_0x1aa550, _0x16f08b) {
  const _0x1c3dc3 = a0_0x1c3d();
  return (
    (a0_0x346e = function (_0x346e18, _0x140979) {
      _0x346e18 = _0x346e18 - 0x97;
      let _0x16f9da = _0x1c3dc3[_0x346e18];
      return _0x16f9da;
    }),
    a0_0x346e(_0x1aa550, _0x16f08b)
  );
}
const project = a0_0x23081b(0x116),
  apiKey = a0_0x23081b(0xc1),
  supabase = createClient(project, apiKey);
let mobile = document["querySelector"](a0_0x23081b(0xfe)),
  formBtn = document[a0_0x23081b(0xe1)](a0_0x23081b(0x118)),
  select = document[a0_0x23081b(0xe1)](a0_0x23081b(0xd8)),
  spinner = document["querySelector"](a0_0x23081b(0x9b)),
  alert1 = document["querySelector"](a0_0x23081b(0x10e)),
  msg = document["querySelector"](a0_0x23081b(0x115)),
  registrants = document[a0_0x23081b(0xe1)](a0_0x23081b(0xb6)),
  cs50id = document[a0_0x23081b(0xe1)](".cs50id"),
  regName = document[a0_0x23081b(0xe1)](a0_0x23081b(0xd6)),
  regCourse = document[a0_0x23081b(0xe1)](".reg-course"),
  regMode = document[a0_0x23081b(0xe1)](a0_0x23081b(0xaf)),
  regStatus = document[a0_0x23081b(0xe1)](a0_0x23081b(0xb2)),
  regDate = document["querySelector"](a0_0x23081b(0xe7)),
  regDuration = document["querySelector"](a0_0x23081b(0xb9)),
  regAttempt = document["querySelector"](a0_0x23081b(0xb8)),
  btnText = document[a0_0x23081b(0xe1)](a0_0x23081b(0xff)),
  lang = document["querySelector"](a0_0x23081b(0x9e)),
  underCon = document[a0_0x23081b(0xe1)](a0_0x23081b(0x9d)),
  firstClose = document[a0_0x23081b(0xe1)](a0_0x23081b(0xf3)),
  playlist = document[a0_0x23081b(0xe1)](a0_0x23081b(0xfb)),
  iframe = document[a0_0x23081b(0xe1)](a0_0x23081b(0x10b)),
  modal = document[a0_0x23081b(0xe1)](".modal"),
  modalTitle = document[a0_0x23081b(0xe1)](".modal-title"),
  viewModalBtn = document[a0_0x23081b(0xe1)](a0_0x23081b(0xf2)),
  mark = document[a0_0x23081b(0xe1)](a0_0x23081b(0xbe)),
  flashAlert = document[a0_0x23081b(0xe1)](a0_0x23081b(0xbb)),
  alertHead = document[a0_0x23081b(0xe1)](a0_0x23081b(0xcf)),
  mainPage = document[a0_0x23081b(0xe1)](a0_0x23081b(0xbd)),
  marqueeIcon = document[a0_0x23081b(0xe1)](a0_0x23081b(0xfd)),
  isFetched = ![];
mobile[a0_0x23081b(0xfc)](a0_0x23081b(0xec), (_0x198311) =>
  _0x198311[a0_0x23081b(0x122)]()
),
  mobile[a0_0x23081b(0xfc)](a0_0x23081b(0xf8), (_0x427fe3) =>
    _0x427fe3["preventDefault"]()
  ),
  mobile[a0_0x23081b(0xfc)](a0_0x23081b(0x9c), (_0x5e0517) =>
    _0x5e0517["preventDefault"]()
  );
function range(_0x504475, _0x20470e) {
  const _0x5a8668 = a0_0x23081b;
  let _0x43e564 = Array[_0x5a8668(0x114)](
    { length: _0x20470e - _0x504475 },
    (_0x49a942, _0x2a2f9e) => _0x2a2f9e + _0x504475
  );
  return _0x43e564;
}
mobile["value"] === "" && select["classList"]["add"]("d-none");
function blockPortal() {
  const _0x46c3e4 = a0_0x23081b;
  if (isFetched) return;
  let _0xe2c0bc = new Date(),
    _0x3df2a8 = _0xe2c0bc[_0x46c3e4(0x11c)](),
    _0x54a17e = [0x17, 0x0, 0x1, 0x2, 0x3, 0x4];
  if (_0x54a17e["includes"](_0x3df2a8)) {
    (mobile[_0x46c3e4(0x103)] = ""),
      (mobile[_0x46c3e4(0xd3)] = !![]),
      (select[_0x46c3e4(0xd3)] = !![]),
      mobile[_0x46c3e4(0xe8)][_0x46c3e4(0x121)](_0x46c3e4(0xb5)),
      registrants["classList"][_0x46c3e4(0x121)](_0x46c3e4(0xbc)),
      mainPage[_0x46c3e4(0xe8)][_0x46c3e4(0x121)](_0x46c3e4(0xed)),
      mobile["classList"][_0x46c3e4(0x121)](_0x46c3e4(0xed)),
      select["classList"][_0x46c3e4(0x121)](_0x46c3e4(0xed)),
      formBtn[_0x46c3e4(0xe8)][_0x46c3e4(0x121)](_0x46c3e4(0xed)),
      (formBtn[_0x46c3e4(0xd3)] = !![]),
      (btnText["textContent"] = "⚠️\x20Temporarily\x20Unavailable!"),
      formBtn[_0x46c3e4(0xe8)]["add"](_0x46c3e4(0xee)),
      flashAlert["classList"][_0x46c3e4(0x121)]("alert-danger"),
      marqueeIcon["classList"][_0x46c3e4(0x121)](_0x46c3e4(0x11d)),
      mark[_0x46c3e4(0xe8)]["add"](_0x46c3e4(0x10a)),
      (alertHead[_0x46c3e4(0xca)] = _0x46c3e4(0x107));
    let _0x292a51 = String(_0x54a17e[0x0]),
      _0x2c1e51 = String(_0x54a17e[_0x54a17e["length"] - 0x1]),
      _0x416e4b = String(_0x54a17e[_0x54a17e[_0x46c3e4(0xc2)] - 0x1] + 0x1);
    _0x292a51[_0x46c3e4(0xc2)] === 0x1 && (_0x292a51 = "0" + _0x292a51),
      _0x2c1e51[_0x46c3e4(0xc2)] === 0x1 && (_0x2c1e51 = "0" + _0x2c1e51),
      _0x416e4b[_0x46c3e4(0xc2)] === 0x1 && (_0x416e4b = "0" + _0x416e4b),
      (mark[_0x46c3e4(0xca)] =
        _0x46c3e4(0xc5) +
        _0x292a51 +
        _0x46c3e4(0xf5) +
        _0x2c1e51 +
        _0x46c3e4(0xdb) +
        _0x416e4b +
        _0x46c3e4(0xc4));
  } else
    (mobile[_0x46c3e4(0xd3)] = ![]),
      (select[_0x46c3e4(0xd3)] = ![]),
      mobile[_0x46c3e4(0xe8)]["remove"](_0x46c3e4(0xb5)),
      mainPage[_0x46c3e4(0xe8)]["remove"]("cursor-block"),
      mobile[_0x46c3e4(0xe8)][_0x46c3e4(0xe4)](_0x46c3e4(0xed)),
      select[_0x46c3e4(0xe8)][_0x46c3e4(0xe4)]("cursor-block"),
      formBtn[_0x46c3e4(0xe8)][_0x46c3e4(0xe4)](_0x46c3e4(0xed)),
      (btnText[_0x46c3e4(0xca)] = _0x46c3e4(0xc9)),
      formBtn[_0x46c3e4(0xe8)][_0x46c3e4(0xe4)](_0x46c3e4(0xee)),
      (formBtn[_0x46c3e4(0xd3)] = ![]),
      flashAlert[_0x46c3e4(0xe8)][_0x46c3e4(0xe4)](_0x46c3e4(0xd4)),
      mark[_0x46c3e4(0xe8)]["remove"](_0x46c3e4(0x10a)),
      marqueeIcon["classList"][_0x46c3e4(0xe4)](_0x46c3e4(0x11d)),
      (alertHead[_0x46c3e4(0xca)] = _0x46c3e4(0xa3)),
      (mark["innerHTML"] = _0x46c3e4(0xc7));
}
blockPortal();
function a0_0x1c3d() {
  const _0x93a6f1 = [
    "CS50S",
    "onclick",
    "Tuesday",
    "Wednesday",
    "from",
    ".alert-msg",
    "https://tljshkeqzwjckqpxxbyw.supabase.co",
    "Error\x20fetching\x20location\x20or\x20inserting:",
    ".workspace-btn",
    "Dec",
    "error",
    "city",
    "getHours",
    "fa-triangle-exclamation",
    "2025-10-30",
    "https://ipapi.co/json/",
    "href",
    "add",
    "preventDefault",
    "log",
    "getFullYear",
    "⚠️\x20College\x20selection\x20cannot\x20be\x20left\x20empty!",
    "12475110auwquB",
    ".spinner",
    "cut",
    ".under-con",
    ".reg-lang",
    "⚠️\x20No\x20records\x20Found!",
    "Thursday",
    "2764223qpfsjt",
    "src",
    "Update!",
    "Oct",
    "Detained",
    "getDate",
    "session_log",
    "toLocaleTimeString",
    "select",
    "status1",
    "form",
    "https://www.youtube.com/playlist?list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V",
    "10oaSeES",
    "⚠️\x20Student\x20was\x20Frozen\x20and\x20Detained!",
    ".reg-mode",
    "insert",
    "Session\x20logged\x20successfully:",
    ".reg-status",
    "⚠️\x20Illegal\x20Event\x20Triggered!",
    "alert-primary",
    "no-cursor",
    ".registrant-details",
    "mobile",
    ".reg-attempt",
    ".reg-duration",
    "4594056iLiRoa",
    ".flash-alert",
    "d-none",
    ".main-page1",
    ".mark",
    "Sep",
    "Friday",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsanNoa2VxendqY2txcHh4Ynl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NTYzMzYsImV4cCI6MjA2NTQzMjMzNn0.uWWIiS40As4ZfszcMHfRzlq7V5gTfHD9dJknzR08qt0",
    "length",
    "country_name",
    ":00\x20IST.",
    "As\x20per\x20Portal\x20Owner\x20daily\x20access\x20to\x20Student\x20portal\x20will\x20be\x20suspended\x20from\x20",
    "date",
    "\x20<strong><i\x20class=\x22fa-solid\x20fa-wifi\x22></i>\x20Mega\x20Update!</strong>\x20\x20\x20CS50x\x20India\x20Student\x20Portal\x20is\x20now\x20deployed\x20and\x20hosted\x20under\x20Firebase!\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "padStart",
    "Search\x20Workspace\x20ID",
    "textContent",
    "CS50P\x20Official\x20Playlist",
    "102447qvDXpJ",
    "clockIcon",
    "getMonth",
    ".alert-heading",
    "May",
    "CS50S\x20Official\x20Playlist",
    "alert-warning",
    "disabled",
    "alert-danger",
    "559716wNEoFx",
    ".reg-name",
    "getDay",
    ".college",
    "https://www.youtube.com/watch?v=wdzA1Z8tKek&list=PLhQjrBD2T382v1MBjNOhPu9SiJ1fsD4C0",
    "college",
    ":59\x20IST\x20(UTC\x20+5:30).\x20Service\x20will\x20be\x20restored\x20at\x20",
    "1997496SYsxUX",
    "onblur",
    "trim",
    "test",
    "students",
    "querySelector",
    "getElementById",
    "https://cdn.jsdelivr.net/gh/ravikiranoffl/cs50database@personal/cs50sql-introduction.mp4",
    "remove",
    "2-digit",
    "json",
    ".reg-date",
    "classList",
    "7762gGIIHQ",
    "desktop",
    "Insert\x20failed:",
    "paste",
    "cursor-block",
    "btn-danger",
    "courses",
    "https://cdn.jsdelivr.net/gh/ravikiranoffl/cs50database@personal/cs50p-introduction.mp4",
    "Monday",
    ".view-modal-btn",
    ".first-close",
    "clock",
    ":00\x20to\x20",
    "onsubmit",
    "btn-warning",
    "copy",
    "timezoneSelector",
    "Jun",
    ".playlist-btn",
    "addEventListener",
    ".marquee-icon",
    ".mobile-number",
    ".btn-text",
    "362gmdklS",
    "\x20GMT\x20+5.30",
    "⚠️\x20Mobile\x20Number\x20cannot\x20be\x20left\x20empty!",
    "value",
    "getMinutes",
    "getSeconds",
    "change",
    "Alert!",
    "440BetldE",
    "\x20IST\x20\x20",
    "marquee-bg-changer",
    ".iframe",
    "name",
    "Saturday",
    ".error-alert",
    "Apr",
  ];
  a0_0x1c3d = function () {
    return _0x93a6f1;
  };
  return a0_0x1c3d();
}
let interval = setInterval(blockPortal, 0x3e8);
(firstClose["onclick"] = () => {
  const _0x522913 = a0_0x23081b;
  underCon[_0x522913(0xe8)][_0x522913(0xe4)]("d-none");
}),
  (document["querySelector"](a0_0x23081b(0xab))[a0_0x23081b(0xf6)] = (
    _0x59371f
  ) => {
    const _0x7936ea = a0_0x23081b;
    _0x59371f[_0x7936ea(0x122)]();
  });
const selector = document[a0_0x23081b(0xe2)](a0_0x23081b(0xf9)),
  clock = document[a0_0x23081b(0xe2)](a0_0x23081b(0xf4)),
  flag = document["getElementById"]("flag"),
  clockIcon = document[a0_0x23081b(0xe2)](a0_0x23081b(0xcd));
let currentZone = selector[a0_0x23081b(0x103)];
function updateClock() {
  const _0x1ba25b = a0_0x23081b;
  if (!currentZone) return;
  const _0x7398d7 = new Date(),
    _0x486eb8 = {
      timeZone: currentZone,
      hour: "2-digit",
      minute: _0x1ba25b(0xe5),
      second: "2-digit",
      hour12: !![],
    },
    _0x400647 = _0x7398d7[_0x1ba25b(0xa8)]("en-US", _0x486eb8);
  clock[_0x1ba25b(0xca)] = _0x400647;
}
selector[a0_0x23081b(0xfc)](a0_0x23081b(0x106), function () {
  const _0x549872 = a0_0x23081b;
  (currentZone = this[_0x549872(0x103)]),
    (flag[_0x549872(0xa2)] = flagMap[currentZone]);
}),
  (flag[a0_0x23081b(0xa2)] = flagMap[currentZone]),
  setInterval(updateClock, 0x3e8),
  updateClock(),
  (mobile["onblur"] = () => {
    const _0x2bbe09 = a0_0x23081b;
    mobile[_0x2bbe09(0x103)]["length"] !== 0xa &&
      (alert1[_0x2bbe09(0xe8)]["add"](_0x2bbe09(0xd2)),
      select[_0x2bbe09(0xe8)][_0x2bbe09(0x121)](_0x2bbe09(0xbc)),
      (msg["textContent"] = _0x2bbe09(0x102)),
      alert1[_0x2bbe09(0xe8)][_0x2bbe09(0xe4)]("d-none"),
      setTimeout(() => {
        const _0x41cb22 = _0x2bbe09;
        alert1["classList"][_0x41cb22(0x121)](_0x41cb22(0xbc));
      }, 0xfa0));
  });
const logSession = async (_0x44fdeb) => {
  const _0x2090ad = a0_0x23081b;
  try {
    const _0x1ec06b = await fetch(_0x2090ad(0x11f)),
      _0x4c6558 = await _0x1ec06b[_0x2090ad(0xe6)](),
      _0x405575 = _0x4c6558["ip"],
      _0x4c375c = _0x4c6558[_0x2090ad(0x11b)],
      _0xc2a3f8 = _0x4c6558["region"],
      _0x31c74c = _0x4c6558[_0x2090ad(0xc3)];
    let _0xaca692 = new Date(),
      _0x3edab0 = String(_0xaca692[_0x2090ad(0xa6)]())[_0x2090ad(0xc8)](
        0x2,
        0x0
      ),
      _0x4e31d1 = String(_0xaca692[_0x2090ad(0xce)]())["padStart"](0x2, 0x0),
      _0x46013a = _0xaca692[_0x2090ad(0x98)](),
      _0x2b9c00 = String(_0xaca692[_0x2090ad(0x11c)]())[_0x2090ad(0xc8)](
        0x2,
        0x0
      ),
      _0xd5f67 = String(_0xaca692[_0x2090ad(0x104)]())[_0x2090ad(0xc8)](
        0x2,
        0x0
      ),
      _0x2e2bae = String(_0xaca692[_0x2090ad(0x105)]())[_0x2090ad(0xc8)](
        0x2,
        0x0
      ),
      _0x2b6aa3 = String(_0xaca692[_0x2090ad(0xd7)]()),
      _0x299649 = [
        "Sunday",
        _0x2090ad(0xf1),
        _0x2090ad(0x112),
        _0x2090ad(0x113),
        _0x2090ad(0xa0),
        _0x2090ad(0xc0),
        _0x2090ad(0x10d),
      ];
    const _0x466e48 = navigator["userAgent"],
      _0x136108 = /Mobi/i[_0x2090ad(0xdf)](_0x466e48)
        ? "mobile"
        : _0x2090ad(0xea),
      { data: _0x26ee7f, error: _0x2ca515 } = await supabase[_0x2090ad(0x114)](
        _0x2090ad(0xa7)
      )[_0x2090ad(0xb0)]([
        {
          mobile: _0x44fdeb,
          ip_address: _0x405575,
          location: _0x4c375c + ",\x20" + _0xc2a3f8 + ",\x20" + _0x31c74c,
          user_agent: _0x466e48,
          device: _0x136108,
          timestamp:
            _0x3edab0 +
            "-" +
            _0x4e31d1 +
            "-" +
            _0x46013a +
            "\x20" +
            _0x2b9c00 +
            ":" +
            _0xd5f67 +
            ":" +
            _0x2e2bae +
            _0x2090ad(0x109) +
            _0x299649[_0x2b6aa3] +
            _0x2090ad(0x101),
        },
      ]);
    _0x2ca515
      ? console["error"](_0x2090ad(0xeb), _0x2ca515)
      : console[_0x2090ad(0x97)](_0x2090ad(0xb1), _0x26ee7f);
  } catch (_0x21aeda) {
    console[_0x2090ad(0x11a)](_0x2090ad(0x117), _0x21aeda);
  }
};
(mobile["onkeyup"] = () => {
  const _0x3d913f = a0_0x23081b;
  if (String(mobile[_0x3d913f(0x103)])["length"] === 0xa) {
    const _0x2b94f3 = async () => {
      const _0x38c164 = _0x3d913f,
        { data: _0x18489e, error: _0x1b424f } = await supabase[
          _0x38c164(0x114)
        ](_0x38c164(0xe0))
          ["select"](_0x38c164(0xb7))
          ["eq"]("mobile", mobile[_0x38c164(0x103)]);
      logSession(mobile[_0x38c164(0x103)]),
        _0x18489e[_0x38c164(0xc2)] === 0x0
          ? (select[_0x38c164(0xe8)][_0x38c164(0x121)]("d-none"),
            alert1[_0x38c164(0xe8)][_0x38c164(0x121)](_0x38c164(0xd4)),
            alert1[_0x38c164(0xe8)][_0x38c164(0xe4)](_0x38c164(0xbc)),
            setTimeout(() => {
              const _0xc74a6b = _0x38c164;
              alert1[_0xc74a6b(0xe8)]["add"](_0xc74a6b(0xbc)),
                (mobile["value"] = "");
            }, 0xfa0),
            (msg["textContent"] = _0x38c164(0x9f)))
          : (select[_0x38c164(0xe8)]["remove"](_0x38c164(0xbc)),
            alert1["classList"][_0x38c164(0xe4)](_0x38c164(0xb4)),
            alert1["classList"][_0x38c164(0x121)](_0x38c164(0xbc)),
            (msg[_0x38c164(0xca)] = ""));
    };
    _0x2b94f3();
  }
}),
  (select[a0_0x23081b(0xdd)] = () => {
    const _0x2ab895 = a0_0x23081b;
    select[_0x2ab895(0x103)] === "" &&
      ((msg["textContent"] =
        "⚠️\x20College\x20selection\x20cannot\x20be\x20left\x20empty!"),
      alert1[_0x2ab895(0xe8)][_0x2ab895(0xe4)]("d-none"),
      setTimeout(() => {
        const _0x1119ba = _0x2ab895;
        alert1[_0x1119ba(0xe8)]["add"]("d-none");
      }, 0xfa0));
  }),
  (formBtn[a0_0x23081b(0x111)] = function () {
    const _0x138b10 = a0_0x23081b;
    if (mobile[_0x138b10(0x103)] === "") {
      (msg[_0x138b10(0xca)] = _0x138b10(0xb3)),
        alert1[_0x138b10(0xe8)][_0x138b10(0x121)](_0x138b10(0xb4)),
        alert1[_0x138b10(0xe8)][_0x138b10(0xe4)](_0x138b10(0xbc)),
        setTimeout(() => {
          const _0x5fe8dd = _0x138b10;
          alert1["classList"][_0x5fe8dd(0x121)](_0x5fe8dd(0xbc));
        }, 0xfa0);
      return;
    } else
      (msg[_0x138b10(0xca)] = ""),
        alert1[_0x138b10(0xe8)][_0x138b10(0xe4)](_0x138b10(0xd4)),
        alert1[_0x138b10(0xe8)][_0x138b10(0x121)](_0x138b10(0xbc));
    if (select["value"] === "") {
      (msg[_0x138b10(0xca)] = _0x138b10(0x99)),
        alert1[_0x138b10(0xe8)]["add"](_0x138b10(0xd2)),
        alert1[_0x138b10(0xe8)][_0x138b10(0xe4)](_0x138b10(0xbc)),
        setTimeout(() => {
          const _0xb277f8 = _0x138b10;
          alert1[_0xb277f8(0xe8)]["add"]("d-none");
        }, 0xfa0);
      return;
    } else
      (msg[_0x138b10(0xca)] = ""),
        alert1["classList"]["remove"](_0x138b10(0xd4)),
        alert1["classList"][_0x138b10(0x121)](_0x138b10(0xbc));
    btnText["classList"]["add"](_0x138b10(0xbc));
    if (mobile["value"] === "" && select["value"] !== "")
      (msg[_0x138b10(0xca)] = "⚠️\x20Mobile\x20Number\x20is\x20Empty!"),
        alert1[_0x138b10(0xe8)][_0x138b10(0xe4)](_0x138b10(0xbc)),
        setTimeout(() => {
          const _0x15e549 = _0x138b10;
          alert1["classList"]["add"](_0x15e549(0xbc));
        }, 0xfa0),
        btnText["classList"][_0x138b10(0xe4)](_0x138b10(0xbc));
    else {
      const _0x304c5b = mobile[_0x138b10(0x103)][_0x138b10(0xde)](),
        _0x4ea6ed = select[_0x138b10(0x103)];
      spinner[_0x138b10(0xe8)]["remove"](_0x138b10(0xbc)),
        setTimeout(() => {
          async function _0x123f47() {
            const _0x25d254 = a0_0x346e,
              { data: _0x1b115d, error: _0x415279 } = await supabase["from"](
                _0x25d254(0xe0)
              )
                [_0x25d254(0xa9)]("*")
                ["eq"](_0x25d254(0xb7), mobile[_0x25d254(0x103)])
                ["eq"](_0x25d254(0xda), select["value"]);
            if (_0x1b115d[_0x25d254(0xc2)] === 0x1) return _0x1b115d[0x0];
          }
          _0x123f47()["then"]((_0x4ee610) => {
            const _0x3f7d6a = a0_0x346e,
              _0x392c2e = _0x4ee610;
            if (_0x392c2e["status1"] !== "Detained") {
              if (_0x392c2e["college"] === _0x4ea6ed) {
                let _0x580c70 = new Date(_0x392c2e[_0x3f7d6a(0xc6)]),
                  _0x113b87 = String(_0x580c70[_0x3f7d6a(0xa6)]())[
                    _0x3f7d6a(0xc8)
                  ](0x2, "0"),
                  _0x2c671a = _0x580c70[_0x3f7d6a(0xce)](),
                  _0x55986d = _0x580c70["getFullYear"](),
                  _0x4dcde8 = new Date(_0x3f7d6a(0x11e)),
                  _0xcc7c77 = String(_0x4dcde8[_0x3f7d6a(0xa6)]())[
                    _0x3f7d6a(0xc8)
                  ](0x2, "0"),
                  _0xb568f1 = _0x4dcde8["getMonth"](),
                  _0x2c615b = _0x4dcde8[_0x3f7d6a(0x98)](),
                  _0x32d17e = [
                    "Jan",
                    "Feb",
                    "Mar",
                    _0x3f7d6a(0x10f),
                    _0x3f7d6a(0xd0),
                    _0x3f7d6a(0xfa),
                    "Jul",
                    "Aug",
                    _0x3f7d6a(0xbf),
                    _0x3f7d6a(0xa4),
                    "Nov",
                    _0x3f7d6a(0x119),
                  ];
                spinner["classList"]["add"](_0x3f7d6a(0xbc)),
                  registrants[_0x3f7d6a(0xe8)][_0x3f7d6a(0xe4)](
                    _0x3f7d6a(0xbc)
                  ),
                  (cs50id[_0x3f7d6a(0xca)] = _0x392c2e["id"]),
                  (regName[_0x3f7d6a(0xca)] = _0x392c2e[_0x3f7d6a(0x10c)]),
                  (regCourse[_0x3f7d6a(0xca)] = _0x392c2e[_0x3f7d6a(0xef)]),
                  (lang[_0x3f7d6a(0xca)] = _0x392c2e["lang"]),
                  (regStatus[_0x3f7d6a(0xca)] = _0x392c2e[_0x3f7d6a(0xaa)]),
                  (regDate["textContent"] =
                    _0x113b87 + "-" + _0x32d17e[_0x2c671a] + "-" + _0x55986d),
                  (regDuration[_0x3f7d6a(0xca)] =
                    _0xcc7c77 + "-" + _0x32d17e[_0xb568f1] + "-" + _0x2c615b),
                  (regAttempt[_0x3f7d6a(0xca)] = _0x392c2e["attempts"]);
                if (_0x392c2e[_0x3f7d6a(0xef)] === _0x3f7d6a(0x110))
                  (modalTitle[_0x3f7d6a(0xca)] = _0x3f7d6a(0xd1)),
                    (iframe[_0x3f7d6a(0xa2)] = _0x3f7d6a(0xe3)),
                    (playlist[_0x3f7d6a(0x120)] = _0x3f7d6a(0xd9));
                else
                  _0x392c2e[_0x3f7d6a(0xef)] === "CS50P"
                    ? ((modalTitle[_0x3f7d6a(0xca)] = _0x3f7d6a(0xcb)),
                      (iframe[_0x3f7d6a(0xa2)] = _0x3f7d6a(0xf0)),
                      (playlist[_0x3f7d6a(0x120)] = _0x3f7d6a(0xac)))
                    : (modal[_0x3f7d6a(0xe8)]["add"](_0x3f7d6a(0xbc)),
                      (viewModalBtn[_0x3f7d6a(0xd3)] = !![]));
                btnText[_0x3f7d6a(0xe8)]["remove"](_0x3f7d6a(0xbc)),
                  formBtn[_0x3f7d6a(0xe8)][_0x3f7d6a(0xe4)](_0x3f7d6a(0xf7)),
                  (formBtn[_0x3f7d6a(0xd3)] = !![]),
                  (isFetched = !![]),
                  (mobile[_0x3f7d6a(0xd3)] = !![]),
                  (select["disabled"] = !![]),
                  formBtn[_0x3f7d6a(0xe8)][_0x3f7d6a(0x121)]("btn-success"),
                  (formBtn[_0x3f7d6a(0xca)] =
                    "Successfully\x20Results\x20Fetched!"),
                  (students = {});
              } else
                (mobile[_0x3f7d6a(0x103)] = ""),
                  (select[_0x3f7d6a(0x103)] = ""),
                  spinner[_0x3f7d6a(0xe8)][_0x3f7d6a(0x121)](_0x3f7d6a(0xbc)),
                  (msg[_0x3f7d6a(0xca)] =
                    "⚠️\x20Invalid\x20College\x20Selection!"),
                  select["classList"][_0x3f7d6a(0x121)](_0x3f7d6a(0xbc)),
                  alert1[_0x3f7d6a(0xe8)][_0x3f7d6a(0xe4)](_0x3f7d6a(0xbc)),
                  setTimeout(() => {
                    alert1["classList"]["add"]("d-none");
                  }, 0xdac),
                  btnText[_0x3f7d6a(0xe8)][_0x3f7d6a(0xe4)](_0x3f7d6a(0xbc));
            } else
              _0x392c2e[_0x3f7d6a(0xaa)] === _0x3f7d6a(0xa5)
                ? ((mobile[_0x3f7d6a(0x103)] = ""),
                  (select[_0x3f7d6a(0x103)] = ""),
                  spinner[_0x3f7d6a(0xe8)][_0x3f7d6a(0x121)]("d-none"),
                  (msg[_0x3f7d6a(0xca)] = _0x3f7d6a(0xae)),
                  alert1[_0x3f7d6a(0xe8)][_0x3f7d6a(0xe4)](_0x3f7d6a(0xbc)),
                  alert1["classList"][_0x3f7d6a(0xe4)]("alert-warning"),
                  alert1[_0x3f7d6a(0xe8)]["add"](_0x3f7d6a(0xd4)),
                  setTimeout(() => {
                    const _0x370ea8 = _0x3f7d6a;
                    select["classList"]["add"](_0x370ea8(0xbc)),
                      alert1[_0x370ea8(0xe8)][_0x370ea8(0x121)](
                        _0x370ea8(0xbc)
                      ),
                      alert1["classList"][_0x370ea8(0x121)]("alert-warning"),
                      alert1[_0x370ea8(0xe8)]["remove"](_0x370ea8(0xd4));
                  }, 0x1b58),
                  btnText["classList"][_0x3f7d6a(0xe4)](_0x3f7d6a(0xbc)))
                : ((mobile["value"] = ""),
                  (select[_0x3f7d6a(0x103)] = ""),
                  spinner["classList"][_0x3f7d6a(0x121)](_0x3f7d6a(0xbc)),
                  alert1[_0x3f7d6a(0xe8)][_0x3f7d6a(0xe4)](_0x3f7d6a(0xbc)),
                  setTimeout(() => {
                    const _0x3269df = _0x3f7d6a;
                    alert1[_0x3269df(0xe8)][_0x3269df(0x121)]("d-none");
                  }, 0xdac),
                  btnText[_0x3f7d6a(0xe8)][_0x3f7d6a(0xe4)](_0x3f7d6a(0xbc)));
          });
        }, 0xbb8);
    }
  });
