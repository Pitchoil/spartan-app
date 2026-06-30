/* =========================================================
   SPARTAN FITNESS APP — v3
   Developed by Pawi
   ========================================================= */

const CARDIO_IDS = [701,8001,8002,8003,8004,8005,8006,8007,8008,8009,8010,8011,8012,8013,8014,8015];

/* ─── CALORIE BURN ESTIMATE PER SET ───────────────────── */
const CAL_PER_SET = {
    Chest:9, Back:10, Legs:14, Shoulders:7,
    Glutes:10, Biceps:5, Triceps:5, Core:6, Cardio:0
};

/* =========================================================
   EXERCISE DATABASE  (~160 exercises)
   ========================================================= */
const exerciseDB = [
    // ══ CHEST ══════════════════════════════════════════════
    { id:1001, name:"Barbell Bench Press",     muscle:"Chest",     desc:"Sets: 3-4 | Reps: 6-12\n1. Lie flat, feet planted firm.\n2. Lower bar to mid-chest.\n3. Press explosively upward.\nTip: Retract scapulae before unracking." },
    { id:1002, name:"Incline Barbell Press",   muscle:"Chest",     desc:"Sets: 3-4 | Reps: 8-12\n1. Set bench 30-45°.\n2. Lower bar to upper chest.\n3. Press straight up.\nTip: Targets upper chest and front delt." },
    { id:1003, name:"Dumbbell Bench Press",    muscle:"Chest",     desc:"Sets: 3-4 | Reps: 8-12\n1. Lower DBs to sides of chest.\n2. Press up until DBs nearly touch.\nTip: Greater ROM than barbell." },
    { id:1004, name:"Cable Crossover",         muscle:"Chest",     desc:"Sets: 3 | Reps: 12-15\n1. Set cables high.\n2. Pull down and across body.\n3. Cross hands at bottom.\nTip: Squeeze chest hard at crossover." },
    { id:1005, name:"Weighted Dips",           muscle:"Chest",     desc:"Sets: 3 | Reps: 8-12\n1. Lean forward ~30°.\n2. Lower until shoulders below elbows.\n3. Press back up.\nTip: Forward lean shifts focus to chest." },
    { id:1006, name:"Push-Ups",                muscle:"Chest",     desc:"Sets: 3 | Reps: To Failure\n1. Hands shoulder width.\n2. Lower chest to floor.\n3. Keep core tight throughout.\nTip: Pause 1 second at bottom." },
    { id:1007, name:"Pec Deck",                muscle:"Chest",     desc:"Sets: 3 | Reps: 12-15\n1. Keep elbows at shoulder height.\n2. Squeeze pads together.\n3. Controlled return.\nTip: Don't let weight stack drop." },
    { id:1008, name:"Decline Bench Press",     muscle:"Chest",     desc:"Sets: 3-4 | Reps: 8-12\n1. Set bench to decline.\n2. Lower bar to lower chest.\n3. Press up explosively.\nTip: Targets lower chest. Use spotter." },
    { id:1009, name:"Machine Chest Press",     muscle:"Chest",     desc:"Sets: 3 | Reps: 12-15\n1. Adjust seat — handles at chest.\n2. Press forward to full extension.\n3. Controlled return.\nTip: Good for burnout sets." },
    { id:1010, name:"Dumbbell Fly",            muscle:"Chest",     desc:"Sets: 3 | Reps: 12-15\n1. Arms slightly bent throughout.\n2. Lower DBs wide to feel stretch.\n3. Bring back up squeezing chest.\nTip: Light weight, focus on feel." },
    { id:1011, name:"Incline Push-Up",         muscle:"Chest",     desc:"Sets: 3 | Reps: 15-20\n1. Hands on elevated surface.\n2. Lower chest to surface.\n3. Push back up.\nTip: Use as warm-up or finisher." },
    { id:1012, name:"Incline Dumbbell Fly",    muscle:"Chest",     desc:"Sets: 3 | Reps: 12-15\n1. Bench at 30°, arms slightly bent.\n2. Lower DBs in wide arc.\n3. Squeeze upper chest at top.\nTip: Targets upper chest inner head." },
    { id:1013, name:"Close Grip Push-Up",      muscle:"Chest",     desc:"Sets: 3 | Reps: 15-20\n1. Hands narrow, under shoulders.\n2. Lower chest keeping elbows tight.\n3. Push up.\nTip: Hits inner chest and triceps." },
    { id:1014, name:"Machine Fly",             muscle:"Chest",     desc:"Sets: 3 | Reps: 12-15\n1. Sit, handles at chest height.\n2. Bring arms together in front.\n3. Squeeze hard — slow return.\nTip: Better chest isolation than cables." },
    { id:1015, name:"DB Pullover (Chest)",     muscle:"Chest",     desc:"Sets: 3 | Reps: 12\n1. Lie across bench.\n2. Hold DB overhead, lower behind head.\n3. Pull back over chest.\nTip: Focus on the chest stretch." },
    { id:1016, name:"Archer Push-Up",          muscle:"Chest",     desc:"Sets: 3 | Reps: 8-10 each side\n1. Wide push-up position.\n2. Shift weight to one arm, other arm straight.\n3. Lower to bent arm side.\nTip: Advanced. Builds unilateral strength." },

    // ══ BACK ═══════════════════════════════════════════════
    { id:2001, name:"Conventional Deadlift",   muscle:"Back",      desc:"Sets: 3-5 | Reps: 3-6\n1. Feet hip-width, bar over mid-foot.\n2. Hinge hips back, big breath in.\n3. Drive through heels, lock hips at top.\nTip: Keep bar dragging up shins." },
    { id:2002, name:"Pull-Up (Wide Grip)",     muscle:"Back",      desc:"Sets: 3-4 | Reps: 6-12\n1. Palms facing away, wide grip.\n2. Pull chest to bar.\n3. Lower with control.\nTip: Dead hang at bottom each rep." },
    { id:2003, name:"Barbell Bent-Over Row",   muscle:"Back",      desc:"Sets: 4 | Reps: 8-12\n1. Torso at 45°, slight knee bend.\n2. Pull bar into stomach.\n3. Squeeze blades at top.\nTip: Keep back flat, no jerking." },
    { id:2004, name:"Lat Pulldown",            muscle:"Back",      desc:"Sets: 3 | Reps: 10-12\n1. Wide overhand grip.\n2. Pull bar to upper chest.\n3. Slow return to full stretch.\nTip: Lead with elbows, not hands." },
    { id:2005, name:"Seated Cable Row",        muscle:"Back",      desc:"Sets: 3 | Reps: 10-12\n1. Sit tall, slight forward lean.\n2. Pull V-handle to stomach.\n3. Squeeze blades, hold 1 second.\nTip: Don't use momentum." },
    { id:2006, name:"Face Pull",               muscle:"Shoulders", desc:"Sets: 3-4 | Reps: 12-20\n1. Cable at face height, rope attachment.\n2. Pull to face, hands by ears.\n3. Rotate hands back.\nTip: Essential for shoulder health — do every session." },
    { id:2007, name:"T-Bar Row",               muscle:"Back",      desc:"Sets: 3 | Reps: 10-12\n1. Chest supported or standing.\n2. Pull weight to lower chest.\n3. Squeeze hard at top.\nTip: One of the best back builders." },
    { id:2008, name:"Single Arm DB Row",       muscle:"Back",      desc:"Sets: 3-4 | Reps: 10-12 each\n1. Brace knee and hand on bench.\n2. Pull DB to hip/ribs.\n3. Full stretch at bottom.\nTip: Don't rotate torso." },
    { id:2009, name:"Chest Supported Row",     muscle:"Back",      desc:"Sets: 3 | Reps: 10-12\n1. Chest-down on incline bench.\n2. Pull DBs up and back.\n3. Squeeze shoulder blades.\nTip: Eliminates lower back stress." },
    { id:2010, name:"Neutral Grip Pull-Up",    muscle:"Back",      desc:"Sets: 3-4 | Reps: 6-10\n1. Palms facing each other.\n2. Pull chin above bar.\n3. Lower slowly.\nTip: Easier on shoulders than wide grip." },
    { id:2011, name:"Straight Arm Pulldown",   muscle:"Back",      desc:"Sets: 3 | Reps: 12-15\n1. High cable, arms straight.\n2. Push bar down to thighs.\n3. Squeeze lats at bottom.\nTip: Pure lat isolation." },
    { id:2012, name:"Close Grip Lat Pulldown", muscle:"Back",      desc:"Sets: 3 | Reps: 10-12\n1. Narrow underhand grip.\n2. Pull to upper chest, lean back slightly.\n3. Full stretch at top.\nTip: Hits lower lats more." },
    { id:2013, name:"Inverted Row",            muscle:"Back",      desc:"Sets: 3 | Reps: 10-15\n1. Bar at hip height, lie underneath.\n2. Pull chest to bar — body straight.\n3. Lower with control.\nTip: Great bodyweight back builder." },
    { id:2014, name:"DB Pull-Over",            muscle:"Back",      desc:"Sets: 3 | Reps: 12\n1. Lie on bench, hold one DB.\n2. Lower DB in arc behind head.\n3. Pull back over chest.\nTip: Stretches the lats deeply." },
    { id:2015, name:"Rack Pull",               muscle:"Back",      desc:"Sets: 3-4 | Reps: 5-8\n1. Bar set at knee height.\n2. Pull to lockout.\n3. Focus on upper back.\nTip: Good for overloading deadlift lockout." },
    { id:2016, name:"Seated Machine Row",      muscle:"Back",      desc:"Sets: 3 | Reps: 12-15\n1. Chest pad adjusted.\n2. Pull handles to sides of chest.\n3. Slow return.\nTip: Easy on lower back." },
    { id:2017, name:"Pendlay Row",             muscle:"Back",      desc:"Sets: 4 | Reps: 5-8\n1. Bar on floor, torso parallel.\n2. Explosively pull to stomach.\n3. Return bar to floor.\nTip: More explosive than bent-over row." },
    { id:2018, name:"Good Morning",            muscle:"Back",      desc:"Sets: 3 | Reps: 10-12\n1. Bar on upper back.\n2. Hinge hips back, torso lowers.\n3. Drive hips forward to stand.\nTip: Light weight — posterior chain." },
    { id:2019, name:"Single Arm Cable Row",    muscle:"Back",      desc:"Sets: 3 | Reps: 12 each\n1. Set cable at mid height.\n2. Pull elbow back past ribs.\n3. Full stretch forward.\nTip: Better ROM than two-arm row." },
    { id:2020, name:"Kroc Row",                muscle:"Back",      desc:"Sets: 2 | Reps: 20-30 each\n1. Heavy DB, brace on bench.\n2. Pull with controlled momentum.\n3. High reps, go heavy.\nTip: Builds raw back thickness and grip." },
    { id:2021, name:"Landmine Row",            muscle:"Back",      desc:"Sets: 3 | Reps: 10-12\n1. Bar anchored in corner.\n2. Neutral grip, pull to chest.\n3. Squeeze blades at top.\nTip: Shoulder friendly heavy row." },
    { id:2022, name:"Underhand Barbell Row",   muscle:"Back",      desc:"Sets: 3 | Reps: 8-12\n1. Underhand (supinated) grip.\n2. Pull to lower abdomen.\n3. Elbows stay close.\nTip: Hits lower lats and biceps more." },
    { id:2023, name:"Wide Grip Cable Row",     muscle:"Back",      desc:"Sets: 3 | Reps: 10-12\n1. Wide bar attachment, cable row.\n2. Pull elbows out to the side.\n3. Squeeze upper back.\nTip: Targets upper back vs narrow grip." },
    { id:2024, name:"Assisted Pull-Up",        muscle:"Back",      desc:"Sets: 3 | Reps: 8-12\n1. Use band or machine for assist.\n2. Full pull to chin above bar.\n3. Slow controlled lower.\nTip: Build to bodyweight pull-ups." },
    { id:2025, name:"Weighted Pull-Up",        muscle:"Back",      desc:"Sets: 3-4 | Reps: 5-8\n1. Belt with plates or vest.\n2. Dead hang, pull chest to bar.\n3. Full extension at bottom.\nTip: King of back exercises." },

    // ══ SHOULDERS ══════════════════════════════════════════
    { id:4001, name:"Overhead Press (OHP)",    muscle:"Shoulders", desc:"Sets: 4 | Reps: 6-10\n1. Bar at chin, elbows forward.\n2. Press straight overhead.\n3. Lock out at top.\nTip: No leg drive — strict press." },
    { id:4002, name:"Lateral Raise",           muscle:"Shoulders", desc:"Sets: 3-4 | Reps: 12-15\n1. Slight forward lean.\n2. Raise arms to shoulder height.\n3. Controlled lower.\nTip: Lead with elbows, thumbs slightly down." },
    { id:4003, name:"Arnold Press",            muscle:"Shoulders", desc:"Sets: 3 | Reps: 10-12\n1. Start with palms facing you.\n2. Rotate palms out as you press up.\n3. Reverse on the way down.\nTip: Hits all 3 shoulder heads." },
    { id:4004, name:"Front Raise",             muscle:"Shoulders", desc:"Sets: 3 | Reps: 12\n1. Hold DB or plate at thighs.\n2. Raise to shoulder height.\n3. Slow lower.\nTip: Use lighter weight than you think." },
    { id:4005, name:"Upright Row",             muscle:"Shoulders", desc:"Sets: 3 | Reps: 10-12\n1. Grip bar shoulder width.\n2. Pull to chin, elbows high.\n3. Lower controlled.\nTip: Don't go too heavy." },
    { id:4006, name:"Cable Lateral Raise",     muscle:"Shoulders", desc:"Sets: 3 | Reps: 15-20\n1. Cable at ankle height.\n2. Raise arm to shoulder height.\n3. Hold 1 second, slow lower.\nTip: Constant tension beats dumbbells." },
    { id:4007, name:"DB Shoulder Press",       muscle:"Shoulders", desc:"Sets: 3-4 | Reps: 8-12\n1. Dumbbells at shoulder height.\n2. Press overhead to full extension.\n3. Controlled lower.\nTip: Better ROM than barbell press." },
    { id:4008, name:"Rear Delt Fly",           muscle:"Shoulders", desc:"Sets: 3 | Reps: 15-20\n1. Bent over at 90°.\n2. Raise DBs out and back.\n3. Squeeze rear delts at top.\nTip: Light weight, feel the rear delt." },
    { id:4009, name:"Barbell Shrugs",          muscle:"Shoulders", desc:"Sets: 3-4 | Reps: 12-15\n1. Heavy barbell in front.\n2. Shrug shoulders as high as possible.\n3. Hold 1 second at top.\nTip: Straight up and down — don't roll." },
    { id:4010, name:"Push Press",              muscle:"Shoulders", desc:"Sets: 3-4 | Reps: 5-8\n1. Slight knee dip.\n2. Drive bar overhead using leg momentum.\n3. Lock out fully.\nTip: Allows heavier load than strict press." },
    { id:4011, name:"Landmine Press",          muscle:"Shoulders", desc:"Sets: 3 | Reps: 10-12 each\n1. Bar anchored in corner.\n2. Press plate-end in arc overhead.\n3. Control the descent.\nTip: Shoulder-friendly pressing variation." },
    { id:4012, name:"Machine Lateral Raise",   muscle:"Shoulders", desc:"Sets: 3 | Reps: 15-20\n1. Seat adjusted to shoulder height.\n2. Press pads upward to shoulder height.\n3. Slow controlled lower.\nTip: Constant tension, no momentum." },
    { id:4013, name:"Seated DB Press",         muscle:"Shoulders", desc:"Sets: 4 | Reps: 8-12\n1. Sit upright, back supported.\n2. Press DBs overhead.\n3. Lower to ear height.\nTip: Strict form, no back arch." },
    { id:4014, name:"Cable Front Raise",       muscle:"Shoulders", desc:"Sets: 3 | Reps: 12-15\n1. Cable at ankle, facing away.\n2. Raise arm in front to shoulder height.\n3. Slow lower.\nTip: Constant tension better than DB." },
    { id:4015, name:"Machine Shoulder Press",  muscle:"Shoulders", desc:"Sets: 3 | Reps: 10-12\n1. Adjust seat height.\n2. Press handles overhead.\n3. Full extension at top.\nTip: Good for beginners or drop sets." },

    // ══ LEGS ═══════════════════════════════════════════════
    { id:3001, name:"Back Squat",              muscle:"Legs",      desc:"Sets: 4-5 | Reps: 6-12\n1. Bar on upper traps.\n2. Feet shoulder width, toes slightly out.\n3. Squat below parallel.\nTip: Knees out, chest up." },
    { id:3002, name:"Leg Press",               muscle:"Legs",      desc:"Sets: 4 | Reps: 10-15\n1. Feet shoulder width, mid-platform.\n2. Lower until 90° knee bend.\n3. Press through heels.\nTip: Don't let knees cave in." },
    { id:3003, name:"Romanian Deadlift (RDL)", muscle:"Legs",      desc:"Sets: 4 | Reps: 8-12\n1. Soft knees, hinge hips back.\n2. Bar tracks down legs.\n3. Feel stretch in hamstrings.\nTip: Keep back flat — stop before rounding." },
    { id:3004, name:"Bulgarian Split Squat",   muscle:"Legs",      desc:"Sets: 3-4 | Reps: 10 each\n1. Rear foot elevated on bench.\n2. Lower back knee toward floor.\n3. Drive through front heel.\nTip: Hardest leg exercise. Be humble." },
    { id:3005, name:"Leg Extension",           muscle:"Legs",      desc:"Sets: 3-4 | Reps: 15\n1. Sit with pad above ankles.\n2. Kick up, squeeze quads hard.\n3. Slow 3-second lower.\nTip: Pause 1 second at top." },
    { id:3006, name:"Lying Leg Curl",          muscle:"Legs",      desc:"Sets: 3-4 | Reps: 12\n1. Lie face down, pad above heels.\n2. Curl heels toward glutes.\n3. Squeeze at top, slow lower.\nTip: Flex glutes to protect lower back." },
    { id:3007, name:"Standing Calf Raise",     muscle:"Legs",      desc:"Sets: 4 | Reps: 15-20\n1. Full stretch at bottom.\n2. Rise as high as possible.\n3. Hold 1 second at top.\nTip: Calves need high reps to grow." },
    { id:3008, name:"Walking Lunges",          muscle:"Legs",      desc:"Sets: 3 | Reps: 20 total\n1. Step forward into lunge.\n2. Drop back knee near floor.\n3. Step through to next lunge.\nTip: Stay upright, don't lean forward." },
    { id:3009, name:"Front Squat",             muscle:"Legs",      desc:"Sets: 3-4 | Reps: 6-10\n1. Bar on front shoulders, elbows high.\n2. Squat deep, stay upright.\n3. Drive up through heels.\nTip: Hits quads harder than back squat." },
    { id:3010, name:"Leg Press (Wide Stance)", muscle:"Legs",      desc:"Sets: 4 | Reps: 12-15\n1. Feet wide and high on platform.\n2. Lower deep.\n3. Press through heels.\nTip: Wide stance shifts load to glutes." },
    { id:3011, name:"Goblet Squat",            muscle:"Legs",      desc:"Sets: 3 | Reps: 12-15\n1. Hold KB or DB at chest.\n2. Feet shoulder width.\n3. Squat deep, elbows inside knees.\nTip: Great for beginners and warm-up." },
    { id:3012, name:"Hack Squat (Machine)",    muscle:"Legs",      desc:"Sets: 4 | Reps: 10-12\n1. Feet shoulder width on platform.\n2. Lower deep, knees track toes.\n3. Drive up through heels.\nTip: Great quad builder, easier on back." },
    { id:3013, name:"Seated Leg Curl",         muscle:"Legs",      desc:"Sets: 3-4 | Reps: 12-15\n1. Sit, pad on lower shin.\n2. Curl leg down.\n3. Slow return.\nTip: Seated version gives better hamstring stretch." },
    { id:3014, name:"Seated Calf Raise",       muscle:"Legs",      desc:"Sets: 4 | Reps: 15-20\n1. Knees bent 90°, pad above knees.\n2. Rise on toes fully.\n3. Full stretch at bottom.\nTip: Targets soleus — different from standing." },
    { id:3015, name:"Single Leg RDL",          muscle:"Legs",      desc:"Sets: 3 | Reps: 10-12 each\n1. Stand on one leg, slight knee bend.\n2. Hinge forward, free leg back.\n3. Drive hip forward to stand.\nTip: Use wall for balance if needed." },
    { id:3016, name:"Reverse Lunge",           muscle:"Legs",      desc:"Sets: 3 | Reps: 10-12 each\n1. Step backward into lunge.\n2. Front knee tracks over toe.\n3. Drive front heel to return.\nTip: Easier on knees than forward lunge." },
    { id:3017, name:"Step Up (Box)",           muscle:"Legs",      desc:"Sets: 3 | Reps: 10-12 each\n1. Step onto box with one foot.\n2. Drive through heel to stand.\n3. Lower controlled.\nTip: Higher box = more glute." },
    { id:3018, name:"Nordic Hamstring Curl",   muscle:"Legs",      desc:"Sets: 3 | Reps: 5-8\n1. Kneel, feet anchored.\n2. Lower body forward slowly.\n3. Hands catch at bottom.\n4. Curl back up.\nTip: One of the best hamstring exercises." },
    { id:3019, name:"Stiff Leg Deadlift",      muscle:"Legs",      desc:"Sets: 3-4 | Reps: 10-12\n1. Legs nearly straight throughout.\n2. Lower bar to mid-shin.\n3. Drive hips forward to stand.\nTip: Maximum hamstring stretch — go light." },
    { id:3020, name:"Box Jump",                muscle:"Legs",      desc:"Sets: 3 | Reps: 8-10\n1. Stand facing box.\n2. Dip slightly, jump explosively.\n3. Land softly on box.\n4. Step down — don't jump down.\nTip: Develops explosive power." },
    { id:3021, name:"Leg Adductor Machine",    muscle:"Legs",      desc:"Sets: 3 | Reps: 15-20\n1. Sit, pads on inner thighs.\n2. Squeeze legs together.\n3. Slow controlled open.\nTip: Inner thigh. High reps for best results." },
    { id:3022, name:"Leg Abductor Machine",    muscle:"Legs",      desc:"Sets: 3 | Reps: 15-20\n1. Sit, pads on outer thighs.\n2. Push legs apart.\n3. Slow controlled return.\nTip: Outer thigh & glute medius." },
    { id:3023, name:"Pause Squat",             muscle:"Legs",      desc:"Sets: 3-4 | Reps: 5-8\n1. Back squat position.\n2. Pause at the bottom for 3 seconds.\n3. Drive back up.\nTip: No momentum — pure strength builder." },
    { id:3024, name:"Trap Bar Deadlift",       muscle:"Legs",      desc:"Sets: 3-4 | Reps: 5-8\n1. Step inside hex bar.\n2. Grip handles, drive through heels.\n3. Stand tall at top.\nTip: Easier on back than conventional DL." },
    { id:3025, name:"Donkey Calf Raise",       muscle:"Legs",      desc:"Sets: 4 | Reps: 15-20\n1. Bent at hips 90°, forearms on pad.\n2. Rise on toes to full contraction.\n3. Full stretch at bottom.\nTip: Stretches calf more than standing version." },
    { id:3026, name:"Sissy Squat",             muscle:"Legs",      desc:"Sets: 3 | Reps: 10-15\n1. Hold something for balance.\n2. Lean back as knees push forward.\n3. Lower heels off floor, deep squat.\nTip: Advanced quad isolation. Use bodyweight first." },

    // ══ GLUTES ═════════════════════════════════════════════
    { id:6001, name:"Hip Thrust",              muscle:"Glutes",    desc:"Sets: 4 | Reps: 10-15\n1. Upper back on bench, bar on hips.\n2. Drive hips up until body straight.\n3. Squeeze glutes hard at top.\nTip: Best glute exercise — load it heavy." },
    { id:6004, name:"Cable Kickback",          muscle:"Glutes",    desc:"Sets: 3 | Reps: 15 each\n1. Ankle attachment, cable low.\n2. Kick leg straight back.\n3. Squeeze glute at top.\nTip: Slow and controlled." },
    { id:6005, name:"Sumo Deadlift",           muscle:"Glutes",    desc:"Sets: 3-4 | Reps: 8-12\n1. Feet wide, toes pointed out.\n2. Grip bar inside legs.\n3. Drive hips forward to lockout.\nTip: Hits inner thighs and glutes heavily." },
    { id:6006, name:"Donkey Kickback",         muscle:"Glutes",    desc:"Sets: 3 | Reps: 15-20 each\n1. On all fours, core tight.\n2. Kick one leg straight back and up.\n3. Squeeze glute at top.\nTip: Use ankle weights for resistance." },
    { id:6007, name:"Glute Bridge",            muscle:"Glutes",    desc:"Sets: 3-4 | Reps: 15-20\n1. Lie on back, feet flat.\n2. Drive hips up, squeeze glutes.\n3. Hold 2 seconds, lower slowly.\nTip: Add DB on hips for resistance." },
    { id:6008, name:"Single Leg Hip Thrust",   muscle:"Glutes",    desc:"Sets: 3 | Reps: 12 each\n1. One foot on floor, other leg raised.\n2. Drive hips up on single leg.\n3. Squeeze at top.\nTip: Corrects glute imbalances." },
    { id:6009, name:"Banded Clamshell",        muscle:"Glutes",    desc:"Sets: 3 | Reps: 20 each\n1. Band above knees, side lying.\n2. Feet together, open top knee.\n3. Squeeze glute med at top.\nTip: Great warm-up or accessory." },
    { id:6010, name:"Fire Hydrant",            muscle:"Glutes",    desc:"Sets: 3 | Reps: 20 each\n1. On all fours.\n2. Raise knee out to side to hip height.\n3. Lower slowly.\nTip: Targets glute medius — side of glute." },
    { id:6011, name:"Frog Pump",               muscle:"Glutes",    desc:"Sets: 3 | Reps: 20-30\n1. Lie on back, soles of feet together.\n2. Push hips up, squeeze glutes.\n3. High reps.\nTip: Great pump-up before hip thrusts." },
    { id:6012, name:"Step Up (High Box)",      muscle:"Glutes",    desc:"Sets: 3 | Reps: 10-12 each\n1. High box (50cm+).\n2. Step up, drive through heel.\n3. Don't push off lower leg.\nTip: Maximum glute activation." },
    { id:6013, name:"Banded Walks",            muscle:"Glutes",    desc:"Sets: 3 | Reps: 20 steps each way\n1. Band above knees.\n2. Half squat position.\n3. Walk sideways maintaining tension.\nTip: Activates glute medius." },
    { id:6014, name:"Curtsy Lunge",            muscle:"Glutes",    desc:"Sets: 3 | Reps: 12 each\n1. Step one foot behind and across body.\n2. Lower back knee toward floor.\n3. Drive through front heel up.\nTip: Targets glute medius and outer glute." },
    { id:6015, name:"Cable Pull-Through",      muscle:"Glutes",    desc:"Sets: 3 | Reps: 15\n1. Low cable between legs, face away.\n2. Hinge hips back, cable goes between legs.\n3. Drive hips forward to stand.\nTip: Hip hinge pattern — great for glutes." },
    { id:6016, name:"Kneeling Squat",          muscle:"Glutes",    desc:"Sets: 3 | Reps: 15-20\n1. Kneel on mat, upright torso.\n2. Sit back on heels.\n3. Drive hips forward and up to tall kneel.\nTip: Isolates glutes completely." },
    { id:6017, name:"Reverse Hyper",           muscle:"Glutes",    desc:"Sets: 3 | Reps: 15-20\n1. Lie face down on bench, legs hang.\n2. Raise legs to parallel.\n3. Slow lower.\nTip: Decompresses spine while building glutes." },
    { id:6018, name:"Glute Kickback Machine",  muscle:"Glutes",    desc:"Sets: 3 | Reps: 15-20 each\n1. Brace on pads, foot on platform.\n2. Kick back and up.\n3. Squeeze at top.\nTip: Full range of motion every rep." },
    { id:6019, name:"Smith Machine Hip Thrust",muscle:"Glutes",    desc:"Sets: 4 | Reps: 10-15\n1. Bar on Smith machine, set at hip height.\n2. Upper back on bench.\n3. Drive hips up — bar guides path.\nTip: Easier to load heavy than free bar." },

    // ══ BICEPS ═════════════════════════════════════════════
    { id:5001, name:"Barbell Curl",            muscle:"Biceps",    desc:"Sets: 3-4 | Reps: 8-12\n1. Grip shoulder width.\n2. Curl bar to chest.\n3. Squeeze at top, slow lower.\nTip: Don't swing — elbows stay at sides." },
    { id:5003, name:"Hammer Curl",             muscle:"Biceps",    desc:"Sets: 3 | Reps: 10-12\n1. Neutral grip (thumbs up).\n2. Curl DB to shoulder.\n3. Slow lower.\nTip: Builds brachialis for arm thickness." },
    { id:5006, name:"Concentration Curl",      muscle:"Biceps",    desc:"Sets: 3 | Reps: 12 each\n1. Sit, brace elbow on inner thigh.\n2. Curl DB to shoulder.\n3. Full squeeze at top.\nTip: Best exercise for bicep peak." },
    { id:5013, name:"Incline DB Curl",         muscle:"Biceps",    desc:"Sets: 3 | Reps: 10-12\n1. Sit on incline bench, arms hang.\n2. Curl without moving elbow.\n3. Full stretch at bottom.\nTip: Maximum stretch = more growth." },
    { id:5014, name:"Cable Curl",              muscle:"Biceps",    desc:"Sets: 3 | Reps: 12-15\n1. Low cable, straight bar or rope.\n2. Curl to chin.\n3. Constant tension throughout.\nTip: No rest at bottom — keep tension." },
    { id:5015, name:"Preacher Curl",           muscle:"Biceps",    desc:"Sets: 3 | Reps: 10-12\n1. Arms braced on preacher pad.\n2. Curl to chin.\n3. Full stretch — don't lock out.\nTip: Isolates bicep, no cheating." },
    { id:5016, name:"21s Bicep Curl",          muscle:"Biceps",    desc:"Sets: 3 rounds:\n7 reps: bottom half (hang to 90°)\n7 reps: top half (90° to chin)\n7 reps: full range\nTip: Brutal but effective. Light weight." },
    { id:5017, name:"Spider Curl",             muscle:"Biceps",    desc:"Sets: 3 | Reps: 10-12\n1. Chest on incline bench, arms hang.\n2. Curl DBs up.\n3. Lower slowly.\nTip: Eliminates shoulder involvement." },
    { id:5018, name:"Reverse Curl",            muscle:"Biceps",    desc:"Sets: 3 | Reps: 12-15\n1. Overhand grip on barbell.\n2. Curl up keeping wrists straight.\n3. Slow lower.\nTip: Builds brachioradialis (forearm)." },
    { id:5030, name:"Zottman Curl",            muscle:"Biceps",    desc:"Sets: 3 | Reps: 10-12\n1. Curl up with supinated grip.\n2. Rotate to pronated at top.\n3. Lower with overhand grip.\nTip: Works both biceps heads and forearm." },
    { id:5031, name:"Cross-Body Hammer Curl",  muscle:"Biceps",    desc:"Sets: 3 | Reps: 10-12 each\n1. Neutral grip.\n2. Curl DB across body to opposite shoulder.\n3. Slow lower.\nTip: Hits brachialis hard." },
    { id:5032, name:"Drag Curl",               muscle:"Biceps",    desc:"Sets: 3 | Reps: 10-12\n1. Drag bar up body — elbows go back.\n2. Bar stays close to torso throughout.\n3. Slow lower.\nTip: Unique peak contraction angle." },
    { id:5033, name:"Machine Curl",            muscle:"Biceps",    desc:"Sets: 3 | Reps: 12-15\n1. Adjust seat — pad at elbow height.\n2. Curl handles to chin.\n3. Full stretch at bottom.\nTip: Constant tension, great finisher." },

    // ══ TRICEPS ════════════════════════════════════════════
    { id:5002, name:"Tricep Pushdown",         muscle:"Triceps",   desc:"Sets: 3 | Reps: 12-15\n1. Rope or bar, cable high.\n2. Push down to full extension.\n3. Flare hands out at bottom.\nTip: Keep elbows glued to body." },
    { id:5004, name:"Skull Crusher",           muscle:"Triceps",   desc:"Sets: 3 | Reps: 10-12\n1. Lie flat, EZ bar or DBs.\n2. Lower to forehead.\n3. Extend back up.\nTip: Keep elbows pointing at ceiling." },
    { id:5007, name:"Overhead Tricep Ext",     muscle:"Triceps",   desc:"Sets: 3 | Reps: 12-15\n1. Cable or DB overhead, arms bent.\n2. Extend arms overhead fully.\n3. Slow lower behind head.\nTip: Targets long head — biggest tricep." },
    { id:5019, name:"Diamond Push-Up",         muscle:"Triceps",   desc:"Sets: 3 | Reps: 12-15\n1. Hands forming a diamond.\n2. Lower chest to hands.\n3. Push up.\nTip: Best bodyweight tricep exercise." },
    { id:5020, name:"Bench Dips",              muscle:"Triceps",   desc:"Sets: 3 | Reps: 15-20\n1. Hands on bench, legs out.\n2. Lower until arms 90°.\n3. Push back up.\nTip: Add weight on lap for progression." },
    { id:5021, name:"Close Grip Bench Press",  muscle:"Triceps",   desc:"Sets: 3-4 | Reps: 8-12\n1. Grip shoulder width or narrower.\n2. Lower bar to lower chest.\n3. Press up.\nTip: Compound tricep builder — go heavy." },
    { id:5022, name:"Tricep Kickback",         muscle:"Triceps",   desc:"Sets: 3 | Reps: 12-15 each\n1. Bent over, upper arm parallel to floor.\n2. Extend forearm back fully.\n3. Squeeze at lockout.\nTip: Full lockout every rep." },
    { id:5023, name:"Cable Overhead Ext",      muscle:"Triceps",   desc:"Sets: 3 | Reps: 12-15\n1. Rope attachment, cable behind head.\n2. Extend arms forward overhead.\n3. Slow return.\nTip: Constant tension on long head." },
    { id:5024, name:"Single Arm Pushdown",     muscle:"Triceps",   desc:"Sets: 3 | Reps: 12-15 each\n1. One hand on cable handle.\n2. Push down to full lockout.\n3. Controlled return.\nTip: Fixes left/right imbalances." },
    { id:5025, name:"Tate Press",              muscle:"Triceps",   desc:"Sets: 3 | Reps: 12\n1. Lie flat, DBs above chest, elbows out.\n2. Lower DBs to chest by bending elbows.\n3. Press back to start.\nTip: Medial head focus." },
    { id:5026, name:"Rolling Tricep Extension",muscle:"Triceps",   desc:"Sets: 3 | Reps: 12\n1. Start like skull crusher.\n2. Roll bar back past head.\n3. Press back up engaging triceps.\nTip: Greater ROM than regular skull crusher." },
    { id:5027, name:"French Press",            muscle:"Triceps",   desc:"Sets: 3 | Reps: 10-12\n1. Seated, EZ bar overhead.\n2. Lower behind head.\n3. Extend back up.\nTip: Same as skull crusher but seated." },
    { id:5028, name:"Parallel Bar Dips",       muscle:"Triceps",   desc:"Sets: 3-4 | Reps: 10-15\n1. Upright torso, hands on parallel bars.\n2. Lower body until arms 90°.\n3. Drive back up.\nTip: More tricep than chest dips." },

    // ══ CORE ═══════════════════════════════════════════════
    { id:6002, name:"Plank",                   muscle:"Core",      desc:"Sets: 3 | Duration: 45-90s\n1. Forearms on floor, body straight.\n2. Squeeze abs and glutes.\n3. Don't let hips sag.\nTip: Progress by adding 5 seconds per week." },
    { id:6003, name:"Hanging Leg Raise",       muscle:"Core",      desc:"Sets: 3 | Reps: 12\n1. Hang from pull-up bar.\n2. Lift legs to 90° or higher.\n3. Lower slowly — don't swing.\nTip: Hardest ab exercise. Bent knees first." },
    { id:6014, name:"Crunches",                muscle:"Core",      desc:"Sets: 3 | Reps: 20-30\n1. Lie on back, hands behind head.\n2. Crunch upper body toward knees.\n3. Slow controlled lower.\nTip: Don't pull your neck." },
    { id:6020, name:"Russian Twist",           muscle:"Core",      desc:"Sets: 3 | Reps: 20\n1. Sit at 45°, feet off floor.\n2. Rotate torso side to side.\n3. Touch floor each side.\nTip: Add plate for more resistance." },
    { id:6021, name:"Dead Bug",                muscle:"Core",      desc:"Sets: 3 | Reps: 10 each side\n1. Lie on back, arms and legs up.\n2. Lower opposite arm and leg.\n3. Return and repeat.\nTip: Lower back must stay on floor." },
    { id:6022, name:"Cable Crunch",            muscle:"Core",      desc:"Sets: 3 | Reps: 15-20\n1. Rope at top of cable.\n2. Kneel, crunch down to knees.\n3. Slow return.\nTip: Round the spine — don't hip hinge." },
    { id:6023, name:"Ab Roller",               muscle:"Core",      desc:"Sets: 3 | Reps: 8-12\n1. Kneel, hands on roller.\n2. Roll forward until body straight.\n3. Pull back using abs only.\nTip: One of the hardest ab exercises." },
    { id:6024, name:"Mountain Climbers",       muscle:"Core",      desc:"Sets: 3 | Reps: 30 each\n1. High plank position.\n2. Drive knees to chest alternating.\n3. Fast pace — keep hips down.\nTip: Also a great cardio finisher." },
    { id:6025, name:"Bicycle Crunch",          muscle:"Core",      desc:"Sets: 3 | Reps: 20 each\n1. Hands behind head, lying.\n2. Rotate elbow to opposite knee.\n3. Fully extend other leg.\nTip: Slow and controlled — don't rush." },
    { id:6026, name:"Leg Raise (Floor)",       muscle:"Core",      desc:"Sets: 3 | Reps: 15\n1. Lie flat, legs straight.\n2. Raise legs to 90°.\n3. Lower slowly — don't let heels touch.\nTip: Lower back stays pressed to floor." },
    { id:6027, name:"V-Up",                    muscle:"Core",      desc:"Sets: 3 | Reps: 15\n1. Lie flat, arms overhead.\n2. Lift arms and legs simultaneously.\n3. Touch toes at top.\n4. Lower slowly.\nTip: Advanced — tuck crunch is easier." },
    { id:6028, name:"Pallof Press",            muscle:"Core",      desc:"Sets: 3 | Reps: 12 each\n1. Cable at chest, facing sideways.\n2. Press arms straight out.\n3. Hold 2 seconds.\n4. Return.\nTip: Anti-rotation core — very underrated." },
    { id:6029, name:"Dragon Flag",             muscle:"Core",      desc:"Sets: 3 | Reps: 5-8\n1. Grip bench above head.\n2. Raise body to straight position.\n3. Lower body keeping it rigid.\nTip: Elite ab exercise. Build to it slowly." },
    { id:8005, name:"Plank Variations",        muscle:"Core",      desc:"3 Rounds:\n1. Standard Plank: 60s\n2. Side Plank L: 30s\n3. Side Plank R: 30s\n4. Plank Hip Dips: 20 reps\nRest 30s between." },

    // ══ CARDIO ═════════════════════════════════════════════
    { id:701,  name:"HIIT Circuit",            muscle:"Cardio",    desc:"Duration: 20-30 mins\n20s ON / 10s OFF × 8 rounds:\n1. Jump squats\n2. Mountain climbers\n3. Burpees\n4. High knees\nCalories: ~400-600 per session." },
    { id:8001, name:"Treadmill Run",           muscle:"Cardio",    desc:"Duration: 20-30 mins\n1. Warm up 5 mins walk.\n2. Run at moderate pace.\n3. Cool down 5 mins.\nCalories: ~300-400 per session." },
    { id:8002, name:"Jump Rope",               muscle:"Cardio",    desc:"Duration: 15-20 mins\n3 rounds × 5 mins:\n1. Standard jump.\n2. Alternating feet.\n3. Double unders.\nRest 1 min between rounds." },
    { id:8003, name:"Stationary Bike",         muscle:"Cardio",    desc:"Duration: 30 mins\nWarm up 5 mins.\nModerate-high intensity 20 mins.\nCool down 5 mins.\nCalories: ~250-350 per session." },
    { id:8004, name:"Stairmaster",             muscle:"Cardio",    desc:"Duration: 20-25 mins\nLevel 6-10.\nKeep posture upright.\nDon't lean on handrails.\nCalories: ~200-300 per session." },
    { id:8006, name:"Swimming",                muscle:"Cardio",    desc:"Duration: 30-45 mins\nFreestyle for endurance.\nBreaststroke for recovery.\nRest 30s between laps.\nCalories: ~400-600 per session." },
    { id:8007, name:"Rowing Machine",          muscle:"Cardio",    desc:"Duration: 20-30 mins\n1. Drive with legs first.\n2. Lean back and pull.\n3. Return in reverse.\nCalories: ~250-350 per session." },
    { id:8008, name:"Elliptical",              muscle:"Cardio",    desc:"Duration: 30-40 mins\nResistance 6-12.\nPush and pull handles.\nMaintain 130-150 bpm.\nCalories: ~250-400 per session." },
    { id:8009, name:"Sprint Intervals",        muscle:"Cardio",    desc:"Duration: 20-25 mins\n10 rounds:\n30s ALL OUT sprint\n90s recovery walk.\nCalories: ~350-500 per session." },
    { id:8010, name:"Boxing / Shadowboxing",   muscle:"Cardio",    desc:"Duration: 20-30 mins\n3-min rounds.\nJab, cross, hook, uppercut combos.\nRest 1 min between rounds.\nCalories: ~300-450 per session." },
    { id:8011, name:"Incline Walk",            muscle:"Cardio",    desc:"Duration: 30-45 mins\nTreadmill at 10-15% incline.\nSpeed: 4-6 km/h.\nKeep arms swinging.\nCalories: ~250-400 per session." },
    { id:8012, name:"Battle Ropes",            muscle:"Cardio",    desc:"Duration: 15-20 mins\n40s ON / 20s REST × 8-10 rounds:\n1. Alternating waves.\n2. Slams.\n3. Circles.\nCalories: ~300-400 per session." },
    { id:8013, name:"Sled Push / Pull",        muscle:"Cardio",    desc:"Sets: 6-10 lengths\n1. Low drive position, push sled.\n2. Walk back, hook rope, pull.\n3. Rest 90s between.\nCalories: ~300-500 per session." },
    { id:8014, name:"Burpees",                 muscle:"Cardio",    desc:"Sets: 4-6 | Reps: 10-15\n1. Squat down, jump feet back.\n2. Push-up.\n3. Jump feet forward.\n4. Jump and clap overhead.\nCalories: ~10-12 per minute." },
    { id:8015, name:"Outdoor Cycling",         muscle:"Cardio",    desc:"Duration: 45-90 mins\nMaintain cadence 75-90 rpm.\nAlternate flat and hill terrain.\nCalories: ~400-800 per hour." }
];

/* =========================================================
   T&T FOOD LIBRARY (130+ foods)
   ========================================================= */
const foodLibrary = [
    { n:"egg", p:6, c:1, f:5, cal:72 }, { n:"fried egg", p:6, c:0, f:5, cal:72 },
    { n:"boiled egg", p:6, c:0, f:5, cal:68 }, { n:"scrambled eggs", p:12, c:1, f:10, cal:145 },
    { n:"egg white", p:4, c:0, f:0, cal:17 }, { n:"toast", p:3, c:15, f:1, cal:80 },
    { n:"hops bread", p:4, c:30, f:2, cal:155 }, { n:"bread", p:3, c:15, f:1, cal:80 },
    { n:"cheese", p:7, c:1, f:9, cal:113 }, { n:"butter", p:0, c:0, f:12, cal:108 },
    { n:"oats", p:5, c:27, f:3, cal:155 }, { n:"sada roti", p:8, c:52, f:3, cal:268 },
    { n:"sada", p:8, c:52, f:3, cal:268 }, { n:"coconut bake", p:5, c:45, f:12, cal:310 },
    { n:"fried bake", p:4, c:40, f:14, cal:300 }, { n:"float bake", p:4, c:38, f:8, cal:245 },
    { n:"dhalpuri", p:10, c:55, f:12, cal:360 }, { n:"dhalpuri roti", p:10, c:55, f:12, cal:360 },
    { n:"bus up shut", p:8, c:50, f:14, cal:350 }, { n:"paratha", p:8, c:50, f:14, cal:350 },
    { n:"paratha roti", p:8, c:50, f:14, cal:350 }, { n:"aloo roti", p:9, c:58, f:12, cal:380 },
    { n:"pumpkin roti", p:7, c:52, f:10, cal:325 }, { n:"roti", p:8, c:48, f:10, cal:300 },
    { n:"dumplings", p:3, c:22, f:1, cal:108 }, { n:"boiled dumpling", p:3, c:22, f:1, cal:108 },
    { n:"accra", p:8, c:15, f:6, cal:148 }, { n:"saltfish fritters", p:8, c:15, f:6, cal:148 },
    { n:"buljol", p:18, c:4, f:3, cal:115 }, { n:"saltfish buljol", p:18, c:4, f:3, cal:115 },
    { n:"smoke herring", p:22, c:0, f:8, cal:165 }, { n:"smoked herring", p:22, c:0, f:8, cal:165 },
    { n:"saltfish", p:22, c:0, f:2, cal:108 }, { n:"salted cod", p:22, c:0, f:2, cal:108 },
    { n:"cornmeal porridge", p:5, c:45, f:5, cal:240 }, { n:"farine porridge", p:3, c:50, f:2, cal:230 },
    { n:"oat porridge", p:8, c:42, f:6, cal:250 }, { n:"cream of wheat", p:5, c:38, f:1, cal:180 },
    { n:"pumpkin porridge", p:4, c:40, f:4, cal:210 }, { n:"tomato choka", p:2, c:8, f:3, cal:65 },
    { n:"baigan choka", p:2, c:10, f:3, cal:75 }, { n:"roasted pepper choka", p:1, c:8, f:0, cal:40 },
    { n:"mango choka", p:1, c:12, f:0, cal:52 }, { n:"bhaji", p:4, c:6, f:2, cal:60 },
    { n:"spinach bhaji", p:4, c:6, f:2, cal:60 }, { n:"bhagi", p:4, c:6, f:2, cal:60 },
    { n:"chicken", p:30, c:0, f:4, cal:165 }, { n:"stew chicken", p:35, c:5, f:12, cal:280 },
    { n:"curry chicken", p:32, c:6, f:14, cal:300 }, { n:"fried chicken", p:25, c:12, f:20, cal:350 },
    { n:"brown stew chicken", p:33, c:6, f:12, cal:280 }, { n:"geera chicken", p:38, c:2, f:14, cal:296 },
    { n:"bbq chicken", p:32, c:10, f:12, cal:280 }, { n:"baked chicken", p:35, c:0, f:8, cal:220 },
    { n:"grilled chicken", p:38, c:0, f:5, cal:200 }, { n:"chicken breast", p:38, c:0, f:4, cal:190 },
    { n:"curry duck", p:30, c:5, f:20, cal:320 }, { n:"smoked duck", p:28, c:0, f:18, cal:280 },
    { n:"stew pork", p:32, c:5, f:18, cal:320 }, { n:"pork chops", p:30, c:0, f:14, cal:250 },
    { n:"geera pork", p:36, c:3, f:16, cal:310 }, { n:"pigtail", p:20, c:0, f:25, cal:305 },
    { n:"bacon", p:12, c:0, f:18, cal:215 }, { n:"beef", p:26, c:0, f:17, cal:250 },
    { n:"stew beef", p:35, c:5, f:15, cal:310 }, { n:"curry beef", p:32, c:6, f:16, cal:320 },
    { n:"stew oxtail", p:28, c:5, f:22, cal:340 }, { n:"oxtail", p:28, c:5, f:22, cal:340 },
    { n:"cow heel", p:30, c:8, f:12, cal:280 }, { n:"liver", p:26, c:5, f:8, cal:200 },
    { n:"black pudding", p:12, c:15, f:20, cal:300 }, { n:"souse", p:25, c:8, f:10, cal:240 },
    { n:"pepperpot", p:30, c:12, f:18, cal:340 }, { n:"curry goat", p:35, c:5, f:18, cal:330 },
    { n:"stew goat", p:33, c:5, f:16, cal:310 }, { n:"curry mutton", p:35, c:5, f:18, cal:330 },
    { n:"fish", p:22, c:0, f:5, cal:150 }, { n:"fried fish", p:25, c:8, f:12, cal:250 },
    { n:"stew fish", p:25, c:5, f:8, cal:200 }, { n:"curry fish", p:24, c:6, f:10, cal:220 },
    { n:"baked fish", p:28, c:0, f:5, cal:165 }, { n:"grilled fish", p:28, c:0, f:5, cal:160 },
    { n:"king fish", p:28, c:0, f:5, cal:160 }, { n:"carite", p:26, c:0, f:4, cal:145 },
    { n:"snapper", p:26, c:0, f:4, cal:140 }, { n:"flying fish", p:24, c:0, f:3, cal:130 },
    { n:"tilapia", p:26, c:0, f:3, cal:130 }, { n:"salmon", p:30, c:0, f:13, cal:235 },
    { n:"tuna", p:25, c:0, f:1, cal:110 }, { n:"canned tuna", p:25, c:0, f:1, cal:110 },
    { n:"shark", p:30, c:0, f:4, cal:160 }, { n:"shrimp", p:20, c:1, f:1, cal:100 },
    { n:"curry shrimp", p:22, c:5, f:8, cal:185 }, { n:"stew shrimp", p:20, c:5, f:5, cal:155 },
    { n:"pepper shrimp", p:20, c:3, f:5, cal:140 }, { n:"garlic shrimp", p:20, c:2, f:8, cal:165 },
    { n:"curry crab", p:22, c:8, f:10, cal:220 }, { n:"crab", p:20, c:0, f:2, cal:100 },
    { n:"stuffed crab back", p:25, c:12, f:15, cal:285 }, { n:"lobster", p:24, c:2, f:2, cal:125 },
    { n:"conch", p:18, c:3, f:1, cal:95 }, { n:"lambie", p:18, c:3, f:1, cal:95 },
    { n:"fish broth", p:30, c:15, f:5, cal:220 },
    { n:"rice", p:3, c:28, f:0, cal:130 }, { n:"white rice", p:3, c:28, f:0, cal:130 },
    { n:"brown rice", p:4, c:26, f:1, cal:130 }, { n:"fried rice", p:6, c:45, f:8, cal:280 },
    { n:"chinese fried rice", p:8, c:48, f:10, cal:320 }, { n:"pigeon peas rice", p:7, c:45, f:2, cal:230 },
    { n:"rice and peas", p:7, c:45, f:2, cal:230 }, { n:"red beans rice", p:8, c:46, f:2, cal:240 },
    { n:"macaroni pie", p:12, c:40, f:18, cal:400 }, { n:"pasta", p:7, c:38, f:5, cal:225 },
    { n:"macaroni", p:7, c:38, f:5, cal:225 },
    { n:"dasheen", p:3, c:35, f:0, cal:150 }, { n:"yam", p:2, c:28, f:0, cal:120 },
    { n:"cassava", p:1, c:38, f:0, cal:160 }, { n:"eddoes", p:3, c:30, f:0, cal:135 },
    { n:"sweet potato", p:2, c:20, f:0, cal:86 }, { n:"breadfruit", p:2, c:25, f:0, cal:110 },
    { n:"fried breadfruit", p:2, c:28, f:8, cal:200 }, { n:"plantain", p:1, c:30, f:0, cal:122 },
    { n:"fried plantain", p:1, c:33, f:5, cal:180 }, { n:"green fig", p:1, c:23, f:0, cal:90 },
    { n:"green banana", p:1, c:23, f:0, cal:90 }, { n:"potato", p:3, c:22, f:0, cal:100 },
    { n:"pumpkin", p:1, c:8, f:0, cal:36 },
    { n:"pelau", p:25, c:45, f:10, cal:450 }, { n:"chicken pelau", p:28, c:48, f:12, cal:480 },
    { n:"pork pelau", p:30, c:46, f:15, cal:500 }, { n:"oil down", p:22, c:40, f:25, cal:480 },
    { n:"coo coo", p:4, c:35, f:3, cal:185 }, { n:"callaloo", p:5, c:10, f:8, cal:120 },
    { n:"dhal", p:8, c:20, f:2, cal:140 }, { n:"channa", p:9, c:27, f:3, cal:170 },
    { n:"chickpeas", p:9, c:27, f:3, cal:170 }, { n:"lentil peas", p:9, c:20, f:1, cal:130 },
    { n:"lentils", p:9, c:20, f:1, cal:130 }, { n:"red beans", p:8, c:22, f:1, cal:130 },
    { n:"pigeon peas", p:8, c:23, f:1, cal:135 }, { n:"split peas", p:8, c:21, f:1, cal:125 },
    { n:"corn soup", p:10, c:35, f:8, cal:250 }, { n:"chicken soup", p:25, c:20, f:8, cal:260 },
    { n:"beef soup", p:28, c:18, f:10, cal:280 }, { n:"cow heel soup", p:35, c:10, f:15, cal:320 },
    { n:"doubles", p:14, c:62, f:16, cal:420 }, { n:"doubles slight", p:13, c:58, f:14, cal:390 },
    { n:"aloo pie", p:5, c:40, f:12, cal:300 }, { n:"pholourie", p:2, c:15, f:5, cal:110 },
    { n:"saheena", p:4, c:18, f:6, cal:145 }, { n:"bake and shark", p:40, c:60, f:25, cal:750 },
    { n:"bake and saltfish", p:30, c:55, f:15, cal:590 }, { n:"gyros", p:25, c:45, f:20, cal:550 },
    { n:"roti box", p:40, c:85, f:20, cal:780 }, { n:"kfc", p:45, c:35, f:35, cal:800 },
    { n:"royal castle", p:40, c:40, f:30, cal:780 }, { n:"chow mein", p:12, c:48, f:10, cal:330 },
    { n:"peanuts", p:7, c:5, f:14, cal:160 }, { n:"chips", p:2, c:15, f:10, cal:150 },
    { n:"chocolate", p:3, c:25, f:15, cal:250 }, { n:"ice cream", p:4, c:30, f:14, cal:270 },
    { n:"kurma", p:2, c:20, f:8, cal:160 }, { n:"tamarind ball", p:1, c:25, f:0, cal:100 },
    { n:"toolum", p:1, c:30, f:5, cal:170 }, { n:"sugar cake", p:1, c:28, f:3, cal:145 },
    { n:"cassava pone", p:3, c:45, f:8, cal:265 }, { n:"pumpkin pone", p:3, c:42, f:8, cal:255 },
    { n:"sweet bread", p:5, c:55, f:12, cal:350 }, { n:"black cake", p:4, c:70, f:18, cal:460 },
    { n:"pastelle", p:15, c:45, f:20, cal:420 }, { n:"barfi", p:5, c:40, f:12, cal:290 },
    { n:"gulab jamun", p:3, c:35, f:8, cal:225 }, { n:"ladoo", p:4, c:38, f:10, cal:260 },
    { n:"sawine", p:5, c:45, f:6, cal:255 },
    { n:"mango chow", p:1, c:28, f:0, cal:115 }, { n:"pineapple chow", p:1, c:25, f:0, cal:100 },
    { n:"mango", p:1, c:25, f:0, cal:100 }, { n:"banana", p:1, c:27, f:0, cal:105 },
    { n:"pawpaw", p:1, c:15, f:0, cal:60 }, { n:"papaya", p:1, c:15, f:0, cal:60 },
    { n:"coconut water", p:0, c:10, f:0, cal:45 }, { n:"mauby", p:0, c:28, f:0, cal:115 },
    { n:"sorrel", p:0, c:22, f:0, cal:90 }, { n:"sea moss", p:1, c:25, f:0, cal:105 },
    { n:"passion fruit juice", p:1, c:28, f:0, cal:120 }, { n:"solo", p:0, c:35, f:0, cal:145 },
    { n:"carib beer", p:1, c:12, f:0, cal:150 }, { n:"stag beer", p:1, c:13, f:0, cal:155 },
    { n:"juice", p:0, c:26, f:0, cal:110 }, { n:"milk", p:8, c:12, f:5, cal:120 },
    { n:"protein shake", p:25, c:5, f:2, cal:140 }, { n:"whey protein", p:25, c:5, f:2, cal:140 }
];

/* =========================================================
   MEAL IDEAS
   ========================================================= */
const mealIdeas = {
    Breakfast:[
        { t:"Saltfish Buljol & Sada Roti", d:"Classic Trini breakfast", m:"P:38 C:68 F:18 | Cal:580" },
        { t:"Doubles (2 slight)", d:"Street food staple", m:"P:28 C:124 F:32 | Cal:840" },
        { t:"Smoke Herring & Coconut Bake", d:"Rich smoked fish", m:"P:35 C:58 F:25 | Cal:620" },
        { t:"Bake & Saltfish", d:"Fried bake with stewed saltfish", m:"P:34 C:55 F:18 | Cal:530" },
        { t:"Cornmeal Porridge", d:"Condensed milk, nutmeg", m:"P:10 C:88 F:10 | Cal:480" },
        { t:"Eggs & Hops Bread", d:"3 scrambled eggs, 2 hops bread", m:"P:27 C:35 F:18 | Cal:415" },
        { t:"Oat Porridge & Banana", d:"Oats, banana, cinnamon", m:"P:10 C:60 F:6 | Cal:335" },
        { t:"Accra & Fried Bake", d:"Saltfish fritters + fried bake", m:"P:20 C:58 F:22 | Cal:510" },
        { t:"Dhalpuri & Tomato Choka", d:"Soft roti + fire-roasted tomato", m:"P:12 C:68 F:14 | Cal:445" },
        { t:"Protein Smoothie", d:"Whey, oats, banana, sea moss", m:"P:35 C:48 F:5 | Cal:385" },
        { t:"Bhaji & Float Bake", d:"Sautéed spinach + float bake", m:"P:8 C:48 F:10 | Cal:310" },
        { t:"Pholourie & Tamarind Sauce", d:"6 pholourie pieces", m:"P:8 C:52 F:10 | Cal:335" }
    ],
    Lunch:[
        { t:"Chicken Pelau", d:"Chicken, pigeon peas, rice", m:"P:45 C:65 F:15 | Cal:610" },
        { t:"Curry Chicken & Dhalpuri", d:"Bone-in curry + channa", m:"P:40 C:90 F:20 | Cal:780" },
        { t:"Stew Chicken & Rice", d:"Rice, red beans, salad", m:"P:45 C:70 F:12 | Cal:600" },
        { t:"Curry Duck & Rice", d:"Slow-cooked duck", m:"P:42 C:68 F:22 | Cal:660" },
        { t:"Geera Chicken & Rice", d:"Cumin chicken + rice", m:"P:48 C:55 F:14 | Cal:555" },
        { t:"Fish Broth & Provision", d:"King fish, dasheen, dumplings", m:"P:38 C:55 F:8 | Cal:455" },
        { t:"Dhal, Rice & Bhaji", d:"Saffron dhal, spinach, rice", m:"P:15 C:85 F:10 | Cal:450" },
        { t:"Curry Goat & Rice", d:"Boneless goat, rice, coleslaw", m:"P:50 C:75 F:25 | Cal:700" },
        { t:"Corn Soup (Full Bowl)", d:"Split peas, dumplings, pigtail", m:"P:18 C:55 F:14 | Cal:425" },
        { t:"Chinese Fried Rice & Chicken", d:"Trini Chinese style", m:"P:35 C:80 F:20 | Cal:680" },
        { t:"Curry Crab & Dumpling", d:"Tobago classic", m:"P:35 C:70 F:15 | Cal:560" },
        { t:"Lentil Peas & Brown Rice", d:"Clean, high-protein vegetarian", m:"P:18 C:80 F:8 | Cal:472" }
    ],
    Dinner:[
        { t:"Grilled Fish & Salad", d:"King fish, fresh greens", m:"P:50 C:10 F:12 | Cal:360" },
        { t:"Stew Oxtail & Rice & Peas", d:"Slow-cooked oxtail", m:"P:45 C:60 F:30 | Cal:720" },
        { t:"Oil Down", d:"Breadfruit, pigtail, coconut", m:"P:25 C:80 F:35 | Cal:750" },
        { t:"Geera Chicken (No Rice)", d:"Dry spiced chicken — high protein", m:"P:50 C:5 F:15 | Cal:350" },
        { t:"Baked Salmon & Steamed Veg", d:"Salmon, broccoli, callaloo", m:"P:45 C:15 F:20 | Cal:425" },
        { t:"Pepper Shrimp & Rice", d:"Trini hot pepper shrimp", m:"P:38 C:55 F:12 | Cal:490" },
        { t:"Curry Goat & Roti", d:"Boneless goat, bus up shut", m:"P:52 C:72 F:28 | Cal:765" },
        { t:"Coo-Coo & Callaloo", d:"Cornmeal coo-coo, crab callaloo", m:"P:22 C:58 F:18 | Cal:482" },
        { t:"Stew Chicken & Provision", d:"Chicken, dasheen, eddoes", m:"P:45 C:65 F:14 | Cal:580" },
        { t:"KFC (2pc + Fries)", d:"Cheat meal — original recipe", m:"P:45 C:35 F:35 | Cal:800" }
    ],
    Snack:[
        { t:"Doubles (1)", d:"Single doubles", m:"P:14 C:62 F:16 | Cal:420" },
        { t:"Pholourie (6)", d:"With tamarind sauce", m:"P:5 C:35 F:8 | Cal:240" },
        { t:"Aloo Pie", d:"Classic street food", m:"P:5 C:40 F:12 | Cal:300" },
        { t:"Bake & Shark (Half)", d:"Maracas classic, half portion", m:"P:20 C:30 F:12 | Cal:375" },
        { t:"Mango Chow", d:"Green mango, pepper, shadow beni", m:"P:1 C:28 F:0 | Cal:115" },
        { t:"Boiled Channa", d:"Lightly salted, high fibre", m:"P:9 C:27 F:3 | Cal:170" },
        { t:"Coconut Water", d:"Fresh from the nut", m:"P:0 C:10 F:0 | Cal:45" },
        { t:"Cassava Pone", d:"Dense sweet cassava cake", m:"P:3 C:45 F:8 | Cal:265" },
        { t:"Protein Shake", d:"Whey + water or milk", m:"P:25 C:5 F:2 | Cal:140" },
        { t:"Sea Moss Drink", d:"Natural, milk, cinnamon", m:"P:1 C:25 F:0 | Cal:105" }
    ]
};

/* =========================================================
   WORKOUT ROUTINES
   ========================================================= */
const routines = {
    male: {
        shred: {
            1:{focus:"Push — Chest & Shoulders", warmup:"5 min Arm Circles + 20 Push-Ups", ex:[1001,1002,1004,1008,4001,4002,5002,8001]},
            2:{focus:"Pull — Back & Biceps",     warmup:"5 min Band Pulls + Face Pulls",   ex:[2001,2002,2003,2008,2006,5001,5003,8002]},
            3:{focus:"Legs — Squat Focus",       warmup:"5 min Squats + Lunges",           ex:[3001,3002,3004,3005,3006,3007,3008,8001]},
            4:{focus:"Push — Hypertrophy",       warmup:"5 min Incline Walk",              ex:[1003,1007,1010,1009,4003,4006,5007,8003]},
            5:{focus:"Pull — Thickness",         warmup:"5 min Rowing Machine",            ex:[2001,2004,2005,2007,2009,2011,5006,8004]},
            6:{focus:"Legs — Hinge Focus",       warmup:"5 min Glute Bridges ×20",        ex:[3003,3004,3010,3011,3006,3007,6001,8001]},
            0:{focus:"REST DAY", warmup:"Light Stretching", ex:[]}
        },
        bulk: {
            1:{focus:"Chest & Triceps — Heavy", warmup:"5 min Chest Stretch + Push-Ups", ex:[1001,1002,1008,1003,1005,5004,5021,5002]},
            2:{focus:"Back & Biceps — Heavy",   warmup:"5 min Rower",                    ex:[2001,2002,2003,2004,2007,5001,5003,5006]},
            3:{focus:"Legs — Max Strength",     warmup:"5 min Leg Swings + Squats",      ex:[3001,3009,3002,3003,3005,3006,3007,6001]},
            4:{focus:"Shoulders & Arms",         warmup:"5 min Shoulder Rotations",       ex:[4001,4002,4003,4005,5001,5004,5006,5007]},
            5:{focus:"Full Body Compound",       warmup:"5 min Light Row",                ex:[2001,3001,1001,4001,3003,6001,6005,8001]},
            6:{focus:"Arms & Core",              warmup:"5 min Jump Rope",               ex:[5001,5003,5004,5021,5007,6002,6003,8005]},
            0:{focus:"REST DAY", warmup:"Foam Roll & Stretch", ex:[]}
        },
        tone: {
            1:{focus:"Upper Body Circuit",  warmup:"5 min Jumping Jacks", ex:[1001,4001,2002,5001,5002,6002,8001]},
            2:{focus:"Lower Body",          warmup:"5 min Bike",          ex:[3001,3002,3003,6001,3007,3008,8003]},
            3:{focus:"Push & Core",         warmup:"5 min Rower",         ex:[1006,1004,4002,6002,6003,8005,8002]},
            4:{focus:"Pull & Shoulders",    warmup:"5 min Band Pull-Aparts", ex:[2002,2004,2005,4003,4006,5001,8004]},
            5:{focus:"Legs & Glutes",       warmup:"5 min Stairmaster",   ex:[3001,3004,6001,6004,3007,6002,8001]},
            6:{focus:"Cardio & Core",       warmup:"5 min Walk",          ex:[8001,8002,8003,6002,6003,8005]},
            0:{focus:"REST DAY", warmup:"Yoga or Walk", ex:[]}
        }
    },
    female: {
        tone: {
            1:{focus:"Glutes & Legs",      warmup:"5 min Stairmaster",       ex:[6001,3003,6004,3004,3006,3010,1004,8001]},
            2:{focus:"Upper Body",          warmup:"5 min Rower",             ex:[1004,4002,4006,2010,2008,5002,5001,8003]},
            3:{focus:"Quads & Core",        warmup:"5 min Bike",              ex:[3001,3005,3011,3006,3010,8002,8004,8005]},
            4:{focus:"Full Body A",         warmup:"5 min Jumping Jacks",     ex:[3003,6001,1011,2005,4001,5007,6005,8001]},
            5:{focus:"Full Body B",         warmup:"5 min Walk",              ex:[3001,2001,4003,2008,6002,6004,5006,8003]},
            6:{focus:"Active Rest",         warmup:"Stretch & Breathe",       ex:[]},
            0:{focus:"REST DAY", warmup:"Relax", ex:[]}
        },
        shred: {
            1:{focus:"Glutes & Cardio",    warmup:"5 min Jump Rope",          ex:[6001,6002,6004,6012,3004,8001,8002]},
            2:{focus:"Upper Body + Cardio", warmup:"5 min Rower",             ex:[1004,4002,2004,5001,5002,8003,8004]},
            3:{focus:"Legs & HIIT",         warmup:"5 min Dynamic Stretches", ex:[3001,3004,3006,3007,6001,8002,701]},
            4:{focus:"Full Body Circuit",   warmup:"5 min Bike",              ex:[2001,1001,3003,4001,6001,6002,8001]},
            5:{focus:"Core & Glutes",       warmup:"5 min Plank Hold",        ex:[6001,6002,6003,6004,6005,8004,8005]},
            6:{focus:"Cardio Burn",         warmup:"5 min Easy Walk",         ex:[8001,8002,8003,8004,8005,701]},
            0:{focus:"REST DAY", warmup:"Stretch or Rest", ex:[]}
        },
        bulk: {
            1:{focus:"Glutes & Legs Heavy", warmup:"5 min Leg Swings + Bridges", ex:[3001,3002,6001,3003,3005,3006,3007,6005]},
            2:{focus:"Upper Push",          warmup:"5 min Chest Stretch",         ex:[1001,1002,1003,4001,4002,5004,5007,8001]},
            3:{focus:"Upper Pull",          warmup:"5 min Band Rows",             ex:[2001,2002,2003,2004,2009,5001,5006,8003]},
            4:{focus:"Glutes & Legs Heavy B",warmup:"5 min Stairmaster",          ex:[3003,3004,6001,6004,3010,3011,6005,8004]},
            5:{focus:"Full Body Strength",  warmup:"5 min Rower",                 ex:[2001,1001,3003,4001,6001,5001,8001]},
            6:{focus:"Arms & Core",         warmup:"5 min Jump Rope",             ex:[5001,5004,5006,5007,6002,6003,8005]},
            0:{focus:"REST DAY", warmup:"Foam Roll & Rest", ex:[]}
        }
    }
};

/* =========================================================
   APP STATE
   ========================================================= */
let users=[], activeUserIndex=0, timerInterval=null,
    currentTimerVal=0, currentUnit='kg', currentExId=null,
    progressWeekOffset=0;

/* =========================================================
   CALORIE BURN ESTIMATE
   ========================================================= */
function calculateCalsBurned(u, dateStr) {
    const entries = u.history.filter(h => new Date(h.date).toDateString() === dateStr);
    let total = 0;
    entries.forEach(h => {
        if (h.isCardio) {
            total += parseInt(h.calBurned)||0;
        } else {
            const ex = exerciseDB.find(e => e.id === h.exId);
            if (ex) total += (CAL_PER_SET[ex.muscle]||6);
        }
    });
    return Math.round(total);
}

/* =========================================================
   INIT
   ========================================================= */
function enterArena() {
    document.getElementById('splash-screen').style.display='none';
    document.getElementById('app-container').style.display='flex';
    initApp();
}

function initApp() {
    try {
        const s = localStorage.getItem('spartanUsers');
        if (s) {
            users = JSON.parse(s);
            const u = users[activeUserIndex];
            if (!u.nutritionLogs)  u.nutritionLogs=[];
            if (!u.completedToday) u.completedToday=[];
            if (!u.missedDays)     u.missedDays=[];
            if (!u.goal)           u.goal='shred';
        } else { createDefaultUser(); }
        updateUI();
    } catch(e) { createDefaultUser(); updateUI(); }
}

function createDefaultUser() {
    users=[{id:Date.now(),name:"Warrior",trainerMode:false,gender:'male',
        goal:'shred',history:[],nutritionLogs:[],completedToday:[],missedDays:[]}];
    saveData();
}

function updateUI() {
    const u = users[activeUserIndex];
    document.getElementById('current-user-name').innerText = u.name;
    const mb = document.getElementById('top-left-menu');
    if (u.trainerMode) { mb.style.opacity="1"; mb.style.pointerEvents="auto"; document.getElementById('trainer-caret').style.display="inline"; }
    else { mb.style.opacity="0.5"; mb.style.pointerEvents="none"; document.getElementById('trainer-caret').style.display="none"; }

    const t = new Date().toDateString();
    if (u.lastLogin !== t) { u.completedToday=[]; u.lastLogin=t; saveData(); }

    const logs   = u.nutritionLogs.filter(l => new Date(l.date).toDateString()===t);
    const calIn  = logs.reduce((a,b)=>a+(parseInt(b.cal)||0),0);
    const calOut = calculateCalsBurned(u, t);

    document.getElementById('cal-display').innerText    = calIn;
    document.getElementById('workout-count').innerText  = u.history.filter(h=>new Date(h.date).toDateString()===t).length;
    document.getElementById('cal-burn-display').innerText = calOut;

    // Missed day toggle UI
    const isMissed = (u.missedDays||[]).includes(t);
    const btn = document.getElementById('missed-day-btn');
    if (btn) {
        btn.innerText = isMissed ? '✅ Marked Missed — Tap to Undo' : '☐ Mark Today as Missed (Rollover)';
        btn.style.background = isMissed ? '#1a3a1a' : '#1a1a1a';
    }

    document.getElementById('p-name').value   = u.name;
    document.getElementById('p-gender').value = u.gender;
    document.getElementById('p-goal').value   = u.goal;
    document.getElementById('p-trainer-mode').checked = u.trainerMode||false;
    loadDailyRoutine(u);
    renderWeeklyChart(u);
}

/* =========================================================
   DASHBOARD — DAILY ROUTINE + AD-HOC + ROLLOVER
   ========================================================= */
function loadDailyRoutine(u) {
    const d = new Date().getDay();
    document.getElementById('day-display').innerText =
        ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d];
    const gender = u.gender||'male';
    const goal   = u.goal||'shred';
    const gR = routines[gender]||routines.male;
    const gP = gR[goal]||gR[Object.keys(gR)[0]];
    const plan = gP[d]||{focus:"Rest",warmup:"Stretch",ex:[]};
    document.getElementById('focus-display').innerText = plan.focus;

    const l = document.getElementById('todays-routine-list');
    l.innerHTML = "";

    // Warm up
    if (plan.warmup) {
        l.innerHTML += `<div style="background:#222;padding:10px;margin-bottom:10px;border-left:3px solid orange;border-radius:5px;">
            <strong style="color:orange">🔥 WARM UP:</strong><br>
            <span style="color:#ddd;font-size:0.9rem">${plan.warmup}</span></div>`;
    }

    // Rollover check — was yesterday missed?
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
    const yStr = yesterday.toDateString();
    if ((u.missedDays||[]).includes(yStr)) {
        const yDay  = yesterday.getDay();
        const rPlan = gP[yDay];
        if (rPlan && rPlan.ex && rPlan.ex.length > 0) {
            l.innerHTML += `<div style="background:#1a0e00;border:1px solid #f39c12;border-radius:8px;padding:10px;margin-bottom:10px;">
                <p style="color:#f39c12;margin:0 0 6px;font-weight:bold;font-size:0.9rem;">⚠️ ROLLOVER: ${rPlan.focus}</p>
                <p style="color:#888;font-size:0.75rem;margin:0">Missed yesterday — complete these today</p></div>`;
            rPlan.ex.forEach(id => {
                const ex = exerciseDB.find(e=>e.id===id);
                if (!ex) return;
                l.innerHTML += `<div class="routine-item" style="border-left:3px solid #f39c12;opacity:0.85">
                    <div style="flex:1" onclick="openTracker(${id})">
                        <b>${ex.name}</b> <span style="color:#f39c12;font-size:0.7rem">ROLLOVER</span><br>
                        <small style="color:#aaa">${ex.muscle}</small></div></div>`;
            });
            l.innerHTML += `<div style="border-bottom:1px dashed #333;margin:10px 0;"></div>`;
        }
    }

    // REST DAY
    if (!plan.ex || plan.ex.length===0) {
        l.innerHTML += `<div style="text-align:center;padding:30px;color:#2ecc71;">💤 REST DAY — EAT, SLEEP, RECOVER</div>`;
    } else {
        // Routine exercises
        plan.ex.forEach((id,i) => {
            const ex = exerciseDB.find(e=>e.id===id);
            if (!ex) return;
            const cls = i<3?"major-ex":(i>=6?"core-ex":"minor-ex");
            const c   = u.completedToday && u.completedToday.includes(id);
            const t2  = new Date().toDateString();
            const sets = u.history.filter(h=>h.exId===id && new Date(h.date).toDateString()===t2).length;
            l.innerHTML += `
                <div class="routine-item ${cls}">
                    <div style="flex:1" onclick="openTracker(${id})">
                        <b>${ex.name}</b>${sets>0?` <span style="color:#2ecc71;font-size:0.7rem">${sets} set${sets>1?'s':''}</span>`:''}<br>
                        <small style="color:#aaa">${ex.muscle}</small>
                    </div>
                    <div class="check-container" onclick="toggleComplete(${id})">
                        <div class="custom-checkbox ${c?'checked':''}">
                            <i class="fas fa-check" style="display:${c?'block':'none'};color:black;font-size:12px;"></i>
                        </div>
                    </div>
                </div>`;
        });
    }

    // AD-HOC exercises (logged from library today, NOT in today's routine)
    const t3 = new Date().toDateString();
    const todayHistory = u.history.filter(h=>new Date(h.date).toDateString()===t3);
    const routineIds   = new Set(plan.ex||[]);
    const adHocIds     = [...new Set(todayHistory.filter(h=>!routineIds.has(h.exId)).map(h=>h.exId))];
    if (adHocIds.length>0) {
        l.innerHTML += `<div style="margin-top:12px;padding-top:10px;border-top:1px dashed #333;">
            <p style="color:#888;font-size:0.8rem;margin-bottom:6px;">
                <i class="fas fa-plus-circle" style="color:#2ecc71"></i> EXTRA WORK TODAY</p></div>`;
        adHocIds.forEach(id=>{
            const ex = exerciseDB.find(e=>e.id===id);
            if (!ex) return;
            const sets = todayHistory.filter(h=>h.exId===id).length;
            const c    = u.completedToday&&u.completedToday.includes(id);
            l.innerHTML += `
                <div class="routine-item minor-ex">
                    <div style="flex:1" onclick="openTracker(${id})">
                        <b>${ex.name}</b> <span style="color:#2ecc71;font-size:0.7rem">${sets} set${sets>1?'s':''} logged</span><br>
                        <small style="color:#aaa">${ex.muscle}</small>
                    </div>
                    <div class="check-container" onclick="toggleComplete(${id})">
                        <div class="custom-checkbox ${c?'checked':''}">
                            <i class="fas fa-check" style="display:${c?'block':'none'};color:black;font-size:12px;"></i>
                        </div>
                    </div>
                </div>`;
        });
    }
}

/* =========================================================
   WEEKLY CHART — with volume bars + day calorie info
   ========================================================= */
function renderWeeklyChart(u) {
    const div = document.getElementById('weekly-chart');
    div.innerHTML = "";
    const days=['S','M','T','W','T','F','S'];
    const now  = new Date();

    // Find max sets for scaling
    let maxSets = 1;
    for (let i=6;i>=0;i--) {
        const d=new Date(); d.setDate(now.getDate()-i);
        const cnt = u.history.filter(h=>new Date(h.date).toDateString()===d.toDateString()).length;
        if (cnt>maxSets) maxSets=cnt;
    }

    for (let i=6;i>=0;i--) {
        const d=new Date(); d.setDate(now.getDate()-i);
        const dStr = d.toDateString();
        const cnt  = u.history.filter(h=>new Date(h.date).toDateString()===dStr).length;
        const isToday = (i===0);
        const h    = maxSets>0 ? Math.round((cnt/maxSets)*100) : 0;
        const barColor = isToday ? 'var(--gold)' : '#e74c3c';
        const calBurned = calculateCalsBurned(u, dStr);

        div.innerHTML += `
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;min-width:0">
                ${cnt>0?`<span style="font-size:9px;color:#888;margin-bottom:2px">${cnt}</span>`:'<span style="font-size:9px;color:transparent">0</span>'}
                <div style="width:100%;display:flex;align-items:flex-end;height:45px;justify-content:center">
                    <div style="width:70%;background:${barColor};border-radius:3px 3px 0 0;height:${Math.max(h,cnt>0?8:0)}%;min-height:${cnt>0?3:0}px;transition:height 0.3s"></div>
                </div>
                <div style="font-size:10px;color:${isToday?'var(--gold)':'#888'};font-weight:${isToday?'bold':'normal'}">${days[d.getDay()]}</div>
                ${calBurned>0?`<div style="font-size:9px;color:#2ecc71;margin-top:1px">🔥${calBurned}</div>`:'<div style="height:12px"></div>'}
            </div>`;
    }
}

/* =========================================================
   MISSED DAY TOGGLE
   ========================================================= */
function markMissedDay() {
    const u = users[activeUserIndex];
    if (!u.missedDays) u.missedDays=[];
    const t = new Date().toDateString();
    if (u.missedDays.includes(t))
        u.missedDays = u.missedDays.filter(d=>d!==t);
    else
        u.missedDays.push(t);
    saveData(); updateUI();
}

/* =========================================================
   WEEKLY PROGRESS HISTORY MODAL
   ========================================================= */
function showProgressModal() {
    document.getElementById('progress-modal').style.display='flex';
    renderProgressWeek(0);
}

function closeProgressModal() {
    document.getElementById('progress-modal').style.display='none';
}

function navProgressWeek(dir) { renderProgressWeek(progressWeekOffset+dir); }

function renderProgressWeek(offset) {
    progressWeekOffset = offset;
    const u   = users[activeUserIndex];
    const now = new Date();
    // Get Monday of target week
    const dow    = now.getDay()||7;
    const monday = new Date(now);
    monday.setDate(now.getDate()-(dow-1)+(offset*7));
    monday.setHours(0,0,0,0);

    const weekDates=[];
    for (let i=0;i<7;i++) {
        const d=new Date(monday); d.setDate(monday.getDate()+i); weekDates.push(d);
    }

    const wStart = weekDates[0], wEnd = weekDates[6];
    document.getElementById('prog-week-label').innerText =
        `${wStart.toLocaleDateString('en',{month:'short',day:'numeric'})} – ${wEnd.toLocaleDateString('en',{month:'short',day:'numeric',year:'numeric'})}`;

    let totalSets=0, totalCalIn=0, totalCalBurned=0, totalVol=0;

    const dayRows = weekDates.map(date=>{
        const dStr = date.toDateString();
        const h    = u.history.filter(x=>new Date(x.date).toDateString()===dStr);
        const n    = (u.nutritionLogs||[]).filter(x=>new Date(x.date).toDateString()===dStr);
        const sets = h.filter(x=>!x.isCardio).length;
        const vol  = h.filter(x=>!x.isCardio).reduce((a,x)=>a+(parseFloat(x.weight)||0)*(parseFloat(x.reps)||0),0);
        const cb   = calculateCalsBurned(u, dStr);
        const ci   = n.reduce((a,x)=>a+(x.cal||0),0);
        const exs  = [...new Set(h.map(x=>x.exId))];
        totalSets+=sets; totalCalIn+=ci; totalCalBurned+=cb; totalVol+=vol;
        return {date,dStr,sets,vol,cb,ci,exs};
    });

    // Summary row
    let html=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="prog-stat-card"><b>${totalSets}</b><small>Sets</small></div>
        <div class="prog-stat-card"><b>${Math.round(totalVol)}</b><small>Vol (${currentUnit})</small></div>
        <div class="prog-stat-card"><b>${totalCalIn}</b><small>Cal Eaten</small></div>
        <div class="prog-stat-card" style="border-color:#2ecc71"><b style="color:#2ecc71">${totalCalBurned}</b><small>Cal Burned</small></div>
    </div>`;

    // Day breakdown
    dayRows.forEach(r=>{
        const dn   = r.date.toLocaleDateString('en',{weekday:'short',month:'short',day:'numeric'});
        const empty= r.sets===0 && r.ci===0;
        const exNames = r.exs.slice(0,3).map(id=>{const e=exerciseDB.find(x=>x.id===id);return e?e.name:'?';}).join(', ');
        html += `<div style="background:${empty?'#0d0d0d':'#1a1a1a'};border:1px solid ${empty?'#222':'#333'};border-radius:8px;padding:10px;margin-bottom:8px">
            <div style="display:flex;justify-content:space-between">
                <b style="color:${empty?'#444':'#E6C288'};font-size:0.9rem">${dn}</b>
                <span style="font-size:0.75rem;color:#888">${r.sets} sets | 🔥${r.cb} cal</span>
            </div>
            ${r.exs.length>0?`<small style="color:#aaa">${exNames}${r.exs.length>3?` +${r.exs.length-3} more`:''}  |  Cal in: ${r.ci}</small>`:'<small style="color:#444">Rest day</small>'}
        </div>`;
    });

    document.getElementById('prog-content').innerHTML = html;

    // Nav buttons
    document.getElementById('prog-prev').disabled = false;
    document.getElementById('prog-next').disabled = offset>=0;
}

/* =========================================================
   EXERCISE TRACKER MODAL
   ========================================================= */
function openTracker(id) {
    currentExId=id;
    const ex=exerciseDB.find(e=>e.id===id);
    if (!ex) return;
    const isCardio=CARDIO_IDS.includes(id);

    document.getElementById('tracker-modal').style.display='flex';
    document.getElementById('m-title').innerText = ex.name;
    document.getElementById('m-desc').innerText  = ex.desc;

    document.getElementById('strength-fields').style.display = isCardio?'none':'block';
    document.getElementById('cardio-fields').style.display   = isCardio?'block':'none';
    document.getElementById('unit-toggle-row').style.display = isCardio?'none':'flex';
    document.getElementById('rest-timer-btn').style.display  = isCardio?'none':'block';
    document.getElementById('log-btn').innerText             = isCardio?'🏃 LOG SESSION':'+ LOG SET';

    const u=users[activeUserIndex], t=new Date().toDateString();
    const todays=u.history.filter(h=>h.exId===id&&new Date(h.date).toDateString()===t);
    let h="";
    todays.forEach((s,i)=>{
        if (s.isCardio) {
            h+=`<div class="history-item">
                <span>🏃 ${s.duration} min${s.calBurned?' | '+s.calBurned+' cal burned':''}</span>
                <button class="delete-set-btn" onclick="deleteSet('${s.uniqueId}')"><i class="fas fa-trash"></i></button></div>`;
        } else {
            h+=`<div class="history-item">
                <span>Set ${i+1}: ${s.weight}${currentUnit} × ${s.reps} reps</span>
                <button class="delete-set-btn" onclick="deleteSet('${s.uniqueId}')"><i class="fas fa-trash"></i></button></div>`;
        }
    });
    document.getElementById('sets-history').innerHTML = h||
        "<small style='color:#777;padding:8px;display:block'>No entries logged today yet</small>";
}

function saveSet() {
    const isCardio=CARDIO_IDS.includes(currentExId);
    const uid=Date.now().toString()+Math.floor(Math.random()*1000);
    if (isCardio) {
        const dur=document.getElementById('log-duration').value;
        const cal=document.getElementById('log-cardio-cal').value;
        if (!dur) return alert("Enter duration in minutes.");
        users[activeUserIndex].history.push({uniqueId:uid,date:new Date().toISOString(),exId:currentExId,duration:dur,calBurned:cal||0,isCardio:true});
    } else {
        const w=document.getElementById('log-w').value, r=document.getElementById('log-r').value;
        if (!w||!r) return alert("Enter weight and reps.");
        users[activeUserIndex].history.push({uniqueId:uid,date:new Date().toISOString(),exId:currentExId,weight:w,reps:r});
    }
    saveData(); openTracker(currentExId); updateUI();
}

function deleteSet(uid) {
    if (!confirm("Delete this entry?")) return;
    users[activeUserIndex].history=users[activeUserIndex].history.filter(h=>h.uniqueId!==uid);
    saveData(); openTracker(currentExId); updateUI();
}

function toggleComplete(id) {
    const u=users[activeUserIndex];
    if (u.completedToday.includes(id))
        u.completedToday=u.completedToday.filter(x=>x!==id);
    else { u.completedToday.push(id); startRestTimer(120,"REST — NEXT EXERCISE"); }
    saveData(); updateUI();
}

/* =========================================================
   REST TIMER
   ========================================================= */
function startRestTimer(sec,lbl) {
    clearInterval(timerInterval); currentTimerVal=sec;
    document.getElementById('rest-overlay').style.display='flex';
    document.getElementById('timer-label').innerText=lbl;
    document.getElementById('timer-countdown').innerText=fmtTime(sec);
    timerInterval=setInterval(()=>{
        currentTimerVal--;
        document.getElementById('timer-countdown').innerText=fmtTime(currentTimerVal);
        if (currentTimerVal<=0){stopTimer();if(navigator.vibrate)navigator.vibrate([300,100,300]);playBeep();}
    },1000);
}
function stopTimer(){clearInterval(timerInterval);document.getElementById('rest-overlay').style.display='none';}
function fmtTime(s){const m=Math.floor(s/60),sec=s%60;return`${m}:${sec<10?'0'+sec:sec}`;}
function playBeep(){try{const c=new(window.AudioContext||window.webkitAudioContext)();const o=c.createOscillator();o.connect(c.destination);o.frequency.value=880;o.type='sine';o.start();setTimeout(()=>o.stop(),600);}catch(e){}}
function setUnit(u){currentUnit=u;document.getElementById('unit-kg').className=u==='kg'?'unit-opt active':'unit-opt';document.getElementById('unit-lbs').className=u==='lbs'?'unit-opt active':'unit-opt';document.getElementById('weight-label').innerText=`Weight (${u.toUpperCase()})`;if(currentExId)openTracker(currentExId);}
function closeModal(){document.getElementById('tracker-modal').style.display='none';}

/* =========================================================
   NUTRITION — SMART MULTI-FOOD PARSER
   ========================================================= */
function autoFillMacros() {
    const raw=document.getElementById('food-name').value.toLowerCase().trim();
    if (!raw) return alert("Type a food name first.");
    const parts=raw.split(/\s*[+&]\s*/).map(p=>p.trim()).filter(p=>p.length>0);
    let tP=0,tC=0,tF=0,tCal=0,found=[],missed=[];
    parts.forEach(part=>{
        const r=parseFoodPart(part);
        if (r.found){tP+=r.p;tC+=r.c;tF+=r.f;tCal+=r.cal;found.push(r.label);}
        else missed.push(part);
    });
    if (found.length>0){
        document.getElementById('m-prot').value=Math.round(tP);
        document.getElementById('m-carb').value=Math.round(tC);
        document.getElementById('m-fat').value=Math.round(tF);
        document.getElementById('m-cal').value=Math.round(tCal);
        if (missed.length>0) alert(`✅ Found: ${found.join(' + ')}\n\n⚠️ Not found: ${missed.join(', ')}\nAdjust those manually.`);
    } else { alert(`None recognised.\nTry: stew chicken, white rice, doubles, roti, pholourie...`); }
}

function parseFoodPart(part) {
    let mul=1, q=part;
    const lbP=/^(\d+\.?\d*)\s*lbs?\s+(.+)/,kgP=/^(\d+\.?\d*)\s*kg\s+(.+)/,
          gP=/^(\d+\.?\d*)\s*g(?:rams?)?\s+(.+)/,pcsP=/^(\d+\.?\d*)\s*(?:pcs?|pieces?)\s+(.+)/,
          srvP=/^(\d+\.?\d*)\s*servings?\s+(.+)/,numP=/^(\d+\.?\d*)\s+(.+)/;
    let m;
    if ((m=lbP.exec(part))){mul=parseFloat(m[1])*3;q=m[2];}
    else if ((m=kgP.exec(part))){mul=parseFloat(m[1])*7;q=m[2];}
    else if ((m=gP.exec(part))){mul=parseFloat(m[1])/120;q=m[2];}
    else if ((m=pcsP.exec(part))){mul=parseFloat(m[1]);q=m[2];}
    else if ((m=srvP.exec(part))){mul=parseFloat(m[1]);q=m[2];}
    else if ((m=numP.exec(part))&&parseFloat(m[1])<=20){mul=parseFloat(m[1]);q=m[2];}
    q=q.trim();
    let f=foodLibrary.find(x=>x.n===q);
    if (!f) f=foodLibrary.find(x=>q.includes(x.n)&&x.n.length>3);
    if (!f) f=foodLibrary.find(x=>x.n.includes(q)&&q.length>3);
    if (!f){const ws=q.split(/\s+/).filter(w=>w.length>=3);for(const w of ws){f=foodLibrary.find(x=>x.n.includes(w)||w.includes(x.n));if(f)break;}}
    if (f) return {found:true,label:part,p:f.p*mul,c:f.c*mul,f:f.f*mul,cal:f.cal*mul};
    return {found:false};
}

function logMeal(){
    const n=document.getElementById('food-name').value;
    if (!n) return alert("Enter a food name.");
    users[activeUserIndex].nutritionLogs.push({
        id:Date.now(),date:new Date().toISOString(),
        type:document.getElementById('meal-type').value,name:n,
        p:parseInt(document.getElementById('m-prot').value)||0,
        c:parseInt(document.getElementById('m-carb').value)||0,
        f:parseInt(document.getElementById('m-fat').value)||0,
        cal:parseInt(document.getElementById('m-cal').value)||0
    });
    saveData();updateUI();updateMacrosDisplay();
    ['food-name','m-prot','m-carb','m-fat','m-cal'].forEach(id=>document.getElementById(id).value="");
}

function updateMacrosDisplay(){
    const u=users[activeUserIndex],t=new Date().toDateString();
    const l=u.nutritionLogs.filter(x=>new Date(x.date).toDateString()===t);
    let h="",tp=0,tc=0,tf=0,tcal=0;
    l.forEach(x=>{tp+=x.p;tc+=x.c;tf+=x.f;tcal+=x.cal;
        h+=`<div class="meal-log-item">
            <div class="meal-log-details"><b>${x.type}:</b> ${x.name} <span style="color:#E6C288">(${x.cal} cal)</span></div>
            <button class="delete-meal-btn" onclick="deleteMeal(${x.id})"><i class="fas fa-trash"></i></button></div>`;
    });
    document.getElementById('macro-display').innerHTML=`
        <div style="display:flex;justify-content:space-around;background:#222;padding:12px;border-radius:8px;margin-bottom:10px;">
            <span style="color:#3498db;font-weight:bold">P:${tp}g</span>
            <span style="color:#2ecc71;font-weight:bold">C:${tc}g</span>
            <span style="color:#e74c3c;font-weight:bold">F:${tf}g</span>
            <span style="color:#E6C288;font-weight:bold">${tcal} cal</span>
        </div>`;
    document.getElementById('meal-log-list').innerHTML=h||"<p style='color:#555;text-align:center'>No meals logged today.</p>";
}

function deleteMeal(id){
    if (!confirm("Remove?")) return;
    users[activeUserIndex].nutritionLogs=users[activeUserIndex].nutritionLogs.filter(l=>l.id!==id);
    saveData();updateUI();updateMacrosDisplay();
}

function filterMeals(t){
    const c=document.getElementById('meal-prep-container');c.innerHTML="";
    (mealIdeas[t]||[]).forEach(i=>{c.innerHTML+=`<div class="meal-prep-card"><b>${i.t}</b><br>
        <small style="color:#aaa">${i.d}</small><br>
        <span style="color:#E6C288;font-size:11px">${i.m}</span></div>`;});
}

function showNutriTab(t){
    document.getElementById('nutri-track-view').style.display=t==='track'?'block':'none';
    document.getElementById('nutri-ideas-view').style.display=t==='ideas'?'block':'none';
    if (t==='track') updateMacrosDisplay();
    if (t==='ideas') filterMeals('Breakfast');
}

/* =========================================================
   EXERCISE LIBRARY — 2-column grid, grouped by muscle
   ========================================================= */
function filterLibrary(){
    const t=document.getElementById('search-ex').value.toLowerCase();
    const l=document.getElementById('library-list');
    l.innerHTML="";
    let results=exerciseDB.filter(e=>e.name.toLowerCase().includes(t)||e.muscle.toLowerCase().includes(t));
    if (results.length===0){l.innerHTML="<p style='color:#555;text-align:center;padding:20px'>No exercises found.</p>";return;}
    const muscleOrder=['Chest','Back','Shoulders','Legs','Glutes','Biceps','Triceps','Core','Cardio'];
    results.sort((a,b)=>{
        const ai=muscleOrder.indexOf(a.muscle),bi=muscleOrder.indexOf(b.muscle);
        const ao=ai===-1?99:ai,bo=bi===-1?99:bi;
        return ao!==bo?ao-bo:a.name.localeCompare(b.name);
    });
    const mc={Chest:'#e74c3c',Back:'#3498db',Shoulders:'#9b59b6',Legs:'#2ecc71',
              Glutes:'#e91e8c',Biceps:'#e67e22',Triceps:'#f39c12',Core:'#1abc9c',Cardio:'#16a085'};
    const mi={Chest:'🏋️',Back:'🔙',Shoulders:'💪',Legs:'🦵',Glutes:'🍑',
              Biceps:'💪',Triceps:'💪',Core:'⭕',Cardio:'🏃'};
    let lastMuscle='', gridHTML='';
    results.forEach(e=>{
        if (e.muscle!==lastMuscle){
            if (gridHTML) l.innerHTML+=`<div class="lib-grid">${gridHTML}</div>`;
            gridHTML='';
            const color=mc[e.muscle]||'#888';
            l.innerHTML+=`<div class="lib-section-header" style="border-left:4px solid ${color};background:${color}18">
                <span style="color:${color};font-weight:bold;font-size:0.82rem;letter-spacing:1px">${mi[e.muscle]||'●'} ${e.muscle.toUpperCase()}</span>
            </div>`;
            lastMuscle=e.muscle;
        }
        const color=mc[e.muscle]||'#888';
        gridHTML+=`<div class="lib-card" onclick="openTracker(${e.id})">
            <b style="font-size:0.85rem;line-height:1.3">${e.name}</b>
            <small style="color:${color};display:block;margin-top:3px">${e.muscle}</small>
        </div>`;
    });
    if (gridHTML) l.innerHTML+=`<div class="lib-grid">${gridHTML}</div>`;
}

/* =========================================================
   PROFILE & USERS
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
    const m=document.getElementById('user-menu');
    m.style.display=m.style.display==='block'?'none':'block';
    if (m.style.display==='block'){
        const l=document.getElementById('user-list-display');l.innerHTML="";
        users.forEach((u,i)=>l.innerHTML+=`<div class="user-option" onclick="switchUser(${i})" style="padding:10px;cursor:pointer;${i===activeUserIndex?'color:#E6C288;font-weight:bold':''}"><b>${u.name}</b></div>`);
    }
}
function createNewUser(){
    const n=prompt("New user name:");
    if (n&&n.trim()){
        users.push({id:Date.now(),name:n.trim(),trainerMode:false,gender:'male',goal:'shred',history:[],nutritionLogs:[],completedToday:[],missedDays:[]});
        saveData();toggleUserMenu();
    }
}
function switchUser(i){activeUserIndex=i;document.getElementById('user-menu').style.display='none';updateUI();}
function resetCurrentUserData(){if(!confirm("Reset ALL data?"))return;const u=users[activeUserIndex];u.history=[];u.nutritionLogs=[];u.completedToday=[];u.missedDays=[];saveData();updateUI();alert("✅ Reset complete.");}
function deleteCurrentUser(){if(!confirm(`Delete "${users[activeUserIndex].name}"?`))return;if(users.length===1)return emergencyReset();users.splice(activeUserIndex,1);activeUserIndex=0;saveData();document.getElementById('user-menu').style.display='none';updateUI();}
function emergencyReset(){if(confirm("⚠️ FACTORY RESET?")){localStorage.removeItem('spartanUsers');location.reload();}}

/* =========================================================
   NAVIGATION
   ========================================================= */
function nav(id){
    document.querySelectorAll('.tab-content').forEach(e=>e.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(e=>e.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
    if (id==='dashboard') updateUI();
    if (id==='library')   filterLibrary();
    if (id==='nutrition') showNutriTab('track');
}

function saveData(){localStorage.setItem('spartanUsers',JSON.stringify(users));}

