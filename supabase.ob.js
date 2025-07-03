const a0_0x1bd3b8 = a0_0x341e;
function a0_0x341e(_0x14f5cc, _0x4e9030) {
  const _0x42169e = a0_0x4216();
  return (
    (a0_0x341e = function (_0x341eac, _0x16db7c) {
      _0x341eac = _0x341eac - 0x16f;
      let _0x30c27d = _0x42169e[_0x341eac];
      return _0x30c27d;
    }),
    a0_0x341e(_0x14f5cc, _0x4e9030)
  );
}
(function (_0x28541f, _0x22b142) {
  const _0x39ed38 = a0_0x341e,
    _0x539e03 = _0x28541f();
  while (!![]) {
    try {
      const _0x4b7678 =
        (-parseInt(_0x39ed38(0x1ee)) / 0x1) *
          (-parseInt(_0x39ed38(0x1f7)) / 0x2) +
        parseInt(_0x39ed38(0x1bb)) / 0x3 +
        (-parseInt(_0x39ed38(0x19f)) / 0x4) *
          (-parseInt(_0x39ed38(0x16f)) / 0x5) +
        (-parseInt(_0x39ed38(0x1b4)) / 0x6) *
          (-parseInt(_0x39ed38(0x1ef)) / 0x7) +
        (parseInt(_0x39ed38(0x1a6)) / 0x8) *
          (-parseInt(_0x39ed38(0x19d)) / 0x9) +
        parseInt(_0x39ed38(0x18c)) / 0xa +
        -parseInt(_0x39ed38(0x1c2)) / 0xb;
      if (_0x4b7678 === _0x22b142) break;
      else _0x539e03["push"](_0x539e03["shift"]());
    } catch (_0x5f53c7) {
      _0x539e03["push"](_0x539e03["shift"]());
    }
  }
})(a0_0x4216, 0xa0a4c);
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const project = a0_0x1bd3b8(0x17b),
  apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsanNoa2VxendqY2txcHh4Ynl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NTYzMzYsImV4cCI6MjA2NTQzMjMzNn0.uWWIiS40As4ZfszcMHfRzlq7V5gTfHD9dJknzR08qt0",
  supabase = createClient(project, apiKey);
function dateTimeFormat() {
  const _0x275fb5 = a0_0x1bd3b8,
    _0x2f00ff = new Date(),
    _0x2fa512 = (_0x3878e7) =>
      _0x3878e7[_0x275fb5(0x201)]()[_0x275fb5(0x1eb)](0x2, "0"),
    _0x23de6b = _0x2fa512(_0x2f00ff[_0x275fb5(0x1be)]()),
    _0x37c17e = _0x2fa512(_0x2f00ff[_0x275fb5(0x17e)]() + 0x1),
    _0x443242 = _0x2f00ff[_0x275fb5(0x18f)](),
    _0x5ae1f5 = _0x2fa512(_0x2f00ff["getHours"]()),
    _0x596d73 = _0x2fa512(_0x2f00ff[_0x275fb5(0x202)]()),
    _0x1c5552 = _0x2fa512(_0x2f00ff[_0x275fb5(0x1d2)]()),
    _0x542fa8 = [
      _0x275fb5(0x209),
      _0x275fb5(0x20e),
      _0x275fb5(0x1bf),
      _0x275fb5(0x19e),
      _0x275fb5(0x20c),
      "Friday",
      _0x275fb5(0x1e8),
    ],
    _0x55e297 = _0x542fa8[_0x2f00ff[_0x275fb5(0x1cf)]()];
  return (
    _0x23de6b +
    "-" +
    _0x37c17e +
    "-" +
    _0x443242 +
    "\x20\x20" +
    _0x5ae1f5 +
    ":" +
    _0x596d73 +
    ":" +
    _0x1c5552 +
    "\x20" +
    _0x55e297
  );
}
function getFormattedDate() {
  const _0x413d0d = a0_0x1bd3b8,
    _0x187549 = new Date(),
    _0x208f30 = (_0x1bf44d) =>
      _0x1bf44d[_0x413d0d(0x201)]()["padStart"](0x2, "0");
  return (
    "" +
    _0x208f30(_0x187549[_0x413d0d(0x206)]()) +
    _0x208f30(_0x187549[_0x413d0d(0x202)]()) +
    _0x208f30(_0x187549[_0x413d0d(0x1d2)]()) +
    _0x208f30(_0x187549[_0x413d0d(0x1be)]()) +
    _0x208f30(_0x187549[_0x413d0d(0x17e)]() + 0x1) +
    _0x187549[_0x413d0d(0x18f)]()
  );
}
const session_id = a0_0x1bd3b8(0x1a2) + getFormattedDate();
function getLocation() {
  return new Promise((_0x3b028e, _0x337d4a) => {
    const _0x5114a2 = a0_0x341e;
    !navigator[_0x5114a2(0x1a7)]
      ? _0x337d4a(new Error(_0x5114a2(0x1bd)))
      : navigator[_0x5114a2(0x1a7)]["getCurrentPosition"](
          (_0x131002) => {
            const _0x43fcc6 = _0x5114a2;
            _0x3b028e({
              latitude:
                _0x131002[_0x43fcc6(0x17a)][_0x43fcc6(0x1aa)][
                  _0x43fcc6(0x201)
                ](),
              longitude:
                _0x131002[_0x43fcc6(0x17a)][_0x43fcc6(0x1db)][
                  _0x43fcc6(0x201)
                ](),
              accuracy: _0x131002["coords"]["accuracy"],
              timestamp: dateTimeFormat(),
            });
          },
          (_0x307837) => {
            const _0x2645eb = _0x5114a2;
            console[_0x2645eb(0x19c)]("Geolocation\x20error:", _0x307837),
              _0x3b028e({
                latitude: null,
                longitude: null,
                accuracy: null,
                timestamp: dateTimeFormat(),
              });
          },
          { enableHighAccuracy: !![], timeout: 0x1f40, maximumAge: 0x0 }
        );
  });
}
async function sendGeoDataToSupabase() {
  const _0x2b8011 = a0_0x1bd3b8,
    _0x298976 = await getLocation(),
    _0x358abd = { session_id: session_id, ..._0x298976 },
    { error: _0x399b69 } = await supabase[_0x2b8011(0x194)]("geoloc_log")[
      _0x2b8011(0x172)
    ]([_0x358abd]);
  _0x399b69
    ? console[_0x2b8011(0x1fa)](_0x2b8011(0x1ed), _0x399b69)
    : console[_0x2b8011(0x1f3)](_0x2b8011(0x1c5), _0x358abd);
}
function a0_0x4216() {
  const _0x1a59db = [
    "⚠️\x20College\x20selection\x20cannot\x20be\x20left\x20empty!",
    "classList",
    "Nov",
    ".reg-date",
    ".reg-mode",
    "coords",
    "https://tljshkeqzwjckqpxxbyw.supabase.co",
    "onsubmit",
    "⚠️\x20No\x20records\x20Found!",
    "getMonth",
    "deviceMemory",
    "timezoneSelector",
    ":00\x20IST.",
    "Sep",
    "language",
    ".marquee-icon",
    "form",
    "2025-10-30",
    "onclick",
    "remove",
    "Friday",
    "btn-warning",
    "cursor-block",
    "4235940VUODyk",
    ".reg-lang",
    "geo",
    "getFullYear",
    ".reg-name",
    "userAgent",
    "2-digit",
    "name",
    "from",
    "Oct",
    ".mark",
    "vendor",
    "test",
    ".mobile-number",
    "Mar",
    "✅\x20Device\x20data\x20logged\x20successfully",
    "warn",
    "1926711WWdzxq",
    "Wednesday",
    "4VJuYMH",
    "Insert\x20failed:",
    "btn-danger",
    "session_",
    "add",
    "flag",
    "cut",
    "8MByjBo",
    "geolocation",
    "college",
    ".spinner",
    "latitude",
    ".under-con",
    "alert-primary",
    ".college",
    "Error\x20fetching\x20location\x20or\x20inserting:",
    "🚨\x20Unexpected\x20error\x20while\x20logging\x20device\x20data:",
    "clockIcon",
    "⚠️\x20Invalid\x20College\x20Selection!",
    "DateTimeFormat",
    "clock",
    "3085734bwTqnv",
    "toLocaleTimeString",
    "getElementById",
    "marquee-bg-changer",
    "value",
    "details",
    "select",
    "1557252ymhcCQ",
    "trim",
    "Geolocation\x20not\x20supported",
    "getDate",
    "Tuesday",
    "Jul",
    "\x20IST\x20\x20",
    "12684650hUmFpv",
    "no-cursor",
    "⚠️\x20Temporarily\x20Unavailable!",
    "✅\x20Data\x20sent\x20successfully:",
    "href",
    "onkeyup",
    "d-none",
    "Access\x20to\x20Student\x20portal\x20will\x20be\x20suspended\x20from\x20",
    "copy",
    "Alert!",
    "alert-danger",
    "disabled",
    "Session\x20logged\x20successfully:",
    "getDay",
    "mobile",
    ".main-page1",
    "getSeconds",
    "courses",
    "addEventListener",
    "students",
    "\x20GMT\x20+5.30",
    "length",
    "https://cdn.jsdelivr.net/gh/ravikiranoffl/cs50database@personal/cs50sql-introduction.mp4",
    "Aug",
    "device_log",
    "longitude",
    "message",
    "Successfully\x20Results\x20Fetched!",
    "session_log",
    "status1",
    "Update!",
    "src",
    "⚠️\x20Student\x20was\x20Frozen\x20and\x20Detained!",
    "2409:40f0:601b:dc66:696d:2743:2c1f:b001",
    "Jun",
    "preventDefault",
    ".btn-text",
    ".alert-msg",
    "Saturday",
    "getItem",
    "CS50P\x20Official\x20Playlist",
    "padStart",
    "region",
    "Error\x20inserting\x20into\x20Supabase:",
    "15415wDYojh",
    "7HHIhVB",
    "May",
    ".modal",
    "https://ipapi.co/json/",
    "log",
    ":00\x20to\x20",
    ".playlist-btn",
    "innerHTML",
    "50bLSuOo",
    "Feb",
    ".modal-title",
    "error",
    "fa-triangle-exclamation",
    "textContent",
    "city",
    "⚠️\x20Mobile\x20Number\x20is\x20Empty!",
    ".reg-attempt",
    "platform",
    "toString",
    "getMinutes",
    "paste",
    "alert-warning",
    "❌\x20Supabase\x20insert\x20error:",
    "getHours",
    "btn-success",
    "Search\x20Workspace\x20ID",
    "Sunday",
    "Dec",
    "DOMContentLoaded",
    "Thursday",
    "querySelector",
    "Monday",
    "en-US",
    "⚠️\x20Illegal\x20Event\x20Triggered!",
    ":59\x20IST\x20(UTC\x20+5:30).\x20Service\x20will\x20be\x20restored\x20at\x20",
    "914415yqhBVG",
    "\x20<strong><i\x20class=\x22fa-solid\x20fa-wifi\x22></i>\x20Mega\x20Update!</strong>\x20\x20\x20CS50x\x20India\x20Student\x20Portal\x20is\x20now\x20deployed\x20and\x20hosted\x20under\x20Firebase!\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "onLine",
    "insert",
    "Detained",
    ".registrant-details",
  ];
  a0_0x4216 = function () {
    return _0x1a59db;
  };
  return a0_0x4216();
}
function collectBaseData() {
  const _0xaf5acb = a0_0x1bd3b8;
  return {
    session_id: _0xaf5acb(0x1a2) + getFormattedDate(),
    timestamp: dateTimeFormat(),
    timezone: Intl[_0xaf5acb(0x1b2)]()["resolvedOptions"]()["timeZone"],
    user_agent: navigator["userAgent"],
    platform: navigator[_0xaf5acb(0x200)],
    language: navigator[_0xaf5acb(0x183)],
    vendor: navigator[_0xaf5acb(0x197)],
    online: navigator[_0xaf5acb(0x171)],
    device_memory: navigator[_0xaf5acb(0x17f)] || null,
    connection: (navigator["connection"] || {})["effectiveType"] || null,
  };
}
async function logDeviceData() {
  const _0x20ab6c = a0_0x1bd3b8,
    _0x2e5570 = collectBaseData();
  try {
    const { data: _0x5c8d41, error: _0x33fd12 } = await supabase["from"](
      _0x20ab6c(0x1da)
    )[_0x20ab6c(0x172)]([_0x2e5570]);
    _0x33fd12
      ? console[_0x20ab6c(0x1fa)](
          _0x20ab6c(0x205),
          _0x33fd12[_0x20ab6c(0x1dc)],
          _0x33fd12[_0x20ab6c(0x1b9)]
        )
      : console[_0x20ab6c(0x1f3)](_0x20ab6c(0x19b));
  } catch (_0xfe7782) {
    console["error"](_0x20ab6c(0x1af), _0xfe7782);
  }
}
let geoLocStatus = "";
localStorage[a0_0x1bd3b8(0x1e9)](a0_0x1bd3b8(0x18e)) &&
  (geoLocStatus = localStorage[a0_0x1bd3b8(0x1e9)](a0_0x1bd3b8(0x18e)));
if (geoLocStatus === "")
  document[a0_0x1bd3b8(0x1d4)](a0_0x1bd3b8(0x20b), logDeviceData),
    document[a0_0x1bd3b8(0x1d4)](a0_0x1bd3b8(0x20b), sendGeoDataToSupabase);
else {
  const admin = {
    timestamp: dateTimeFormat(),
    ipAddress: a0_0x1bd3b8(0x1e3),
    devices:
      "OnePlus\x20Nord\x20CE2\x205G/HP\x20Pavillion\x20Laptop\x2014-ec1xx\x20i5\x20Winx64",
    status:
      "The\x20website\x27s\x20owner\x20or\x20administrator\x20accessed\x20the\x20system\x20with\x20full\x20administrative\x20privileges,\x20overriding\x20standard\x20security\x20protocols.",
  };
  console["log"](admin);
}
let mobile = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x199)),
  formBtn = document[a0_0x1bd3b8(0x20d)](".workspace-btn"),
  select = document["querySelector"](a0_0x1bd3b8(0x1ad)),
  spinner = document["querySelector"](a0_0x1bd3b8(0x1a9)),
  alert1 = document[a0_0x1bd3b8(0x20d)](".error-alert"),
  msg = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x1e7)),
  registrants = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x174)),
  cs50id = document["querySelector"](".cs50id"),
  regName = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x190)),
  regCourse = document[a0_0x1bd3b8(0x20d)](".reg-course"),
  regMode = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x179)),
  regStatus = document[a0_0x1bd3b8(0x20d)](".reg-status"),
  regDate = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x178)),
  regDuration = document[a0_0x1bd3b8(0x20d)](".reg-duration"),
  regAttempt = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x1ff)),
  btnText = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x1e6)),
  lang = document["querySelector"](a0_0x1bd3b8(0x18d)),
  underCon = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x1ab)),
  firstClose = document[a0_0x1bd3b8(0x20d)](".first-close"),
  playlist = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x1f5)),
  iframe = document["querySelector"](".iframe"),
  modal = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x1f1)),
  modalTitle = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x1f9)),
  viewModalBtn = document[a0_0x1bd3b8(0x20d)](".view-modal-btn"),
  mark = document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x196)),
  flashAlert = document[a0_0x1bd3b8(0x20d)](".flash-alert"),
  alertHead = document["querySelector"](".alert-heading"),
  mainPage = document["querySelector"](a0_0x1bd3b8(0x1d1)),
  marqueeIcon = document["querySelector"](a0_0x1bd3b8(0x184)),
  isFetched = ![];
mobile["addEventListener"](a0_0x1bd3b8(0x203), (_0x13ee4d) =>
  _0x13ee4d[a0_0x1bd3b8(0x1e5)]()
),
  mobile["addEventListener"](a0_0x1bd3b8(0x1ca), (_0x2697ed) =>
    _0x2697ed[a0_0x1bd3b8(0x1e5)]()
  ),
  mobile[a0_0x1bd3b8(0x1d4)](a0_0x1bd3b8(0x1a5), (_0xc8d992) =>
    _0xc8d992["preventDefault"]()
  );
function range(_0x4b6895, _0x3aacec) {
  const _0x43a34a = a0_0x1bd3b8;
  let _0x54290f = Array[_0x43a34a(0x194)](
    { length: _0x3aacec - _0x4b6895 },
    (_0x39755d, _0x12fdc2) => _0x12fdc2 + _0x4b6895
  );
  return _0x54290f;
}
mobile["value"] === "" &&
  select[a0_0x1bd3b8(0x176)][a0_0x1bd3b8(0x1a3)](a0_0x1bd3b8(0x1c8));
function blockPortal() {
  const _0x224aa9 = a0_0x1bd3b8;
  if (isFetched) return;
  let _0x269ef9 = new Date(),
    _0x58e864 = _0x269ef9[_0x224aa9(0x206)](),
    _0x2eb9bd = range(0x0, 0x5);
  if (_0x2eb9bd["includes"](_0x58e864)) {
    (mobile[_0x224aa9(0x1b8)] = ""),
      (mobile[_0x224aa9(0x1cd)] = !![]),
      (select[_0x224aa9(0x1cd)] = !![]),
      mobile[_0x224aa9(0x176)]["add"](_0x224aa9(0x1c3)),
      registrants[_0x224aa9(0x176)][_0x224aa9(0x1a3)](_0x224aa9(0x1c8)),
      mainPage[_0x224aa9(0x176)][_0x224aa9(0x1a3)](_0x224aa9(0x18b)),
      mobile[_0x224aa9(0x176)]["add"](_0x224aa9(0x18b)),
      select["classList"]["add"](_0x224aa9(0x18b)),
      formBtn[_0x224aa9(0x176)][_0x224aa9(0x1a3)](_0x224aa9(0x18b)),
      (formBtn[_0x224aa9(0x1cd)] = !![]),
      (btnText[_0x224aa9(0x1fc)] = _0x224aa9(0x1c4)),
      formBtn["classList"][_0x224aa9(0x1a3)](_0x224aa9(0x1a1)),
      flashAlert["classList"][_0x224aa9(0x1a3)]("alert-danger"),
      marqueeIcon[_0x224aa9(0x176)]["add"](_0x224aa9(0x1fb)),
      mark[_0x224aa9(0x176)][_0x224aa9(0x1a3)](_0x224aa9(0x1b7)),
      (alertHead["textContent"] = _0x224aa9(0x1cb));
    let _0x25c62c = String(_0x2eb9bd[0x0]),
      _0xde98a8 = String(_0x2eb9bd[_0x2eb9bd[_0x224aa9(0x1d7)] - 0x1]),
      _0xbce69b = String(_0x2eb9bd[_0x2eb9bd[_0x224aa9(0x1d7)] - 0x1] + 0x1);
    _0x25c62c[_0x224aa9(0x1d7)] === 0x1 && (_0x25c62c = "0" + _0x25c62c),
      _0xde98a8[_0x224aa9(0x1d7)] === 0x1 && (_0xde98a8 = "0" + _0xde98a8),
      _0xbce69b["length"] === 0x1 && (_0xbce69b = "0" + _0xbce69b),
      (mark[_0x224aa9(0x1fc)] =
        _0x224aa9(0x1c9) +
        _0x25c62c +
        _0x224aa9(0x1f4) +
        _0xde98a8 +
        _0x224aa9(0x211) +
        _0xbce69b +
        _0x224aa9(0x181));
  } else
    (mobile[_0x224aa9(0x1cd)] = ![]),
      (select[_0x224aa9(0x1cd)] = ![]),
      mobile[_0x224aa9(0x176)]["remove"](_0x224aa9(0x1c3)),
      mainPage[_0x224aa9(0x176)][_0x224aa9(0x188)](_0x224aa9(0x18b)),
      mobile[_0x224aa9(0x176)][_0x224aa9(0x188)](_0x224aa9(0x18b)),
      select[_0x224aa9(0x176)]["remove"](_0x224aa9(0x18b)),
      formBtn[_0x224aa9(0x176)][_0x224aa9(0x188)](_0x224aa9(0x18b)),
      (btnText["textContent"] = _0x224aa9(0x208)),
      formBtn["classList"]["remove"](_0x224aa9(0x1a1)),
      (formBtn["disabled"] = ![]),
      flashAlert["classList"][_0x224aa9(0x188)](_0x224aa9(0x1cc)),
      mark[_0x224aa9(0x176)]["remove"](_0x224aa9(0x1b7)),
      marqueeIcon[_0x224aa9(0x176)][_0x224aa9(0x188)](_0x224aa9(0x1fb)),
      (alertHead["textContent"] = _0x224aa9(0x1e0)),
      (mark[_0x224aa9(0x1f6)] = _0x224aa9(0x170));
}
blockPortal();
let interval = setInterval(blockPortal, 0x3e8);
(firstClose["onclick"] = () => {
  const _0x3e43fd = a0_0x1bd3b8;
  underCon[_0x3e43fd(0x176)][_0x3e43fd(0x188)](_0x3e43fd(0x1c8));
}),
  (document[a0_0x1bd3b8(0x20d)](a0_0x1bd3b8(0x185))[a0_0x1bd3b8(0x17c)] = (
    _0x5159eb
  ) => {
    const _0x1b8ece = a0_0x1bd3b8;
    _0x5159eb[_0x1b8ece(0x1e5)]();
  });
const selector = document[a0_0x1bd3b8(0x1b6)](a0_0x1bd3b8(0x180)),
  clock = document[a0_0x1bd3b8(0x1b6)](a0_0x1bd3b8(0x1b3)),
  flag = document["getElementById"](a0_0x1bd3b8(0x1a4)),
  clockIcon = document["getElementById"](a0_0x1bd3b8(0x1b0));
let currentZone = selector[a0_0x1bd3b8(0x1b8)];
function updateClock() {
  const _0x2b9be2 = a0_0x1bd3b8;
  if (!currentZone) return;
  const _0x203ab8 = new Date(),
    _0xcd87ad = {
      timeZone: currentZone,
      hour: _0x2b9be2(0x192),
      minute: _0x2b9be2(0x192),
      second: "2-digit",
      hour12: !![],
    },
    _0x5a6694 = _0x203ab8[_0x2b9be2(0x1b5)](_0x2b9be2(0x20f), _0xcd87ad);
  clock[_0x2b9be2(0x1fc)] = _0x5a6694;
}
selector[a0_0x1bd3b8(0x1d4)]("change", function () {
  const _0x433f66 = a0_0x1bd3b8;
  (currentZone = this[_0x433f66(0x1b8)]),
    (flag[_0x433f66(0x1e1)] = flagMap[currentZone]);
}),
  (flag[a0_0x1bd3b8(0x1e1)] = flagMap[currentZone]),
  setInterval(updateClock, 0x3e8),
  updateClock(),
  (mobile["onblur"] = () => {
    const _0x4aaf08 = a0_0x1bd3b8;
    mobile[_0x4aaf08(0x1b8)][_0x4aaf08(0x1d7)] !== 0xa &&
      (alert1[_0x4aaf08(0x176)]["add"](_0x4aaf08(0x204)),
      select[_0x4aaf08(0x176)][_0x4aaf08(0x1a3)](_0x4aaf08(0x1c8)),
      (msg[_0x4aaf08(0x1fc)] =
        "⚠️\x20Mobile\x20Number\x20cannot\x20be\x20left\x20empty!"),
      alert1[_0x4aaf08(0x176)][_0x4aaf08(0x188)](_0x4aaf08(0x1c8)),
      setTimeout(() => {
        const _0x111d42 = _0x4aaf08;
        alert1["classList"][_0x111d42(0x1a3)](_0x111d42(0x1c8));
      }, 0xfa0));
  });
const logSession = async (_0x29d816) => {
  const _0x24583d = a0_0x1bd3b8;
  try {
    const _0x140d6f = await fetch(_0x24583d(0x1f2)),
      _0xd47a40 = await _0x140d6f["json"](),
      _0x6791c8 = _0xd47a40["ip"],
      _0x21ed83 = _0xd47a40[_0x24583d(0x1fd)],
      _0x523772 = _0xd47a40[_0x24583d(0x1ec)],
      _0x129ab2 = _0xd47a40["country_name"];
    let _0x3908fa = new Date(),
      _0x13f17a = String(_0x3908fa["getDate"]())[_0x24583d(0x1eb)](0x2, 0x0),
      _0x58417c = String(_0x3908fa[_0x24583d(0x17e)]())[_0x24583d(0x1eb)](
        0x2,
        0x0
      ),
      _0x91850c = _0x3908fa["getFullYear"](),
      _0x10228f = String(_0x3908fa[_0x24583d(0x206)]())[_0x24583d(0x1eb)](
        0x2,
        0x0
      ),
      _0x4a041e = String(_0x3908fa[_0x24583d(0x202)]())[_0x24583d(0x1eb)](
        0x2,
        0x0
      ),
      _0x4e089d = String(_0x3908fa["getSeconds"]())[_0x24583d(0x1eb)](0x2, 0x0),
      _0x4fccf4 = String(_0x3908fa[_0x24583d(0x1cf)]()),
      _0x5a7a5f = [
        _0x24583d(0x209),
        "Monday",
        _0x24583d(0x1bf),
        _0x24583d(0x19e),
        _0x24583d(0x20c),
        _0x24583d(0x189),
        _0x24583d(0x1e8),
      ];
    const _0x17321f = navigator[_0x24583d(0x191)],
      _0x6b98 = /Mobi/i[_0x24583d(0x198)](_0x17321f)
        ? _0x24583d(0x1d0)
        : "desktop",
      { data: _0xf68cce, error: _0x279c4b } = await supabase[_0x24583d(0x194)](
        _0x24583d(0x1de)
      )["insert"]([
        {
          mobile: _0x29d816,
          ip_address: _0x6791c8,
          location: _0x21ed83 + ",\x20" + _0x523772 + ",\x20" + _0x129ab2,
          user_agent: _0x17321f,
          device: _0x6b98,
          timestamp:
            _0x13f17a +
            "-" +
            _0x58417c +
            "-" +
            _0x91850c +
            "\x20" +
            _0x10228f +
            ":" +
            _0x4a041e +
            ":" +
            _0x4e089d +
            _0x24583d(0x1c1) +
            _0x5a7a5f[_0x4fccf4] +
            _0x24583d(0x1d6),
        },
      ]);
    _0x279c4b
      ? console[_0x24583d(0x1fa)](_0x24583d(0x1a0), _0x279c4b)
      : console[_0x24583d(0x1f3)](_0x24583d(0x1ce), _0xf68cce);
  } catch (_0x5dc7d9) {
    console[_0x24583d(0x1fa)](_0x24583d(0x1ae), _0x5dc7d9);
  }
};
(mobile[a0_0x1bd3b8(0x1c7)] = () => {
  const _0x2bfef8 = a0_0x1bd3b8;
  if (String(mobile["value"])[_0x2bfef8(0x1d7)] === 0xa) {
    const _0x5b1d56 = async () => {
      const _0x3167bf = _0x2bfef8,
        { data: _0x5dbf91, error: _0x410ccb } = await supabase["from"](
          _0x3167bf(0x1d5)
        )
          [_0x3167bf(0x1ba)](_0x3167bf(0x1d0))
          ["eq"](_0x3167bf(0x1d0), mobile[_0x3167bf(0x1b8)]);
      logSession(mobile[_0x3167bf(0x1b8)]),
        _0x5dbf91[_0x3167bf(0x1d7)] === 0x0
          ? (select[_0x3167bf(0x176)][_0x3167bf(0x1a3)](_0x3167bf(0x1c8)),
            alert1[_0x3167bf(0x176)][_0x3167bf(0x1a3)](_0x3167bf(0x1cc)),
            alert1[_0x3167bf(0x176)][_0x3167bf(0x188)](_0x3167bf(0x1c8)),
            setTimeout(() => {
              const _0x5b6833 = _0x3167bf;
              alert1[_0x5b6833(0x176)]["add"](_0x5b6833(0x1c8)),
                (mobile[_0x5b6833(0x1b8)] = "");
            }, 0xfa0),
            (msg[_0x3167bf(0x1fc)] = _0x3167bf(0x17d)))
          : (select[_0x3167bf(0x176)][_0x3167bf(0x188)](_0x3167bf(0x1c8)),
            alert1[_0x3167bf(0x176)][_0x3167bf(0x188)](_0x3167bf(0x1ac)),
            alert1["classList"]["add"](_0x3167bf(0x1c8)),
            (msg[_0x3167bf(0x1fc)] = ""));
    };
    _0x5b1d56();
  }
}),
  (select["onblur"] = () => {
    const _0x21cf2b = a0_0x1bd3b8;
    select[_0x21cf2b(0x1b8)] === "" &&
      ((msg["textContent"] = _0x21cf2b(0x175)),
      alert1["classList"]["remove"](_0x21cf2b(0x1c8)),
      setTimeout(() => {
        const _0x3a2084 = _0x21cf2b;
        alert1[_0x3a2084(0x176)][_0x3a2084(0x1a3)]("d-none");
      }, 0xfa0));
  }),
  (formBtn[a0_0x1bd3b8(0x187)] = function () {
    const _0x53d074 = a0_0x1bd3b8;
    if (mobile[_0x53d074(0x1b8)] === "") {
      (msg["textContent"] = _0x53d074(0x210)),
        alert1["classList"][_0x53d074(0x1a3)](_0x53d074(0x1ac)),
        alert1[_0x53d074(0x176)][_0x53d074(0x188)](_0x53d074(0x1c8)),
        setTimeout(() => {
          const _0xc4887 = _0x53d074;
          alert1[_0xc4887(0x176)][_0xc4887(0x1a3)](_0xc4887(0x1c8));
        }, 0xfa0);
      return;
    } else
      (msg[_0x53d074(0x1fc)] = ""),
        alert1[_0x53d074(0x176)][_0x53d074(0x188)](_0x53d074(0x1cc)),
        alert1["classList"][_0x53d074(0x1a3)](_0x53d074(0x1c8));
    if (select[_0x53d074(0x1b8)] === "") {
      (msg[_0x53d074(0x1fc)] = _0x53d074(0x175)),
        alert1["classList"]["add"](_0x53d074(0x204)),
        alert1["classList"][_0x53d074(0x188)](_0x53d074(0x1c8)),
        setTimeout(() => {
          const _0x27b91b = _0x53d074;
          alert1[_0x27b91b(0x176)][_0x27b91b(0x1a3)]("d-none");
        }, 0xfa0);
      return;
    } else
      (msg[_0x53d074(0x1fc)] = ""),
        alert1[_0x53d074(0x176)][_0x53d074(0x188)](_0x53d074(0x1cc)),
        alert1[_0x53d074(0x176)]["add"]("d-none");
    btnText["classList"][_0x53d074(0x1a3)](_0x53d074(0x1c8));
    if (mobile[_0x53d074(0x1b8)] === "" && select[_0x53d074(0x1b8)] !== "")
      (msg[_0x53d074(0x1fc)] = _0x53d074(0x1fe)),
        alert1[_0x53d074(0x176)][_0x53d074(0x188)](_0x53d074(0x1c8)),
        setTimeout(() => {
          const _0x12be77 = _0x53d074;
          alert1["classList"][_0x12be77(0x1a3)](_0x12be77(0x1c8));
        }, 0xfa0),
        btnText[_0x53d074(0x176)][_0x53d074(0x188)](_0x53d074(0x1c8));
    else {
      const _0x8a6e25 = mobile[_0x53d074(0x1b8)][_0x53d074(0x1bc)](),
        _0x5bdb3f = select[_0x53d074(0x1b8)];
      spinner["classList"][_0x53d074(0x188)]("d-none"),
        setTimeout(() => {
          async function _0x4c4517() {
            const _0xe70826 = a0_0x341e,
              { data: _0x3d87f0, error: _0x4450a9 } = await supabase[
                _0xe70826(0x194)
              ](_0xe70826(0x1d5))
                ["select"]("*")
                ["eq"](_0xe70826(0x1d0), mobile[_0xe70826(0x1b8)])
                ["eq"]("college", select[_0xe70826(0x1b8)]);
            if (_0x3d87f0[_0xe70826(0x1d7)] === 0x1) return _0x3d87f0[0x0];
          }
          _0x4c4517()["then"]((_0x173d8b) => {
            const _0x2d14e2 = a0_0x341e,
              _0x25733c = _0x173d8b;
            if (_0x25733c[_0x2d14e2(0x1df)] !== _0x2d14e2(0x173)) {
              if (_0x25733c[_0x2d14e2(0x1a8)] === _0x5bdb3f) {
                let _0x26a9e9 = new Date(_0x25733c["date"]),
                  _0x482fd5 = String(_0x26a9e9[_0x2d14e2(0x1be)]())[
                    _0x2d14e2(0x1eb)
                  ](0x2, "0"),
                  _0x5bf4d6 = _0x26a9e9[_0x2d14e2(0x17e)](),
                  _0x4b2a20 = _0x26a9e9[_0x2d14e2(0x18f)](),
                  _0x1801eb = new Date(_0x2d14e2(0x186)),
                  _0x44336f = String(_0x1801eb[_0x2d14e2(0x1be)]())["padStart"](
                    0x2,
                    "0"
                  ),
                  _0x8d2a80 = _0x1801eb[_0x2d14e2(0x17e)](),
                  _0x58701c = _0x1801eb[_0x2d14e2(0x18f)](),
                  _0x39a133 = [
                    "Jan",
                    _0x2d14e2(0x1f8),
                    _0x2d14e2(0x19a),
                    "Apr",
                    _0x2d14e2(0x1f0),
                    _0x2d14e2(0x1e4),
                    _0x2d14e2(0x1c0),
                    _0x2d14e2(0x1d9),
                    _0x2d14e2(0x182),
                    _0x2d14e2(0x195),
                    _0x2d14e2(0x177),
                    _0x2d14e2(0x20a),
                  ];
                spinner[_0x2d14e2(0x176)][_0x2d14e2(0x1a3)](_0x2d14e2(0x1c8)),
                  registrants[_0x2d14e2(0x176)][_0x2d14e2(0x188)](
                    _0x2d14e2(0x1c8)
                  ),
                  (cs50id["textContent"] = _0x25733c["id"]),
                  (regName["textContent"] = _0x25733c[_0x2d14e2(0x193)]),
                  (regCourse[_0x2d14e2(0x1fc)] = _0x25733c[_0x2d14e2(0x1d3)]),
                  (lang[_0x2d14e2(0x1fc)] = _0x25733c["lang"]),
                  (regStatus[_0x2d14e2(0x1fc)] = _0x25733c[_0x2d14e2(0x1df)]),
                  (regDate[_0x2d14e2(0x1fc)] =
                    _0x482fd5 + "-" + _0x39a133[_0x5bf4d6] + "-" + _0x4b2a20),
                  (regDuration[_0x2d14e2(0x1fc)] =
                    _0x44336f + "-" + _0x39a133[_0x8d2a80] + "-" + _0x58701c),
                  (regAttempt[_0x2d14e2(0x1fc)] = _0x25733c["attempts"]);
                if (_0x25733c[_0x2d14e2(0x1d3)] === "CS50S")
                  (modalTitle["textContent"] = "CS50S\x20Official\x20Playlist"),
                    (iframe[_0x2d14e2(0x1e1)] = _0x2d14e2(0x1d8)),
                    (playlist[_0x2d14e2(0x1c6)] =
                      "https://www.youtube.com/watch?v=wdzA1Z8tKek&list=PLhQjrBD2T382v1MBjNOhPu9SiJ1fsD4C0");
                else
                  _0x25733c[_0x2d14e2(0x1d3)] === "CS50P"
                    ? ((modalTitle[_0x2d14e2(0x1fc)] = _0x2d14e2(0x1ea)),
                      (iframe["src"] =
                        "https://cdn.jsdelivr.net/gh/ravikiranoffl/cs50database@personal/cs50p-introduction.mp4"),
                      (playlist["href"] =
                        "https://www.youtube.com/playlist?list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V"))
                    : (modal[_0x2d14e2(0x176)][_0x2d14e2(0x1a3)]("d-none"),
                      (viewModalBtn["disabled"] = !![]));
                btnText[_0x2d14e2(0x176)][_0x2d14e2(0x188)](_0x2d14e2(0x1c8)),
                  formBtn["classList"][_0x2d14e2(0x188)](_0x2d14e2(0x18a)),
                  (formBtn[_0x2d14e2(0x1cd)] = !![]),
                  (isFetched = !![]),
                  (mobile[_0x2d14e2(0x1cd)] = !![]),
                  (select[_0x2d14e2(0x1cd)] = !![]),
                  formBtn[_0x2d14e2(0x176)][_0x2d14e2(0x1a3)](_0x2d14e2(0x207)),
                  (formBtn[_0x2d14e2(0x1fc)] = _0x2d14e2(0x1dd)),
                  (students = {});
              } else
                (mobile["value"] = ""),
                  (select["value"] = ""),
                  spinner["classList"][_0x2d14e2(0x1a3)](_0x2d14e2(0x1c8)),
                  (msg[_0x2d14e2(0x1fc)] = _0x2d14e2(0x1b1)),
                  select[_0x2d14e2(0x176)][_0x2d14e2(0x1a3)](_0x2d14e2(0x1c8)),
                  alert1[_0x2d14e2(0x176)][_0x2d14e2(0x188)](_0x2d14e2(0x1c8)),
                  setTimeout(() => {
                    const _0xa957a6 = _0x2d14e2;
                    alert1["classList"][_0xa957a6(0x1a3)](_0xa957a6(0x1c8));
                  }, 0xdac),
                  btnText[_0x2d14e2(0x176)]["remove"](_0x2d14e2(0x1c8));
            } else
              _0x25733c[_0x2d14e2(0x1df)] === "Detained"
                ? ((mobile[_0x2d14e2(0x1b8)] = ""),
                  (select[_0x2d14e2(0x1b8)] = ""),
                  spinner["classList"][_0x2d14e2(0x1a3)](_0x2d14e2(0x1c8)),
                  (msg["textContent"] = _0x2d14e2(0x1e2)),
                  alert1[_0x2d14e2(0x176)][_0x2d14e2(0x188)](_0x2d14e2(0x1c8)),
                  alert1[_0x2d14e2(0x176)][_0x2d14e2(0x188)](_0x2d14e2(0x204)),
                  alert1["classList"]["add"](_0x2d14e2(0x1cc)),
                  setTimeout(() => {
                    const _0x23686b = _0x2d14e2;
                    select[_0x23686b(0x176)][_0x23686b(0x1a3)](
                      _0x23686b(0x1c8)
                    ),
                      alert1["classList"][_0x23686b(0x1a3)](_0x23686b(0x1c8)),
                      alert1[_0x23686b(0x176)][_0x23686b(0x1a3)](
                        _0x23686b(0x204)
                      ),
                      alert1[_0x23686b(0x176)][_0x23686b(0x188)](
                        _0x23686b(0x1cc)
                      );
                  }, 0x1b58),
                  btnText[_0x2d14e2(0x176)][_0x2d14e2(0x188)](_0x2d14e2(0x1c8)))
                : ((mobile[_0x2d14e2(0x1b8)] = ""),
                  (select[_0x2d14e2(0x1b8)] = ""),
                  spinner[_0x2d14e2(0x176)]["add"](_0x2d14e2(0x1c8)),
                  alert1["classList"][_0x2d14e2(0x188)](_0x2d14e2(0x1c8)),
                  setTimeout(() => {
                    const _0x640ca2 = _0x2d14e2;
                    alert1[_0x640ca2(0x176)][_0x640ca2(0x1a3)]("d-none");
                  }, 0xdac),
                  btnText[_0x2d14e2(0x176)]["remove"]("d-none"));
          });
        }, 0xbb8);
    }
  });
