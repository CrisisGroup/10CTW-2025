var config = {
  style: "mapbox://styles/daltonwb/cm4skd1ti000601qwf0ine02p",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Ten Conflicts to Watch in 2025</h1><p class="hedp">Donald Trump’s return to the White House adds more unpredictability to an already volatile world. Risks abound, but opportunities for deals may arise as well.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Comfort Ero and Richard Atwood<br /><strong>Visualizations & Design</strong>: Paul Franz, Claire Boccon-Gibod and Jorge Gutierrez Lucena <br /><strong>Support</strong>: Chris Toensing<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: "INTRO",
      alignment: "left",
      hidden: false,
      title: "Global Conflicts",
      image: "",
      description:
        "Donald Trump will inherit a world on edge when he returns to the U.S. presidency. Whether his policies will mean more war or deal-making is hard to foresee. Here are the International Crisis Group’s Ten Conflicts to Watch in 2025." + "<div class='spacer'></div>" + "<strong>Rotate the globe by clicking and dragging your pointer, or use the controls in the top right.</strong>" +
        "<div class='spacer'></div>" + "<strong>Or scroll down to continue. &#8595;</strong>",
      location: {
        center: [0, 0],
        zoom: 3,
        pitch: 0,
        bearing: 0,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
       
      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "SYRIA",
      alignment: "left",
      hidden: false,
      title: "Syria",
      image: "",
      description:
        "The murderous Assad regime is gone after 54 years in power. Syria has a chance to get back on its feet after its bloody civil war. But plenty could go wrong." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#syria" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [38.41918, 35.04736],
        zoom: 6.5,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [

      ],
    },
    {
      id: "SUDAN",
      alignment: "left",
      hidden: false,
      title: "Sudan",
      image: "",
      description:
        "The war in Sudan is killing, uprooting and starving more people than any other. If nothing is done, a violent fracture with reverberations throughout the region seems increasingly likely. Ending the conflict needs to be a higher priority for outside powers." +
        '<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#sudan" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [35.08351, 32.23019],
        zoom: 7.5,
        pitch: 0,
        bearing: 0,
        speed: 0.7,
        bbox: [
          [20.53717, 7.62920],
          [36.78160, 21.10942]
        ]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
       
      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "UKR",
      alignment: "left",
      hidden: false,
      title: "Ukraine and European Security",
      image: "",
      description:
        "Trump says he’ll end the Ukraine war through talks with Russian President Vladimir Putin. But a viable peace deal is hard to envision – and, no matter what happens, Europe faces an uncertain future caught between Moscow and an unpredictable Washington." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#ukraine" target="_blank">&#8594; [Read more]</a>',
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
        
      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "ISRPAL",
      alignment: "center",
      hidden: false,
      title: "Israel-Palestine",
      image: "",
      description:
        "Israel’s post-October 7 offensive, aimed at destroying Hamas, has laid waste to Gaza, with upwards of 45,000 known dead and thousands more missing. U.S. diplomatic failures have let the Israeli far right’s logic reign. It is far too plausible that the same happens in the West Bank and in the Israeli-Palestinian conflict writ large." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#israel" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [95.588857, 22.595168],
        zoom: 3,
        pitch: 0,
        bearing: 0,
        speed: 1,
        bbox: [
          [33.12414, 29.28568],
          [37.01931, 33.53993]
      ]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "IRAN",
      alignment: "left",
      hidden: false,
      title: "Iran vs. U.S. and Israel",
      image: "",
      description:
        "Following Israel’s hammering of Hizbollah in Lebanon, and the Assad regime’s fall in Syria, Iran looks more vulnerable than at any time in decades. U.S. and Israeli hawks see an opportunity to hit Iranian nuclear research sites or even topple the government. A better bet would be talks aimed at defining limits to Tehran’s nuclear program." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#iran" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-72.277873, 18.57867],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
        speed: 0.9,
        bbox: [
          [48.44556, 27.02211],
          [61.95628, 35.51153]
      ]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        
      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "HAITI",
      alignment: "left",
      hidden: false,
      title: "Haiti",
      image: "",
      description:
        "Many Haitians thought a new government and the Kenya-led security mission might be able to rein in the criminal gangs running rampant in the country. Those hopes are dashed. Haiti’s government is now calling for UN peacekeepers, an idea Trump seems unlikely to embrace, though he may think again once in office.  " + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#haiti" target="_blank">&#8594; [Read more]</a>',
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

      ],
      onChapterExit: [

      ],
    },
    {
      id: "MEXICO",
      alignment: "left",
      hidden: false,
      title: "U.S.-Mexico",
      image: "",
      description:
        "During the U.S. presidential campaign, Trump promised to slap high tariffs on Mexican goods and send back millions of migrants. He even hinted at bombing fentanyl labs in Mexico. These are all bad ideas that would tank relations between two interdependent neighbors." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#mexico" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-105.28159, 29.28666],
        zoom: 5,
        pitch: 36,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [

      ],
    },
    {
      id: "MYANMAR",
      alignment: "left",
      hidden: false,
      title: "Myanmar",
      image: "",
      description:
        "Midway through 2024, Myanmar’s military regime appeared to be teetering, with insurgents having taken control of many areas along the country’s borders. China has since thrown the junta a lifeline. But elections the regime plans for 2025 offer no vision for a better future and instead promise more bloodshed." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#myanmar" target="_blank">&#8594; [Read more]</a>',
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

      ],
      onChapterExit: [

      ],
    },
    {
      id: "KOREA",
      alignment: "left",
      hidden: false,
      title: "Korean Penninsula",
      image: "",
      description:
        "The year 2024 began with a surprising speech from Kim Jong-un, in which he dropped North Korea’s decades-old policy of peaceful unification with South Korea. It ended with Pyongyang ratifying a mutual defence pact with Moscow and, in Seoul, a botched coup attempt by President Yoon Suk-yeol. The peninsula is set for an edgy 2025." + '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#korea" target="_blank">&#8594; [Read more]</a>',
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

      ],
      onChapterExit: [

      ],
    },
    {
      id: "TAIWAN",
      alignment: "center",
      hidden: false,
      title: "China-U.S.",
      image: "",
      description:
        "Competition between the world’s two foremost powers continues to intensify. Tariffs, Taiwan and Chinese ambitions in the South China Sea are among the potential flashpoints with Trump entering office. Meanwhile, the U.S. president-elect’s dim view of alliances rattles Asia almost as much as it does Europe." + '<div class="spacer"></div>' + 
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2025#china" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [118.50520, 24.05881],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [],
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
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [

      ],
    },
  ],
};
