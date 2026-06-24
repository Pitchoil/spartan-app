/* =========================================
   SPARTAN FITNESS APP — FULL BUILD
   Developed by Pawi
   ========================================= */

/* =========================================
   1. MASTER EXERCISE DATABASE (ALL IDs VALID)
   ========================================= */
const exerciseDB = [
    // --- CHEST ---
    { id: 1001, name: "Barbell Bench Press",      muscle: "Chest",     desc: "Sets: 3-4 | Reps: 6-12 | Tempo: 3010\n1. Lie flat, feet planted firm.\n2. Lower bar to mid-chest.\n3. Press explosively upward.\nTip: Retract scapulae before unracking." },
    { id: 1002, name: "Incline Barbell Press",    muscle: "Chest",     desc: "Sets: 3-4 | Reps: 8-12\n1. Set bench 30-45°.\n2. Lower bar to upper chest.\n3. Press straight up.\nTip: Targets upper chest and front delt." },
    { id: 1003, name: "Dumbbell Bench Press",     muscle: "Chest",     desc: "Sets: 3-4 | Reps: 8-12\n1. Lower DBs to sides of chest.\n2. Press up until DBs nearly touch.\nTip: Greater range of motion than barbell." },
    { id: 1004, name: "Cable Crossover",          muscle: "Chest",     desc: "Sets: 3 | Reps: 12-15\n1. Set cables high.\n2. Pull down and across body.\n3. Cross hands at bottom.\nTip: Squeeze chest hard at crossover point." },
    { id: 1005, name: "Weighted Dips",            muscle: "Chest",     desc: "Sets: 3 | Reps: 8-12\n1. Lean forward ~30°.\n2. Lower until shoulders below elbows.\n3. Press back up.\nTip: Forward lean shifts focus to chest." },
    { id: 1006, name: "Push-Ups",                 muscle: "Chest",     desc: "Sets: 3 | Reps: To Failure\n1. Hands shoulder width.\n2. Lower chest to floor.\n3. Keep core tight throughout.\nTip: Pause 1 second at bottom." },
    { id: 1007, name: "Pec Deck",                 muscle: "Chest",     desc: "Sets: 3 | Reps: 12-15\n1. Keep elbows at shoulder height.\n2. Squeeze pads together.\n3. Controlled return.\nTip: Don't let weight stack drop." },
    { id: 1008, name: "Decline Bench Press",      muscle: "Chest",     desc: "Sets: 3-4 | Reps: 8-12\n1. Set bench to decline (-15° to -30°).\n2. Lower bar to lower chest.\n3. Press up explosively.\nTip: Targets lower chest. Use spotter." },
    { id: 1009, name: "Machine Chest Press",      muscle: "Chest",     desc: "Sets: 3 | Reps: 12-15\n1. Adjust seat so handles align with chest.\n2. Press forward to full extension.\n3. Controlled return.\nTip: Good for beginners or burnout sets." },
    { id: 1010, name: "Dumbbell Fly",             muscle: "Chest",     desc: "Sets: 3 | Reps: 12-15\n1. Arms slightly bent, never locked.\n2. Lower DBs wide to feel stretch.\n3. Bring back up squeezing chest.\nTip: Light weight, focus on feel." },
    { id: 1011, name: "Incline Push-Up",          muscle: "Chest",     desc: "Sets: 3 | Reps: 15-20\n1. Hands on elevated surface (bench).\n2. Lower chest to surface.\n3. Push back up.\nTip: Use as warm-up or finisher." },

    // --- BACK ---
    { id: 2001, name: "Conventional Deadlift",    muscle: "Back",      desc: "Sets: 3-5 | Reps: 3-6\n1. Feet hip-width, bar over mid-foot.\n2. Hinge hips back, big breath in.\n3. Drive through heels, lock hips at top.\nTip: Keep bar dragging up shins." },
    { id: 2002, name: "Pull-Up (Wide Grip)",      muscle: "Back",      desc: "Sets: 3-4 | Reps: 6-12\n1. Palms facing away, wide grip.\n2. Pull chest to bar.\n3. Lower with control.\nTip: Dead hang at bottom each rep." },
    { id: 2003, name: "Barbell Bent-Over Row",    muscle: "Back",      desc: "Sets: 4 | Reps: 8-12\n1. Torso at 45°, slight knee bend.\n2. Pull bar into stomach.\n3. Squeeze blades at top.\nTip: Keep back flat, no jerking." },
    { id: 2004, name: "Lat Pulldown",             muscle: "Back",      desc: "Sets: 3 | Reps: 10-12\n1. Wide overhand grip.\n2. Pull bar to upper chest.\n3. Slow return to full stretch.\nTip: Lead with elbows, not hands." },
    { id: 2005, name: "Seated Cable Row",         muscle: "Back",      desc: "Sets: 3 | Reps: 10-12\n1. Sit tall, slight forward lean.\n2. Pull V-handle to stomach.\n3. Squeeze blades, hold 1 second.\nTip: Don't use momentum." },
    { id: 2006, name: "Face Pull",                muscle: "Shoulders", desc: "Sets: 3-4 | Reps: 12-20\n1. Cable at face height, rope attachment.\n2. Pull to face, hands by ears.\n3. Rotate hands back.\nTip: Essential for shoulder health." },
    { id: 2007, name: "T-Bar Row",                muscle: "Back",      desc: "Sets: 3 | Reps: 10-12\n1. Chest supported or standing.\n2. Pull weight to lower chest.\n3. Squeeze hard at top.\nTip: One of the best back builders." },
    { id: 2008, name: "Single Arm DB Row",        muscle: "Back",      desc: "Sets: 3-4 | Reps: 10-12 each side\n1. Brace knee and hand on bench.\n2. Pull DB to hip/ribs.\n3. Full stretch at bottom.\nTip: Don't rotate torso — control it." },
    { id: 2009, name: "Chest Supported Row",      muscle: "Back",      desc: "Sets: 3 | Reps: 10-12\n1. Lie chest-down on incline bench.\n2. Pull DBs up and back.\n3. Squeeze shoulder blades.\nTip: Eliminates lower back stress." },
    { id: 2010, name: "Neutral Grip Pull-Up",     muscle: "Back",      desc: "Sets: 3-4 | Reps: 6-10\n1. Palms facing each other.\n2. Pull chin above bar.\n3. Lower slowly.\nTip: Easier on shoulders than wide grip." },
    { id: 2011, name: "Straight Arm Pulldown",    muscle: "Back",      desc: "Sets: 3 | Reps: 12-15\n1. High cable, arms straight.\n2. Push bar down to thighs.\n3. Squeeze lats hard at bottom.\nTip: Pure lat isolation." },

    // --- LEGS ---
    { id: 3001, name: "Back Squat",               muscle: "Legs",      desc: "Sets: 4-5 | Reps: 6-12\n1. Bar on upper traps.\n2. Feet shoulder width, toes slightly out.\n3. Squat below parallel.\nTip: Knees out, chest up." },
    { id: 3002, name: "Leg Press",                muscle: "Legs",      desc: "Sets: 4 | Reps: 10-15\n1. Feet shoulder width, mid-platform.\n2. Lower until 90° knee bend.\n3. Press through heels.\nTip: Don't let knees cave in." },
    { id: 3003, name: "Romanian Deadlift (RDL)",  muscle: "Legs",      desc: "Sets: 4 | Reps: 8-12\n1. Soft knees, hinge hips back.\n2. Bar tracks down legs.\n3. Feel stretch in hamstrings.\nTip: Keep back flat — stop before rounding." },
    { id: 3004, name: "Bulgarian Split Squat",    muscle: "Legs",      desc: "Sets: 3-4 | Reps: 10 each leg\n1. Rear foot elevated on bench.\n2. Lower back knee toward floor.\n3. Drive through front heel up.\nTip: Hardest leg exercise. Be humble." },
    { id: 3005, name: "Leg Extension",            muscle: "Legs",      desc: "Sets: 3-4 | Reps: 15\n1. Sit with pad above ankles.\n2. Kick up, squeeze quads hard.\n3. Slow 3-second lower.\nTip: Pause 1 second at top." },
    { id: 3006, name: "Lying Leg Curl",           muscle: "Legs",      desc: "Sets: 3-4 | Reps: 12\n1. Lie face down, pad above heels.\n2. Curl heels toward glutes.\n3. Squeeze at top, slow lower.\nTip: Flex glutes to prevent lower back use." },
    { id: 3007, name: "Standing Calf Raise",      muscle: "Legs",      desc: "Sets: 4 | Reps: 15-20\n1. Full stretch at bottom.\n2. Rise as high as possible.\n3. Hold 1 second at top.\nTip: Calves need high reps to grow." },
    { id: 3008, name: "Walking Lunges",           muscle: "Legs",      desc: "Sets: 3 | Reps: 20 total steps\n1. Step forward into lunge.\n2. Drop back knee near floor.\n3. Step through to next lunge.\nTip: Stay upright, don't lean forward." },
    { id: 3009, name: "Front Squat",              muscle: "Legs",      desc: "Sets: 3-4 | Reps: 6-10\n1. Bar rests on front shoulders, elbows high.\n2. Squat deep, stay upright.\n3. Drive up through heels.\nTip: Hits quads harder than back squat." },
    { id: 3010, name: "Leg Press (Wide Stance)",  muscle: "Legs",      desc: "Sets: 4 | Reps: 12-15\n1. Feet wide and high on platform.\n2. Lower deep.\n3. Press through heels.\nTip: Wide stance shifts load to glutes." },
    { id: 3011, name: "Goblet Squat",             muscle: "Legs",      desc: "Sets: 3 | Reps: 12-15\n1. Hold KB or DB at chest.\n2. Feet shoulder width.\n3. Squat deep, elbows inside knees.\nTip: Great for beginners and warm-up." },

    // --- SHOULDERS ---
    { id: 4001, name: "Overhead Press (OHP)",     muscle: "Shoulders", desc: "Sets: 4 | Reps: 6-10\n1. Bar at chin, elbows forward.\n2. Press straight overhead.\n3. Lock out at top.\nTip: No leg drive — strict press." },
    { id: 4002, name: "Lateral Raise",            muscle: "Shoulders", desc: "Sets: 3-4 | Reps: 12-15\n1. Slight forward lean.\n2. Raise arms out to side to shoulder height.\n3. Controlled lower.\nTip: Lead with elbows, thumbs slightly down." },
    { id: 4003, name: "Arnold Press",             muscle: "Shoulders", desc: "Sets: 3 | Reps: 10-12\n1. Start with palms facing you.\n2. Rotate palms out as you press up.\n3. Reverse on the way down.\nTip: Full range hits all 3 shoulder heads." },
    { id: 4004, name: "Front Raise",              muscle: "Shoulders", desc: "Sets: 3 | Reps: 12\n1. Hold DB or plate at thighs.\n2. Raise to shoulder height.\n3. Slow lower.\nTip: Use lighter weight than you think." },
    { id: 4005, name: "Upright Row",              muscle: "Shoulders", desc: "Sets: 3 | Reps: 10-12\n1. Grip bar shoulder width.\n2. Pull bar up to chin, elbows high.\n3. Lower controlled.\nTip: Don't go too heavy — protects shoulder." },
    { id: 4006, name: "Cable Lateral Raise",      muscle: "Shoulders", desc: "Sets: 3 | Reps: 15-20\n1. Cable at ankle height.\n2. Raise arm to side to shoulder height.\n3. Hold 1 second, slow lower.\nTip: Constant tension beats dumbbells." },

    // --- ARMS ---
    { id: 5001, name: "Barbell Curl",             muscle: "Biceps",    desc: "Sets: 3-4 | Reps: 8-12\n1. Grip shoulder width.\n2. Curl bar to chest.\n3. Squeeze at top, slow lower.\nTip: Don't swing — elbows stay at sides." },
    { id: 5002, name: "Tricep Pushdown",          muscle: "Triceps",   desc: "Sets: 3 | Reps: 12-15\n1. Rope or bar attachment, cable high.\n2. Push down to full extension.\n3. Flare hands out at bottom.\nTip: Keep elbows glued to body." },
    { id: 5003, name: "Hammer Curl",              muscle: "Biceps",    desc: "Sets: 3 | Reps: 10-12\n1. Neutral grip (thumbs up).\n2. Curl DB to shoulder.\n3. Slow lower.\nTip: Builds brachialis for arm thickness." },
    { id: 5004, name: "Skull Crusher",            muscle: "Triceps",   desc: "Sets: 3 | Reps: 10-12\n1. Lie flat, EZ bar or DBs.\n2. Lower to forehead.\n3. Extend back up.\nTip: Keeps elbows pointing at ceiling." },
    { id: 5006, name: "Concentration Curl",       muscle: "Biceps",    desc: "Sets: 3 | Reps: 12 each arm\n1. Sit, brace elbow on inner thigh.\n2. Curl DB to shoulder.\n3. Full squeeze at top.\nTip: Best exercise for bicep peak." },
    { id: 5007, name: "Overhead Tricep Extension",muscle: "Triceps",   desc: "Sets: 3 | Reps: 12-15\n1. Cable or DB overhead, arms bent.\n2. Extend arms overhead fully.\n3. Slow lower behind head.\nTip: Targets long head — biggest part of tricep." },

    // --- GLUTES & CORE ---
    { id: 6001, name: "Hip Thrust",               muscle: "Glutes",    desc: "Sets: 4 | Reps: 10-15\n1. Upper back on bench, bar on hips.\n2. Drive hips up until body is straight.\n3. Squeeze glutes hard at top.\nTip: Best glute exercise — load it heavy." },
    { id: 6002, name: "Plank",                    muscle: "Core",      desc: "Sets: 3 | Duration: 45-90 seconds\n1. Forearms on floor, body straight.\n2. Squeeze abs and glutes.\n3. Don't let hips sag.\nTip: Progress by adding time each week." },
    { id: 6003, name: "Hanging Leg Raise",        muscle: "Core",      desc: "Sets: 3 | Reps: 12\n1. Hang from pull-up bar.\n2. Lift legs to 90° (or higher).\n3. Lower slowly — don't swing.\nTip: Hardest ab exercise. Do bent knees first." },
    { id: 6004, name: "Cable Kickback",           muscle: "Glutes",    desc: "Sets: 3 | Reps: 15 each leg\n1. Ankle attachment, cable low.\n2. Brace on frame, kick leg straight back.\n3. Squeeze glute at top.\nTip: Slow and controlled — feel the glute." },
    { id: 6005, name: "Sumo Deadlift",            muscle: "Glutes",    desc: "Sets: 3-4 | Reps: 8-12\n1. Feet wide, toes pointed out.\n2. Grip bar inside legs.\n3. Drive hips forward to lockout.\nTip: Hits inner thighs and glutes heavily." },

    // --- CARDIO ---
    { id: 701,  name: "HIIT Circuit",             muscle: "Cardio",    desc: "Duration: 20-30 mins\n20s ON / 10s OFF x 8 rounds:\n1. Jump squats\n2. Mountain climbers\n3. Burpees\n4. High knees\nCalories: ~400-600 per session." },
    { id: 8001, name: "Treadmill Run",             muscle: "Cardio",    desc: "Duration: 20-30 mins\n1. Warm up 5 mins at walk.\n2. Run at conversation pace.\n3. Cool down 5 mins.\nCalories: ~300-400 per session." },
    { id: 8002, name: "Jump Rope",                muscle: "Cardio",    desc: "Duration: 15-20 mins\n3 rounds x 5 mins:\n1. Standard two-foot jump.\n2. Alternating feet.\n3. Double unders (if able).\nRest 1 min between rounds." },
    { id: 8003, name: "Stationary Bike",          muscle: "Cardio",    desc: "Duration: 30 mins\nWarm up 5 mins easy.\nModerate-high intensity 20 mins.\nCool down 5 mins.\nCalories: ~250-350 per session." },
    { id: 8004, name: "Stairmaster",              muscle: "Cardio",    desc: "Duration: 20-25 mins\nLevel 6-10 difficulty.\nKeep posture upright.\nDon't lean on handrails.\nCalories: ~200-300 per session." },
    { id: 8005, name: "Plank Variations",         muscle: "Core",      desc: "3 Rounds:\n1. Standard Plank: 60s\n2. Side Plank L: 30s\n3. Side Plank R: 30s\n4. Plank Hip Dips: 20 reps\nRest 30s between." }
];

/* =========================================
   2. TRINIDAD & TOBAGO COMPLETE FOOD DATABASE
   Per 1 standard serving unless stated
   ========================================= */
const foodLibrary = [

    // ── BASICS ──────────────────────────────
    { n:"egg",                    p:6,  c:1,  f:5,  cal:72  },
    { n:"fried egg",              p:6,  c:0,  f:5,  cal:72  },
    { n:"boiled egg",             p:6,  c:0,  f:5,  cal:68  },
    { n:"scrambled eggs",         p:12, c:1,  f:10, cal:145 },
    { n:"egg white",              p:4,  c:0,  f:0,  cal:17  },
    { n:"toast",                  p:3,  c:15, f:1,  cal:80  },
    { n:"bread",                  p:3,  c:15, f:1,  cal:80  },
    { n:"hops bread",             p:4,  c:30, f:2,  cal:155 },
    { n:"cheese",                 p:7,  c:1,  f:9,  cal:113 },
    { n:"butter",                 p:0,  c:0,  f:12, cal:108 },
    { n:"oats",                   p:5,  c:27, f:3,  cal:155 },

    // ── TRINI BAKES & ROTI ───────────────────
    { n:"sada roti",              p:8,  c:52, f:3,  cal:268 },
    { n:"sada",                   p:8,  c:52, f:3,  cal:268 },
    { n:"coconut bake",           p:5,  c:45, f:12, cal:310 },
    { n:"fried bake",             p:4,  c:40, f:14, cal:300 },
    { n:"float bake",             p:4,  c:38, f:8,  cal:245 },
    { n:"dhalpuri",               p:10, c:55, f:12, cal:360 },
    { n:"dhalpuri roti",          p:10, c:55, f:12, cal:360 },
    { n:"bus up shut",            p:8,  c:50, f:14, cal:350 },
    { n:"paratha",                p:8,  c:50, f:14, cal:350 },
    { n:"paratha roti",           p:8,  c:50, f:14, cal:350 },
    { n:"aloo roti",              p:9,  c:58, f:12, cal:380 },
    { n:"pumpkin roti",           p:7,  c:52, f:10, cal:325 },
    { n:"roti",                   p:8,  c:48, f:10, cal:300 },
    { n:"dumplings",              p:3,  c:22, f:1,  cal:108 },
    { n:"boiled dumpling",        p:3,  c:22, f:1,  cal:108 },

    // ── BREAKFAST STAPLES ────────────────────
    { n:"accra",                  p:8,  c:15, f:6,  cal:148 },
    { n:"saltfish fritters",      p:8,  c:15, f:6,  cal:148 },
    { n:"buljol",                 p:18, c:4,  f:3,  cal:115 },
    { n:"saltfish buljol",        p:18, c:4,  f:3,  cal:115 },
    { n:"smoke herring",          p:22, c:0,  f:8,  cal:165 },
    { n:"smoked herring",         p:22, c:0,  f:8,  cal:165 },
    { n:"saltfish",               p:22, c:0,  f:2,  cal:108 },
    { n:"salted cod",             p:22, c:0,  f:2,  cal:108 },
    { n:"cornmeal porridge",      p:5,  c:45, f:5,  cal:240 },
    { n:"farine porridge",        p:3,  c:50, f:2,  cal:230 },
    { n:"oat porridge",           p:8,  c:42, f:6,  cal:250 },
    { n:"cream of wheat",         p:5,  c:38, f:1,  cal:180 },
    { n:"pumpkin porridge",       p:4,  c:40, f:4,  cal:210 },
    { n:"tomato choka",           p:2,  c:8,  f:3,  cal:65  },
    { n:"baigan choka",           p:2,  c:10, f:3,  cal:75  },
    { n:"roasted pepper choka",   p:1,  c:8,  f:0,  cal:40  },
    { n:"mango choka",            p:1,  c:12, f:0,  cal:52  },
    { n:"bhaji",                  p:4,  c:6,  f:2,  cal:60  },
    { n:"spinach bhaji",          p:4,  c:6,  f:2,  cal:60  },
    { n:"bhagi",                  p:4,  c:6,  f:2,  cal:60  },

    // ── CHICKEN ─────────────────────────────
    { n:"chicken",                p:30, c:0,  f:4,  cal:165 },
    { n:"stew chicken",           p:35, c:5,  f:12, cal:280 },
    { n:"curry chicken",          p:32, c:6,  f:14, cal:300 },
    { n:"fried chicken",          p:25, c:12, f:20, cal:350 },
    { n:"brown stew chicken",     p:33, c:6,  f:12, cal:280 },
    { n:"geera chicken",          p:38, c:2,  f:14, cal:296 },
    { n:"bbq chicken",            p:32, c:10, f:12, cal:280 },
    { n:"baked chicken",          p:35, c:0,  f:8,  cal:220 },
    { n:"grilled chicken",        p:38, c:0,  f:5,  cal:200 },
    { n:"chicken breast",         p:38, c:0,  f:4,  cal:190 },
    { n:"smoked chicken",         p:30, c:2,  f:10, cal:225 },

    // ── DUCK & PORK ─────────────────────────
    { n:"curry duck",             p:30, c:5,  f:20, cal:320 },
    { n:"smoked duck",            p:28, c:0,  f:18, cal:280 },
    { n:"stew pork",              p:32, c:5,  f:18, cal:320 },
    { n:"pork chops",             p:30, c:0,  f:14, cal:250 },
    { n:"geera pork",             p:36, c:3,  f:16, cal:310 },
    { n:"smoked pork",            p:28, c:0,  f:20, cal:300 },
    { n:"pigtail",                p:20, c:0,  f:25, cal:305 },
    { n:"bacon",                  p:12, c:0,  f:18, cal:215 },

    // ── BEEF & GOAT ─────────────────────────
    { n:"beef",                   p:26, c:0,  f:17, cal:250 },
    { n:"stew beef",              p:35, c:5,  f:15, cal:310 },
    { n:"curry beef",             p:32, c:6,  f:16, cal:320 },
    { n:"stew oxtail",            p:28, c:5,  f:22, cal:340 },
    { n:"oxtail",                 p:28, c:5,  f:22, cal:340 },
    { n:"cow heel",               p:30, c:8,  f:12, cal:280 },
    { n:"liver",                  p:26, c:5,  f:8,  cal:200 },
    { n:"kidney",                 p:22, c:2,  f:7,  cal:163 },
    { n:"tripe",                  p:18, c:0,  f:8,  cal:150 },
    { n:"black pudding",          p:12, c:15, f:20, cal:300 },
    { n:"souse",                  p:25, c:8,  f:10, cal:240 },
    { n:"pepperpot",              p:30, c:12, f:18, cal:340 },
    { n:"curry goat",             p:35, c:5,  f:18, cal:330 },
    { n:"stew goat",              p:33, c:5,  f:16, cal:310 },
    { n:"curry mutton",           p:35, c:5,  f:18, cal:330 },
    { n:"curry lamb",             p:35, c:5,  f:18, cal:330 },

    // ── FISH & SEAFOOD ───────────────────────
    { n:"fish",                   p:22, c:0,  f:5,  cal:150 },
    { n:"fried fish",             p:25, c:8,  f:12, cal:250 },
    { n:"stew fish",              p:25, c:5,  f:8,  cal:200 },
    { n:"curry fish",             p:24, c:6,  f:10, cal:220 },
    { n:"baked fish",             p:28, c:0,  f:5,  cal:165 },
    { n:"grilled fish",           p:28, c:0,  f:5,  cal:160 },
    { n:"king fish",              p:28, c:0,  f:5,  cal:160 },
    { n:"carite",                 p:26, c:0,  f:4,  cal:145 },
    { n:"snapper",                p:26, c:0,  f:4,  cal:140 },
    { n:"red fish",               p:26, c:0,  f:4,  cal:140 },
    { n:"flying fish",            p:24, c:0,  f:3,  cal:130 },
    { n:"tilapia",                p:26, c:0,  f:3,  cal:130 },
    { n:"salmon",                 p:30, c:0,  f:13, cal:235 },
    { n:"smoked salmon",          p:22, c:0,  f:12, cal:200 },
    { n:"shark",                  p:30, c:0,  f:4,  cal:160 },
    { n:"tuna",                   p:25, c:0,  f:1,  cal:110 },
    { n:"canned tuna",            p:25, c:0,  f:1,  cal:110 },
    { n:"smoked tuna",            p:24, c:0,  f:3,  cal:125 },
    { n:"shrimp",                 p:20, c:1,  f:1,  cal:100 },
    { n:"curry shrimp",           p:22, c:5,  f:8,  cal:185 },
    { n:"stew shrimp",            p:20, c:5,  f:5,  cal:155 },
    { n:"pepper shrimp",          p:20, c:3,  f:5,  cal:140 },
    { n:"garlic shrimp",          p:20, c:2,  f:8,  cal:165 },
    { n:"curry crab",             p:22, c:8,  f:10, cal:220 },
    { n:"crab",                   p:20, c:0,  f:2,  cal:100 },
    { n:"stuffed crab back",      p:25, c:12, f:15, cal:285 },
    { n:"lobster",                p:24, c:2,  f:2,  cal:125 },
    { n:"conch",                  p:18, c:3,  f:1,  cal:95  },
    { n:"lambie",                 p:18, c:3,  f:1,  cal:95  },
    { n:"fish broth",             p:30, c:15, f:5,  cal:220 },

    // ── RICE & CARBS ─────────────────────────
    { n:"rice",                   p:3,  c:28, f:0,  cal:130 },
    { n:"white rice",             p:3,  c:28, f:0,  cal:130 },
    { n:"brown rice",             p:4,  c:26, f:1,  cal:130 },
    { n:"fried rice",             p:6,  c:45, f:8,  cal:280 },
    { n:"chinese fried rice",     p:8,  c:48, f:10, cal:320 },
    { n:"pigeon peas rice",       p:7,  c:45, f:2,  cal:230 },
    { n:"rice and peas",          p:7,  c:45, f:2,  cal:230 },
    { n:"red beans rice",         p:8,  c:46, f:2,  cal:240 },
    { n:"lentil rice",            p:9,  c:44, f:1,  cal:225 },
    { n:"callaloo rice",          p:6,  c:40, f:5,  cal:225 },
    { n:"macaroni pie",           p:12, c:40, f:18, cal:400 },
    { n:"stewed macaroni",        p:8,  c:35, f:10, cal:280 },
    { n:"pasta",                  p:7,  c:38, f:5,  cal:225 },
    { n:"macaroni",               p:7,  c:38, f:5,  cal:225 },

    // ── PROVISIONS ───────────────────────────
    { n:"dasheen",                p:3,  c:35, f:0,  cal:150 },
    { n:"yam",                    p:2,  c:28, f:0,  cal:120 },
    { n:"cassava",                p:1,  c:38, f:0,  cal:160 },
    { n:"eddoes",                 p:3,  c:30, f:0,  cal:135 },
    { n:"sweet potato",           p:2,  c:20, f:0,  cal:86  },
    { n:"provision",              p:2,  c:30, f:0,  cal:130 },
    { n:"breadfruit",             p:2,  c:25, f:0,  cal:110 },
    { n:"fried breadfruit",       p:2,  c:28, f:8,  cal:200 },
    { n:"roasted breadfruit",     p:2,  c:26, f:1,  cal:120 },
    { n:"plantain",               p:1,  c:30, f:0,  cal:122 },
    { n:"fried plantain",         p:1,  c:33, f:5,  cal:180 },
    { n:"fig",                    p:1,  c:23, f:0,  cal:90  },
    { n:"green fig",              p:1,  c:23, f:0,  cal:90  },
    { n:"green banana",           p:1,  c:23, f:0,  cal:90  },
    { n:"boiled fig",             p:1,  c:23, f:0,  cal:90  },
    { n:"potato",                 p:3,  c:22, f:0,  cal:100 },
    { n:"baked potato",           p:4,  c:37, f:0,  cal:165 },
    { n:"pumpkin",                p:1,  c:8,  f:0,  cal:36  },

    // ── ONE POT DISHES ───────────────────────
    { n:"pelau",                  p:25, c:45, f:10, cal:450 },
    { n:"chicken pelau",          p:28, c:48, f:12, cal:480 },
    { n:"pork pelau",             p:30, c:46, f:15, cal:500 },
    { n:"beef pelau",             p:30, c:47, f:13, cal:490 },
    { n:"oil down",               p:22, c:40, f:25, cal:480 },
    { n:"coo coo",                p:4,  c:35, f:3,  cal:185 },
    { n:"callaloo",               p:5,  c:10, f:8,  cal:120 },

    // ── PEAS & LEGUMES ───────────────────────
    { n:"dhal",                   p:8,  c:20, f:2,  cal:140 },
    { n:"channa",                 p:9,  c:27, f:3,  cal:170 },
    { n:"chickpeas",              p:9,  c:27, f:3,  cal:170 },
    { n:"lentil peas",            p:9,  c:20, f:1,  cal:130 },
    { n:"lentils",                p:9,  c:20, f:1,  cal:130 },
    { n:"red beans",              p:8,  c:22, f:1,  cal:130 },
    { n:"pigeon peas",            p:8,  c:23, f:1,  cal:135 },
    { n:"split peas",             p:8,  c:21, f:1,  cal:125 },
    { n:"black eyed peas",        p:8,  c:20, f:1,  cal:120 },

    // ── SOUPS ────────────────────────────────
    { n:"corn soup",              p:10, c:35, f:8,  cal:250 },
    { n:"chicken soup",           p:25, c:20, f:8,  cal:260 },
    { n:"beef soup",              p:28, c:18, f:10, cal:280 },
    { n:"cow heel soup",          p:35, c:10, f:15, cal:320 },
    { n:"split peas soup",        p:10, c:30, f:5,  cal:205 },
    { n:"pumpkin soup",           p:5,  c:22, f:4,  cal:145 },

    // ── STREET FOOD ──────────────────────────
    { n:"doubles",                p:14, c:62, f:16, cal:420 },
    { n:"doubles slight",         p:13, c:58, f:14, cal:390 },
    { n:"doubles heavy",          p:15, c:68, f:20, cal:500 },
    { n:"aloo pie",               p:5,  c:40, f:12, cal:300 },
    { n:"pholourie",              p:2,  c:15, f:5,  cal:110 },
    { n:"saheena",                p:4,  c:18, f:6,  cal:145 },
    { n:"bake and shark",         p:40, c:60, f:25, cal:750 },
    { n:"bake and saltfish",      p:30, c:55, f:15, cal:590 },
    { n:"gyros",                  p:25, c:45, f:20, cal:550 },
    { n:"roti box",               p:40, c:85, f:20, cal:780 },
    { n:"kfc",                    p:45, c:35, f:35, cal:800 },
    { n:"royal castle",           p:40, c:40, f:30, cal:780 },
    { n:"chow mein",              p:12, c:48, f:10, cal:330 },
    { n:"wonton soup",            p:8,  c:20, f:4,  cal:148 },

    // ── SNACKS & SWEETS ──────────────────────
    { n:"peanuts",                p:7,  c:5,  f:14, cal:160 },
    { n:"nuts",                   p:6,  c:6,  f:15, cal:170 },
    { n:"chips",                  p:2,  c:15, f:10, cal:150 },
    { n:"plantain chips",         p:1,  c:18, f:8,  cal:150 },
    { n:"chocolate",              p:3,  c:25, f:15, cal:250 },
    { n:"ice cream",              p:4,  c:30, f:14, cal:270 },
    { n:"kiss cake",              p:2,  c:25, f:8,  cal:180 },
    { n:"kurma",                  p:2,  c:20, f:8,  cal:160 },
    { n:"tamarind ball",          p:1,  c:25, f:0,  cal:100 },
    { n:"toolum",                 p:1,  c:30, f:5,  cal:170 },
    { n:"sugar cake",             p:1,  c:28, f:3,  cal:145 },
    { n:"coconut drops",          p:2,  c:30, f:8,  cal:200 },
    { n:"pone",                   p:3,  c:45, f:8,  cal:265 },
    { n:"cassava pone",           p:3,  c:45, f:8,  cal:265 },
    { n:"pumpkin pone",           p:3,  c:42, f:8,  cal:255 },
    { n:"sweet potato pone",      p:3,  c:40, f:7,  cal:240 },
    { n:"sweet bread",            p:5,  c:55, f:12, cal:350 },
    { n:"black cake",             p:4,  c:70, f:18, cal:460 },
    { n:"pastelle",               p:15, c:45, f:20, cal:420 },
    { n:"benne balls",            p:3,  c:22, f:8,  cal:175 },
    { n:"barfi",                  p:5,  c:40, f:12, cal:290 },
    { n:"gulab jamun",            p:3,  c:35, f:8,  cal:225 },
    { n:"ladoo",                  p:4,  c:38, f:10, cal:260 },
    { n:"sawine",                 p:5,  c:45, f:6,  cal:255 },
    { n:"kheer",                  p:5,  c:35, f:6,  cal:220 },

    // ── CHOW & FRUIT ─────────────────────────
    { n:"chow",                   p:1,  c:30, f:0,  cal:120 },
    { n:"mango chow",             p:1,  c:28, f:0,  cal:115 },
    { n:"pineapple chow",         p:1,  c:25, f:0,  cal:100 },
    { n:"mango",                  p:1,  c:25, f:0,  cal:100 },
    { n:"pineapple",              p:1,  c:20, f:0,  cal:82  },
    { n:"banana",                 p:1,  c:27, f:0,  cal:105 },
    { n:"pawpaw",                 p:1,  c:15, f:0,  cal:60  },
    { n:"papaya",                 p:1,  c:15, f:0,  cal:60  },
    { n:"five fingers",           p:1,  c:8,  f:0,  cal:38  },
    { n:"star fruit",             p:1,  c:8,  f:0,  cal:38  },
    { n:"chenette",               p:1,  c:20, f:0,  cal:85  },
    { n:"guinep",                 p:1,  c:20, f:0,  cal:85  },

    // ── DRINKS ───────────────────────────────
    { n:"coconut water",          p:0,  c:10, f:0,  cal:45  },
    { n:"mauby",                  p:0,  c:28, f:0,  cal:115 },
    { n:"sorrel",                 p:0,  c:22, f:0,  cal:90  },
    { n:"sea moss",               p:1,  c:25, f:0,  cal:105 },
    { n:"passion fruit juice",    p:1,  c:28, f:0,  cal:120 },
    { n:"solo",                   p:0,  c:35, f:0,  cal:145 },
    { n:"carib beer",             p:1,  c:12, f:0,  cal:150 },
    { n:"stag beer",              p:1,  c:13, f:0,  cal:155 },
    { n:"protein shake",          p:25, c:5,  f:2,  cal:140 },
    { n:"whey protein",           p:25, c:5,  f:2,  cal:140 },
    { n:"milk",                   p:8,  c:12, f:5,  cal:120 }
];

/* =========================================
   3. MEAL IDEAS — ALL T&T CATEGORIES
   ========================================= */
const mealIdeas = {
    Breakfast: [
        { t:"Saltfish Buljol & Sada Roti",     d:"Classic Trini breakfast — tomatoes, onion, pepper", m:"P:38 C:68 F:18 | Cal:580" },
        { t:"Doubles (2 slight)",               d:"Street food staple — bara, channa, slight pepper",  m:"P:28 C:124 F:32 | Cal:840" },
        { t:"Smoke Herring & Coconut Bake",     d:"Rich smoked fish with coconut bake",                m:"P:35 C:58 F:25 | Cal:620" },
        { t:"Bake & Saltfish",                  d:"Fried bake with stewed saltfish",                   m:"P:34 C:55 F:18 | Cal:530" },
        { t:"Cornmeal Porridge",                d:"Condensed milk, nutmeg & cinnamon",                 m:"P:10 C:88 F:10 | Cal:480" },
        { t:"Eggs & Hops Bread",                d:"3 scrambled eggs, 2 hops bread",                   m:"P:27 C:35 F:18 | Cal:415" },
        { t:"Oat Porridge & Banana",            d:"Rolled oats, banana, cinnamon",                    m:"P:10 C:60 F:6 | Cal:335" },
        { t:"Accra & Fried Bake",               d:"Saltfish fritters with fried bake",                m:"P:20 C:58 F:22 | Cal:510" },
        { t:"Dhalpuri & Tomato Choka",          d:"Soft dhalpuri roti, fire-roasted tomato",          m:"P:12 C:68 F:14 | Cal:445" },
        { t:"Sada Roti & Baigan Choka",         d:"Light vegetarian breakfast",                       m:"P:10 C:62 F:5 | Cal:330" },
        { t:"Farine Porridge",                  d:"Cassava farine, milk, condensed milk",             m:"P:8 C:58 F:5 | Cal:305" },
        { t:"Egg Sandwich (Hops)",              d:"Fried egg, cheese, hops bread",                   m:"P:18 C:32 F:18 | Cal:365" },
        { t:"Protein Smoothie",                 d:"Whey protein, oats, banana, sea moss",             m:"P:35 C:48 F:5 | Cal:385" },
        { t:"Bhaji & Float Bake",               d:"Sautéed spinach with float bake",                 m:"P:8 C:48 F:10 | Cal:310" },
        { t:"Pholourie & Tamarind Sauce",       d:"Classic street breakfast (6 pieces)",              m:"P:8 C:52 F:10 | Cal:335" }
    ],
    Lunch: [
        { t:"Chicken Pelau",                    d:"Chicken, pigeon peas, rice — all in one pot",       m:"P:45 C:65 F:15 | Cal:610" },
        { t:"Curry Chicken & Dhalpuri",         d:"Bone-in curry with potato & channa",               m:"P:40 C:90 F:20 | Cal:780" },
        { t:"Stew Chicken & Rice",              d:"Rice, red beans, salad on the side",               m:"P:45 C:70 F:12 | Cal:600" },
        { t:"Curry Duck & Rice",                d:"Slow-cooked duck, pigeon peas rice",               m:"P:42 C:68 F:22 | Cal:660" },
        { t:"Geera Chicken & Rice",             d:"Spiced cumin chicken with rice & salad",           m:"P:48 C:55 F:14 | Cal:555" },
        { t:"Fish Broth & Provision",           d:"King fish broth, dasheen, dumplings",              m:"P:38 C:55 F:8 | Cal:455" },
        { t:"Dhal, Rice & Bhaji",               d:"Saffron dhal, steamed spinach, white rice",        m:"P:15 C:85 F:10 | Cal:450" },
        { t:"Curry Goat & Rice",                d:"Boneless goat, white rice, coleslaw",              m:"P:50 C:75 F:25 | Cal:700" },
        { t:"Stew Pork & Provision",            d:"Pork, dasheen, yam, cassava",                      m:"P:45 C:60 F:18 | Cal:590" },
        { t:"Chicken Soup",                     d:"Dumplings, corn, potato, shadow beni",             m:"P:30 C:50 F:10 | Cal:420" },
        { t:"Curry Crab & Dumpling",            d:"Tobago style — full crab in curry",                m:"P:35 C:70 F:15 | Cal:560" },
        { t:"Stew Beef & Macaroni Pie",         d:"Slow stewed beef, baked macaroni",                 m:"P:48 C:58 F:22 | Cal:640" },
        { t:"Lentil Peas & Brown Rice",         d:"Clean, high-protein vegetarian meal",              m:"P:18 C:80 F:8 | Cal:472" },
        { t:"Chinese Fried Rice & Chicken",     d:"Trini Chinese style with veggie mix",              m:"P:35 C:80 F:20 | Cal:680" },
        { t:"Corn Soup (Full Bowl)",             d:"Split peas, dumplings, corn, pig tail",           m:"P:18 C:55 F:14 | Cal:425" }
    ],
    Dinner: [
        { t:"Grilled Fish & Garden Salad",      d:"King fish or mahi, fresh greens, no dressing",    m:"P:50 C:10 F:12 | Cal:360" },
        { t:"Stew Oxtail & Rice & Peas",        d:"Slow-cooked oxtail, pigeon peas rice",            m:"P:45 C:60 F:30 | Cal:720" },
        { t:"Curry Crab & Dumpling",            d:"Tobago classic — must try",                        m:"P:35 C:70 F:15 | Cal:560" },
        { t:"Oil Down",                          d:"Breadfruit, pigtail, coconut milk, callaloo",    m:"P:25 C:80 F:35 | Cal:750" },
        { t:"Geera Chicken (No Rice)",          d:"Dry spiced chicken alone — high protein",         m:"P:50 C:5 F:15 | Cal:350" },
        { t:"Baked Salmon & Steamed Veg",       d:"Pan-seared salmon, broccoli, callaloo",           m:"P:45 C:15 F:20 | Cal:425" },
        { t:"Steak & Baked Potato",             d:"Grilled sirloin, baked potato, salad",            m:"P:55 C:40 F:20 | Cal:580" },
        { t:"Pepper Shrimp & Rice",             d:"Trini hot pepper shrimp with white rice",         m:"P:38 C:55 F:12 | Cal:490" },
        { t:"Curry Goat & Roti",               d:"Boneless goat, bus up shut",                       m:"P:52 C:72 F:28 | Cal:765" },
        { t:"Pepperpot & Rice",                d:"Dark, rich stew — preserved Trini classic",        m:"P:35 C:55 F:20 | Cal:545" },
        { t:"Stew Chicken & Provision",        d:"Stewed chicken, boiled dasheen, eddoes",           m:"P:45 C:65 F:14 | Cal:580" },
        { t:"Vegetable Roti",                   d:"Pumpkin, bodi, channa in dhalpuri",               m:"P:12 C:85 F:15 | Cal:530" },
        { t:"Coo-Coo & Callaloo",              d:"Cornmeal coo-coo, crab callaloo — national dish",  m:"P:22 C:58 F:18 | Cal:482" },
        { t:"Curry Duck & Provision",           d:"Duck curry with boiled provisions",               m:"P:40 C:62 F:24 | Cal:625" },
        { t:"KFC (2pc + Fries)",               d:"Original recipe, small fries — cheat meal",       m:"P:45 C:35 F:35 | Cal:800" }
    ],
    Snack: [
        { t:"Doubles (1)",                      d:"Single doubles — bare or slight",                  m:"P:14 C:62 F:16 | Cal:420" },
        { t:"Pholourie (6)",                    d:"With tamarind sauce",                              m:"P:5 C:35 F:8 | Cal:240" },
        { t:"Aloo Pie",                          d:"No channa option",                                m:"P:5 C:40 F:12 | Cal:300" },
        { t:"Saheena",                           d:"Spinach & split peas fritter",                   m:"P:4 C:18 F:6 | Cal:145" },
        { t:"Bake & Shark (Half)",              d:"Half portion — Maracas classic",                  m:"P:20 C:30 F:12 | Cal:375" },
        { t:"Mango Chow",                        d:"Green mango, pepper, shadow beni",               m:"P:1 C:28 F:0 | Cal:115" },
        { t:"Boiled Channa",                    d:"Lightly salted, high fibre",                      m:"P:9 C:27 F:3 | Cal:170" },
        { t:"Kurma",                             d:"Sweet crunchy flour sticks",                     m:"P:4 C:52 F:10 | Cal:340" },
        { t:"Tamarind Ball",                    d:"Sweet & sour ball",                               m:"P:1 C:40 F:0 | Cal:160" },
        { t:"Coconut Water",                    d:"Fresh from the nut",                              m:"P:0 C:10 F:0 | Cal:45" },
        { t:"Cassava Pone",                     d:"Dense sweet cassava cake",                        m:"P:3 C:45 F:8 | Cal:265" },
        { t:"Pumpkin Pone",                     d:"Spiced pumpkin dessert",                          m:"P:3 C:42 F:8 | Cal:255" },
        { t:"Sweet Bread",                      d:"Coconut sweet bread — Trini style",              m:"P:5 C:55 F:12 | Cal:350" },
        { t:"Peanuts (Small Pack)",             d:"Salted roasted peanuts",                         m:"P:7 C:5 F:14 | Cal:160" },
        { t:"Sea Moss Drink",                   d:"Natural, with milk and cinnamon",                m:"P:1 C:25 F:0 | Cal:105" }
    ]
};

/* =========================================
   4. WORKOUT ROUTINES
   Day 0 = Sunday (REST), 1=Mon...6=Sat
   ========================================= */
const routines = {
    male: {
        shred: {
            1: { focus:"Push — Chest & Shoulders",  warmup:"5 min Arm Circles + 20 Push-Ups",     ex:[1001,1002,1004,1008,4001,4002,5002,8001] },
            2: { focus:"Pull — Back & Biceps",       warmup:"5 min Band Pulls + Face Pulls",       ex:[2001,2002,2003,2008,2006,5001,5003,8002] },
            3: { focus:"Legs — Squat Focus",         warmup:"5 min Bodyweight Squats + Lunges",    ex:[3001,3002,3004,3005,3006,3007,3008,8001] },
            4: { focus:"Push — Hypertrophy",         warmup:"5 min Incline Walk",                  ex:[1003,1007,1010,1009,4003,4006,5007,8003] },
            5: { focus:"Pull — Thickness",           warmup:"5 min Rowing Machine",                ex:[2001,2004,2005,2007,2009,2011,5006,8004] },
            6: { focus:"Legs — Hinge Focus",         warmup:"5 min Glute Bridges x 20",            ex:[3003,3004,3010,3011,3006,3007,6001,8001] },
            0: { focus:"REST DAY — Recover",         warmup:"Light Stretching",                    ex:[] }
        },
        bulk: {
            1: { focus:"Chest & Triceps — Heavy",    warmup:"5 min Chest Stretch + Push-Ups",      ex:[1001,1002,1008,1003,1005,5004,5007,5002] },
            2: { focus:"Back & Biceps — Heavy",      warmup:"5 min Rower",                         ex:[2001,2002,2003,2004,2007,5001,5003,5006] },
            3: { focus:"Legs — Max Strength",        warmup:"5 min Leg Swings + Squats",           ex:[3001,3009,3002,3003,3005,3006,3007,6001] },
            4: { focus:"Shoulders & Arms",           warmup:"5 min Shoulder Rotations",            ex:[4001,4002,4003,4005,5001,5004,5006,5007] },
            5: { focus:"Full Body Compound",         warmup:"5 min Light Row",                     ex:[2001,3001,1001,4001,3003,6001,6005,8001] },
            6: { focus:"Arms & Core",                warmup:"5 min Jump Rope",                     ex:[5001,5003,5004,5006,5007,6002,6003,8005] },
            0: { focus:"REST DAY — Recover",         warmup:"Foam Roll & Stretch",                 ex:[] }
        },
        tone: {
            1: { focus:"Upper Body Circuit",         warmup:"5 min Jumping Jacks",                 ex:[1001,4001,2002,5001,5002,6002,8001] },
            2: { focus:"Lower Body",                 warmup:"5 min Bike",                          ex:[3001,3002,3003,6001,3007,3008,8003] },
            3: { focus:"Push & Core",                warmup:"5 min Rower",                         ex:[1006,1004,4002,6002,6003,8005,8002] },
            4: { focus:"Pull & Shoulders",           warmup:"5 min Band Pull-Aparts",              ex:[2002,2004,2005,4003,4006,5001,8004] },
            5: { focus:"Legs & Glutes",              warmup:"5 min Stairmaster",                   ex:[3001,3004,6001,6004,3007,6002,8001] },
            6: { focus:"Cardio & Core",              warmup:"5 min Walk",                          ex:[8001,8002,8003,6002,6003,8005] },
            0: { focus:"REST DAY — Recover",         warmup:"Yoga or Walk",                        ex:[] }
        }
    },
    female: {
        tone: {
            1: { focus:"Glutes & Legs",              warmup:"5 min Stairmaster",                   ex:[6001,3003,6004,3004,3006,3010,1004,8001] },
            2: { focus:"Upper Body",                 warmup:"5 min Rower",                         ex:[1004,4002,4006,2010,2008,5002,5001,8003] },
            3: { focus:"Quads & Core",               warmup:"5 min Bike",                          ex:[3001,3005,3011,3006,3010,8002,8004,8005] },
            4: { focus:"Full Body A",                warmup:"5 min Jumping Jacks",                 ex:[3003,6001,1011,2005,4001,5007,6005,8001] },
            5: { focus:"Full Body B",                warmup:"5 min Walk",                          ex:[3001,2001,4003,2008,6002,6004,5006,8003] },
            6: { focus:"Active Rest — Yoga/Walk",    warmup:"Stretch & Breathe",                   ex:[] },
            0: { focus:"REST DAY — Recover",         warmup:"Relax",                               ex:[] }
        },
        shred: {
            1: { focus:"Glutes & Cardio",            warmup:"5 min Jump Rope",                     ex:[6001,6002,6003,6004,3004,8001,8002] },
            2: { focus:"Upper Body + Cardio",        warmup:"5 min Rower",                         ex:[1004,4002,2004,5001,5002,8003,8004] },
            3: { focus:"Legs & HIIT",                warmup:"5 min Dynamic Stretches",             ex:[3001,3004,3006,3007,6001,8002,701] },
            4: { focus:"Full Body Circuit",          warmup:"5 min Bike",                          ex:[2001,1001,3003,4001,6001,6002,8001] },
            5: { focus:"Core & Glutes",              warmup:"5 min Plank Hold",                    ex:[6001,6002,6003,6004,6005,8004,8005] },
            6: { focus:"Cardio Burn",                warmup:"5 min Easy Walk",                     ex:[8001,8002,8003,8004,8005,701] },
            0: { focus:"REST DAY — Recover",         warmup:"Stretch or Rest",                     ex:[] }
        },
        bulk: {
            1: { focus:"Glutes & Legs Heavy",        warmup:"5 min Leg Swings + Glute Bridges",    ex:[3001,3002,6001,3003,3005,3006,3007,6005] },
            2: { focus:"Upper Push",                 warmup:"5 min Chest Stretch",                 ex:[1001,1002,1003,4001,4002,5004,5007,8001] },
            3: { focus:"Upper Pull",                 warmup:"5 min Band Rows",                     ex:[2001,2002,2003,2004,2009,5001,5006,8003] },
            4: { focus:"Glutes & Legs Heavy B",      warmup:"5 min Stairmaster",                   ex:[3003,3004,6001,6004,3010,3011,6005,8004] },
            5: { focus:"Full Body Strength",         warmup:"5 min Rower",                         ex:[2001,1001,3003,4001,6001,5001,8001] },
            6: { focus:"Arms & Core",                warmup:"5 min Jump Rope",                     ex:[5001,5004,5006,5007,6002,6003,8005] },
            0: { focus:"REST DAY — Recover",         warmup:"Foam Roll & Rest",                    ex:[] }
        }
    }
};

/* =========================================
   5. APP STATE
   ========================================= */
let users = [], activeUserIndex = 0, timerInterval = null,
    currentTimerVal = 0, currentUnit = 'kg', currentExId = null;

/* =========================================
   6. INIT & CORE UI
   ========================================= */
function enterArena() {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('app-container').style.display = 'flex';
    initApp();
}

function initApp() {
    try {
        const s = localStorage.getItem('spartanUsers');
        if (s) {
            users = JSON.parse(s);
            if (!users[activeUserIndex].nutritionLogs)  users[activeUserIndex].nutritionLogs = [];
            if (!users[activeUserIndex].completedToday) users[activeUserIndex].completedToday = [];
            if (!users[activeUserIndex].goal) users[activeUserIndex].goal = 'shred';
        } else { createDefaultUser(); }
        updateUI();
    } catch(e) { createDefaultUser(); updateUI(); }
}

function createDefaultUser() {
    users = [{ id: Date.now(), name:"Warrior", trainerMode:false, gender:'male',
        goal:'shred', history:[], nutritionLogs:[], completedToday:[] }];
    saveData();
}

function updateUI() {
    const u = users[activeUserIndex];
    document.getElementById('current-user-name').innerText = u.name;
    const mb = document.getElementById('top-left-menu');
    if (u.trainerMode) {
        mb.style.opacity = "1"; mb.style.pointerEvents = "auto";
        document.getElementById('trainer-caret').style.display = "inline";
    } else {
        mb.style.opacity = "0.5"; mb.style.pointerEvents = "none";
        document.getElementById('trainer-caret').style.display = "none";
    }
    document.getElementById('workout-count').innerText = u.history.length;
    const t = new Date().toDateString();
    if (u.lastLogin !== t) { u.completedToday = []; u.lastLogin = t; saveData(); }
    const logs = u.nutritionLogs.filter(l => new Date(l.date).toDateString() === t);
    document.getElementById('cal-display').innerText = logs.reduce((a,b) => a + (parseInt(b.cal)||0), 0);
    document.getElementById('p-name').value   = u.name;
    document.getElementById('p-gender').value = u.gender;
    document.getElementById('p-goal').value   = u.goal;
    document.getElementById('p-trainer-mode').checked = u.trainerMode || false;
    loadDailyRoutine(u);
    renderWeeklyChart(u);
}

/* =========================================
   7. DASHBOARD / ROUTINE
   ========================================= */
function loadDailyRoutine(u) {
    const d = new Date().getDay();
    document.getElementById('day-display').innerText =
        ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d];

    const gender  = u.gender || 'male';
    const goal    = u.goal   || 'shred';
    const genderRoutes = routines[gender] || routines.male;
    const goalRoutes   = genderRoutes[goal] || genderRoutes[Object.keys(genderRoutes)[0]];
    const plan         = goalRoutes[d] || { focus:"Rest", warmup:"Stretch", ex:[] };

    document.getElementById('focus-display').innerText = plan.focus;
    const l = document.getElementById('todays-routine-list');
    l.innerHTML = "";

    if (plan.warmup) {
        l.innerHTML += `<div style="background:#222;padding:10px;margin-bottom:10px;border-left:3px solid orange;border-radius:5px;">
            <strong style="color:orange"><i class="fas fa-fire"></i> WARM UP:</strong><br>
            <span style="color:#ddd;font-size:0.9rem">${plan.warmup}</span></div>`;
    }

    if (!plan.ex || plan.ex.length === 0) {
        l.innerHTML += `<div style="text-align:center;padding:30px;color:#2ecc71;font-size:1.1rem;">
            <i class="fas fa-bed"></i>&nbsp; REST DAY — EAT, SLEEP, RECOVER</div>`;
        return;
    }

    plan.ex.forEach((id, i) => {
        const ex = exerciseDB.find(e => e.id === id);
        if (!ex) return;
        const cls = i < 3 ? "major-ex" : (i >= 6 ? "core-ex" : "minor-ex");
        const c   = u.completedToday && u.completedToday.includes(id);
        l.innerHTML += `
            <div class="routine-item ${cls}">
                <div style="flex:1" onclick="openTracker(${id})">
                    <b>${ex.name}</b><br>
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

function renderWeeklyChart(u) {
    const div = document.getElementById('weekly-chart');
    div.innerHTML = "";
    const days = ['S','M','T','W','T','F','S'], now = new Date();
    for (let i = 6; i >= 0; i--) {
        const d = new Date(); d.setDate(now.getDate() - i);
        const cnt = u.history.filter(h => new Date(h.date).toDateString() === d.toDateString()).length;
        let h = (cnt / 15) * 100; if (h > 100) h = 100; if (h < 5 && cnt > 0) h = 10;
        div.innerHTML += `<div style="flex:1;display:flex;flex-direction:column;align-items:center;">
            <div class="chart-bar" style="height:${h}%"></div>
            <div class="chart-day">${days[d.getDay()]}</div></div>`;
    }
}

/* =========================================
   8. EXERCISE TRACKER MODAL
   ========================================= */
function openTracker(id) {
    currentExId = id;
    const ex = exerciseDB.find(e => e.id === id);
    if (!ex) return;
    document.getElementById('tracker-modal').style.display = 'flex';
    document.getElementById('m-title').innerText = ex.name;
    document.getElementById('m-desc').innerText  = ex.desc;
    const u    = users[activeUserIndex];
    const hist = u.history.filter(h => h.exId === id);
    const last = hist[hist.length - 1];
    document.getElementById('m-ai-msg').innerText = last
        ? `📊 Last session: ${last.weight}${currentUnit} × ${last.reps} reps`
        : "🆕 First time — start light, nail the form.";
    const t      = new Date().toDateString();
    const todays = u.history.filter(h => h.exId === id && new Date(h.date).toDateString() === t);
    let h = "";
    todays.forEach((s, i) => {
        h += `<div class="history-item">
            <span>Set ${i+1}: ${s.weight}${currentUnit} × ${s.reps} reps</span>
            <button class="delete-set-btn" onclick="deleteSet('${s.uniqueId}')"><i class="fas fa-trash"></i></button>
        </div>`;
    });
    document.getElementById('sets-history').innerHTML = h || "<small style='color:#777;padding:8px;display:block'>No sets logged today yet</small>";
}

function saveSet() {
    const w = document.getElementById('log-w').value, r = document.getElementById('log-r').value;
    if (!w || !r) return alert("Enter weight and reps.");
    const uid = Date.now().toString() + Math.floor(Math.random() * 1000);
    users[activeUserIndex].history.push({ uniqueId:uid, date:new Date().toISOString(), exId:currentExId, weight:w, reps:r });
    saveData();
    openTracker(currentExId);
}

function deleteSet(uid) {
    if (!confirm("Delete this set?")) return;
    users[activeUserIndex].history = users[activeUserIndex].history.filter(h => h.uniqueId !== uid);
    saveData(); openTracker(currentExId); updateUI();
}

function toggleComplete(id) {
    const u = users[activeUserIndex];
    if (u.completedToday.includes(id))
        u.completedToday = u.completedToday.filter(x => x !== id);
    else { u.completedToday.push(id); startRestTimer(120, "REST — NEXT EXERCISE"); }
    saveData(); updateUI();
}

/* =========================================
   9. REST TIMER
   ========================================= */
function startRestTimer(sec, lbl) {
    clearInterval(timerInterval);
    currentTimerVal = sec;
    document.getElementById('rest-overlay').style.display = 'flex';
    document.getElementById('timer-label').innerText = lbl;
    document.getElementById('timer-countdown').innerText = fmtTime(sec);
    timerInterval = setInterval(() => {
        currentTimerVal--;
        document.getElementById('timer-countdown').innerText = fmtTime(currentTimerVal);
        if (currentTimerVal <= 0) { stopTimer(); if (navigator.vibrate) navigator.vibrate([300,100,300]); playBeep(); }
    }, 1000);
}

function stopTimer() { clearInterval(timerInterval); document.getElementById('rest-overlay').style.display = 'none'; }
function fmtTime(s)  { const m = Math.floor(s/60), sec = s%60; return `${m}:${sec<10?'0'+sec:sec}`; }
function playBeep()  {
    try {
        const c = new (window.AudioContext||window.webkitAudioContext)();
        const o = c.createOscillator(); o.connect(c.destination);
        o.frequency.value = 880; o.type = 'sine'; o.start(); setTimeout(() => o.stop(), 600);
    } catch(e) {}
}

function setUnit(u) {
    currentUnit = u;
    document.getElementById('unit-kg').className  = u==='kg'  ? 'unit-opt active' : 'unit-opt';
    document.getElementById('unit-lbs').className = u==='lbs' ? 'unit-opt active' : 'unit-opt';
    document.getElementById('weight-label').innerText = `Weight (${u.toUpperCase()})`;
    if (currentExId) openTracker(currentExId);
}

function closeModal() { document.getElementById('tracker-modal').style.display = 'none'; }

/* =========================================
   10. NUTRITION — AUTO CALC (SMART SEARCH)
   ========================================= */
function autoFillMacros() {
    const input = document.getElementById('food-name').value.toLowerCase().trim();
    if (!input) return alert("Type a food name first.");

    // Extract quantity multiplier (e.g. "3 doubles" → 3)
    let multiplier = 1;
    const numMatch = input.match(/^(\d+(\.\d+)?)\s*/);
    if (numMatch) multiplier = parseFloat(numMatch[1]);
    const cleanSearch = input.replace(/^(\d+(\.\d+)?)\s*/, '').trim();

    // Try exact match first, then partial
    let found = foodLibrary.find(x => x.n === cleanSearch);
    if (!found) {
        // Try if food name contains search word
        found = foodLibrary.find(x => cleanSearch.includes(x.n));
    }
    if (!found) {
        // Try if search contains food name (any word)
        const words = cleanSearch.split(/\s+/);
        for (let w of words) {
            if (w.length < 3) continue;
            found = foodLibrary.find(x => x.n.includes(w) || w.includes(x.n));
            if (found) break;
        }
    }

    if (found) {
        document.getElementById('m-prot').value = Math.round(found.p * multiplier);
        document.getElementById('m-carb').value = Math.round(found.c * multiplier);
        document.getElementById('m-fat').value  = Math.round(found.f * multiplier);
        document.getElementById('m-cal').value  = Math.round(found.cal * multiplier);
    } else {
        alert(`"${cleanSearch}" not found.\nTry: doubles, pelau, roti, stew chicken, pholourie, dhal, callaloo...`);
    }
}

function logMeal() {
    const n = document.getElementById('food-name').value;
    if (!n) return alert("Enter a food name.");
    users[activeUserIndex].nutritionLogs.push({
        id: Date.now(), date: new Date().toISOString(),
        type: document.getElementById('meal-type').value, name: n,
        p: parseInt(document.getElementById('m-prot').value)||0,
        c: parseInt(document.getElementById('m-carb').value)||0,
        f: parseInt(document.getElementById('m-fat').value)||0,
        cal: parseInt(document.getElementById('m-cal').value)||0
    });
    saveData(); updateUI(); updateMacrosDisplay();
    document.getElementById('food-name').value = "";
    document.getElementById('m-prot').value = "";
    document.getElementById('m-carb').value = "";
    document.getElementById('m-fat').value  = "";
    document.getElementById('m-cal').value  = "";
}

function updateMacrosDisplay() {
    const u = users[activeUserIndex], t = new Date().toDateString();
    const l = u.nutritionLogs.filter(x => new Date(x.date).toDateString() === t);
    let h = "", tp = 0, tc = 0, tf = 0, tcal = 0;
    l.forEach(x => {
        tp += x.p; tc += x.c; tf += x.f; tcal += x.cal;
        h += `<div class="meal-log-item">
            <div class="meal-log-details"><b>${x.type}:</b> ${x.name} <span style="color:#E6C288">(${x.cal} cal)</span></div>
            <button class="delete-meal-btn" onclick="deleteMeal(${x.id})"><i class="fas fa-trash"></i></button>
        </div>`;
    });
    document.getElementById('macro-display').innerHTML = `
        <div style="display:flex;justify-content:space-around;background:#222;padding:12px;border-radius:8px;margin-bottom:10px;">
            <span style="color:#3498db;font-weight:bold">P: ${tp}g</span>
            <span style="color:#2ecc71;font-weight:bold">C: ${tc}g</span>
            <span style="color:#e74c3c;font-weight:bold">F: ${tf}g</span>
            <span style="color:#E6C288;font-weight:bold">${tcal} cal</span>
        </div>`;
    document.getElementById('meal-log-list').innerHTML = h || "<p style='color:#555;text-align:center'>No meals logged today.</p>";
}

function deleteMeal(id) {
    if (!confirm("Remove this meal?")) return;
    users[activeUserIndex].nutritionLogs = users[activeUserIndex].nutritionLogs.filter(l => l.id !== id);
    saveData(); updateUI(); updateMacrosDisplay();
}

function filterMeals(t) {
    const c = document.getElementById('meal-prep-container');
    c.innerHTML = "";
    (mealIdeas[t] || []).forEach(i => {
        c.innerHTML += `<div class="meal-prep-card">
            <b>${i.t}</b><br>
            <small style="color:#aaa">${i.d}</small><br>
            <span style="color:#E6C288;font-size:11px">${i.m}</span>
        </div>`;
    });
}

function showNutriTab(t) {
    document.getElementById('nutri-track-view').style.display  = t==='track' ? 'block' : 'none';
    document.getElementById('nutri-ideas-view').style.display  = t==='ideas' ? 'block' : 'none';
    if (t==='track') updateMacrosDisplay();
    if (t==='ideas') filterMeals('Breakfast');
}

/* =========================================
   11. LIBRARY
   ========================================= */
function filterLibrary() {
    const t = document.getElementById('search-ex').value.toLowerCase();
    const l = document.getElementById('library-list');
    l.innerHTML = "";
    const results = exerciseDB.filter(e =>
        e.name.toLowerCase().includes(t) || e.muscle.toLowerCase().includes(t)
    );
    if (results.length === 0) { l.innerHTML = "<p style='color:#555;text-align:center'>No exercises found.</p>"; return; }
    results.forEach(e => {
        const muscleColor = {Chest:'#e74c3c',Back:'#3498db',Legs:'#2ecc71',Shoulders:'#9b59b6',
            Biceps:'#e67e22',Triceps:'#f39c12',Glutes:'#e91e8c',Core:'#1abc9c',Cardio:'#16a085'}[e.muscle] || '#888';
        l.innerHTML += `<div class="routine-item" onclick="openTracker(${e.id})">
            <div><b>${e.name}</b><br><small style="color:${muscleColor}">${e.muscle}</small></div>
            <i class="fas fa-chevron-right" style="color:#555"></i>
        </div>`;
    });
}

/* =========================================
   12. PROFILE & USER MANAGEMENT
   ========================================= */
function saveProfile() {
    const u = users[activeUserIndex];
    u.name   = document.getElementById('p-name').value;
    u.gender = document.getElementById('p-gender').value;
    u.goal   = document.getElementById('p-goal').value;
    saveData(); updateUI();
    alert("✅ Profile saved! Routine updated.");
}

function toggleTrainerMode() {
    users[activeUserIndex].trainerMode = document.getElementById('p-trainer-mode').checked;
    saveData(); updateUI();
}

function toggleUserMenu() {
    const m = document.getElementById('user-menu');
    m.style.display = m.style.display === 'block' ? 'none' : 'block';
    if (m.style.display === 'block') {
        const l = document.getElementById('user-list-display');
        l.innerHTML = "";
        users.forEach((u, i) => l.innerHTML +=
            `<div class="user-option" onclick="switchUser(${i})" style="padding:10px;cursor:pointer;${i===activeUserIndex?'color:#E6C288;font-weight:bold':''}"><b>${u.name}</b></div>`);
    }
}

function createNewUser() {
    const n = prompt("New user name:");
    if (n && n.trim()) {
        users.push({ id:Date.now(), name:n.trim(), trainerMode:false, gender:'male',
            goal:'shred', history:[], nutritionLogs:[], completedToday:[] });
        saveData(); toggleUserMenu();
    }
}

function switchUser(i) {
    activeUserIndex = i;
    document.getElementById('user-menu').style.display = 'none';
    updateUI();
}

function resetCurrentUserData() {
    if (!confirm("Reset ALL workout & nutrition data for this user?")) return;
    const u = users[activeUserIndex];
    u.history = []; u.nutritionLogs = []; u.completedToday = [];
    saveData(); updateUI();
    alert("✅ Reset complete.");
}

function deleteCurrentUser() {
    if (!confirm(`Delete user "${users[activeUserIndex].name}"?`)) return;
    if (users.length === 1) return emergencyReset();
    users.splice(activeUserIndex, 1); activeUserIndex = 0;
    saveData(); document.getElementById('user-menu').style.display = 'none'; updateUI();
}

function emergencyReset() {
    if (confirm("⚠️ FACTORY RESET — delete ALL app data?")) {
        localStorage.removeItem('spartanUsers'); location.reload();
    }
}

/* =========================================
   13. NAVIGATION
   ========================================= */
function nav(id) {
    document.querySelectorAll('.tab-content').forEach(e => e.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(e => e.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
    if (id === 'dashboard') updateUI();
    if (id === 'library')   filterLibrary();
    if (id === 'nutrition') showNutriTab('track');
}

function saveData() { localStorage.setItem('spartanUsers', JSON.stringify(users)); }
