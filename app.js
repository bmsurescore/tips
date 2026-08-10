/* ══════════════════════════════════════════════════════════
   FIREBASE SETUP
   ══════════════════════════════════════════════════════════ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getFirestore, collection, query, where, limit, orderBy,
  onSnapshot, doc, getDoc, setDoc, updateDoc, addDoc, deleteDoc,
  serverTimestamp, increment, runTransaction
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import {
  getStorage, ref as storageRef, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-storage.js";
/* Anonymous auth is not used anywhere in this app — every user must sign
   up or log in (email/password OR Google) before using the app at all. */
import {
  getAuth, onAuthStateChanged,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, updateProfile, sendPasswordResetEmail,
  GoogleAuthProvider, signInWithPopup, signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyDyL6CgZVuIprC7izQ4arOAcVL9m97GUrA",
  authDomain:        "bm-surescore.firebaseapp.com",
  projectId:         "bm-surescore",
  storageBucket:     "bm-surescore.firebasestorage.app",
  messagingSenderId: "642404428353",
  appId:             "1:642404428353:web:3b054b81c862ba2fd4b4c0",
  measurementId:     "G-1M0H58GZ95"
};
const app     = initializeApp(firebaseConfig);
const db      = getFirestore(app);
const auth    = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");

/* ══════════════════════════════════════════════════════════
   LANGUAGE / i18n SYSTEM
   ══════════════════════════════════════════════════════════ */
const LANG_STRINGS = {
  sw: {
    nav_home: "Nyumbani", nav_free: "Free", nav_vip: "VIP", nav_history: "Historia",
    brand_tagline: "Utabiri wa Kitaalamu wa Mpira",

    eyebrow_free: "Tips za Bure", eyebrow_vip: "Tips za VIP",

    /* Home landing page */
    home_badge: "Jukwaa la Utabiri Hai",
    home_hero_title: "Utabiri wa Mpira Unaotegemewa",
    home_hero_sub: "Tips za bure na VIP, matokeo yaliyothibitishwa, na kiwango cha ushindi kinachofuatiliwa kila siku.",
    home_card_free_title: "Free Tips",
    home_card_free_sub: "Tips za leo bila malipo",
    home_card_vip_title: "VIP Tips",
    home_card_vip_sub: "Tips za kina zenye uwezekano mkubwa wa ushindi",
    home_card_hist_title: "Historia ya Matokeo",
    home_card_hist_sub: "Angalia rekodi kamili ya utabiri uliopita",
    home_chat_title: "Ongea na Admin Moja kwa Moja",
    home_chat_sub: "Uliza swali, pata VIP code, au msaada wowote — tunajibu haraka",

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
    auth_sub_email: "Weka barua pepe yako ili kuendelea.",
    auth_trust_line: "Taarifa zako ziko salama na hazitashirikiwa",
    auth_sub_login: "Karibu tena! Ingiza nywila yako kuendelea.",
    auth_sub_signup: "Barua pepe hii bado haijasajiliwa. Jaza taarifa chache kuunda akaunti.",
    tab_login: "Ingia", tab_signup: "Jisajili",
    label_name: "Jina Lako", label_email: "Barua Pepe", label_password: "Nywila",
    placeholder_name: "mfano: Thobias Maiko",
    placeholder_email: "mfano: thobias@gmail.com",
    placeholder_password: "Angalau herufi 6",
    btn_continue: "Endelea ➜",
    btn_login: "Ingia ➜", btn_signup: "Jisajili ➜",
    btn_logging_in: "INAINGIA…", btn_signing_up: "INAJISAJILI…",
    forgot_password: "Umesahau nywila?",
    btn_change_email: "Badilisha",
    auth_prompt_has_account: "Una akaunti tayari?",
    auth_prompt_no_account: "Huna akaunti?",
    auth_link_login_instead: "Ingia hapa",
    auth_link_signup_instead: "Jisajili hapa",
    aria_show_password: "Onyesha nywila",
    aria_hide_password: "Ficha nywila",

    google_signin: "Endelea na Google",
    auth_or: "AU",
    google_signing_in: "INAUNGANISHA…",

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

    hist_free_tab: "📊 Historia ya Bure", hist_free_short: "Bure",
    hist_vip_tab: "💎 Historia ya VIP", hist_vip_short: "VIP",
    hist_choose_label: "Chagua aina ya historia unayotaka kuona",
    hist_free_eyebrow: "Historia ya Bure",
    hist_vip_eyebrow: "Historia ya VIP",
    hist_page_label: "Ukurasa {a} kati ya {b}",
    hist_prev: "‹ Ukurasa Uliopita",
    hist_next: "Ukurasa Ujao ›",

    other_matches: "MECHI NYINGINE",

    badge_won: "✅ USHINDI", badge_lost: "❌ IMEPOTEA", badge_vip_locked: "🔒 VIP", badge_pending: "⏳ INASUBIRI",
    badge_void: "➗ IMEREJESHWA",
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

    bc_label: "Booking Code",
    code_copied: "Umenakili msimbo ✅",

    /* Chat with admin */
    chat_cta_btn: "💬 Ongea na Admin — Pata VIP Code",
    chat_modal_title: "Ongea na Admin",
    chat_modal_sub: "Kawaida tunajibu haraka",
    chat_placeholder: "Andika ujumbe wako…",
    chat_empty_title: "Bado hakuna ujumbe",
    chat_empty_sub: "Tuma ujumbe kuanza mazungumzo na admin",
    chat_send_error: "Imeshindwa kutuma ujumbe, jaribu tena",
    chat_reply_notif: "Admin amekujibu kwenye chat",
    chat_reply_toast: "💬 Admin amekujibu ujumbe wako",
    chat_prefill_plan: "Habari, ningependa kununua VIP code. Mpango: {plan} — Tsh {price}",
    chat_prefill_generic: "Habari, ningependa kupata VIP code ya BM SURESCORE.",
    chat_login_required: "Tafadhali ingia kwenye akaunti kwanza ili kuongea na admin",
    chat_attach_image: "Tuma picha",
    chat_image_too_large: "Picha ni kubwa mno (upeo MB 5)",
    chat_image_invalid_type: "Faili hii si picha",
    chat_image_upload_error: "Imeshindwa kutuma picha, jaribu tena",
    chat_image_uploading: "Inatuma picha…",
    chat_delete_confirm: "Ufute ujumbe huu?",
    chat_delete_error: "Imeshindwa kufuta ujumbe, jaribu tena",
    chat_msg_deleted: "Ujumbe umefutwa",
    chat_action_copy: "Nakili maandishi",
    chat_action_copy_link: "Nakili link ya picha",
    chat_action_delete: "Futa ujumbe",
    chat_copied_toast: "📋 Imenakiliwa",
    confirm_cancel_btn: "Ghairi",
    confirm_delete_btn: "Futa",

    /* VIP loss apology message */
    vlm_title: "Ujumbe kwa Wanachama wa VIP",
    vlm_close: "Nimeelewa",
  },
  en: {
    nav_home: "Home", nav_free: "Free", nav_vip: "VIP", nav_history: "History",
    brand_tagline: "Professional Football Predictions",

    eyebrow_free: "Free Tips", eyebrow_vip: "VIP Tips",

    /* Home landing page */
    home_badge: "Live Predictions Platform",
    home_hero_title: "Football Predictions You Can Trust",
    home_hero_sub: "Free and VIP tips, verified results, and a win-rate tracker updated every day.",
    home_card_free_title: "Free Tips",
    home_card_free_sub: "Today's tips at no cost",
    home_card_vip_title: "VIP Tips",
    home_card_vip_sub: "In-depth tips with higher winning odds",
    home_card_hist_title: "Result History",
    home_card_hist_sub: "See the full track record of past predictions",
    home_chat_title: "Chat with Admin Directly",
    home_chat_sub: "Ask a question, get a VIP code, or get help — we reply quickly",

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
    auth_sub_email: "Enter your email to continue.",
    auth_trust_line: "Your details are secure and never shared",
    auth_sub_login: "Welcome back! Enter your password to continue.",
    auth_sub_signup: "This email isn't registered yet. Fill in a few details to create your account.",
    tab_login: "Log In", tab_signup: "Sign Up",
    label_name: "Your Name", label_email: "Email", label_password: "Password",
    placeholder_name: "e.g. Thobias Maiko",
    placeholder_email: "e.g. thobias@gmail.com",
    placeholder_password: "At least 6 characters",
    btn_continue: "Continue ➜",
    btn_login: "Log In ➜", btn_signup: "Sign Up ➜",
    btn_logging_in: "LOGGING IN…", btn_signing_up: "SIGNING UP…",
    forgot_password: "Forgot password?",
    btn_change_email: "Change",
    auth_prompt_has_account: "Already have an account?",
    auth_prompt_no_account: "Don't have an account?",
    auth_link_login_instead: "Log in instead",
    auth_link_signup_instead: "Sign up instead",
    aria_show_password: "Show password",
    aria_hide_password: "Hide password",

    google_signin: "Continue with Google",
    auth_or: "OR",
    google_signing_in: "CONNECTING…",

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

    hist_free_tab: "📊 Free History", hist_free_short: "Free",
    hist_vip_tab: "💎 VIP History", hist_vip_short: "VIP",
    hist_choose_label: "Choose which history you'd like to see",
    hist_free_eyebrow: "Free History",
    hist_vip_eyebrow: "VIP History",
    hist_page_label: "Page {a} of {b}",
    hist_prev: "‹ Prev Page",
    hist_next: "Next Page ›",

    other_matches: "OTHER MATCHES",

    badge_won: "✅ WON", badge_lost: "❌ LOST", badge_vip_locked: "🔒 VIP", badge_pending: "⏳ PENDING",
    badge_void: "➗ VOID",
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

    bc_label: "Booking Code",
    code_copied: "Code copied ✅",

    /* Chat with admin */
    chat_cta_btn: "💬 Chat with Admin — Get VIP Code",
    chat_modal_title: "Chat with Admin",
    chat_modal_sub: "We usually reply quickly",
    chat_placeholder: "Type your message…",
    chat_empty_title: "No messages yet",
    chat_empty_sub: "Send a message to start the conversation with admin",
    chat_send_error: "Couldn't send message, please try again",
    chat_reply_notif: "Admin replied in chat",
    chat_reply_toast: "💬 Admin replied to your message",
    chat_prefill_plan: "Hi, I'd like to buy a VIP code. Plan: {plan} — Tsh {price}",
    chat_prefill_generic: "Hi, I'd like to get a VIP code for BM SURESCORE.",
    chat_login_required: "Please log in first to chat with admin",
    chat_attach_image: "Send image",
    chat_image_too_large: "Image is too large (max 5MB)",
    chat_image_invalid_type: "That file isn't an image",
    chat_image_upload_error: "Couldn't send image, please try again",
    chat_image_uploading: "Sending image…",
    chat_delete_confirm: "Delete this message?",
    chat_delete_error: "Couldn't delete message, please try again",
    chat_msg_deleted: "Message deleted",
    chat_action_copy: "Copy text",
    chat_action_copy_link: "Copy image link",
    chat_action_delete: "Delete message",
    chat_copied_toast: "📋 Copied",
    confirm_cancel_btn: "Cancel",
    confirm_delete_btn: "Delete",

    /* VIP loss apology message */
    vlm_title: "Message to VIP Members",
    vlm_close: "Got it",
  }
};

/* CHANGED: default language is now "en" instead of "sw" */
let currentLang = localStorage.getItem("appLang") || "en";

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
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
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
};

/* ══════════════════════════════════════════════════════════
   THEME (LIGHT / DARK MODE)
   ══════════════════════════════════════════════════════════ */
/* CHANGED: default theme is now always "dark" instead of following
   the device's prefers-color-scheme. A user who already picked a
   theme keeps it (localStorage still wins). */
let currentTheme = localStorage.getItem("appTheme") || "dark";

const THEME_ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
const THEME_ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

function updateThemeBtn() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;
  btn.innerHTML = currentTheme === "dark" ? THEME_ICON_MOON : THEME_ICON_SUN;
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

/* ══════════════════════════════════════════════════════════
   ANTI-COPY GUARDS
   ══════════════════════════════════════════════════════════ */
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
let vipRedeemedAt   = null; // ISO string — when THIS user's current VIP code was claimed
let autoLogoutTimer = null;
let codeUnsub       = null;
let currentVipCode  = localStorage.getItem("vipCode") || null;

/* VIP loss apology message — admin broadcasts a one-off message (e.g. "we
   lost today, sorry") from the admin panel; it's shown to signed-in VIP
   users as soon as their VIP status is confirmed, and re-shown any time
   admin sends a fresh one (tracked by comparing updatedAt), even without
   a full page reload. */
let vipLossMsgData     = null;
let vipLossMsgShownFor = null; // updatedAt value of the last message we displayed
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

/* ══════════════════════════════════════════════════════════
   AUTH (mandatory sign-up / login — no anonymous auth)
   ══════════════════════════════════════════════════════════ */
let currentUid     = null;
let currentUser    = null;
let isGuestAccount = true;   // true whenever there is no signed-in user
let appInitialized = false;

function initAuthListener() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const isNewSession = currentUid !== user.uid;
      currentUid     = user.uid;
      currentUser    = user;
      isGuestAccount = false;

      document.getElementById("authModal").style.display = "none";
      updateAccountUI();
      trySplashHide();

      if (!appInitialized) {
        await startAppForUser();
      } else if (isNewSession) {
        await onUserChanged();
      }
    } else {
      // No signed-in user: no anonymous fallback anymore.
      // The app stays gated behind the auth modal until the person
      // signs up or logs in.
      currentUid     = null;
      currentUser    = null;
      isGuestAccount = true;

      if (codeUnsub) { codeUnsub(); codeUnsub = null; }
      if (blockedUnsub) { blockedUnsub(); blockedUnsub = null; }
      if (deviceResetUnsub) { deviceResetUnsub(); deviceResetUnsub = null; }
      if (autoLogoutTimer)   clearTimeout(autoLogoutTimer);
      if (countdownInterval) clearInterval(countdownInterval);
      stopChatListeners();

      updateAccountUI();
      document.getElementById("blockedScreen").style.display = "none";
      document.getElementById("chatModal").style.display = "none";
      window.openAuthModal();
      trySplashHide();
    }
  });
}

function getVisitorId() {
  return currentUid;
}

// Called whenever the signed-in identity changes AFTER the app has already
// finished its first load (e.g. the person logs out and a different
// account logs in on the same device/browser session).
async function onUserChanged() {
  document.getElementById("vipRequestCard")?.remove();
  vipUnlocked   = false;
  vipExpiryDate = null;
  if (autoLogoutTimer)   clearTimeout(autoLogoutTimer);
  if (countdownInterval) clearInterval(countdownInterval);

  startBlockedWatcher();
  startDeviceResetWatcher();
  startChatDocListener();
  await trackVisit();

  if (currentVipCode) subscribeToCode(currentVipCode);
  else initVipCode();
}

// Every visitor row in analytics_visitors now always belongs to a real,
// identifiable account (name/email), since anonymous auth no longer exists.
//
// FIX: the initial setDoc used to include `vipUnlockedEver: false`. The
// Firestore `create` rule for analytics_visitors only allows the keys
// ['firstSeen','lastSeen','lastDate','visits','daysActive','name','email']
// on create — `vipUnlockedEver` is deliberately NOT in that list (it can
// only be flipped true later through a narrow, single-field `update`).
// Including it here made the very first setDoc for a brand-new user get
// rejected with permission-denied, silently (caught below), so `name`,
// `email`, and `firstSeen` never got written. A few seconds later the
// heartbeat's setDoc({ lastSeen }, merge:true) — which only touches an
// allowed field — succeeded and created a bare document with no name/
// email/firstSeen, which is what showed up in the Admin Panel. Removing
// vipUnlockedEver from this initial write fixes it for all new signups.
async function trackVisit() {
  try {
    if (isGuestAccount) return;
    const visitorId = getVisitorId();
    if (!visitorId) return;
    const ref  = doc(db, "analytics_visitors", visitorId);
    const snap = await getDoc(ref).catch(() => null);
    const nowISO = now().toISOString();
    const name  = currentUser ? (currentUser.displayName || null) : null;
    const email = currentUser ? (currentUser.email || null) : null;

    if (snap && snap.exists()) {
      const data = snap.data();
      const isNewDay = data.lastDate !== date;
      await setDoc(ref, {
        lastSeen:   nowISO,
        lastDate:   date,
        visits:     increment(1),
        daysActive: isNewDay ? increment(1) : increment(0),
        // Backfill firstSeen for any older doc that never got one
        // (e.g. created before this field existed) — self-heals the
        // next time this person opens the app.
        ...(!data.firstSeen ? { firstSeen: data.lastSeen || nowISO } : {}),
        ...((name || email) ? { name, email } : {})
      }, { merge: true });
    } else {
      await setDoc(ref, {
        firstSeen:  nowISO,
        lastSeen:   nowISO,
        lastDate:   date,
        visits:     1,
        daysActive: 1,
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
      "auth/network-request-failed": "Tatizo la mtandao. Angalia intaneti yako na ujaribu tena.",
      "auth/popup-blocked":        "Kivinjari kimezuia dirisha ibukizi. Ruhusu popups kisha jaribu tena.",
      "auth/cancelled-popup-request": "Ombi lililopita la Google halijakamilika. Jaribu tena.",
      "auth/account-exists-with-different-credential": "Barua pepe hii tayari ina akaunti iliyoundwa kwa njia tofauti (mfano nywila). Jaribu kuingia kwa njia hiyo."
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
      "auth/network-request-failed": "Network problem. Check your connection and try again.",
      "auth/popup-blocked":        "Your browser blocked the sign-in popup. Allow popups and try again.",
      "auth/cancelled-popup-request": "The previous Google sign-in request wasn't finished. Please try again.",
      "auth/account-exists-with-different-credential": "This email already has an account created a different way (e.g. password). Try logging in that way instead."
    }
  };
  const dict = map[currentLang] || map.sw;
  return dict[code] || (currentLang === "en" ? "An error occurred, please try again." : "Hitilafu imetokea, tafadhali jaribu tena.");
}

/* ══════════════════════════════════════════════════════════
   EMAIL-FIRST AUTH FLOW
   Step 1 asks only for an email (or Google). Step 2 is derived
   automatically — fetchSignInMethodsForEmail tells us whether that
   address already has an account, and we show a Login form or a
   Sign Up form accordingly, so the person never has to guess which
   tab applies to them.
   ══════════════════════════════════════════════════════════ */
window.togglePasswordVisibility = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const showing = input.type === "password";
  input.type = showing ? "text" : "password";
  btn.innerText = showing ? "🙈" : "👁";
  btn.classList.toggle("showing", showing);
  btn.setAttribute("aria-label", t(showing ? 'aria_hide_password' : 'aria_show_password'));
  input.focus();
};

window.setAuthMode = function(mode) {
  // Re-applies the current step-2 mode's text (used on language switch).
  authMode = mode;
  const onCredStep = !document.getElementById("authStepCred").classList.contains("hidden");
  applyAuthModeText(mode);
  if (!onCredStep) {
    document.getElementById("authModalSub").innerText = t('auth_sub_email');
  }
};

function applyAuthModeText(mode) {
  document.getElementById("authNameField").classList.toggle("hidden", mode === "login");
  document.getElementById("authSubmitBtn").innerText = mode === "signup" ? t('btn_signup') : t('btn_login');
  document.getElementById("authModalSub").innerText = mode === "signup" ? t('auth_sub_signup') : t('auth_sub_login');
  document.getElementById("authForgotLink").classList.toggle("hidden", mode === "signup");
  const promptEl = document.getElementById("authSwitchPrompt");
  const linkEl   = document.getElementById("authSwitchLink");
  if (promptEl && linkEl) {
    promptEl.innerText = mode === "signup" ? t('auth_prompt_has_account') : t('auth_prompt_no_account');
    linkEl.innerText   = mode === "signup" ? t('auth_link_login_instead') : t('auth_link_signup_instead');
  }
  // Password managers need the right autocomplete hint for each mode,
  // otherwise browsers offer to "update" the wrong saved credential
  // (or none at all) when creating a brand-new account.
  const passEl = document.getElementById("authPassword");
  if (passEl) passEl.setAttribute("autocomplete", mode === "signup" ? "new-password" : "current-password");
}

function showAuthCredStep(mode, email) {
  authMode = mode;
  document.getElementById("authStepEmail").classList.add("hidden");
  document.getElementById("authStepCred").classList.remove("hidden");
  document.getElementById("authChosenEmail").innerText = email;
  document.getElementById("authName").value = "";
  const passEl = document.getElementById("authPassword");
  passEl.value = "";
  passEl.type  = "password"; // always start hidden, even if shown last time
  const toggleBtn = document.querySelector(".password-toggle-btn");
  if (toggleBtn) { toggleBtn.innerText = "👁"; toggleBtn.classList.remove("showing"); }
  document.getElementById("authMsg").innerText = "";
  applyAuthModeText(mode);
  setTimeout(() => document.getElementById(mode === "signup" ? "authName" : "authPassword")?.focus(), 60);
}

// Person confirms their email — we move straight to the password step,
// defaulting to Login (the common case for a returning visitor). If they
// don't actually have an account yet, the "Don't have an account? Sign up"
// link right there switches the same step into Sign Up mode instantly.
//
// NOTE: we deliberately do NOT try to auto-detect whether the email is
// already registered (e.g. via fetchSignInMethodsForEmail). Since Sept
// 2023 Firebase enables "email enumeration protection" by default on all
// new projects, which makes that API silently return an empty result for
// every email — meaning an auto-detect flow would misfire and show "Sign
// Up" even to people who already have an account. A manual, explicit
// toggle is the reliable option here.
window.continueWithEmail = function() {
  const emailEl = document.getElementById("authEmail");
  const msgEl   = document.getElementById("authEmailMsg");
  const email   = emailEl.value.trim();

  msgEl.style.color = "var(--coral)";
  msgEl.innerText = "";

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

  showAuthCredStep("login", email);
};

window.backToEmailStep = function() {
  document.getElementById("authStepCred").classList.add("hidden");
  document.getElementById("authStepEmail").classList.remove("hidden");
  document.getElementById("authEmailMsg").innerText = "";
  document.getElementById("authModalSub").innerText = t('auth_sub_email');
  setTimeout(() => document.getElementById("authEmail").focus(), 60);
};

// The explicit "Don't have an account? Sign up" / "Already have one? Log in"
// toggle — the person's own statement of which they need, not a guess.
window.switchAuthModeManually = function() {
  const email = document.getElementById("authChosenEmail").innerText;
  showAuthCredStep(authMode === "signup" ? "login" : "signup", email);
};

window.resetAuthModalToEmailStep = function() {
  document.getElementById("authStepCred").classList.add("hidden");
  document.getElementById("authStepEmail").classList.remove("hidden");
  document.getElementById("authModalSub").innerText = t('auth_sub_email');
  document.getElementById("authEmailMsg").innerText = "";
  document.getElementById("authMsg").innerText = "";
};

window.openAuthModal = function() {
  window.resetAuthModalToEmailStep();
  document.getElementById("authModal").style.display = "flex";
};

window.submitAuth = async function() {
  const nameEl  = document.getElementById("authName");
  const passEl  = document.getElementById("authPassword");
  const msgEl   = document.getElementById("authMsg");
  const btn     = document.getElementById("authSubmitBtn");

  const name     = nameEl.value.trim();
  const email    = document.getElementById("authChosenEmail").innerText.trim();
  const password = passEl.value;

  msgEl.style.color = "var(--coral)";

  if (authMode === "signup" && !name) {
    msgEl.innerText = t('err_name_first');
    nameEl.focus();
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
      // No anonymous account to link anymore — every sign-up creates a
      // brand-new Firebase Auth user directly.
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name) await updateProfile(cred.user, { displayName: name });
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

    // SAFETY NET: fetchSignInMethodsForEmail returns an empty result on
    // projects with email-enumeration protection enabled, even for an
    // email that already has an account — so our earlier "login vs
    // signup" guess can be wrong. Rather than leave the person stuck on
    // the wrong form, flip to the correct one automatically when Firebase's
    // own error tells us which mode was actually needed.
    if (authMode === "signup" && e.code === "auth/email-already-in-use") {
      authMode = "login";
      applyAuthModeText("login");
      passEl.value = "";
      msgEl.innerText = translateAuthError(e.code);
      passEl.focus();
    } else if (authMode === "login" && (e.code === "auth/user-not-found" || e.code === "auth/invalid-credential")) {
      // Could be a wrong password OR an email that doesn't have an
      // account yet — the switch-mode link under the button lets the
      // person move to Sign Up in one tap without retyping anything.
      msgEl.innerText = translateAuthError(e.code);
    } else {
      msgEl.innerText = translateAuthError(e.code);
    }
  }

  btn.disabled = false;
  btn.innerText = authMode === "signup" ? t('btn_signup') : t('btn_login');
};

// Google Sign-In. Works for both login and signup — Firebase creates the
// account automatically the first time a given Google account is used,
// and simply signs the person back in on every later visit.
window.signInWithGoogle = async function() {
  const msgEl = document.getElementById("authMsg");
  const btn   = document.getElementById("googleSignInBtn");

  msgEl.style.color = "var(--pitch)";
  msgEl.innerText = "";
  btn.disabled = true;
  const originalLabel = btn.querySelector("span").innerText;
  btn.querySelector("span").innerText = t('google_signing_in');

  try {
    await signInWithPopup(auth, googleProvider);
    document.getElementById("authModal").style.display = "none";
    addNotification(t('login_success'), "👋");
  } catch (e) {
    console.error("Google sign-in failed:", e.code, e.message);
    // A user deliberately closing the popup isn't an error worth showing.
    if (e.code !== "auth/popup-closed-by-user" && e.code !== "auth/cancelled-popup-request") {
      msgEl.style.color = "var(--coral)";
      msgEl.innerText = translateAuthError(e.code);
    }
    // Fallback for browsers/in-app webviews that block popups (common on
    // some Android in-app browsers) — redirect flow instead.
    if (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment") {
      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectErr) {
        console.error("Google redirect sign-in failed:", redirectErr.code, redirectErr.message);
      }
    }
  }

  btn.disabled = false;
  btn.querySelector("span").innerText = originalLabel;
};

// Catches the result when signInWithRedirect was used as a fallback above
// (the page reloads after the redirect, so this must run on every load).
async function checkGoogleRedirectResult() {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      document.getElementById("authModal").style.display = "none";
      addNotification(t('login_success'), "👋");
    }
  } catch (e) {
    console.warn("Google redirect result check failed:", e.code, e.message);
  }
}

window.handleForgotPassword = async function() {
  const msgEl = document.getElementById("authMsg");
  const email = (document.getElementById("authChosenEmail")?.innerText || "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msgEl.style.color = "var(--coral)";
    msgEl.innerText = t('forgot_email_required');
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
    closeAccountPanel();
    showToast(t('logout_success'));
    // onAuthStateChanged will show the auth modal again automatically.
  } catch (e) {
    console.warn("Logout failed:", e.message);
  }
};

/* ══════════════════════════════════════════════════════════
   ACCOUNT PANEL / VISITOR TRACKING / NOTIFICATIONS
   ══════════════════════════════════════════════════════════ */
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
        <button class="account-login-btn" onclick="closeAccountPanel(); window.openAuthModal();">${t('btn_login_signup')}</button>
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
      // Zima flag KWANZA, wakati bado una permission ya kufanya hivyo —
      // (update rule inahitaji isSignedIn(), kwa hiyo hii lazima itokee
      // KABLA ya signOut, la sivyo write inakataliwa kimya kimya na
      // flag inabaki true milele, ikisababisha logout-loop).
      await updateDoc(doc(db, "device_resets", myId), { resetRequested: false });

      await signOut(auth).catch(() => {});
      localStorage.clear();
      sessionStorage.clear();

      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }

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
  // SECURITY FIX: n.msg can contain match/team names that ultimately come
  // from Firestore documents (matches_free / matches_vip). Those strings
  // were previously interpolated straight into innerHTML, which is a
  // stored-XSS hole — anyone able to write a match document with a name
  // like `<img src=x onerror=...>` could run script in every viewer's
  // browser. Escape the whole rendered message.
  list.innerHTML = notifications.slice(0, 8).map(n =>
    `<div class="notif-item">${escapeHtml(n.icon || "🔔")} ${escapeHtml(n.msg)}<br>
     <span style="font-size:9px;opacity:.4;font-family:'JetBrains Mono',monospace;">${escapeHtml(n.time)}</span></div>`
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

/* ── VIP loss apology message ──────────────────────────────────
   Reads _meta/vipLossMessage (written by the admin panel). When it's
   active and the current user is confirmed VIP, show it once for this
   page visit — it re-appears on the next real page load as long as the
   admin has left it switched on. */
function showVipLossMessage(message, stamp) {
  document.getElementById("vlmOverlay")?.remove();
  const overlay = document.createElement("div");
  overlay.id = "vlmOverlay";
  overlay.className = "vlm-overlay";
  overlay.innerHTML = `
    <div class="vlm-card">
      <div class="vlm-icon">💙</div>
      <div class="vlm-title">${escapeHtml(t('vlm_title'))}</div>
      <div class="vlm-body">${escapeHtml(message)}</div>
      <button class="vlm-close-btn" id="vlmCloseBtn">${escapeHtml(t('vlm_close'))}</button>
    </div>`;
  document.body.appendChild(overlay);
  const dismiss = () => {
    localStorage.setItem("vipLossMsgSeen", stamp);
    overlay.remove();
  };
  document.getElementById("vlmCloseBtn").onclick = dismiss;
  overlay.addEventListener("click", e => { if (e.target === overlay) dismiss(); });
}

function checkVipLossMessage() {
  if (!vipUnlocked) return;
  if (!vipLossMsgData || !vipLossMsgData.active || !vipLossMsgData.message) return;
  const stamp = vipLossMsgData.updatedAt || "1";

  // Only show to users who were ALREADY VIP before this message was sent —
  // someone who buys/activates VIP after a loss has been announced
  // shouldn't be greeted with an apology for a loss they never saw.
  if (vipRedeemedAt && stamp !== "1" && new Date(vipRedeemedAt).getTime() > new Date(stamp).getTime()) return;

  if (vipLossMsgShownFor === stamp) return;       // already shown this exact message this pageload
  if (localStorage.getItem("vipLossMsgSeen") === stamp) return; // already dismissed on this device
  vipLossMsgShownFor = stamp;
  showVipLossMessage(vipLossMsgData.message, stamp);
}

function startVipLossMessageListener() {
  onSnapshot(doc(db, "_meta", "vipLossMessage"), snap => {
    vipLossMsgData = snap.exists() ? snap.data() : null;
    checkVipLossMessage();
  }, err => { console.warn("vipLossMessage listener error:", err.code || err.message); });
}

window.showSection = function(type) {
  ["homeSection","freeSection","vipSection","historySection"].forEach(id =>
    document.getElementById(id).classList.add("hidden")
  );
  ["bnavHome","bnavFree","bnavVip","bnavHistory"].forEach(id =>
    document.getElementById(id).classList.remove("active")
  );
  ["dnavHome","dnavFree","dnavVip","dnavHistory"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "dnav-btn";
  });

  if (type === "home") {
    document.getElementById("homeSection").classList.remove("hidden");
    document.getElementById("bnavHome").classList.add("active");
    const d = document.getElementById("dnavHome");
    if (d) d.classList.add("active-home");
  } else if (type === "free") {
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
};

window.showHistoryType = function(type) {
  document.getElementById("historyFreeWrap").classList.toggle("hidden", type !== "free");
  document.getElementById("historyVipWrap").classList.toggle("hidden",  type !== "vip");
  document.getElementById("histFreeBtn").classList.toggle("on-free", type === "free");
  document.getElementById("histVipBtn").classList.toggle("on-vip",  type === "vip");
  document.getElementById("histFreeBtn").setAttribute("aria-selected", type === "free");
  document.getElementById("histVipBtn").setAttribute("aria-selected", type === "vip");
  document.getElementById("histSwitch").classList.toggle("on-vip", type === "vip");
};

window.selectPlan = function(el) {
  document.querySelectorAll(".plan-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  selectedPlan = { plan: el.dataset.plan, price: el.dataset.price, label: el.dataset.label };
};

/* ══════════════════════════════════════════════════════════
   VIP CODE (redeem / subscribe / auto-expire)
   ══════════════════════════════════════════════════════════ */
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

// Tier badge for the active VIP status card. There's no explicit "plan"
// field stored on the vip_codes doc, but we already have redeemedAt +
// expiry — the span between them tells us which plan (2 weeks / 1 month /
// 3 months) the code was actually worth, so the badge stays accurate
// without needing any backend/admin-panel changes.
function buildVipTierBadge(data) {
  if (!data.redeemedAt || !data.expiry) return "";
  const redeemed = new Date(data.redeemedAt);
  const expiry   = new Date(data.expiry + "T23:59:59");
  const days     = Math.round((expiry - redeemed) / 86400000);
  if (!isFinite(days) || days <= 0) return "";

  let tier, icon;
  if (days >= 90)      { tier = "diamond"; icon = "💠"; }
  else if (days >= 30) { tier = "gold";    icon = "🥇"; }
  else if (days >= 14) { tier = "silver";  icon = "🥈"; }
  else                 { tier = "bronze";  icon = "🥉"; }

  return `<span class="vip-tier ${tier} vip-tier-pill">${icon} ${tier.toUpperCase()}</span>`;
}

function subscribeToCode(code) {
  if (codeUnsub) codeUnsub();
  // SECURITY: this used to be a where("code","==",code) query, which
  // needed Firestore "list" permission on the whole vip_codes collection.
  // Codes are now stored with the code string itself as the document ID,
  // so this is a direct get()-style lookup — a signed-in user can only
  // ever land on the exact document whose ID they already know, they
  // cannot page/enumerate the collection through this call.
  const codeRef = doc(db, "vip_codes", code);
  codeUnsub = onSnapshot(codeRef, snap => {
    vipUnlocked   = false;
    vipExpiryDate = null;
    vipRedeemedAt = null;
    if (autoLogoutTimer)   clearTimeout(autoLogoutTimer);
    if (countdownInterval) clearInterval(countdownInterval);
    document.getElementById("vipRequestCard")?.remove();

    if (!snap.exists()) {
      clearStoredCode();
      document.getElementById("authBox").style.display = "block";
      document.getElementById("vipCtaBanner").style.display = "flex";
      return;
    }

    const data = snap.data();
    const n    = now();
    const exp  = data.expiry ? new Date(data.expiry + "T23:59:59") : null;
    const myId = getVisitorId();

    if (data.redeemedBy && data.redeemedBy !== myId) {
      clearStoredCode();
      document.getElementById("authBox").style.display = "block";
      document.getElementById("vipCtaBanner").style.display = "flex";
      window.dispatchEvent(new Event("vip-status-changed"));
      return;
    }

    if (data.active && exp && n <= exp) {
      vipUnlocked   = true;
      vipExpiryDate = exp;
      vipRedeemedAt = data.redeemedAt || null;

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
          ${buildVipTierBadge(data)}
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
    // SECURITY: codes are keyed by their own string as the document ID,
    // so checking a code is a direct get() instead of a where("code",..)
    // query. This means the "vip_codes" list permission can be locked
    // down to admin-only — a signed-in user can only ever reach the one
    // document whose exact code they typed, not page through the rest
    // of the collection.
    const codeRef  = doc(db, "vip_codes", code);
    const snap = await getDoc(codeRef);

    if (!snap.exists()) {
      msgEl.style.color = "var(--coral)";
      msgEl.innerText = t('code_invalid');
    } else {
      const myId    = getVisitorId();
      const n       = now();

      // SECURITY FIX: the old flow read the code, checked its fields in
      // JS, then wrote `redeemedBy` in a *separate* call. Two people
      // entering the same unused code within the same moment could both
      // pass the "is it free?" check before either write landed, letting
      // both claim it. A Firestore transaction makes the read + claim
      // atomic, so only the first caller to reach the transaction wins.
      let outcome;
      try {
        outcome = await runTransaction(db, async (tx) => {
          const freshSnap = await tx.get(codeRef);
          if (!freshSnap.exists()) return { status: "invalid" };
          const data = freshSnap.data();
          const exp  = data.expiry ? new Date(data.expiry + "T23:59:59") : null;

          if (!data.active) return { status: "disabled" };
          if (!exp || n > exp) return { status: "expired" };
          if (data.redeemedBy && data.redeemedBy !== myId) return { status: "in_use" };

          if (!data.redeemedBy) {
            tx.update(codeRef, { redeemedBy: myId, redeemedAt: n.toISOString() });
          }
          return { status: "ok" };
        });
      } catch (txErr) {
        console.error("claim transaction failed:", txErr.code, txErr.message);
        outcome = { status: "claim_error", message: txErr.message };
      }

      if (outcome.status === "disabled") {
        msgEl.style.color = "var(--coral)"; msgEl.innerText = t('code_disabled');
      } else if (outcome.status === "expired") {
        msgEl.style.color = "var(--coral)"; msgEl.innerText = t('code_expired');
      } else if (outcome.status === "in_use") {
        msgEl.style.color = "var(--coral)"; msgEl.innerText = t('code_in_use');
      } else if (outcome.status === "invalid") {
        msgEl.style.color = "var(--coral)"; msgEl.innerText = t('code_invalid');
      } else if (outcome.status === "claim_error") {
        msgEl.style.color = "var(--coral)"; msgEl.innerText = t('code_claimed');
      } else {
        localStorage.setItem("vipCode", code);
        currentVipCode = code;
        msgEl.style.color = "var(--pitch)";
        msgEl.innerText = t('code_accepted');
        subscribeToCode(code);
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

/* ══════════════════════════════════════════════════════════
   CHAT WITH ADMIN (replaces the old WhatsApp VIP-request flow)
   Firestore layout:
     support_chats/{uid}                → thread summary doc
       { name, email, lastMessage, lastMessageAt, lastSender,
         unreadByAdmin, unreadByUser, updatedAt }
     support_chats/{uid}/messages/{id}  → one doc per message
       { sender: "user" | "admin", text, createdAt }
   ══════════════════════════════════════════════════════════ */
let chatDocUnsub      = null;
let chatMessagesUnsub = null;
let chatModalOpen     = false;
let chatSending       = false;
let chatLastThreadData = null; // { unreadByAdmin, ... } — used to compute ✓/✓✓ ticks
let chatLastMsgs        = [];   // cached so ticks can be refreshed without a re-fetch

function chatDocRef() {
  return doc(db, "support_chats", getVisitorId());
}
function chatMessagesCol() {
  return collection(db, "support_chats", getVisitorId(), "messages");
}

function setChatUnreadBadge(isUnread) {
  document.getElementById("chatUnreadDot")?.classList.toggle("hidden", !isUnread);
}

// Lightweight listener on the thread's summary doc — kept alive for the
// whole session (not just while the modal is open) so the topbar badge
// and a one-time "admin replied" notification still fire in the
// background, the same way VIP win/lost notifications do.
let chatDocListenerSeenFirst = false;
function startChatDocListener() {
  if (isGuestAccount) return;
  const myId = getVisitorId();
  if (!myId) return;
  if (chatDocUnsub) chatDocUnsub();
  chatDocListenerSeenFirst = false;
  chatDocUnsub = onSnapshot(chatDocRef(), snap => {
    const data   = snap.exists() ? snap.data() : null;
    const unread = !!(data && data.unreadByUser);
    setChatUnreadBadge(unread && !chatModalOpen);
    if (unread && !chatModalOpen && chatDocListenerSeenFirst) {
      addNotification(t('chat_reply_notif'), "💬");
      showToast(t('chat_reply_toast'));
      navigator.vibrate?.([120, 60, 120]);
    }
    chatDocListenerSeenFirst = true;
    chatLastThreadData = data;
    if (chatModalOpen) renderChatMessages(chatLastMsgs); // refresh ✓✓ read state
  }, () => { /* thread doesn't exist yet — nothing to show */ });
}

function stopChatListeners() {
  if (chatDocUnsub)      { chatDocUnsub();      chatDocUnsub      = null; }
  if (chatMessagesUnsub) { chatMessagesUnsub(); chatMessagesUnsub = null; }
  chatModalOpen = false;
  setChatUnreadBadge(false);
}

function renderChatMessages(msgs) {
  const list = document.getElementById("chatMessagesList");
  if (!list) return;
  chatLastMsgs = msgs;
  if (msgs.length === 0) {
    list.innerHTML = `
      <div class="chat-empty">
        <div class="chat-empty-icon">💬</div>
        <p>${t('chat_empty_title')}</p>
        <small>${t('chat_empty_sub')}</small>
      </div>`;
    return;
  }
  // Admin has opened/seen the thread since this message was sent if the
  // thread's unreadByAdmin flag is currently false — that's the closest
  // "read" signal available without per-message read receipts.
  const readByAdmin = !!(chatLastThreadData && chatLastThreadData.unreadByAdmin === false);
  list.innerHTML = msgs.map(m => {
    const who  = m.sender === "admin" ? "admin" : "user";
    const time = m.createdAt?.toDate
      ? m.createdAt.toDate().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })
      : "";
    // Any message with an id can be held to open the Copy/Delete sheet —
    // Copy applies to either side, Delete (added inside the sheet itself)
    // only ever shows for the user's own messages.
    const holdAttrs = m.id
      ? ` onmousedown="chatBubblePressStart(this,'${m.id}')" onmouseup="chatBubblePressEnd(this)" onmouseleave="chatBubblePressEnd(this)"
          ontouchstart="chatBubblePressStart(this,'${m.id}')" ontouchend="chatBubblePressEnd(this)" ontouchcancel="chatBubblePressEnd(this)"
          oncontextmenu="return false"`
      : "";
    const holdClass = m.id ? " chat-bubble-holdable" : "";
    const bodyHTML = m.imageUrl
      ? `<div class="chat-bubble chat-bubble-image${holdClass}"${holdAttrs}><img src="${escapeHtml(m.imageUrl)}" alt="chat image" loading="lazy" onclick="openChatImagePreview('${escapeHtml(m.imageUrl)}')">${m.text ? `<div class="chat-image-caption">${escapeHtml(m.text)}</div>` : ""}</div>`
      : `<div class="chat-bubble${holdClass}"${holdAttrs}>${escapeHtml(m.text)}</div>`;
    const ticksHTML = who === "user"
      ? `<span class="chat-msg-ticks${readByAdmin ? " read" : ""}">✓✓</span>`
      : "";
    const avatarHTML = who === "admin" ? `<span class="chat-admin-avatar">👤</span>` : "";
    return `
      <div class="chat-msg ${who}">
        <div class="chat-msg-row">
          ${avatarHTML}${bodyHTML}
        </div>
        ${(time || ticksHTML) ? `<div class="chat-msg-time">${escapeHtml(time)}${ticksHTML}</div>` : ""}
      </div>`;
  }).join("");
  list.scrollTop = list.scrollHeight;
}

window.openChatImagePreview = function(url) {
  window.open(url, "_blank");
};

window.openChatModal = async function() {
  if (isGuestAccount) {
    showToast(t('chat_login_required'));
    window.openAuthModal();
    return;
  }
  chatModalOpen = true;
  document.getElementById("chatModal").style.display = "flex";
  setChatUnreadBadge(false);

  updateDoc(chatDocRef(), { unreadByUser: false }).catch(() => { /* thread may not exist yet */ });

  const listEl = document.getElementById("chatMessagesList");
  if (listEl) listEl.innerHTML = `<div class="section-loader"><div class="spin-ring"></div></div>`;

  if (chatMessagesUnsub) chatMessagesUnsub();
  const q = query(chatMessagesCol(), orderBy("createdAt", "asc"), limit(300));
  chatMessagesUnsub = onSnapshot(q, snap => {
    const msgs = [];
    snap.forEach(d => msgs.push({ id: d.id, ...d.data() }));
    renderChatMessages(msgs);
  }, () => {
    if (listEl) renderChatMessages([]);
  });

  setTimeout(() => document.getElementById("chatInput")?.focus(), 250);
};

// Entry point used by the VIP box — opens chat and, if the person already
// picked a plan, drafts a starting message for them so admin has context
// immediately (mirrors what the old WhatsApp deep-link used to send).
window.openChatForVipRequest = function() {
  openChatModal();
  setTimeout(() => {
    const input = document.getElementById("chatInput");
    if (!input || input.value) return;
    input.value = selectedPlan
      ? t('chat_prefill_plan', { plan: selectedPlan.label, price: selectedPlan.price })
      : t('chat_prefill_generic');
  }, 60);
};

window.closeChatModal = function() {
  chatModalOpen = false;
  document.getElementById("chatModal").style.display = "none";
  closeChatActionSheet();
  if (chatMessagesUnsub) { chatMessagesUnsub(); chatMessagesUnsub = null; }
};

window.sendChatMessage = async function() {
  const input   = document.getElementById("chatInput");
  const sendBtn = document.getElementById("chatSendBtn");
  const text    = input.value.trim();
  if (!text || chatSending) return;

  chatSending = true;
  sendBtn.disabled = true;
  input.value = "";

  try {
    await addDoc(chatMessagesCol(), {
      sender: "user",
      text,
      createdAt: serverTimestamp()
    });
    await setDoc(chatDocRef(), {
      name:          currentUser?.displayName || null,
      email:         currentUser?.email || null,
      lastMessage:   text,
      lastMessageAt: serverTimestamp(),
      lastSender:    "user",
      unreadByAdmin: true,
      unreadByUser:  false,
      updatedAt:     serverTimestamp()
    }, { merge: true });
  } catch (e) {
    console.error("sendChatMessage failed:", e.code, e.message);
    input.value = text; // give the message back so it isn't lost
    showToast(t('chat_send_error'));
  }

  chatSending = false;
  sendBtn.disabled = false;
  input.focus();
};

let confirmModalResolve = null;
window.showConfirmModal = function(message) {
  return new Promise(resolve => {
    confirmModalResolve = resolve;
    document.getElementById("confirmModalMsg").innerText = message;
    document.getElementById("confirmModal").style.display = "flex";
  });
};
window.resolveConfirmModal = function(result) {
  document.getElementById("confirmModal").style.display = "none";
  if (confirmModalResolve) { confirmModalResolve(result); confirmModalResolve = null; }
};

// Lets a user remove their own message from the thread. Admin-side deletion
// (from admin.html) is handled separately and isn't restricted to "own"
// messages.
window.deleteChatMessage = async function(msgId) {
  if (!msgId) return;
  const ok = await showConfirmModal(t('chat_delete_confirm'));
  if (!ok) return;
  try {
    await deleteDoc(doc(chatMessagesCol(), msgId));
  } catch (e) {
    console.error("deleteChatMessage failed:", e.code, e.message);
    showToast(t('chat_delete_error'));
  }
};

// Press-and-hold on any bubble (own or admin's) opens a small action
// sheet — Copy always available, Delete only for the user's own messages.
// Replaces the old behaviour where holding jumped straight to a delete
// confirmation, which meant there was no way to copy a message's text.
let chatActionSheetMsgId = null;

window.openChatActionMenu = function(msgId) {
  const msg = (chatLastMsgs || []).find(m => m.id === msgId);
  if (!msg) return;
  chatActionSheetMsgId = msgId;

  const rows = [];
  if (msg.text) {
    rows.push(`<button type="button" class="chat-action-row" onclick="chatActionCopyText()"><span class="chat-action-icon">📋</span>${t('chat_action_copy')}</button>`);
  }
  if (msg.imageUrl) {
    rows.push(`<button type="button" class="chat-action-row" onclick="chatActionCopyImageLink()"><span class="chat-action-icon">🔗</span>${t('chat_action_copy_link')}</button>`);
  }
  if (msg.sender === "user") {
    rows.push(`<button type="button" class="chat-action-row danger" onclick="chatActionDelete()"><span class="chat-action-icon">🗑</span>${t('chat_action_delete')}</button>`);
  }
  document.getElementById("chatActionSheetOptions").innerHTML = rows.join("");
  document.getElementById("chatActionSheet").style.display = "flex";
};

window.closeChatActionSheet = function() {
  document.getElementById("chatActionSheet").style.display = "none";
  chatActionSheetMsgId = null;
};

window.chatActionCopyText = function() {
  const msg = (chatLastMsgs || []).find(m => m.id === chatActionSheetMsgId);
  closeChatActionSheet();
  if (!msg?.text) return;
  navigator.clipboard?.writeText(msg.text).then(() => showToast(t('chat_copied_toast')));
};

window.chatActionCopyImageLink = function() {
  const msg = (chatLastMsgs || []).find(m => m.id === chatActionSheetMsgId);
  closeChatActionSheet();
  if (!msg?.imageUrl) return;
  navigator.clipboard?.writeText(msg.imageUrl).then(() => showToast(t('chat_copied_toast')));
};

window.chatActionDelete = function() {
  const msgId = chatActionSheetMsgId;
  closeChatActionSheet();
  deleteChatMessage(msgId);
};

const CHAT_HOLD_MS = 550;
let chatHoldTimer  = null;
let chatHoldFired   = false;

window.chatBubblePressStart = function(el, msgId) {
  chatHoldFired = false;
  el.classList.add("holding");
  clearTimeout(chatHoldTimer);
  chatHoldTimer = setTimeout(() => {
    chatHoldFired = true;
    el.classList.remove("holding");
    openChatActionMenu(msgId);
  }, CHAT_HOLD_MS);
};

window.chatBubblePressEnd = function(el) {
  clearTimeout(chatHoldTimer);
  chatHoldTimer = null;
  el?.classList.remove("holding");
};

const CHAT_IMAGE_MAX_BYTES = 5 * 1024 * 1024; // 5MB
let chatImageSending = false;

window.pickChatImage = function() {
  if (chatImageSending) return;
  document.getElementById("chatImageInput")?.click();
};

window.handleChatImageSelected = async function(inputEl) {
  const file = inputEl.files && inputEl.files[0];
  inputEl.value = ""; // reset so picking the same file again still fires change
  if (!file || chatImageSending) return;

  if (!file.type.startsWith("image/")) {
    showToast(t('chat_image_invalid_type'));
    return;
  }
  if (file.size > CHAT_IMAGE_MAX_BYTES) {
    showToast(t('chat_image_too_large'));
    return;
  }

  chatImageSending = true;
  const sendBtn = document.getElementById("chatSendBtn");
  const attachBtn = document.getElementById("chatAttachBtn");
  if (sendBtn) sendBtn.disabled = true;
  if (attachBtn) attachBtn.disabled = true;
  showToast(t('chat_image_uploading'));

  try {
    const myId = getVisitorId();
    const path = `chat_images/${myId}/${Date.now()}_${file.name}`.replace(/\s+/g, "_");
    const fileRef = storageRef(storage, path);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    await addDoc(chatMessagesCol(), {
      sender: "user",
      text: "",
      imageUrl: url,
      createdAt: serverTimestamp()
    });
    await setDoc(chatDocRef(), {
      name:          currentUser?.displayName || null,
      email:         currentUser?.email || null,
      lastMessage:   "📷 Picha",
      lastMessageAt: serverTimestamp(),
      lastSender:    "user",
      unreadByAdmin: true,
      unreadByUser:  false,
      updatedAt:     serverTimestamp()
    }, { merge: true });
  } catch (e) {
    console.error("handleChatImageSelected failed:", e.code, e.message);
    showToast(t('chat_image_upload_error'));
  }

  chatImageSending = false;
  if (sendBtn) sendBtn.disabled = false;
  if (attachBtn) attachBtn.disabled = false;
};

/* ══════════════════════════════════════════════════════════
   TIP TEXT / MATCH STATUS LOGIC
   ══════════════════════════════════════════════════════════ */
function humanizeTip(tip, m) {
  if (!tip) return tip;
  const teams = splitTeams(m.match);
  const home = teams ? teams.home : (currentLang === "en" ? "Home" : "Nyumbani");
  const away = teams ? teams.away : (currentLang === "en" ? "Away" : "Ugenini");
  const t = tip.toUpperCase().trim();
  if (t.includes(" & ")) {
    return t.split(" & ").map(leg => humanizeSingle(leg.trim(), home, away, m.tipType)).join(" & ");
  }
  return humanizeSingle(t, home, away, m.tipType);
}

function humanizeSingle(tRaw, home, away, tipType) {
  const L = {
    en: {
      firstHalf: "1st Half: ", secondHalf: "2nd Half: ", wins: n => `${n} Wins`, draw: "Draw",
      dcHome: n => `Double Chance (${n} or Draw)`, dc12: `Double Chance (${home} or ${away})`,
      dnb: n => `${n} Wins (Draw No Bet)`,
      bttsYes: "Both Teams to Score - Yes", bttsNo: "Both Teams to Score - No",
      qualify: n => `${n} to Qualify`, winEither: n => `${n} Wins Either Half`,
      over: (n, g) => `${n} Over ${g} Goals`, under: (n, g) => `${n} Under ${g} Goals`,
      totalOver: (g, isCorners) => `Over ${g} ${isCorners ? "Corners" : "Goals"}`, totalUnder: (g, isCorners) => `Under ${g} ${isCorners ? "Corners" : "Goals"}`,
      odd: "Total Goals - Odd", even: "Total Goals - Even",
      cleanSheet: n => `${n} Clean Sheet`, winToNil: n => `${n} Wins to Nil`,
      goalsRange: (n, a, b) => `${n} Goals ${a}-${b}`, totalGoalsRange: (a,b) => `Total Goals ${a}-${b}`,
      handicap: (n, line) => `${n} Handicap (${line})`,
      correctScore: s => `Correct Score ${s}`,
      handicap3w: (n, line, pickLabel) => `${n} Handicap ${line} → ${pickLabel}`,
    },
    sw: {
      firstHalf: "Nusu ya Kwanza: ", secondHalf: "Nusu ya Pili: ", wins: n => `${n} Anashinda`, draw: "Sare",
      dcHome: n => `Nafasi Mbili (${n} au Sare)`, dc12: `Nafasi Mbili (${home} au ${away})`,
      dnb: n => `${n} Anashinda (Sare Haihesabiwi)`,
      bttsYes: "Timu Zote Kufunga - Ndiyo", bttsNo: "Timu Zote Kufunga - Hapana",
      qualify: n => `${n} Kufuzu`, winEither: n => `${n} Kushinda Nusu Yoyote`,
      over: (n, g) => `${n} Zaidi ya ${g} Magoli`, under: (n, g) => `${n} Chini ya ${g} Magoli`,
      totalOver: (g, isCorners) => `Zaidi ya ${g} ${isCorners ? "Kona" : "Magoli"}`, totalUnder: (g, isCorners) => `Chini ya ${g} ${isCorners ? "Kona" : "Magoli"}`,
      odd: "Jumla ya Magoli - Isiyogawanyika", even: "Jumla ya Magoli - Inayogawanyika",
      cleanSheet: n => `${n} Hakupokea Goli`, winToNil: n => `${n} Kushinda Bila Kupokea Goli`,
      goalsRange: (n, a, b) => `${n} Magoli ${a}-${b}`, totalGoalsRange: (a,b) => `Jumla ya Magoli ${a}-${b}`,
      handicap: (n, line) => `${n} Handicap (${line})`,
      correctScore: s => `Skoa Sahihi ${s}`,
      handicap3w: (n, line, pickLabel) => `${n} Handicap ${line} → ${pickLabel}`,
    }
  };
  const lang = L[currentLang] || L.sw;

  let t = tRaw;
  let prefix = "";

  // 3-Way Handicap tips: "3W HOME -2 1" / "3W AWAY +1 X" etc.
  if (t.startsWith("3W")) {
    const parts = t.split(" ");
    const side  = parts[1]; // HOME | AWAY
    const line  = parts[2]; // -2, -1, +1, +2 ...
    const pick  = parts[3]; // 1 | X | 2
    const pickMap = { "1": lang.wins(home), "X": lang.draw, "2": lang.wins(away) };
    const sideName = side === "AWAY" ? away : home;
    return lang.handicap3w(sideName, line, pickMap[pick] || pick);
  }

  if (t.startsWith("HT ") || t.startsWith("1H ")) {
    prefix = lang.firstHalf;
    t = t.replace(/^(HT|1H)\s+/, "");
  } else if (t.startsWith("2H ")) {
    prefix = lang.secondHalf;
    t = t.replace(/^2H\s+/, "");
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

  if (t.includes("AH")) {
    const line = t.split(" ").pop();
    return prefix + lang.handicap(t.includes("AWAY") ? away : home, line);
  }

  if (t.includes("OVER"))  return prefix + lang.totalOver(t.split(" ").pop(), tipType === "corners");
  if (t.includes("UNDER")) return prefix + lang.totalUnder(t.split(" ").pop(), tipType === "corners");
  if (t === "ODD")  return prefix + lang.odd;
  if (t === "EVEN") return prefix + lang.even;
  if (t === "HOME CLEAN SHEET") return prefix + lang.cleanSheet(home);
  if (t === "AWAY CLEAN SHEET") return prefix + lang.cleanSheet(away);
  if (t === "HOME WIN TO NIL") return prefix + lang.winToNil(home);
  if (t === "AWAY WIN TO NIL") return prefix + lang.winToNil(away);

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

  // 3-Way Handicap: "3W HOME -2 1" / "3W AWAY +1 X" — applies the line to
  // one side, then judges the resulting 1/X/2 outcome against the pick.
  if (tip.startsWith("3W")) {
    const parts = tip.split(" ");
    const side  = parts[1];
    const line  = parseFloat(parts[2]);
    const pick  = parts[3];
    if (isNaN(line) || !pick) return "pending";
    const adjHome = side === "AWAY" ? home : home + line;
    const adjAway = side === "AWAY" ? away + line : away;
    const outcome = adjHome > adjAway ? "1" : adjHome < adjAway ? "2" : "X";
    return outcome === pick ? "win" : "lost";
  }

  if (tip === "HOME" || tip === "1") return home > away ? "win" : "lost";
  if (tip === "AWAY" || tip === "2") return away > home ? "win" : "lost";
  if (tip === "DRAW" || tip === "X") return home === away ? "win" : "lost";
  if (tip === "1X") return home >= away ? "win" : "lost";
  if (tip === "X2") return away >= home ? "win" : "lost";
  if (tip === "12") return home !== away ? "win" : "lost";
  if (tip === "DNB HOME") return home > away ? "win" : home === away ? "void" : "lost";
  if (tip === "DNB AWAY") return away > home ? "win" : home === away ? "void" : "lost";
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
    // FIX: adj === 0 on a *finished* match is an Asian Handicap push
    // (stake refunded) — it is a final, settled outcome, not a match
    // still "pending". Reporting it as "pending" made the UI show a
    // countdown / kickoff badge for a game that had already ended.
    return adj > 0 ? "win" : adj === 0 ? "void" : "lost";
  }
  if (/^\d+-\d+$/.test(tip)) return tip === `${home}-${away}` ? "win" : "lost";
  return null;
}

function combineStatuses(list) {
  if (list.some(s => s === "lost")) return "lost";
  if (list.some(s => s === "pending" || s === null)) return "pending";
  // A void/push leg neither wins nor loses a combo on its own — treat it
  // as neutral and judge the combo on its remaining legs.
  const decisive = list.filter(s => s !== "void");
  if (decisive.length === 0) return "void";
  if (decisive.some(s => s === "lost")) return "lost";
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

  // Second-half-only tips: "2H 1", "2H OVER 1.5", etc. Judged against
  // the derived second-half score (h2), same way HT tips use h1.
  if (tip.startsWith("2H ")) {
    if (!h2) return "pending";
    const inner = tip.replace(/^2H\s+/, "");
    return evalAtomic(inner, h2.home, h2.away) ?? "lost";
  }

  if (tip.includes(" & ")) {
    const legs = tip.split(" & ").map(s => s.trim());
    const results = legs.map(leg => {
      if (leg.startsWith("HT ") || leg.startsWith("1H ")) {
        if (!h1) return "pending";
        return evalAtomic(leg.replace(/^(HT|1H)\s+/, ""), h1.home, h1.away) ?? "lost";
      }
      if (leg.startsWith("2H ")) {
        if (!h2) return "pending";
        return evalAtomic(leg.replace(/^2H\s+/, ""), h2.home, h2.away) ?? "lost";
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
  if (status === "void") return `<span class="status-icon pending">➗</span>`;
  return `<span class="status-icon pending">📅</span>`;
}

document.addEventListener("click", e => {
  const item = e.target.closest(".booking-code-item");
  if (!item) return;
  const code = item.dataset.bcCode;
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => {
    showToast(t('code_copied'));
  }).catch(() => showToast(t('clipboard_error')));
});

/* ══════════════════════════════════════════════════════════
   MATCH CARD / TICKER / BOOKING CODES RENDERING
   ══════════════════════════════════════════════════════════ */
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
    // Show the real team names blurred underneath the lock badge instead
    // of a blank placeholder — seeing that a specific matchup exists (just
    // out of reach) creates more purchase intent than an empty card does.
    const blurredNamesHTML = teams
      ? `<div class="match-teams locked-teams-blur"><span class="match-team home">${escapeHtml(teams.home)}</span><span class="match-vs">VS</span><span class="match-team away">${escapeHtml(teams.away)}</span></div>`
      : `<div class="match-single-name locked-teams-blur">${escapeHtml(m.match)}</div>`;
    teamsHTML = `
      <div class="locked-teams-wrap">
        ${blurredNamesHTML}
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
  // CHANGED: booking codes (BetPawa / SportyBet) are no longer rendered
  // on every single match card. They now show ONCE per section (Free /
  // VIP / History day) via buildSectionBookingBanner(), so this stays empty.
  const codesHTML = "";

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
      ${codesHTML}
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

// Booking codes (BetPawa / SportyBet) are now managed from a dedicated
// "Booking Codes" panel in the admin app, not attached to individual
// matches. They live in a single Firestore doc: _meta/bookingCodes,
// with separate values for the Free section and the VIP section.
let bookingCodes = { free: null, vip: null };

function startBookingCodesListener() {
  onSnapshot(doc(db, "_meta", "bookingCodes"), snap => {
    if (!snap.exists()) {
      bookingCodes = { free: null, vip: null };
    } else {
      const data = snap.data() || {};
      bookingCodes.free = (data.freeBetpawaCode || data.freeSportybetCode)
        ? { betpawaCode: data.freeBetpawaCode || "", sportybetCode: data.freeSportybetCode || "" }
        : null;
      bookingCodes.vip = (data.vipBetpawaCode || data.vipSportybetCode)
        ? { betpawaCode: data.vipBetpawaCode || "", sportybetCode: data.vipSportybetCode || "" }
        : null;
    }
    processTodayMatches();
  }, () => { /* ignore transient read errors */ });
}

// Renders a single booking-code banner for a section (Free / VIP).
// Returns "" if there's nothing to show.
function buildSectionBookingBanner(codes) {
  if (!codes) return "";
  const items = [];
  if (codes.betpawaCode) {
    items.push(`
      <div class="booking-code-item betpawa" data-bc-code="${escapeHtml(codes.betpawaCode)}">
        <span class="bc-platform">BetPawa</span>
        <span class="bc-code">${escapeHtml(codes.betpawaCode)}</span>
        <span class="bc-copy-icon">📋</span>
      </div>`);
  }
  if (codes.sportybetCode) {
    items.push(`
      <div class="booking-code-item sportybet" data-bc-code="${escapeHtml(codes.sportybetCode)}">
        <span class="bc-platform">SportyBet</span>
        <span class="bc-code">${escapeHtml(codes.sportybetCode)}</span>
        <span class="bc-copy-icon">📋</span>
      </div>`);
  }
  if (items.length === 0) return "";
  return `
    <div class="section-booking-banner">
      <div class="sbc-label">${t('bc_label')}</div>
      <div class="booking-codes">${items.join("")}</div>
    </div>`;
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

/* ══════════════════════════════════════════════════════════
   TODAY'S MATCHES — FREE & VIP SECTIONS
   ══════════════════════════════════════════════════════════ */
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

    // "Jumla ya odds" / "Total odds" is now the product of the odds for
    // ALL matches in the section (regardless of win/lost/pending status),
    // not just the ones that have already won. Win/lost/void/pending are
    // tracked purely as status counters and no longer gate whether a
    // match's odd is multiplied in.
    if (isFree) {
      freeBuilt.push({ m, styledHtml, status });
      stats.oddsF *= oddVal;
      if (status === "win")        { stats.winF++; if(prevFreeWin) freeStreakCount++; prevFreeWin=true; }
      else if (status === "lost")  { stats.lostF++; prevFreeWin=false; freeStreakCount=0; }
      else if (status === "void")  { /* refunded — doesn't count toward win/lost */ }
      else                         { stats.pendingF++; }
    } else {
      vipBuilt.push({ m, styledHtml, status });
      stats.oddsV *= oddVal;
      if (status === "win")        { stats.winV++; if(prevVipWin) vipStreakCount++; prevVipWin=true; }
      else if (status === "lost")  { stats.lostV++; prevVipWin=false; vipStreakCount=0; }
      else if (status === "void")  { /* refunded — doesn't count toward win/lost */ }
      else                         { stats.pendingV++; }
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

  // Booking codes shown ONCE per section (not per match card) — set by
  // the admin's dedicated Booking Codes panel, not per-match.
  // SECURITY FIX: the VIP booking-code banner used to render unconditionally
  // for anyone visiting the VIP tab, even before they'd unlocked VIP — the
  // matches themselves were hidden behind "Unlock to Reveal" but the actual
  // booking code sitting above them was fully visible, defeating the paywall.
  // It now only renders once vipUnlocked is true, same gate as the tips.
  freeDataEl.innerHTML = buildSectionBookingBanner(bookingCodes.free) + renderGroupedByLeague(freeBuilt, false);
  vipDataEl.innerHTML  = (vipUnlocked ? buildSectionBookingBanner(bookingCodes.vip) : "") + renderGroupedByLeague(vipBuilt, true);

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
  document.getElementById("sOddsF").innerText = stats.oddsF.toFixed(2);
  document.getElementById("sProgLabelF").innerText = `${stats.winF} / ${fDone}`;
  setTimeout(() => { document.getElementById("sProgBarF").style.width = fRate + "%"; }, 300);

  document.getElementById("sWinV").innerText  = stats.winV;
  document.getElementById("sLostV").innerText = stats.lostV;
  document.getElementById("sRateV").innerText = vRate + "%";
  document.getElementById("sOddsV").innerText = stats.oddsV.toFixed(2);
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

window.addEventListener("vip-status-changed", () => { processTodayMatches(); checkVipLossMessage(); });

let latestFreeAll = null;
let latestVipAll  = null;

let freeHistGroups = {}, vipHistGroups = {};
let freeHistDates  = [], vipHistDates  = [];
let freeHistPage   = 0,  vipHistPage   = 0;

/* ══════════════════════════════════════════════════════════
   HISTORY (PAST RESULTS)
   ══════════════════════════════════════════════════════════ */
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
    : status === "void" ? `<span class="badge pending">${t('badge_void')}</span>`
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

  // Booking codes are intentionally NOT shown in History — only on the
  // live Free/VIP sections, so people can copy today's code.
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

/* ══════════════════════════════════════════════════════════
   TRUST STRIP (platform-wide stats)
   ══════════════════════════════════════════════════════════ */
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

/* ══════════════════════════════════════════════════════════
   APP BOOTSTRAP
   ══════════════════════════════════════════════════════════ */
// initApp() now only wires up static UI + the auth listener.
// All data listeners / trackVisit / heartbeat are deferred until
// a real signed-in user exists (see startAppForUser below), since
// there is no more anonymous fallback to fall back on.
async function initApp() {
  applyStaticTranslations();
  updateThemeBtn();
  await checkGoogleRedirectResult();
  initAuthListener();
}

async function startAppForUser() {
  await syncServerTime();
  computeDateFromNow();
  startDateRolloverWatcher();
  startBlockedWatcher();
  startDeviceResetWatcher();
  startChatDocListener();
  startFreeMatchesListener();
  startVipMatchesListener();
  startHistoryListeners();
  startCountdownRefresh();
  startTrustStatsListener();
  startBookingCodesListener();
  startVipLossMessageListener();
  initVipCode();
  await trackVisit();
  startVisitorHeartbeat();
  updateAccountUI();
  appInitialized = true;
}

initApp();
