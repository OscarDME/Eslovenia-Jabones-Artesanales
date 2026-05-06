// lib/copy.js — Celotna vidna vsebina pristajalne strani.
// Vse besedilne spremembe se izvajajo tukaj. Komponente berejo samo iz tega objekta.

export const copy = {
  metadata: {
    title: "EcoHerbal — Ustvarjaj ročno izdelana mila, ki se prodajajo sama",
    description:
      "Tečaj EcoHerbal za ročno izdelana mila in naravno kozmetiko: nauči se ustvarjati naravna mila z več kot 27 vodniki, 500 recepti in 8 BREZPLAČNIMI bonusi. Doživljenjski dostop z 80 % popusta.",
    lang: "sl",
  },

  brand: {
    name: "EcoHerbal",
    tagline: "Zeliščna eko lepota",
  },

  hero: {
    banner: "TA PONUDBA + BREZPLAČNI BONUSI POTEČE ČEZ:",
    timerLabels: { days: "Dni", hours: "Ur", minutes: "Min", seconds: "Sek" },
    kicker: "Že več kot 2.586 ljudi ustvarja svoje izdelke",
    headlinePre: "STROKOVNJAKINJA ZA KOZMETIKO RAZKRIVA",
    headlineHighlight: "kako ustvariti neustavljiva mila,",
    headlinePost: "ki tvojo kožo negujejo že od prvega dne",
    supporting:
      "Popolno za tiste, ki želijo začeti TAKOJ in ustvariti dodaten zaslužek z lastnimi naravnimi mili.",
    cta: "Želim dostop zdaj 🧼",
    imageAlt: "Ženska z negovano in sijočo kožo zahvaljujoč naravni kozmetiki EcoHerbal",
    trustChips: [
      { icon: "⭐", text: "Več kot 2.586 tečajnic" },
      { icon: "🎁", text: "8 BREZPLAČNIH bonusov" },
      { icon: "🛡️", text: "7 dni garancije" },
    ],
  },

  instructorIntro: {
    quote:
      "Ustvarila sem ekskluziven tečaj posebej zate – zate, ki rada ustvarjaš z lastnimi rokami in se želiš naučiti nečesa, kar ti lahko prinese stalen zaslužek.",
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
      { icon: "TrendingUp", text: "Spremeni svoj hobi v stalen in realen zaslužek." },
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
      "v samo nekaj dneh se boš naučila ustvarjati moderna mila, ki se prodajajo sama",
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
      { bold: "Popoln vodnik korak za korakom", rest: " od začetnice do profesionalke" },
      { bold: "500 receptov", rest: " za čisto vsak tip kože" },
      { bold: "Ustvari svoja lastna", rest: " eterična olja" },
      { bold: "Nauči se izdelovati", rest: " naravna tekoča mila" },
    ],
    imageAlt: "Prikaz mega paketa za ročno izdelana mila EcoHerbal",
  },

  bonuses: {
    kicker: "BREZPLAČNI BONUSI",
    headline: "Če izkoristiš ponudbo danes, prejmeš 8 BREZPLAČNIH bonusov!",
    subheadline: "27 vodnikov v digitalnem PDF formatu, pripravljenih za takojšen prenos.",
    badge: "BONUS #",
    freeLabel: "BREZPLAČNO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kozmetika za telo", desc: "Naravni recepti za celovito nego telesa." },
      { image: "/bonuses/bonus-2.webp", title: "Kozmetika za obraz", desc: "Kreme, serumi in toniki za sijočo kožo." },
      { image: "/bonuses/bonus-3.webp", title: "Naravni dezodorant", desc: "Nežne, a učinkovite formule brez kemije." },
      { image: "/bonuses/bonus-4.webp", title: "Trdna ustna voda", desc: "Poskrbi za zdravje svojih zob z naravnimi sestavinami." },
      { image: "/bonuses/bonus-5.webp", title: "Naravna zobna pasta", desc: "Globinsko čiščenje brez fluorida in sulfatov." },
      { image: "/bonuses/bonus-6.webp", title: "Kopalne soli", desc: "Sprostitev z domačimi aromatičnimi solmi." },
      { image: "/bonuses/bonus-7.webp", title: "Trdi šampon", desc: "Zdravi lasje brez nepotrebne plastične embalaže." },
      { image: "/bonuses/bonus-8.webp", title: "Ročno izdelane sveče", desc: "Popoln dodatni tečaj za ustvarjanje okrasnih sveč." },
    ],
    footer: "Vsi bonusi so 100 % digitalni in na voljo v trenutku.",
  },

  features: {
    headline: "Vse, kar boš prejela",
    subheadline: "Poln dostop, gradiva za prenos (PDF) in certifikat o udeležbi.",
    items: [
      { icon: "Wifi", title: "100 % na spletu", desc: "Dostopaj do lekcij kadar koli želiš in od koder koli." },
      { icon: "FolderOpen", title: "Vsebina na Google Drive", desc: "Organizirano tako, da napreduješ brez kakršnih koli zapletov." },
      { icon: "Infinity", title: "Doživljenjski dostop", desc: "Uči se v svojem tempu in popolnoma brez omejitev." },
      { icon: "BookOpen", title: "E-knjige so tvoje", desc: "Prenesi jih ali jih beri na spletu brez časovne omejitve." },
      { icon: "Award", title: "Certifikat o udeležbi", desc: "Potrdi svoje novo znanje z uradnim priznanjem." },
      { icon: "ShieldCheck", title: "7-dnevna garancija", desc: "Če ne boš zadovoljna, ti vrnemo 100 % denarja." },
    ],
  },

  primaryPricing: {
    discountBadge: "80 % POPUSTA",
    valuedAtLabel: "Redna cena programa je",
    regularPrice: "49,50 €",
    offerPrice: "9,90 €",
    cta: "ŽELIM SVOJ POPUST",
    payInfo: "Enkratno plačilo za doživljenjski dostop",
    imageAlt: "Prikaz programa EcoHerbal z ekskluzivnim popustom",
    socialImageAlt: "Posnetki zaslona resničnih sporočil zadovoljnih tečajnic",
  },

  socialProof: {
    headline: "NE ZAMUDI PRILOŽNOSTI!",
    subheadlinePre: "Več kot",
    countHighlight: "2.586 ljudi",
    subheadlinePost: "že uživa v svojih lastnih kozmetičnih izdelkih!",
  },

  reviewScreenshots: {
    headline: "Resnična sporočila naših tečajnic",
    subheadline: "To so sporočila, ki jih vsak dan dobivamo na WhatsApp.",
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
          { text: "V soboto sem na sejmu prodala 12 mil 😱" },
          { text: "Ljudje so bili čisto navdušeni, nisem mogla verjeti 🙌" },
          { text: "Resnično hvala za ta tečaj ❤️" },
        ],
      },
      {
        name: "Špela",
        timeLabel: "12:05",
        messages: [
          { text: "Začela sem pred dvema tednoma in imam že svojo znamko 💕" },
          { text: "Receptom je res zelo enostavno slediti" },
          { text: "In BREZPLAČNI bonusi so zlata vredi 🎁" },
        ],
      },
      {
        name: "Vesna",
        timeLabel: "danes",
        messages: [
          { text: "Živijo! Samo povedati sem ti hotela, da sem ravnokar zaključila prodajo" },
          { text: "10 mil za eno eko trgovinico 🌿" },
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
          "Mila EcoHerbal mod. 1",
          "Mila EcoHerbal mod. 2",
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
        title: "BREZPLAČEN BONUS | Tečaj ročno izdelanih sveč",
        lessons: [
          "Izdelava sveč 1",
          "Izdelava sveč 2",
          "Sveče iz čebeljega voska",
          "Sveče iz sojinega voska",
          "Okraševanje sveč",
          "Vodnik za ročno izdelane sveče",
          "Dodatek: Lava svetilke",
        ],
      },
      {
        title: "BREZPLAČEN BONUS | Naravna kozmetika",
        lessons: [
          "BREZPLAČEN BONUS Kozmetika za telo",
          "BREZPLAČEN BONUS Kozmetika za obraz",
          "BREZPLAČEN BONUS Dezodorant",
          "BREZPLAČEN BONUS Trdna ustna voda",
          "BREZPLAČEN BONUS Zobna pasta",
          "BREZPLAČEN BONUS Kopalne soli",
          "BREZPLAČEN BONUS Trdi šampon",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80 % POPUSTA",
    plus: "+ 8 BREZPLAČNIH bonusov",
    middle: "ob nakupu do",
    deadline: "14. DECEMBRA",
    or: "ali do zasedbe",
    slots: "26 MEST",
  },

  finalCta: {
    preHeadline: "TVOJ TRENUTEK JE ZDAJ",
    urgencyTop: "80 % POPUSTA",
    headline: "Vzemi DANES mega paket EcoHerbal z norim popustom",
    subUrgency:
      "Več kot 2.586 ljudi že ustvarja svoja lastna mila in kozmetiko. Danes si na vrsti ti.",
    bundleList: [
      "Popoln tečaj za ročno izdelana mila (4 moduli)",
      "500 edinstvenih receptov za vsak tip kože",
      "Tečaj za tekoča mila korak za korakom",
      "Tečaj za eterična olja",
      "BONUS — Popoln tečaj za ročno izdelane sveče",
      "BONUS — 7 vodnikov za naravno kozmetiko",
      "Doživljenjski dostop (PDF/splet) + Certifikat o udeležbi",
    ],
    guaranteeText:
      "Popolna 7-dnevna garancija. Če ti tečaj ne bo všeč, ti vrnemo 100 % denarja popolnoma brez vprašanj.",
    guaranteeImageAlt: "Pečat za 7-dnevno garancijo",
    regularPriceLabel: "Prej",
    regularPrice: "49,50 €",
    offerPrice: "9,90 €",
    discountBadge: "80 % POPUSTA",
    urgencyText: "Enkratno plačilo za doživljenjski dostop",
    bottomUrgency: "Ta ponudba poteče, ko odštevalnik doseže ničlo.",
    button: "ŽELIM MEGA PAKET ZDAJ",
    trustRow: "100 % varno plačilo · Takojšen dostop · 7-dnevna garancija",
  },

  instructorBio: {
    name: "Urška Novak",
    title: "Strokovnjakinja za naravno kozmetiko",
    bio: "Živijo, sem Urška. Z naravno kozmetiko in izdelavo mil se ukvarjam že več kot 8 let. Kar se je začelo kot osebna potreba po negi kože brez agresivne kemije, je postalo moja največja strast... in sčasoma tudi moj način življenja. V preteklih letih sem razvila na desetine lastnih formul in pomagala mnogim ženskam, kot si ti, narediti prve korake v ta fascinanten svet ustvarjanja. Od tega, da naredijo svoje prvo milo z domačimi sestavinami, do tega, da to čudovito umetnost spremenijo v donosen in trajnosten posel. Dobro vem, kako je začeti čisto iz ničle, brez izkušenj, s strahom pred napakami ali nevednostjo, kje sploh začeti. Zato v tem tečaju s tabo delim vse, kar sem se naučila – jasno, zelo praktično in povsem brez nepotrebnih zapletov.",
    imageAlt: "Urška Novak, strokovnjakinja za naravno kozmetiko in ročno izdelana mila",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ročno izdelana mila, ki jih je ustvarila Urška",
      "Delo v delavnici naravne kozmetike",
      "Končani izdelki, pripravljeni za prodajo",
    ],
    yearsLabel: "Več kot 8 let",
    yearsText: "ustvarjanja naravne kozmetike",
    studentsLabel: "Več kot 2.586",
    studentsText: "zadovoljnih tečajnic",
  },

  testimonials: {
    headline: "Poleg tega boš lahko zahtevala svoj certifikat",
    subheadline: "Poglej, kaj pravijo tiste, ki so že opravile tečaj EcoHerbal.",
    productLabel: "EcoHerbal — Tečaj za ročno izdelana mila",
    reviewedLabel: "je napisala mnenje za",
    actions: { like: "Všeč mi je", comment: "Komentar", share: "Deli" },
    items: [
      {
        name: "Jana Vidmar",
        handle: "@jana_v",
        text: "Tečaj mi je bil zelo všeč. Vadila sem natančno tako, kot nas uči predavateljica, in v manj kot mesecu dni mi je uspelo odpreti svoj posel ter ustvariti prve prodaje. Zdaj delam vedno več mil in celo razmišljam o odprtju svoje trgovinice. Hvala za ta tečaj, res se splača.",
      },
      {
        name: "Maja Kovačič",
        handle: "",
        text: "Pred tednom dni sem končala tečaj in sem naravnost očarana. Naredila sem že svoja prva mila, preizkusili smo jih doma in vsi smo navdušeni. Zdaj pripravljam vse potrebno, da jih začnem prodajati, natanko tako, kot so nas učili. Kar nekaj prijateljev od prijateljev že želi kupiti pri meni. Najlepša hvala za to priložnost. Vredno je vsakega centa.",
      },
      {
        name: "Suzana Zupan",
        handle: "",
        text: "Ta komentar puščam, ker sem tečaj opravila pred kratkim in takoj zatem začela razvijati svoj posel. Iskreno, stvari so se zelo dobro obnesle, včeraj pa sem sklenila dogovor z eno znamko, da bodo začeli prodajati nekaj mojih izdelkov. Nikoli si nisem mislila, da bo prišlo do tega, zato HVALA. Ta tečaj je izjemno dobra naložba.",
      },
      {
        name: "Dejan Horvat",
        handle: "@dejan_h",
        text: "Odlična vsebina, zelo jasno in profesionalno razloženo. Darilni bonusi... če jih imate možnost dobiti, to vsekakor storite. Zelo dragocene informacije. Bodite zdravi in najlepša hvala, ker nam posredujete to znanje za zagon posla.",
      },
    ],
    cta: "ŽELIM ZAČETI DANES",
  },

  closingProof: {
    headlinePre: "Naše tečajnice ustvarijo svoje prve izdelke v",
    headlineHighlight: "manj kot 3 dneh",
    headlinePost: ". Kaj še čakaš?",
    ctaLabel: "ZAČNI DANES",
  },

  guarantee: {
    badgeLabel: "7 DNI GARANCIJE",
    headline: "BREZ SKRBI, MI PREVZEMAMO TVOJE TVEGANJE.",
    text: "Imela boš en teden časa, da preizkusiš tečaj, in če ti slučajno ne bo všeč ali ne bo izpolnil tvojih pričakovanj, ti vrnemo 100 % denarja.",
    badgeAlt: "Pečat za 7-dnevno garancijo EcoHerbal",
    certs: [
      { icon: "Award", label: "Uradni certifikat" },
      { icon: "ShieldCheck", label: "100 % varno plačilo" },
      { icon: "Lock", label: "Zaščiteni podatki" },
      { icon: "BadgeCheck", label: "Preverjena kakovost" },
    ],
  },

  faq: {
    headline: "Pogosto zastavljena vprašanja",
    subheadline: "Vse, kar moraš vedeti, preden začneš.",
    items: [
      {
        q: "Je plačilo varno?",
        a: "Da, plačilo poteka prek Hotmarta, ene najbolj varnih in priznanih digitalnih platform na svetu, ki deluje v več kot 160 državah in ima najsodobnejše varnostne certifikate. Tvoji plačilni podatki bodo popolnoma zaščiteni in so 100 % zaupni, kar ti zagotavlja popolnoma varen in zanesljiv nakup.",
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
        q: "Je začetek drag?",
        a: "Ne! Naravna kozmetika zahteva zelo nizko začetno naložbo, mi pa te naučimo, kako uporabiti cenovno ugodne in dostopne materiale, da lahko začneš brez nepotrebnih stroškov.",
      },
      {
        q: "Kdaj se tečaj začne?",
        a: "Takoj, ko kupiš tečaj, prejmeš povezavo za dostop (in digitalne knjige v PDF formatu), ki ti omogoča takojšen vstop v platformo. Učiš se lahko, kadar koli želiš, dostop do gradiv pa ti ostane za vedno.",
      },
      {
        q: "Kaj točno vključuje tečaj?",
        a: "Tečaj vključuje doživljenjski dostop, e-knjige z navodili korak za korakom, vsa gradiva za prenos (PDF), tehnično podporo in uradni certifikat ob zaključku.",
      },
      {
        q: "Ali izdate certifikat?",
        a: "Seveda, ko končaš, nam samo piši na e-mail s prošnjo in z veseljem ti bomo poslali tvoj certifikat.",
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