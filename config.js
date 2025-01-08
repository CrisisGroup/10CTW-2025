var config = {
  style: "mapbox://styles/daltonwb/cm5o0eub000d601pk8gyqd3db",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Ten Conflicts to Watch in 2025</h1><p class="hedp">Donald Trump’s return to the White House adds more unpredictability to an already volatile world. There are plenty of risks, but potentially also opportunities.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<strong>Lead contributors</strong>: Comfort Ero and Richard Atwood<br /><strong>Visualisations</strong>: Paul Franz, Claire Boccon-Gibod and Jorge Gutierrez Lucena <br /><strong>Support</strong>: Chris Toensing<br /><br /><a href="https://www.crisisgroup.org" target="_blank"><img class="footer-image" src="images/30yr.png" alt="30 years" /></a>',
  chapters: [
    {
      id: "INTRO",
      alignment: "center",
      hidden: false,
      title: "Global Conflicts",
      image: "",
      description:
        "In unsettled times, Donald Trump’s return to the White House looks set to shake things up further. Here are the International Crisis Group’s Ten Conflicts to Watch in 2025." + "<div class='spacer'></div>" + "<strong style='color: #b65d61;'>Rotate the globe by clicking and dragging your pointer, or use the controls in the top right.</strong>" +
        "<div class='spacer'></div>" + "<strong style='color: #b65d61;'>Or scroll down to continue. &#8595;</strong>",
      location: {
        center: [-80.14862, 30.91766],
        zoom: 3,
        pitch: 12,
        bearing: 21,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "CONFLICT_LABELS",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "road-draw-line",
          duration: 1,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "CONFLICT_LABELS",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "SYRIA",
      alignment: "left",
      hidden: false,
      title: "Syria",
      image: "",
      description:
        "The Assad regime is gone after 54 years in power. Syria has a chance to get back on its feet. But after years of bloody civil war, plenty could go wrong. For Syria’s new authorities, preventing disorder and allowing for an inclusive transition are priorities. Foreign powers should loosen sanctions that obstruct aid and investment." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#syria" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/syria.jpg" /><p class="photocaption">A man rides a motorbike with children holding up flags adopted by the new Syrian rulers, after Syria’s Bashar al-Assad was ousted, in Damascus, Syria. December 2024. REUTERS / Ammar Awad</p>',
      location: {
        center: [38.41918, 35.04736],
        zoom: 6.5,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
        {
          layer: "syr",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "syr_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "syr_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "damascus_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "damascus_dot",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "syr",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "syr_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "syr_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "damascus_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "damascus_dot",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "SUDAN",
      alignment: "left",
      hidden: false,
      title: "Sudan",
      image: "",
      description:
        "The war in Sudan is uprooting and starving more people than any other conflict today. If nothing is done, a violent fracture with reverberations throughout the region seems increasingly likely. Outside actors have fuelled the war. Now they need to put a higher priority on ending it." +
        '<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#sudan" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/sudan.jpg" /><p class="photocaption">People wait for food to be distributed at the Adré provisional reception site. Fleeing the war ravaging neighbouring Sudan, more than 930,000 people have taken refuge in eastern Chad since April 2023. Ouaddaï, Chad. March 2024. Crisis Group / Charles Bouessel. </p>',
      location: {
        center: [35.08351, 32.23019],
        zoom: 7.5,
        pitch: 0,
        bearing: 0,
        speed: 0.7,
        bbox: [
          [10.75962, 6.13743],
    [38.55168, 22.60774]
        ]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "refugee_data",
          duration: 2000,
          opacity: .7,
        },
        {
          layer: "refugee_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "khartoum_dot",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "khartoum_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sud_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "chad_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "chad",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "chad_label",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "refugee_data",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "refugee_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "khartoum_dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "khartoum_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sud_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "chad_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "chad",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "chad_label",
          duration: 2000,
          opacity: 1,
        },
      ],
    },
    {
      id: "UKR",
      alignment: "left",
      hidden: false,
      title: "Ukraine and European Security",
      image: "",
      description:
        "Trump says he’ll end the Ukraine war through negotiations with Russian President Vladimir Putin. Talks are worth trying but it is hard to see a path to a sustainable deal. Meanwhile, Putin may be tempted to test Trump’s commitment to European allies – creating new risks of confrontation and escalation." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#ukraine" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/ukraine.jpg" /><p class="photocaption">Ukrainian Armed Forces take part in a tactical medicine exercise, amid Russia’s attack on Ukraine, in Donetsk region, Ukraine. December 2024. Oleg Petrasiuk / Press Service of the 24th King Danylo Separate Mechanized Brigade of the Ukrainian Armed Forces / Handout via REUTERS</p>',
      location: {
        center: [30.99252, 51.17468],
        zoom: 5,
        pitch: 20,
        bearing: 0,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "kyiv_dot",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "kyiv_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "ukr_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "rus_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "ukraine_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "ukraine",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "russia_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "russia",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "kyiv_dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "kyiv_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "rus_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ukr_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ukraine_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ukraine",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "russia_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "russia",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "ISRPAL",
      alignment: "left",
      hidden: false,
      title: "Israel-Palestine",
      image: "",
      description:
        "Israel’s offensive on Gaza, launched in response to Hamas’ 7 October 2023 attack, has laid waste to the strip, with upward of 45,000 known dead and thousands more missing. A battle looms as well in the West Bank, which Israel may be poised to annex." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#israel" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/palestine.jpg" /><p class="photocaption">Palestinian inspect damage at the site of an Israeli strike on a house, amid the Israel-Hamas conflict, at the Nuseirat refugee camp in the central Gaza Strip. December, 2024. REUTERS / Ramadan Abed</p>',
      location: {
        center: [95.588857, 22.595168],
        zoom: 3,
        pitch: 0,
        bearing: 0,
        speed: 1,
        bbox: [
          [33.42164, 30.88622],
          [36.31639, 32.78341]
      ]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "palestine2",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "palestine",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "west_bank_areas",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "israel",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "ip_country_labels",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "palestine2",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "palestine",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "west_bank_areas",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "israel",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ip_country_labels",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "IRAN",
      alignment: "left",
      hidden: false,
      title: "Iran vs. U.S. and Israel",
      image: "",
      description:
        "Following Israel’s hammering of Hizbollah in Lebanon, and the Assad regime’s fall in Syria, Iran looks more vulnerable than at any time in decades. While U.S. and Israeli hawks push for strikes on Iranian nuclear facilities or even regime change, talks to limit Tehran’s nuclear program and support for proxies offer a better way forward." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#iran" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/iran.jpg" /><p class="photocaption">Iranian President Masoud Pezeshkian and military commanders watch as military equipment passes by during the annual military parade in Tehran, Iran. September 2024. Majid Asgaripour / WANA (West Asia News Agency) via REUTERS</p>',
      location: {
        center: [-72.277873, 18.57867],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
        speed: 0.9,
        bbox: [
          [39.16608, 21.62529],
          [69.09304, 41.48343]
      ]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "tehran_dot",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "tehran_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "iran_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "iran_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "iran",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tehran_dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "tehran_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "iran_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "iran_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "iran",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "HAITI",
      alignment: "left",
      hidden: false,
      title: "Haiti",
      image: "",
      description:
        "Many Haitians hoped a new government and a Kenya-led security mission could rein in the gangs wreaking havoc in their country. Those hopes have now faded. Haiti’s government is calling for UN peacekeepers though whether such a mission is feasible or would be effective is unclear." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#haiti" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/haiti.jpg" /><p class="photocaption">Members of the second contingent of Kenyan police disembark after arriving in the Caribbean country as part of a peacekeeping mission, in Port-au-Prince, Haiti. July 2024. REUTERS / Ralph Tedy Erol</p>',
      location: {
        center: [-73.33375, 18.98953],
        zoom: 7.5,
        pitch: 0,
        bearing: 0,
        speed: 0.8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "port-au-prince_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "port-au-prince_dot",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "Haiti",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "ayiti_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "ayiti",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Haiti",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ayiti_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ayiti",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "port-au-prince_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "port-au-prince_dot",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "MEXICO",
      alignment: "left",
      hidden: false,
      title: "U.S.-Mexico",
      image: "",
      description:
        "During his campaign, Trump promised to slap high tariffs on Mexican goods and deport millions of migrants. Within his Republican party, some suggest the U.S. should unilaterally bomb fentanyl labs in Mexico. Those policies would tank relations between the two countries, whose economies and security depend on cooperation." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#mexico" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/mexico.jpg" /><p class="photocaption">Republican presidential candidate and former U.S. President Donald Trump speaks with Texas Governor Greg Abbott during a visit at the U.S.-Mexico border at Eagle Pass, Texas, as seen from Piedras Negras, Mexico. February 2024. REUTERS / Go Nakamura</p>',
      location: {
        center: [-107.26147, 28.07947],
        zoom: 4,
        pitch: 10,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "roadDraw",
      onChapterEnter: [
        {
          layer: "us_mex_labels",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "US_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "US",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "us_mex_labels",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "US_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "US",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "MYANMAR",
      alignment: "left",
      hidden: false,
      title: "Myanmar",
      image: "",
      description:
        "Midway through 2024, Myanmar’s military regime appeared to be teetering, as rebels seized control of many areas along the country’s borders. China has since thrown the junta a lifeline. But elections planned for 2025 offer no vision for a better future and instead promise more bloodshed." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#myanmar" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/myanmar.jpg" /><p class="photocaption">A CNA soldier surveys the damage in a building in Thantlang town in September 2024. The neglected Chin State in Myanmar has been the site of fierce clashes between the military junta and local resistance groups. Crisis Group / Richard Horsey</p>',
      location: {
        center: [96.19656, 21.07645],
        zoom: 4.6,
        pitch: 0,
        bearing: 0,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "myanmar",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "myanmar_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "myanmar_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "Naypyidaw_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "Naypyidaw_dot",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "myanmar",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "myanmar_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "myanmar_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "Naypyidaw_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "Naypyidaw_dot",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "KOREA",
      alignment: "left",
      hidden: false,
      title: "Korean Peninsula",
      image: "",
      description:
        "2024 began with Kim Jong-un abandoning North Korea’s decades-old policy of peaceful unification with South Korea. It ended with Pyongyang ratifying a mutual defence pact with Moscow and President Yoon Suk-yeol attempting a coup in Seoul. Trump could make a new push on nuclear diplomacy, but negotiations would be tougher than during his first term. The peninsula is set for a difficult 2025." + '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#korea" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/korea.jpg" /><p class="photocaption">People watch a TV broadcasting a news report on North Korea firing missiles that flew 400km after lifting off at around 7:30am from Sariwon, just south of the capital Pyongyang, at a railway station in Seoul, South Korea. November 2024. REUTERS / Kim Hong-Ji</p>',
      location: {
        center: [126.09752, 37.75520],
        zoom: 5.5,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "kor_cty_labels",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "rok_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "rok",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "dprk_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "dprk",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "kor_capitals",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "kor_capitals_dots",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "kor_cty_labels",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "rok_border",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "rok",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "dprk_border",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "dprk",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "kor_capitals",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "kor_capitals_dots",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "TAIWAN",
      alignment: "left",
      hidden: false,
      title: "China-U.S.",
      image: "",
      description:
        "Competition between the world’s two major powers continues to intensify. Tariffs, Taiwan and Chinese ambitions in the South China Sea are among the potential flashpoints. Trump’s scepticism toward alliances unsettles Asia almost as much as it does Europe." + '<div class="spacer"></div>' + 
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#china" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + '<img src="images/china.jpg" /><p class="photocaption">Taiwanese navy Kuang Hua VI-class missile boats move within the harbour of Keelung, Taiwan. October 2024. REUTERS / Tyrone Siu</p>',
      location: {
        center: [113.41247, 13.11950],
        zoom: 4.5,
        pitch: 16,
        bearing: -70.40,
        speed: .7
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
        {
          layer: "scs_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "9dash",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "scs_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "9dash",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "OUTRO",
      alignment: "center",
      hidden: false,
      title: "Dive Deeper with Our Analysis",
      image: "",
      description:
        'These are Crisis Group’s ten conflicts to watch in 2025. <a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025" target="_blank">&#8594; Read the full article here.</a>',
      location: {
        center: [0, 0],
        zoom: 2,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "CONFLICT_LABELS",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "CONFLICT_LABELS",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
  ],
};
