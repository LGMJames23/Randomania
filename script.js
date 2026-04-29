const screens = {
  home: document.getElementById("homeScreen"),
  account: document.getElementById("accountScreen"),
  trivia: document.getElementById("triviaScreen"),
  sports: document.getElementById("sportsScreen"),
  screen: document.getElementById("screenScreen"),
  quote: document.getElementById("quoteScreen"),
  number: document.getElementById("numberScreen"),
  dice: document.getElementById("diceScreen"),
  username: document.getElementById("usernameScreen"),
  coinflip: document.getElementById("coinflipScreen")
};

const triviaData = [
  {
    category: "NBA TEAMS",
    question: "Which team plays in Los Angeles?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/NBA_logo.svg",
    options: ["Lakers", "Heat", "Celtics", "Bulls"],
    answer: "Lakers"
  },
  {
    category: "COUNTRY FLAG",
    question: "Which country has this red circle flag?",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    options: ["Japan", "Bangladesh", "South Korea", "China"],
    answer: "Japan"
  },
  {
    category: "SPORTS",
    question: "How many players are on a soccer team on field?",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    category: "VIDEO GAMES",
    question: "Which game franchise features Master Chief?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Xbox_one_logo.svg",
    options: ["Halo", "Zelda", "Mario", "Fortnite"],
    answer: "Halo"
  },
  {
    category: "NFL TEAMS",
    question: "Which city do the Cowboys represent?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/NFL_shield.svg",
    options: ["Miami", "Dallas", "Seattle", "Boston"],
    answer: "Dallas"
  },
  {
    category: "MLB TEAMS",
    question: "Which team plays in the Bronx?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Major_League_Baseball_logo.svg",
    options: ["Mets", "Red Sox", "Yankees", "Dodgers"],
    answer: "Yankees"
  },
  {
    category: "CATS",
    question: "Which breed is known for no fur?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    options: ["Persian", "Sphynx", "Siamese", "Maine Coon"],
    answer: "Sphynx"
  },
  {
    category: "DOGS",
    question: "Which breed is famous for rescue mountain work?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg",
    options: ["Pug", "St. Bernard", "Chihuahua", "Beagle"],
    answer: "St. Bernard"
  },
  {
    category: "IVY LEAGUE",
    question: "Which Ivy school is in New Haven?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Ivy_League_logo.svg",
    options: ["Yale", "Columbia", "Harvard", "Princeton"],
    answer: "Yale"
  },
  {
    category: "COUNTRY FLAG",
    question: "Which country has a maple leaf on its flag?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    options: ["Austria", "Canada", "Switzerland", "Denmark"],
    answer: "Canada"
  },
  {
    category: "NBA TEAMS",
    question: "Which NBA team is based in Chicago?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/NBA_logo.svg",
    options: ["Bulls", "Spurs", "Nuggets", "Suns"],
    answer: "Bulls"
  },
  {
    category: "VIDEO GAMES",
    question: "Which game is set in the kingdom of Hyrule?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg",
    options: ["Minecraft", "Zelda", "Halo", "FIFA"],
    answer: "Zelda"
  },
  {
    category: "SPORTS",
    question: "How many points is a touchdown worth before extra point?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/NFL_shield.svg",
    options: ["3", "6", "7", "8"],
    answer: "6"
  },
  {
    category: "RANDOM FACT",
    question: "Which planet is known as the Red Planet?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    options: ["Venus", "Jupiter", "Mars", "Mercury"],
    answer: "Mars"
  },
  {
    category: "COUNTRY FLAG",
    question: "Which country has a green flag with a cedar tree?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
    options: ["Lebanon", "Pakistan", "Algeria", "Jordan"],
    answer: "Lebanon"
  },
  {
    category: "NFL TEAMS",
    question: "Which NFL team is known as the Cheeseheads?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/NFL_shield.svg",
    options: ["Packers", "Raiders", "Rams", "Texans"],
    answer: "Packers"
  },
  {
    category: "NBA TEAMS",
    question: "Which team is known as the Celtics?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/NBA_logo.svg",
    options: ["Boston", "Atlanta", "Memphis", "Utah"],
    answer: "Boston"
  },
  {
    category: "VIDEO GAMES",
    question: "In Minecraft, what do you mine to craft upgrade a diamond sword?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Minecraft_logo.svg",
    options: ["Diamond", "Gold", "Emerald", "Netherite"],
    answer: "Netherite"
  },
  {
    category: "SPORTS",
    question: "How many holes are in a full round of golf?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Golf_ball_2.jpg",
    options: ["9", "12", "18", "24"],
    answer: "18"
  },
  {
    category: "IVY LEAGUE",
    question: "Which Ivy League school is in Ithaca, New York?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Ivy_League_logo.svg",
    options: ["Cornell", "Brown", "Dartmouth", "Penn"],
    answer: "Cornell"
  },
  {
    category: "DOGS",
    question: "Which breed is commonly used in police K9 units?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg",
    options: ["German Shepherd", "Pomeranian", "Pug", "Shih Tzu"],
    answer: "German Shepherd"
  },
  {
    category: "CATS",
    question: "Which cat breed is known for folded ears?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    options: ["Scottish Fold", "Bengal", "Ragdoll", "Birman"],
    answer: "Scottish Fold"
  },
  {
    category: "MLB TEAMS",
    question: "Which MLB team is associated with Fenway Park?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Major_League_Baseball_logo.svg",
    options: ["Red Sox", "Cubs", "Astros", "Giants"],
    answer: "Red Sox"
  },
  {
    category: "VIDEO GAMES",
    question: "Which character is the mascot of Nintendo?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg",
    options: ["Mario", "Sonic", "Crash", "Pikachu"],
    answer: "Mario"
  },
  {
    category: "RANDOM FACT",
    question: "What is the largest ocean on Earth?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Map_of_the_Pacific_Ocean.jpg",
    options: ["Pacific", "Atlantic", "Indian", "Arctic"],
    answer: "Pacific"
  },
  {
    category: "COUNTRY FLAG",
    question: "Which country has a flag with a red maple leaf?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    options: ["Canada", "Austria", "Poland", "Peru"],
    answer: "Canada"
  },
  {
    category: "SPORTS",
    question: "How many players are on a baseball team on the field?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Major_League_Baseball_logo.svg",
    options: ["7", "8", "9", "10"],
    answer: "9"
  },
  {
    category: "NFL TEAMS",
    question: "Which team plays in Kansas City?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/NFL_shield.svg",
    options: ["Chiefs", "Chargers", "Bears", "Jets"],
    answer: "Chiefs"
  },
  {
    category: "NBA TEAMS",
    question: "Which NBA team is based in Miami?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/NBA_logo.svg",
    options: ["Heat", "Magic", "Hornets", "Pistons"],
    answer: "Heat"
  },
  {
    category: "RANDOM FACT",
    question: "What gas do plants absorb from the atmosphere?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Carbon_dioxide_3D_vdW.png",
    options: ["Carbon dioxide", "Oxygen", "Helium", "Nitrogen"],
    answer: "Carbon dioxide"
  },
  {
    category: "IVY LEAGUE",
    question: "Which Ivy school is located in Providence?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Ivy_League_logo.svg",
    options: ["Brown", "Harvard", "Yale", "Penn"],
    answer: "Brown"
  },
  {
    category: "MLB TEAMS",
    question: "Which team is known as the Dodgers?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Major_League_Baseball_logo.svg",
    options: ["Los Angeles", "Seattle", "Detroit", "Cleveland"],
    answer: "Los Angeles"
  },
  {
    category: "VIDEO GAMES",
    question: "Which game features building with blocks in Creative mode?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Minecraft_logo.svg",
    options: ["Minecraft", "Valorant", "Portal", "Overwatch"],
    answer: "Minecraft"
  },
  {
    category: "COUNTRY FLAG",
    question: "Which country has a flag with a red circle on white?",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    options: ["Japan", "Turkey", "Tunisia", "Indonesia"],
    answer: "Japan"
  }
];

let remainingTriviaIndices = [];

const sportsData = [
  {
    sport: "Basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
    fact: "Basketball was invented in 1891 with peach baskets."
  },
  {
    sport: "Soccer",
    image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&w=900&q=80",
    fact: "The first World Cup was held in 1930."
  },
  {
    sport: "Tennis",
    image: "https://images.unsplash.com/photo-1622279457486-28f5f6f3a4dc?auto=format&fit=crop&w=900&q=80",
    fact: "Tennis scoring includes the unusual point value 15."
  },
  {
    sport: "Kabaddi",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    fact: "Raiders must chant while tagging opponents and escaping."
  },
  {
    sport: "Curling",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
    fact: "Players sweep ice to control stone speed and curve."
  },
  {
    sport: "Sepak Takraw",
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=900&q=80",
    fact: "It mixes volleyball with soccer-like foot skills."
  },
  {
    sport: "Bossaball",
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=900&q=80",
    fact: "It is played on an inflatable court with trampolines."
  },
  {
    sport: "Underwater Hockey",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=900&q=80",
    fact: "Also called Octopush, it is played at the pool bottom."
  },
  {
    sport: "Chess Boxing",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=900&q=80",
    fact: "Competitors alternate rounds of chess and boxing."
  },
  {
    sport: "Bog Snorkeling",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=900&q=80",
    fact: "Racers swim trenches filled with peat bog water."
  },
  {
    sport: "Cheese Rolling",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=900&q=80",
    fact: "Participants sprint downhill after a rolling cheese wheel."
  },
  {
    sport: "Toe Wrestling",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80",
    fact: "Yes, it is arm wrestling but with toes."
  },
  {
    sport: "Quidditch (Muggle)",
    image: "https://images.unsplash.com/photo-1517649283771-47d0f3f8c5a4?auto=format&fit=crop&w=900&q=80",
    fact: "Players run with broomsticks between their legs."
  },
  {
    sport: "Shin Kicking",
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=900&q=80",
    fact: "A traditional contest where rivals target each other's shins."
  },
  {
    sport: "Extreme Ironing",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80",
    fact: "People iron clothes in extreme outdoor locations."
  },
  {
    sport: "Stone Skimming",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    fact: "World events score by total skips over water."
  },
  {
    sport: "Slamball",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=80",
    fact: "A basketball variant with wall-to-wall trampolines."
  },
  {
    sport: "Fierljeppen (Pole Vault Over Water)",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80",
    fact: "Athletes vault and climb poles to cross canals."
  },
  {
    sport: "Buzkashi",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=900&q=80",
    fact: "Horse riders battle for control of a heavy object."
  },
  {
    sport: "Pato",
    image: "https://images.unsplash.com/photo-1518991791750-7492dc8a4d1c?auto=format&fit=crop&w=900&q=80",
    fact: "Argentina's national sport blends polo and basketball."
  },
  {
    sport: "Jai Alai",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
    fact: "Its ball can exceed 180 mph in professional play."
  },
  {
    sport: "Canicross",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80",
    fact: "A runner is connected by a harness to a pulling dog."
  },
  {
    sport: "Octopush",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=900&q=80",
    fact: "Another name for underwater hockey."
  },
  {
    sport: "Wife Carrying",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    fact: "Winning prizes are sometimes based on partner weight."
  },
  {
    sport: "Axe Throwing",
    image: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=900&q=80",
    fact: "Leagues use scoring rings like darts."
  },
  {
    sport: "Bike Polo",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    fact: "Players strike a ball while riding bikes on hard courts."
  },
  {
    sport: "Footgolf",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=900&q=80",
    fact: "It combines soccer kicks with golf course holes."
  },
  {
    sport: "Sumo Wrestling",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Hoshoryu_Tomokatsu_202205.jpg",
    fact: "Hoshoryu is a top-ranked sumo wrestler known for speed and technique."
  },
  {
    sport: "Teqball",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Teqball_Table.jpg",
    fact: "Teqball combines soccer skills with a curved table."
  },
  {
    sport: "Roller Derby",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Roller_derby_bout.jpg",
    fact: "Roller derby is a high-speed contact sport played on skates."
  }
];

const iconSymbols = ["★", "♥", "●", "◆", "✦", "✪", "⬢", "⬡", "✿", "✺"];
const fallbackSportImage =
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";
const fallbackTriviaImage =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(list) {
  return list[rand(0, list.length - 1)];
}

function shuffled(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = rand(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function nextTriviaItem() {
  if (remainingTriviaIndices.length === 0) {
    remainingTriviaIndices = triviaData.map((_, idx) => idx);
    remainingTriviaIndices = shuffled(remainingTriviaIndices);
  }
  const nextIndex = remainingTriviaIndices.pop();
  return triviaData[nextIndex];
}

function showScreen(key) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[key].classList.add("active");
}

function randomizeTitle() {
  const fonts = [
    "Arial",
    "Georgia",
    "Palatino",
    "Arial Black",
    "Times New Roman",
    "Courier New",
    "Tahoma",
    "Trebuchet MS",
    "Verdana"
  ];
  const title = document.getElementById("title");
  title.style.color = `rgb(${rand(15, 225)},${rand(15, 225)},${rand(15, 225)})`;
  title.style.fontFamily = pick(fonts);
  title.style.fontSize = `${rand(32, 52)}px`;
}

function nextTriviaQuestion() {
  const item = nextTriviaItem();
  const options = shuffled(item.options);
  document.getElementById("triviaCategory").textContent = `${item.category}: ${item.question}`;
  setImageWithFallback(document.getElementById("triviaImage"), item.image, fallbackTriviaImage);
  document.getElementById("triviaResult").textContent = "";
  const buttons = [...document.querySelectorAll(".answer-btn")];
  buttons.forEach((btn, idx) => {
    btn.disabled = false;
    btn.textContent = options[idx];
    btn.onclick = () => {
      const correct = btn.textContent === item.answer;
      document.getElementById("triviaResult").textContent = correct ? "CORRECT!" : "TRY AGAIN!";
      buttons.forEach((b) => (b.disabled = true));
    };
  });
}

function generateSport() {
  const item = pick(sportsData);
  document.getElementById("sportName").textContent = item.sport;
  setImageWithFallback(
    document.getElementById("sportImage"),
    item.image,
    sportLabelImage(item.sport)
  );
  document.getElementById("sportFact").textContent = `Random fact: ${item.fact}`;
  const query = encodeURIComponent(`${item.sport} sport highlights`);
  document.getElementById("sportVideoLink").href = `https://www.youtube.com/results?search_query=${query}`;
}

function sportLabelImage(sportName) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#1d4ed8'/>
          <stop offset='100%' stop-color='#9333ea'/>
        </linearGradient>
      </defs>
      <rect width='640' height='360' fill='url(#g)'/>
      <text x='320' y='190' text-anchor='middle' font-size='38' font-family='Arial' fill='white'>${sportName}</text>
    </svg>`
  )}`;
}

function setImageWithFallback(imgEl, primarySrc, fallbackSrc) {
  imgEl.onerror = () => {
    imgEl.onerror = null;
    imgEl.src = fallbackSrc;
  };
  imgEl.src = primarySrc;
}

function generateIcons() {
  const box = document.getElementById("iconCanvas");
  box.innerHTML = "";
  box.style.background = `rgb(${rand(3, 252)},${rand(3, 252)},${rand(3, 252)})`;
  if (!document.getElementById("iconsToggle").checked) return;

  const width = box.clientWidth;
  const height = box.clientHeight;
  for (let i = 0; i < 25; i += 1) {
    const icon = document.createElement("span");
    icon.className = "icon";
    icon.textContent = pick(iconSymbols);
    icon.style.left = `${rand(10, Math.max(15, width - 30))}px`;
    icon.style.top = `${rand(10, Math.max(15, height - 30))}px`;
    icon.style.fontSize = `${rand(14, 42)}px`;
    icon.style.color = `rgba(${rand(1, 255)},${rand(1, 255)},${rand(1, 255)},${Math.random().toFixed(2)})`;
    box.appendChild(icon);
  }
}

function generateQuote() {
  const name = (document.getElementById("nameInput").value || "Friend").trim();
  const quoteType = document.getElementById("quoteType").value;
  let result = "";

  if (quoteType === "Motivational") {
    const firstWordList = ["You ", "They ", "You ", "You "];
    const secondWordList = ["Will ", "Should ", "Can "];
    const thirdWord = "Do ";
    const fourthWordList = ["Great ", "Good ", "Strong ", "Important ", "Smart "];
    const fifthWordList = ["Items!", "Things!", "Objects!", "Stuff!"];
    result = `${name},\n${pick(firstWordList)}${pick(secondWordList)}${thirdWord}${pick(fourthWordList)}${pick(fifthWordList)}`;
  } else if (quoteType === "Insult") {
    const firstWord = "You ";
    const secondWordList = ["Are ", "Smell Like ", "Look Like ", "Act Like ", "Can Be "];
    const thirdWordList = ["A Real ", "The ", "A "];
    const fourthWordList = ["Trash ", "Dumb ", "Stinky ", "Smelly ", "Crabby ", "Stupid "];
    const fifthWordList = ["Can!", "Person!", "Fish!", "Chud!", "Dork!"];
    result = `${name},\n${firstWord}${pick(secondWordList)}${pick(thirdWordList)}${pick(fourthWordList)}${pick(fifthWordList)}`;
  } else {
    const firstWordList = [
      "The World ",
      "The Government ",
      "The Human Race ",
      "Human Nature ",
      "Life ",
      "The Meaning Of Life "
    ];
    const secondWordList = ["Is ", "Is Like ", "Is Destined To Be ", "Is "];
    const thirdWordList = [
      "67",
      "A Simulation",
      "An Infinite Loop",
      "Mike Tyson",
      "The Fortnite Battlepass",
      "A Box Of Chocolates"
    ];
    result = `${pick(firstWordList)}${pick(secondWordList)}${pick(thirdWordList)}, ${name}!`;
  }
  document.getElementById("quoteOutput").textContent = result;
}

function generateNumber() {
  let low = Number(document.getElementById("lowInput").value);
  let high = Number(document.getElementById("highInput").value);
  if (!Number.isFinite(low)) low = 1;
  if (!Number.isFinite(high)) high = 100;
  if (low > high) [low, high] = [high, low];
  document.getElementById("numberOutput").textContent = String(rand(low, high));
}

function rollDice() {
  let count = Number(document.getElementById("diceCountInput").value);
  if (!Number.isFinite(count)) count = 1;
  count = Math.max(1, Math.min(10, Math.floor(count)));
  document.getElementById("diceCountInput").value = String(count);
  const rolls = [];
  for (let i = 0; i < count; i += 1) {
    rolls.push(rand(1, 6));
  }
  const total = rolls.reduce((sum, n) => sum + n, 0);
  document.getElementById("diceOutput").textContent = `Rolls: ${rolls.join(", ")} | Total: ${total}`;
  renderDice(rolls);
}

function dieFaceSvg(value) {
  const pipMap = {
    1: [[50, 50]],
    2: [[28, 28], [72, 72]],
    3: [[28, 28], [50, 50], [72, 72]],
    4: [[28, 28], [72, 28], [28, 72], [72, 72]],
    5: [[28, 28], [72, 28], [50, 50], [28, 72], [72, 72]],
    6: [[28, 28], [72, 28], [28, 50], [72, 50], [28, 72], [72, 72]]
  };
  const circles = pipMap[value]
    .map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="7" fill="#111827"/>`)
    .join("");
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <rect x='4' y='4' width='92' height='92' rx='14' fill='white' stroke='#cbd5e1' stroke-width='4'/>
      ${circles}
    </svg>`
  )}`;
}

function renderDice(rolls) {
  const wrap = document.getElementById("diceVisuals");
  wrap.innerHTML = "";
  rolls.forEach((value) => {
    const img = document.createElement("img");
    img.className = "die-img";
    img.alt = `Die showing ${value}`;
    img.src = dieFaceSvg(value);
    wrap.appendChild(img);
  });
}

function coinFaceSvg(side) {
  const isHeads = side === "Heads";
  const label = isHeads ? "H" : "T";
  const fill = isHeads ? "#f59e0b" : "#94a3b8";
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <circle cx='50' cy='50' r='46' fill='${fill}' stroke='#334155' stroke-width='4'/>
      <circle cx='50' cy='50' r='36' fill='none' stroke='#e2e8f0' stroke-width='3'/>
      <text x='50' y='62' text-anchor='middle' font-size='38' font-family='Arial' fill='#0f172a'>${label}</text>
    </svg>`
  )}`;
}

function renderCoinFlips(results) {
  const wrap = document.getElementById("coinflipVisuals");
  wrap.innerHTML = "";
  results.forEach((side) => {
    const img = document.createElement("img");
    img.className = "coin-img";
    img.alt = `Coin flip result: ${side}`;
    img.src = coinFaceSvg(side);
    wrap.appendChild(img);
  });
}

function generateUsername() {
  const firstParts = [
    "Neo", "Pixel", "Shadow", "Turbo", "Lucky", "Nova", "Frost", "Solar", "Echo", "Blaze"
  ];
  const secondParts = [
    "Rider", "Panda", "Ninja", "Falcon", "Wizard", "Comet", "Otter", "Drift", "Glitch", "Knight"
  ];
  const digitsCount = Number(document.getElementById("usernameDigitsSelect").value);
  let digits = "";
  for (let i = 0; i < digitsCount; i += 1) {
    digits += String(rand(0, 9));
  }
  const username = `${pick(firstParts)}${pick(secondParts)}${digits}`;
  document.getElementById("usernameOutput").textContent = username;
}

function flipCoin() {
  let count = Number(document.getElementById("coinflipCountInput").value);
  if (!Number.isFinite(count)) count = 1;
  count = Math.max(1, Math.min(10, Math.floor(count)));
  document.getElementById("coinflipCountInput").value = String(count);

  const results = [];
  for (let i = 0; i < count; i += 1) {
    results.push(rand(0, 1) === 0 ? "Heads" : "Tails");
  }
  const heads = results.filter((side) => side === "Heads").length;
  const tails = results.length - heads;
  document.getElementById("coinflipOutput").textContent =
    `Results: ${results.join(", ")} | Heads: ${heads} | Tails: ${tails}`;
  renderCoinFlips(results);
}

document.querySelectorAll("[data-screen]").forEach((btn) => {
  btn.addEventListener("click", () => {
    showScreen(btn.dataset.screen);
    randomizeTitle();
    if (btn.dataset.screen === "trivia") nextTriviaQuestion();
  });
});

document.getElementById("randomScreenBtn").addEventListener("click", () => {
  const keys = ["account", "trivia", "sports", "screen", "quote", "number", "dice", "username", "coinflip"];
  const key = pick(keys);
  showScreen(key);
  randomizeTitle();
  if (key === "trivia") nextTriviaQuestion();
});

document.getElementById("nextTriviaBtn").addEventListener("click", nextTriviaQuestion);
document.getElementById("sportBtn").addEventListener("click", generateSport);
document.getElementById("genIconsBtn").addEventListener("click", generateIcons);
document.getElementById("iconsToggle").addEventListener("change", generateIcons);
document.getElementById("quoteBtn").addEventListener("click", generateQuote);
document.getElementById("numberBtn").addEventListener("click", generateNumber);
document.getElementById("diceBtn").addEventListener("click", rollDice);
document.getElementById("usernameBtn").addEventListener("click", generateUsername);
document.getElementById("coinflipBtn").addEventListener("click", flipCoin);

randomizeTitle();
showScreen("home");
generateSport();
generateIcons();
