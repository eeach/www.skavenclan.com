// Rune data with descriptions from original site
const runes = [
    { letter: 'A', hint: 'Vowels', name: 'A', image: 'a_rune.gif', desc: 'Single pyramid represents "A". Vowels are often omitted in informal writing.' },
    { letter: 'B', hint: 'Bell', name: 'Bell', image: 'b_rune.gif', desc: 'Bells have great significance in Skaven religion and magic. They are often fashioned to resonate at a precise pitch capable of focusing warp energy.' },
    { letter: 'C', hint: 'Council', name: 'Council', image: 'c_rune.gif', desc: 'This elaborate design is the symbol for the Council of Thirteen. It is also used to represent the capital letter "C".' },
    { letter: 'D', hint: 'Dwarf', name: 'Dwarf', image: 'd_rune.gif', desc: 'A double triangle facing left. This symbol was adopted from the Dwarven rune for the letter "D", following the fall of Karak Eight Peaks.' },
    { letter: 'E', hint: 'Vowels', name: 'E', image: 'e_rune.gif', desc: 'Double pyramid represents "E". Vowels are often omitted in informal writing.' },
    { letter: 'F', hint: 'Fellblade', name: 'Fellblade', image: 'f_rune.gif', desc: 'The symbol for the dreaded Fellblade. Used to commemorate the defeat of Nagash and to ward off Necromancers.' },
    { letter: 'G', hint: 'Grey Seer', name: 'Grey Seer', image: 'g_rune.gif', desc: 'These symbols represent Warlocks and Seers. A stem with two scratch marks is the basis for a Grey Seer\'s blazon.' },
    { letter: 'H', hint: 'Horned Rat', name: 'Horned Rat', image: 'h_rune.gif', desc: 'A diamond with horn-like extensions forms the symbol for the Horned Rat as well as the "H" sound.' },
    { letter: 'I', hint: 'Vowels', name: 'I', image: 'i_rune.gif', desc: 'Triple pyramid represents "I". Vowels are often omitted in informal writing.' },
    { letter: 'J', hint: 'Jezzail', name: 'Jezzail', image: 'j_rune.gif', desc: 'This symbol represents the machinations of Clan Skryre and all warpstone devices, particularly the Jezzail.' },
    { letter: 'K', hint: 'Skryre', name: 'Skryre', image: 'k_rune.gif', desc: 'The three-spoked pin-wheel has been adopted as the symbol for Clan Skryre. When used as a letter it has the sound of "K".' },
    { letter: 'L', hint: 'Warlord', name: 'Warlord', image: 'l_rune.gif', desc: 'A scratch mark leading into a solid line with a second gouge below it. This is the symbol of a Skaven Lord.' },
    { letter: 'M', hint: 'Moulder', name: 'Moulder', image: 'm_rune.gif', desc: 'A fist holding a whip. This is the symbol of Clan Moulder, often drawn as a simple series of lines forming a spiral.' },
    { letter: 'N', hint: 'Ninja', name: 'Eshin', image: 'n_rune.gif', desc: 'The runic symbol of Clan Eshin - the stylistic equivalent of the clan\'s "dagger in hand" glyph.' },
    { letter: 'O', hint: 'Vowels', name: 'O', image: 'o_rune.gif', desc: 'Single inverted pyramid represents "O". Vowels are often omitted in informal writing.' },
    { letter: 'P', hint: 'Pestilens', name: 'Pestilens', image: 'p_rune.gif', desc: 'A vertical line with a triangle on the top half, facing right. This simple symbol is used by Clan Pestilens.' },
    { letter: 'Q', hint: 'Mine!!', name: 'Queek', image: 'q_rune.gif', desc: 'Usually drawn on objects to denote ownership. From the Skaven word "queek", which loosely translates to "mine".' },
    { letter: 'R', hint: 'Plague', name: 'Red Pox', image: 'r_rune.gif', desc: 'Used to evoke the inevitable victory of the Children of the Horned Rat. First used by Clan Pestilens to mark cities infected with the "red pox".' },
    { letter: 'S', hint: 'Skaven', name: 'Skaven', image: 's_rune.gif', desc: 'By far the most common of all Skaven runes. Three over-lapping lines forming an inverted triangle. Its shape embodies the outline of both the Horned Rat and the Skaven face.' },
    { letter: 'T', hint: 'Home', name: 'Skavenblight', image: 't_rune.gif', desc: 'A solid line with two curved lines sloping down from its lower half, resembling a roof and walls or tower. Represents "Skavenblight".' },
    { letter: 'U', hint: 'Vowels', name: 'U', image: 'u_rune.gif', desc: 'Double inverted pyramid represents "U". Vowels are often omitted in informal writing.' },
    { letter: 'V', hint: 'Vermin', name: 'Vermin Lord', image: 'v_rune.gif', desc: 'A diamond with a single horn and stem. The symbol for the Vermin Lord, greater daemon of the Horned Rat.' },
    { letter: 'W', hint: 'Warpstone', name: 'Warpstone', image: 'w_rune.gif', desc: 'Two over-lapping lines crossing at 45 degree angles. Represents inter-locking tunnels surrounding the world in the never ending search for warpstone.' },
    { letter: 'X', hint: 'Mors', name: 'Clan Mors', image: 'x_rune.gif', desc: 'A crossed series of arrows pointing in all directions incorporating a Skaven "S" runic symbol. The mark of Clan Mors.' },
    { letter: 'Y', hint: 'Vowels', name: 'Y', image: 'y_rune.gif', desc: 'Triple inverted pyramid represents "Y". Vowels are often omitted in informal writing.' },
    { letter: 'Z', hint: 'Magic', name: 'ZZZZZZZot', image: 'z_rune.gif', desc: 'A horizontal line with zig-zagging lines descending from its lower half. The symbol for Skaven battle magic, particularly Warplightning.' },
    { letter: '🐀', hint: 'Special', name: 'Gathering of Clans', image: 'gathering.gif', desc: 'Three over-lapping lines forming an inverted triangle followed by a series of overlapping lines below it of descending size represents the joining together of two or more skaven clans for a common cause. Often found adorning the standards of mobs of Skaven of more than one clan, collectively known as Clanrats.' },
    { letter: '⚔️', hint: 'Special', name: 'Clan Rictus', image: 'rictus.gif', desc: 'This is the symbol of Clan Rictus of Crookback Mountain, the principle Skaven Clan in the Dark Lands. It is unknown what sound, if any, can be attributed to this Rune. Clan Rictus breeds a remarkably large number of black-furred warriors who in turn make up the bulk of the Skaven military elite known as Stormvermin.' }
];

// Populate rune cards
function populateRunes() {
    const grid = document.getElementById('rune-grid');
    runes.forEach(rune => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.onclick = function() {
            this.classList.toggle('locked');
        };

        const imageUrl = rune.image ? `rune/${rune.image}` : '';
        const imageTag = imageUrl ? `<img src="${imageUrl}" alt="${rune.name}">` : '';

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h4>${rune.letter}</h4>
                </div>
                <div class="flip-card-back">
                    ${imageTag}
                    <h5>"${rune.name}"</h5>
                    <p>${rune.desc}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Quick name generator data
const quickNameData = {
    prefixes: {
        mors: ['Queek', 'Gnaw', 'Visk', 'Kritt', 'Skratch', 'Gnash', 'Fang', 'Skar', 'Vrask'],
        skryre: ['Ikit', 'Throt', 'Skritt', 'Vask', 'Morsk', 'Ratch', 'Grizz', 'Sparkk'],
        eshin: ['Snikch', 'Shiwan', 'Veskit', 'Rassk', 'Sneek', 'Slynk', 'Shrik'],
        pestilens: ['Skrolk', 'Nurgl', 'Skrim', 'Poxitt', 'Festt', 'Rotsk', 'Plagge'],
        moulder: ['Throt', 'Ghorr', 'Skweel', 'Thresh', 'Claww', 'Flessh', 'Gorsk'],
        general: ['Skrit', 'Kratch', 'Skree', 'Vrisk', 'Thrik', 'Gritch', 'Snark']
    },
    suffixes: {
        mors: ['dwell', 'fang', 'claw', 'taker', 'slayer', 'render', 'ripper', 'biter'],
        skryre: ['claw', 'spark', 'gear', 'burn', 'scorch', 'blast', 'zap', 'shock'],
        eshin: ['shadow', 'stalk', 'tail', 'blade', 'silent', 'swift', 'scent', 'whisper'],
        pestilens: ['rot', 'pox', 'plague', 'bile', 'filth', 'sore', 'boil', 'fester'],
        moulder: ['flesh', 'beast', 'bone', 'hide', 'claw', 'fang', 'gore', 'mangle'],
        general: ['tail', 'tooth', 'fur', 'snout', 'ear', 'claw', 'scratch', 'bite']
    },
    titles: {
        clanrat: ['', '', 'the Sneaky', 'the Quick', 'the Coward'],
        stormvermin: ['Blackfur', 'the Elite', 'the Strong', 'the Brutal', 'Ironpaw'],
        chieftain: ['the Warlord', 'the Terrible', 'the Conqueror', 'the Mighty', 'Dreadfang'],
        warlock: ['the Engineer', 'Gearclaw', 'Sparkfur', 'the Inventor', 'Boommaster'],
        assassin: ['the Silent', 'Nightstalker', 'the Shadow', 'Deathmaster', 'the Swift'],
        plague: ['the Diseased', 'Plaguelord', 'the Unclean', 'Rotmaster', 'the Blessed'],
        'grey-seer': ['the Seer', 'Prophetsqueek', 'the Wise', 'the Oracle', 'Warpmaster']
    }
};

// D100 table data
const d100Prefixes = [
    { roll: "01-03", name: "Azh" }, { roll: "04-05", name: "Azar" }, { roll: "06-08", name: "Arr" },
    { roll: "09-10", name: "Baz" }, { roll: "11-12", name: "Bur" }, { roll: "13-15", name: "Critt" },
    { roll: "16-17", name: "Dur" }, { roll: "18-19", name: "Frik" }, { roll: "20-21", name: "Gaz" },
    { roll: "22-23", name: "Gnaw" }, { roll: "24", name: "Gesht" }, { roll: "25-26", name: "Gris" },
    { roll: "27-29", name: "Hask" }, { roll: "30-31", name: "Iki" }, { roll: "32-33", name: "Khak" },
    { roll: "34-35", name: "Krat" }, { roll: "36", name: "Kirki" }, { roll: "37-38", name: "Krits" },
    { roll: "39-40", name: "Malk" }, { roll: "41-43", name: "Mass" }, { roll: "44-45", name: "Mors" },
    { roll: "46-47", name: "Nurg" }, { roll: "48-49", name: "Pask" }, { roll: "50-51", name: "Praz" },
    { roll: "52-53", name: "Rass" }, { roll: "54-55", name: "Ratt" }, { roll: "56-57", name: "Rhi" },
    { roll: "58-60", name: "Rusi" }, { roll: "61-63", name: "Skirs" }, { roll: "64-66", name: "Skee" },
    { roll: "67-68", name: "Skleet" }, { roll: "69-70", name: "Skre" }, { roll: "71-72", name: "Skrit" },
    { roll: "73-74", name: "Snee" }, { roll: "75-77", name: "Than" }, { roll: "78-79", name: "Thro" },
    { roll: "80-81", name: "Thra" }, { roll: "82-84", name: "Tzar" }, { roll: "85-86", name: "Var" },
    { roll: "87-88", name: "Vas" }, { roll: "89-90", name: "Vels" }, { roll: "91-92", name: "Vrink" },
    { roll: "93-94", name: "Vermi" }, { roll: "95-96", name: "Vitt" }, { roll: "97-98", name: "Viskt" },
    { roll: "99-100", name: "Voss" }
];

const d100Suffixes = [
    { roll: "01-03", name: "ak" }, { roll: "04-05", name: "az" }, { roll: "06-08", name: "assik" },
    { roll: "09-10", name: "at" }, { roll: "11-12", name: "ck" }, { roll: "13-15", name: "cin" },
    { roll: "16-17", name: "drak" }, { roll: "18-19", name: "dwell" }, { roll: "20-21", name: "flem" },
    { roll: "22-24", name: "hakk" }, { roll: "25-26", name: "hisk" }, { roll: "27-29", name: "is" },
    { roll: "30-31", name: "iskikk" }, { roll: "32-33", name: "k" }, { roll: "34-36", name: "kin" },
    { roll: "37-38", name: "kis" }, { roll: "39-40", name: "kual" }, { roll: "41-43", name: "lik" },
    { roll: "44-45", name: "litch" }, { roll: "46-47", name: "matz" }, { roll: "48-49", name: "nagar" },
    { roll: "50-51", name: "naard" }, { roll: "52-53", name: "ner" }, { roll: "54-55", name: "neth" },
    { roll: "56-57", name: "nik" }, { roll: "58-60", name: "quee" }, { roll: "61-63", name: "quol" },
    { roll: "64-65", name: "r" }, { roll: "66-67", name: "rik" }, { roll: "68-69", name: "rin" },
    { roll: "70-71", name: "rit" }, { roll: "72-73", name: "risk" }, { roll: "74-75", name: "sch" },
    { roll: "76-77", name: "skabak" }, { roll: "78-79", name: "skik" }, { roll: "80-81", name: "skittar" },
    { roll: "82-84", name: "sisk" }, { roll: "85-86", name: "stisk" }, { roll: "87-88", name: "t" },
    { roll: "89-90", name: "tabak" }, { roll: "91-92", name: "tar" }, { roll: "93-94", name: "th" },
    { roll: "95-96", name: "zarr" }, { roll: "97-98", name: "zel" }, { roll: "99-00", name: "Special*" }
];

// Populate D100 tables
function populateTables() {
    const prefixTable = document.getElementById('prefix-table');
    const suffixTable = document.getElementById('suffix-table');

    d100Prefixes.forEach(p => {
        const row = prefixTable.insertRow();
        row.insertCell(0).textContent = p.roll;
        row.insertCell(1).textContent = p.name;
    });

    d100Suffixes.forEach(s => {
        const row = suffixTable.insertRow();
        row.insertCell(0).textContent = s.roll;
        row.insertCell(1).textContent = s.name;
    });
}

// Handle clan selection change
function handleClanChange() {
    const clan = document.getElementById('clan-select').value;
    const rankGroup = document.getElementById('rank-group');
    const rankSelect = document.getElementById('rank-select');
    const legacyNote = document.getElementById('legacy-note');

    if (clan === 'legacy') {
        rankGroup.style.opacity = '0.4';
        rankSelect.disabled = true;
        legacyNote.style.display = 'block';
    } else {
        rankGroup.style.opacity = '1';
        rankSelect.disabled = false;
        legacyNote.style.display = 'none';
    }
}

// Quick name generator
function generateQuickName() {
    const clan = document.getElementById('clan-select').value;

    // Use legacy d100 generator if selected
    if (clan === 'legacy') {
        generateD100Name();
        return;
    }

    const rank = document.getElementById('rank-select').value;

    const prefix = quickNameData.prefixes[clan][Math.floor(Math.random() * quickNameData.prefixes[clan].length)];
    const suffix = quickNameData.suffixes[clan][Math.floor(Math.random() * quickNameData.suffixes[clan].length)];
    const title = quickNameData.titles[rank][Math.floor(Math.random() * quickNameData.titles[rank].length)];

    let fullName = prefix + suffix;
    if (title) fullName += ' ' + title;

    document.getElementById('quick-name').textContent = fullName;
    document.getElementById('quick-result').style.display = 'flex';
}

// D100 name generator (used by both legacy mode and table tab)
function generateD100Name() {
    const prefixRoll = Math.floor(Math.random() * 100) + 1;
    let selectedPrefix = '';

    for (let p of d100Prefixes) {
        const [min, max] = p.roll.split('-').map(n => parseInt(n) || 100);
        if (prefixRoll >= min && prefixRoll <= max) {
            selectedPrefix = p.name;
            break;
        }
    }

    const suffixRoll = Math.floor(Math.random() * 100) + 1;
    let selectedSuffix = '';

    if (suffixRoll >= 99) {
        const d6 = Math.floor(Math.random() * 6) + 1;
        if (d6 <= 3) {
            selectedSuffix = '';
        } else {
            const suffix1Roll = Math.floor(Math.random() * 98) + 1;
            const suffix2Roll = Math.floor(Math.random() * 98) + 1;

            for (let s of d100Suffixes.slice(0, -1)) {
                const [min, max] = s.roll.split('-').map(n => parseInt(n) || 100);
                if (suffix1Roll >= min && suffix1Roll <= max) {
                    selectedSuffix = s.name;
                    break;
                }
            }

            for (let s of d100Suffixes.slice(0, -1)) {
                const [min, max] = s.roll.split('-').map(n => parseInt(n) || 100);
                if (suffix2Roll >= min && suffix2Roll <= max) {
                    selectedSuffix += s.name;
                    break;
                }
            }
        }
    } else {
        for (let s of d100Suffixes) {
            const [min, max] = s.roll.split('-').map(n => parseInt(n) || 100);
            if (suffixRoll >= min && suffixRoll <= max) {
                selectedSuffix = s.name;
                break;
            }
        }
    }

    const fullName = selectedPrefix + selectedSuffix;
    document.getElementById('quick-name').textContent = fullName;
    document.getElementById('quick-result').style.display = 'flex';
}

// Tab switching
function switchTab(tabName, event) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateRunes();
});
