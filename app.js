/**
 * AURA FIT AI // Neural Athletics & Fitness Architect
 * Core Engine & Interactive UI Logic
 */

// ==========================================
// 1. SPORTS SCIENCE & EXERCISE DATABASE
// ==========================================

const EXERCISE_DATABASE = {
  chest: [
    { name: "Barbell Bench Press", equip: "gym", type: "compound", joints: ["shoulder_load"], cue: "Retract scapulae, touch lower sternum, drive through feet." },
    { name: "Incline Dumbbell Press", equip: "dumbbells", type: "compound", joints: ["shoulder_load"], cue: "Set bench to 30°, flare elbows 45°, squeeze upper chest." },
    { name: "Decline Cable Chest Flyes", equip: "gym", type: "isolation", joints: ["shoulder_safe"], cue: "Hug an imaginary barrel, constant peak contraction tension." },
    { name: "Weighted or Standard Push-Ups", equip: "bodyweight", type: "compound", joints: ["shoulder_safe", "back_safe"], cue: "Brace core tight like a moving plank, full chest lock." },
    { name: "Dumbbell Floor Press", equip: "dumbbells", type: "compound", joints: ["shoulder_safe"], cue: "Triceps touch floor gently to protect shoulder joint." },
    { name: "Resistance Band Chest Crossover", equip: "bands", type: "isolation", joints: ["shoulder_safe"], cue: "Step forward into tension, cross hands at midline." },
    { name: "Dips (Chest Focus)", equip: "gym", type: "compound", joints: ["shoulder_load"], cue: "Lean forward 30 degrees, flare elbows slightly." }
  ],
  back: [
    { name: "Conventional Barbell Deadlift", equip: "gym", type: "compound", joints: ["knee_load", "back_load"], cue: "Pack lats, hinge hips backwards, explode upward." },
    { name: "Pull-Ups / Lat Pulldown", equip: "gym", type: "compound", joints: ["back_safe", "knee_safe"], cue: "Drive elbows into back pockets, chest high to bar." },
    { name: "Chest-Supported Dumbbell Row", equip: "dumbbells", type: "compound", joints: ["back_safe"], cue: "Zero lower back shear stress, pull elbows behind ribs." },
    { name: "Single-Arm Dumbbell Row", equip: "dumbbells", type: "compound", joints: ["knee_safe"], cue: "Pull towards hip crease, control stretch at bottom." },
    { name: "Inverted Bodyweight Rows", equip: "bodyweight", type: "compound", joints: ["back_safe", "knee_safe"], cue: "Pull sternum to bar, squeeze shoulder blades hard." },
    { name: "Band Pull-Aparts & Face Pulls", equip: "bands", type: "isolation", joints: ["back_safe", "shoulder_safe"], cue: "Keep thumbs pointed back, targets rear delts & rhomboids." },
    { name: "Seated Cable Row (Close Grip)", equip: "gym", type: "compound", joints: ["knee_safe"], cue: "Maintain upright spine, full eccentric lat stretch." }
  ],
  legs: [
    { name: "Barbell Back Squat", equip: "gym", type: "compound", joints: ["knee_load", "back_load"], cue: "Screw feet into floor, knees track over toes, hit parallel." },
    { name: "Bulgarian Split Squat", equip: "dumbbells", type: "compound", joints: ["back_safe"], cue: "Rear foot on bench, drop back knee straight down." },
    { name: "Romanian Deadlift (RDL)", equip: "dumbbells", type: "compound", joints: ["knee_safe"], cue: "Soft bend in knees, push hips to back wall until hamstrings stretch." },
    { name: "Bodyweight Jump & Tempo Squats", equip: "bodyweight", type: "compound", joints: ["back_safe"], cue: "3-second descent, explode up with soft landing." },
    { name: "Walking Dumbbell Lunges", equip: "dumbbells", type: "compound", joints: ["back_safe"], cue: "Chest proud, 90-degree bend at both knees on every step." },
    { name: "Resistance Band Glute Bridges", equip: "bands", type: "isolation", joints: ["knee_safe", "back_safe"], cue: "Band above knees, drive hips to ceiling, hold 2s squeeze." },
    { name: "Leg Press (High & Wide Foot Placement)", equip: "gym", type: "compound", joints: ["back_safe"], cue: "Lower back glued to pad, don't lock knees out at top." },
    { name: "Standing Calf Raises", equip: "dumbbells", type: "isolation", joints: ["knee_safe", "back_safe"], cue: "2s deep stretch at bottom, rise onto big toes." }
  ],
  shoulders: [
    { name: "Overhead Barbell Military Press", equip: "gym", type: "compound", joints: ["shoulder_load", "back_load"], cue: "Lock glutes and core, press directly overhead, head through." },
    { name: "Standing Dumbbell Lateral Raises", equip: "dumbbells", type: "isolation", joints: ["back_safe", "knee_safe"], cue: "Lead with elbows, slight forward tilt, pour imaginary water." },
    { name: "Seated Dumbbell Shoulder Press", equip: "dumbbells", type: "compound", joints: ["back_safe"], cue: "Palms slightly angled inward (scapular plane), press smooth." },
    { name: "Pike Push-Ups (Handstand Progression)", equip: "bodyweight", type: "compound", joints: ["knee_safe"], cue: "Elevate hips high in pike, lower head in front of hands." },
    { name: "Band Overhead Lateral Tension Raise", equip: "bands", type: "isolation", joints: ["shoulder_safe"], cue: "Maintain constant outward band pressure during raise." },
    { name: "Rear Delt Dumbbell Reverse Fly", equip: "dumbbells", type: "isolation", joints: ["shoulder_safe"], cue: "Hinged forward at hips, sweep arms wide without using traps." }
  ],
  arms: [
    { name: "Incline Dumbbell Bicep Curls", equip: "dumbbells", type: "isolation", joints: ["shoulder_safe"], cue: "Max bicep long-head stretch at bottom, supinate wrists." },
    { name: "Triceps Overhead Rope Extension", equip: "gym", type: "isolation", joints: ["elbow_care"], cue: "Flare rope at top lock, keep elbows pinned beside ears." },
    { name: "Dumbbell Skull Crushers", equip: "dumbbells", type: "isolation", joints: ["elbow_care"], cue: "Lower dumbbells towards temples, pivot solely at elbows." },
    { name: "Diamond Push-Ups", equip: "bodyweight", type: "compound", joints: ["wrist_care"], cue: "Hands close under sternum, immense tricep overload." },
    { name: "Hammer Curls", equip: "dumbbells", type: "isolation", joints: ["shoulder_safe"], cue: "Neutral grip targets brachialis and forearms for arm thickness." },
    { name: "Band Tricep Pushdowns", equip: "bands", type: "isolation", joints: ["elbow_care"], cue: "Pin elbows to ribcage, spread band at bottom contraction." }
  ],
  core: [
    { name: "Hanging Knee / Leg Raises", equip: "gym", type: "isolation", joints: ["back_safe"], cue: "Curl pelvis upward towards chest, don't just swing legs." },
    { name: "Ab-Wheel Rollout or Plank Walkouts", equip: "bodyweight", type: "compound", joints: ["back_care"], cue: "Anterior pelvic tilt, brace like taking a punch." },
    { name: "Weighted Russian Twists", equip: "dumbbells", type: "isolation", joints: ["back_care"], cue: "Rotate shoulders through full transverse plane with control." },
    { name: "Deadbugs with Core Compression", equip: "bodyweight", type: "isolation", joints: ["back_safe", "knee_safe"], cue: "Flatten lower back into floor, extend opposite arm and leg." },
    { name: "Band Paloff Anti-Rotation Press", equip: "bands", type: "compound", joints: ["back_safe"], cue: "Resist band torsion, hold extension for 3 seconds." }
  ]
};

// ==========================================
// 2. MEAL DATABASE BY DIETARY ARCHETYPE
// ==========================================

const MEAL_TEMPLATES = {
  high_protein: {
    breakfast: { title: "Power Scramble & Oats", desc: "4 Whole eggs/whites, baby spinach, avocado slice, rolled oats with whey protein and fresh berries.", p: 48, c: 55, f: 18 },
    lunch: { title: "Charred Chipotle Chicken Bowl", desc: "Grilled chicken breast (200g), cilantro jasmine rice, black beans, fajita peppers & salsa verde.", p: 52, c: 68, f: 14 },
    preworkout: { title: "Anabolic Rice Cakes & Honey", desc: "2 Rice cakes with natural almond butter, banana slices, and unflavored whey isolate shake.", p: 32, c: 45, f: 8 },
    dinner: { title: "Crispy Salmon & Roasted Sweet Potato", desc: "Atlantic salmon fillet (180g), baked sweet potato wedges with rosemary, grilled asparagus.", p: 44, c: 48, f: 22 }
  },
  vegetarian: {
    breakfast: { title: "Greek Yogurt Berry Parfait", desc: "Triple-zero Greek yogurt (250g), chia seeds, pumpkin seeds, granola & organic blueberries.", p: 38, c: 45, f: 12 },
    lunch: { title: "High-Protein Lentil & Halloumi Bowl", desc: "Warm spiced green lentils, grilled halloumi cheese, quinoa, roasted zucchini, tahini drizzle.", p: 42, c: 60, f: 20 },
    preworkout: { title: "Soy Protein Smoothie Bowl", desc: "Plant isolate protein, frozen mixed berries, oat milk, crushed walnuts.", p: 30, c: 40, f: 9 },
    dinner: { title: "Tofu Edamame Stir-Fry", desc: "Crispy pan-seared firm tofu (220g), edamame beans, broccoli florets, brown rice noodles in sesame ginger sauce.", p: 45, c: 55, f: 16 }
  },
  vegan: {
    breakfast: { title: "Tempeh Scramble & Sprouted Toast", desc: "Crumble turmeric tempeh, nutritional yeast, roasted cherry tomatoes, 2 slices Ezekiel bread.", p: 35, c: 42, f: 14 },
    lunch: { title: "Mediterranean Chickpea & Seitan Bowl", desc: "Vital wheat gluten seitan strips, spiced chickpeas, baby kale, kalamata olives, hemp seed dressing.", p: 55, c: 52, f: 15 },
    preworkout: { title: "Dates, Peanut Butter & Pea Isolate", desc: "3 Medjool dates, 1 tbsp organic peanut butter, pea & rice isolate protein shake.", p: 32, c: 46, f: 8 },
    dinner: { title: "Black Bean & Quinoa Protein Chili", desc: "Simmered three-bean chili with red quinoa, diced avocado, cilantro, nutritional yeast garnish.", p: 40, c: 65, f: 14 }
  },
  keto: {
    breakfast: { title: "Keto Chorizo & Cheddar Frittata", desc: "3 Free-range eggs, artisan chorizo sausage, cheddar cheese, sliced avocado with cold-pressed olive oil.", p: 38, c: 4, f: 45 },
    lunch: { title: "Keto Cobb Bacon Salad", desc: "Grilled chicken thighs, bacon lardons, blue cheese crumbles, boiled egg, romaine lettuce & ranch.", p: 46, c: 6, f: 48 },
    preworkout: { title: "Bulletproof MCT Coffee & Macadamias", desc: "Black espresso blended with 10g MCT oil, grass-fed butter, handful of raw macadamia nuts.", p: 6, c: 3, f: 34 },
    dinner: { title: "Ribeye Steak with Garlic Herb Butter", desc: "Prime ribeye steak (250g), roasted cauliflower mash with heavy cream, sautéed spinach.", p: 52, c: 5, f: 52 }
  },
  mediterranean: {
    breakfast: { title: "Olive Oil Fried Eggs on Sourdough", desc: "2 Eggs fried in extra virgin olive oil, smashed avocado, heirloom tomatoes on seeded sourdough.", p: 26, c: 38, f: 22 },
    lunch: { title: "Grilled Herb Sea Bass with Farro", desc: "Whole grilled Mediterranean sea bass, ancient farro grain salad, arugula, kalamata olives.", p: 45, c: 50, f: 16 },
    preworkout: { title: "Greek Yogurt with Figs & Walnuts", desc: "Traditional strained goat/sheep yogurt with fresh figs and honey-glazed walnuts.", p: 28, c: 35, f: 10 },
    dinner: { title: "Lemon Rosemary Chicken & Potatoes", desc: "Skin-on roasted chicken breast, fingerling potatoes, steamed artichokes with lemon vinaigrette.", p: 48, c: 45, f: 18 }
  }
};

// ==========================================
// 3. AUDIO SYNTHESIS ENGINE (WEB AUDIO API)
// ==========================================

class AudioSynth {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playBeep(freq = 600, type = "sine", duration = 0.1, gainVal = 0.15) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy guard
    }
  }

  playSuccessChime() {
    if (!this.enabled) return;
    this.playBeep(523.25, "sine", 0.15, 0.12); // C5
    setTimeout(() => this.playBeep(659.25, "sine", 0.15, 0.12), 120); // E5
    setTimeout(() => this.playBeep(783.99, "sine", 0.3, 0.15), 240); // G5
    setTimeout(() => this.playBeep(1046.50, "sine", 0.45, 0.2), 360); // C6
  }

  playTimerFinished() {
    if (!this.enabled) return;
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.playBeep(880, "square", 0.12, 0.2);
      }, i * 180);
    }
  }
}

const audioFX = new AudioSynth();

// ==========================================
// 4. REST TIMER CONTROLLER
// ==========================================

class RestTimer {
  constructor() {
    this.totalSeconds = 90;
    this.remainingSeconds = 90;
    this.timerId = null;
    this.isRunning = false;

    this.timerEl = document.getElementById("floatingRestTimer");
    this.displayEl = document.getElementById("restTimerDisplay");
    this.circleBar = document.getElementById("timerCircleBar");
    this.playBtn = document.getElementById("btnTimerPlay");
    this.circumference = 2 * Math.PI * 20; // r=20 -> 125.66

    this.initListeners();
  }

  initListeners() {
    document.getElementById("btnTimerClose")?.addEventListener("click", () => this.hide());
    document.getElementById("btnTimerPlus15")?.addEventListener("click", () => this.addSeconds(15));
    document.getElementById("btnTimerMinus15")?.addEventListener("click", () => this.addSeconds(-15));
    this.playBtn?.addEventListener("click", () => this.togglePlay());
  }

  start(seconds = 90) {
    this.totalSeconds = seconds;
    this.remainingSeconds = seconds;
    this.show();
    this.updateDisplay();
    this.run();
    audioFX.playBeep(440, "sine", 0.1, 0.1);
  }

  run() {
    if (this.timerId) clearInterval(this.timerId);
    this.isRunning = true;
    if (this.playBtn) this.playBtn.innerHTML = `⏸`;

    this.timerId = setInterval(() => {
      this.remainingSeconds--;
      this.updateDisplay();

      if (this.remainingSeconds <= 0) {
        clearInterval(this.timerId);
        this.isRunning = false;
        audioFX.playTimerFinished();
        showToast("🔔 Rest interval complete! Get ready for your next set!");
        if (this.playBtn) this.playBtn.innerHTML = `▶`;
      }
    }, 1000);
  }

  togglePlay() {
    if (this.isRunning) {
      clearInterval(this.timerId);
      this.isRunning = false;
      if (this.playBtn) this.playBtn.innerHTML = `▶`;
    } else {
      if (this.remainingSeconds <= 0) this.remainingSeconds = this.totalSeconds;
      this.run();
    }
  }

  addSeconds(sec) {
    this.remainingSeconds = Math.max(5, this.remainingSeconds + sec);
    this.totalSeconds = Math.max(this.remainingSeconds, this.totalSeconds);
    this.updateDisplay();
    audioFX.playBeep(520, "triangle", 0.08, 0.1);
  }

  updateDisplay() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    this.displayEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    const fraction = this.remainingSeconds / this.totalSeconds;
    const offset = this.circumference * (1 - fraction);
    this.circleBar.style.strokeDashoffset = offset;
  }

  show() {
    this.timerEl.classList.add("active");
  }

  hide() {
    clearInterval(this.timerId);
    this.isRunning = false;
    this.timerEl.classList.remove("active");
  }
}

// ==========================================
// 5. MAIN APPLICATION CONTROLLER
// ==========================================

let activeProtocol = null;
let currentWorkoutDay = 0;
let restTimer = null;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  restTimer = new RestTimer();
  setupUIInteractions();
  setupPresetProfiles();
  setupUnitToggles();
  setupFormSubmit();
  checkForSavedProtocol();
});

// Toast Messenger
function showToast(message) {
  const toast = document.getElementById("toastMsg");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// UI Interactive Elements
function setupUIInteractions() {
  // Sound FX toggle
  const soundBtn = document.getElementById("soundToggleBtn");
  soundBtn?.addEventListener("click", () => {
    audioFX.enabled = !audioFX.enabled;
    soundBtn.classList.toggle("active", audioFX.enabled);
    soundBtn.innerHTML = audioFX.enabled 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
    showToast(audioFX.enabled ? "Sound FX Activated" : "Sound FX Muted");
    if (audioFX.enabled) audioFX.playBeep(700, "sine", 0.1);
  });

  // Days per week slider sync
  const daysSlider = document.getElementById("daysPerWeekSlider");
  const daysVal = document.getElementById("daysPerWeekVal");
  daysSlider?.addEventListener("input", (e) => {
    daysVal.textContent = `${e.target.value} Days / Wk`;
    audioFX.playBeep(300 + e.target.value * 50, "sine", 0.04, 0.05);
  });

  // Session duration slider sync
  const durSlider = document.getElementById("sessionDurationSlider");
  const durVal = document.getElementById("sessionDurationVal");
  durSlider?.addEventListener("input", (e) => {
    durVal.textContent = `${e.target.value} Mins`;
    audioFX.playBeep(350 + (e.target.value / 10) * 30, "sine", 0.04, 0.05);
  });

  // Radio Choice Card styling
  document.querySelectorAll(".choice-card").forEach(card => {
    card.addEventListener("click", () => {
      const radio = card.querySelector('input[type="radio"]');
      const checkbox = card.querySelector('input[type="checkbox"]');

      if (radio) {
        const name = radio.name;
        document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
          r.closest(".choice-card")?.classList.remove("selected");
        });
        radio.checked = true;
        card.classList.add("selected");
        audioFX.playBeep(450, "sine", 0.06, 0.08);
      } else if (checkbox) {
        checkbox.checked = !checkbox.checked;
        card.classList.toggle("selected", checkbox.checked);
        audioFX.playBeep(checkbox.checked ? 550 : 350, "sine", 0.06, 0.08);
      }
    });
  });

  // Pill Options
  document.querySelectorAll(".pill-group .pill-option").forEach(pill => {
    pill.addEventListener("click", () => {
      const group = pill.closest(".pill-group");
      group.querySelectorAll(".pill-option").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      audioFX.playBeep(500, "sine", 0.05, 0.08);
    });
  });

  // Reset to form
  document.getElementById("btnModifyPlan")?.addEventListener("click", () => {
    document.getElementById("studioSection").scrollIntoView({ behavior: "smooth" });
  });

  // Print button
  document.getElementById("btnPrintPlan")?.addEventListener("click", () => {
    window.print();
  });

  // Export Markdown button
  document.getElementById("btnCopyMarkdown")?.addEventListener("click", copyMarkdownProtocol);

  // Save plan button
  document.getElementById("btnSavePlan")?.addEventListener("click", () => {
    if (activeProtocol) {
      localStorage.setItem("aurafit_saved_plan", JSON.stringify(activeProtocol));
      showToast("✓ Protocol saved to browser storage!");
      audioFX.playSuccessChime();
    }
  });

  // Load saved plan button in header
  document.getElementById("btnLoadSaved")?.addEventListener("click", () => {
    const saved = localStorage.getItem("aurafit_saved_plan");
    if (saved) {
      activeProtocol = JSON.parse(saved);
      renderProtocol(activeProtocol);
      showToast("✓ Saved protocol loaded!");
      audioFX.playSuccessChime();
    } else {
      showToast("No saved plan found. Generate one first!");
    }
  });
}

// Unit Switches (cm vs ft/in & kg vs lbs)
function setupUnitToggles() {
  const heightToggle = document.getElementById("unitHeightToggle");
  const weightToggle = document.getElementById("unitWeightToggle");
  const heightInput = document.getElementById("inputHeight");
  const weightInput = document.getElementById("inputWeight");
  const targetWeightInput = document.getElementById("inputTargetWeight");

  let heightUnit = "cm"; // "cm" or "ft"
  let weightUnit = "kg"; // "kg" or "lbs"

  heightToggle?.addEventListener("click", () => {
    if (heightUnit === "cm") {
      heightUnit = "ft";
      heightToggle.textContent = "Switch to cm";
      const cm = parseFloat(heightInput.value) || 178;
      const totalInches = cm / 2.54;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.round(totalInches % 12);
      heightInput.value = `${feet}.${inches}`;
      heightInput.placeholder = "e.g. 5.10 (5ft 10in)";
    } else {
      heightUnit = "cm";
      heightToggle.textContent = "Switch to ft";
      const parts = heightInput.value.split(".");
      const feet = parseFloat(parts[0]) || 5;
      const inches = parseFloat(parts[1]) || 10;
      heightInput.value = Math.round((feet * 12 + inches) * 2.54);
      heightInput.placeholder = "e.g. 178 cm";
    }
  });

  weightToggle?.addEventListener("click", () => {
    if (weightUnit === "kg") {
      weightUnit = "lbs";
      weightToggle.textContent = "Switch to kg";
      weightInput.value = Math.round((parseFloat(weightInput.value) || 75) * 2.20462);
      targetWeightInput.value = Math.round((parseFloat(targetWeightInput.value) || 75) * 2.20462);
      weightInput.placeholder = "e.g. 165 lbs";
      targetWeightInput.placeholder = "e.g. 175 lbs";
    } else {
      weightUnit = "kg";
      weightToggle.textContent = "Switch to lbs";
      weightInput.value = Math.round((parseFloat(weightInput.value) || 165) / 2.20462);
      targetWeightInput.value = Math.round((parseFloat(targetWeightInput.value) || 165) / 2.20462);
      weightInput.placeholder = "e.g. 75 kg";
      targetWeightInput.placeholder = "e.g. 80 kg";
    }
  });
}

// Preset Profiles
function setupPresetProfiles() {
  const presets = {
    hypertrophy: {
      age: 26, sex: "male", height: 180, weight: 78, targetWeight: 83,
      activity: "moderate", goal: "hypertrophy", exp: "intermediate",
      equip: "gym", days: 4, duration: 60, diet: "high_protein"
    },
    shred: {
      age: 29, sex: "male", height: 176, weight: 84, targetWeight: 75,
      activity: "very_active", goal: "fat_loss", exp: "intermediate",
      equip: "gym", days: 5, duration: 45, diet: "high_protein"
    },
    home: {
      age: 32, sex: "female", height: 165, weight: 64, targetWeight: 60,
      activity: "light", goal: "recomp", exp: "beginner",
      equip: "dumbbells", days: 3, duration: 45, diet: "mediterranean"
    },
    strength: {
      age: 24, sex: "male", height: 184, weight: 88, targetWeight: 92,
      activity: "heavy", goal: "strength", exp: "advanced",
      equip: "gym", days: 4, duration: 75, diet: "high_protein"
    }
  };

  document.querySelectorAll(".preset-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-preset");
      const data = presets[type];
      if (!data) return;

      // Populate Inputs
      document.getElementById("inputAge").value = data.age;
      document.getElementById("selectSex").value = data.sex;
      document.getElementById("inputHeight").value = data.height;
      document.getElementById("inputWeight").value = data.weight;
      document.getElementById("inputTargetWeight").value = data.targetWeight;
      document.getElementById("selectActivity").value = data.activity;

      // Goal card
      selectChoiceCard("goal", data.goal);
      selectChoiceCard("experience", data.exp);
      selectChoiceCard("equipment", data.equip);

      // Sliders
      const daysSlider = document.getElementById("daysPerWeekSlider");
      daysSlider.value = data.days;
      document.getElementById("daysPerWeekVal").textContent = `${data.days} Days / Wk`;

      const durSlider = document.getElementById("sessionDurationSlider");
      durSlider.value = data.duration;
      document.getElementById("sessionDurationVal").textContent = `${data.duration} Mins`;

      // Diet pill
      document.querySelectorAll("#dietPills .pill-option").forEach(p => {
        if (p.getAttribute("data-val") === data.diet) {
          p.click();
        }
      });

      showToast(`Loaded "${btn.textContent.trim()}" preset blueprint!`);
      audioFX.playBeep(600, "sine", 0.1);
    });
  });
}

function selectChoiceCard(groupName, value) {
  const radio = document.querySelector(`input[name="${groupName}"][value="${value}"]`);
  if (radio) {
    radio.checked = true;
    document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => {
      r.closest(".choice-card")?.classList.remove("selected");
    });
    radio.closest(".choice-card")?.classList.add("selected");
  }
}

// Check saved on load
function checkForSavedProtocol() {
  const saved = localStorage.getItem("aurafit_saved_plan");
  if (saved) {
    try {
      activeProtocol = JSON.parse(saved);
      renderProtocol(activeProtocol);
      return;
    } catch (e) {
      console.warn("Could not load stored plan", e);
    }
  }
  // Initialize with calibrated default blueprint so the user sees a rich protocol immediately
  const initialData = gatherFormData();
  activeProtocol = generateFitnessProtocol(initialData);
  renderProtocol(activeProtocol);
}

// Form Submission & Neural Generation Flow
function setupFormSubmit() {
  const form = document.getElementById("fitnessStudioForm");
  const overlay = document.getElementById("neuralOverlay");
  const progressFill = document.getElementById("neuralProgressFill");
  const stepText = document.getElementById("neuralStepText");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect Data
    const formData = gatherFormData();

    // Start Simulation Animation
    overlay.classList.add("active");
    progressFill.style.width = "5%";
    stepText.textContent = "Scanning physiological biomarkers & metabolic profile...";
    audioFX.playBeep(400, "sine", 0.08);

    const steps = [
      { pct: 25, text: "Computing Mifflin-St Jeor BMR & dynamic TDEE expenditure...", freq: 500, delay: 500 },
      { pct: 55, text: "Synthesizing target macro splits & caloric partition coefficients...", freq: 650, delay: 1100 },
      { pct: 75, text: "Formulating periodized split & volume distribution matrix...", freq: 800, delay: 1700 },
      { pct: 92, text: "Optimizing joint mechanics & progressive overload curve...", freq: 950, delay: 2300 },
      { pct: 100, text: "Neural protocol synthesis complete!", freq: 1100, delay: 2800 }
    ];

    steps.forEach(({ pct, text, freq, delay }) => {
      setTimeout(() => {
        progressFill.style.width = `${pct}%`;
        stepText.textContent = text;
        audioFX.playBeep(freq, "sine", 0.07);
      }, delay);
    });

    setTimeout(() => {
      overlay.classList.remove("active");
      activeProtocol = generateFitnessProtocol(formData);
      renderProtocol(activeProtocol);
      audioFX.playSuccessChime();

      // Smooth scroll to results
      document.getElementById("resultsSection").scrollIntoView({ behavior: "smooth" });
    }, 3200);
  });
}

function gatherFormData() {
  const heightVal = document.getElementById("inputHeight").value;
  const weightVal = parseFloat(document.getElementById("inputWeight").value) || 75;
  const targetWeightVal = parseFloat(document.getElementById("inputTargetWeight").value) || 75;
  const isLbs = document.getElementById("unitWeightToggle").textContent.includes("kg");

  // Normalize weight to kg
  const weightKg = isLbs ? weightVal / 2.20462 : weightVal;
  const targetWeightKg = isLbs ? targetWeightVal / 2.20462 : targetWeightVal;

  // Normalize height to cm
  let heightCm = 175;
  if (heightVal.includes(".")) {
    const p = heightVal.split(".");
    heightCm = Math.round((parseFloat(p[0]) * 12 + (parseFloat(p[1]) || 0)) * 2.54);
  } else {
    heightCm = parseFloat(heightVal) || 175;
  }

  const age = parseInt(document.getElementById("inputAge").value) || 25;
  const sex = document.getElementById("selectSex").value;
  const activity = document.getElementById("selectActivity").value;
  const goal = document.querySelector('input[name="goal"]:checked')?.value || "hypertrophy";
  const experience = document.querySelector('input[name="experience"]:checked')?.value || "intermediate";
  const equipment = document.querySelector('input[name="equipment"]:checked')?.value || "gym";
  const daysPerWeek = parseInt(document.getElementById("daysPerWeekSlider").value) || 4;
  const sessionDuration = parseInt(document.getElementById("sessionDurationSlider").value) || 60;
  const diet = document.querySelector("#dietPills .pill-option.active")?.getAttribute("data-val") || "high_protein";

  return {
    age, sex, heightCm, weightKg, targetWeightKg,
    activity, goal, experience, equipment,
    daysPerWeek, sessionDuration, diet
  };
}

// ==========================================
// 6. PROTOCOL SYNTHESIS ALGORITHM
// ==========================================

function generateFitnessProtocol(data) {
  // 1. Mifflin-St Jeor BMR Calculation
  let bmr = (10 * data.weightKg) + (6.25 * data.heightCm) - (5 * data.age);
  if (data.sex === "male") {
    bmr += 5;
  } else {
    bmr -= 161;
  }
  bmr = Math.round(bmr);

  // 2. Activity Multiplier -> TDEE
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    athlete: 1.9
  };
  const tdee = Math.round(bmr * (multipliers[data.activity] || 1.4));

  // 3. Goal Caloric Target Adjustment
  let calorieTarget = tdee;
  let personaTitle = "";

  switch (data.goal) {
    case "hypertrophy":
      calorieTarget = tdee + 350;
      personaTitle = "Hypertrophic Mass Architect";
      break;
    case "fat_loss":
      calorieTarget = tdee - 500;
      personaTitle = "Kinetic Shred & Conditioning Specialist";
      break;
    case "recomp":
      calorieTarget = tdee - 50;
      personaTitle = "Metabolic Recomposition Strategist";
      break;
    case "strength":
      calorieTarget = tdee + 250;
      personaTitle = "Neuromuscular Power & Strength Elite";
      break;
    case "calisthenics":
      calorieTarget = tdee;
      personaTitle = "Relative Strength & Calisthenics Dynamo";
      break;
  }

  // 4. Macro Calculation
  // Protein: 2.0g to 2.4g per kg
  let proteinFactor = data.goal === "fat_loss" ? 2.3 : 2.0;
  if (data.goal === "hypertrophy") proteinFactor = 2.2;
  const proteinGrams = Math.round(data.weightKg * proteinFactor);
  const proteinCalories = proteinGrams * 4;

  // Fat: 22% to 28% of total calories (or high for keto)
  let fatPct = 0.25;
  if (data.diet === "keto") fatPct = 0.65;
  const fatCalories = calorieTarget * fatPct;
  const fatGrams = Math.round(fatCalories / 9);

  // Carbs: Remaining Calories
  let carbCalories = Math.max(0, calorieTarget - (proteinCalories + fatCalories));
  let carbGrams = Math.round(carbCalories / 4);

  if (data.diet === "keto") {
    carbGrams = Math.min(30, carbGrams);
  }

  // 5. Water Target (Liters)
  const waterLiters = ((data.weightKg * 0.035) + (data.sessionDuration > 60 ? 0.75 : 0.5)).toFixed(1);

  // 6. Workout Routine Generator based on Days and Equipment
  const weeklySplit = buildWorkoutSplit(data);

  // 7. Meal Blueprint
  const meals = buildMealBlueprint(data.diet, calorieTarget, proteinGrams, carbGrams, fatGrams);

  return {
    meta: {
      generatedAt: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
      persona: personaTitle,
      data
    },
    metrics: {
      bmr,
      tdee,
      calories: calorieTarget,
      protein: proteinGrams,
      carbs: carbGrams,
      fats: fatGrams,
      water: waterLiters
    },
    weeklySplit,
    meals,
    coachDirectives: generateCoachDirectives(data)
  };
}

// Dynamic Split Construction
function buildWorkoutSplit(data) {
  const daysCount = data.daysPerWeek;
  const equip = data.equipment;
  const goal = data.goal;

  // Reps & Sets configuration based on goal
  let repScheme = "8 - 12 reps";
  let setScheme = 3;
  let restScheme = 90;
  let rpe = "RPE 8 (2 reps in reserve)";

  if (goal === "strength") {
    repScheme = "4 - 6 reps";
    setScheme = 4;
    restScheme = 150;
    rpe = "RPE 8.5 (1-2 reps in reserve)";
  } else if (goal === "fat_loss") {
    repScheme = "10 - 15 reps";
    setScheme = 3;
    restScheme = 60;
    rpe = "RPE 8 (Paced tempo)";
  } else if (goal === "calisthenics") {
    repScheme = "8 - 15 reps";
    setScheme = 3;
    restScheme = 75;
    rpe = "RPE 8.5 (Clean explosive form)";
  }

  // Structure by Day count
  let splitPlan = [];

  if (daysCount === 2) {
    splitPlan = [
      { day: "Day 1", title: "Full Body Kinetic Alpha", focus: "Chest, Quads, Back, Core", isRest: false, groups: ["chest", "legs", "back", "core"] },
      { day: "Day 2", title: "Active Rest & Mobility", focus: "Cardiovascular flushing, tissue recovery", isRest: true },
      { day: "Day 3", title: "Full Body Kinetic Beta", focus: "Hamstrings, Shoulders, Lats, Arms", isRest: false, groups: ["legs", "shoulders", "back", "arms"] },
      { day: "Day 4", title: "Rest & Neural Recharge", focus: "Hydration, sleep, low stress walking", isRest: true },
      { day: "Day 5", title: "Rest & Neural Recharge", focus: "Hydration, sleep, low stress walking", isRest: true },
      { day: "Day 6", title: "Rest & Neural Recharge", focus: "Hydration, sleep, low stress walking", isRest: true },
      { day: "Day 7", title: "Weekly System Reset", focus: "Deep stretch, meal prep", isRest: true }
    ];
  } else if (daysCount === 3) {
    splitPlan = [
      { day: "Day 1", title: "Push Hypertrophy", focus: "Chest, Deltoids & Triceps", isRest: false, groups: ["chest", "shoulders", "arms"] },
      { day: "Day 2", title: "Active Recovery", focus: "Zone 2 Cardio, Joint mobility", isRest: true },
      { day: "Day 3", title: "Pull Velocity", focus: "Lats, Upper Back, Rear Delts & Biceps", isRest: false, groups: ["back", "arms", "core"] },
      { day: "Day 4", title: "Active Recovery", focus: "Tissue restoration, foam rolling", isRest: true },
      { day: "Day 5", title: "Legs & Core Foundry", focus: "Quads, Hamstrings, Glutes & Abs", isRest: false, groups: ["legs", "legs", "core"] },
      { day: "Day 6", title: "Rest & Recovery", focus: "Sleep optimization", isRest: true },
      { day: "Day 7", title: "Rest & System Reset", focus: "Macro check-in", isRest: true }
    ];
  } else if (daysCount === 4) {
    splitPlan = [
      { day: "Day 1", title: "Upper Body Power", focus: "Heavy Chest, Horizontal Pull, Shoulders", isRest: false, groups: ["chest", "back", "shoulders", "arms"] },
      { day: "Day 2", title: "Lower Body Kinetic Drive", focus: "Quad dominance, Calves, Heavy Hinge", isRest: false, groups: ["legs", "legs", "core"] },
      { day: "Day 3", title: "Active Recovery / Low Cadence", focus: "Mobility & parasympathetic reset", isRest: true },
      { day: "Day 4", title: "Upper Hypertrophy Sculpt", focus: "Incline Press, Vertical Pull, Lateral Delts, Arms", isRest: false, groups: ["chest", "back", "shoulders", "arms"] },
      { day: "Day 5", title: "Lower Hypertrophy & Posterior Chain", focus: "Hamstrings, Glute Bridges, Core stabilization", isRest: false, groups: ["legs", "legs", "core"] },
      { day: "Day 6", title: "Rest & Adaptation", focus: "Metabolic replenishing", isRest: true },
      { day: "Day 7", title: "Weekly System Reset", focus: "Check weights & journal", isRest: true }
    ];
  } else if (daysCount === 5) {
    splitPlan = [
      { day: "Day 1", title: "Push Protocol A", focus: "Chest, Front/Side Delts, Triceps", isRest: false, groups: ["chest", "shoulders", "arms"] },
      { day: "Day 2", title: "Pull Protocol A", focus: "Upper Back, Lats, Biceps", isRest: false, groups: ["back", "arms", "core"] },
      { day: "Day 3", title: "Legs & Posterior Core", focus: "Quads, Hamstrings, Glutes", isRest: false, groups: ["legs", "legs", "core"] },
      { day: "Day 4", title: "Active Reset", focus: "Zone 2 Walk, Contrast Showers", isRest: true },
      { day: "Day 5", title: "Upper Body Volume Overload", focus: "High rep density chest, back & shoulders", isRest: false, groups: ["chest", "back", "shoulders"] },
      { day: "Day 6", title: "Arms & Core Specialist", focus: "Direct arm hypertrophy & rotational strength", isRest: false, groups: ["arms", "arms", "core"] },
      { day: "Day 7", title: "Rest & Neural Reset", focus: "Deep sleep, carb loading", isRest: true }
    ];
  } else {
    // 6 Days
    splitPlan = [
      { day: "Day 1", title: "Push Intensity", focus: "Chest, Shoulders, Triceps", isRest: false, groups: ["chest", "shoulders", "arms"] },
      { day: "Day 2", title: "Pull Intensity", focus: "Deadlifts, Rows, Biceps", isRest: false, groups: ["back", "arms", "core"] },
      { day: "Day 3", title: "Legs Intensity", focus: "Quads, Hamstrings, Calves", isRest: false, groups: ["legs", "legs", "core"] },
      { day: "Day 4", title: "Push Volume", focus: "Dumbbell work, flyes, lateral delts", isRest: false, groups: ["chest", "shoulders", "arms"] },
      { day: "Day 5", title: "Pull Volume", focus: "Lat pulldowns, curls, face pulls", isRest: false, groups: ["back", "arms", "core"] },
      { day: "Day 6", title: "Legs Volume & Core", focus: "Split squats, Romanian deadlifts, Abs", isRest: false, groups: ["legs", "legs", "core"] },
      { day: "Day 7", title: "Absolute Rest & Restoration", focus: "Zero heavy physical strain", isRest: true }
    ];
  }

  // Populate exercises inside workout days
  return splitPlan.map((d, index) => {
    if (d.isRest) return d;

    const exercises = [];
    const usedNames = new Set();

    d.groups.forEach(group => {
      const candidates = EXERCISE_DATABASE[group] || [];
      // Filter by equipment compatibility
      const matched = candidates.filter(ex => {
        if (equip === "gym") return true;
        if (equip === "dumbbells") return ex.equip === "dumbbells" || ex.equip === "bodyweight";
        if (equip === "bodyweight") return ex.equip === "bodyweight";
        if (equip === "bands") return ex.equip === "bands" || ex.equip === "bodyweight";
        return true;
      });

      // Pick 1-2 exercises per group
      const pickList = matched.length > 0 ? matched : candidates;
      for (const item of pickList) {
        if (!usedNames.has(item.name) && exercises.length < 6) {
          usedNames.add(item.name);
          exercises.push({
            name: item.name,
            muscle: group,
            sets: setScheme,
            reps: repScheme,
            restSec: restScheme,
            rpe: rpe,
            cue: item.cue,
            completed: false
          });
          break;
        }
      }
    });

    return {
      ...d,
      exercises
    };
  });
}

// Meal Blueprint Construction
function buildMealBlueprint(dietKey, targetCalories, proteinTarget, carbTarget, fatTarget) {
  const template = MEAL_TEMPLATES[dietKey] || MEAL_TEMPLATES.high_protein;

  // Scale meals proportionally to match the user's specific targets
  const ratio = targetCalories / 2400;

  return [
    {
      label: "Meal 1: Breakfast",
      title: template.breakfast.title,
      desc: template.breakfast.desc,
      p: Math.round(template.breakfast.p * ratio),
      c: Math.round(template.breakfast.c * ratio),
      f: Math.round(template.breakfast.f * ratio),
      calories: Math.round((template.breakfast.p * 4 + template.breakfast.c * 4 + template.breakfast.f * 9) * ratio)
    },
    {
      label: "Meal 2: Lunch",
      title: template.lunch.title,
      desc: template.lunch.desc,
      p: Math.round(template.lunch.p * ratio),
      c: Math.round(template.lunch.c * ratio),
      f: Math.round(template.lunch.f * ratio),
      calories: Math.round((template.lunch.p * 4 + template.lunch.c * 4 + template.lunch.f * 9) * ratio)
    },
    {
      label: "Meal 3: Pre-Workout Fuel",
      title: template.preworkout.title,
      desc: template.preworkout.desc,
      p: Math.round(template.preworkout.p * ratio),
      c: Math.round(template.preworkout.c * ratio),
      f: Math.round(template.preworkout.f * ratio),
      calories: Math.round((template.preworkout.p * 4 + template.preworkout.c * 4 + template.preworkout.f * 9) * ratio)
    },
    {
      label: "Meal 4: Post-Workout Dinner",
      title: template.dinner.title,
      desc: template.dinner.desc,
      p: Math.round(template.dinner.p * ratio),
      c: Math.round(template.dinner.c * ratio),
      f: Math.round(template.dinner.f * ratio),
      calories: Math.round((template.dinner.p * 4 + template.dinner.c * 4 + template.dinner.f * 9) * ratio)
    }
  ];
}

// Coach Rules & Directives
function generateCoachDirectives(data) {
  return {
    overloadRules: [
      "Rule of 2: Once you can complete the upper rep limit for all assigned sets with clean form, add 2.5kg (5 lbs) next session.",
      "Tempo Control: Prioritize a 2-second eccentric (lowering) phase to maximize mechanical muscle tension.",
      "Deload Cadence: Take an active recovery deload every 6th week by cutting working set volume by 40%."
    ],
    supplements: [
      "Creatine Monohydrate: 5g daily taken consistently with water or post-workout meal.",
      "Whey or Plant Protein Isolate: 25-30g post-training to trigger muscle protein synthesis (MPS).",
      "Electrolytes & Sodium: Add 500mg pink salt + citrus to intra-workout water for sustained pump and hydration.",
      "Omega-3 Fatty Acids: 2,000mg EPA/DHA daily to mitigate joint inflammation."
    ],
    recovery: [
      "Target 7.5 to 8.5 hours of uninterrupted sleep in a 65-68°F (18-20°C) cool, dark room.",
      "Daily non-exercise physical activity (NEAT): Aim for 8,000 to 10,000 steps daily.",
      "Pre-bed blue light reduction: Cease screen exposure 45 minutes prior to sleep."
    ]
  };
}

// ==========================================
// 7. RESULTS RENDERING ENGINE
// ==========================================

function renderProtocol(p) {
  const container = document.getElementById("resultsSection");
  if (!container) return;

  // Show container
  container.classList.add("active");

  // Persona & Header
  document.getElementById("resPersonaTag").textContent = p.meta.persona;
  document.getElementById("resTitle").textContent = `${p.meta.data.daysPerWeek}-Day Neural Optimization Matrix`;
  document.getElementById("resSubtitle").textContent = `Engineered for ${p.meta.data.goal.toUpperCase()} • ${p.meta.data.experience.toUpperCase()} • Generated ${p.meta.generatedAt}`;

  // Metric Tiles
  document.getElementById("resCalories").textContent = p.metrics.calories.toLocaleString();
  document.getElementById("resProtein").textContent = `${p.metrics.protein}g`;
  document.getElementById("resCarbs").textContent = `${p.metrics.carbs}g`;
  document.getElementById("resFats").textContent = `${p.metrics.fats}g`;
  document.getElementById("resWater").textContent = `${p.metrics.water}L`;
  document.getElementById("resTDEE").textContent = `${p.metrics.tdee} kcal`;

  // Macro Bar Percentages
  const totalMacroCal = (p.metrics.protein * 4) + (p.metrics.carbs * 4) + (p.metrics.fats * 9);
  const pPct = Math.round(((p.metrics.protein * 4) / totalMacroCal) * 100);
  const cPct = Math.round(((p.metrics.carbs * 4) / totalMacroCal) * 100);
  const fPct = 100 - (pPct + cPct);

  document.getElementById("macroBarProtein").style.width = `${pPct}%`;
  document.getElementById("macroBarCarbs").style.width = `${cPct}%`;
  document.getElementById("macroBarFats").style.width = `${fPct}%`;

  document.getElementById("macroPctProtein").textContent = `${pPct}% (${p.metrics.protein}g)`;
  document.getElementById("macroPctCarbs").textContent = `${cPct}% (${p.metrics.carbs}g)`;
  document.getElementById("macroPctFats").textContent = `${fPct}% (${p.metrics.fats}g)`;

  // Render Day Tabs
  renderRoutineTabs(p.weeklySplit);

  // Render Meals
  renderMealBlueprint(p.meals);

  // Render Coach Directives
  renderCoachDirectives(p.coachDirectives);
}

function renderRoutineTabs(split) {
  const tabsContainer = document.getElementById("routineTabsContainer");
  tabsContainer.innerHTML = "";

  split.forEach((day, index) => {
    const btn = document.createElement("button");
    btn.className = `routine-tab-btn ${index === 0 ? 'active' : ''}`;
    btn.innerHTML = `
      <span>${day.day}</span>
      <span class="tab-sub">${day.isRest ? 'Rest' : day.title.split(' ')[0]}</span>
    `;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".routine-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentWorkoutDay = index;
      renderWorkoutDay(split[index]);
      audioFX.playBeep(450, "sine", 0.05, 0.05);
    });

    tabsContainer.appendChild(btn);
  });

  // Render first day by default
  currentWorkoutDay = 0;
  renderWorkoutDay(split[0]);
}

function renderWorkoutDay(dayData) {
  const dayDisplay = document.getElementById("workoutDayContent");

  if (dayData.isRest) {
    dayDisplay.innerHTML = `
      <div class="rest-day-card">
        <div class="rest-icon">🧘‍♂️</div>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 0.5rem;">${dayData.title}</h3>
        <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto 1.5rem;">${dayData.focus}</p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <span class="pill-stat">🚶 8,000 - 10,000 Steps</span>
          <span class="pill-stat">💧 ${activeProtocol.metrics.water}L Hydration</span>
          <span class="pill-stat">💤 8+ Hours Sleep</span>
        </div>
      </div>
    `;
    return;
  }

  // Active workout day
  let exercisesHtml = "";
  dayData.exercises.forEach((ex, exIndex) => {
    exercisesHtml += `
      <div class="exercise-card ${ex.completed ? 'completed' : ''}" id="exCard-${exIndex}">
        <div class="exercise-number">0${exIndex + 1}</div>
        <div class="exercise-details">
          <div class="exercise-name-row">
            <span class="exercise-name">${ex.name}</span>
            <span class="muscle-badge ${ex.muscle}">${ex.muscle}</span>
          </div>
          <div class="exercise-specs">
            <span class="spec-item">Sets: <strong>${ex.sets}</strong></span>
            <span class="spec-item">Reps: <strong>${ex.reps}</strong></span>
            <span class="spec-item">Intensity: <strong>${ex.rpe}</strong></span>
          </div>
          <div class="exercise-cue">💡 ${ex.cue}</div>
        </div>
        <div class="exercise-actions">
          <button class="btn-timer-trigger" onclick="triggerRestTimer(${ex.restSec})">
            ⏱ Rest ${ex.restSec}s
          </button>
          <div class="custom-checkbox ${ex.completed ? 'checked' : ''}" onclick="toggleExerciseComplete(${currentWorkoutDay}, ${exIndex})">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>
      </div>
    `;
  });

  dayDisplay.innerHTML = `
    <div class="day-header-card">
      <div class="day-info">
        <h3>${dayData.day}: ${dayData.title} <span class="day-badge">${dayData.exercises.length} Movements</span></h3>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem;">Target Focus: ${dayData.focus}</p>
      </div>
      <div class="day-metrics-pills">
        <span class="pill-stat">🔥 Est. Burn: ~${activeProtocol.meta.data.sessionDuration * 7} kcal</span>
        <span class="pill-stat">⏱ Duration: ${activeProtocol.meta.data.sessionDuration} mins</span>
      </div>
    </div>
    <div class="exercise-list">
      ${exercisesHtml}
    </div>
  `;
}

// Global window actions
window.triggerRestTimer = function(seconds) {
  if (restTimer) restTimer.start(seconds);
};

window.toggleExerciseComplete = function(dayIndex, exerciseIndex) {
  if (!activeProtocol) return;
  const day = activeProtocol.weeklySplit[dayIndex];
  if (!day || !day.exercises[exerciseIndex]) return;

  const ex = day.exercises[exerciseIndex];
  ex.completed = !ex.completed;

  const card = document.getElementById(`exCard-${exerciseIndex}`);
  const checkbox = card?.querySelector(".custom-checkbox");

  if (card && checkbox) {
    card.classList.toggle("completed", ex.completed);
    checkbox.classList.toggle("checked", ex.completed);
  }

  if (ex.completed) {
    audioFX.playBeep(880, "sine", 0.12, 0.15);
    // Check if whole day is complete
    const allDone = day.exercises.every(e => e.completed);
    if (allDone) {
      showToast("🏆 Workout Day Complete! Superb dedication!");
      audioFX.playSuccessChime();
    }
  } else {
    audioFX.playBeep(350, "sine", 0.08, 0.1);
  }
};

function renderMealBlueprint(meals) {
  const container = document.getElementById("nutritionGrid");
  if (!container) return;
  container.innerHTML = "";

  meals.forEach(m => {
    const card = document.createElement("div");
    card.className = "meal-card";
    card.innerHTML = `
      <span class="meal-badge">${m.label}</span>
      <h4 class="meal-title">${m.title}</h4>
      <p class="meal-desc">${m.desc}</p>
      <div class="meal-macros">
        <span><strong>${m.calories}</strong> kcal</span>
        <span>P: <span class="meal-macro-val">${m.p}g</span></span>
        <span>C: <span class="meal-macro-val">${m.c}g</span></span>
        <span>F: <span class="meal-macro-val">${m.f}g</span></span>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderCoachDirectives(directives) {
  const overloadEl = document.getElementById("coachOverloadList");
  const suppsEl = document.getElementById("coachSupplementsList");

  if (overloadEl) {
    overloadEl.innerHTML = directives.overloadRules.map(rule => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${rule}</span>
      </li>
    `).join("");
  }

  if (suppsEl) {
    suppsEl.innerHTML = directives.supplements.map(supp => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span>${supp}</span>
      </li>
    `).join("");
  }
}

// Markdown Protocol Exporter
function copyMarkdownProtocol() {
  if (!activeProtocol) {
    showToast("No active protocol to copy!");
    return;
  }

  const p = activeProtocol;
  let md = `# AURA FIT AI - NEURAL ATHLETICS PROTOCOL\n`;
  md += `**Persona:** ${p.meta.persona}\n`;
  md += `**Date:** ${p.meta.generatedAt}\n\n`;

  md += `## 1. METABOLIC TARGETS\n`;
  md += `- **Daily Calories:** ${p.metrics.calories} kcal\n`;
  md += `- **Protein:** ${p.metrics.protein}g (${Math.round((p.metrics.protein*4/p.metrics.calories)*100)}%)\n`;
  md += `- **Carbohydrates:** ${p.metrics.carbs}g\n`;
  md += `- **Fats:** ${p.metrics.fats}g\n`;
  md += `- **Hydration:** ${p.metrics.water} Liters / Day\n\n`;

  md += `## 2. WEEKLY WORKOUT MATRIX\n`;
  p.weeklySplit.forEach(day => {
    md += `### ${day.day}: ${day.title} (${day.focus})\n`;
    if (day.isRest) {
      md += `*Active Recovery / Rest Day*\n\n`;
    } else {
      day.exercises.forEach((ex, i) => {
        md += `${i+1}. **${ex.name}** [${ex.muscle.toUpperCase()}] - ${ex.sets} sets x ${ex.reps} (Rest: ${ex.restSec}s) | Cue: ${ex.cue}\n`;
      });
      md += `\n`;
    }
  });

  md += `## 3. NUTRITION & MEAL BLUEPRINT\n`;
  p.meals.forEach(m => {
    md += `### ${m.label}: ${m.title}\n`;
    md += `${m.desc}\n`;
    md += `*${m.calories} kcal | Protein: ${m.p}g | Carbs: ${m.c}g | Fats: ${m.f}g*\n\n`;
  });

  md += `## 4. COACH OVERLOAD DIRECTIVES\n`;
  p.coachDirectives.overloadRules.forEach(r => md += `- ${r}\n`);
  md += `\n## 5. SUPPLEMENT PROTOCOL\n`;
  p.coachDirectives.supplements.forEach(s => md += `- ${s}\n`);

  navigator.clipboard.writeText(md).then(() => {
    showToast("✓ Full protocol copied to clipboard in clean Markdown!");
    audioFX.playSuccessChime();
  }).catch(() => {
    showToast("Unable to copy to clipboard.");
  });
}
