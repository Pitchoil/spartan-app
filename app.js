/* =========================================================
   SPARTAN FITNESS  v4
   Developed by Pawi
   ========================================================= */

/* ── CARDIO IDs ─────────────────────────────────────────── */
const CARDIO_IDS=[701,8001,8002,8003,8004,8005,8006,8007,8008,8009,8010,8011,8012,8013,8014,8015];

/* ── MET VALUES — Ainsworth Compendium 2011 ─────────────── */
const CARDIO_MET={701:12.0,8001:9.8,8002:12.3,8003:8.0,8004:9.0,8005:4.0,
  8006:8.0,8007:8.5,8008:5.0,8009:14.0,8010:11.0,8011:5.0,8012:10.0,8013:11.0,8014:8.0,8015:8.0};

/* ── STRENGTH MET — per set (≈3 min incl. rest, ACSM) ───── */
const MUSCLE_MET={Chest:5.0,Back:6.0,Legs:7.0,Shoulders:4.0,Glutes:5.5,Biceps:3.0,Triceps:3.0,Core:3.5,Cardio:0};

/* ── PORTION SIZE TABLE (grams per unit) ─────────────────── */
const PORTION_SOLID={piece:120,slice:80,strip:30,chunk:150,fillet:150,breast:150,
  thigh:130,wing:85,leg:140,scoop:35,tbsp:15,tablespoon:15,tsp:5,teaspoon:5,handful:40};
const PORTION_LIQUID_ML={cup:240,glass:240,bowl:300,mug:240,bottle:500,can:355,shot:44,flask:200};

/* ── SIZE MODIFIERS ──────────────────────────────────────── */
const SIZE_MAP={'tiny':0.40,'mini':0.50,'half':0.50,'small':0.65,'sm':0.65,'sml':0.65,'lite':0.60,
  'medium':1.0,'med':1.0,'regular':1.0,'normal':1.0,'standard':1.0,
  'large':1.50,'lg':1.50,'big':1.50,'lrg':1.50,'xl':2.0,'xlarge':2.0,'double':2.0,'jumbo':2.2,'huge':2.5};

/* =========================================================
   EXERCISE DATABASE  (154 exercises)
   ========================================================= */
const exerciseDB=[
 // ── CHEST ──────────────────────────────────────────────
 {id:1001,name:"Barbell Bench Press",muscle:"Chest",desc:"Sets:3-4|Reps:6-12\n1.Lie flat, feet planted.\n2.Lower bar to mid-chest.\n3.Press explosively up.\nTip: Retract scapulae before unracking."},
 {id:1002,name:"Incline Barbell Press",muscle:"Chest",desc:"Sets:3-4|Reps:8-12\n1.Bench at 30-45°.\n2.Lower bar to upper chest.\n3.Press straight up.\nTip: Upper chest & front delt focus."},
 {id:1003,name:"Dumbbell Bench Press",muscle:"Chest",desc:"Sets:3-4|Reps:8-12\n1.Lower DBs to chest sides.\n2.Press up until DBs nearly touch.\nTip: Greater ROM than barbell."},
 {id:1004,name:"Cable Crossover",muscle:"Chest",desc:"Sets:3|Reps:12-15\n1.Cables high, lean slight forward.\n2.Pull down and across body.\n3.Cross hands at bottom.\nTip: Squeeze chest hard at crossover."},
 {id:1005,name:"Weighted Dips",muscle:"Chest",desc:"Sets:3|Reps:8-12\n1.Lean forward ~30°.\n2.Lower until shoulders below elbows.\n3.Press up.\nTip: Forward lean = chest focus."},
 {id:1006,name:"Push-Ups",muscle:"Chest",desc:"Sets:3|Reps:To Failure\n1.Hands shoulder width.\n2.Lower chest to floor.\n3.Core tight throughout.\nTip: Pause 1s at bottom."},
 {id:1007,name:"Pec Deck",muscle:"Chest",desc:"Sets:3|Reps:12-15\n1.Elbows at shoulder height.\n2.Squeeze pads together.\n3.Controlled return.\nTip: Don't let stack drop."},
 {id:1008,name:"Decline Bench Press",muscle:"Chest",desc:"Sets:3-4|Reps:8-12\n1.Bench at -15° to -30°.\n2.Lower bar to lower chest.\n3.Press up explosively.\nTip: Targets lower chest. Use spotter."},
 {id:1009,name:"Machine Chest Press",muscle:"Chest",desc:"Sets:3|Reps:12-15\n1.Handles align with chest.\n2.Press to full extension.\n3.Controlled return.\nTip: Good for burnout sets."},
 {id:1010,name:"Dumbbell Fly",muscle:"Chest",desc:"Sets:3|Reps:12-15\n1.Arms slightly bent always.\n2.Lower DBs wide—feel stretch.\n3.Bring up squeezing chest.\nTip: Light weight, feel > weight."},
 {id:1011,name:"Incline Push-Up",muscle:"Chest",desc:"Sets:3|Reps:15-20\n1.Hands on elevated surface.\n2.Lower chest to surface.\n3.Push back up.\nTip: Great warm-up or finisher."},
 {id:1012,name:"Incline DB Fly",muscle:"Chest",desc:"Sets:3|Reps:12-15\n1.Bench at 30°, arms slightly bent.\n2.Lower in wide arc.\n3.Squeeze upper chest at top.\nTip: Upper chest inner head focus."},
 {id:1013,name:"Close Grip Push-Up",muscle:"Chest",desc:"Sets:3|Reps:15-20\n1.Hands narrow, under shoulders.\n2.Elbows tight to body.\n3.Push up.\nTip: Inner chest + triceps."},
 {id:1014,name:"Machine Fly",muscle:"Chest",desc:"Sets:3|Reps:12-15\n1.Handles at chest height.\n2.Bring arms together—squeeze hard.\n3.Slow return.\nTip: Better isolation than cables."},
 {id:1015,name:"Archer Push-Up",muscle:"Chest",desc:"Sets:3|Reps:8-10 each\n1.Wide push-up start position.\n2.Shift to one arm, other arm straight.\n3.Lower to bent arm side.\nTip: Unilateral strength builder."},
 // ── BACK ───────────────────────────────────────────────
 {id:2001,name:"Conventional Deadlift",muscle:"Back",desc:"Sets:3-5|Reps:3-6\n1.Feet hip-width, bar over mid-foot.\n2.Hinge hips—big breath in.\n3.Drive heels, lock hips at top.\nTip: Bar drags up shins."},
 {id:2002,name:"Pull-Up (Wide Grip)",muscle:"Back",desc:"Sets:3-4|Reps:6-12\n1.Palms away, wide grip.\n2.Pull chest to bar.\n3.Lower controlled.\nTip: Dead hang at bottom each rep."},
 {id:2003,name:"Barbell Bent-Over Row",muscle:"Back",desc:"Sets:4|Reps:8-12\n1.Torso at 45°, slight knee bend.\n2.Pull bar into stomach.\n3.Squeeze blades at top.\nTip: Back flat, no jerking."},
 {id:2004,name:"Lat Pulldown",muscle:"Back",desc:"Sets:3|Reps:10-12\n1.Wide overhand grip.\n2.Pull bar to upper chest.\n3.Slow return to full stretch.\nTip: Lead with elbows, not hands."},
 {id:2005,name:"Seated Cable Row",muscle:"Back",desc:"Sets:3|Reps:10-12\n1.Sit tall, slight forward lean.\n2.Pull V-handle to stomach.\n3.Squeeze blades, hold 1s.\nTip: No momentum."},
 {id:2006,name:"Face Pull",muscle:"Shoulders",desc:"Sets:3-4|Reps:12-20\n1.Cable at face height, rope attachment.\n2.Pull to face, hands by ears.\n3.Rotate hands back.\nTip: Essential for shoulder health—do every session."},
 {id:2007,name:"T-Bar Row",muscle:"Back",desc:"Sets:3|Reps:10-12\n1.Chest supported or standing.\n2.Pull to lower chest.\n3.Squeeze hard at top.\nTip: One of the best back builders."},
 {id:2008,name:"Single Arm DB Row",muscle:"Back",desc:"Sets:3-4|Reps:10-12 each\n1.Brace knee+hand on bench.\n2.Pull DB to hip/ribs.\n3.Full stretch at bottom.\nTip: Don't rotate torso."},
 {id:2009,name:"Chest Supported Row",muscle:"Back",desc:"Sets:3|Reps:10-12\n1.Chest-down on incline bench.\n2.Pull DBs up and back.\n3.Squeeze shoulder blades.\nTip: Eliminates lower back stress."},
 {id:2010,name:"Neutral Grip Pull-Up",muscle:"Back",desc:"Sets:3-4|Reps:6-10\n1.Palms facing each other.\n2.Pull chin above bar.\n3.Lower slowly.\nTip: Easier on shoulders than wide."},
 {id:2011,name:"Straight Arm Pulldown",muscle:"Back",desc:"Sets:3|Reps:12-15\n1.High cable, arms straight.\n2.Push bar down to thighs.\n3.Squeeze lats at bottom.\nTip: Pure lat isolation."},
 {id:2012,name:"Close Grip Lat Pulldown",muscle:"Back",desc:"Sets:3|Reps:10-12\n1.Narrow underhand grip.\n2.Pull to upper chest, slight lean back.\n3.Full stretch at top.\nTip: Hits lower lats more."},
 {id:2013,name:"Inverted Row",muscle:"Back",desc:"Sets:3|Reps:10-15\n1.Bar at hip height, lie underneath.\n2.Pull chest to bar—body straight.\n3.Lower controlled.\nTip: Great bodyweight back builder."},
 {id:2014,name:"Kroc Row",muscle:"Back",desc:"Sets:2|Reps:20-30 each\n1.Heavy DB, brace on bench.\n2.Pull with controlled momentum.\n3.High reps, go heavy.\nTip: Builds raw back thickness."},
 {id:2015,name:"Rack Pull",muscle:"Back",desc:"Sets:3-4|Reps:5-8\n1.Bar at knee height.\n2.Pull to lockout.\n3.Focus on upper back.\nTip: Great for overloading deadlift."},
 {id:2016,name:"Pendlay Row",muscle:"Back",desc:"Sets:4|Reps:5-8\n1.Bar on floor, torso parallel.\n2.Explosively pull to stomach.\n3.Return bar fully to floor.\nTip: More explosive than bent-over row."},
 {id:2017,name:"Weighted Pull-Up",muscle:"Back",desc:"Sets:3-4|Reps:5-8\n1.Belt with plates or vest.\n2.Dead hang, pull chest to bar.\n3.Full extension at bottom.\nTip: King of back exercises."},
 {id:2018,name:"Assisted Pull-Up",muscle:"Back",desc:"Sets:3|Reps:8-12\n1.Use band or machine.\n2.Full pull to chin above bar.\n3.Slow controlled lower.\nTip: Build to full bodyweight."},
 {id:2019,name:"Single Arm Cable Row",muscle:"Back",desc:"Sets:3|Reps:12 each\n1.Mid-height cable.\n2.Pull elbow back past ribs.\n3.Full stretch forward.\nTip: Better ROM than two-arm."},
 {id:2020,name:"Good Morning",muscle:"Back",desc:"Sets:3|Reps:10-12\n1.Bar on upper back.\n2.Hinge hips back, torso lowers.\n3.Drive hips forward.\nTip: Light weight—posterior chain."},
 // ── SHOULDERS ──────────────────────────────────────────
 {id:4001,name:"Overhead Press (OHP)",muscle:"Shoulders",desc:"Sets:4|Reps:6-10\n1.Bar at chin, elbows forward.\n2.Press straight overhead.\n3.Lock out at top.\nTip: No leg drive—strict press."},
 {id:4002,name:"Lateral Raise",muscle:"Shoulders",desc:"Sets:3-4|Reps:12-15\n1.Slight forward lean.\n2.Raise arms to shoulder height.\n3.Controlled lower.\nTip: Lead with elbows, thumbs slightly down."},
 {id:4003,name:"Arnold Press",muscle:"Shoulders",desc:"Sets:3|Reps:10-12\n1.Palms facing you to start.\n2.Rotate palms out as you press up.\n3.Reverse on way down.\nTip: All 3 shoulder heads engaged."},
 {id:4004,name:"Front Raise",muscle:"Shoulders",desc:"Sets:3|Reps:12\n1.DB or plate at thighs.\n2.Raise to shoulder height.\n3.Slow lower.\nTip: Lighter than you think."},
 {id:4005,name:"Upright Row",muscle:"Shoulders",desc:"Sets:3|Reps:10-12\n1.Grip bar shoulder width.\n2.Pull to chin, elbows high.\n3.Controlled lower.\nTip: Don't go too heavy."},
 {id:4006,name:"Cable Lateral Raise",muscle:"Shoulders",desc:"Sets:3|Reps:15-20\n1.Cable at ankle height.\n2.Raise arm to shoulder height.\n3.Hold 1s, slow lower.\nTip: Constant tension beats DBs."},
 {id:4007,name:"DB Shoulder Press",muscle:"Shoulders",desc:"Sets:3-4|Reps:8-12\n1.DBs at shoulder height.\n2.Press overhead to full extension.\n3.Controlled lower.\nTip: Better ROM than barbell."},
 {id:4008,name:"Rear Delt Fly",muscle:"Shoulders",desc:"Sets:3|Reps:15-20\n1.Bent over at 90°.\n2.Raise DBs out and back.\n3.Squeeze rear delts at top.\nTip: Light weight, feel the squeeze."},
 {id:4009,name:"Barbell Shrugs",muscle:"Shoulders",desc:"Sets:3-4|Reps:12-15\n1.Heavy barbell in front.\n2.Shrug shoulders as high as possible.\n3.Hold 1s at top.\nTip: Straight up and down—don't roll."},
 {id:4010,name:"Push Press",muscle:"Shoulders",desc:"Sets:3-4|Reps:5-8\n1.Slight knee dip.\n2.Drive bar overhead with leg momentum.\n3.Lock out fully.\nTip: Allows heavier than strict press."},
 {id:4011,name:"Landmine Press",muscle:"Shoulders",desc:"Sets:3|Reps:10-12 each\n1.Bar in corner.\n2.Press plate-end in arc overhead.\n3.Control descent.\nTip: Shoulder-friendly variation."},
 {id:4012,name:"Machine Lateral Raise",muscle:"Shoulders",desc:"Sets:3|Reps:15-20\n1.Seat adjusted to shoulder height.\n2.Press pads upward.\n3.Slow controlled lower.\nTip: Constant tension, no momentum."},
 {id:4013,name:"Seated DB Press",muscle:"Shoulders",desc:"Sets:4|Reps:8-12\n1.Sit upright, back supported.\n2.Press DBs overhead.\n3.Lower to ear height.\nTip: Strict form, no back arch."},
 {id:4014,name:"Machine Shoulder Press",muscle:"Shoulders",desc:"Sets:3|Reps:10-12\n1.Adjust seat height.\n2.Press handles overhead.\n3.Full extension at top.\nTip: Good for beginners/drop sets."},
 // ── LEGS ───────────────────────────────────────────────
 {id:3001,name:"Back Squat",muscle:"Legs",desc:"Sets:4-5|Reps:6-12\n1.Bar on upper traps.\n2.Feet shoulder width, toes slightly out.\n3.Squat below parallel.\nTip: Knees out, chest up."},
 {id:3002,name:"Leg Press",muscle:"Legs",desc:"Sets:4|Reps:10-15\n1.Feet shoulder width, mid-platform.\n2.Lower until 90° knee bend.\n3.Press through heels.\nTip: Don't let knees cave."},
 {id:3003,name:"Romanian Deadlift (RDL)",muscle:"Legs",desc:"Sets:4|Reps:8-12\n1.Soft knees, hinge hips back.\n2.Bar tracks down legs.\n3.Feel hamstring stretch.\nTip: Back flat—stop before rounding."},
 {id:3004,name:"Bulgarian Split Squat",muscle:"Legs",desc:"Sets:3-4|Reps:10 each\n1.Rear foot elevated.\n2.Lower back knee toward floor.\n3.Drive through front heel.\nTip: Hardest leg exercise. Be humble."},
 {id:3005,name:"Leg Extension",muscle:"Legs",desc:"Sets:3-4|Reps:15\n1.Pad above ankles.\n2.Kick up, squeeze quads.\n3.Slow 3s lower.\nTip: Pause 1s at top."},
 {id:3006,name:"Lying Leg Curl",muscle:"Legs",desc:"Sets:3-4|Reps:12\n1.Pad above heels.\n2.Curl heels toward glutes.\n3.Squeeze at top, slow lower.\nTip: Flex glutes—protects lower back."},
 {id:3007,name:"Standing Calf Raise",muscle:"Legs",desc:"Sets:4|Reps:15-20\n1.Full stretch at bottom.\n2.Rise as high as possible.\n3.Hold 1s at top.\nTip: Calves need high reps to grow."},
 {id:3008,name:"Walking Lunges",muscle:"Legs",desc:"Sets:3|Reps:20 total\n1.Step forward into lunge.\n2.Drop back knee near floor.\n3.Step through to next lunge.\nTip: Stay upright, don't lean."},
 {id:3009,name:"Front Squat",muscle:"Legs",desc:"Sets:3-4|Reps:6-10\n1.Bar on front shoulders, elbows high.\n2.Squat deep—stay upright.\n3.Drive up through heels.\nTip: Hits quads harder than back squat."},
 {id:3010,name:"Leg Press (Wide Stance)",muscle:"Legs",desc:"Sets:4|Reps:12-15\n1.Feet wide + high on platform.\n2.Lower deep.\n3.Press through heels.\nTip: Wide stance shifts load to glutes."},
 {id:3011,name:"Goblet Squat",muscle:"Legs",desc:"Sets:3|Reps:12-15\n1.Hold KB or DB at chest.\n2.Feet shoulder width.\n3.Squat deep, elbows inside knees.\nTip: Great for beginners and warm-up."},
 {id:3012,name:"Hack Squat",muscle:"Legs",desc:"Sets:4|Reps:10-12\n1.Feet shoulder width on platform.\n2.Lower deep—knees track toes.\n3.Drive through heels.\nTip: Great quad builder."},
 {id:3013,name:"Seated Leg Curl",muscle:"Legs",desc:"Sets:3-4|Reps:12-15\n1.Pad on lower shin.\n2.Curl leg down.\n3.Slow return.\nTip: Seated gives better hamstring stretch."},
 {id:3014,name:"Seated Calf Raise",muscle:"Legs",desc:"Sets:4|Reps:15-20\n1.Knees bent 90°, pad above knees.\n2.Rise on toes fully.\n3.Full stretch at bottom.\nTip: Targets soleus—different from standing."},
 {id:3015,name:"Single Leg RDL",muscle:"Legs",desc:"Sets:3|Reps:10-12 each\n1.Stand one leg, soft knee bend.\n2.Hinge forward, free leg back.\n3.Drive hip forward to stand.\nTip: Use wall for balance if needed."},
 {id:3016,name:"Reverse Lunge",muscle:"Legs",desc:"Sets:3|Reps:10-12 each\n1.Step backward into lunge.\n2.Front knee tracks over toe.\n3.Drive front heel to return.\nTip: Easier on knees than forward lunge."},
 {id:3017,name:"Box Jump",muscle:"Legs",desc:"Sets:3|Reps:8-10\n1.Face box, slight squat.\n2.Jump explosively.\n3.Land softly on box.\n4.Step down—don't jump down.\nTip: Develops explosive power."},
 {id:3018,name:"Nordic Hamstring Curl",muscle:"Legs",desc:"Sets:3|Reps:5-8\n1.Kneel, feet anchored.\n2.Lower body forward slowly.\n3.Hands catch at bottom.\n4.Curl back up.\nTip: Most effective hamstring exercise."},
 {id:3019,name:"Stiff Leg Deadlift",muscle:"Legs",desc:"Sets:3-4|Reps:10-12\n1.Legs nearly straight throughout.\n2.Lower bar to mid-shin.\n3.Drive hips forward.\nTip: Maximum stretch—go lighter."},
 {id:3020,name:"Trap Bar Deadlift",muscle:"Legs",desc:"Sets:3-4|Reps:5-8\n1.Step inside hex bar.\n2.Grip handles, drive heels.\n3.Stand tall at top.\nTip: Easier on back than conventional."},
 {id:3021,name:"Leg Adductor Machine",muscle:"Legs",desc:"Sets:3|Reps:15-20\n1.Pads on inner thighs.\n2.Squeeze legs together.\n3.Slow controlled open.\nTip: Inner thigh. High reps."},
 {id:3022,name:"Leg Abductor Machine",muscle:"Legs",desc:"Sets:3|Reps:15-20\n1.Pads on outer thighs.\n2.Push legs apart.\n3.Slow controlled return.\nTip: Outer thigh + glute medius."},
 {id:3023,name:"Pause Squat",muscle:"Legs",desc:"Sets:3-4|Reps:5-8\n1.Back squat position.\n2.Pause at bottom for 3 seconds.\n3.Drive back up.\nTip: No momentum—pure strength."},
 {id:3024,name:"Step Up (Box)",muscle:"Legs",desc:"Sets:3|Reps:10-12 each\n1.Step onto box, one foot.\n2.Drive through heel to stand.\n3.Lower controlled.\nTip: Higher box = more glute."},
 {id:3025,name:"Donkey Calf Raise",muscle:"Legs",desc:"Sets:4|Reps:15-20\n1.Bent at hips 90°, forearms on pad.\n2.Rise on toes to full contraction.\n3.Full stretch at bottom.\nTip: Deeper stretch than standing."},
 // ── GLUTES ─────────────────────────────────────────────
 {id:6001,name:"Hip Thrust",muscle:"Glutes",desc:"Sets:4|Reps:10-15\n1.Upper back on bench, bar on hips.\n2.Drive hips up—body straight.\n3.Squeeze glutes hard at top.\nTip: Best glute exercise—load heavy."},
 {id:6004,name:"Cable Kickback",muscle:"Glutes",desc:"Sets:3|Reps:15 each\n1.Ankle attachment, cable low.\n2.Kick leg straight back.\n3.Squeeze glute at top.\nTip: Slow and controlled."},
 {id:6005,name:"Sumo Deadlift",muscle:"Glutes",desc:"Sets:3-4|Reps:8-12\n1.Feet wide, toes pointed out.\n2.Grip bar inside legs.\n3.Drive hips forward to lockout.\nTip: Hits inner thighs + glutes."},
 {id:6006,name:"Donkey Kickback",muscle:"Glutes",desc:"Sets:3|Reps:15-20 each\n1.On all fours, core tight.\n2.Kick one leg straight back+up.\n3.Squeeze glute at top.\nTip: Use ankle weights for resistance."},
 {id:6007,name:"Glute Bridge",muscle:"Glutes",desc:"Sets:3-4|Reps:15-20\n1.Lie on back, feet flat.\n2.Drive hips up, squeeze glutes.\n3.Hold 2s, lower slowly.\nTip: Add DB on hips for load."},
 {id:6008,name:"Single Leg Hip Thrust",muscle:"Glutes",desc:"Sets:3|Reps:12 each\n1.One foot on floor, other leg raised.\n2.Drive hips up—single leg.\n3.Squeeze at top.\nTip: Corrects glute imbalances."},
 {id:6009,name:"Banded Clamshell",muscle:"Glutes",desc:"Sets:3|Reps:20 each\n1.Band above knees, side lying.\n2.Feet together, open top knee.\n3.Squeeze glute med at top.\nTip: Great warm-up / accessory."},
 {id:6010,name:"Fire Hydrant",muscle:"Glutes",desc:"Sets:3|Reps:20 each\n1.On all fours.\n2.Raise knee to side at hip height.\n3.Lower slowly.\nTip: Targets glute medius."},
 {id:6011,name:"Frog Pump",muscle:"Glutes",desc:"Sets:3|Reps:20-30\n1.Lie on back, soles together.\n2.Push hips up, squeeze glutes.\n3.High reps.\nTip: Great pump before hip thrusts."},
 {id:6012,name:"Step Up (High Box)",muscle:"Glutes",desc:"Sets:3|Reps:10-12 each\n1.High box (50cm+).\n2.Drive through heel.\n3.Don't push off lower leg.\nTip: Maximum glute activation."},
 {id:6013,name:"Banded Walks",muscle:"Glutes",desc:"Sets:3|Reps:20 steps each\n1.Band above knees.\n2.Half squat position.\n3.Walk sideways keeping tension.\nTip: Activates glute medius."},
 {id:6014,name:"Curtsy Lunge",muscle:"Glutes",desc:"Sets:3|Reps:12 each\n1.Step one foot behind + across body.\n2.Lower back knee to floor.\n3.Drive through front heel.\nTip: Targets glute medius + outer glute."},
 {id:6015,name:"Cable Pull-Through",muscle:"Glutes",desc:"Sets:3|Reps:15\n1.Low cable between legs, face away.\n2.Hinge hips back—cable between legs.\n3.Drive hips forward.\nTip: Hip hinge pattern—great for glutes."},
 {id:6016,name:"Glute Kickback Machine",muscle:"Glutes",desc:"Sets:3|Reps:15-20 each\n1.Brace on pads, foot on platform.\n2.Kick back and up.\n3.Squeeze at top.\nTip: Full range every rep."},
 {id:6017,name:"Reverse Hyper",muscle:"Glutes",desc:"Sets:3|Reps:15-20\n1.Lie face down on bench, legs hang.\n2.Raise legs to parallel.\n3.Slow lower.\nTip: Decompresses spine + builds glutes."},
 // ── BICEPS ─────────────────────────────────────────────
 {id:5001,name:"Barbell Curl",muscle:"Biceps",desc:"Sets:3-4|Reps:8-12\n1.Grip shoulder width.\n2.Curl bar to chest.\n3.Squeeze at top, slow lower.\nTip: Don't swing—elbows stay at sides."},
 {id:5003,name:"Hammer Curl",muscle:"Biceps",desc:"Sets:3|Reps:10-12\n1.Neutral grip (thumbs up).\n2.Curl DB to shoulder.\n3.Slow lower.\nTip: Builds brachialis—arm thickness."},
 {id:5006,name:"Concentration Curl",muscle:"Biceps",desc:"Sets:3|Reps:12 each\n1.Sit, brace elbow on inner thigh.\n2.Curl DB to shoulder.\n3.Full squeeze at top.\nTip: Best for bicep peak."},
 {id:5013,name:"Incline DB Curl",muscle:"Biceps",desc:"Sets:3|Reps:10-12\n1.Incline bench, arms hang.\n2.Curl without moving elbow.\n3.Full stretch at bottom.\nTip: Maximum stretch = more growth."},
 {id:5014,name:"Cable Curl",muscle:"Biceps",desc:"Sets:3|Reps:12-15\n1.Low cable, bar or rope.\n2.Curl to chin.\n3.Constant tension throughout.\nTip: No rest at bottom."},
 {id:5015,name:"Preacher Curl",muscle:"Biceps",desc:"Sets:3|Reps:10-12\n1.Arms braced on preacher pad.\n2.Curl to chin.\n3.Full stretch—don't lock out.\nTip: No cheating possible."},
 {id:5016,name:"21s Bicep Curl",muscle:"Biceps",desc:"Sets:3 rounds:\n7 reps: bottom half (hang to 90°)\n7 reps: top half (90° to chin)\n7 reps: full range\nTip: Brutal but effective. Light weight."},
 {id:5017,name:"Spider Curl",muscle:"Biceps",desc:"Sets:3|Reps:10-12\n1.Chest on incline bench, arms hang.\n2.Curl DBs up.\n3.Lower slowly.\nTip: Eliminates shoulder involvement."},
 {id:5018,name:"Reverse Curl",muscle:"Biceps",desc:"Sets:3|Reps:12-15\n1.Overhand grip on barbell.\n2.Curl up—keep wrists straight.\n3.Slow lower.\nTip: Builds brachioradialis (forearm)."},
 {id:5030,name:"Zottman Curl",muscle:"Biceps",desc:"Sets:3|Reps:10-12\n1.Curl up with supinated grip.\n2.Rotate to pronated at top.\n3.Lower overhand.\nTip: Works both bicep heads + forearm."},
 {id:5031,name:"Cross-Body Hammer Curl",muscle:"Biceps",desc:"Sets:3|Reps:10-12 each\n1.Neutral grip.\n2.Curl DB across to opposite shoulder.\n3.Slow lower.\nTip: Brachialis dominant."},
 {id:5032,name:"Drag Curl",muscle:"Biceps",desc:"Sets:3|Reps:10-12\n1.Drag bar up body—elbows go back.\n2.Bar stays close to torso.\n3.Slow lower.\nTip: Unique peak contraction."},
 // ── TRICEPS ────────────────────────────────────────────
 {id:5002,name:"Tricep Pushdown",muscle:"Triceps",desc:"Sets:3|Reps:12-15\n1.Rope or bar, cable high.\n2.Push down to full extension.\n3.Flare hands at bottom.\nTip: Elbows glued to body."},
 {id:5004,name:"Skull Crusher",muscle:"Triceps",desc:"Sets:3|Reps:10-12\n1.Lie flat, EZ bar or DBs.\n2.Lower to forehead.\n3.Extend back up.\nTip: Elbows point at ceiling."},
 {id:5007,name:"Overhead Tricep Ext",muscle:"Triceps",desc:"Sets:3|Reps:12-15\n1.Cable or DB overhead, arms bent.\n2.Extend arms fully overhead.\n3.Slow lower behind head.\nTip: Long head—biggest tricep."},
 {id:5019,name:"Diamond Push-Up",muscle:"Triceps",desc:"Sets:3|Reps:12-15\n1.Hands forming a diamond.\n2.Lower chest to hands.\n3.Push up.\nTip: Best bodyweight tricep exercise."},
 {id:5020,name:"Bench Dips",muscle:"Triceps",desc:"Sets:3|Reps:15-20\n1.Hands on bench, legs out.\n2.Lower until arms 90°.\n3.Push up.\nTip: Add weight on lap for progression."},
 {id:5021,name:"Close Grip Bench Press",muscle:"Triceps",desc:"Sets:3-4|Reps:8-12\n1.Grip shoulder width or narrower.\n2.Lower bar to lower chest.\n3.Press up.\nTip: Compound tricep builder—go heavy."},
 {id:5022,name:"Tricep Kickback",muscle:"Triceps",desc:"Sets:3|Reps:12-15 each\n1.Bent over, upper arm parallel.\n2.Extend forearm back fully.\n3.Squeeze at lockout.\nTip: Full lockout every rep."},
 {id:5023,name:"Cable Overhead Ext",muscle:"Triceps",desc:"Sets:3|Reps:12-15\n1.Rope, cable behind head.\n2.Extend arms forward overhead.\n3.Slow return.\nTip: Constant tension on long head."},
 {id:5024,name:"Single Arm Pushdown",muscle:"Triceps",desc:"Sets:3|Reps:12-15 each\n1.One hand on cable handle.\n2.Push down to full lockout.\n3.Controlled return.\nTip: Fixes left/right imbalances."},
 {id:5025,name:"Tate Press",muscle:"Triceps",desc:"Sets:3|Reps:12\n1.Lie flat, DBs above chest, elbows out.\n2.Lower DBs to chest.\n3.Press back to start.\nTip: Medial head focus."},
 {id:5028,name:"Parallel Bar Dips",muscle:"Triceps",desc:"Sets:3-4|Reps:10-15\n1.Upright torso, parallel bars.\n2.Lower until arms 90°.\n3.Drive back up.\nTip: More tricep than chest dips."},
 // ── CORE ───────────────────────────────────────────────
 {id:6002,name:"Plank",muscle:"Core",desc:"Sets:3|Duration:45-90s\n1.Forearms on floor, body straight.\n2.Squeeze abs + glutes.\n3.Don't let hips sag.\nTip: Add 5s per week."},
 {id:6003,name:"Hanging Leg Raise",muscle:"Core",desc:"Sets:3|Reps:12\n1.Hang from pull-up bar.\n2.Lift legs to 90°+.\n3.Lower slowly—no swing.\nTip: Bent knees first if needed."},
 {id:6018,name:"Crunches",muscle:"Core",desc:"Sets:3|Reps:20-30\n1.Hands behind head, lying.\n2.Crunch upper body toward knees.\n3.Slow controlled lower.\nTip: Don't pull your neck."},
 {id:6019,name:"Russian Twist",muscle:"Core",desc:"Sets:3|Reps:20\n1.Sit at 45°, feet off floor.\n2.Rotate torso side to side.\n3.Touch floor each side.\nTip: Add plate for load."},
 {id:6020,name:"Dead Bug",muscle:"Core",desc:"Sets:3|Reps:10 each side\n1.Lie on back, arms+legs up.\n2.Lower opposite arm and leg.\n3.Return and repeat.\nTip: Lower back on floor always."},
 {id:6021,name:"Cable Crunch",muscle:"Core",desc:"Sets:3|Reps:15-20\n1.Rope at top cable.\n2.Kneel, crunch down to knees.\n3.Slow return.\nTip: Round spine—don't hip hinge."},
 {id:6022,name:"Ab Roller",muscle:"Core",desc:"Sets:3|Reps:8-12\n1.Kneel, hands on roller.\n2.Roll forward—body straight.\n3.Pull back using abs only.\nTip: One of the hardest ab exercises."},
 {id:6023,name:"Mountain Climbers",muscle:"Core",desc:"Sets:3|Reps:30 each\n1.High plank position.\n2.Drive knees to chest alternating.\n3.Fast—hips down.\nTip: Also a great cardio finisher."},
 {id:6024,name:"Bicycle Crunch",muscle:"Core",desc:"Sets:3|Reps:20 each\n1.Hands behind head, lying.\n2.Elbow to opposite knee.\n3.Extend other leg fully.\nTip: Slow + controlled."},
 {id:6025,name:"Leg Raise (Floor)",muscle:"Core",desc:"Sets:3|Reps:15\n1.Lie flat, legs straight.\n2.Raise legs to 90°.\n3.Lower slowly—heels don't touch.\nTip: Lower back pressed to floor."},
 {id:6026,name:"V-Up",muscle:"Core",desc:"Sets:3|Reps:15\n1.Lie flat, arms overhead.\n2.Lift arms+legs simultaneously.\n3.Touch toes at top.\n4.Lower slowly.\nTip: Advanced—tuck crunch is easier."},
 {id:6027,name:"Pallof Press",muscle:"Core",desc:"Sets:3|Reps:12 each\n1.Cable at chest, facing sideways.\n2.Press arms straight out.\n3.Hold 2s.\n4.Return.\nTip: Anti-rotation—very underrated."},
 {id:8005,name:"Plank Variations",muscle:"Core",desc:"3 Rounds:\n1.Standard Plank: 60s\n2.Side Plank L: 30s\n3.Side Plank R: 30s\n4.Plank Hip Dips: 20 reps\nRest 30s between."},
 // ── CARDIO ─────────────────────────────────────────────
 {id:701, name:"HIIT Circuit",muscle:"Cardio",desc:"Duration:20-30 mins | MET:12.0\n⚡ Est. burn: ~14-15 cal/min (75kg person)\n20s ON / 10s OFF × 8 rounds:\n1.Jump squats  2.Mountain climbers\n3.Burpees  4.High knees\nCalories: ~350-500 per session."},
 {id:8001,name:"Treadmill Run",muscle:"Cardio",desc:"Duration:20-30 mins | MET:9.8\n⚡ Est. burn: ~11-13 cal/min (75kg person)\n1.Warm up 5 mins walk.\n2.Run at moderate pace.\n3.Cool down 5 mins.\nCalories: ~280-400 per session."},
 {id:8002,name:"Jump Rope",muscle:"Cardio",desc:"Duration:15-20 mins | MET:12.3\n⚡ Est. burn: ~14-15 cal/min (75kg person)\n3 rounds × 5 mins:\n1.Standard jump.  2.Alternating feet.\n3.Double unders.  Rest 1 min between."},
 {id:8003,name:"Stationary Bike",muscle:"Cardio",desc:"Duration:30 mins | MET:8.0\n⚡ Est. burn: ~9-10 cal/min (75kg person)\nWarm up 5 mins. Moderate-high 20 mins.\nCool down 5 mins.\nCalories: ~250-320 per session."},
 {id:8004,name:"Stairmaster",muscle:"Cardio",desc:"Duration:20-25 mins | MET:9.0\n⚡ Est. burn: ~10-12 cal/min (75kg person)\nLevel 6-10. Keep posture upright.\nDon't lean on handrails.\nCalories: ~220-300 per session."},
 {id:8006,name:"Swimming",muscle:"Cardio",desc:"Duration:30-45 mins | MET:8.0\n⚡ Est. burn: ~9-10 cal/min (75kg person)\nFreestyle for endurance.\nBreaststroke for recovery.\nCalories: ~270-450 per session."},
 {id:8007,name:"Rowing Machine",muscle:"Cardio",desc:"Duration:20-30 mins | MET:8.5\n⚡ Est. burn: ~10-11 cal/min (75kg person)\n1.Drive with legs first.\n2.Lean back and pull.\n3.Return in reverse.\nCalories: ~250-350 per session."},
 {id:8008,name:"Elliptical",muscle:"Cardio",desc:"Duration:30-40 mins | MET:5.0\n⚡ Est. burn: ~6-7 cal/min (75kg person)\nResistance 6-12. Push+pull handles.\nMaintain 130-150 bpm.\nCalories: ~200-300 per session."},
 {id:8009,name:"Sprint Intervals",muscle:"Cardio",desc:"Duration:20-25 mins | MET:14.0\n⚡ Est. burn: ~16-18 cal/min (75kg person)\n10 rounds:\n30s ALL OUT sprint. 90s recovery walk.\nCalories: ~350-500 per session."},
 {id:8010,name:"Boxing / Shadowboxing",muscle:"Cardio",desc:"Duration:20-30 mins | MET:11.0\n⚡ Est. burn: ~12-14 cal/min (75kg person)\n3-min rounds. Jab, cross, hook, uppercut.\nRest 1 min between.\nCalories: ~280-450 per session."},
 {id:8011,name:"Incline Walk",muscle:"Cardio",desc:"Duration:30-45 mins | MET:5.0\n⚡ Est. burn: ~6-7 cal/min (75kg person)\n10-15% incline. Speed: 4-6 km/h.\nArms swinging naturally.\nCalories: ~200-350 per session."},
 {id:8012,name:"Battle Ropes",muscle:"Cardio",desc:"Duration:15-20 mins | MET:10.0\n⚡ Est. burn: ~11-13 cal/min (75kg person)\n40s ON / 20s REST × 8-10 rounds.\nAlternating waves, slams, circles.\nCalories: ~250-380 per session."},
 {id:8013,name:"Sled Push / Pull",muscle:"Cardio",desc:"Duration:20 mins | MET:11.0\n⚡ Est. burn: ~12-14 cal/min (75kg person)\n6-10 lengths. Low drive position.\nWalk back, hook rope, pull.\nRest 90s between.\nCalories: ~300-450 per session."},
 {id:8014,name:"Burpees",muscle:"Cardio",desc:"Sets:4-6|Reps:10-15 | MET:8.0\n⚡ Est. burn: ~9-11 cal/min (75kg person)\n1.Squat down, jump feet back.\n2.Push-up.\n3.Jump feet forward.\n4.Jump + clap overhead.\nCalories: ~10-12 per minute."},
 {id:8015,name:"Outdoor Cycling",muscle:"Cardio",desc:"Duration:45-90 mins | MET:8.0\n⚡ Est. burn: ~9-11 cal/min (75kg person)\nCadence 75-90 rpm.\nAlternate flat and hill terrain.\nCalories: ~350-800 per session."}
];

/* =========================================================
   FOOD LIBRARY — Scientific macros per 100g (meats/fish/veg)
   or per standard serving (prepared dishes/drinks)
   ========================================================= */
const foodLibrary=[
 // ── PROTEINS (per 100g cooked) ─────────────────────────
 {n:"chicken breast",p:31,c:0,f:3.6,cal:165},{n:"chicken thigh",p:25,c:0,f:13,cal:221},
 {n:"chicken wing",p:27,c:0,f:19,cal:290},{n:"chicken",p:27,c:0,f:9,cal:195},
 {n:"grilled chicken",p:31,c:0,f:3.6,cal:165},{n:"stew chicken",p:28,c:4,f:10,cal:225},
 {n:"curry chicken",p:26,c:5,f:12,cal:234},{n:"fried chicken",p:25,c:10,f:18,cal:305},
 {n:"brown stew chicken",p:27,c:5,f:10,cal:220},{n:"geera chicken",p:32,c:2,f:12,cal:245},
 {n:"bbq chicken",p:29,c:8,f:10,cal:238},{n:"baked chicken",p:30,c:0,f:7,cal:183},
 {n:"smoked chicken",p:28,c:2,f:9,cal:205},{n:"chicken drumstick",p:26,c:0,f:14,cal:234},
 {n:"turkey",p:29,c:0,f:7,cal:189},
 {n:"beef",p:26,c:0,f:15,cal:250},{n:"stew beef",p:28,c:4,f:14,cal:252},
 {n:"curry beef",p:26,c:5,f:14,cal:252},{n:"ground beef",p:24,c:0,f:20,cal:280},
 {n:"beef patty",p:22,c:0,f:18,cal:255},{n:"steak",p:28,c:0,f:15,cal:250},
 {n:"oxtail",p:25,c:4,f:22,cal:314},{n:"stew oxtail",p:24,c:5,f:22,cal:310},
 {n:"cow heel",p:28,c:6,f:12,cal:250},{n:"liver",p:26,c:4,f:8,cal:191},
 {n:"kidney",p:22,c:1,f:7,cal:157},{n:"tripe",p:17,c:0,f:8,cal:143},
 {n:"black pudding",p:12,c:14,f:20,cal:290},{n:"souse",p:22,c:6,f:9,cal:197},
 {n:"pepperpot",p:28,c:10,f:18,cal:318},{n:"bacon",p:12,c:0,f:18,cal:215},
 {n:"pork",p:27,c:0,f:8,cal:185},{n:"pork loin",p:27,c:0,f:8,cal:185},
 {n:"stew pork",p:26,c:4,f:16,cal:265},{n:"geera pork",p:30,c:2,f:14,cal:258},
 {n:"pork chops",p:27,c:0,f:14,cal:235},{n:"smoked pork",p:25,c:0,f:18,cal:270},
 {n:"pigtail",p:20,c:0,f:25,cal:305},{n:"lamb",p:25,c:0,f:21,cal:294},
 {n:"curry goat",p:28,c:4,f:16,cal:272},{n:"stew goat",p:27,c:4,f:14,cal:254},
 {n:"curry duck",p:24,c:4,f:18,cal:278},{n:"smoked duck",p:24,c:0,f:16,cal:250},
 // ── FISH (per 100g cooked) ─────────────────────────────
 {n:"salmon",p:25,c:0,f:13,cal:208},{n:"tuna",p:30,c:0,f:1,cal:130},
 {n:"canned tuna",p:25,c:0,f:3,cal:116},{n:"smoked salmon",p:22,c:0,f:12,cal:200},
 {n:"tilapia",p:26,c:0,f:3,cal:128},{n:"cod",p:18,c:0,f:0.7,cal:82},
 {n:"fish",p:22,c:0,f:5,cal:135},{n:"fried fish",p:22,c:7,f:10,cal:210},
 {n:"stew fish",p:22,c:4,f:7,cal:172},{n:"curry fish",p:21,c:5,f:8,cal:180},
 {n:"baked fish",p:24,c:0,f:5,cal:143},{n:"grilled fish",p:24,c:0,f:5,cal:140},
 {n:"king fish",p:26,c:0,f:4,cal:142},{n:"carite",p:24,c:0,f:4,cal:135},
 {n:"snapper",p:24,c:0,f:4,cal:135},{n:"red fish",p:24,c:0,f:4,cal:135},
 {n:"flying fish",p:22,c:0,f:3,cal:120},{n:"shark",p:28,c:0,f:3,cal:147},
 {n:"shrimp",p:24,c:1,f:1.7,cal:119},{n:"curry shrimp",p:22,c:4,f:6,cal:163},
 {n:"stew shrimp",p:20,c:4,f:5,cal:145},{n:"pepper shrimp",p:20,c:2,f:5,cal:137},
 {n:"garlic shrimp",p:20,c:2,f:7,cal:155},{n:"curry crab",p:20,c:6,f:8,cal:180},
 {n:"crab",p:19,c:0,f:2,cal:97},{n:"stuffed crab back",p:22,c:10,f:14,cal:258},
 {n:"lobster",p:22,c:1,f:2,cal:112},{n:"conch",p:17,c:2,f:1,cal:90},{n:"lambie",p:17,c:2,f:1,cal:90},
 {n:"fish broth",p:18,c:10,f:4,cal:152},{n:"saltfish",p:22,c:0,f:2,cal:107},
 {n:"smoked herring",p:21,c:0,f:8,cal:159},{n:"smoke herring",p:21,c:0,f:8,cal:159},
 {n:"saltfish buljol",p:18,c:4,f:3,cal:113},{n:"buljol",p:18,c:4,f:3,cal:113},
 // ── EGGS (per 100g or per piece) ──────────────────────
 {n:"egg",p:13,c:1.1,f:10,cal:155},{n:"boiled egg",p:13,c:1.1,f:10,cal:155},
 {n:"fried egg",p:10,c:0.5,f:9,cal:120},{n:"scrambled eggs",p:10,c:1,f:9,cal:120},
 {n:"egg white",p:11,c:0.7,f:0.2,cal:52},
 // ── DAIRY (per 100g or per serving noted) ─────────────
 {n:"milk",p:3.4,c:4.8,f:3.3,cal:61},{n:"whole milk",p:3.4,c:4.8,f:3.3,cal:61},
 {n:"skim milk",p:3.5,c:5,f:0.1,cal:35},{n:"cheese",p:25,c:1.3,f:33,cal:403},
 {n:"butter",p:0.9,c:0,f:81,cal:717},
 {n:"greek yogurt",p:10,c:4,f:0.4,cal:59},{n:"yogurt",p:5,c:7,f:2,cal:65},
 {n:"full fat yogurt",p:5,c:7,f:4,cal:81},{n:"ice cream",p:3.5,c:24,f:11,cal:207},
 {n:"vanilla ice cream",p:3.5,c:24,f:11,cal:207},{n:"chocolate ice cream",p:3.8,c:26,f:11,cal:218},
 // ── CARBS (per 100g cooked unless noted) ──────────────
 {n:"white rice",p:2.7,c:28,f:0.3,cal:130},{n:"rice",p:2.7,c:28,f:0.3,cal:130},
 {n:"brown rice",p:2.6,c:23,f:0.9,cal:112},{n:"fried rice",p:5,c:40,f:7,cal:245},
 {n:"chinese fried rice",p:6,c:43,f:8,cal:268},{n:"pigeon peas rice",p:6,c:40,f:2,cal:205},
 {n:"rice and peas",p:6,c:40,f:2,cal:205},{n:"lentil rice",p:8,c:38,f:1,cal:197},
 {n:"macaroni pie",p:10,c:36,f:16,cal:328},{n:"pasta",p:5,c:25,f:1,cal:131},
 {n:"macaroni",p:5,c:25,f:1,cal:131},{n:"stewed macaroni",p:7,c:30,f:8,cal:225},
 {n:"bread",p:8,c:50,f:3,cal:265},{n:"white bread",p:8,c:50,f:3,cal:265},
 {n:"hops bread",p:7,c:52,f:2,cal:256},{n:"toast",p:4,c:25,f:2,cal:133},
 {n:"sada roti",p:7,c:43,f:2,cal:221},{n:"sada",p:7,c:43,f:2,cal:221},
 {n:"coconut bake",p:5,c:38,f:10,cal:261},{n:"fried bake",p:4,c:34,f:12,cal:258},
 {n:"float bake",p:4,c:32,f:7,cal:207},{n:"dhalpuri",p:8,c:46,f:10,cal:302},
 {n:"dhalpuri roti",p:8,c:46,f:10,cal:302},{n:"bus up shut",p:7,c:42,f:12,cal:301},
 {n:"paratha",p:7,c:42,f:12,cal:301},{n:"paratha roti",p:7,c:42,f:12,cal:301},
 {n:"aloo roti",p:7,c:48,f:10,cal:311},{n:"pumpkin roti",p:6,c:44,f:9,cal:281},
 {n:"roti",p:7,c:42,f:9,cal:279},{n:"dumplings",p:3,c:19,f:1,cal:97},
 {n:"oats",p:17,c:66,f:7,cal:389},
 {n:"cornmeal porridge",p:4,c:38,f:4,cal:205},{n:"oat porridge",p:6,c:35,f:5,cal:211},
 {n:"farine porridge",p:2,c:42,f:2,cal:193},{n:"cream of wheat",p:4,c:32,f:1,cal:153},
 {n:"pumpkin porridge",p:3,c:34,f:4,cal:184},
 // ── PROVISIONS (per 100g cooked) ──────────────────────
 {n:"dasheen",p:3,c:30,f:0.2,cal:135},{n:"yam",p:2,c:24,f:0.1,cal:104},
 {n:"cassava",p:1.4,c:32,f:0.3,cal:136},{n:"eddoes",p:2,c:25,f:0.1,cal:111},
 {n:"sweet potato",p:1.6,c:20,f:0.1,cal:86},{n:"breadfruit",p:2,c:21,f:0.5,cal:97},
 {n:"fried breadfruit",p:2,c:23,f:7,cal:168},{n:"plantain",p:1.3,c:27,f:0.4,cal:122},
 {n:"fried plantain",p:1,c:29,f:5,cal:170},{n:"green fig",p:1.3,c:21,f:0.2,cal:93},
 {n:"green banana",p:1.3,c:21,f:0.2,cal:93},{n:"potato",p:2,c:17,f:0.1,cal:77},
 {n:"baked potato",p:3,c:21,f:0.1,cal:97},{n:"pumpkin",p:1,c:7,f:0.1,cal:33},
 {n:"provision",p:2,c:25,f:0.2,cal:112},
 // ── VEGGIES (per 100g raw) ─────────────────────────────
 {n:"callaloo",p:3,c:7,f:1,cal:45},{n:"spinach",p:2.9,c:3.6,f:0.4,cal:23},
 {n:"bhaji",p:2.9,c:3.6,f:0.4,cal:23},{n:"bhagi",p:2.9,c:3.6,f:0.4,cal:23},
 {n:"spinach bhaji",p:2.9,c:3.6,f:0.4,cal:23},{n:"broccoli",p:2.8,c:7,f:0.4,cal:34},
 {n:"tomato",p:0.9,c:3.9,f:0.2,cal:18},{n:"tomato choka",p:1,c:5,f:2,cal:43},
 {n:"baigan choka",p:1.5,c:7,f:2.5,cal:58},{n:"roasted pepper choka",p:1,c:6,f:0.2,cal:32},
 {n:"mango choka",p:0.8,c:10,f:0.3,cal:46},{n:"onion",p:1.1,c:9.3,f:0.1,cal:40},
 {n:"carrot",p:0.9,c:10,f:0.2,cal:41},{n:"cucumber",p:0.7,c:3.6,f:0.1,cal:16},
 {n:"cabbage",p:1.3,c:5.8,f:0.1,cal:25},{n:"coleslaw",p:1,c:6,f:4,cal:65},
 // ── PEAS & LEGUMES (per 100g cooked) ──────────────────
 {n:"dhal",p:9,c:20,f:0.4,cal:116},{n:"channa",p:9,c:27,f:3,cal:164},
 {n:"chickpeas",p:9,c:27,f:3,cal:164},{n:"lentils",p:9,c:20,f:0.4,cal:116},
 {n:"lentil peas",p:9,c:20,f:0.4,cal:116},{n:"red beans",p:8.7,c:22,f:0.5,cal:127},
 {n:"pigeon peas",p:7,c:21,f:0.4,cal:116},{n:"split peas",p:8,c:21,f:0.4,cal:118},
 {n:"black eyed peas",p:8,c:20,f:0.5,cal:116},
 // ── ONE POT DISHES (per serving) ──────────────────────
 {n:"pelau",p:22,c:38,f:9,cal:327},{n:"chicken pelau",p:24,c:40,f:10,cal:354},
 {n:"pork pelau",p:25,c:38,f:13,cal:373},{n:"beef pelau",p:25,c:39,f:11,cal:363},
 {n:"oil down",p:20,c:36,f:22,cal:420},{n:"coo coo",p:4,c:30,f:2.5,cal:160},
 // ── SOUPS (per serving 350ml) ─────────────────────────
 {n:"corn soup",p:9,c:31,f:7,cal:229},{n:"chicken soup",p:22,c:18,f:7,cal:231},
 {n:"beef soup",p:25,c:16,f:9,cal:249},{n:"cow heel soup",p:30,c:9,f:14,cal:286},
 {n:"pumpkin soup",p:4,c:19,f:3,cal:121},{n:"split peas soup",p:9,c:27,f:4,cal:184},
 // ── STREET FOOD (per standard serving) ────────────────
 {n:"doubles",p:14,c:52,f:14,cal:390},{n:"doubles slight",p:13,c:50,f:13,cal:369},
 {n:"doubles heavy",p:15,c:58,f:18,cal:454},{n:"aloo pie",p:5,c:35,f:10,cal:252},
 {n:"pholourie",p:2,c:13,f:4,cal:96},{n:"saheena",p:4,c:15,f:5,cal:121},
 {n:"bake and shark",p:35,c:52,f:22,cal:540},{n:"bake and saltfish",p:26,c:47,f:13,cal:415},
 {n:"gyros",p:22,c:38,f:17,cal:393},{n:"roti box",p:35,c:72,f:17,cal:593},
 {n:"kfc",p:38,c:30,f:30,cal:542},{n:"royal castle",p:35,c:35,f:26,cal:498},
 {n:"chow mein",p:11,c:42,f:9,cal:297},
 // ── SNACKS (per piece/serving) ────────────────────────
 {n:"peanuts",p:26,c:16,f:49,cal:580},{n:"chips",p:7,c:53,f:35,cal:545},
 {n:"chocolate",p:5.4,c:60,f:30,cal:546},{n:"dark chocolate",p:8,c:46,f:43,cal:598},
 {n:"cassava pone",p:2.5,c:40,f:7,cal:231},{n:"pumpkin pone",p:2,c:37,f:7,cal:221},
 {n:"sweet bread",p:5,c:48,f:10,cal:301},{n:"black cake",p:4,c:62,f:16,cal:404},
 {n:"pastelle",p:13,c:40,f:18,cal:373},{n:"kurma",p:6,c:62,f:12,cal:375},
 {n:"tamarind ball",p:1,c:22,f:0,cal:95},{n:"toolum",p:1,c:26,f:4,cal:145},
 {n:"sugar cake",p:1,c:25,f:3,cal:133},{n:"coconut drops",p:2,c:26,f:7,cal:175},
 {n:"benne balls",p:3,c:20,f:7,cal:155},{n:"barfi",p:5,c:35,f:10,cal:250},
 {n:"gulab jamun",p:3,c:31,f:7,cal:198},{n:"ladoo",p:4,c:34,f:9,cal:232},
 {n:"sawine",p:4,c:39,f:5,cal:221},{n:"kheer",p:4,c:30,f:5,cal:185},
 // ── FRUITS (per 100g fresh) ───────────────────────────
 {n:"apple",p:0.3,c:14,f:0.2,cal:52},{n:"banana",p:1.1,c:23,f:0.3,cal:89},
 {n:"mango",p:0.8,c:15,f:0.4,cal:60},{n:"pineapple",p:0.5,c:13,f:0.1,cal:50},
 {n:"watermelon",p:0.6,c:8,f:0.2,cal:30},{n:"orange",p:0.9,c:12,f:0.2,cal:47},
 {n:"strawberry",p:0.8,c:8,f:0.3,cal:33},{n:"grapes",p:0.6,c:18,f:0.2,cal:69},
 {n:"pawpaw",p:0.5,c:11,f:0.3,cal:43},{n:"papaya",p:0.5,c:11,f:0.3,cal:43},
 {n:"five fingers",p:0.6,c:7,f:0.1,cal:31},{n:"star fruit",p:0.6,c:7,f:0.1,cal:31},
 {n:"chenette",p:0.8,c:16,f:0.5,cal:73},{n:"guinep",p:0.8,c:16,f:0.5,cal:73},
 {n:"mango chow",p:0.8,c:14,f:0.3,cal:60},{n:"pineapple chow",p:0.5,c:12,f:0.1,cal:48},
 {n:"pommerac",p:0.5,c:8,f:0.3,cal:37},
 // ── DRINKS (per 240ml serving unless noted) ───────────
 {n:"water",p:0,c:0,f:0,cal:0},{n:"coconut water",p:0.7,c:9,f:0.2,cal:40},
 {n:"coca cola",p:0,c:26,f:0,cal:101},{n:"pepsi",p:0,c:28,f:0,cal:100},
 {n:"sprite",p:0,c:26,f:0,cal:96},{n:"7up",p:0,c:26,f:0,cal:96},
 {n:"cola",p:0,c:26,f:0,cal:101},{n:"soda",p:0,c:26,f:0,cal:100},
 {n:"solo",p:0,c:31,f:0,cal:125},{n:"orange juice",p:1.7,c:26,f:0.5,cal:112},
 {n:"apple juice",p:0.5,c:28,f:0.2,cal:114},{n:"mango juice",p:0.5,c:30,f:0.2,cal:122},
 {n:"grapefruit juice",p:1.2,c:23,f:0.2,cal:96},{n:"sorrel",p:0.2,c:20,f:0.1,cal:82},
 {n:"mauby",p:0.2,c:25,f:0,cal:102},{n:"sea moss",p:1,c:22,f:0.5,cal:97},
 {n:"passion fruit juice",p:1,c:25,f:0.4,cal:110},
 {n:"milk",p:3.4,c:4.8,f:3.3,cal:61},{n:"whole milk",p:3.4,c:4.8,f:3.3,cal:61},
 {n:"protein shake",p:25,c:5,f:2,cal:138},{n:"whey protein",p:25,c:5,f:2,cal:138},
 // Alcoholic (per standard serving: beer 355ml, wine 150ml, spirit 44ml)
 {n:"carib beer",p:1.5,c:13,f:0,cal:153},{n:"stag beer",p:1.5,c:13,f:0,cal:153},
 {n:"beer",p:1.5,c:13,f:0,cal:153},{n:"light beer",p:0.9,c:6,f:0,cal:103},
 {n:"red wine",p:0.1,c:3.8,f:0,cal:125},{n:"white wine",p:0.1,c:3.8,f:0,cal:121},
 {n:"wine",p:0.1,c:3.8,f:0,cal:122},{n:"rum",p:0,c:0,f:0,cal:97},
 {n:"whiskey",p:0,c:0,f:0,cal:105},{n:"vodka",p:0,c:0,f:0,cal:97},
 {n:"cocktail",p:0.5,c:15,f:0,cal:150},{n:"punch de creme",p:2,c:14,f:4,cal:100}
];

/* =========================================================
   MEAL IDEAS
   ========================================================= */
const mealIdeas={
 Breakfast:[
  {t:"Saltfish Buljol & Sada Roti",d:"Classic Trini breakfast",m:"P:32 C:58 F:12 | Cal:474"},
  {t:"Doubles (2 slight)",d:"Street food staple",m:"P:26 C:100 F:26 | Cal:738"},
  {t:"Smoke Herring & Coconut Bake",d:"Rich smoked fish + coconut bake",m:"P:30 C:50 F:20 | Cal:508"},
  {t:"Eggs & Hops Bread (3 eggs)",d:"3 scrambled eggs, 2 hops bread",m:"P:39 C:54 F:38 | Cal:714"},
  {t:"Oat Porridge & Banana",d:"Oats, banana, cinnamon",m:"P:9 C:55 F:7 | Cal:319"},
  {t:"Bake & Saltfish",d:"Fried bake + stewed saltfish",m:"P:28 C:48 F:13 | Cal:429"},
  {t:"Cornmeal Porridge",d:"Condensed milk, nutmeg",m:"P:8 C:72 F:8 | Cal:394"},
  {t:"Dhalpuri & Tomato Choka",d:"Soft roti + fire-roasted tomato",m:"P:9 C:57 F:11 | Cal:366"},
  {t:"Protein Smoothie",d:"Whey, oats, banana, sea moss",m:"P:32 C:58 F:6 | Cal:418"},
  {t:"Greek Yogurt & Fruit",d:"Greek yogurt + mango + granola",m:"P:14 C:42 F:3 | Cal:254"}
 ],
 Lunch:[
  {t:"Chicken Pelau",d:"Chicken, pigeon peas, rice",m:"P:40 C:80 F:18 | Cal:642"},
  {t:"Curry Chicken & Dhalpuri",d:"Bone-in curry + dhalpuri roti",m:"P:38 C:88 F:19 | Cal:683"},
  {t:"Stew Chicken & Rice",d:"Rice, red beans, salad",m:"P:42 C:68 F:12 | Cal:556"},
  {t:"Grilled Chicken & Brown Rice",d:"Clean, high protein meal",m:"P:56 C:46 F:7 | Cal:475"},
  {t:"Fish Broth & Provision",d:"King fish, dasheen, dumplings",m:"P:34 C:48 F:8 | Cal:404"},
  {t:"Dhal, Rice & Bhaji",d:"Saffron dhal, spinach, rice",m:"P:14 C:76 F:5 | Cal:409"},
  {t:"Curry Goat & Rice",d:"Boneless goat, rice, coleslaw",m:"P:44 C:68 F:18 | Cal:612"},
  {t:"Salmon & Sweet Potato",d:"Baked salmon + sweet potato",m:"P:44 C:40 F:14 | Cal:466"},
  {t:"Corn Soup (Full Bowl)",d:"Split peas, dumplings, pigtail",m:"P:18 C:50 F:12 | Cal:380"},
  {t:"Lentil Peas & Brown Rice",d:"High-protein vegetarian",m:"P:18 C:74 F:5 | Cal:418"}
 ],
 Dinner:[
  {t:"Grilled Fish & Salad",d:"King fish, fresh greens, no dressing",m:"P:48 C:8 F:10 | Cal:314"},
  {t:"Stew Oxtail & Rice & Peas",d:"Slow-cooked oxtail",m:"P:42 C:58 F:28 | Cal:660"},
  {t:"Oil Down",d:"Breadfruit, pigtail, coconut",m:"P:22 C:72 F:28 | Cal:636"},
  {t:"Geera Chicken (No Carbs)",d:"Dry spiced chicken only",m:"P:64 C:4 F:24 | Cal:490"},
  {t:"Baked Salmon & Steamed Veg",d:"Salmon, broccoli, callaloo",m:"P:50 C:14 F:20 | Cal:440"},
  {t:"Steak & Baked Potato",d:"Sirloin, baked potato, salad",m:"P:52 C:40 F:18 | Cal:526"},
  {t:"Pepper Shrimp & Rice",d:"Trini hot pepper shrimp",m:"P:44 C:54 F:12 | Cal:500"},
  {t:"Coo-Coo & Callaloo",d:"Cornmeal coo-coo, crab callaloo",m:"P:20 C:52 F:16 | Cal:434"},
  {t:"Curry Goat & Roti",d:"Boneless goat, bus up shut",m:"P:46 C:60 F:24 | Cal:636"},
  {t:"KFC (2pc + Fries) — Cheat",d:"Original recipe + small fries",m:"P:42 C:46 F:38 | Cal:690"}
 ],
 Snack:[
  {t:"Doubles (1)",d:"Single doubles—bare or slight",m:"P:14 C:52 F:14 | Cal:390"},
  {t:"Pholourie (6 pieces)",d:"With tamarind sauce",m:"P:8 C:52 F:16 | Cal:384"},
  {t:"Mango Chow",d:"Green mango, pepper, shadow beni",m:"P:2 C:30 F:1 | Cal:137"},
  {t:"Boiled Channa",d:"Lightly salted, high fibre",m:"P:9 C:27 F:3 | Cal:168"},
  {t:"Greek Yogurt (200g)",d:"Plain or with honey",m:"P:20 C:8 F:0.8 | Cal:118"},
  {t:"Coconut Water",d:"Fresh from the nut",m:"P:1 C:18 F:0.4 | Cal:80"},
  {t:"Protein Shake",d:"Whey protein + water or milk",m:"P:25 C:5 F:2 | Cal:138"},
  {t:"Cassava Pone",d:"Dense sweet cassava cake",m:"P:3 C:44 F:8 | Cal:258"},
  {t:"Peanuts (50g)",d:"Salted roasted peanuts",m:"P:13 C:8 F:25 | Cal:290"},
  {t:"Sea Moss Drink",d:"Natural, milk, cinnamon",m:"P:2 C:44 F:1 | Cal:194"}
 ]
};

/* =========================================================
   WORKOUT ROUTINES — Scientifically Optimized
   ACSM/NSCA guidelines + progressive overload framework
   =======================================================*/
const routines={
 male:{
  shred:{// ACSM Fat Loss Protocol: 5 sessions/week, 12-20 reps, 45-60s rest
   1:{focus:"Push — Chest & Shoulders Circuit",warmup:"5 min Jump Rope + 30 Push-Ups",ex:[1001,1002,1004,1008,4001,4002,5002,8001],reps:"12-15",rest:45},
   2:{focus:"Pull — Back & Biceps Circuit",warmup:"5 min Band Rows + Face Pulls",ex:[2001,2002,2003,2008,2006,5001,5014,8002],reps:"12-15",rest:45},
   3:{focus:"Legs — Quad + Cardio Finisher",warmup:"5 min Bike + Leg Swings",ex:[3001,3002,3004,3005,3006,3007,3008,8001],reps:"15-20",rest:45},
   4:{focus:"Upper Power — Compound Focus",warmup:"5 min Rower",ex:[1001,2003,4001,1003,2004,5004,5001,8003],reps:"10-12",rest:60},
   5:{focus:"Lower + HIIT — Full Burn",warmup:"5 min Dynamic Stretches",ex:[3003,3004,3010,3011,3006,6001,8002,701],reps:"12-15",rest:45},
   6:{focus:"Active Recovery — Light Cardio",warmup:"5 min Walk",ex:[8011,8003,8005],reps:"",rest:0},
   0:{focus:"REST DAY — Recover & Refuel",warmup:"Foam roll + 10 min stretch",ex:[]}},
  bulk:{// NSCA Hypertrophy: 5 days, 6-10 reps, 2-3 min rest, progressive overload
   1:{focus:"Chest + Triceps — Heavy",warmup:"5 min Chest Stretch + 20 Push-Ups",ex:[1001,1002,1008,1003,1005,5004,5021,5002],reps:"6-10",rest:180},
   2:{focus:"Back + Biceps — Heavy",warmup:"5 min Rower",ex:[2001,2002,2003,2007,2004,5001,5003,5006],reps:"6-10",rest:180},
   3:{focus:"Legs — Compound Strength",warmup:"5 min Leg Swings + Squats",ex:[3001,3009,3002,3003,3005,3006,3007,6001],reps:"6-8",rest:180},
   4:{focus:"Shoulders + Arms — Hypertrophy",warmup:"5 min Shoulder Rotations",ex:[4001,4007,4002,4008,5001,5013,5004,5007],reps:"8-12",rest:120},
   5:{focus:"Lower — Hinge & Glute Focus",warmup:"5 min Hip Circles",ex:[3003,3010,3004,6001,6005,3007,3006,3014],reps:"8-12",rest:120},
   6:{focus:"Arms + Core Accessory",warmup:"5 min Jump Rope",ex:[5001,5003,5015,5021,6002,6003,6025,6027],reps:"10-12",rest:90},
   0:{focus:"REST DAY — Recover",warmup:"Foam Roll + Stretch",ex:[]}},
  tone:{// ACSM Body Recomposition: 4-5 days, 10-15 reps, 60-90s rest
   1:{focus:"Upper Push — Tone & Define",warmup:"5 min Jumping Jacks",ex:[1001,1002,4001,4007,5021,5002,6002,8001],reps:"10-15",rest:75},
   2:{focus:"Lower Body — Quad Dominant",warmup:"5 min Bike",ex:[3001,3002,3005,3007,3008,6001,8003],reps:"12-15",rest:75},
   3:{focus:"REST / Active Recovery",warmup:"Yoga or 20 min walk",ex:[]},
   4:{focus:"Upper Pull — Back & Biceps",warmup:"5 min Band Pull-Aparts",ex:[2002,2004,2005,4008,2006,5001,5003,8004],reps:"10-15",rest:75},
   5:{focus:"Lower — Hinge & Glutes",warmup:"5 min Stairmaster",ex:[3003,3004,6001,6004,3007,6002,8001],reps:"12-15",rest:75},
   6:{focus:"Cardio + Core",warmup:"5 min Walk",ex:[8001,8002,8003,6002,6024,8005],reps:"",rest:60},
   0:{focus:"REST DAY",warmup:"Rest + Stretching",ex:[]}}
 },
 female:{
  tone:{// Women's Research (Karp et al.): 4-5 days, 12-15 reps, glute emphasis
   1:{focus:"Glutes + Legs — Build & Shape",warmup:"5 min Stairmaster",ex:[6001,6007,6004,3003,3006,3010,1004,8001],reps:"12-15",rest:60},
   2:{focus:"Upper Body — Tone & Tighten",warmup:"5 min Rower",ex:[1004,1006,4002,4007,2010,2008,5002,8003],reps:"12-15",rest:60},
   3:{focus:"REST / Active Recovery",warmup:"Yoga or Light Walk",ex:[]},
   4:{focus:"Quads + Core + Cardio",warmup:"5 min Bike",ex:[3001,3005,3011,3006,3010,6003,8002,8005],reps:"15-20",rest:60},
   5:{focus:"Full Body — Strength + Shape",warmup:"5 min Jumping Jacks",ex:[3003,6001,1006,2005,4001,5007,6005,8001],reps:"12-15",rest:60},
   6:{focus:"Cardio + Stretch",warmup:"5 min Walk",ex:[8001,8003,8011],reps:"",rest:0},
   0:{focus:"REST DAY",warmup:"Rest + Foam Roll",ex:[]}},
  shred:{// Female Fat Loss: 5 days, 15-20 reps, EPOC, glute emphasis
   1:{focus:"Glutes + Lower HIIT",warmup:"5 min Jump Rope",ex:[6001,6007,6004,6012,3004,8002,701],reps:"15-20",rest:45},
   2:{focus:"Upper Body + Cardio",warmup:"5 min Rower",ex:[1004,1006,4002,2004,5002,5001,8003,8004],reps:"15-20",rest:45},
   3:{focus:"Legs + Core Circuit",warmup:"5 min Dynamic Stretches",ex:[3001,3004,3006,3007,6001,6022,8002,8005],reps:"15-20",rest:45},
   4:{focus:"Full Body Burn",warmup:"5 min Bike",ex:[2003,1001,3003,4002,6001,6002,8001,701],reps:"12-15",rest:45},
   5:{focus:"Core + Glutes Finisher",warmup:"5 min Plank Series",ex:[6001,6007,6002,6003,6024,6010,8004,8005],reps:"15-20",rest:45},
   6:{focus:"Cardio — LISS or HIIT",warmup:"5 min Walk",ex:[8001,8002,8003,8006,8015],reps:"",rest:0},
   0:{focus:"REST DAY",warmup:"Rest + Stretch",ex:[]}},
  bulk:{// Female Strength: 4-5 days, 8-12 reps, heavy compound
   1:{focus:"Lower Heavy — Squat Dominant",warmup:"5 min Leg Swings + Glute Bridges",ex:[3001,3002,6001,3003,3005,3006,3007,6005],reps:"8-12",rest:150},
   2:{focus:"Upper Push — Strength",warmup:"5 min Chest Stretch",ex:[1001,1002,1003,4001,4007,5021,5004,8001],reps:"8-12",rest:120},
   3:{focus:"REST / Active Recovery",warmup:"10 min walk + stretch",ex:[]},
   4:{focus:"Lower Heavy — Hinge + Glutes",warmup:"5 min Hip Circles",ex:[3003,3004,6001,6004,3010,3011,6005,3006],reps:"8-12",rest:150},
   5:{focus:"Upper Pull — Strength",warmup:"5 min Band Rows",ex:[2001,2002,2003,2004,2009,5001,5006,8003],reps:"8-12",rest:120},
   6:{focus:"Arms + Core",warmup:"5 min Jump Rope",ex:[5001,5003,5021,5007,6002,6003,6026,8005],reps:"10-12",rest:90},
   0:{focus:"REST DAY",warmup:"Foam Roll + Stretch",ex:[]}}
 }
};

/* =========================================================
   APP STATE
   ========================================================= */
let users=[],activeUserIndex=0,timerInterval=null,
    currentTimerVal=0,currentUnit='kg',currentExId=null,progressWeekOffset=0;

/* =========================================================
   CALORIE BURN — MET-BASED (Scientific)
   Formula: MET × weight(kg) × time(hours) = kcal
   ========================================================= */
function getUserWeight(){return(users[activeUserIndex]?.bodyWeight)||75;}

function calculateCalsBurned(u,dateStr){
 const w=u.bodyWeight||75;
 const entries=u.history.filter(h=>new Date(h.date).toDateString()===dateStr);
 let total=0;
 entries.forEach(h=>{
  if(h.isCardio){
   total+=parseInt(h.calBurned)||0;
  }else{
   const ex=exerciseDB.find(e=>e.id===h.exId);
   if(ex){
    const met=MUSCLE_MET[ex.muscle]||4.0;
    // 3 minutes per set (set duration + short rest within set)
    total+=Math.round(met*w*(3/60));
   }
  }
 });
 return Math.round(total);
}

function estimateCardioCalories(exId,durationMin){
 const w=getUserWeight();
 const met=CARDIO_MET[exId]||8.0;
 return Math.round(met*w*(durationMin/60));
}

/* =========================================================
   PROGRESSIVE OVERLOAD ANALYSIS
   ========================================================= */
function getProgressionInfo(exId,u){
 const h=u.history.filter(x=>x.exId===exId&&!x.isCardio);
 if(h.length===0)return{tip:"💪 First session — focus on form over weight.",pr:null};
 const sorted=[...h].sort((a,b)=>new Date(b.date)-new Date(a.date));
 const lastW=parseFloat(sorted[0].weight)||0;
 const lastR=parseInt(sorted[0].reps)||0;
 // Find PR
 const prEntry=h.reduce((best,x)=>{
  const vol=(parseFloat(x.weight)||0)*(parseInt(x.reps)||0);
  return vol>(parseFloat(best.weight)||0)*(parseInt(best.reps)||0)?x:best;
 },h[0]);
 const prVol=(parseFloat(prEntry.weight)||0)*(parseInt(prEntry.reps)||0);
 const currentVol=lastW*lastR;
 const isNewPR=currentVol>=prVol;
 // Sessions this week for this exercise
 const weekAgo=new Date(); weekAgo.setDate(weekAgo.getDate()-7);
 const recentSessions=h.filter(x=>new Date(x.date)>weekAgo).length;
 let tip='';
 if(recentSessions>=2&&lastR>=12){
  const inc=currentUnit==='kg'?2.5:5;
  tip=`💡 Ready to progress! Try ${(lastW+inc).toFixed(1)}${currentUnit} today.`;
 }else{
  tip=`📊 Last: ${lastW}${currentUnit} × ${lastR} reps`;
 }
 return{tip,pr:isNewPR?`🏆 PR: ${prVol.toFixed(0)} vol`:null};
}

/* =========================================================
   BMI CALCULATOR
   ========================================================= */
function calcBMI(){
 const u=users[activeUserIndex];
 const heightUnit=document.querySelector('input[name="height-unit"]:checked')?.value||'cm';
 const weightUnit=document.getElementById('bmi-weight-unit')?.value||'kg';
 const sex=u.gender||'male';
 const age=parseInt(document.getElementById('bmi-age').value)||30;
 let weightKg=parseFloat(document.getElementById('bmi-weight-val').value)||0;
 let heightCm=0;
 if(heightUnit==='cm'){
  heightCm=parseFloat(document.getElementById('bmi-height-cm').value)||0;
 }else{
  const ft=parseFloat(document.getElementById('bmi-height-ft').value)||0;
  const inches=parseFloat(document.getElementById('bmi-height-in').value)||0;
  heightCm=(ft*12+inches)*2.54;
 }
 if(weightUnit==='lbs') weightKg=weightKg*0.4536;
 if(!weightKg||!heightCm){alert("Enter height and weight.");return;}
 const h=heightCm/100;
 const bmi=weightKg/(h*h);
 let cat='',catColor='';
 if(bmi<16){cat='Severely Underweight';catColor='#e74c3c';}
 else if(bmi<18.5){cat='Underweight';catColor='#e67e22';}
 else if(bmi<25){cat='Normal Weight ✅';catColor='#2ecc71';}
 else if(bmi<30){cat='Overweight';catColor='#f39c12';}
 else if(bmi<35){cat='Obese Class I';catColor='#e74c3c';}
 else if(bmi<40){cat='Obese Class II';catColor='#c0392b';}
 else{cat='Obese Class III';catColor='#922b21';}
 // Mifflin-St Jeor BMR
 const bmr=sex==='male'
  ?10*weightKg+6.25*heightCm-5*age+5
  :10*weightKg+6.25*heightCm-5*age-161;
 const tdee=bmr*1.55; // moderate activity
 // Ideal weight range (BMI 18.5-24.9)
 const idealLow=Math.round(18.5*h*h); const idealHigh=Math.round(24.9*h*h);
 document.getElementById('bmi-result').innerHTML=`
  <div class="bmi-result-card">
   <div style="text-align:center;margin-bottom:12px">
    <span style="font-size:2.5rem;font-weight:bold;color:${catColor}">${bmi.toFixed(1)}</span>
    <div style="color:${catColor};font-weight:bold;margin-top:4px">${cat}</div>
   </div>
   <div class="bmi-grid">
    <div class="bmi-stat"><b>${Math.round(bmr)}</b><small>BMR (kcal)</small></div>
    <div class="bmi-stat"><b>${Math.round(tdee)}</b><small>TDEE (kcal)</small></div>
    <div class="bmi-stat"><b>${idealLow}-${idealHigh}</b><small>Ideal Wt (kg)</small></div>
    <div class="bmi-stat"><b>${heightCm.toFixed(0)}cm</b><small>Height</small></div>
   </div>
  </div>`;
 // Save to user profile
 u.bmi={bmi:parseFloat(bmi.toFixed(1)),category:cat,bmr:Math.round(bmr),tdee:Math.round(tdee),heightCm,weightKg:parseFloat(weightKg.toFixed(1)),age};
 saveData();
}

function toggleHeightUnit(unit){
 document.getElementById('height-cm-wrap').style.display=unit==='cm'?'block':'none';
 document.getElementById('height-ft-wrap').style.display=unit==='ft'?'flex':'none';
}

/* =========================================================
   WEIGHT TRACKER
   ========================================================= */
function saveBodyWeight(){
 const u=users[activeUserIndex];
 const w=parseFloat(document.getElementById('body-weight-val')?.value)||0;
 const unit=document.getElementById('body-weight-unit')?.value||'kg';
 if(!w){alert("Enter your weight.");return;}
 if(!u.weightLog)u.weightLog=[];
 const today=new Date().toISOString().split('T')[0];
 u.weightLog=u.weightLog.filter(x=>x.date!==today);
 u.weightLog.push({date:today,weight:w,unit});
 u.bodyWeight=unit==='lbs'?w*0.4536:w;
 u.bodyWeightDisplay=w; u.bodyWeightUnit=unit;
 saveData(); updateUI(); closeWeightModal();
 alert(`✅ Weight saved: ${w}${unit}`);
}

function closeWeightModal(){document.getElementById('weight-modal').style.display='none';}
function openWeightModal(){
 const u=users[activeUserIndex];
 const bwi=document.getElementById('body-weight-val');
 if(bwi&&u.bodyWeightDisplay) bwi.value=u.bodyWeightDisplay;
 document.getElementById('weight-modal').style.display='flex';
}

function checkWeightReminder(){
 const u=users[activeUserIndex];
 if(!u.weightLog||u.weightLog.length===0) return;
 const lastEntry=u.weightLog[u.weightLog.length-1];
 const lastDate=new Date(lastEntry.date);
 const now=new Date();
 const daysSince=Math.floor((now-lastDate)/(1000*60*60*24));
 if(daysSince>=7){
  // Show reminder
  const banner=document.getElementById('weight-reminder');
  if(banner) banner.style.display='flex';
 }
}

/* =========================================================
   SVG DUAL-LINE CHART (Volume + Calories Burned)
   ========================================================= */
function buildWeeklyChartSVG(u){
 const W=308,H=130,PL=40,PR=36,PT=14,PB=22;
 const plotW=W-PL-PR,plotH=H-PT-PB;
 const VOL_MAX=50000,CAL_MAX=5000;
 const now=new Date();
 const data=[];
 for(let i=6;i>=0;i--){
  const d=new Date();d.setDate(now.getDate()-i);
  const ds=d.toDateString();
  const h=u.history.filter(x=>new Date(x.date).toDateString()===ds);
  const vol=h.filter(x=>!x.isCardio).reduce((a,x)=>a+(parseFloat(x.weight)||0)*(parseFloat(x.reps)||0),0);
  const cal=calculateCalsBurned(u,ds);
  data.push({date:d,vol,cal,isToday:(i===0)});
 }
 const xOf=i=>PL+i*(plotW/6);
 const yV=v=>PT+plotH-Math.min(Math.max(v,0)/VOL_MAX,1)*plotH;
 const yC=c=>PT+plotH-Math.min(Math.max(c,0)/CAL_MAX,1)*plotH;
 function bez(pts){
  if(pts.length<2)return'';
  let s=`M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  const sx=plotW/6;
  for(let i=1;i<pts.length;i++){
   const c1x=pts[i-1][0]+sx*0.3,c1y=pts[i-1][1];
   const c2x=pts[i][0]-sx*0.3,c2y=pts[i][1];
   s+=` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${pts[i][0].toFixed(1)},${pts[i][1].toFixed(1)}`;
  }
  return s;
 }
 const vPts=data.map((d,i)=>[xOf(i),yV(d.vol)]);
 const cPts=data.map((d,i)=>[xOf(i),yC(d.cal)]);
 const vPath=bez(vPts);const cPath=bez(cPts);
 const bottom=PT+plotH;
 const areaV=`${vPath} L${vPts[6][0].toFixed(1)},${bottom} L${vPts[0][0].toFixed(1)},${bottom}Z`;
 // Grid lines
 let grid='';for(let i=0;i<=5;i++){const y=(PT+plotH*(i/5)).toFixed(1);grid+=`<line x1="${PL}" y1="${y}" x2="${PL+plotW}" y2="${y}" stroke="#1c1c1c" stroke-width="0.8"/>`;}
 // Left labels (volume)
 let lbl='';[0,10,20,30,40,50].forEach(v=>{const y=yV(v*1000).toFixed(1);lbl+=`<text x="${PL-4}" y="${(parseFloat(y)+3).toFixed(1)}" fill="#5b8dd9" font-size="6.5" text-anchor="end" font-family="sans-serif">${v===0?'0':v+'k'}</text>`;});
 // Right labels (cal)
 let rlbl='';[0,1,2,3,4,5].forEach(v=>{const y=yC(v*1000).toFixed(1);rlbl+=`<text x="${PL+plotW+3}" y="${(parseFloat(y)+3).toFixed(1)}" fill="#e67e22" font-size="6.5" text-anchor="start" font-family="sans-serif">${v===0?'0':v+'k'}</text>`;});
 // Day dots + labels
 let dots='';
 data.forEach((d,i)=>{
  const dl=['S','M','T','W','T','F','S'][d.date.getDay()];
  const x=xOf(i).toFixed(1);
  const bold=d.isToday?'bold':'normal';
  const lc=d.isToday?'#E6C288':'#555';
  dots+=`<circle cx="${x}" cy="${yV(d.vol).toFixed(1)}" r="${d.isToday?4:2.8}" fill="#5b8dd9" stroke="#0a0a0a" stroke-width="1.5"/>`;
  dots+=`<circle cx="${x}" cy="${yC(d.cal).toFixed(1)}" r="${d.isToday?4:2.8}" fill="#e67e22" stroke="#0a0a0a" stroke-width="1.5"/>`;
  dots+=`<text x="${x}" y="${H-3}" fill="${lc}" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="${bold}">${dl}</text>`;
 });
 return`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;overflow:visible">
  <defs><linearGradient id="vg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5b8dd9" stop-opacity="0.18"/><stop offset="100%" stop-color="#5b8dd9" stop-opacity="0.02"/></linearGradient></defs>
  ${grid}${lbl}${rlbl}
  <text x="${PL}" y="${PT-2}" fill="#5b8dd9" font-size="7" font-family="sans-serif" font-weight="600">Vol</text>
  <text x="${PL+5}" y="${PT+7}" fill="#5b8dd9" font-size="5.5" font-family="sans-serif">(kg/lb)</text>
  <text x="${PL+plotW}" y="${PT-2}" fill="#e67e22" font-size="7" font-family="sans-serif" font-weight="600" text-anchor="end">🔥Cal</text>
  <path d="${areaV}" fill="url(#vg)" stroke="none"/>
  <path d="${vPath}" fill="none" stroke="#5b8dd9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="${cPath}" fill="none" stroke="#e67e22" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  ${dots}
 </svg>`;
}

/* =========================================================
   INIT
   ========================================================= */
function enterArena(){
 document.getElementById('splash-screen').style.display='none';
 document.getElementById('app-container').style.display='flex';
 initApp();
}
function initApp(){
 try{
  const s=localStorage.getItem('spartanUsers');
  if(s){
   users=JSON.parse(s);
   const u=users[activeUserIndex];
   if(!u.nutritionLogs)u.nutritionLogs=[];
   if(!u.completedToday)u.completedToday=[];
   if(!u.missedDays)u.missedDays=[];
   if(!u.weightLog)u.weightLog=[];
   if(!u.goal)u.goal='shred';
  }else{createDefaultUser();}
  updateUI();
  setTimeout(checkWeightReminder,1000);
 }catch(e){createDefaultUser();updateUI();}
}
function createDefaultUser(){
 users=[{id:Date.now(),name:"Warrior",trainerMode:false,gender:'male',
  goal:'shred',history:[],nutritionLogs:[],completedToday:[],missedDays:[],weightLog:[],bodyWeight:75,bodyWeightDisplay:75,bodyWeightUnit:'kg'}];
 saveData();
}

/* =========================================================
   UI UPDATE
   ========================================================= */
function updateUI(){
 const u=users[activeUserIndex];
 document.getElementById('current-user-name').innerText=u.name;
 const mb=document.getElementById('top-left-menu');
 if(u.trainerMode){mb.style.opacity="1";mb.style.pointerEvents="auto";document.getElementById('trainer-caret').style.display="inline";}
 else{mb.style.opacity="0.5";mb.style.pointerEvents="none";document.getElementById('trainer-caret').style.display="none";}
 const t=new Date().toDateString();
 if(u.lastLogin!==t){u.completedToday=[];u.lastLogin=t;saveData();}
 const logs=u.nutritionLogs.filter(l=>new Date(l.date).toDateString()===t);
 const calIn=logs.reduce((a,b)=>a+(parseInt(b.cal)||0),0);
 const calBurn=calculateCalsBurned(u,t);
 const setsToday=u.history.filter(h=>new Date(h.date).toDateString()===t).length;
 document.getElementById('cal-display').innerText=calIn;
 document.getElementById('workout-count').innerText=setsToday;
 document.getElementById('cal-burn-display').innerText=calBurn;
 // Weight display
 const wDisp=document.getElementById('weight-display');
 if(wDisp) wDisp.innerText=u.bodyWeightDisplay?`${u.bodyWeightDisplay}${u.bodyWeightUnit||'kg'}`:'--';
 // Chart
 const chartEl=document.getElementById('weekly-chart-svg');
 if(chartEl) chartEl.innerHTML=buildWeeklyChartSVG(u);
 // Missed btn
 const isMissed=(u.missedDays||[]).includes(t);
 const btn=document.getElementById('missed-day-btn');
 if(btn){btn.innerText=isMissed?'✅ Missed Today (Tap to undo)':'☐ Mark Today as Missed — Rollover tomorrow';btn.style.color=isMissed?'#2ecc71':'#888';}
 // Profile fields
 document.getElementById('p-name').value=u.name;
 document.getElementById('p-gender').value=u.gender;
 document.getElementById('p-goal').value=u.goal;
 document.getElementById('p-trainer-mode').checked=u.trainerMode||false;
 // BMI display
 const bmiDisp=document.getElementById('bmi-display-val');
 if(bmiDisp&&u.bmi) bmiDisp.innerText=u.bmi.bmi;
 loadDailyRoutine(u);
}

/* =========================================================
   DAILY ROUTINE + AD-HOC + ROLLOVER
   ========================================================= */
function loadDailyRoutine(u){
 const d=new Date().getDay();
 document.getElementById('day-display').innerText=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d];
 const gender=u.gender||'male';
 const goal=u.goal||'shred';
 const gR=routines[gender]||routines.male;
 const gP=gR[goal]||gR[Object.keys(gR)[0]];
 const plan=gP[d]||{focus:'Rest',warmup:'Stretch',ex:[]};
 document.getElementById('focus-display').innerText=plan.focus;
 if(plan.reps) document.getElementById('focus-display').innerText+=` (${plan.reps} reps, ${plan.rest}s rest)`;
 const l=document.getElementById('todays-routine-list');l.innerHTML='';
 if(plan.warmup){l.innerHTML+=`<div style="background:#222;padding:10px;margin-bottom:10px;border-left:3px solid orange;border-radius:5px;"><strong style="color:orange">🔥 WARM UP:</strong><br><span style="color:#ddd;font-size:0.9rem">${plan.warmup}</span></div>`;}
 // Rollover check
 const yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);
 const yStr=yesterday.toDateString();
 if((u.missedDays||[]).includes(yStr)){
  const yDay=yesterday.getDay();const rPlan=gP[yDay];
  if(rPlan&&rPlan.ex&&rPlan.ex.length>0){
   l.innerHTML+=`<div style="background:#1a0e00;border:1px solid #f39c12;border-radius:8px;padding:10px;margin-bottom:10px;"><p style="color:#f39c12;margin:0 0 4px;font-weight:bold;font-size:0.9rem">⚠️ ROLLOVER: ${rPlan.focus}</p><p style="color:#888;font-size:0.75rem;margin:0">Missed yesterday — add these to today</p></div>`;
   rPlan.ex.forEach(id=>{const ex=exerciseDB.find(e=>e.id===id);if(!ex)return;l.innerHTML+=`<div class="routine-item" style="border-left:3px solid #f39c12;opacity:0.85;cursor:pointer" onclick="openTracker(${id})"><div style="flex:1"><b>${ex.name}</b> <span style="color:#f39c12;font-size:0.7rem">ROLLOVER</span><br><small style="color:#aaa">${ex.muscle}</small></div></div>`;});
   l.innerHTML+=`<div style="border-bottom:1px dashed #333;margin:10px 0"></div>`;
  }
 }
 if(!plan.ex||plan.ex.length===0){l.innerHTML+=`<div style="text-align:center;padding:30px;color:#2ecc71;font-size:1rem">💤 REST DAY — EAT, SLEEP, RECOVER</div>`;return;}
 const t=new Date().toDateString();
 plan.ex.forEach((id,i)=>{
  const ex=exerciseDB.find(e=>e.id===id);if(!ex)return;
  const cls=i<3?"major-ex":(i>=6?"core-ex":"minor-ex");
  const c=u.completedToday&&u.completedToday.includes(id);
  const sets=u.history.filter(h=>h.exId===id&&new Date(h.date).toDateString()===t).length;
  l.innerHTML+=`<div class="routine-item ${cls}"><div style="flex:1" onclick="openTracker(${id})"><b>${ex.name}</b>${sets>0?` <span style="color:#2ecc71;font-size:0.7rem">${sets} set${sets>1?'s':''}</span>`:''}<br><small style="color:#aaa">${ex.muscle}</small></div><div class="check-container" onclick="toggleComplete(${id})"><div class="custom-checkbox ${c?'checked':''}"><i class="fas fa-check" style="display:${c?'block':'none'};color:black;font-size:12px"></i></div></div></div>`;
 });
 // Ad-hoc exercises
 const todayH=u.history.filter(h=>new Date(h.date).toDateString()===t);
 const routineIds=new Set(plan.ex||[]);
 const adHocIds=[...new Set(todayH.filter(h=>!routineIds.has(h.exId)).map(h=>h.exId))];
 if(adHocIds.length>0){
  l.innerHTML+=`<div style="margin-top:12px;padding-top:10px;border-top:1px dashed #333"><p style="color:#888;font-size:0.8rem;margin-bottom:6px"><i class="fas fa-plus-circle" style="color:#2ecc71"></i> EXTRA WORK TODAY</p></div>`;
  adHocIds.forEach(id=>{
   const ex=exerciseDB.find(e=>e.id===id);if(!ex)return;
   const sets=todayH.filter(h=>h.exId===id).length;
   const c=u.completedToday&&u.completedToday.includes(id);
   l.innerHTML+=`<div class="routine-item minor-ex"><div style="flex:1" onclick="openTracker(${id})"><b>${ex.name}</b> <span style="color:#2ecc71;font-size:0.7rem">${sets} set${sets>1?'s':''} logged</span><br><small style="color:#aaa">${ex.muscle}</small></div><div class="check-container" onclick="toggleComplete(${id})"><div class="custom-checkbox ${c?'checked':''}"><i class="fas fa-check" style="display:${c?'block':'none'};color:black;font-size:12px"></i></div></div></div>`;
  });
 }
}

function markMissedDay(){
 const u=users[activeUserIndex];if(!u.missedDays)u.missedDays=[];
 const t=new Date().toDateString();
 if(u.missedDays.includes(t))u.missedDays=u.missedDays.filter(d=>d!==t);
 else u.missedDays.push(t);
 saveData();updateUI();
}

/* =========================================================
   EXERCISE TRACKER MODAL
   ========================================================= */
function openTracker(id){
 currentExId=id;
 const ex=exerciseDB.find(e=>e.id===id);if(!ex)return;
 const isCardio=CARDIO_IDS.includes(id);
 document.getElementById('tracker-modal').style.display='flex';
 document.getElementById('m-title').innerText=ex.name;
 document.getElementById('m-desc').innerText=ex.desc;
 document.getElementById('strength-fields').style.display=isCardio?'none':'block';
 document.getElementById('cardio-fields').style.display=isCardio?'block':'none';
 document.getElementById('unit-toggle-row').style.display=isCardio?'none':'flex';
 document.getElementById('rest-timer-btn').style.display=isCardio?'none':'block';
 document.getElementById('log-btn').innerText=isCardio?'🏃 LOG SESSION':'+ LOG SET';
 // Progression info
 const u=users[activeUserIndex];
 if(!isCardio){
  const pi=getProgressionInfo(id,u);
  document.getElementById('m-prog-tip').innerText=pi.tip;
  document.getElementById('m-pr-badge').innerText=pi.pr||'';
  document.getElementById('m-pr-badge').style.display=pi.pr?'block':'none';
 }else{
  document.getElementById('m-prog-tip').innerText='Enter duration to see calorie estimate.';
  document.getElementById('m-pr-badge').style.display='none';
 }
 // History
 const t=new Date().toDateString();
 const todays=u.history.filter(h=>h.exId===id&&new Date(h.date).toDateString()===t);
 let h='';
 todays.forEach((s,i)=>{
  if(s.isCardio)h+=`<div class="history-item"><span>🏃 ${s.duration} min${s.calBurned?' | '+s.calBurned+' cal burned':''}</span><button class="delete-set-btn" onclick="deleteSet('${s.uniqueId}')"><i class="fas fa-trash"></i></button></div>`;
  else h+=`<div class="history-item"><span>Set ${i+1}: ${s.weight}${currentUnit} × ${s.reps} reps</span><button class="delete-set-btn" onclick="deleteSet('${s.uniqueId}')"><i class="fas fa-trash"></i></button></div>`;
 });
 document.getElementById('sets-history').innerHTML=h||"<small style='color:#555;padding:8px;display:block'>No entries logged today yet</small>";
}

function estimateCardioCal(){
 const dur=parseFloat(document.getElementById('log-duration').value)||0;
 if(!dur||!currentExId)return;
 const est=estimateCardioCalories(currentExId,dur);
 document.getElementById('cardio-est').innerText=`Estimated: ~${est} cal (${getUserWeight()}kg person)`;
 const calField=document.getElementById('log-cardio-cal');
 if(!calField.value) calField.placeholder=`${est} (auto-estimated)`;
}

function saveSet(){
 const isCardio=CARDIO_IDS.includes(currentExId);
 const uid=Date.now().toString()+Math.floor(Math.random()*1000);
 const u=users[activeUserIndex];
 if(isCardio){
  const dur=document.getElementById('log-duration').value;
  if(!dur)return alert("Enter duration in minutes.");
  let cal=parseInt(document.getElementById('log-cardio-cal').value)||0;
  if(!cal) cal=estimateCardioCalories(currentExId,parseFloat(dur));
  u.history.push({uniqueId:uid,date:new Date().toISOString(),exId:currentExId,duration:dur,calBurned:cal,isCardio:true});
 }else{
  const w=document.getElementById('log-w').value,r=document.getElementById('log-r').value;
  if(!w||!r)return alert("Enter weight and reps.");
  u.history.push({uniqueId:uid,date:new Date().toISOString(),exId:currentExId,weight:w,reps:r});
 }
 saveData();openTracker(currentExId);updateUI();
}

function deleteSet(uid){
 if(!confirm("Delete this entry?"))return;
 users[activeUserIndex].history=users[activeUserIndex].history.filter(h=>h.uniqueId!==uid);
 saveData();openTracker(currentExId);updateUI();
}

function toggleComplete(id){
 const u=users[activeUserIndex];
 if(u.completedToday.includes(id))u.completedToday=u.completedToday.filter(x=>x!==id);
 else{u.completedToday.push(id);startRestTimer(120,"REST — NEXT EXERCISE");}
 saveData();updateUI();
}
function closeModal(){document.getElementById('tracker-modal').style.display='none';}

/* =========================================================
   REST TIMER
   ========================================================= */
function startRestTimer(sec,lbl){
 clearInterval(timerInterval);currentTimerVal=sec;
 document.getElementById('rest-overlay').style.display='flex';
 document.getElementById('timer-label').innerText=lbl;
 document.getElementById('timer-countdown').innerText=fmtTime(sec);
 timerInterval=setInterval(()=>{currentTimerVal--;document.getElementById('timer-countdown').innerText=fmtTime(currentTimerVal);if(currentTimerVal<=0){stopTimer();if(navigator.vibrate)navigator.vibrate([300,100,300]);playBeep();}},1000);
}
function stopTimer(){clearInterval(timerInterval);document.getElementById('rest-overlay').style.display='none';}
function fmtTime(s){const m=Math.floor(s/60),sec=s%60;return`${m}:${sec<10?'0'+sec:sec}`;}
function playBeep(){try{const c=new(window.AudioContext||window.webkitAudioContext)();const o=c.createOscillator();o.connect(c.destination);o.frequency.value=880;o.type='sine';o.start();setTimeout(()=>o.stop(),600);}catch(e){}}
function setUnit(u){currentUnit=u;document.getElementById('unit-kg').className=u==='kg'?'unit-opt active':'unit-opt';document.getElementById('unit-lbs').className=u==='lbs'?'unit-opt active':'unit-opt';document.getElementById('weight-label').innerText=`Weight (${u.toUpperCase()})`;if(currentExId)openTracker(currentExId);}

/* =========================================================
   NUTRITION — ACCURATE SMART PARSER
   Handles size modifiers: small/medium/large + portion types
   ========================================================= */
function autoFillMacros(){
 const raw=document.getElementById('food-name').value.toLowerCase().trim();
 if(!raw)return alert("Type a food name first.");
 const parts=raw.split(/\s*[+&]\s*/).map(p=>p.trim()).filter(p=>p.length>0);
 let tP=0,tC=0,tF=0,tCal=0,found=[],missed=[];
 parts.forEach(part=>{
  const r=parseFoodPart(part);
  if(r.found){tP+=r.p;tC+=r.c;tF+=r.f;tCal+=r.cal;found.push(r.label);}
  else missed.push(part);
 });
 if(found.length>0){
  document.getElementById('m-prot').value=Math.round(tP);
  document.getElementById('m-carb').value=Math.round(tC);
  document.getElementById('m-fat').value=Math.round(tF);
  document.getElementById('m-cal').value=Math.round(tCal);
  if(missed.length>0)alert(`✅ Found: ${found.join(' + ')}\n\n⚠️ Not found: ${missed.join(', ')}\nAdjust those manually.`);
 }else{alert(`None recognised.\nTry: chicken, white rice, doubles, stew chicken, salmon...\nSupports: 2 small pieces of chicken, 1lb rice, 200g beef, 1 cup milk`);}
}

function parseFoodPart(raw){
 let part=raw.trim().toLowerCase();
 let qty=1,sizeMul=1;

 // 1. Extract leading number (e.g. "2", "0.5", "1.5")
 const numM=part.match(/^(\d+\.?\d*)\s*/);
 if(numM&&parseFloat(numM[1])<=50){qty=parseFloat(numM[1]);part=part.slice(numM[0].length).trim();}

 // 2. Extract size word (e.g. small, large, medium)
 for(const[key,val]of Object.entries(SIZE_MAP)){
  if(part.startsWith(key+' ')||part===key){sizeMul=val;part=part.slice(key.length).trim();break;}
 }

 // 3. Extract unit/portion type + determine grams multiplier
 let unitMul=1;
 // Weight units
 const lbM=part.match(/^lbs?\s+(.+)/);
 const kgM=part.match(/^kg\s+(.+)/);
 const gM=part.match(/^(\d+\.?\d*)\s*g(?:rams?)?\s+(.+)/);
 if(lbM){unitMul=453.6/100;part=lbM[1];}
 else if(kgM){unitMul=1000/100;part=kgM[1];}
 else if(gM){unitMul=parseFloat(gM[1])/100;part=gM[2];}
 else{
  // Check solid portion words
  for(const[pw,grams]of Object.entries(PORTION_SOLID)){
   const re=new RegExp(`^(${pw}s?\\s+of\\s+|${pw}s?\\s+)`);
   if(re.test(part)){unitMul=grams/100;part=part.replace(re,'').trim();break;}
  }
  // Check liquid portions
  for(const[pw,ml]of Object.entries(PORTION_LIQUID_ML)){
   const re=new RegExp(`^(${pw}s?\\s+of\\s+|${pw}s?\\s+)`);
   if(re.test(part)){unitMul=ml/240; // normalise to 240ml serving
    part=part.replace(re,'').trim();break;}
  }
 }

 // 4. Remove remaining noise words
 part=part.replace(/^(a |an |the |of |some )/g,'').trim();

 // 5. Search food DB
 const totalMul=qty*sizeMul*unitMul;
 let f=foodLibrary.find(x=>x.n===part);
 if(!f)f=foodLibrary.find(x=>part.includes(x.n)&&x.n.length>3);
 if(!f)f=foodLibrary.find(x=>x.n.includes(part)&&part.length>3);
 if(!f){const ws=part.split(/\s+/).filter(w=>w.length>=3);for(const w of ws){f=foodLibrary.find(x=>x.n.includes(w)||w.includes(x.n));if(f)break;}}

 if(f)return{found:true,label:raw,p:f.p*totalMul,c:f.c*totalMul,f:f.f*totalMul,cal:f.cal*totalMul};
 return{found:false};
}

function logMeal(){
 const n=document.getElementById('food-name').value;
 if(!n)return alert("Enter a food name.");
 users[activeUserIndex].nutritionLogs.push({
  id:Date.now(),date:new Date().toISOString(),
  type:document.getElementById('meal-type').value,name:n,
  p:parseInt(document.getElementById('m-prot').value)||0,
  c:parseInt(document.getElementById('m-carb').value)||0,
  f:parseInt(document.getElementById('m-fat').value)||0,
  cal:parseInt(document.getElementById('m-cal').value)||0
 });
 saveData();updateUI();updateMacrosDisplay();
 ['food-name','m-prot','m-carb','m-fat','m-cal'].forEach(id=>document.getElementById(id).value='');
}

function updateMacrosDisplay(){
 const u=users[activeUserIndex],t=new Date().toDateString();
 const l=u.nutritionLogs.filter(x=>new Date(x.date).toDateString()===t);
 let h='',tp=0,tc=0,tf=0,tcal=0;
 l.forEach(x=>{tp+=x.p;tc+=x.c;tf+=x.f;tcal+=x.cal;
  h+=`<div class="meal-log-item"><div class="meal-log-details"><b>${x.type}:</b> ${x.name} <span style="color:#E6C288">(${x.cal} cal)</span></div><button class="delete-meal-btn" onclick="deleteMeal(${x.id})"><i class="fas fa-trash"></i></button></div>`;
 });
 document.getElementById('macro-display').innerHTML=`<div style="display:flex;justify-content:space-around;background:#222;padding:12px;border-radius:8px;margin-bottom:10px"><span style="color:#3498db;font-weight:bold">P:${tp}g</span><span style="color:#2ecc71;font-weight:bold">C:${tc}g</span><span style="color:#e74c3c;font-weight:bold">F:${tf}g</span><span style="color:#E6C288;font-weight:bold">${tcal} cal</span></div>`;
 document.getElementById('meal-log-list').innerHTML=h||"<p style='color:#555;text-align:center'>No meals logged today.</p>";
}
function deleteMeal(id){if(!confirm("Remove?"))return;users[activeUserIndex].nutritionLogs=users[activeUserIndex].nutritionLogs.filter(l=>l.id!==id);saveData();updateUI();updateMacrosDisplay();}
function filterMeals(t){const c=document.getElementById('meal-prep-container');c.innerHTML='';(mealIdeas[t]||[]).forEach(i=>{c.innerHTML+=`<div class="meal-prep-card"><b>${i.t}</b><br><small style="color:#aaa">${i.d}</small><br><span style="color:#E6C288;font-size:11px">${i.m}</span></div>`;});}
function showNutriTab(t){document.getElementById('nutri-track-view').style.display=t==='track'?'block':'none';document.getElementById('nutri-ideas-view').style.display=t==='ideas'?'block':'none';if(t==='track')updateMacrosDisplay();if(t==='ideas')filterMeals('Breakfast');}

/* =========================================================
   LIBRARY — 2-Column grid, grouped + sorted
   ========================================================= */
function filterLibrary(){
 const t=document.getElementById('search-ex').value.toLowerCase();
 const l=document.getElementById('library-list');l.innerHTML='';
 let results=exerciseDB.filter(e=>e.name.toLowerCase().includes(t)||e.muscle.toLowerCase().includes(t));
 if(!results.length){l.innerHTML="<p style='color:#555;text-align:center;padding:20px'>No exercises found.</p>";return;}
 const muscleOrder=['Chest','Back','Shoulders','Legs','Glutes','Biceps','Triceps','Core','Cardio'];
 results.sort((a,b)=>{const ai=muscleOrder.indexOf(a.muscle),bi=muscleOrder.indexOf(b.muscle);const ao=ai===-1?99:ai,bo=bi===-1?99:bi;return ao!==bo?ao-bo:a.name.localeCompare(b.name);});
 const mc={Chest:'#e74c3c',Back:'#3498db',Shoulders:'#9b59b6',Legs:'#2ecc71',Glutes:'#e91e8c',Biceps:'#e67e22',Triceps:'#f39c12',Core:'#1abc9c',Cardio:'#16a085'};
 const mi={Chest:'🏋️',Back:'🔙',Shoulders:'💪',Legs:'🦵',Glutes:'🍑',Biceps:'💪',Triceps:'💪',Core:'⭕',Cardio:'🏃'};
 let lastMuscle='',gridHTML='';
 results.forEach(e=>{
  if(e.muscle!==lastMuscle){
   if(gridHTML)l.innerHTML+=`<div class="lib-grid">${gridHTML}</div>`;gridHTML='';
   const color=mc[e.muscle]||'#888';
   l.innerHTML+=`<div class="lib-section-header" style="border-left:4px solid ${color};background:${color}18"><span style="color:${color};font-weight:bold;font-size:0.82rem;letter-spacing:1px">${mi[e.muscle]||'●'} ${e.muscle.toUpperCase()}</span></div>`;
   lastMuscle=e.muscle;
  }
  const color=mc[e.muscle]||'#888';
  gridHTML+=`<div class="lib-card" onclick="openTracker(${e.id})"><b style="font-size:0.82rem;line-height:1.3">${e.name}</b><small style="color:${color};display:block;margin-top:3px">${e.muscle}</small></div>`;
 });
 if(gridHTML)l.innerHTML+=`<div class="lib-grid">${gridHTML}</div>`;
}

/* =========================================================
   WEEKLY PROGRESS MODAL
   ========================================================= */
function showProgressModal(){document.getElementById('progress-modal').style.display='flex';renderProgressWeek(0);}
function closeProgressModal(){document.getElementById('progress-modal').style.display='none';}
function navProgressWeek(dir){renderProgressWeek(progressWeekOffset+dir);}

function renderProgressWeek(offset){
 progressWeekOffset=offset;
 const u=users[activeUserIndex];
 const now=new Date();
 const dow=now.getDay()||7;
 const monday=new Date(now);monday.setDate(now.getDate()-(dow-1)+(offset*7));monday.setHours(0,0,0,0);
 const weekDates=[];for(let i=0;i<7;i++){const d=new Date(monday);d.setDate(monday.getDate()+i);weekDates.push(d);}
 const wS=weekDates[0],wE=weekDates[6];
 document.getElementById('prog-week-label').innerText=`${wS.toLocaleDateString('en',{month:'short',day:'numeric'})} – ${wE.toLocaleDateString('en',{month:'short',day:'numeric',year:'numeric'})}`;
 let totalSets=0,totalCalIn=0,totalCalBurned=0,totalVol=0;
 const dayRows=weekDates.map(date=>{
  const ds=date.toDateString();
  const h=u.history.filter(x=>new Date(x.date).toDateString()===ds);
  const n=(u.nutritionLogs||[]).filter(x=>new Date(x.date).toDateString()===ds);
  const sets=h.filter(x=>!x.isCardio).length;
  const vol=h.filter(x=>!x.isCardio).reduce((a,x)=>a+(parseFloat(x.weight)||0)*(parseFloat(x.reps)||0),0);
  const cb=calculateCalsBurned(u,ds);
  const ci=n.reduce((a,x)=>a+(x.cal||0),0);
  const exs=[...new Set(h.map(x=>x.exId))];
  // Weight for this week
  const wLog=u.weightLog?u.weightLog.find(w=>w.date===date.toISOString().split('T')[0]):null;
  totalSets+=sets;totalCalIn+=ci;totalCalBurned+=cb;totalVol+=vol;
  return{date,ds,sets,vol,cb,ci,exs,wLog};
 });
 let html=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
  <div class="prog-stat-card"><b>${totalSets}</b><small>Sets</small></div>
  <div class="prog-stat-card"><b>${Math.round(totalVol)}</b><small>Volume (${currentUnit})</small></div>
  <div class="prog-stat-card"><b>${totalCalIn}</b><small>Cal Eaten</small></div>
  <div class="prog-stat-card" style="border-color:#2ecc71"><b style="color:#2ecc71">${totalCalBurned}</b><small>Cal Burned</small></div>
 </div>`;
 dayRows.forEach(r=>{
  const dn=r.date.toLocaleDateString('en',{weekday:'short',month:'short',day:'numeric'});
  const isToday=r.date.toDateString()===new Date().toDateString();
  const empty=r.sets===0&&r.ci===0;
  const exNames=r.exs.slice(0,3).map(id=>{const e=exerciseDB.find(x=>x.id===id);return e?e.name:'?';}).join(', ');
  const weightInfo=r.wLog?`⚖️ ${r.wLog.weight}${r.wLog.unit}`:'';
  html+=`<div class="prog-day-row ${isToday?'prog-day-today':''}" onclick="showDayDetail('${r.ds}')">
   <div style="display:flex;justify-content:space-between"><b style="color:${isToday?'#E6C288':empty?'#444':'#fff'};font-size:0.9rem">${dn}</b><span style="font-size:0.75rem;color:#888">${r.sets} sets | 🔥${r.cb} cal</span></div>
   <div><small style="color:${empty?'#444':'#aaa'}">${r.exs.length>0?exNames+(r.exs.length>3?` +${r.exs.length-3} more`:'')+(r.ci>0?` | Cal in: ${r.ci}`:''):'Rest day'}${weightInfo?' | '+weightInfo:''}</small></div>
  </div>`;
 });
 document.getElementById('prog-content').innerHTML=html;
 document.getElementById('prog-prev').disabled=false;
 document.getElementById('prog-next').disabled=offset>=0;
}

/* =========================================================
   DAY DETAIL MODAL — Tap a day to see full session
   ========================================================= */
function showDayDetail(dateStr){
 const u=users[activeUserIndex];
 const h=u.history.filter(x=>new Date(x.date).toDateString()===dateStr);
 const n=(u.nutritionLogs||[]).filter(x=>new Date(x.date).toDateString()===dateStr);
 const cb=calculateCalsBurned(u,dateStr);
 const ci=n.reduce((a,x)=>a+(x.cal||0),0);
 const d=new Date(dateStr);
 const title=d.toLocaleDateString('en',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
 const wLog=u.weightLog?u.weightLog.find(w=>w.date===d.toISOString().split('T')[0]):null;
 let exHTML='';
 const exIds=[...new Set(h.map(x=>x.exId))];
 exIds.forEach(id=>{
  const ex=exerciseDB.find(e=>e.id===id);
  const exSets=h.filter(x=>x.exId===id);
  if(!ex)return;
  const mc={Chest:'#e74c3c',Back:'#3498db',Shoulders:'#9b59b6',Legs:'#2ecc71',Glutes:'#e91e8c',Biceps:'#e67e22',Triceps:'#f39c12',Core:'#1abc9c',Cardio:'#16a085'};
  const color=mc[ex.muscle]||'#888';
  exHTML+=`<div style="background:#1a1a1a;border-radius:8px;padding:10px;margin-bottom:8px;border-left:3px solid ${color}">
   <b style="color:${color}">${ex.name}</b> <small style="color:#666">${ex.muscle}</small><br>`;
  exSets.forEach((s,i)=>{
   if(s.isCardio)exHTML+=`<small style="color:#aaa">🏃 ${s.duration} min | 🔥 ${s.calBurned} cal</small><br>`;
   else exHTML+=`<small style="color:#aaa">Set ${i+1}: ${s.weight}${currentUnit} × ${s.reps} reps</small><br>`;
  });
  exHTML+='</div>';
 });
 const mealHTML=n.length>0?n.map(m=>`<small style="color:#aaa">${m.type}: ${m.name} (${m.cal} cal)</small><br>`).join(''):'<small style="color:#444">No meals logged</small>';
 document.getElementById('day-detail-title').innerText=title;
 document.getElementById('day-detail-content').innerHTML=`
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
   <div class="prog-stat-card"><b>${h.filter(x=>!x.isCardio).length}</b><small>Sets</small></div>
   <div class="prog-stat-card" style="border-color:#2ecc71"><b style="color:#2ecc71">${cb}</b><small>Cal Burned</small></div>
   <div class="prog-stat-card"><b>${ci}</b><small>Cal Eaten</small></div>
   <div class="prog-stat-card"><b>${wLog?`${wLog.weight}${wLog.unit}`:'--'}</b><small>Body Weight</small></div>
  </div>
  <h4 style="color:var(--gold);margin:10px 0 8px">Exercises</h4>
  ${exHTML||'<p style="color:#444;font-size:0.85rem">No exercises logged</p>'}
  <h4 style="color:var(--gold);margin:10px 0 8px">Nutrition</h4>
  <div style="background:#111;border-radius:8px;padding:10px">${mealHTML}</div>
 `;
 document.getElementById('day-detail-modal').style.display='flex';
}
function closeDayDetail(){document.getElementById('day-detail-modal').style.display='none';}

/* =========================================================
   PRE-HISTORY DATA ENTRY
   ========================================================= */
function openPreHistory(){document.getElementById('prehistory-modal').style.display='flex';}
function closePreHistory(){document.getElementById('prehistory-modal').style.display='none';}

function searchPreHistoryExercise(){
 const q=document.getElementById('ph-ex-search').value.toLowerCase();
 const list=document.getElementById('ph-ex-results');
 list.innerHTML='';
 if(!q||q.length<2)return;
 exerciseDB.filter(e=>e.name.toLowerCase().includes(q)).slice(0,8).forEach(e=>{
  list.innerHTML+=`<div class="ph-ex-option" onclick="selectPhEx(${e.id},'${e.name.replace(/'/g,"\\'")}')"><b>${e.name}</b> <small style="color:#888">${e.muscle}</small></div>`;
 });
}

let selectedPhExId=null;
function selectPhEx(id,name){
 selectedPhExId=id;
 document.getElementById('ph-ex-search').value=name;
 document.getElementById('ph-ex-results').innerHTML='';
 document.getElementById('ph-log-section').style.display='block';
}

function savePreHistoryEntry(){
 if(!selectedPhExId)return alert("Select an exercise.");
 const date=document.getElementById('ph-date').value;
 const sets=parseInt(document.getElementById('ph-sets').value)||1;
 const weight=document.getElementById('ph-weight').value;
 const reps=document.getElementById('ph-reps').value;
 const isCardio=CARDIO_IDS.includes(selectedPhExId);
 if(!date)return alert("Select a date.");
 const u=users[activeUserIndex];
 for(let i=0;i<sets;i++){
  const uid=`ph_${Date.now()}_${i}`;
  if(isCardio){
   const dur=document.getElementById('ph-weight').value;
   u.history.push({uniqueId:uid,date:new Date(date+'T12:00:00').toISOString(),exId:selectedPhExId,duration:dur,calBurned:estimateCardioCalories(selectedPhExId,parseFloat(dur)||30),isCardio:true,isPreHistory:true});
  }else{
   if(!weight||!reps)return alert("Enter weight and reps.");
   u.history.push({uniqueId:uid,date:new Date(date+'T12:00:00').toISOString(),exId:selectedPhExId,weight,reps,isPreHistory:true});
  }
 }
 saveData();
 alert(`✅ ${sets} set${sets>1?'s':''} of past workout saved for ${date}`);
 document.getElementById('ph-sets').value='';document.getElementById('ph-weight').value='';document.getElementById('ph-reps').value='';
}

/* =========================================================
   PROFILE + USERS
   ========================================================= */
function saveProfile(){
 const u=users[activeUserIndex];
 u.name=document.getElementById('p-name').value;
 u.gender=document.getElementById('p-gender').value;
 u.goal=document.getElementById('p-goal').value;
 saveData();updateUI();alert("✅ Profile saved!");
}
function toggleTrainerMode(){users[activeUserIndex].trainerMode=document.getElementById('p-trainer-mode').checked;saveData();updateUI();}
function toggleUserMenu(){
 const m=document.getElementById('user-menu');m.style.display=m.style.display==='block'?'none':'block';
 if(m.style.display==='block'){const l=document.getElementById('user-list-display');l.innerHTML='';users.forEach((u,i)=>l.innerHTML+=`<div class="user-option" onclick="switchUser(${i})" style="padding:10px;cursor:pointer;${i===activeUserIndex?'color:#E6C288;font-weight:bold':''}"><b>${u.name}</b></div>`);}
}
function createNewUser(){const n=prompt("New user name:");if(n&&n.trim()){users.push({id:Date.now(),name:n.trim(),trainerMode:false,gender:'male',goal:'shred',history:[],nutritionLogs:[],completedToday:[],missedDays:[],weightLog:[],bodyWeight:75,bodyWeightDisplay:75,bodyWeightUnit:'kg'});saveData();toggleUserMenu();}}
function switchUser(i){activeUserIndex=i;document.getElementById('user-menu').style.display='none';updateUI();}
function resetCurrentUserData(){if(!confirm("Reset ALL data?"))return;const u=users[activeUserIndex];u.history=[];u.nutritionLogs=[];u.completedToday=[];u.missedDays=[];u.weightLog=[];saveData();updateUI();alert("✅ Reset complete.");}
function deleteCurrentUser(){if(!confirm(`Delete "${users[activeUserIndex].name}"?`))return;if(users.length===1)return emergencyReset();users.splice(activeUserIndex,1);activeUserIndex=0;saveData();document.getElementById('user-menu').style.display='none';updateUI();}
function emergencyReset(){if(confirm("⚠️ FACTORY RESET?")){{localStorage.removeItem('spartanUsers');location.reload();}}}

/* =========================================================
   NAVIGATION
   ========================================================= */
function nav(id){
 document.querySelectorAll('.tab-content').forEach(e=>e.classList.remove('active'));
 document.querySelectorAll('nav button').forEach(e=>e.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 event.currentTarget.classList.add('active');
 if(id==='dashboard')updateUI();
 if(id==='library')filterLibrary();
 if(id==='nutrition')showNutriTab('track');
}
function saveData(){localStorage.setItem('spartanUsers',JSON.stringify(users));}

