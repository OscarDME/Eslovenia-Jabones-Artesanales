// lib/copy.js — Celotna vidna vsebina pristajalne strani.
// Vse besedilne spremembe se izvajajo tukaj. Komponente berejo samo iz tega objekta.

export const copy = {
  metadata: {
    title: "EkoZelinka — Ustvarjaj ročno izdelana mila in naravno kozmetiko doma",
    description:
      "Tečaj EkoZelinka za ročno izdelana mila in naravno kozmetiko: nauči se ustvarjati naravne izdelke zase in za svojo družino z več kot 27 vodniki, 500 recepti in 3 BREZPLAČNIMI bonusi. Doživljenjski dostop z 80 % popusta.",
    lang: "sl",
  },

  brand: {
    name: "EkoZelinka",
    tagline: "Zeliščna eko lepota",
  },

  hero: {
    banner: "TA PONUDBA + BREZPLAČNI BONUSI POTEČEJO ČEZ:",
    timerLabels: { days: "Dni", hours: "Ur", minutes: "Min", seconds: "Sek" },
    kicker: "Že več kot 2.586 ljudi ustvarja svoje izdelke doma",
    headlinePre: "STROKOVNJAKINJA ZA NARAVNO KOZMETIKO RAZKRIVA",
    headlineHighlight: "kako ustvariti dišeča mila,",
    headlinePost: "ki bodo tvojo kožo negovala že od prvega dne",
    supporting:
      "Popolno za vse, ki želijo TAKOJ začeti ustvarjati lastna naravna mila — brez kemije, brez nepotrebnih stroškov in s pravim veseljem.",
    cta: "Želim dostop zdaj 🧼",
    imageAlt: "Ženska z negovano in sijočo kožo zahvaljujoč naravni kozmetiki EkoZelinka",
    trustChips: [
      { icon: "⭐", text: "Več kot 2.586 tečajnic" },
      { icon: "🎁", text: "3 BREZPLAČNI bonusi" },
      { icon: "🛡️", text: "14 dni garancije" },
    ],
  },

  instructorIntro: {
    quote:
      "Ustvarila sem ta tečaj posebej zate – zate, ki rada ustvarjaš z lastnimi rokami in želiš skrbeti zase in za svoje najbližje na naraven način.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Sveže narejena ročno izdelana mila" },
      { image: "/carousel/soap-2.webp", alt: "Mila z marmornim učinkom" },
      { image: "/carousel/soap-3.webp", alt: "Milo z okrasnim zelenim valom" },
      { image: "/carousel/soap-4.webp", alt: "Naravno milo s sivko" },
      { image: "/carousel/soap-5.webp", alt: "Izbor ročno izdelanih mil" },
      { image: "/carousel/soap-6.webp", alt: "Detajli okrasnih mil" },
    ],
  },

  benefits: {
    headline:
      "...lahko začneš z MAJHNIM PRORAČUNOM in pridobiš te PREDNOSTI!",
    items: [
      { icon: "Leaf", text: "Uporabljaj samo naravne in varne sestavine." },
      { icon: "ShieldCheck", text: "Pozabi na suho kožo, draženje in alergije." },
      { icon: "Sparkles", text: "Ustvarjaj katero koli milo, ki si ga zamisliš." },
      { icon: "TrendingUp", text: "Spremeni ustvarjanje v pravo veselje doma." },
    ],
    checklist: [
      "Nič več ponesrečenih receptov",
      "Ni ti treba biti strokovnjakinja",
      "Brez urnikov in stresa",
    ],
    imageAlt: "Roke, ki držijo sveže narejena ročno izdelana mila",
  },

  trending: {
    kicker: "TREND ZA LETO 2026",
    headline:
      "v samo nekaj dneh se boš naučila ustvarjati moderna mila, s katerimi boš vse navdušila",
    imageAlt: "Ročno izdelana mila z modernim marmornim učinkom",
  },

  courseContent: {
    headline: "tukaj te bomo naučili čisto vsega",
    subheadline: "spoznaj celotno vsebino",
    sectionLabel: "v več kot 27 e-knjigah boš našla...",
    paragraphs: [
      {
        bold: "Dostop do celotnega znanja,",
        rest: " da boš lahko oblikovala, izdelovala in shranjevala naravna mila kot prava profesionalka.",
      },
      {
        bold: "Konec metode poskusov in napak:",
        rest:
          " sledi jasnemu in preizkušenemu vodniku s praktičnimi nasveti, ki ti prihranijo čas in živce.",
      },
    ],
  },

  megapack: {
    kicker: "MEGA PAKET",
    headline: "mega paket vključuje",
    items: [
      { bold: "Popoln vodnik korak za korakom —", rest: " od začetnice do napredne ravni" },
      { bold: "500 receptov", rest: " za čisto vsak tip kože" },
      { bold: "Ustvari svoja lastna", rest: " eterična olja" },
      { bold: "Nauči se izdelovati", rest: " naravna tekoča mila" },
    ],
    imageAlt: "Prikaz mega paketa za ročno izdelana mila EkoZelinka",
  },

  bonuses: {
    kicker: "BREZPLAČNI BONUSI",
    headline: "Če izkoristiš ponudbo danes, prejmeš 3 BREZPLAČNE bonuse!",
    subheadline: "Dodatni vodniki v digitalnem PDF formatu, pripravljeni za takojšen prenos.",
    badge: "BONUS #",
    freeLabel: "BREZPLAČNO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kozmetika za telo", desc: "Naravni recepti za maslo, losjone in pilinge za celovito nego telesa." },
      { image: "/bonuses/bonus-6.webp", title: "Kopalne soli", desc: "Sprostitev z domačimi aromatičnimi solmi in šumečimi kopalnimi bombami." },
      { image: "/bonuses/bonus-7.webp", title: "Trdi šampon", desc: "Zdravi lasje brez plastične embalaže in brez kemije." },
    ],
    footer: "Vsi bonusi so 100 % digitalni in na voljo v trenutku.",
  },

  features: {
    headline: "Vse, kar boš prejela",
    subheadline: "Poln dostop in gradiva za prenos (PDF).",
    items: [
      { icon: "Wifi", title: "100 % na spletu", desc: "Dostopaj do lekcij kadar koli želiš in od koder koli." },
      { icon: "FolderOpen", title: "Vsebina na Google Drive", desc: "Organizirano tako, da napreduješ brez kakršnih koli zapletov." },
      { icon: "Infinity", title: "Doživljenjski dostop", desc: "Uči se v svojem tempu in popolnoma brez omejitev." },
      { icon: "BookOpen", title: "E-knjige so tvoje", desc: "Prenesi jih ali jih beri na spletu brez časovne omejitve." },
      { icon: "Sparkles", title: "Praktično znanje", desc: "Vse, kar potrebuješ, da takoj izdelaš svoje prve izdelke." },
      { icon: "ShieldCheck", title: "14-dnevna garancija", desc: "Če ne boš zadovoljna, ti vrnemo 100 % denarja." },
    ],
  },

  primaryPricing: {
    discountBadge: "80 % POPUSTA",
    valuedAtLabel: "Redna cena programa je",
    regularPrice: "49,50 €",
    offerPrice: "9,90 €",
    cta: "ŽELIM SVOJ POPUST",
    payInfo: "Enkratno plačilo za doživljenjski dostop",
    imageAlt: "Prikaz programa EkoZelinka z ekskluzivnim popustom",
    socialImageAlt: "Posnetki zaslona resničnih sporočil zadovoljnih tečajnic",
  },

  socialProof: {
    headline: "NE ZAMUDI PRILOŽNOSTI!",
    subheadlinePre: "Več kot",
    countHighlight: "2.586 ljudi",
    subheadlinePost: "že uživa v svojih lastnih naravnih izdelkih doma!",
  },

  reviewScreenshots: {
    headline: "Resnična sporočila naših tečajnic",
    subheadline: "To so sporočila, ki jih dobivamo vsak dan.",
    onlineLabel: "na spletu",
    typingLabel: "piše…",
    items: [
      {
        name: "Kaja",
        timeLabel: "10:24",
        messages: [
          { text: "Naredila sem svoja prva mila po tvojem vodniku! 🌸" },
          { text: "Izpadla so čudovito, moja koža pa je super mehka ✨" },
          { text: "Kdaj boš dodala še kakšen recept?" },
        ],
      },
      {
        name: "Lara",
        timeLabel: "včeraj",
        messages: [
          { text: "Sinoči sem naredila sivkina mila za vso družino 💜" },
          { text: "Mami jih obožuje, pravi, da ima čisto drugačno kožo 🙌" },
          { text: "Resnično hvala za ta tečaj ❤️" },
        ],
      },
      {
        name: "Špela",
        timeLabel: "12:05",
        messages: [
          { text: "Začela sem pred dvema tednoma in imam že celo zbirko 💕" },
          { text: "Receptom je res zelo enostavno slediti" },
          { text: "In BREZPLAČNI bonusi so zlata vredni 🎁" },
        ],
      },
      {
        name: "Vesna",
        timeLabel: "danes",
        messages: [
          { text: "Živijo! Samo zahvaliti se ti hočem 🌿" },
          { text: "Naredila sem si trdi šampon in koža ni več suha" },
          { text: "Najlepša hvala, polepšala si mi dan 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Vsebina tečaja",
    subheadline: "Spustni meniji — poglej si vse, kar boš prejela.",
    courses: [
      {
        title: "Tečaj | Ročno izdelana mila",
        lessons: [
          "Mila EkoZelinka mod. 1",
          "Mila EkoZelinka mod. 2",
          "Izdelava mil mod. 1",
          "Izdelava mil mod. 2",
          "Osnovne tehnike",
          "Sestavine in postopki",
          "Neverjetne sestavine in njihove lastnosti",
        ],
      },
      {
        title: "Tečaj | 500 receptov za mila",
        lessons: [
          "E-knjiga (PDF) s 500 edinstvenimi recepti.",
          "Vodnik za pravilno prilagajanje sestavin.",
        ],
      },
      {
        title: "Tečaj | Ustvari svoja tekoča mila",
        lessons: [
          "Popoln vodnik za ustvarjanje lastnih glicerinskih tekočih mil korak za korakom.",
        ],
      },
      {
        title: "Tečaj | Ustvari svoja eterična olja",
        lessons: [
          "Popoln vodnik za ustvarjanje lastnih eteričnih olj korak za korakom.",
        ],
      },
      {
        title: "BREZPLAČEN BONUS | Naravna kozmetika",
        lessons: [
          "BREZPLAČEN BONUS — Kozmetika za telo",
          "BREZPLAČEN BONUS — Kopalne soli",
          "BREZPLAČEN BONUS — Trdi šampon",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80 % POPUSTA",
    plus: "+ 3 BREZPLAČNI bonusi",
    middle: "ob nakupu do",
    deadline: "14. DECEMBRA",
    or: "ali do zasedbe",
    slots: "26 MEST",
  },

  finalCta: {
    preHeadline: "TVOJ TRENUTEK JE ZDAJ",
    urgencyTop: "80 % POPUSTA",
    headline: "Vzemi DANES mega paket EkoZelinka z norim popustom",
    subUrgency:
      "Več kot 2.586 ljudi že ustvarja svoja lastna mila in kozmetiko doma. Danes si na vrsti ti.",
    bundleList: [
      "Popoln tečaj za ročno izdelana mila (4 moduli)",
      "500 edinstvenih receptov za vsak tip kože",
      "Tečaj za tekoča mila korak za korakom",
      "Tečaj za eterična olja",
      "BONUS — Kozmetika za telo",
      "BONUS — Kopalne soli",
      "BONUS — Trdi šampon",
      "Doživljenjski dostop (PDF/splet)",
    ],
    guaranteeText:
      "Popolna 14-dnevna garancija. Če ti tečaj ne bo všeč, ti vrnemo 100 % denarja popolnoma brez vprašanj.",
    guaranteeImageAlt: "Pečat za 14-dnevno garancijo",
    regularPriceLabel: "Prej",
    regularPrice: "49,50 €",
    offerPrice: "9,90 €",
    discountBadge: "80 % POPUSTA",
    urgencyText: "Enkratno plačilo za doživljenjski dostop",
    bottomUrgency: "Ta ponudba poteče, ko odštevalnik doseže ničlo.",
    button: "ŽELIM MEGA PAKET ZDAJ",
    trustRow: "100 % varno plačilo · Takojšen dostop · 14-dnevna garancija",
  },

  instructorBio: {
    name: "Urška Novak",
    title: "Strokovnjakinja za naravno kozmetiko",
    bio: "Živijo, sem Urška. Z naravno kozmetiko in izdelavo mil se ukvarjam že več kot 8 let. Kar se je začelo kot osebna potreba po negi kože brez agresivne kemije, je postalo moja največja strast... in sčasoma tudi moj način življenja. V preteklih letih sem razvila na desetine lastnih formul in pomagala mnogim ženskam, kot si ti, narediti prve korake v ta fascinanten svet ustvarjanja — narediti svoje prvo milo z domačimi sestavinami in odkriti veselje skrbi zase in za svoje najbližje na naraven način. Dobro vem, kako je začeti čisto iz ničle, brez izkušenj, s strahom pred napakami ali nevednostjo, kje sploh začeti. Zato v tem tečaju s tabo delim vse, kar sem se naučila – jasno, zelo praktično in povsem brez nepotrebnih zapletov.",
    imageAlt: "Urška Novak, strokovnjakinja za naravno kozmetiko in ročno izdelana mila",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ročno izdelana mila, ki jih je ustvarila Urška",
      "Delo v delavnici naravne kozmetike",
      "Končani naravni izdelki",
    ],
    yearsLabel: "Več kot 8 let",
    yearsText: "ustvarjanja naravne kozmetike",
    studentsLabel: "Več kot 2.586",
    studentsText: "zadovoljnih tečajnic",
  },

  testimonials: {
    headline: "Kaj pravijo tiste, ki so že opravile tečaj",
    subheadline: "Resnična mnenja naših tečajnic tečaja EkoZelinka.",
    productLabel: "EkoZelinka — Tečaj za ročno izdelana mila",
    reviewedLabel: "je napisala mnenje za",
    actions: { like: "Všeč mi je", comment: "Komentar", share: "Deli" },
    items: [
      {
        name: "Jana Vidmar",
        handle: "@jana_v",
        text: "Tečaj mi je bil zelo všeč. Vadila sem natančno tako, kot nas uči predavateljica, in v manj kot mesecu dni sem imela celo zbirko lastnih mil za vso družino. Koža mojih otrok se je opazno izboljšala, odkar uporabljamo samo moje domače naravne izdelke. Hvala za ta tečaj, res se splača.",
      },
      {
        name: "Maja Kovačič",
        handle: "",
        text: "Pred tednom dni sem končala tečaj in sem naravnost očarana. Naredila sem že svoja prva mila, preizkusili smo jih doma in vsi smo navdušeni. Koža je veliko mehkejša in bolj vlažena, dišave pa so neverjetne. Najlepša hvala za to priložnost. Vredno je vsakega centa.",
      },
      {
        name: "Suzana Zupan",
        handle: "",
        text: "Ta komentar puščam, ker sem tečaj opravila pred kratkim in odtlej nisem več kupila niti enega industrijskega mila. Vsa družina uporablja moje naravne izdelke in razlika za kožo je ogromna. Nikoli si nisem mislila, da lahko doma naredim tako kakovostne stvari. HVALA. Ta tečaj je izjemno dobra naložba.",
      },
      {
        name: "Dejan Horvat",
        handle: "@dejan_h",
        text: "Odlična vsebina, zelo jasno in profesionalno razloženo. Darilni bonusi... če jih imate možnost dobiti, to vsekakor storite. Zelo dragocene informacije. Bodite zdravi in najlepša hvala, ker nam posredujete to znanje.",
      },
    ],
    cta: "ŽELIM ZAČETI DANES",
  },

  closingProof: {
    headlinePre: "Naše tečajnice naredijo svoja prva mila",
    headlineHighlight: "že v prvem tednu",
    headlinePost: ". Kaj še čakaš?",
    ctaLabel: "ZAČNI DANES",
  },

  guarantee: {
    badgeLabel: "14 DNI GARANCIJE",
    headline: "BREZ SKRBI, MI PREVZEMAMO TVOJE TVEGANJE.",
    text: "Imela boš dva tedna časa, da preizkusiš tečaj, in če ti slučajno ne bo všeč ali ne bo izpolnil tvojih pričakovanj, ti vrnemo 100 % denarja.",
    badgeAlt: "Pečat za 14-dnevno garancijo EkoZelinka",
    certs: [
      { icon: "Award", label: "Preverjena kakovost" },
      { icon: "ShieldCheck", label: "100 % varno plačilo" },
      { icon: "Lock", label: "Zaščiteni podatki" },
      { icon: "BadgeCheck", label: "Zadovoljne tečajnice" },
    ],
  },

  faq: {
    headline: "Pogosto zastavljena vprašanja",
    subheadline: "Vse, kar moraš vedeti, preden začneš.",
    items: [
      {
        q: "Je plačilo varno?",
        a: "Da, plačilo poteka prek Hotmarta — ene najbolj varnih in priznanih digitalnih platform na svetu, ki deluje v več kot 160 državah in ima najsodobnejše varnostne certifikate. Tvoji plačilni podatki bodo popolnoma zaščiteni in so 100 % zaupni, kar ti zagotavlja popolnoma varen in zanesljiv nakup.",
      },
      {
        q: "Lahko opravljam tečaj, čeprav o tem ne vem še čisto ničesar?",
        a: "Seveda! Vse e-knjige so napisane zelo podrobno in v resnici potrebuješ samo željo po ustvarjanju. Celoten postopek je zelo preprost in skozi tečaj boš uporabljala zelo praktična orodja.",
      },
      {
        q: "Lahko dostopam do tečaja s katere koli naprave?",
        a: "Da, do tečaja lahko dostopaš s katere koli naprave! Ne glede na to, ali si na računalniku, tablici ali mobilnem telefonu, boš lahko uživala v vsebini, ne glede na tvoj operacijski sistem – Windows, macOS, iOS ali Android. Poleg tega imaš možnost, da si preneseš aplikacijo Hotmart, ki ti še olajša dostop preko telefona.",
      },
      {
        q: "Ali potrebujem veliko naložbo, da začnem?",
        a: "Ne! Naravna kozmetika zahteva zelo nizko začetno naložbo, mi pa te naučimo, kako uporabiti cenovno ugodne in dostopne materiale, da lahko začneš brez nepotrebnih stroškov.",
      },
      {
        q: "Kdaj se tečaj začne?",
        a: "Takoj, ko kupiš tečaj, prejmeš povezavo za dostop (in digitalne knjige v PDF formatu), ki ti omogoča takojšen vstop v platformo. Učiš se lahko, kadar koli želiš, dostop do gradiv pa ti ostane za vedno.",
      },
      {
        q: "Kaj točno vključuje tečaj?",
        a: "Tečaj vključuje doživljenjski dostop, e-knjige z navodili korak za korakom, vsa gradiva za prenos (PDF) in tehnično podporo.",
      },
      {
        q: "Kaj če mi tečaj ne bo ustrezal?",
        a: "Imaš polno 14-dnevno garancijo. Če zaradi kakršnega koli razloga ne boš zadovoljna, nam samo piši in vrnili ti bomo 100 % denarja, brez kakršnih koli vprašanj.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "To spletno mesto ni del spletnega mesta Facebook ali podjetja Facebook Inc. Prav tako to spletno mesto na noben način ni podprto ali sponzorirano s strani podjetja Facebook.",
    trademark: "FACEBOOK je registrirana blagovna znamka podjetja FACEBOOK, Inc.",
  },
};