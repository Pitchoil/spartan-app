/* =========================================================
   SPARTAN FITNESS  v4
   Developed by Pawi
   ========================================================= */

/* CARDIO IDs */
const CARDIO_IDS=[701,8001,8002,8003,8004,8005,8006,8007,8008,8009,8010,8011,8012,8013,8014,8015];

/* MET VALUES — Ainsworth Compendium 2011 */
const CARDIO_MET={701:12.0,8001:9.8,8002:12.3,8003:8.0,8004:9.0,8005:4.0,8006:8.0,8007:8.5,8008:5.0,8009:14.0,8010:11.0,8011:5.0,8012:10.0,8013:11.0,8014:8.0,8015:8.0};

/* STRENGTH MET — per set */
const MUSCLE_MET={Chest:5.0,Back:6.0,Legs:7.0,Shoulders:4.0,Glutes:5.5,Biceps:3.0,Triceps:3.0,Core:3.5,Cardio:0};

/* PORTION SIZES */
const PORTION_SOLID={piece:120,slice:80,strip:30,chunk:150,fillet:150,breast:150,thigh:130,wing:85,leg:140,scoop:35,tbsp:15,tablespoon:15,tsp:5,teaspoon:5,handful:40};
const PORTION_LIQUID_ML={cup:240,glass:240,bowl:300,mug:240,bottle:500,can:355,shot:44,flask:200};

/* SIZE MODIFIERS */
const SIZE_MAP = {
  tiny: 0.40,
  mini: 0.50,
  half: 0.50,
  small: 0.65,
  sm: 0.65,
  sml: 0.65,
  lite: 0.60,
  medium: 1.00,
  med: 1.00,
  regular: 1.00,
  normal: 1.00,
  standard: 1.00,
  large: 1.50,
  lg: 1.50,
  big: 1.50,
  xl: 2.00,
  xlarge: 2.00,
  double: 2.00,
  jumbo: 2.20,
  huge: 2.50
};

const exerciseDB=[];
const foodLibrary=[];
const mealIdeas={};
const routines={};

/* APP STATE */
let users=[],activeUserIndex=0,timerInterval=null,currentTimerVal=0,currentUnit='kg',currentExId=null,progressWeekOffset=0;

/* INIT */
function enterArena(){document.getElementById('splash-screen').style.display='none';document.getElementById('app-container').style.display='flex';initApp();}
function initApp(){try{const s=localStorage.getItem('spartanUsers');if(s){users=JSON.parse(s);const u=users[activeUserIndex];if(!u.nutritionLogs)u.nutritionLogs=[];if(!u.completedToday)u.completedToday=[];if(!u.missedDays)u.missedDays=[];if(!u.weightLog)u.weightLog=[];if(!u.bodyWeight)u.bodyWeight=75;}else{createDefaultUser()}updateUI();setTimeout(checkWeightReminder,1000);}catch(e){createDefaultUser();updateUI();}}
function createDefaultUser(){users=[{id:Date.now(),name:"Warrior",trainerMode:false,gender:'male',goal:'shred',history:[],nutritionLogs:[],completedToday:[],missedDays:[],weightLog:[],bodyWeight:75}];saveData();}

/* UI UPDATE */
function updateUI(){const u=users[activeUserIndex];document.getElementById('current-user-name').innerText=u.name;const mb=document.getElementById('top-left-menu');if(u.trainerMode){mb.style.opacity=1;mb.style.pointerEvents='auto';document.getElementById('trainer-cart').style.display='inline'}else{mb.style.opacity=0.5;mb.style.pointerEvents='none';document.getElementById('trainer-cart').style.display='none';}loadDailyRoutine(u)}

/* DAILY ROUTINE */
function loadDailyRoutine(u){const d=new Date().getDay();document.getElementById('day-display').innerText=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d];const l=document.getElementById('todays-routine-list');l.innerHTML='';}

/* PROFILE */
function saveProfile(){const u=users[activeUserIndex];u.name=document.getElementById('p-name').value;u.gender=document.getElementById('p-gender').value;u.goal=document.getElementById('p-goal').value;saveData();updateUI();}
function toggleTrainerMode(){users[activeUserIndex].trainerMode=document.getElementById('p-trainer-mode').checked;saveData();updateUI();}
function emergencyReset(){if(confirm("⚠️ FACTORY RESET?")){localStorage.removeItem('spartanUsers');location.reload();}}

/* NAVIGATION */
function nav(id){document.querySelectorAll('.tab-content').forEach(e=>e.classList.remove('active'));document.querySelectorAll('nav button').forEach(e=>e.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelector(`nav button[data-target="${id}"]`).classList.add('active');}
function saveData(){localStorage.setItem('spartanUsers',JSON.stringify(users));}

/* STUBS */
function checkWeightReminder(){}
function openWeightModal(){}
function closeWeightModal(){}
function saveBodyWeight(){}
function showProgressModal(){}
function closeProgressModal(){}
function openPreHistory(){}
function closePreHistory(){}
function createNewUser(){}
function toggleUserMenu(){}
function resetCurrentUserData(){}
function deleteCurrentUser(){}
function markMissedDay(){}
function openTracker(){}
function closeModal(){}
function filterLibrary(){}
function toggleHeightUnit(){}
function calcBMI(){}
function autoFillMacros(){}
function logMeal(){}
function updateMacrosDisplay(){}
function showNutriTab(){}
function filterMeals(){}
function searchPreHistoryExercise(){}
function selectPhEx(){}
function savePreHistoryEntry(){}
function showDayDetail(){}
function closeDayDetail(){}
function saveSet(){}
function deleteSet(){}
function toggleComplete(){}
function startRestTimer(){}
function stopTimer(){}
function setUnit(){}
function estimateCardioCal(){}
function navProgressWeek(){}
function getProgressionInfo(){}
function buildWeeklyChartSVG(){}
function calculateCalsBurned(){}
function estimateCardioCalories(){}
function getUserWeight(){}
function parseFoodPart(){}
function switchUser(){}
