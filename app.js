/* ══════════════════════════════════════════════════════════
   LANGUAGE / i18n SYSTEM
   ══════════════════════════════════════════════════════════ */
const LANG_STRINGS = {
  sw: {
    nav_free: "Free", nav_vip: "VIP", nav_history: "Historia",
    brand_tagline: "Utabiri wa Kitaalamu wa Mpira",

    eyebrow_free: "Tips za Bure", eyebrow_vip: "Tips za VIP",

    ticker_loading: "INAPAKIA FOMU YA LEO",
    ticker_live: "FOMU HAI",
    ticker_wins: "USHINDI LEO",
    ticker_streak: "MFULULIZO",
    ticker_pending: "MECHI ZINASUBIRI",
    ticker_brand: "PROFESSIONAL FOOTBALL PREDICTIONS",

    streak_free_title: "Mfululizo wa Ushindi Leo",
    streak_free_sub: "mfululizo wa ushindi leo",
    streak_vip_title: "Mfululizo wa Ushindi wa VIP",
    streak_vip_sub: "mfululizo wa ushindi leo",

    empty_free_title: "Hakuna mechi leo",
    empty_free_sub: "Rudi baadaye kuona tips za bure za leo",
    empty_vip_title: "Hakuna VIP tips leo",
    empty_vip_sub: "Tips za premium zitaonekana hapa hivi karibuni",
    empty_hist_title: "Bado hakuna historia",
    empty_hist_sub: "Matokeo ya nyuma yataonekana hapa",

    stat_wins: "Ushindi", stat_lost: "Kupoteza", stat_rate: "Kiwango cha ushindi", stat_odds: "Jumla ya odds",
    progress_label: "Kifuatiliaji cha kiwango cha ushindi",

    vip_cta_title: "Fungua VIP Tips Zote",
    vip_cta_sub_default: "Bofya Kuona Bei",
    vip_cta_sub_available: "tips za premium zinapatikana — bofya kufungua",

    account_title: "Akaunti Yangu",
    account_guest_msg: "Bado hujaingia kwenye akaunti.",
    btn_login_signup: "Ingia / Jisajili",
    btn_logout: "Toka",

    notif_title: "Arifa",
    notif_clear: "Futa zote",
    notif_empty: "Hakuna arifa bado",

    welcome_title: "Karibu BM SURESCORE",
    auth_sub_login: "Ingia kwenye akaunti yako ili kuendelea pale ulipoishia.",
    auth_sub_signup: "Fungua akaunti ili VIP status na tips zako zikufuate kwenye kifaa chochote.",
    tab_login: "Ingia", tab_signup: "Jisajili",
    label_name: "Jina Lako", label_email: "Barua Pepe", label_password: "Nywila",
    placeholder_name: "mfano: Thobias Maiko",
    placeholder_email: "mfano: thobias@gmail.com",
    placeholder_password: "Angalau herufi 6",
    btn_login: "Ingia ➜", btn_signup: "Jisajili ➜",
    btn_logging_in: "INAINGIA…", btn_signing_up: "INAJISAJILI…",
    forgot_password: "Umesahau nywila?",

    blocked_title: "Umezuiwa Kuingia",
    blocked_msg: "Akaunti yako imezuiwa kutumia BM SURESCORE. Kama unadhani hii ni kosa, wasiliana nasi kupitia WhatsApp.",
    blocked_btn: "💬 Wasiliana WhatsApp",

    vip_active: "VIP ACTIVE",
    vip_expires: "Inaisha",

    auth_crown_title: "Ufikiaji wa VIP",
    auth_sub: "Weka msimbo wako wa VIP kufungua tips za premium za leo",
    plans_title: "Chagua Mpango",
    plan_2weeks_name: "Wiki 2", plan_2weeks_dur: "siku 14",
    plan_1month_name: "Mwezi 1", plan_1month_dur: "siku 30",
    plan_3months_name: "Miezi 3", plan_3months_dur: "siku 90",
    plan_best_value: "Bei Bora",
    per_day: "≈ Tsh {n}/siku",
    vip_code_placeholder: "VIP-XXXX-XXXX",
    btn_paste: "📋 Bandika",
    btn_unlock_vip: "Fungua VIP",
    btn_checking: "INAKAGUA…",
    no_code_msg: "Huna msimbo wa VIP?",
    whatsapp_btn: "💬 Lipa / Pata Msimbo wa VIP — WhatsApp",

    hist_free_tab: "📊 Historia ya Bure",
    hist_vip_tab: "💎 Historia ya VIP",
    hist_free_eyebrow: "Historia ya Bure",
    hist_vip_eyebrow: "Historia ya VIP",
    hist_page_label: "Ukurasa {a} kati ya {b}",
    hist_prev: "‹ Ukurasa Uliopita",
    hist_next: "Ukurasa Ujao ›",

    other_matches: "MECHI NYINGINE",

    badge_won: "✅ USHINDI", badge_lost: "❌ IMEPOTEA", badge_vip_locked: "🔒 VIP", badge_pending: "⏳ INASUBIRI",
    tip_premium: "🔒 Premium Tip",
    lock_reveal: "🔒 FUNGUA KUONA",
    lost_flag: "● Imepoteza",
    vip_match_label: "MECHI YA VIP",

    cd_days: "Siku", cd_hrs: "Saa", cd_min: "Dak", cd_sec: "Sek", cd_expired: "Imeisha",

    kickoff: "Mwanzo",

    trust_tips: "Tips zilizochambuliwa",
    trust_winrate: "Kiwango cha ushindi cha wakati wote",
    trust_vipusers: "Wanachama wa VIP hai",

    loading_free: "Inapakia tips za leo…",
    loading_vip: "Inapakia VIP tips…",
    loading_history: "Inapakia historia…",
    loading_generic: "Inapakia…",

    footer_copy: "© 2026 BM SURESCORE · UTABIRI WA KITAALAMU WA MPIRA",

    splash_tagline: "Utabiri wa Kitaalamu wa Mpira",

    /* JS-only runtime messages */
    err_name_first: "Tafadhali jaza jina lako kwanza",
    err_email_required: "Tafadhali jaza barua pepe",
    err_email_invalid: "Barua pepe si sahihi, tafadhali angalia tena",
    err_password_short: "Nywila iwe angalau herufi 6",
    welcome_new_account: "Karibu {name}! Akaunti yako imefunguliwa. 👋",
    login_success: "Umeingia kikamilifu. Karibu tena! 👋",
    logout_success: "Umetoka kwenye akaunti yako 👋",
    forgot_email_required: "Jaza barua pepe sahihi kwanza ili tukutumie link ya kurejesha nywila",
    reset_email_sent: "Tumetuma email ya kurejesha nywila. Angalia inbox yako.",

    code_empty: "Tafadhali weka msimbo wa VIP kwanza",
    code_invalid: "Msimbo si sahihi ❌",
    code_disabled: "Msimbo huu umezimwa ❌",
    code_expired: "Msimbo huu umeisha muda ⏰",
    code_in_use: "Msimbo huu tayari unatumika kwenye kifaa kingine ❌",
    code_accepted: "Msimbo umekubaliwa ✅ Inafungua…",
    code_claimed: "Msimbo huu tayari umeshachukuliwa ❌",
    code_error: "Hitilafu: {msg}",
    code_now_other_device: "Msimbo huu sasa unatumika kwenye kifaa kingine ❌",
    code_disabled_popup: "Msimbo huu wa VIP umezimwa ❌",
    code_expired_popup: "Msimbo huu wa VIP umeisha muda ⏰",
    vip_expired_popup: "⏰ Msimbo wako wa VIP umeisha muda. Tafadhali omba msimbo mpya.",
    vip_expired_notif: "Msimbo wako wa VIP umeisha muda.",
    vip_unlocked_toast: "🎉 VIP tips zimefunguliwa!",
    vip_unlocked_notif: "Ufikiaji wa VIP umewashwa! Furahia utabiri wa premium.",
    starting_soon_popup: "⏰ Inaanza hivi karibuni:\n{match}",
    starting_soon_notif: "{match} itaanza baada ya dakika ~10",
    win_notif: "USHINDI ✅ {match}",
    lost_notif: "IMEPOTEA ❌ {match}",

    clipboard_empty: "Ubao wa kunakili ni tupu",
    clipboard_error: "Imeshindwa kusoma ubao wa kunakili — bonyeza kwa muda mrefu na uchague Bandika",

    tap_pricing: "Bofya Kuona Bei",
    premium_available: "tips {n} za premium zinapatikana — bofya kufungua",
  },
  en: {
    nav_free: "Free", nav_vip: "VIP", nav_history: "History",
    brand_tagline: "Professional Football Predictions",

    eyebrow_free: "Free Tips", eyebrow_vip: "VIP Tips",

    ticker_loading: "LOADING TODAY'S FORM",
    ticker_live: "LIVE FORM",
    ticker_wins: "WINS TODAY",
    ticker_streak: "STREAK",
    ticker_pending: "MATCHES PENDING",
    ticker_brand: "PROFESSIONAL FOOTBALL PREDICTIONS",

    streak_free_title: "Today's Win Streak",
    streak_free_sub: "consecutive wins today",
    streak_vip_title: "VIP Win Streak",
    streak_vip_sub: "consecutive wins today",

    empty_free_title: "No matches today",
    empty_free_sub: "Check back later for today's free tips",
    empty_vip_title: "No VIP tips today",
    empty_vip_sub: "Premium tips will appear here soon",
    empty_hist_title: "No history yet",
    empty_hist_sub: "Past results will appear here",

    stat_wins: "Wins", stat_lost: "Lost", stat_rate: "Win rate", stat_odds: "Total odds",
    progress_label: "Win rate tracker",

    vip_cta_title: "Unlock All VIP Tips",
    vip_cta_sub_default: "Tap to View Pricing",
    vip_cta_sub_available: "premium predictions available — tap to unlock",

    account_title: "My Account",
    account_guest_msg: "You're not logged in yet.",
    btn_login_signup: "Log In / Sign Up",
    btn_logout: "Log Out",

    notif_title: "Notifications",
    notif_clear: "Clear all",
    notif_empty: "No notifications yet",

    welcome_title: "Welcome to BM SURESCORE",
    auth_sub_login: "Log in to your account to continue where you left off.",
    auth_sub_signup: "Create an account so your VIP status and tips follow you on any device.",
    tab_login: "Log In", tab_signup: "Sign Up",
    label_name: "Your Name", label_email: "Email", label_password: "Password",
    placeholder_name: "e.g. Thobias Maiko",
    placeholder_email: "e.g. thobias@gmail.com",
    placeholder_password: "At least 6 characters",
    btn_login: "Log In ➜", btn_signup: "Sign Up ➜",
    btn_logging_in: "LOGGING IN…", btn_signing_up: "SIGNING UP…",
    forgot_password: "Forgot password?",

    blocked_title: "Access Blocked",
    blocked_msg: "Your account has been blocked from accessing BM SURESCORE. If you think this is a mistake, contact us on WhatsApp.",
    blocked_btn: "💬 Contact WhatsApp",

    vip_active: "VIP ACTIVE",
    vip_expires: "Expires",

    auth_crown_title: "VIP Access",
    auth_sub: "Enter your VIP code to unlock today's premium predictions",
    plans_title: "Choose a plan",
    plan_2weeks_name: "2 Weeks", plan_2weeks_dur: "14 days",
    plan_1month_name: "1 Month", plan_1month_dur: "30 days",
    plan_3months_name: "3 Months", plan_3months_dur: "90 days",
    plan_best_value: "Best value",
    per_day: "≈ Tsh {n}/day",
    vip_code_placeholder: "VIP-XXXX-XXXX",
    btn_paste: "📋 Paste",
    btn_unlock_vip: "Unlock VIP",
    btn_checking: "CHECKING…",
    no_code_msg: "Don't have a VIP code?",
    whatsapp_btn: "💬 Pay / Get VIP code — WhatsApp",

    hist_free_tab: "📊 Free History",
    hist_vip_tab: "💎 VIP History",
    hist_free_eyebrow: "Free History",
    hist_vip_eyebrow: "VIP History",
    hist_page_label: "Page {a} of {b}",
    hist_prev: "‹ Prev Page",
    hist_next: "Next Page ›",

    other_matches: "OTHER MATCHES",

    badge_won: "✅ WON", badge_lost: "❌ LOST", badge_vip_locked: "🔒 VIP", badge_pending: "⏳ PENDING",
    tip_premium: "🔒 Premium Tip",
    lock_reveal: "🔒 UNLOCK TO REVEAL",
    lost_flag: "● Lost",
    vip_match_label: "VIP MATCH",

    cd_days: "Days", cd_hrs: "Hrs", cd_min: "Min", cd_sec: "Sec", cd_expired: "Expired",

    kickoff: "Kick-off",

    trust_tips: "Tips analyzed",
    trust_winrate: "All-time win rate",
    trust_vipusers: "Active VIP members",

    loading_free: "Loading today's tips…",
    loading_vip: "Loading VIP tips…",
    loading_history: "Loading history…",
    loading_generic: "Loading…",

    footer_copy: "© 2026 BM SURESCORE · PREMIUM FOOTBALL PREDICTIONS",

    splash_tagline: "Professional Football Predictions",

    /* JS-only runtime messages */
    err_name_first: "Please enter your name first",
    err_email_required: "Please enter your email",
    err_email_invalid: "That email doesn't look right, please check again",
    err_password_short: "Password must be at least 6 characters",
    welcome_new_account: "Welcome {name}! Your account has been created. 👋",
    login_success: "Logged in successfully. Welcome back! 👋",
    logout_success: "You've been logged out 👋",
    forgot_email_required: "Enter a valid email first so we can send you a reset link",
    reset_email_sent: "We've sent a password reset email. Check your inbox.",

    code_empty: "Please enter a VIP code first",
    code_invalid: "Invalid code ❌",
    code_disabled: "This code has been disabled ❌",
    code_expired: "This code has expired ⏰",
    code_in_use: "This code is already in use on another device ❌",
    code_accepted: "Code accepted ✅ Unlocking…",
    code_claimed: "This code has already been claimed ❌",
    code_error: "Error: {msg}",
    code_now_other_device: "This code is now active on another device ❌",
    code_disabled_popup: "This VIP code has been disabled ❌",
    code_expired_popup: "This VIP code has expired ⏰",
    vip_expired_popup: "⏰ Your VIP code has expired. Please request a new code.",
    vip_expired_notif: "Your VIP code has expired.",
    vip_unlocked_toast: "🎉 VIP tips unlocked!",
    vip_unlocked_notif: "VIP access activated! Enjoy premium predictions.",
    starting_soon_popup: "⏰ Starting soon:\n{match}",
    starting_soon_notif: "{match} starts in ~10 minutes",
    win_notif: "WIN ✅ {match}",
    lost_notif: "LOST ❌ {match}",

    clipboard_empty: "Clipboard is empty",
    clipboard_error: "Couldn't read clipboard — long-press the field and choose Paste instead",

    tap_pricing: "Tap to View Pricing",
    premium_available: "{n} premium predictions available — tap to unlock",
  }
};

let currentLang = localStorage.getItem("appLang") || "sw";

function t(key, vars) {
  const dict = LANG_STRINGS[currentLang] || LANG_STRINGS.sw;
  let str = dict[key] !== undefined ? dict[key] : (LANG_STRINGS.sw[key] !== undefined ? LANG_STRINGS.sw[key] : key);
  if (vars) {
    Object.keys(vars).forEach(k => { str = str.replace(`{${k}}`, vars[k]); });
  }
  return str;
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerText = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.innerText = currentLang === "sw" ? "SW" : "EN";
    langBtn.classList.toggle("active-en", currentLang === "en");
  }
  document.documentElement.setAttribute("lang", currentLang);
}

function refreshDynamicUI() {
  // Re-render everything built by JS so it picks up the new language
  updateAccountUI();
  renderNotifications();
  if (freeLoaded && vipLoaded) processTodayMatches();
  if (latestFreeAll && latestVipAll) processHistory();
  // auth tab labels / mode-dependent text
  if (typeof authMode !== "undefined") {
    window.setAuthMode(authMode);
  }
  // vip pricing subtitle needs current vTotal; cheap re-derivation
  const vTotal = (latestVipMatches || []).length;
  updateVipCtaBanner(vTotal);
}

window.setLanguage = function(lang) {
  if (lang !== "sw" && lang !== "en") return;
  currentLang = lang;
  localStorage.setItem("appLang", currentLang);
  applyStaticTranslations();
  refreshDynamicUI();
};

window.toggleLanguage = function() {
  window.setLanguage(currentLang === "sw" ? "en" : "sw");
  navigator.vibrate?.([10]);
};

/* ══════════════════════════════════════════════════════════
   THEME (LIGHT / DARK MODE)
   ══════════════════════════════════════════════════════════ */
let currentTheme = localStorage.getItem("appTheme") ||
  (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

function updateThemeBtn() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;
  btn.innerText = currentTheme === "dark" ? "🌙" : "☀️";
  btn.classList.toggle("active-light", currentTheme === "light");
  btn.setAttribute("title", currentTheme === "dark" ? "Dark mode" : "Light mode");
}

window.setTheme = function(theme) {
  if (theme !== "dark" && theme !== "light") return;
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("appTheme", currentTheme);
  updateThemeBtn();
};

window.toggleTheme = function() {
  window.setTheme(currentTheme === "dark" ? "light" : "dark");
  navigator.vibrate?.([10]);
};

/* ══════════════════════════════════════════════════════════
   SKELETON LOADING
   ══════════════════════════════════════════════════════════ */
function skeletonHtml() {
  return `
  <div class="section-loader">
    <div class="spin-ring"></div>
    <div class="spin-label">${t('loading_generic')}</div>
  </div>
  <div class="skeleton-card"><div class="sk-head"></div><div class="sk-body"><div class="sk-team"></div><div class="sk-score"></div><div class="sk-team"></div></div><div class="sk-tip"></div></div>
  <div class="skeleton-card"><div class="sk-head"></div><div class="sk-body"><div class="sk-team"></div><div class="sk-score"></div><div class="sk-team"></div></div><div class="sk-tip"></div></div>
  <div class="skeleton-card"><div class="sk-head"></div><div class="sk-body"><div class="sk-team"></div><div class="sk-score"></div><div class="sk-team"></div></div><div class="sk-tip"></div></div>
`;
}

function flashSectionLoading(type) {
  const dataEl    = document.getElementById(type === "free" ? "freeData" : "vipData");
  const emptyEl   = document.getElementById(type === "free" ? "emptyFree" : "emptyVip");
  const summaryEl = document.getElementById(type === "free" ? "summaryFree" : "summaryVip");
  const skelEl    = document.getElementById(type === "free" ? "freeSkeletonRows" : "vipSkeletonRows");

  const alreadyHasContent = dataEl.style.display !== "none" && dataEl.innerHTML.trim() !== "";
  if (alreadyHasContent) {
    processTodayMatches();
    return;
  }

  dataEl.style.display = "none";
  emptyEl.classList.add("hidden");
  summaryEl.style.display = "none";

  skelEl.style.opacity = "1";
  skelEl.style.display = "block";
  skelEl.innerHTML = skeletonHtml();

  processTodayMatches();
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getFirestore, collection, query, where, limit,
  onSnapshot, doc, getDoc, getDocs, setDoc, updateDoc,
  serverTimestamp, increment
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import {
  getAuth, signInAnonymously, onAuthStateChanged,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, updateProfile, sendPasswordResetEmail,
  linkWithCredential, EmailAuthProvider
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyDbfaPPAFdOSJm09OxQeMqQ-UsLkQzsdxk",
  authDomain:        "vip-app-b82d3.firebaseapp.com",
  projectId:         "vip-app-b82d3",
  storageBucket:     "vip-app-b82d3.firebasestorage.app",
  messagingSenderId: "412845975498",
  appId:             "1:412845975498:web:e577440f7ae87de7b4d133"
};
const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");

const TEXT_INPUT_IDS = ["vipCodeInput", "authName", "authEmail", "authPassword"];
document.addEventListener("contextmenu", e => {
  if (TEXT_INPUT_IDS.includes(e.target.id)) return;
  e.preventDefault();
});
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("cut", e => e.preventDefault());
document.addEventListener("selectstart", e => {
  if (!TEXT_INPUT_IDS.includes(e.target.id)) e.preventDefault();
});
document.addEventListener("dragstart", e => e.preventDefault());

document.documentElement.setAttribute("data-theme", currentTheme);

let splashHidden = false;
const splashMinTimePromise = new Promise(res => setTimeout(res, 900));

function hideSplash() {
  const el = document.getElementById("splashScreen");
  if (!el) return;
  el.classList.add("hide");
  setTimeout(() => el.remove(), 550);
}

function trySplashHide() {
  if (splashHidden) return;
  splashHidden = true;
  splashMinTimePromise.then(hideSplash);
}

setTimeout(trySplashHide, 6000);

function swapSkeletonForContent(skeletonEl) {
  if (!skeletonEl || skeletonEl.style.display === "none") return;
  skeletonEl.style.opacity = "0";
  setTimeout(() => { skeletonEl.style.display = "none"; }, 300);
}

function renderWithFade(el, html) {
  if (!el) return;
  el.style.transition = "opacity .22s ease";
  el.style.opacity = "0";
  setTimeout(() => {
    el.innerHTML = html;
    requestAnimationFrame(() => { el.style.opacity = "1"; });
  }, 180);
}

let vipUnlocked     = false;
let vipExpiryDate   = null;
let autoLogoutTimer = null;
let codeUnsub       = null;
let currentVipCode  = localStorage.getItem("vipCode") || null;
let notifiedMatches = JSON.parse(localStorage.getItem("notifiedMatches") || "{}");
let notifications   = JSON.parse(localStorage.getItem("vipNotifications") || "[]");
let selectedPlan    = null;

// Sound alerts removed — the browser Audio API can't detect a phone's
// physical silent/mute switch, so beeps played at full volume even when
// the device was set to silent. Vibration + system notifications are
// used instead, since those respect the device's own settings.

let serverOffsetMs = 0;

async function syncServerTime() {
  try {
    const ref = doc(db, "_meta", "serverTime");
    const t0  = Date.now();
    await setDoc(ref, { ts: serverTimestamp() }, { merge: true });
    const snap = await getDoc(ref);
    const t1   = Date.now();
    const serverMillis = snap.data()?.ts?.toMillis?.();
    if (serverMillis) {
      const localMidpoint = (t0 + t1) / 2;
      serverOffsetMs = serverMillis - localMidpoint;
    }
  } catch (e) {
    console.warn("Could not sync server time, falling back to device clock:", e.message);
  }
}
function now() {
  return new Date(Date.now() + serverOffsetMs);
}

let today = null;
let date  = null;

const WEEKDAYS_SW = ["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"];
const WEEKDAYS_EN = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function computeDateFromNow() {
  today = now();
  date  = [
    String(today.getDate()).padStart(2,"0"),
    String(today.getMonth()+1).padStart(2,"0"),
    today.getFullYear()
  ].join(".");

  if (localStorage.getItem("lastDate") !== date) {
    localStorage.removeItem("notifiedMatches");
    notifiedMatches = {};
    localStorage.setItem("lastDate", date);
  }

  updateDateHeading();
}

function updateDateHeading() {
  if (!today) return;
  const weekdays = currentLang === "en" ? WEEKDAYS_EN : WEEKDAYS_SW;
  const label = currentLang === "en" ? "TODAY" : "LEO";
  const weekday = weekdays[today.getDay()];
  document.getElementById("title").innerText = `${label} — ${weekday}, ${date}`;
}

let currentUid  = null;
let currentUser = null;
let isGuestAccount = true;
let appInitialized = false;
let authListenerStarted = false;
let authReadyResolve = null;

function initAuthListener() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const isNewSession = currentUid !== user.uid;
      currentUid     = user.uid;
      currentUser    = user;
      isGuestAccount = user.isAnonymous;

      if (authReadyResolve) { authReadyResolve(user.uid); authReadyResolve = null; }

      updateAccountUI();

      if (isNewSession && appInitialized) {
        await onUserChanged();
      }
    } else {
      currentUid  = null;
      currentUser = null;
      try {
        await signInAnonymously(auth);
      } catch (e) {
        console.error("Anonymous sign-in failed:", e.code, e.message);
        if (authReadyResolve) { authReadyResolve(null); authReadyResolve = null; }
      }
    }
  });
}

function ensureAnonAuth() {
  if (currentUid) return Promise.resolve(currentUid);
  return new Promise((resolve) => {
    authReadyResolve = resolve;
    if (!authListenerStarted) {
      authListenerStarted = true;
      initAuthListener();
    }
  });
}

function getVisitorId() {
  return currentUid;
}

// Called whenever the signed-in identity changes AFTER the app has already
// finished its first load (e.g. the person logs in, signs up, or logs out
// mid-session). Re-runs everything that depends on "who is this device/account".
async function onUserChanged() {
  document.getElementById("vipRequestCard")?.remove();
  vipUnlocked   = false;
  vipExpiryDate = null;
  if (autoLogoutTimer)   clearTimeout(autoLogoutTimer);
  if (countdownInterval) clearInterval(countdownInterval);

  startBlockedWatcher();
  startDeviceResetWatcher();
  await trackVisit();

  if (currentVipCode) subscribeToCode(currentVipCode);
  else initVipCode();

  showAuthModalIfNeeded();
}

// NOTE: We deliberately do NOT create/update an analytics_visitors record
// for anonymous (guest) sessions. Every device gets signed in anonymously
// on first load just so Firestore rules have a stable uid to work with —
// that is an auth-layer implementation detail, not someone "using the app"
// in a way we want to track. A person only becomes a trackable "visitor"
// once they've actually created an account or logged in (isGuestAccount
// === false). This keeps analytics_visitors (and the Admin Panel's
// Visitors / VIP Users tabs) limited to real, identifiable users instead
// of filling up with anonymous device sessions that have no name or email.
async function trackVisit() {
  try {
    if (isGuestAccount) return;
    const visitorId = getVisitorId();
    if (!visitorId) return;
    const ref  = doc(db, "analytics_visitors", visitorId);
    const snap = await getDoc(ref).catch(() => null);
    const nowISO = now().toISOString();
    const name  = (currentUser && !currentUser.isAnonymous) ? (currentUser.displayName || null) : null;
    const email = (currentUser && !currentUser.isAnonymous) ? (currentUser.email || null) : null;

    if (snap && snap.exists()) {
      const data = snap.data();
      const isNewDay = data.lastDate !== date;
      await setDoc(ref, {
        lastSeen:   nowISO,
        lastDate:   date,
        visits:     increment(1),
        daysActive: isNewDay ? increment(1) : increment(0),
        ...(!data.firstSeen ? { firstSeen: data.lastSeen || nowISO } : {}),
        ...((name || email) ? { name, email } : {})
      }, { merge: true });
    } else {
      await setDoc(ref, {
        firstSeen:       nowISO,
        lastSeen:        nowISO,
        lastDate:        date,
        visits:          1,
        daysActive:      1,
        vipUnlockedEver: false,
        name,
        email
      }, { merge: true });
    }
  } catch (e) {
    console.warn("Visitor tracking failed:", e.message);
  }
}

let authMode = "login"; // "login" | "signup"

function translateAuthError(code) {
  const map = {
    sw: {
      "auth/credential-already-in-use": "Barua pepe hii tayari ina akaunti nyingine. Jaribu kuingia (Ingia) badala yake.",
      "auth/email-already-in-use": "Barua pepe hii tayari ina akaunti. Jaribu kuingia (Ingia) badala yake.",
      "auth/invalid-email":        "Barua pepe uliyoweka si sahihi.",
      "auth/weak-password":        "Nywila ni dhaifu — tumia angalau herufi 6.",
      "auth/missing-password":     "Tafadhali jaza nywila.",
      "auth/user-not-found":       "Hakuna akaunti yenye barua pepe hii.",
      "auth/wrong-password":       "Nywila si sahihi, jaribu tena.",
      "auth/invalid-credential":   "Barua pepe au nywila si sahihi.",
      "auth/too-many-requests":    "Majaribio mengi kwa muda mfupi. Tafadhali subiri kidogo kisha jaribu tena.",
      "auth/network-request-failed": "Tatizo la mtandao. Angalia intaneti yako na ujaribu tena."
    },
    en: {
      "auth/credential-already-in-use": "This email already has another account. Try logging in instead.",
      "auth/email-already-in-use": "This email already has an account. Try logging in instead.",
      "auth/invalid-email":        "That email address isn't valid.",
      "auth/weak-password":        "Password is too weak — use at least 6 characters.",
      "auth/missing-password":     "Please enter a password.",
      "auth/user-not-found":       "No account found with this email.",
      "auth/wrong-password":       "Incorrect password, please try again.",
      "auth/invalid-credential":   "Incorrect email or password.",
      "auth/too-many-requests":    "Too many attempts in a short time. Please wait a moment and try again.",
      "auth/network-request-failed": "Network problem. Check your connection and try again."
    }
  };
  const dict = map[currentLang] || map.sw;
  return dict[code] || (currentLang === "en" ? "An error occurred, please try again." : "Hitilafu imetokea, tafadhali jaribu tena.");
}

function showAuthModalIfNeeded() {
  const modal = document.getElementById("authModal");
  if (!modal) return;
  if (isGuestAccount) {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
}

window.setAuthMode = function(mode) {
  authMode = mode;
  document.getElementById("authTabLogin").classList.toggle("active", mode === "login");
  document.getElementById("authTabSignup").classList.toggle("active", mode === "signup");
  document.getElementById("authNameField").classList.toggle("hidden", mode === "login");
  document.getElementById("authSubmitBtn").innerText = mode === "signup" ? t('btn_signup') : t('btn_login');
  document.getElementById("authModalSub").innerText = mode === "signup" ? t('auth_sub_signup') : t('auth_sub_login');
  document.getElementById("authMsg").innerText = "";
};

window.submitAuth = async function() {
  const nameEl  = document.getElementById("authName");
  const emailEl = document.getElementById("authEmail");
  const passEl  = document.getElementById("authPassword");
  const msgEl   = document.getElementById("authMsg");
  const btn     = document.getElementById("authSubmitBtn");

  const name     = nameEl.value.trim();
  const email    = emailEl.value.trim();
  const password = passEl.value;

  msgEl.style.color = "var(--coral)";

  if (authMode === "signup" && !name) {
    msgEl.innerText = t('err_name_first');
    nameEl.focus();
    return;
  }
  if (!email) {
    msgEl.innerText = t('err_email_required');
    emailEl.focus();
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msgEl.innerText = t('err_email_invalid');
    emailEl.focus();
    return;
  }
  if (!password || password.length < 6) {
    msgEl.innerText = t('err_password_short');
    passEl.focus();
    return;
  }

  btn.disabled = true;
  btn.innerText = authMode === "signup" ? t('btn_signing_up') : t('btn_logging_in');
  msgEl.style.color = "var(--pitch)";
  msgEl.innerText = "";

  try {
    if (authMode === "signup") {
      if (currentUser && currentUser.isAnonymous) {
        // Mtumiaji alikuwa anonymous — unganisha akaunti mpya kwenye
        // UID ile ile ili VIP code, historia na notifications zibaki.
        const credential = EmailAuthProvider.credential(email, password);
        const result = await linkWithCredential(currentUser, credential);
        if (name) await updateProfile(result.user, { displayName: name });
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (name) await updateProfile(cred.user, { displayName: name });
      }
      document.getElementById("authModal").style.display = "none";
      addNotification(t('welcome_new_account', { name }), "👋");
    } else {
      await signInWithEmailAndPassword(auth, email, password);
      document.getElementById("authModal").style.display = "none";
      addNotification(t('login_success'), "👋");
    }
  } catch (e) {
    console.error("Auth failed:", e.code, e.message);
    msgEl.style.color = "var(--coral)";
    msgEl.innerText = translateAuthError(e.code);
  }

  btn.disabled = false;
  btn.innerText = authMode === "signup" ? t('btn_signup') : t('btn_login');
};

window.handleForgotPassword = async function() {
  const emailEl = document.getElementById("authEmail");
  const msgEl   = document.getElementById("authMsg");
  const email   = emailEl.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msgEl.style.color = "var(--coral)";
    msgEl.innerText = t('forgot_email_required');
    emailEl.focus();
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    msgEl.style.color = "var(--pitch)";
    msgEl.innerText = t('reset_email_sent');
  } catch (e) {
    msgEl.style.color = "var(--coral)";
    msgEl.innerText = translateAuthError(e.code);
  }
};

window.logoutAccount = async function() {
  try {
    await signOut(auth);
    localStorage.removeItem("authSkipped");
    closeAccountPanel();
    showToast(t('logout_success'));
  } catch (e) {
    console.warn("Logout failed:", e.message);
  }
};

function updateAccountUI() {
  const btn   = document.getElementById("accountBtn");
  const panel = document.getElementById("accountPanel");
  if (!btn || !panel) return;

  if (!isGuestAccount && currentUser) {
    btn.classList.add("account-active");
    panel.innerHTML = `
      <div class="notif-panel-header">${t('account_title')}</div>
      <div class="account-panel-body">
        <div class="account-name">${escapeHtml(currentUser.displayName || (currentLang === "en" ? "User" : "Mtumiaji"))}</div>
        <div class="account-email">${escapeHtml(currentUser.email || "")}</div>
        <button class="account-logout-btn" onclick="logoutAccount()">${t('btn_logout')}</button>
      </div>`;
  } else {
    btn.classList.remove("account-active");
    panel.innerHTML = `
      <div class="notif-panel-header">${t('account_title')}</div>
      <div class="account-panel-body account-guest">
        <div class="account-guest-msg">${t('account_guest_msg')}</div>
        <button class="account-login-btn" onclick="closeAccountPanel(); document.getElementById('authModal').style.display='flex';">${t('btn_login_signup')}</button>
      </div>`;
  }
}

window.toggleAccountPanel = function() {
  const panel = document.getElementById("accountPanel");
  updateAccountUI();
  panel.classList.toggle("open");
};
window.closeAccountPanel = function() {
  document.getElementById("accountPanel")?.classList.remove("open");
};
document.addEventListener("click", e => {
  if (!e.target.closest(".account-panel") && !e.target.closest("#accountBtn")) {
    closeAccountPanel();
  }
});

// Heartbeat is likewise skipped for guest sessions — see trackVisit() note
// above. There is nothing useful to "keep alive" in analytics_visitors for
// a session that never got a record created in the first place.
function startVisitorHeartbeat() {
  setInterval(async () => {
    try {
      if (isGuestAccount) return;
      const visitorId = getVisitorId();
      if (!visitorId) return;
      const ref = doc(db, "analytics_visitors", visitorId);
      await setDoc(ref, { lastSeen: now().toISOString() }, { merge: true });
    } catch (e) { /* ignore transient failures */ }
  }, 120000);
}

async function markVisitorVipUnlocked() {
  try {
    if (isGuestAccount) return;
    const ref = doc(db, "analytics_visitors", getVisitorId());
    await setDoc(ref, { vipUnlockedEver: true }, { merge: true });
  } catch (e) { /* non-critical */ }
}

let blockedUnsub = null;
function startBlockedWatcher() {
  const myId = getVisitorId();
  if (!myId) return;
  if (blockedUnsub) blockedUnsub();
  blockedUnsub = onSnapshot(doc(db, "analytics_visitors", myId), snap => {
    const data = snap.exists() ? snap.data() : null;
    const isBlocked = !!(data && data.blocked);
    document.getElementById("blockedScreen").style.display = isBlocked ? "flex" : "none";
  }, () => { /* ignore transient read errors */ });
}

let deviceResetUnsub = null;
function startDeviceResetWatcher() {
  const myId = getVisitorId();
  if (!myId) return;
  if (deviceResetUnsub) deviceResetUnsub();

  deviceResetUnsub = onSnapshot(doc(db, "device_resets", myId), async snap => {
    if (!snap.exists()) return;
    const data = snap.data();
    if (data.resetRequested !== true) return;

    try {
      localStorage.clear();
      sessionStorage.clear();

      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }

      await updateDoc(doc(db, "device_resets", myId), { resetRequested: false });

      window.location.href = window.location.href.split("#")[0];
    } catch (e) {
      console.warn("Device reset failed:", e.message);
    }
  }, () => { /* ignore transient read errors */ });
}

function startDateRolloverWatcher() {
  setInterval(() => {
    const n = now();
    const newDate = [
      String(n.getDate()).padStart(2,"0"),
      String(n.getMonth()+1).padStart(2,"0"),
      n.getFullYear()
    ].join(".");
    if (newDate !== date) {
      window.location.reload();
    }
  }, 60000);
}

function handleDesktopNav() {
  const desktopNav = document.getElementById("desktopNav");
  desktopNav.style.display = window.innerWidth >= 900 ? "flex" : "none";
}
handleDesktopNav();
window.addEventListener("resize", handleDesktopNav);

function renderNotifications() {
  const list    = document.getElementById("notifList");
  const countEl = document.getElementById("notifCount");
  if (notifications.length === 0) {
    list.innerHTML = `<div class="notif-empty">${t('notif_empty')}</div>`;
    countEl.classList.add("hidden");
    return;
  }
  list.innerHTML = notifications.slice(0, 8).map(n =>
    `<div class="notif-item">${n.icon || "🔔"} ${n.msg}<br>
     <span style="font-size:9px;opacity:.4;font-family:'JetBrains Mono',monospace;">${n.time}</span></div>`
  ).join("");
  countEl.innerText = Math.min(notifications.length, 9);
  countEl.classList.remove("hidden");
}
function addNotification(msg, icon = "🔔") {
  const time = now().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  notifications.unshift({ msg, icon, time });
  if (notifications.length > 20) notifications.pop();
  localStorage.setItem("vipNotifications", JSON.stringify(notifications));
  renderNotifications();
}
window.toggleNotifPanel = function() {
  document.getElementById("notifPanel").classList.toggle("open");
};
window.clearNotifications = function() {
  notifications = [];
  localStorage.setItem("vipNotifications", JSON.stringify(notifications));
  renderNotifications();
};
document.addEventListener("click", e => {
  if (!e.target.closest(".notif-panel") && !e.target.closest("#notifBell")) {
    document.getElementById("notifPanel").classList.remove("open");
  }
});
renderNotifications();

function showToast(message) {
  document.getElementById("toast")?.remove();
  const toast = Object.assign(document.createElement("div"), { id:"toast", innerText: message });
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}
window.closePopup = () => { document.getElementById("popup").style.display = "none"; };
window.showPopup  = function(msg) {
  document.getElementById("popupMsg").innerText = msg;
  document.getElementById("popup").style.display = "flex";
  navigator.vibrate?.([200, 100, 200]);
  if (Notification.permission === "granted" && "serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(reg =>
      reg.showNotification("BM SURESCORE", {
        body: msg,
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        vibrate: [200, 100, 200]
      })
    );
  }
};

window.showSection = function(type) {
  ["freeSection","vipSection","historySection"].forEach(id =>
    document.getElementById(id).classList.add("hidden")
  );
  ["bnavFree","bnavVip","bnavHistory"].forEach(id =>
    document.getElementById(id).classList.remove("active")
  );
  ["dnavFree","dnavVip","dnavHistory"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "dnav-btn";
  });

  if (type === "free") {
    document.getElementById("freeSection").classList.remove("hidden");
    document.getElementById("bnavFree").classList.add("active");
    const d = document.getElementById("dnavFree");
    if (d) d.classList.add("active-free");
    flashSectionLoading("free");
  } else if (type === "vip") {
    document.getElementById("vipSection").classList.remove("hidden");
    document.getElementById("bnavVip").classList.add("active");
    const d = document.getElementById("dnavVip");
    if (d) d.classList.add("active-vip");
    if (!vipUnlocked) {
      document.getElementById("authBox").style.display = "block";
      document.getElementById("vipCtaBanner").style.display = "flex";
    }
    flashSectionLoading("vip");
  } else {
    document.getElementById("historySection").classList.remove("hidden");
    document.getElementById("bnavHistory").classList.add("active");
    const d = document.getElementById("dnavHistory");
    if (d) d.classList.add("active-hist");
    const histType = document.getElementById("historyVipWrap").classList.contains("hidden") ? "free" : "vip";
    showHistoryType(histType);
  }
  navigator.vibrate?.([10]);
};

window.showHistoryType = function(type) {
  document.getElementById("historyFreeWrap").classList.toggle("hidden", type !== "free");
  document.getElementById("historyVipWrap").classList.toggle("hidden",  type !== "vip");
  document.getElementById("histFreeBtn").classList.toggle("on-free", type === "free");
  document.getElementById("histVipBtn").classList.toggle("on-vip",  type === "vip");
};

window.selectPlan = function(el) {
  document.querySelectorAll(".plan-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  selectedPlan = { plan: el.dataset.plan, price: el.dataset.price, label: el.dataset.label };
  navigator.vibrate?.([10]);
};

function scheduleAutoLogout(expiryDate) {
  if (autoLogoutTimer) clearTimeout(autoLogoutTimer);
  const msLeft = expiryDate - now();
  if (msLeft <= 0) { performExpiryLogout(); return; }
  const maxTimeout = 2147483647;
  if (msLeft > maxTimeout) {
    autoLogoutTimer = setTimeout(() => scheduleAutoLogout(expiryDate), maxTimeout);
  } else {
    autoLogoutTimer = setTimeout(performExpiryLogout, msLeft);
  }
}

function performExpiryLogout() {
  clearStoredCode();
  vipUnlocked   = false;
  vipExpiryDate = null;
  document.getElementById("vipRequestCard")?.remove();
  document.getElementById("authBox").style.display = "block";
  document.getElementById("vipCtaBanner").style.display = "flex";
  showPopup(t('vip_expired_popup'));
  addNotification(t('vip_expired_notif'), "⏰");
}

let countdownInterval = null;
function startCountdownDisplay() {
  updateCountdownDisplay();
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(updateCountdownDisplay, 1000);
}
function updateCountdownDisplay() {
  if (!vipExpiryDate) return;
  const wrap = document.getElementById("vipCountdownWrap");
  if (!wrap) return;
  const msLeft = vipExpiryDate - now();
  if (msLeft <= 0) {
    wrap.innerHTML = `<div class="cd-unit"><b>0</b><span>${t('cd_expired')}</span></div>`;
    return;
  }
  const totalSeconds = Math.floor(msLeft / 1000);
  const days    = Math.floor(totalSeconds / 86400);
  const hours   = Math.floor((totalSeconds % 86400) / 3600);
  const mins    = Math.floor((totalSeconds % 3600) / 60);
  const secs    = totalSeconds % 60;

  wrap.innerHTML = `
    <div class="cd-unit"><b>${days}</b><span>${t('cd_days')}</span></div>
    <span class="cd-sep">:</span>
    <div class="cd-unit"><b>${String(hours).padStart(2,"0")}</b><span>${t('cd_hrs')}</span></div>
    <span class="cd-sep">:</span>
    <div class="cd-unit"><b>${String(mins).padStart(2,"0")}</b><span>${t('cd_min')}</span></div>
    <span class="cd-sep">:</span>
    <div class="cd-unit"><b>${String(secs).padStart(2,"0")}</b><span>${t('cd_sec')}</span></div>`;
  wrap.classList.toggle("urgent", days < 1);
}

function getVipTier(daysRemaining) {
  if (daysRemaining >= 90) return { cls: "diamond", icon: "💎", label: "DIAMOND" };
  if (daysRemaining >= 30) return { cls: "gold",    icon: "🥇", label: "GOLD" };
  if (daysRemaining >= 7)  return { cls: "silver",  icon: "🥈", label: "SILVER" };
  return { cls: "bronze", icon: "🥉", label: "BRONZE" };
}

function buildVipCard(html) {
  const slot = document.getElementById("vipStatusSlot");
  if (!slot) return;
  slot.innerHTML = `<div id="vipRequestCard" style="max-width:520px;margin:0 auto 20px;">${html}</div>`;
}

function clearStoredCode() {
  localStorage.removeItem("vipCode");
  localStorage.removeItem("vipWasUnlocked");
  currentVipCode = null;
}

function subscribeToCode(code) {
  if (codeUnsub) codeUnsub();
  const q = query(collection(db, "vip_codes"), where("code", "==", code), limit(1));
  codeUnsub = onSnapshot(q, snap => {
    vipUnlocked   = false;
    vipExpiryDate = null;
    if (autoLogoutTimer)   clearTimeout(autoLogoutTimer);
    if (countdownInterval) clearInterval(countdownInterval);
    document.getElementById("vipRequestCard")?.remove();

    if (snap.empty) {
      clearStoredCode();
      document.getElementById("authBox").style.display = "block";
      document.getElementById("vipCtaBanner").style.display = "flex";
      return;
    }

    const data = snap.docs[0].data();
    const n    = now();
    const exp  = data.expiry ? new Date(data.expiry + "T23:59:59") : null;
    const myId = getVisitorId();

    if (data.redeemedBy && data.redeemedBy !== myId) {
      clearStoredCode();
      document.getElementById("authBox").style.display = "block";
      document.getElementById("vipCtaBanner").style.display = "flex";
      showPopup(t('code_now_other_device'));
      window.dispatchEvent(new Event("vip-status-changed"));
      return;
    }

    if (data.active && exp && n <= exp) {
      vipUnlocked   = true;
      vipExpiryDate = exp;

      scheduleAutoLogout(exp);
      document.getElementById("authBox").style.display = "none";
      document.getElementById("vipCtaBanner").style.display = "none";

      if (!localStorage.getItem("vipWasUnlocked")) {
        localStorage.setItem("vipWasUnlocked", "1");
        setTimeout(() => { showToast(t('vip_unlocked_toast')); }, 500);
        addNotification(t('vip_unlocked_notif'), "💎");
        markVisitorVipUnlocked();
      }

      buildVipCard(`
        <div class="vip-status-active">
          <div class="vip-status-left">
            <span class="vip-crown">👑</span>
            <div>
              <div class="vip-status-title">${t('vip_active')}</div>
              <div class="vip-expiry">${t('vip_expires')} ${data.expiry}</div>
            </div>
          </div>
          <div class="vip-countdown-live" id="vipCountdownWrap"></div>
        </div>
      `);

      startCountdownDisplay();
      window.dispatchEvent(new Event("vip-status-changed"));
    } else {
      const wasStored = currentVipCode === code;
      clearStoredCode();
      document.getElementById("authBox").style.display = "block";
      document.getElementById("vipCtaBanner").style.display = "flex";
      if (wasStored) {
        showPopup(!data.active ? t('code_disabled_popup') : t('code_expired_popup'));
      }
      window.dispatchEvent(new Event("vip-status-changed"));
    }
  });
}

function initVipCode() {
  if (currentVipCode) {
    subscribeToCode(currentVipCode);
  } else {
    document.getElementById("authBox").style.display = "block";
    document.getElementById("vipCtaBanner").style.display = "flex";
  }
}

window.unlockVipCode = async function() {
  const input = document.getElementById("vipCodeInput");
  const msgEl = document.getElementById("codeMsg");
  const btn   = document.getElementById("authBtn");
  const code  = input.value.trim().toUpperCase();

  if (!code) {
    msgEl.style.color = "var(--coral)";
    msgEl.innerText = t('code_empty');
    return;
  }

  btn.disabled = true; btn.innerText = t('btn_checking');
  msgEl.style.color = "var(--slate)";
  msgEl.innerText = "";

  try {
    const q = query(collection(db, "vip_codes"), where("code", "==", code), limit(1));
    const snap = await getDocs(q);

    if (snap.empty) {
      msgEl.style.color = "var(--coral)";
      msgEl.innerText = t('code_invalid');
    } else {
      const codeDoc = snap.docs[0];
      const data    = codeDoc.data();
      const n       = now();
      const exp     = data.expiry ? new Date(data.expiry + "T23:59:59") : null;
      const myId    = getVisitorId();

      if (!data.active) {
        msgEl.style.color = "var(--coral)";
        msgEl.innerText = t('code_disabled');
      } else if (!exp || n > exp) {
        msgEl.style.color = "var(--coral)";
        msgEl.innerText = t('code_expired');
      } else if (data.redeemedBy && data.redeemedBy !== myId) {
        msgEl.style.color = "var(--coral)";
        msgEl.innerText = t('code_in_use');
      } else {
        try {
          if (!data.redeemedBy) {
            await updateDoc(codeDoc.ref, { redeemedBy: myId, redeemedAt: n.toISOString() });
          }
          localStorage.setItem("vipCode", code);
          currentVipCode = code;
          msgEl.style.color = "var(--pitch)";
          msgEl.innerText = t('code_accepted');
          subscribeToCode(code);
        } catch (claimErr) {
          console.error("claim failed:", claimErr.code, claimErr.message);
          msgEl.style.color = "var(--coral)";
          msgEl.innerText = t('code_claimed');
        }
      }
    }
  } catch (e) {
    console.error("unlockVipCode failed:", e.code, e.message);
    msgEl.style.color = "var(--coral)";
    msgEl.innerText = t('code_error', { msg: e.message || "" });
  }

  btn.disabled = false; btn.innerText = t('btn_unlock_vip');
};

window.pasteVipCode = async function() {
  const input = document.getElementById("vipCodeInput");
  const msgEl = document.getElementById("codeMsg");
  try {
    const text = await navigator.clipboard.readText();
    if (text) {
      input.value = text.trim().toUpperCase();
      input.focus();
      navigator.vibrate?.([10]);
    } else {
      msgEl.style.color = "var(--slate)";
      msgEl.innerText = t('clipboard_empty');
    }
  } catch (e) {
    msgEl.style.color = "var(--coral)";
    msgEl.innerText = t('clipboard_error');
    input.focus();
  }
};

window.goWhatsAppBlocked = function() {
  const msg = currentLang === "en"
    ? `Hello 👋\n\nI've been blocked from accessing the BM SURESCORE app. Please help me check my account.`
    : `Hujambo 👋\n\nNimezuiwa kutumia app ya BM SURESCORE. Tafadhali nisaidie kuangalia akaunti yangu.`;
  window.open(`https://wa.me/255617123799?text=${encodeURIComponent(msg)}`, "_blank");
};

window.goWhatsApp = function() {
  let msg;
  if (currentLang === "en") {
    msg = selectedPlan
      ? `Hello 👋\n\nI would like to buy a VIP code 💎 for BM SURESCORE.\n\nPlan selected: ${selectedPlan.label} — Tsh ${selectedPlan.price}\n\nPlease send me payment instructions.`
      : `Hello 👋\n\nI would like to get a VIP code 💎 for BM SURESCORE.\n\nPlease send me access.`;
  } else {
    msg = selectedPlan
      ? `Hujambo 👋\n\nNingependa kununua msimbo wa VIP 💎 kwa BM SURESCORE.\n\nMpango niliochagua: ${selectedPlan.label} — Tsh ${selectedPlan.price}\n\nTafadhali nitumie maelekezo ya malipo.`
      : `Hujambo 👋\n\nNingependa kupata msimbo wa VIP 💎 kwa BM SURESCORE.\n\nTafadhali nitumie ufikiaji.`;
  }
  window.open(`https://wa.me/255617123799?text=${encodeURIComponent(msg)}`, "_blank");
};

function humanizeTip(tip, m) {
  if (!tip) return tip;
  const teams = splitTeams(m.match);
  const home = teams ? teams.home : (currentLang === "en" ? "Home" : "Nyumbani");
  const away = teams ? teams.away : (currentLang === "en" ? "Away" : "Ugenini");
  const t = tip.toUpperCase().trim();
  if (t.includes(" & ")) {
    return t.split(" & ").map(leg => humanizeSingle(leg.trim(), home, away)).join(" & ");
  }
  return humanizeSingle(t, home, away);
}

function humanizeSingle(tRaw, home, away) {
  const L = {
    en: {
      firstHalf: "1st Half: ", wins: n => `${n} Wins`, draw: "Draw",
      dcHome: n => `Double Chance (${n} or Draw)`, dc12: `Double Chance (${home} or ${away})`,
      dnb: n => `${n} Wins (Draw No Bet)`,
      bttsYes: "Both Teams to Score - Yes", bttsNo: "Both Teams to Score - No",
      qualify: n => `${n} to Qualify`, winEither: n => `${n} Wins Either Half`,
      over: (n, g) => `${n} Over ${g} Goals`, under: (n, g) => `${n} Under ${g} Goals`,
      totalOver: g => `Over ${g} Goals`, totalUnder: g => `Under ${g} Goals`,
      odd: "Total Goals - Odd", even: "Total Goals - Even",
      cleanSheet: n => `${n} Clean Sheet`, winToNil: n => `${n} Wins to Nil`,
      goalsRange: (n, a, b) => `${n} Goals ${a}-${b}`, totalGoalsRange: (a,b) => `Total Goals ${a}-${b}`,
      handicap: (n, line) => `${n} Handicap (${line})`,
      correctScore: s => `Correct Score ${s}`,
    },
    sw: {
      firstHalf: "Nusu ya Kwanza: ", wins: n => `${n} Anashinda`, draw: "Sare",
      dcHome: n => `Nafasi Mbili (${n} au Sare)`, dc12: `Nafasi Mbili (${home} au ${away})`,
      dnb: n => `${n} Anashinda (Sare Haihesabiwi)`,
      bttsYes: "Timu Zote Kufunga - Ndiyo", bttsNo: "Timu Zote Kufunga - Hapana",
      qualify: n => `${n} Kufuzu`, winEither: n => `${n} Kushinda Nusu Yoyote`,
      over: (n, g) => `${n} Zaidi ya ${g} Magoli`, under: (n, g) => `${n} Chini ya ${g} Magoli`,
      totalOver: g => `Zaidi ya ${g} Magoli`, totalUnder: g => `Chini ya ${g} Magoli`,
      odd: "Jumla ya Magoli - Isiyogawanyika", even: "Jumla ya Magoli - Inayogawanyika",
      cleanSheet: n => `${n} Hakupokea Goli`, winToNil: n => `${n} Kushinda Bila Kupokea Goli`,
      goalsRange: (n, a, b) => `${n} Magoli ${a}-${b}`, totalGoalsRange: (a,b) => `Jumla ya Magoli ${a}-${b}`,
      handicap: (n, line) => `${n} Handicap (${line})`,
      correctScore: s => `Skoa Sahihi ${s}`,
    }
  };
  const lang = L[currentLang] || L.sw;

  let t = tRaw;
  let prefix = "";
  if (t.startsWith("HT ") || t.startsWith("1H ")) {
    prefix = lang.firstHalf;
    t = t.replace(/^(HT|1H)\s+/, "");
  }

  const htft = t.match(/^(1|X|2)\s*\/\s*(1|X|2)$/);
  if (htft) {
    const map = { "1": home, "X": lang.draw, "2": away };
    return `HT/FT: ${map[htft[1]]} / ${map[htft[2]]}`;
  }

  if (t === "1" || t === "HOME") return prefix + lang.wins(home);
  if (t === "2" || t === "AWAY") return prefix + lang.wins(away);
  if (t === "X" || t === "DRAW") return prefix + lang.draw;
  if (t === "1X") return prefix + lang.dcHome(home);
  if (t === "X2") return prefix + lang.dcHome(away);
  if (t === "12") return prefix + lang.dc12;
  if (t === "DNB HOME") return prefix + lang.dnb(home);
  if (t === "DNB AWAY") return prefix + lang.dnb(away);

  if (t.includes("BTTS") || t.includes("BOTH")) {
    if (t.includes("YES")) return prefix + lang.bttsYes;
    if (t.includes("NO"))  return prefix + lang.bttsNo;
  }

  if (t.includes("QUALIFY")) {
    return prefix + (t.includes("HOME") ? lang.qualify(home) : lang.qualify(away));
  }

  if (t.includes("WIN EITHER HALF")) {
    return prefix + (t.includes("HOME") ? lang.winEither(home) : lang.winEither(away));
  }

  if (t.includes("HOME OVER"))  return prefix + lang.over(home, t.split(" ").pop());
  if (t.includes("AWAY OVER"))  return prefix + lang.over(away, t.split(" ").pop());
  if (t.includes("HOME UNDER")) return prefix + lang.under(home, t.split(" ").pop());
  if (t.includes("AWAY UNDER")) return prefix + lang.under(away, t.split(" ").pop());

  if (t.includes("GOALS") && /\d+\s*-\s*\d+/.test(t)) {
    const r = t.match(/(\d+)\s*-\s*(\d+)/);
    if (t.includes("HOME")) return prefix + lang.goalsRange(home, r[1], r[2]);
    if (t.includes("AWAY")) return prefix + lang.goalsRange(away, r[1], r[2]);
    return prefix + lang.totalGoalsRange(r[1], r[2]);
  }

  if (t.includes("OVER"))  return prefix + lang.totalOver(t.split(" ").pop());
  if (t.includes("UNDER")) return prefix + lang.totalUnder(t.split(" ").pop());
  if (t === "ODD")  return prefix + lang.odd;
  if (t === "EVEN") return prefix + lang.even;
  if (t === "HOME CLEAN SHEET") return prefix + lang.cleanSheet(home);
  if (t === "AWAY CLEAN SHEET") return prefix + lang.cleanSheet(away);
  if (t === "HOME WIN TO NIL") return prefix + lang.winToNil(home);
  if (t === "AWAY WIN TO NIL") return prefix + lang.winToNil(away);

  if (t.includes("AH")) {
    const line = t.split(" ").pop();
    return prefix + lang.handicap(t.includes("AWAY") ? away : home, line);
  }

  if (/^\d+-\d+$/.test(t)) return prefix + lang.correctScore(t);

  return prefix + tRaw;
}

function getHalves(m) {
  let h1 = null, h2 = null;
  if (m.ht && m.ht.includes("-")) {
    const [hh, ha] = m.ht.split("-").map(Number);
    if (!isNaN(hh) && !isNaN(ha)) h1 = { home: hh, away: ha };
  }
  if (h1 && m.ft && m.ft.includes("-")) {
    const [fh, fa] = m.ft.split("-").map(Number);
    if (!isNaN(fh) && !isNaN(fa) && fh >= h1.home && fa >= h1.away) {
      h2 = { home: fh - h1.home, away: fa - h1.away };
    }
  }
  return { h1, h2 };
}

function evalAtomic(tip, home, away) {
  const total = home + away;

  if (tip === "HOME" || tip === "1") return home > away ? "win" : "lost";
  if (tip === "AWAY" || tip === "2") return away > home ? "win" : "lost";
  if (tip === "DRAW" || tip === "X") return home === away ? "win" : "lost";
  if (tip === "1X") return home >= away ? "win" : "lost";
  if (tip === "X2") return away >= home ? "win" : "lost";
  if (tip === "12") return home !== away ? "win" : "lost";
  if (tip === "DNB HOME") return home > away ? "win" : home === away ? "pending" : "lost";
  if (tip === "DNB AWAY") return away > home ? "win" : home === away ? "pending" : "lost";
  if (tip.includes("BTTS") || tip.includes("BOTH")) {
    const both = home > 0 && away > 0;
    if (tip.includes("YES")) return both ? "win" : "lost";
    if (tip.includes("NO"))  return !both ? "win" : "lost";
  }
  if (tip.includes("HOME OVER"))  return home > parseFloat(tip.split(" ").pop()) ? "win" : "lost";
  if (tip.includes("AWAY OVER"))  return away > parseFloat(tip.split(" ").pop()) ? "win" : "lost";
  if (tip.includes("HOME UNDER")) return home < parseFloat(tip.split(" ").pop()) ? "win" : "lost";
  if (tip.includes("AWAY UNDER")) return away < parseFloat(tip.split(" ").pop()) ? "win" : "lost";

  if (tip.includes("GOALS") && /\d+\s*-\s*\d+/.test(tip)) {
    const rangeMatch = tip.match(/(\d+)\s*-\s*(\d+)/);
    const lo = Number(rangeMatch[1]);
    const hi = Number(rangeMatch[2]);
    if (isNaN(lo) || isNaN(hi)) return "pending";
    if (tip.includes("HOME")) return (home >= lo && home <= hi) ? "win" : "lost";
    if (tip.includes("AWAY")) return (away >= lo && away <= hi) ? "win" : "lost";
    return (total >= lo && total <= hi) ? "win" : "lost";
  }

  if (tip.includes("OVER"))  return total > parseFloat(tip.split(" ").pop()) ? "win" : "lost";
  if (tip.includes("UNDER")) return total < parseFloat(tip.split(" ").pop()) ? "win" : "lost";
  if (tip === "ODD")  return total % 2 === 1 ? "win" : "lost";
  if (tip === "EVEN") return total % 2 === 0 ? "win" : "lost";
  if (tip === "HOME CLEAN SHEET") return away === 0 ? "win" : "lost";
  if (tip === "AWAY CLEAN SHEET") return home === 0 ? "win" : "lost";
  if (tip === "HOME WIN TO NIL") return (home > away && away === 0) ? "win" : "lost";
  if (tip === "AWAY WIN TO NIL") return (away > home && home === 0) ? "win" : "lost";
  if (tip.includes("AH")) {
    const line = parseFloat(tip.split(" ").pop());
    if (isNaN(line)) return "pending";
    const diff = tip.includes("AWAY") ? (away - home) : (home - away);
    const adj = diff + line;
    return adj > 0 ? "win" : adj === 0 ? "pending" : "lost";
  }
  if (/^\d+-\d+$/.test(tip)) return tip === `${home}-${away}` ? "win" : "lost";
  return null;
}

function combineStatuses(list) {
  if (list.some(s => s === "lost")) return "lost";
  if (list.some(s => s === "pending" || s === null)) return "pending";
  return "win";
}

function getStatus(m) {
  if (!m.ft || m.ft === "???" || !m.ft.includes("-")) return "pending";
  const [home, away] = m.ft.split("-").map(Number);
  if (isNaN(home) || isNaN(away)) return "pending";
  const tip = m.tip.toUpperCase().trim();
  const { h1, h2 } = getHalves(m);
  const ftCode = home > away ? "1" : home < away ? "2" : "X";

  if (m.tipType === "htft" || /(^|:)\s*(1|X|2)\s*\/\s*(1|X|2)\s*$/.test(tip)) {
    if (!h1) return "pending";
    const htCode = h1.home > h1.away ? "1" : h1.home < h1.away ? "2" : "X";
    const match = tip.match(/(1|X|2)\s*\/\s*(1|X|2)\s*$/);
    return match ? ((htCode === match[1] && ftCode === match[2]) ? "win" : "lost") : "pending";
  }

  if (tip.includes("QUALIFY")) {
    if (!m.qualified) return "pending";
    const wantHome = tip.includes("HOME");
    return (m.qualified.toUpperCase() === (wantHome ? "HOME" : "AWAY")) ? "win" : "lost";
  }

  if (tip.includes("WIN EITHER HALF")) {
    if (!h1 || !h2) return "pending";
    const isHome = tip.includes("HOME");
    const wonH1 = isHome ? h1.home > h1.away : h1.away > h1.home;
    const wonH2 = isHome ? h2.home > h2.away : h2.away > h2.home;
    return (wonH1 || wonH2) ? "win" : "lost";
  }

  if (m.tipType === "corners") {
    const corners = Number(m.corners) || 0;
    const parts = tip.split(" ");
    const line = parseFloat(parts[parts.length - 1]);
    if (isNaN(line)) return "pending";
    if (tip.includes("OVER"))  return corners > line ? "win" : "lost";
    if (tip.includes("UNDER")) return corners < line ? "win" : "lost";
    return "pending";
  }

  if (tip.startsWith("HT ") || tip.startsWith("1H ")) {
    if (!h1) return "pending";
    const inner = tip.replace(/^(HT|1H)\s+/, "");
    return evalAtomic(inner, h1.home, h1.away) ?? "lost";
  }

  if (tip.includes(" & ")) {
    const legs = tip.split(" & ").map(s => s.trim());
    const results = legs.map(leg => {
      if (leg.startsWith("HT ") || leg.startsWith("1H ")) {
        if (!h1) return "pending";
        return evalAtomic(leg.replace(/^(HT|1H)\s+/, ""), h1.home, h1.away) ?? "lost";
      }
      return evalAtomic(leg.replace(/^DC\s+/, ""), home, away) ?? "lost";
    });
    return combineStatuses(results);
  }

  return evalAtomic(tip, home, away) ?? "lost";
}

function getCountdownLabel(matchTime) {
  const diff = matchTime - now();
  if (diff > 0) {
    const hrs  = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    return `⏳ ${hrs}h ${mins}m`;
  }
  return t('kickoff');
}

function buildMatchTime(dateStr, timeStr) {
  const [d, mo, y] = dateStr.split(".");
  return new Date(`${y}-${mo}-${d}T${timeStr || "00:00"}`);
}

function splitTeams(matchStr) {
  if (!matchStr) return null;
  const seps = [" vs ", " VS ", " v ", " - ", " – "];
  for (const sep of seps) {
    if (matchStr.includes(sep)) {
      const [home, away] = matchStr.split(sep);
      if (home && away) return { home: home.trim(), away: away.trim() };
    }
  }
  return null;
}

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
}

function buildLeagueLabel(m) {
  const league = (m.league && String(m.league).trim()) ? String(m.league).trim() : "";
  return league;
}

function buildLeagueHeader(league, timeLabel, status) {
  const lostFlag = status === "lost" ? `<span class="lost-flag">${t('lost_flag')}</span>` : "";
  return `
    <div class="league-header">
      <span class="league-name">🏆 ${escapeHtml(league)}</span>
      <span class="league-meta">${lostFlag}<span class="league-time">🕐 ${escapeHtml(timeLabel)}</span></span>
    </div>`;
}

function buildVipHeader(timeLabel, status) {
  const lostFlag = status === "lost" ? `<span class="lost-flag">${t('lost_flag')}</span>` : "";
  return `
    <div class="league-header vip-time-only">
      <span class="vtb"><span class="vtb-crown">👑</span>${t('vip_match_label')}<span class="vtb-time">🕐 ${escapeHtml(timeLabel)}</span></span>
      ${lostFlag}
    </div>`;
}

function buildStatusBadge(status, locked, countdown) {
  if (locked)               return `<span class="badge locked">${t('badge_vip_locked')}</span>`;
  if (status === "win")     return `<span class="badge win">${t('badge_won')}</span>`;
  if (status === "lost")    return `<span class="badge lost">${t('badge_lost')}</span>`;
  return `<span class="badge pending match-countdown">${countdown}</span>`;
}

function buildTipNote(m) {
  if (m.tipType === "corners" && m.corners) return `<span class="corners-note">🚩 ${currentLang === 'en' ? 'corners' : 'kona'}: ${escapeHtml(m.corners)}</span>`;
  if (m.ht && (m.tipType === "htft" || /HT|1H|\//.test((m.tip||"").toUpperCase()))) {
    return `<span class="corners-note">⏱ ${currentLang === 'en' ? 'HT' : 'Nusu'}: ${escapeHtml(m.ht)}</span>`;
  }
  return "";
}

function buildStatusIcon(status) {
  if (status === "win")  return `<span class="status-icon win">✓</span>`;
  if (status === "lost") return `<span class="status-icon lost">✗</span>`;
  return `<span class="status-icon pending">📅</span>`;
}

function buildRow(m, matchTime, isFree) {
  const status    = getStatus(m);
  const countdown = getCountdownLabel(matchTime);
  const oddVal    = parseFloat(m.odd) || 1;
  const locked    = !isFree && !vipUnlocked;

  const tipClass = isFree ? "free" : "vip-lock";
  let tipHTML, oddHTML;

  if (locked) {
    tipHTML = `<span class="tip-label vip-premium">${t('tip_premium')}</span>`;
    oddHTML = `<span class="odd-badge dim">•••</span>`;
  } else {
    tipHTML = `<span class="tip-label ${tipClass}">${escapeHtml(humanizeTip(m.tip, m))}</span>${buildTipNote(m)}`;
    oddHTML = `<span class="odd-badge">${escapeHtml(m.odd)}</span>`;
  }

  let teamsHTML;
  const teams = splitTeams(m.match);
  if (locked) {
    teamsHTML = `
      <div class="locked-teams-wrap">
        <div class="lock-badge">${t('lock_reveal')}</div>
      </div>`;
  } else if (teams) {
    const hasFt = m.ft && m.ft !== "???" && m.ft.includes("-");
    const scoreHTML = hasFt
      ? `<span class="score-pair"><span class="score-digits ${status === 'win' ? 'win' : status === 'lost' ? 'lost' : ''}">${escapeHtml(m.ft.split("-")[0])}</span>${buildStatusIcon(status)}<span class="score-digits ${status === 'win' ? 'win' : status === 'lost' ? 'lost' : ''}">${escapeHtml(m.ft.split("-")[1])}</span></span>`
      : `<span class="match-vs">VS</span>`;
    teamsHTML = `
      <div class="match-teams">
        <span class="match-team home">${escapeHtml(teams.home)}</span>
        ${scoreHTML}
        <span class="match-team away">${escapeHtml(teams.away)}</span>
      </div>`;
  } else {
    const ftSuffix = (m.ft && m.ft !== "???" && m.ft.includes("-")) ? ` <span style="opacity:.5;font-family:'JetBrains Mono',monospace;">(${escapeHtml(m.ft)})</span>` : "";
    teamsHTML = `<div class="match-single-name">${escapeHtml(m.match)}${ftSuffix}</div>`;
  }

  const cardStateClass = locked ? "" : status === "win" ? "is-win" : status === "lost" ? "is-lost" : "";

  return {
    html: `
    <div class="match-card ${cardStateClass}${locked ? ' is-locked' : ''}" data-mtime="${matchTime.getTime()}" data-status="${locked ? 'locked' : status}">
      <div class="match-body">
        ${teamsHTML}
      </div>
      <div class="match-tip-bar">
        <div>${tipHTML}</div>
        ${oddHTML}
      </div>
    </div>`,
    status,
    oddVal
  };
}

let latestFreeMatches = [];
let latestVipMatches  = [];
let freeLoaded = false;
let vipLoaded  = false;

function updateTicker(rows, globalStreak) {
  const track = document.getElementById("tickerTrack");
  const wins  = rows.filter(r => getStatus(r.m) === "win").length;
  const total = rows.filter(r => getStatus(r.m) !== "pending").length;
  const pending = rows.length - total;
  const parts = [
    `<span>●</span>&nbsp;${t('ticker_live')} ${date || ""}`,
    `<b>${wins}</b> ${t('ticker_wins')}`,
    `<b>${globalStreak}</b> ${t('ticker_streak')}`,
    `${pending} ${t('ticker_pending')}`,
    `<b>BM SURESCORE</b> · ${t('ticker_brand')}`
  ];
  track.innerHTML = parts.join("&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;").repeat(2);
}

function renderGroupedByLeague(builtRows, isVip) {
  if (builtRows.length === 0) return "";
  return builtRows.map(row => {
    const timeLabel = row.m.time || "--:--";
    if (isVip) {
      if (vipUnlocked) {
        const league = buildLeagueLabel(row.m) || t('other_matches');
        return `
          <div class="league-group">
            ${buildLeagueHeader(league, timeLabel, row.status)}
            <div class="match-list">${row.styledHtml}</div>
          </div>`;
      }
      return `
        <div class="league-group">
          ${buildVipHeader(timeLabel, row.status)}
          <div class="match-list">${row.styledHtml}</div>
        </div>`;
    }
    const league = buildLeagueLabel(row.m) || t('other_matches');
    return `
      <div class="league-group">
        ${buildLeagueHeader(league, timeLabel, row.status)}
        <div class="match-list">${row.styledHtml}</div>
      </div>`;
  }).join("");
}

function processTodayMatches() {
  if (!freeLoaded || !vipLoaded) return;
  trySplashHide();

  const rows = [...latestFreeMatches, ...latestVipMatches].map(m => ({
    m,
    matchTime: buildMatchTime(m.date, m.time)
  }));

  rows.forEach(({ m, matchTime }) => {
    const diff = matchTime - now();
    if (diff > 0 && diff <= 600000) {
      const isVipOnly = (m.type || "vip") !== "free";
      if (!isVipOnly || vipUnlocked) {
        const key = m.match + m.time;
        if (!notifiedMatches[key]) {
          notifiedMatches[key] = true;
          localStorage.setItem("notifiedMatches", JSON.stringify(notifiedMatches));
          showPopup(t('starting_soon_popup', { match: m.match }));
          addNotification(t('starting_soon_notif', { match: m.match }), "⏰");
        }
      }
    }
  });

  rows.sort((a, b) => a.matchTime - b.matchTime);

  let stats = { winF:0, lostF:0, pendingF:0, oddsF:1, winV:0, lostV:0, pendingV:0, oddsV:1 };
  let freeStreakCount = 0, vipStreakCount = 0;
  let prevFreeWin = true, prevVipWin = true;
  const freeBuilt = [], vipBuilt = [];

  rows.forEach(({ m, matchTime }, idx) => {
    const isFree = (m.type || "vip") === "free";
    const { html, status, oddVal } = buildRow(m, matchTime, isFree);

    if (!isFree && vipUnlocked) {
      const key = "result_" + m.match + m.time;
      if (status !== "pending" && !notifiedMatches[key]) {
        notifiedMatches[key] = true;
        localStorage.setItem("notifiedMatches", JSON.stringify(notifiedMatches));
        if (status === "win")  addNotification(t('win_notif', { match: m.match }), "✅");
        if (status === "lost") addNotification(t('lost_notif', { match: m.match }), "❌");
      }
    }

    const styledHtml = html.replace('class="match-card', `style="--i:${idx}" class="match-card`);

    if (isFree) {
      freeBuilt.push({ m, styledHtml, status });
      if (status === "win")       { stats.winF++; stats.oddsF *= oddVal; if(prevFreeWin) freeStreakCount++; prevFreeWin=true; }
      else if (status === "lost") { stats.lostF++; prevFreeWin=false; freeStreakCount=0; }
      else                        { stats.pendingF++; stats.oddsF *= oddVal; }
    } else {
      vipBuilt.push({ m, styledHtml, status });
      if (status === "win")       { stats.winV++; stats.oddsV *= oddVal; if(prevVipWin) vipStreakCount++; prevVipWin=true; }
      else if (status === "lost") { stats.lostV++; prevVipWin=false; vipStreakCount=0; }
      else                        { stats.pendingV++; stats.oddsV *= oddVal; }
    }
  });

  const fTotal = stats.winF + stats.lostF + stats.pendingF;
  const vTotal = stats.winV + stats.lostV + stats.pendingV;

  swapSkeletonForContent(document.getElementById("freeSkeletonRows"));
  swapSkeletonForContent(document.getElementById("vipSkeletonRows"));

  const freeDataEl  = document.getElementById("freeData");
  const vipDataEl   = document.getElementById("vipData");
  const emptyFreeEl = document.getElementById("emptyFree");
  const emptyVipEl  = document.getElementById("emptyVip");

  freeDataEl.innerHTML = renderGroupedByLeague(freeBuilt, false);
  vipDataEl.innerHTML  = renderGroupedByLeague(vipBuilt, true);

  if (fTotal > 0) {
    freeDataEl.style.display = "";
    freeDataEl.classList.add("fade-in-block");
    emptyFreeEl.classList.add("hidden");
    document.getElementById("summaryFree").style.display = "";
    document.getElementById("summaryFree").classList.add("fade-in-block");
  } else {
    freeDataEl.style.display = "none";
    emptyFreeEl.classList.remove("hidden");
    emptyFreeEl.classList.add("fade-in-block");
    document.getElementById("summaryFree").style.display = "none";
  }
  if (vTotal > 0) {
    vipDataEl.style.display = "";
    vipDataEl.classList.add("fade-in-block");
    emptyVipEl.classList.add("hidden");
    document.getElementById("summaryVip").style.display = "";
    document.getElementById("summaryVip").classList.add("fade-in-block");
  } else {
    vipDataEl.style.display = "none";
    emptyVipEl.classList.remove("hidden");
    emptyVipEl.classList.add("fade-in-block");
    document.getElementById("summaryVip").style.display = "none";
  }

  const fDone = stats.winF + stats.lostF;
  const vDone = stats.winV + stats.lostV;
  const fRate = fDone > 0 ? Math.round((stats.winF / fDone) * 100) : 0;
  const vRate = vDone > 0 ? Math.round((stats.winV / vDone) * 100) : 0;

  document.getElementById("sWinF").innerText  = stats.winF;
  document.getElementById("sLostF").innerText = stats.lostF;
  document.getElementById("sRateF").innerText = fRate + "%";
  document.getElementById("sOddsF").innerText = (fTotal > 0 ? stats.oddsF : 0).toFixed(2);
  document.getElementById("sProgLabelF").innerText = `${stats.winF} / ${fDone}`;
  setTimeout(() => { document.getElementById("sProgBarF").style.width = fRate + "%"; }, 300);

  document.getElementById("sWinV").innerText  = stats.winV;
  document.getElementById("sLostV").innerText = stats.lostV;
  document.getElementById("sRateV").innerText = vRate + "%";
  document.getElementById("sOddsV").innerText = (vTotal > 0 ? stats.oddsV : 0).toFixed(2);
  document.getElementById("sProgLabelV").innerText = `${stats.winV} / ${vDone}`;
  setTimeout(() => { document.getElementById("sProgBarV").style.width = vRate + "%"; }, 300);

  const globalStreak = Math.max(freeStreakCount, vipStreakCount);
  updateTicker(rows, globalStreak);

  document.getElementById("freeStreakBar").style.display = freeStreakCount > 0 ? "flex" : "none";
  if (freeStreakCount > 0) {
    document.getElementById("freeStreakNum").innerText = freeStreakCount;
    document.getElementById("freeStreakSub").innerText = `${freeStreakCount} ${t('streak_free_sub')}`;
  }
  document.getElementById("vipStreakBar").style.display = vipStreakCount > 0 ? "flex" : "none";
  if (vipStreakCount > 0) {
    document.getElementById("vipStreakNum").innerText = vipStreakCount;
    document.getElementById("vipStreakSub").innerText = `${vipStreakCount} ${t('streak_vip_sub')}`;
  }

  updateVipCtaBanner(vTotal);
}

function updateVipCtaBanner(vTotal) {
  const banner = document.getElementById("vipCtaBanner");
  const sub    = document.getElementById("vipCtaSub");
  if (!banner) return;
  if (vipUnlocked) {
    banner.style.display = "none";
    return;
  }
  banner.style.display = "flex";
  if (sub) {
    sub.innerText = vTotal > 0
      ? t('premium_available', { n: vTotal })
      : t('tap_pricing');
  }
}

window.scrollToVipAuth = function() {
  document.getElementById("vipBox")?.scrollIntoView({ behavior: "smooth", block: "start" });
  navigator.vibrate?.([10]);
};

function startFreeMatchesListener() {
  const todayFreeQuery = query(collection(db, "matches_free"), where("date", "==", date));
  onSnapshot(todayFreeQuery, snapshot => {
    latestFreeMatches = [];
    snapshot.forEach(docSnap => latestFreeMatches.push({ ...docSnap.data(), type: "free" }));
    freeLoaded = true;
    processTodayMatches();
  });
}

function startVipMatchesListener() {
  const todayVipQuery = query(collection(db, "matches_vip"), where("date", "==", date));
  onSnapshot(todayVipQuery, snapshot => {
    latestVipMatches = [];
    snapshot.forEach(docSnap => latestVipMatches.push({ ...docSnap.data(), type: "vip" }));
    vipLoaded = true;
    processTodayMatches();
  });
}

window.addEventListener("vip-status-changed", () => processTodayMatches());

let latestFreeAll = null;
let latestVipAll  = null;

let freeHistGroups = {}, vipHistGroups = {};
let freeHistDates  = [], vipHistDates  = [];
let freeHistPage   = 0,  vipHistPage   = 0;

function isPastDate(dStr) {
  const [d, mo, y] = dStr.split(".").map(Number);
  const matchDay = new Date(y, mo - 1, d);
  const n = now();
  const todayDay = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  return matchDay < todayDay;
}

function sortDatesDesc(groups) {
  const toISO = d => d.split(".").reverse().join("-");
  return Object.keys(groups).sort((a, b) => new Date(toISO(b)) - new Date(toISO(a)));
}

function buildHistoryCard(m, isFree) {
  const status = getStatus(m);
  const tipClass = isFree ? "free" : "vip-lock";
  const teams = splitTeams(m.match);
  const hasFt = m.ft && m.ft !== "???" && m.ft.includes("-");

  let teamsHTML;
  if (teams) {
    const scoreHTML = hasFt
      ? `<span class="score-pair"><span class="score-digits ${status === 'win' ? 'win' : status === 'lost' ? 'lost' : ''}">${escapeHtml(m.ft.split("-")[0])}</span>${buildStatusIcon(status)}<span class="score-digits ${status === 'win' ? 'win' : status === 'lost' ? 'lost' : ''}">${escapeHtml(m.ft.split("-")[1])}</span></span>`
      : `<span class="match-vs">VS</span>`;
    teamsHTML = `
      <div class="match-teams">
        <span class="match-team home">${escapeHtml(teams.home)}</span>
        ${scoreHTML}
        <span class="match-team away">${escapeHtml(teams.away)}</span>
      </div>`;
  } else {
    const ftSuffix = hasFt ? ` <span style="opacity:.5;font-family:'JetBrains Mono',monospace;">(${escapeHtml(m.ft)})</span>` : "";
    teamsHTML = `<div class="match-single-name">${escapeHtml(m.match)}${ftSuffix}</div>`;
  }

  const badge = status === "win" ? `<span class="badge win">${t('badge_won')}</span>`
    : status === "lost" ? `<span class="badge lost">${t('badge_lost')}</span>`
    : `<span class="badge pending">${t('badge_pending')}</span>`;

  return `
    <div class="match-card ${status === 'win' ? 'is-win' : status === 'lost' ? 'is-lost' : ''}">
      <div class="match-body">${teamsHTML}</div>
      <div class="match-tip-bar">
        <div>
          <span class="tip-label ${tipClass}">${escapeHtml(humanizeTip(m.tip, m))}</span>
          ${buildTipNote(m)}
        </div>
        <span class="odd-badge">${escapeHtml(m.odd)}</span>
      </div>
    </div>`;
}

function renderHistoryPage(type) {
  const isFree   = type === "free";
  const groups   = isFree ? freeHistGroups : vipHistGroups;
  const dates    = isFree ? freeHistDates  : vipHistDates;
  const pageIdx  = isFree ? freeHistPage   : vipHistPage;
  const targetEl = document.getElementById(isFree ? "historyFree" : "historyVip");

  if (dates.length === 0) {
    renderWithFade(targetEl, `<div class="empty-state"><div class="e-icon">📋</div><h3>${t('empty_hist_title')}</h3><p>${t('empty_hist_sub')}</p></div>`);
    return;
  }

  const clamped = Math.min(Math.max(pageIdx, 0), dates.length - 1);
  if (isFree) freeHistPage = clamped; else vipHistPage = clamped;

  const d = dates[clamped];
  const matches = groups[d];

  const leaguesHTML = matches.map(m => {
    const status = getStatus(m);
    const headerHTML = buildLeagueHeader(buildLeagueLabel(m) || t('other_matches'), m.time || "--:--", status);
    return `
      <div class="league-group">
        ${headerHTML}
        <div class="match-list">${buildHistoryCard(m, isFree)}</div>
      </div>`;
  }).join("");

  renderWithFade(targetEl, `
    <div class="hist-page-label">${t('hist_page_label', { a: clamped + 1, b: dates.length })}</div>
    <div class="date-group">📅 ${d}</div>
    ${leaguesHTML}
    <div class="hist-pager">
      <button class="hist-pager-btn" onclick="changeHistoryPage('${type}', -1)" ${clamped === 0 ? "disabled" : ""}>${t('hist_prev')}</button>
      <button class="hist-pager-btn" onclick="changeHistoryPage('${type}', 1)" ${clamped === dates.length - 1 ? "disabled" : ""}>${t('hist_next')}</button>
    </div>`);
}

window.changeHistoryPage = function(type, delta) {
  if (type === "free") freeHistPage += delta; else vipHistPage += delta;
  renderHistoryPage(type);
  navigator.vibrate?.([10]);
  document.getElementById(type === "free" ? "historyFreeWrap" : "historyVipWrap")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function processHistory() {
  if (!latestFreeAll || !latestVipAll) return;

  const freeGroups = {}, vipGroups = {};

  latestFreeAll.forEach(docSnap => {
    const m = docSnap.data();
    if (m.date === date) return;
    if (!isPastDate(m.date)) return;
    if (!freeGroups[m.date]) freeGroups[m.date] = [];
    freeGroups[m.date].push(m);
  });

  latestVipAll.forEach(docSnap => {
    const m = docSnap.data();
    if (m.date === date) return;
    if (!isPastDate(m.date)) return;
    if (!vipGroups[m.date]) vipGroups[m.date] = [];
    vipGroups[m.date].push(m);
  });

  freeHistGroups = freeGroups;
  vipHistGroups  = vipGroups;
  freeHistDates  = sortDatesDesc(freeGroups);
  vipHistDates   = sortDatesDesc(vipGroups);

  renderHistoryPage("free");
  renderHistoryPage("vip");
}

function startHistoryListeners() {
  onSnapshot(collection(db, "matches_free"), snapshot => {
    latestFreeAll = snapshot.docs;
    processHistory();
  });
  onSnapshot(collection(db, "matches_vip"), snapshot => {
    latestVipAll = snapshot.docs;
    processHistory();
  });
}

function startCountdownRefresh() {
  setInterval(() => {
    document.querySelectorAll('.match-card[data-status="pending"]').forEach(card => {
      const mtime = Number(card.dataset.mtime);
      if (!mtime) return;
      const badge = card.querySelector(".match-countdown");
      if (badge) badge.innerText = getCountdownLabel(new Date(mtime));
    });
  }, 30000);
}

function renderTrustStrip(stats) {
  const wrap = document.getElementById("trustStrip");
  if (!wrap) return;
  const totalTips = stats.totalTips ?? null;
  const winRate   = stats.winRateAllTime ?? null;
  const vipUsers  = stats.vipUsersActive ?? null;
  if (totalTips == null && winRate == null && vipUsers == null) {
    wrap.style.display = "none";
    return;
  }
  wrap.style.display = "flex";
  wrap.innerHTML = `
    ${totalTips != null ? `<div class="trust-cell"><span class="t-val">${totalTips}+</span><span class="t-lbl">${t('trust_tips')}</span></div>` : ""}
    ${winRate   != null ? `<div class="trust-cell"><span class="t-val">${winRate}%</span><span class="t-lbl">${t('trust_winrate')}</span></div>` : ""}
    ${vipUsers  != null ? `<div class="trust-cell"><span class="t-val">${vipUsers}+</span><span class="t-lbl">${t('trust_vipusers')}</span></div>` : ""}
  `;
}

function startTrustStatsListener() {
  onSnapshot(doc(db, "_meta", "platformStats"), snap => {
    if (!snap.exists()) { renderTrustStrip({}); return; }
    renderTrustStrip(snap.data());
  }, () => renderTrustStrip({}));
}

async function initApp() {
  applyStaticTranslations();
  updateThemeBtn();
  await ensureAnonAuth();
  startBlockedWatcher();
  startDeviceResetWatcher();
  await syncServerTime();
  computeDateFromNow();
  startDateRolloverWatcher();
  startFreeMatchesListener();
  startVipMatchesListener();
  startHistoryListeners();
  startCountdownRefresh();
  startTrustStatsListener();
  initVipCode();
  await trackVisit();
  startVisitorHeartbeat();
  updateAccountUI();
  showAuthModalIfNeeded();
  appInitialized = true;
}
initApp();
