// City dataset: 36 cities, one per country.
// Clue tiers: easy may name country/currency/language; medium avoids country & city names; hard also avoids the main landmark.
export const CITIES = [
  {
    "id": "cairo",
    "name": "Cairo",
    "country": "Egypt",
    "lat": 30.04,
    "lon": 31.24,
    "continent": "Africa",
    "currency": "Egyptian pounds",
    "language": "Arabic",
    "food": "koshari",
    "landmark": "the Pyramids of Giza",
    "spots": [
      "Cairo International Airport",
      "National Bank of Egypt",
      "Egyptian Museum of Antiquities"
    ],
    "flag": "red, white and black horizontal stripes with a golden eagle",
    "clues": {
      "easy": [
        "They were changing money into Egyptian pounds.",
        "They asked for a good plate of koshari — said they'd be in Egypt's capital by morning.",
        "They said they had a date with the Pyramids of Giza.",
        "They wanted an Arabic phrasebook and a map of Egypt, fast."
      ],
      "medium": [
        "They asked me which river flows north past the old Citadel — and whether the boats run at night.",
        "They wanted to see the Sphinx before sunrise, before the tour buses came.",
        "Their luggage tag had a flag: red, white and black stripes with a golden eagle in the middle.",
        "They kept talking about felucca sailboats and a bazaar called Khan el-Khalili."
      ],
      "hard": [
        "They kept muttering about a lighthouse that was once one of the Seven Wonders, in a port up the coast.",
        "They were reading about a boy king whose tomb Howard Carter opened in 1922.",
        "They asked about a canal opened in 1869 that links the Mediterranean to the Red Sea.",
        "They wanted to visit a university founded in 970 CE — one of the oldest still teaching."
      ]
    },
    "poster": {
      "sky": [
        "#f2a65a",
        "#7a3b2e"
      ],
      "sun": "#ffe08a",
      "ground": "#c98b4a",
      "accent": "#1f4e5f",
      "motif": "pyramids"
    },
    "facts": {
      "capitalOf": "Egypt",
      "continent": "Africa",
      "timeZone": "EET (UTC+2)",
      "founded": "~969 CE",
      "climate": "Hot desert; mild winters",
      "summary": "Egypt's capital sits where the Nile fans into its delta. The largest city in the Arab world, Cairo has been a center of trade, scholarship, and political power for over a thousand years.",
      "history": "Founded in 969 CE by the Fatimid dynasty as a walled royal city, Cairo grew over centuries into a sprawling metropolis. The nearby Pyramids of Giza, however, predate the city by millennia — they were built around 2500 BCE during Egypt's Old Kingdom and were already ancient when Caesar visited.",
      "culture": "Al-Azhar University, founded in 970 CE, is one of the oldest continuously operating universities on Earth. The Khan el-Khalili souk has been a major bazaar since the 14th century."
    },
    "coords": {
      "x": 58,
      "y": 38
    },
    "image": "img:vE"
  },
  {
    "id": "tokyo",
    "name": "Tokyo",
    "country": "Japan",
    "lat": 35.68,
    "lon": 139.69,
    "continent": "Asia",
    "currency": "Japanese yen",
    "language": "Japanese",
    "food": "sushi",
    "landmark": "Mount Fuji",
    "spots": [
      "Narita International Airport",
      "Bank of Japan",
      "Imperial Palace Library"
    ],
    "flag": "white with a red disc in the center",
    "clues": {
      "easy": [
        "They were paying for everything in Japanese yen.",
        "They were practicing a few phrases in Japanese on the train platform.",
        "They asked how to get a clear view of Mount Fuji from the capital of Japan.",
        "They bragged they'd eat sushi at the source, in Japan's capital."
      ],
      "medium": [
        "Their bag had a patch: a plain white field with a single red disc.",
        "They wanted tickets to a sumo tournament and a seat on the bullet train.",
        "They asked when the cherry blossoms peak — they wanted to picnic under the sakura.",
        "They wanted to walk the giant scramble crossing at Shibuya in the neon rain."
      ],
      "hard": [
        "They said the city used to be called Edo, back when the shoguns ruled.",
        "They were reading a thousand-year-old novel by Lady Murasaki, The Tale of Genji.",
        "They kept talking about the 1964 Summer Olympics — the first ever held in Asia.",
        "They said the Meiji emperor moved his court here from Kyoto in 1868."
      ]
    },
    "poster": {
      "sky": [
        "#f7c6c7",
        "#3b2a5a"
      ],
      "sun": "#e8433a",
      "ground": "#2f3e5c",
      "accent": "#f4f1e8",
      "motif": "mountains"
    },
    "facts": {
      "capitalOf": "Japan",
      "continent": "Asia",
      "timeZone": "JST (UTC+9)",
      "founded": "~1457 CE (as Edo)",
      "climate": "Humid subtropical",
      "summary": "Japan's capital began as a fishing village called Edo and grew into one of the world's largest urban regions. It became Tokyo (\"Eastern Capital\") in 1868 when the emperor moved here from Kyoto.",
      "history": "Edo Castle was built in 1457 by Ōta Dōkan. Under the Tokugawa shogunate (1603-1868), Edo became the de-facto seat of power, growing to over a million residents by the 18th century. The Meiji Restoration moved the imperial capital here in 1868.",
      "culture": "Mount Fuji rises 100 km southwest. Sensō-ji, the city's oldest Buddhist temple, dates to 645 CE. Sushi as we know it was largely codified in 19th-century Edo."
    },
    "coords": {
      "x": 90,
      "y": 34
    },
    "image": "img:_E"
  },
  {
    "id": "paris",
    "name": "Paris",
    "country": "France",
    "lat": 48.86,
    "lon": 2.35,
    "continent": "Europe",
    "currency": "euros",
    "language": "French",
    "food": "croissants",
    "landmark": "the Eiffel Tower",
    "spots": [
      "Charles de Gaulle Airport",
      "Banque de France",
      "The Louvre"
    ],
    "flag": "blue, white and red vertical stripes",
    "clues": {
      "easy": [
        "They said they were heading to France to see the Eiffel Tower.",
        "They practiced ordering croissants in French — said they'd be in France's capital soon.",
        "They were paying in euros and asking the way to the Eiffel Tower.",
        "They wanted to see the Mona Lisa at the Louvre in France."
      ],
      "medium": [
        "Their scarf was striped blue, white and red, top to bottom.",
        "They asked where the great cycling race finishes each July on the Champs-Élysées.",
        "They wanted to climb the iron tower built for the 1889 World's Fair.",
        "They planned to walk along the Seine and see Notre-Dame's rebuilt spire."
      ],
      "hard": [
        "They wanted to see a painting that a museum handyman stole in 1911.",
        "They were researching a Roman town called Lutetia, built on an island in a river.",
        "They mentioned a fortress-prison stormed by a mob on July 14, 1789.",
        "They said the city's 20 districts spiral outward clockwise like a snail shell."
      ]
    },
    "poster": {
      "sky": [
        "#f5d6a8",
        "#4a5d8c"
      ],
      "sun": "#ffefb0",
      "ground": "#3a3550",
      "accent": "#c8443c",
      "motif": "lattice_tower"
    },
    "facts": {
      "capitalOf": "France",
      "continent": "Europe",
      "timeZone": "CET (UTC+1)",
      "founded": "~3rd century BCE",
      "climate": "Oceanic; mild and wet",
      "summary": "France's capital, on the river Seine. Paris has been a major European center since Roman times, when it was a Celtic settlement called Lutetia.",
      "history": "The Romans called the original settlement Lutetia. The name 'Paris' comes from the Parisii tribe. The Eiffel Tower was built in 1889 for the World's Fair and was meant to be temporary. The Louvre was once a royal palace before becoming a museum during the French Revolution.",
      "culture": "The Louvre houses the Mona Lisa, which was famously stolen in 1911 and recovered in 1913. Paris has 20 arrondissements arranged in a clockwise spiral. The Catacombs hold the bones of over six million people."
    },
    "coords": {
      "x": 52,
      "y": 25
    },
    "image": "img:$E"
  },
  {
    "id": "rio",
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "lat": -22.91,
    "lon": -43.17,
    "continent": "South America",
    "currency": "Brazilian reais",
    "language": "Portuguese",
    "food": "feijoada",
    "landmark": "Christ the Redeemer",
    "spots": [
      "Galeão Airport",
      "Banco do Brasil",
      "Christ the Redeemer Lookout"
    ],
    "flag": "green with a yellow diamond and a blue starry globe",
    "clues": {
      "easy": [
        "They were swapping cash for Brazilian reais.",
        "They spoke Portuguese and wanted to see Christ the Redeemer in Brazil.",
        "They asked for a plate of feijoada, the black-bean stew of Brazil.",
        "They said they'd be in Brazil for Carnival, in the country's old capital."
      ],
      "medium": [
        "Their flag pin was green with a yellow diamond and a starry blue globe.",
        "They wanted a cable car ride up Sugarloaf Mountain at sunset.",
        "They wanted to dance samba at the biggest Carnival on Earth.",
        "They asked about Copacabana Beach and a match at the Maracanã stadium."
      ],
      "hard": [
        "They said the city is named for a river that turned out to be a bay, sighted one January.",
        "They mentioned a European royal family that fled Napoleon and ruled an empire from here in 1808.",
        "They said it was the national capital until 1960, when a brand-new planned city took over.",
        "They kept humming The Girl from Ipanema, by Tom Jobim and Vinícius de Moraes."
      ]
    },
    "poster": {
      "sky": [
        "#ffb36b",
        "#1e6f7a"
      ],
      "sun": "#ffe66d",
      "ground": "#2e7d4f",
      "accent": "#f2f2e9",
      "motif": "statue"
    },
    "facts": {
      "capitalOf": null,
      "continent": "South America",
      "timeZone": "BRT (UTC-3)",
      "founded": "1565 CE",
      "climate": "Tropical; warm year-round",
      "summary": "Rio de Janeiro means 'River of January' — Portuguese explorers misidentified Guanabara Bay as a river when they arrived on January 1, 1502. It was Brazil's capital from 1763 to 1960.",
      "history": "Rio served as the capital of the Portuguese empire (1808-1821) when the royal family fled Napoleon's invasion of Portugal. It remained Brazil's capital until 1960, when Brasília was built. The Christ the Redeemer statue was completed in 1931.",
      "culture": "Carnival, held before Lent, is the largest in the world. The samba originated here in the early 20th century in Rio's Afro-Brazilian neighborhoods. Sugarloaf Mountain rises 396m above the harbor."
    },
    "coords": {
      "x": 38,
      "y": 60
    },
    "image": "img:ap"
  },
  {
    "id": "sydney",
    "name": "Sydney",
    "country": "Australia",
    "lat": -33.87,
    "lon": 151.21,
    "continent": "Oceania",
    "currency": "Australian dollars",
    "language": "English",
    "food": "meat pies",
    "landmark": "the Opera House",
    "spots": [
      "Sydney Kingsford Airport",
      "Reserve Bank of Australia",
      "Sydney Opera House"
    ],
    "flag": "blue with the Union Jack, a large seven-pointed star and the Southern Cross",
    "clues": {
      "easy": [
        "They were paying in Australian dollars.",
        "They said they'd catch a show at the Opera House in Australia's biggest city.",
        "They wanted a meat pie by the harbour — said Australia was calling.",
        "They asked for the way to Australia's largest city — not the capital, they said."
      ],
      "medium": [
        "Their patch: blue with a Union Jack, a big seven-pointed star and the Southern Cross.",
        "They wanted to climb the arch of the harbour bridge locals call the Coathanger.",
        "They asked about surfing at Bondi Beach and seeing koalas.",
        "They wanted a spot for the New Year's Eve fireworks over the harbour and its white sails."
      ],
      "hard": [
        "They said the First Fleet of convict ships dropped anchor in the cove there in January 1788.",
        "They mentioned a Danish architect, Jørn Utzon, whose famous design took 14 years to build.",
        "They talked about the Gadigal people of the Eora Nation, the land's traditional custodians.",
        "They mentioned the Summer Olympics held there in the year 2000."
      ]
    },
    "poster": {
      "sky": [
        "#7fd1e8",
        "#1d3c6e"
      ],
      "sun": "#ffd166",
      "ground": "#164b6b",
      "accent": "#f7f3e8",
      "motif": "sails"
    },
    "facts": {
      "capitalOf": null,
      "continent": "Oceania",
      "timeZone": "AEST (UTC+10)",
      "founded": "1788 CE",
      "climate": "Humid subtropical; warm summers",
      "summary": "Australia's largest city was founded as a British penal colony in 1788. It is not the capital — Canberra is — but Sydney is the country's economic and cultural center.",
      "history": "The First Fleet of British convict transports arrived at Sydney Cove on January 26, 1788. The Sydney Opera House was completed in 1973 after a 14-year construction notorious for its overruns. The Sydney Harbour Bridge opened in 1932.",
      "culture": "The Gadigal people of the Eora Nation are the traditional custodians of the land Sydney sits on. The Bondi to Coogee coastal walk is one of the world's great urban walks."
    },
    "coords": {
      "x": 90,
      "y": 68
    },
    "image": "img:ep"
  },
  {
    "id": "moscow",
    "name": "Moscow",
    "country": "Russia",
    "lat": 55.76,
    "lon": 37.62,
    "continent": "Europe",
    "currency": "Russian rubles",
    "language": "Russian",
    "food": "borscht",
    "landmark": "Red Square",
    "spots": [
      "Sheremetyevo Airport",
      "Central Bank of Russia",
      "Bolshoi Theatre"
    ],
    "flag": "white, blue and red horizontal stripes",
    "clues": {
      "easy": [
        "They were counting out a stack of Russian rubles.",
        "They were practicing Russian and talking about Red Square.",
        "They ordered borscht and asked for a train to Russia's capital.",
        "They wanted tickets for the ballet at the Bolshoi Theatre in Russia."
      ],
      "medium": [
        "Their flag had three horizontal stripes: white on top, then blue, then red.",
        "They wanted to see the candy-colored onion domes of St. Basil's Cathedral.",
        "They asked about a metro with chandeliers and marble stations, opened in 1935.",
        "They were headed for the red-walled fortress called the Kremlin."
      ],
      "hard": [
        "They mentioned a chronicle that first named the town in 1147, under Prince Yuri Dolgorukiy.",
        "They said Napoleon marched in during 1812 only to find the city burning.",
        "They wanted to see the mausoleum where Lenin has lain embalmed since 1924.",
        "They told a legend about Ivan the Terrible blinding an architect so he could never build again."
      ]
    },
    "poster": {
      "sky": [
        "#c9d6ea",
        "#3a2f5b"
      ],
      "sun": "#f6c453",
      "ground": "#e8e4dc",
      "accent": "#b8323a",
      "motif": "onion_domes"
    },
    "facts": {
      "capitalOf": "Russia",
      "continent": "Europe / Asia",
      "timeZone": "MSK (UTC+3)",
      "founded": "1147 CE",
      "climate": "Humid continental; long cold winters",
      "summary": "Russia's capital and largest city, sitting on the Moskva River. Moscow became the capital of Muscovy in the 14th century and the capital of the Russian Empire, briefly displaced by St. Petersburg from 1712-1918.",
      "history": "First mentioned in chronicles in 1147 CE. The Kremlin (which means 'fortress') was built starting in the 12th century. St. Basil's Cathedral was completed in 1561 — legend (likely false) says Ivan the Terrible blinded the architect afterward so he couldn't replicate it.",
      "culture": "The Moscow Metro, opened in 1935, is famed for its lavishly decorated stations. Red Square ('Krasnaya Ploshchad') translates to 'Beautiful Square' in older Russian — only later did 'krasnaya' come to mean 'red.'"
    },
    "coords": {
      "x": 60,
      "y": 21
    },
    "image": "img:lp"
  },
  {
    "id": "reykjavik",
    "name": "Reykjavik",
    "country": "Iceland",
    "lat": 64.15,
    "lon": -21.94,
    "continent": "Europe",
    "currency": "Icelandic króna",
    "language": "Icelandic",
    "food": "fermented shark",
    "landmark": "erupting geysers",
    "spots": [
      "Keflavík Airport",
      "Landsbankinn",
      "Blue Lagoon Spa"
    ],
    "flag": "blue with a red Nordic cross outlined in white",
    "clues": {
      "easy": [
        "They were exchanging money for Icelandic króna.",
        "They were struggling to pronounce Icelandic words off a bus timetable.",
        "They wanted to taste fermented shark in Iceland.",
        "They wanted to watch erupting geysers in Iceland."
      ],
      "medium": [
        "Their flag: blue with a red cross edged in white, set toward the pole.",
        "They asked where to watch the northern lights after a soak in the Blue Lagoon.",
        "They wanted to see the Strokkur geyser blow and the rift valley at Þingvellir.",
        "They said they were bound for the northernmost capital of any sovereign nation."
      ],
      "hard": [
        "They said the city's name means Smoky Bay, for the steam rising off the hot springs.",
        "They mentioned a parliament founded in 930 CE, one of the oldest in the world.",
        "They talked about the 1972 world chess championship between Fischer and Spassky.",
        "They mentioned Eyjafjallajökull, the volcano that grounded Europe's flights in 2010."
      ]
    },
    "poster": {
      "sky": [
        "#8fd6c4",
        "#1b2a4a"
      ],
      "sun": "#e9f5f2",
      "ground": "#2b3a42",
      "accent": "#d9534f",
      "motif": "volcano"
    },
    "facts": {
      "capitalOf": "Iceland",
      "continent": "Europe",
      "timeZone": "GMT (UTC+0)",
      "founded": "~870 CE",
      "climate": "Subarctic; cool summers, mild snowy winters",
      "summary": "The world's northernmost capital of an independent country. Reykjavík means 'Smoky Bay' — named for the steam rising from nearby geothermal springs. Iceland was settled by Vikings around 874 CE.",
      "history": "Iceland's parliament, the Alþingi, was established in 930 CE and is one of the world's oldest. Iceland was ruled by Norway and then Denmark for centuries before gaining full independence in 1944. Reykjavík became the capital in 1786.",
      "culture": "Around 80% of Iceland's electricity comes from hydropower; the rest is largely geothermal. The country has more sheep than people. Icelandic, the local language, has changed so little since the 13th century that modern speakers can read medieval sagas."
    },
    "coords": {
      "x": 45,
      "y": 19
    },
    "image": "img:tp"
  },
  {
    "id": "nairobi",
    "name": "Nairobi",
    "country": "Kenya",
    "lat": -1.29,
    "lon": 36.82,
    "continent": "Africa",
    "currency": "Kenyan shillings",
    "language": "Swahili",
    "food": "ugali",
    "landmark": "the Maasai Mara safari plains",
    "spots": [
      "Jomo Kenyatta Airport",
      "Central Bank of Kenya",
      "Nairobi National Park"
    ],
    "flag": "black, red and green stripes edged in white, with a Maasai shield and two spears",
    "clues": {
      "easy": [
        "They were changing money into Kenyan shillings.",
        "They were eating ugali and planning a safari in Kenya.",
        "They wanted to see the Maasai Mara safari plains in Kenya.",
        "They were practicing Swahili and asking for a flight to Kenya's capital."
      ],
      "medium": [
        "Their flag: black, red and green stripes with a Maasai shield and two crossed spears.",
        "They wanted to see lions in a national park that sits right inside the capital's city limits.",
        "They wanted to watch the great wildebeest migration cross the Mara River.",
        "They asked about the Maasai, red-robed herders famous for their jumping dance."
      ],
      "hard": [
        "They said the city's name comes from a Maasai phrase meaning place of cool waters.",
        "They talked about a railway depot founded in 1899 that grew into a capital.",
        "They mentioned Wangari Maathai, the first African woman to win the Nobel Peace Prize.",
        "They mentioned Karen Blixen, who wrote Out of Africa about her coffee farm near there."
      ]
    },
    "poster": {
      "sky": [
        "#ffb347",
        "#8a3b1f"
      ],
      "sun": "#fff1a8",
      "ground": "#5c4a1e",
      "accent": "#2f6b3a",
      "motif": "palms"
    },
    "facts": {
      "capitalOf": "Kenya",
      "continent": "Africa",
      "timeZone": "EAT (UTC+3)",
      "founded": "1899 CE",
      "climate": "Subtropical highland; mild year-round",
      "summary": "Kenya's capital sits at 1,795m elevation on the eastern edge of the Great Rift Valley. The name comes from the Maasai phrase 'Enkare Nyrobi,' meaning 'place of cool waters.'",
      "history": "Founded in 1899 as a railway depot for the British East Africa railway, Nairobi grew into Kenya's commercial center. Kenya gained independence from Britain in 1963; Jomo Kenyatta became the country's first president.",
      "culture": "Nairobi National Park, within the city limits, is the only national park inside a major capital — lions and rhinos roam against a skyline backdrop. Swahili and English are the official languages."
    },
    "coords": {
      "x": 63,
      "y": 54
    },
    "image": "img:ip"
  },
  {
    "id": "kathmandu",
    "name": "Kathmandu",
    "country": "Nepal",
    "lat": 27.72,
    "lon": 85.32,
    "continent": "Asia",
    "currency": "Nepalese rupees",
    "language": "Nepali",
    "food": "momos",
    "landmark": "Mount Everest",
    "spots": [
      "Tribhuvan Airport",
      "Nepal Rastra Bank",
      "Boudhanath Stupa"
    ],
    "flag": "two stacked crimson pennants with a blue border, a white moon and a sun",
    "clues": {
      "easy": [
        "They were paying in Nepalese rupees.",
        "They were practicing Nepali with a trekking guide.",
        "They wanted a plate of momos in Nepal before their trek.",
        "They said they'd see Mount Everest from Nepal."
      ],
      "medium": [
        "Their flag wasn't even a rectangle — two stacked crimson pennants with a moon and a sun.",
        "They asked about hiring a Sherpa guide for a climb to the top of the world.",
        "They wanted to spin prayer wheels around the giant white stupa at Boudhanath.",
        "They asked about the Kumari, a living goddess chosen as a young girl."
      ],
      "hard": [
        "They said the clocks there run 5 hours and 45 minutes ahead of UTC.",
        "They mentioned the Buddha's birthplace at Lumbini, in the same country.",
        "They said the country was a kingdom until it became a republic in 2008.",
        "They mentioned a 2015 earthquake that toppled the old Dharahara tower."
      ]
    },
    "poster": {
      "sky": [
        "#a7c7e7",
        "#3d2c5e"
      ],
      "sun": "#ffd27f",
      "ground": "#f2efe6",
      "accent": "#c0392b",
      "motif": "stupa"
    },
    "facts": {
      "capitalOf": "Nepal",
      "continent": "Asia",
      "timeZone": "NPT (UTC+5:45)",
      "founded": "~723 CE",
      "climate": "Humid subtropical; cooler at altitude",
      "summary": "Nepal's capital sits in a high valley at 1,400m, ringed by Himalayan peaks. Eight of the world's ten highest mountains, including Everest, are in Nepal. Nepal uses one of the world's only non-half-hour off-UTC time zones.",
      "history": "The Kathmandu Valley has been continuously inhabited for over 2,000 years. The current city dates to the 8th century. Nepal was never colonized — uniquely in South Asia — and remained a kingdom until becoming a republic in 2008.",
      "culture": "Kathmandu Durbar Square holds dozens of palaces and temples. The Boudhanath Stupa is one of the largest spherical stupas in the world. Nepal is the birthplace of Siddhārtha Gautama, the Buddha, born in Lumbini around 563 BCE."
    },
    "coords": {
      "x": 74,
      "y": 39
    },
    "image": "img:op"
  },
  {
    "id": "buenos_aires",
    "name": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.6,
    "lon": -58.38,
    "continent": "South America",
    "currency": "Argentine pesos",
    "language": "Spanish",
    "food": "asado",
    "landmark": "the Tango district of La Boca",
    "spots": [
      "Ezeiza International Airport",
      "Banco Central",
      "La Boca Tango Hall"
    ],
    "flag": "light blue and white horizontal stripes with a golden Sun of May",
    "clues": {
      "easy": [
        "They were stuffing Argentine pesos into their coat.",
        "They spoke Spanish and wanted a tango lesson in Argentina.",
        "They wanted a real asado, grilled the way they do it in Argentina.",
        "They asked for directions to La Boca, the tango district."
      ],
      "medium": [
        "Their flag: light blue and white stripes with a golden sun that has a face.",
        "They wanted to sip mate and watch Boca Juniors play at La Bombonera.",
        "They wanted to cross the Avenida 9 de Julio, one of the widest avenues on Earth.",
        "They asked how to find Eva Perón's tomb in Recoleta Cemetery."
      ],
      "hard": [
        "They said the city's name means fair winds.",
        "They said the river out front, the Río de la Plata, is the widest in the world.",
        "They were reading Jorge Luis Borges in a café and wouldn't look up.",
        "They mentioned an independence declared at Tucumán in 1816."
      ]
    },
    "poster": {
      "sky": [
        "#9fd3f0",
        "#2c3e70"
      ],
      "sun": "#ffc83d",
      "ground": "#e94f37",
      "accent": "#f6f1e3",
      "motif": "harbor"
    },
    "facts": {
      "capitalOf": "Argentina",
      "continent": "South America",
      "timeZone": "ART (UTC-3)",
      "founded": "1536 CE (refounded 1580)",
      "climate": "Humid subtropical; mild",
      "summary": "Argentina's capital lies on the Río de la Plata, the world's widest river. The name means 'Fair Winds.' Founded by Spanish colonists in 1536, abandoned, then refounded permanently in 1580.",
      "history": "Argentina declared independence from Spain in 1816. Massive immigration from Italy and Spain in the late 19th century shaped the city's character — it's said porteños (Buenos Aires natives) speak Spanish with an Italian accent.",
      "culture": "The tango originated in late 19th-century Buenos Aires in working-class neighborhoods. Avenida 9 de Julio, named for Argentine independence day, is one of the world's widest avenues. Recoleta Cemetery holds the tomb of Eva Perón."
    },
    "coords": {
      "x": 35,
      "y": 68
    },
    "image": "img:up"
  },
  {
    "id": "new_york",
    "name": "New York",
    "country": "USA",
    "lat": 40.71,
    "lon": -74.01,
    "continent": "North America",
    "currency": "US dollars",
    "language": "English",
    "food": "pastrami on rye",
    "landmark": "the Statue of Liberty",
    "spots": [
      "John F. Kennedy Airport",
      "Federal Reserve",
      "Metropolitan Museum"
    ],
    "flag": "thirteen red and white stripes with fifty white stars on blue",
    "clues": {
      "easy": [
        "They were paying in US dollars.",
        "They wanted a pastrami on rye in the biggest city in the USA.",
        "They said they'd take the ferry out to the Statue of Liberty.",
        "They asked for the fastest way to America's largest city."
      ],
      "medium": [
        "Their flag had 50 white stars and 13 red and white stripes.",
        "They wanted to see the Empire State Building and Times Square at midnight.",
        "They asked about Broadway tickets and a stroll through Central Park.",
        "They wanted to walk the Brooklyn Bridge at dusk."
      ],
      "hard": [
        "They said the island was supposedly bought from the Lenape for trinkets in 1626.",
        "They said George Washington took his first oath of office there in 1789.",
        "They talked about Ellis Island, which processed about 12 million immigrants.",
        "They mentioned the United Nations headquarters on the East River."
      ]
    },
    "poster": {
      "sky": [
        "#f4a259",
        "#2b2d42"
      ],
      "sun": "#ffd166",
      "ground": "#1b263b",
      "accent": "#5fb49c",
      "motif": "skyscrapers"
    },
    "facts": {
      "capitalOf": null,
      "continent": "North America",
      "timeZone": "EST (UTC-5)",
      "founded": "1624 CE",
      "climate": "Humid subtropical / continental",
      "summary": "The most populous U.S. city. Not the capital — Washington, D.C. is. Founded by the Dutch as New Amsterdam in 1624, ceded to England in 1664 and renamed New York after the Duke of York.",
      "history": "The Statue of Liberty was a gift from France in 1886. Ellis Island processed roughly 12 million immigrants between 1892 and 1954. New York briefly served as the U.S. capital from 1785-1790 — George Washington took the first presidential oath here.",
      "culture": "The Empire State Building was the world's tallest from 1931 to 1971. Central Park is larger than the entire principality of Monaco. The 'New York Yankees' name comes from a 19th-century slang term for Northeasterners."
    },
    "coords": {
      "x": 30,
      "y": 30
    },
    "image": "img:Ap"
  },
  {
    "id": "marrakech",
    "name": "Marrakech",
    "country": "Morocco",
    "lat": 31.63,
    "lon": -7.99,
    "continent": "Africa",
    "currency": "Moroccan dirhams",
    "language": "Arabic",
    "food": "tagine",
    "landmark": "the Atlas Mountains",
    "spots": [
      "Marrakech Menara Airport",
      "Bank Al-Maghrib",
      "Jemaa el-Fnaa Souk"
    ],
    "flag": "red with a green five-pointed star outline",
    "clues": {
      "easy": [
        "They were changing cash for Moroccan dirhams.",
        "They were craving a slow-cooked tagine in Morocco.",
        "They wanted to haggle in the souks of Morocco's Red City.",
        "They wanted to hike the Atlas Mountains from a base in Morocco."
      ],
      "medium": [
        "Their flag: plain red with a green five-pointed star drawn in outline.",
        "They asked about Jemaa el-Fnaa square, its snake charmers and storytellers.",
        "They wanted to see the 12th-century Koutoubia minaret at the call to prayer.",
        "They talked about a Red City of rose-colored walls at the foot of snowy peaks."
      ],
      "hard": [
        "They said the city was founded in 1062 by the Almoravid dynasty.",
        "They mentioned Yves Saint Laurent and the cobalt-blue Majorelle Garden.",
        "They said the country's Arabic name, al-Maghrib, means the West.",
        "They wanted to climb Jbel Toubkal, the highest peak in North Africa."
      ]
    },
    "poster": {
      "sky": [
        "#f6b26b",
        "#8c2f39"
      ],
      "sun": "#ffe5a3",
      "ground": "#b5523b",
      "accent": "#1f7a5a",
      "motif": "minarets"
    },
    "facts": {
      "capitalOf": null,
      "continent": "Africa",
      "timeZone": "WEST (UTC+1)",
      "founded": "1062 CE",
      "climate": "Hot semi-arid; cool desert nights",
      "summary": "Morocco's fourth-largest city and former imperial capital. Not the current capital — Rabat is. Marrakech is called 'the Red City' for the color of its sandstone walls. Morocco's name in Arabic, al-Maghrib, means 'the West.'",
      "history": "Founded in 1062 by the Almoravid dynasty, Marrakech served as the capital of several Moroccan empires over its first 500 years. The city walls, built in the 12th century from red rammed earth, still encircle the old town.",
      "culture": "Jemaa el-Fnaa square, dating to the 11th century, is the city's main marketplace and a UNESCO Cultural Heritage site for its tradition of public storytelling. The Koutoubia Mosque's minaret was built in 1199."
    },
    "coords": {
      "x": 48,
      "y": 38
    },
    "image": "img:sp"
  },
  {
    "id": "london",
    "name": "London",
    "country": "United Kingdom",
    "lat": 51.51,
    "lon": -0.13,
    "continent": "Europe",
    "currency": "British pounds",
    "language": "English",
    "food": "fish and chips",
    "landmark": "Big Ben",
    "spots": [
      "Heathrow Airport",
      "Harrods",
      "British Museum"
    ],
    "flag": "the Union Jack: red and white crosses on blue",
    "clues": {
      "easy": [
        "They were paying in British pounds sterling.",
        "They were off to the United Kingdom for fish and chips wrapped in paper.",
        "They asked how to get from Heathrow to Big Ben before the clock struck.",
        "They said they'd see the changing of the guard at Buckingham Palace, in England."
      ],
      "medium": [
        "Their flag was the Union Jack and nothing else — no stars, no extra emblems.",
        "They wanted to ride a red double-decker bus across Tower Bridge.",
        "They asked about the Crown Jewels, kept in the old Tower by the Thames.",
        "They wanted strawberries and cream on Centre Court at Wimbledon."
      ],
      "hard": [
        "They mentioned a Great Fire in 1666 that started in a bakery on Pudding Lane.",
        "They said the Prime Meridian, zero degrees longitude, runs through Greenwich there.",
        "They talked about Shakespeare's Globe theatre on the south bank of the river.",
        "They mentioned the world's first underground railway, opened in 1863."
      ]
    },
    "poster": {
      "sky": [
        "#b8c4d6",
        "#2a2f45"
      ],
      "sun": "#f2d28b",
      "ground": "#3c4a5c",
      "accent": "#c0392b",
      "motif": "clocktower"
    },
    "facts": {
      "capitalOf": "United Kingdom",
      "continent": "Europe",
      "timeZone": "GMT (UTC+0)",
      "founded": "~47 CE (as Londinium)",
      "climate": "Temperate oceanic; mild and damp",
      "summary": "The capital of the United Kingdom, straddling the River Thames. Founded by the Romans as Londinium, it grew into the heart of a global empire and remains one of the world's great financial centers.",
      "history": "The Great Fire of 1666 destroyed much of the medieval city; Christopher Wren rebuilt St Paul's Cathedral afterward. The Elizabeth Tower, home of the bell called Big Ben, was completed in 1859.",
      "culture": "The British Museum opened in 1759 and is free to enter. The London Underground, opened in 1863, was the world's first underground railway."
    },
    "coords": {
      "x": 50,
      "y": 26
    }
  },
  {
    "id": "rome",
    "name": "Rome",
    "country": "Italy",
    "lat": 41.9,
    "lon": 12.5,
    "continent": "Europe",
    "currency": "euros",
    "language": "Italian",
    "food": "pasta carbonara",
    "landmark": "the Colosseum",
    "spots": [
      "Leonardo da Vinci–Fiumicino Airport",
      "Antico Caffè Greco",
      "Capitoline Museums"
    ],
    "flag": "green, white and red vertical stripes",
    "clues": {
      "easy": [
        "They wanted a plate of pasta carbonara in Italy's capital.",
        "They were brushing up on their Italian between cigarettes.",
        "They were paying in euros and asking the way to the Colosseum.",
        "They said all roads in Italy would lead them to the capital tonight."
      ],
      "medium": [
        "Their flag: plain green, white and red vertical stripes — no emblem in the middle.",
        "They wanted to toss a coin over their shoulder into the Trevi Fountain.",
        "They asked about catching the Pope's Sunday blessing in the tiny state next door.",
        "They told a story about twin brothers raised by a she-wolf."
      ],
      "hard": [
        "They mentioned Julius Caesar, stabbed in the Senate on the Ides of March, 44 BCE.",
        "They said the city was built on seven hills beside the Tiber.",
        "They talked about the Pantheon, still the largest unreinforced concrete dome after 1,900 years.",
        "They wanted to walk the Appian Way, the old military road built in 312 BCE."
      ]
    },
    "poster": {
      "sky": [
        "#f6c28b",
        "#7b3f2b"
      ],
      "sun": "#fff0b3",
      "ground": "#a65e3a",
      "accent": "#2e6b4f",
      "motif": "arch"
    },
    "facts": {
      "capitalOf": "Italy",
      "continent": "Europe",
      "timeZone": "CET (UTC+1)",
      "founded": "753 BCE (traditional)",
      "climate": "Mediterranean; hot dry summers",
      "summary": "Italy's capital on the river Tiber, called the Eternal City. Rome was the center of an empire that ruled the Mediterranean world, and it surrounds Vatican City, the smallest independent state on Earth.",
      "history": "Legend says Romulus founded the city in 753 BCE. The Colosseum opened in 80 CE and could hold around 50,000 spectators. Rome became the capital of a unified Italy in 1871.",
      "culture": "The Pantheon's dome, completed around 125 CE, is still the largest unreinforced concrete dome in the world. Tossing a coin into the Trevi Fountain is said to guarantee a return trip."
    },
    "coords": {
      "x": 53,
      "y": 31
    }
  },
  {
    "id": "athens",
    "name": "Athens",
    "country": "Greece",
    "lat": 37.98,
    "lon": 23.73,
    "continent": "Europe",
    "currency": "euros",
    "language": "Greek",
    "food": "souvlaki",
    "landmark": "the Acropolis",
    "spots": [
      "Athens International Airport",
      "Monastiraki Flea Market",
      "Acropolis Museum"
    ],
    "flag": "nine blue and white horizontal stripes with a white cross on a blue square",
    "clues": {
      "easy": [
        "They were reading a phrasebook in Greek, lips moving.",
        "They ordered souvlaki and asked for the fastest way to Greece's capital.",
        "They were paying in euros and wanted to climb the Acropolis.",
        "They said they'd catch a ferry from Greece out to the islands."
      ],
      "medium": [
        "Their flag: nine blue and white stripes with a white cross in a blue corner.",
        "They wanted to see the marble Parthenon, temple of the goddess of wisdom.",
        "They mentioned the marble stadium where the first modern Olympics opened in 1896.",
        "They wanted to watch the evzone guards march in their pom-pom shoes."
      ],
      "hard": [
        "They were quoting Socrates, sentenced to drink hemlock there in 399 BCE.",
        "They said the city was named for a goddess who won it with the gift of an olive tree.",
        "They talked about Pericles and the birthplace of democracy.",
        "They mentioned a runner who carried news of victory from Marathon in 490 BCE."
      ]
    },
    "poster": {
      "sky": [
        "#9ed0f0",
        "#2a4d7a"
      ],
      "sun": "#fff4c2",
      "ground": "#e9dfc8",
      "accent": "#1f5fa8",
      "motif": "columns"
    },
    "facts": {
      "capitalOf": "Greece",
      "continent": "Europe",
      "timeZone": "EET (UTC+2)",
      "founded": "Before 1400 BCE",
      "climate": "Hot-summer Mediterranean",
      "summary": "Greece's capital and one of the world's oldest cities, named for the goddess Athena. Classical Athens gave the world democracy, theatre, and much of Western philosophy.",
      "history": "The Parthenon atop the Acropolis was completed in 432 BCE under Pericles. Athens became the capital of modern Greece in 1834, soon after independence from the Ottoman Empire.",
      "culture": "The first modern Olympic Games were held in Athens in 1896 in the marble Panathenaic Stadium. Socrates, Plato, and Aristotle all taught in the city."
    },
    "coords": {
      "x": 57,
      "y": 33
    }
  },
  {
    "id": "amsterdam",
    "name": "Amsterdam",
    "country": "Netherlands",
    "lat": 52.37,
    "lon": 4.9,
    "continent": "Europe",
    "currency": "euros",
    "language": "Dutch",
    "food": "stroopwafels",
    "landmark": "the canal ring",
    "spots": [
      "Schiphol Airport",
      "Albert Cuyp Market",
      "Rijksmuseum"
    ],
    "flag": "red, white and blue horizontal stripes",
    "clues": {
      "easy": [
        "They were practicing Dutch and getting most of it wrong.",
        "They were paying in euros and buying stroopwafels for the trip to the Netherlands.",
        "They wanted a boat tour of the canal ring in the Netherlands.",
        "They said they were bound for the capital of the Netherlands — not The Hague, they said."
      ],
      "medium": [
        "Their flag had three horizontal stripes: red on top, then white, then blue.",
        "They wanted to see Rembrandt's The Night Watch in person.",
        "They asked when the tulip fields bloom and where to rent a bike by the canals.",
        "They wanted to visit the Anne Frank House on the Prinsengracht."
      ],
      "hard": [
        "They said about a quarter of the country lies below sea level, held back by dikes.",
        "They mentioned the tulip mania crash of 1637.",
        "They said the VOC trading company set up the world's first stock exchange there in the 1600s.",
        "They said the whole old city stands on millions of wooden piles driven into marsh."
      ]
    },
    "poster": {
      "sky": [
        "#f7c59f",
        "#2d4a6b"
      ],
      "sun": "#ffe8a8",
      "ground": "#3f6f5f",
      "accent": "#e76f51",
      "motif": "windmill"
    },
    "facts": {
      "capitalOf": "Netherlands",
      "continent": "Europe",
      "timeZone": "CET (UTC+1)",
      "founded": "~1275 CE",
      "climate": "Temperate oceanic; cool and wet",
      "summary": "The capital of the Netherlands, built around a dam on the river Amstel — hence the name. Its 17th-century ring of canals is a UNESCO World Heritage Site, though the government sits in The Hague.",
      "history": "During the Dutch Golden Age of the 1600s, Amsterdam was one of the richest cities in the world and home to the Dutch East India Company. Anne Frank hid from the Nazis in a canal house here from 1942 to 1944.",
      "culture": "The Rijksmuseum holds Rembrandt's The Night Watch. The city has more bicycles than residents."
    },
    "coords": {
      "x": 51,
      "y": 26
    }
  },
  {
    "id": "stockholm",
    "name": "Stockholm",
    "country": "Sweden",
    "lat": 59.33,
    "lon": 18.07,
    "continent": "Europe",
    "currency": "Swedish kronor",
    "language": "Swedish",
    "food": "meatballs with lingonberries",
    "landmark": "the old town of Gamla Stan",
    "spots": [
      "Stockholm Arlanda Airport",
      "Östermalm Market Hall",
      "Vasa Museum"
    ],
    "flag": "blue with a yellow Nordic cross",
    "clues": {
      "easy": [
        "They were paying in Swedish kronor.",
        "They were practicing Swedish under their breath.",
        "They wanted meatballs with lingonberries in Sweden's capital.",
        "They wanted to wander the alleys of Gamla Stan, the old town."
      ],
      "medium": [
        "Their flag: blue with a yellow cross set toward the pole.",
        "They wanted to see a 17th-century warship that sank on its maiden voyage and was raised intact.",
        "They asked about getting into the Nobel Prize banquet every December 10.",
        "They were humming Waterloo and asking for the ABBA museum."
      ],
      "hard": [
        "They said the city sprawls over 14 islands where Lake Mälaren meets the Baltic.",
        "They mentioned a 1973 bank robbery that gave a psychological syndrome its name.",
        "They talked about Greta Garbo, the screen legend born there in 1905.",
        "They mentioned Carl Linnaeus, the botanist who gave every species a two-part Latin name."
      ]
    },
    "poster": {
      "sky": [
        "#bcd4e6",
        "#1f3a5f"
      ],
      "sun": "#ffd447",
      "ground": "#2c4f6e",
      "accent": "#e4b363",
      "motif": "harbor"
    },
    "facts": {
      "capitalOf": "Sweden",
      "continent": "Europe",
      "timeZone": "CET (UTC+1)",
      "founded": "1252 CE",
      "climate": "Humid continental; cold winters, mild summers",
      "summary": "Sweden's capital is spread across 14 islands where Lake Mälaren meets the Baltic Sea. It is the largest city in Scandinavia and home of the Nobel Prize ceremonies, except the Peace Prize.",
      "history": "First recorded in 1252, Stockholm grew as a trading hub of the Baltic. The warship Vasa sank on its maiden voyage in 1628 and was raised almost intact in 1961.",
      "culture": "Gamla Stan, the old town, is one of Europe's best-preserved medieval centers. The term Stockholm syndrome comes from a 1973 bank robbery in the city."
    },
    "coords": {
      "x": 55,
      "y": 22
    }
  },
  {
    "id": "lisbon",
    "name": "Lisbon",
    "country": "Portugal",
    "lat": 38.72,
    "lon": -9.14,
    "continent": "Europe",
    "currency": "euros",
    "language": "Portuguese",
    "food": "pastéis de nata",
    "landmark": "the Belém Tower",
    "spots": [
      "Humberto Delgado Airport",
      "Café A Brasileira",
      "Jerónimos Monastery"
    ],
    "flag": "green and red with a golden armillary sphere and shield",
    "clues": {
      "easy": [
        "They were paying in euros and buying pastéis de nata for the road to Portugal.",
        "They said they'd see the Belém Tower before leaving Portugal.",
        "They were heading to Portugal's capital on the first train out.",
        "They spoke Portuguese with a European accent and wanted the Belém Tower."
      ],
      "medium": [
        "Their flag: green and red, with a golden armillary sphere and a shield.",
        "They wanted to hear fado sung in a tavern in the Alfama.",
        "They wanted to ride the yellow Tram 28 up the steep hills.",
        "They asked about a red suspension bridge over the Tagus that looks like the Golden Gate."
      ],
      "hard": [
        "They mentioned the great earthquake and tsunami of All Saints' Day, 1755.",
        "They said Vasco da Gama sailed from there in 1497 and found a sea route around Africa to Calicut.",
        "They talked about a 1974 Carnation Revolution that ended a dictatorship.",
        "They kept quoting Fernando Pessoa, the poet who wrote under dozens of other names."
      ]
    },
    "poster": {
      "sky": [
        "#ffd29d",
        "#3b5b8c"
      ],
      "sun": "#fff3b0",
      "ground": "#d9734e",
      "accent": "#f4d35e",
      "motif": "castle"
    },
    "facts": {
      "capitalOf": "Portugal",
      "continent": "Europe",
      "timeZone": "WET (UTC+0)",
      "founded": "Pre-Roman (Roman Olisipo by 138 BCE)",
      "climate": "Mediterranean; warm dry summers",
      "summary": "Portugal's hilly capital sits where the Tagus River meets the Atlantic. It is one of the oldest cities in Western Europe and launched the voyages of Portugal's Age of Discovery.",
      "history": "Vasco da Gama sailed from Belém in 1497 to open a sea route to India. An earthquake, tsunami, and fire destroyed much of the city in 1755, and the Carnation Revolution of 1974 ended decades of dictatorship.",
      "culture": "Fado, a mournful style of song, is tied to the old neighborhoods of Alfama and Mouraria. The custard tart pastel de nata was first made by monks at the Jerónimos Monastery."
    },
    "coords": {
      "x": 47,
      "y": 33
    }
  },
  {
    "id": "istanbul",
    "name": "Istanbul",
    "country": "Turkey",
    "lat": 41.01,
    "lon": 28.98,
    "continent": "Europe",
    "currency": "Turkish lira",
    "language": "Turkish",
    "food": "baklava",
    "landmark": "the Hagia Sophia",
    "spots": [
      "Istanbul Airport",
      "Grand Bazaar",
      "Topkapı Palace Museum"
    ],
    "flag": "red with a white crescent and star",
    "clues": {
      "easy": [
        "They were paying in Turkish lira.",
        "They were practicing Turkish with a taxi driver.",
        "They wanted to see the Hagia Sophia by lamplight.",
        "They bought baklava and asked for the ferry to Turkey's biggest city."
      ],
      "medium": [
        "Their flag: red with a white crescent and a white star.",
        "They wanted to haggle in a covered bazaar with some 4,000 shops under one roof.",
        "They wanted a ferry across the Bosphorus — breakfast in Europe, lunch in Asia.",
        "They asked about the Blue Mosque and its six minarets."
      ],
      "hard": [
        "They said the city used to be called Byzantium, and then Constantinople.",
        "They mentioned it fell to the Ottoman Sultan Mehmed II in 1453.",
        "They were reading Orhan Pamuk, the Nobel laureate who wrote a memoir of the city.",
        "They said it was an imperial capital for 1,600 years but isn't the capital now — Ankara is."
      ]
    },
    "poster": {
      "sky": [
        "#f3a683",
        "#3d2b56"
      ],
      "sun": "#ffe29a",
      "ground": "#2c3e63",
      "accent": "#e15554",
      "motif": "minarets"
    },
    "facts": {
      "capitalOf": null,
      "continent": "Europe / Asia",
      "timeZone": "TRT (UTC+3)",
      "founded": "~660 BCE (as Byzantium)",
      "climate": "Mediterranean / humid subtropical",
      "summary": "Turkey's largest city straddles the Bosphorus strait, with one foot in Europe and one in Asia. Not the capital — Ankara is — but it was the seat of the Byzantine and Ottoman empires for about 1,600 years.",
      "history": "Greek colonists founded Byzantium around 660 BCE. Emperor Constantine made it his capital, Constantinople, in 330 CE, and the Ottomans captured it in 1453. The Hagia Sophia was completed in 537 CE.",
      "culture": "The Grand Bazaar, begun in the 1450s, is one of the oldest and largest covered markets in the world. Orhan Pamuk, winner of the 2006 Nobel Prize in Literature, wrote a memoir of his native city."
    },
    "coords": {
      "x": 58,
      "y": 31
    }
  },
  {
    "id": "beijing",
    "name": "Beijing",
    "country": "China",
    "lat": 39.9,
    "lon": 116.4,
    "continent": "Asia",
    "currency": "Chinese yuan",
    "language": "Mandarin Chinese",
    "food": "Peking duck",
    "landmark": "the Forbidden City",
    "spots": [
      "Beijing Capital International Airport",
      "Silk Street Market",
      "National Museum of China"
    ],
    "flag": "red with one large and four small yellow stars",
    "clues": {
      "easy": [
        "They were changing money into Chinese yuan.",
        "They were practicing Mandarin and asking for a train to China's capital.",
        "They wanted Peking duck carved at the table.",
        "They were planning to sneak a look inside the Forbidden City."
      ],
      "medium": [
        "Their flag: red, with one big yellow star and four small ones beside it.",
        "They wanted to walk the Great Wall at Badaling before the crowds.",
        "They asked about the Temple of Heaven and the vast square at Tiananmen.",
        "They wanted to see giant pandas, and asked where to buy a silk qipao."
      ],
      "hard": [
        "They said it's the only city to host both the Summer and Winter Olympics, in 2008 and 2022.",
        "They mentioned Kublai Khan building his capital, Khanbaliq, on that spot.",
        "They talked about Puyi, the last emperor, who abdicated in 1912.",
        "They mentioned the country that gave the world paper, printing, gunpowder and the compass."
      ]
    },
    "poster": {
      "sky": [
        "#f7b267",
        "#6a1b2a"
      ],
      "sun": "#ffe066",
      "ground": "#8c2f2f",
      "accent": "#f2c14e",
      "motif": "pagoda"
    },
    "facts": {
      "capitalOf": "China",
      "continent": "Asia",
      "timeZone": "CST (UTC+8)",
      "founded": "~1045 BCE (as Ji)",
      "climate": "Humid continental; hot summers, cold dry winters",
      "summary": "The capital of the People's Republic of China and one of the world's most populous cities. Beijing means 'Northern Capital,' and it has been the seat of Chinese government for most of the last 800 years.",
      "history": "Kublai Khan built his capital Khanbaliq here in the 13th century. The Ming dynasty built the Forbidden City between 1406 and 1420; it housed 24 emperors until Puyi abdicated in 1912.",
      "culture": "Beijing is the only city to have hosted both the Summer (2008) and Winter (2022) Olympic Games. Peking duck has been served here since imperial times."
    },
    "coords": {
      "x": 82,
      "y": 32
    }
  },
  {
    "id": "new_delhi",
    "name": "New Delhi",
    "country": "India",
    "lat": 28.61,
    "lon": 77.21,
    "continent": "Asia",
    "currency": "Indian rupees",
    "language": "Hindi",
    "food": "butter chicken",
    "landmark": "India Gate",
    "spots": [
      "Indira Gandhi International Airport",
      "Chandni Chowk Market",
      "National Museum, New Delhi"
    ],
    "flag": "saffron, white and green horizontal stripes with a navy-blue wheel",
    "clues": {
      "easy": [
        "They were paying in Indian rupees.",
        "They were practicing Hindi with a rickshaw driver.",
        "They wanted butter chicken in India's capital.",
        "They wanted to see India Gate lit up at night."
      ],
      "medium": [
        "Their flag: saffron, white and green stripes with a navy-blue spoked wheel.",
        "They wanted to see the Taj Mahal, a short train ride south in Agra.",
        "They asked about a cricket test match and the walls of the Red Fort.",
        "They wanted to photograph the Qutub Minar, a towering 13th-century brick minaret."
      ],
      "hard": [
        "They said the city was designed by Edwin Lutyens and inaugurated as capital in 1931.",
        "They wanted to visit Raj Ghat, where Mahatma Gandhi was cremated.",
        "They talked about the Mughal emperor Shah Jahan's walled city on the Yamuna.",
        "They said zero as a number and the ancestor of chess, chaturanga, both came from there."
      ]
    },
    "poster": {
      "sky": [
        "#ffbe76",
        "#7a2e3b"
      ],
      "sun": "#fff3a3",
      "ground": "#c96a3a",
      "accent": "#138808",
      "motif": "arch"
    },
    "facts": {
      "capitalOf": "India",
      "continent": "Asia",
      "timeZone": "IST (UTC+5:30)",
      "founded": "1911 CE (inaugurated 1931)",
      "climate": "Hot semi-arid / humid subtropical; monsoon summers",
      "summary": "India's capital, a planned city built beside the much older Delhi. It is the seat of the world's most populous democracy, with ministries lining the ceremonial boulevard Kartavya Path.",
      "history": "The British moved the capital of India from Calcutta to Delhi in 1911, and architects Edwin Lutyens and Herbert Baker designed New Delhi, inaugurated in 1931. India Gate honors Indian soldiers who died in World War I.",
      "culture": "Old Delhi's Red Fort and Jama Masjid were built by the Mughal emperor Shah Jahan in the 17th century. The 73-meter Qutub Minar dates to the early 13th century."
    },
    "coords": {
      "x": 71,
      "y": 38
    }
  },
  {
    "id": "bangkok",
    "name": "Bangkok",
    "country": "Thailand",
    "lat": 13.76,
    "lon": 100.5,
    "continent": "Asia",
    "currency": "Thai baht",
    "language": "Thai",
    "food": "pad thai",
    "landmark": "the Grand Palace",
    "spots": [
      "Suvarnabhumi Airport",
      "Chatuchak Weekend Market",
      "Wat Pho"
    ],
    "flag": "red, white and blue horizontal stripes, with a wide blue band in the middle",
    "clues": {
      "easy": [
        "They were changing money into Thai baht.",
        "They were practicing Thai greetings with their palms pressed together.",
        "They wanted pad thai from a street cart in Thailand's capital.",
        "They wanted to tour the Grand Palace."
      ],
      "medium": [
        "Their flag: red, white, a double-width blue band, then white and red again.",
        "They wanted to see the giant golden Reclining Buddha at Wat Pho.",
        "They asked about kickboxing fights where elbows and knees are allowed.",
        "They wanted a long-tail boat on the Chao Phraya and a floating market at dawn."
      ],
      "hard": [
        "They said the city's full ceremonial name is the longest place name in the world.",
        "They said locals call it Krung Thep — the City of Angels.",
        "They mentioned the country was called Siam until 1939.",
        "They talked about the Emerald Buddha, carved from a single block of jade."
      ]
    },
    "poster": {
      "sky": [
        "#ff9f80",
        "#4b2a5c"
      ],
      "sun": "#ffe17d",
      "ground": "#2e5a6b",
      "accent": "#f2b134",
      "motif": "pagoda"
    },
    "facts": {
      "capitalOf": "Thailand",
      "continent": "Asia",
      "timeZone": "ICT (UTC+7)",
      "founded": "1782 CE",
      "climate": "Tropical savanna; hot and humid",
      "summary": "Thailand's capital on the Chao Phraya River, known to Thais as Krung Thep, 'City of Angels.' Its full ceremonial name is the longest place name in the world.",
      "history": "King Rama I moved the capital across the river to Bangkok in 1782 and began building the Grand Palace. The country was known as Siam until 1939.",
      "culture": "The Emerald Buddha, carved from jade, sits in Wat Phra Kaew inside the Grand Palace grounds. Wat Pho houses a 46-meter Reclining Buddha and is a historic school of Thai massage."
    },
    "coords": {
      "x": 78,
      "y": 45
    }
  },
  {
    "id": "seoul",
    "name": "Seoul",
    "country": "South Korea",
    "lat": 37.57,
    "lon": 126.98,
    "continent": "Asia",
    "currency": "South Korean won",
    "language": "Korean",
    "food": "kimchi",
    "landmark": "Gyeongbokgung Palace",
    "spots": [
      "Incheon International Airport",
      "Gwangjang Market",
      "National Museum of Korea"
    ],
    "flag": "white with a red and blue yin-yang circle and four black trigrams",
    "clues": {
      "easy": [
        "They were paying in South Korean won.",
        "They were practicing Korean from a pocket dictionary.",
        "They wanted kimchi and barbecue in South Korea's capital.",
        "They wanted to see the changing of the guard at Gyeongbokgung Palace."
      ],
      "medium": [
        "Their flag: white with a red-and-blue yin-yang circle and four black trigrams.",
        "They were humming a boy-band hit and asking for directions to Gangnam.",
        "They asked about a tour of the DMZ, the heavily guarded border to the north.",
        "They wanted to see a taekwondo demonstration and eat bibimbap."
      ],
      "hard": [
        "They said King Sejong invented the Hangul alphabet there in 1443.",
        "They mentioned the 1988 Summer Olympics.",
        "They said the Han River cuts the city in two.",
        "They talked about a war from 1950 to 1953 that ended in an armistice, not a peace treaty."
      ]
    },
    "poster": {
      "sky": [
        "#a8d8ea",
        "#2f2a5a"
      ],
      "sun": "#ffcf56",
      "ground": "#3c5a7a",
      "accent": "#cd2e3a",
      "motif": "pagoda"
    },
    "facts": {
      "capitalOf": "South Korea",
      "continent": "Asia",
      "timeZone": "KST (UTC+9)",
      "founded": "1394 CE (as Joseon capital Hanyang)",
      "climate": "Humid continental; monsoon summers",
      "summary": "South Korea's capital, split by the Han River and ringed by mountains. Its metropolitan area holds roughly half the country's population and is a global hub for technology and pop culture.",
      "history": "Seoul, then called Hanyang, became the capital of the Joseon dynasty in 1394, and Gyeongbokgung Palace was built the following year. The city was devastated in the Korean War (1950-1953) and rebuilt rapidly.",
      "culture": "King Sejong introduced the Hangul alphabet in 1443. Seoul hosted the 1988 Summer Olympics."
    },
    "coords": {
      "x": 85,
      "y": 33
    }
  },
  {
    "id": "dubai",
    "name": "Dubai",
    "country": "United Arab Emirates",
    "lat": 25.2,
    "lon": 55.27,
    "continent": "Asia",
    "currency": "UAE dirhams",
    "language": "Arabic",
    "food": "machboos",
    "landmark": "the Burj Khalifa",
    "spots": [
      "Dubai International Airport",
      "Dubai Gold Souk",
      "Museum of the Future"
    ],
    "flag": "green, white and black horizontal stripes with a red vertical band",
    "clues": {
      "easy": [
        "They were changing money into UAE dirhams.",
        "They wanted to ride the elevator to the top of the Burj Khalifa.",
        "They were heading for the United Arab Emirates and its glitziest city.",
        "They wanted a plate of spiced machboos in the Emirates."
      ],
      "medium": [
        "Their flag: green, white and black stripes with a red vertical band by the pole.",
        "They wanted to go skiing indoors inside a shopping mall in the desert.",
        "They asked about villas on a man-made island shaped like a palm tree.",
        "They wanted to cross the Creek on an abra boat to the Gold Souk."
      ],
      "hard": [
        "They said it was a pearl-diving village before oil was found offshore in 1966.",
        "They mentioned seven sheikhdoms that joined into one federation in 1971.",
        "They talked about the Al Maktoum family, who have ruled there since 1833.",
        "They mentioned a World Expo that opened in 2021, a year late."
      ]
    },
    "poster": {
      "sky": [
        "#ffcf91",
        "#5a3d6b"
      ],
      "sun": "#fff1c1",
      "ground": "#d9a066",
      "accent": "#1f8a70",
      "motif": "skyscrapers"
    },
    "facts": {
      "capitalOf": null,
      "continent": "Asia",
      "timeZone": "GST (UTC+4)",
      "founded": "1833 CE (Al Maktoum settlement)",
      "climate": "Hot desert; very hot summers",
      "summary": "The most populous city of the United Arab Emirates, on the Persian Gulf. Not the capital — Abu Dhabi is. Dubai transformed from a pearling port into a global hub of trade, aviation, and tourism within a few decades.",
      "history": "The Al Maktoum family settled Dubai in 1833. Oil was discovered offshore in 1966, and Dubai joined the newly formed UAE in 1971. The Burj Khalifa, the world's tallest building at 828 meters, opened in 2010.",
      "culture": "The Gold Souk in Deira is one of the largest gold markets in the world. Dubai hosted Expo 2020, which was postponed to 2021."
    },
    "coords": {
      "x": 65,
      "y": 39
    }
  },
  {
    "id": "hanoi",
    "name": "Hanoi",
    "country": "Vietnam",
    "lat": 21.03,
    "lon": 105.85,
    "continent": "Asia",
    "currency": "Vietnamese dong",
    "language": "Vietnamese",
    "food": "pho",
    "landmark": "Hoan Kiem Lake",
    "spots": [
      "Noi Bai International Airport",
      "Dong Xuan Market",
      "Temple of Literature"
    ],
    "flag": "red with a single yellow five-pointed star",
    "clues": {
      "easy": [
        "They were changing money into Vietnamese dong.",
        "They were practicing Vietnamese tones and getting them wrong.",
        "They wanted a bowl of pho in Vietnam's capital.",
        "They wanted a dawn walk around Hoan Kiem Lake."
      ],
      "medium": [
        "Their flag: red with one big yellow five-pointed star.",
        "They wanted to cruise among the limestone islands of Ha Long Bay.",
        "They asked about tickets to a water puppet show.",
        "They wanted to see Ho Chi Minh's mausoleum on Ba Dinh Square."
      ],
      "hard": [
        "They told a legend about a golden turtle who took back a magic sword from a king.",
        "They said the city was founded in 1010 as Thăng Long — Ascending Dragon.",
        "They mentioned a 1954 battle at Dien Bien Phu.",
        "They talked about the country's first university, founded in 1076 to honor Confucius."
      ]
    },
    "poster": {
      "sky": [
        "#f7d08a",
        "#3e5641"
      ],
      "sun": "#ffe066",
      "ground": "#4f7c5a",
      "accent": "#da251d",
      "motif": "pagoda"
    },
    "facts": {
      "capitalOf": "Vietnam",
      "continent": "Asia",
      "timeZone": "ICT (UTC+7)",
      "founded": "1010 CE (as Thăng Long)",
      "climate": "Humid subtropical; hot wet summers",
      "summary": "Vietnam's capital, set among lakes on the Red River delta. Its Old Quarter of narrow streets has been a trading district for nearly a thousand years.",
      "history": "Emperor Lý Thái Tổ founded the city as Thăng Long, 'Ascending Dragon,' in 1010. It was the capital of French Indochina from 1902, and became capital of a reunified Vietnam in 1976.",
      "culture": "The Temple of Literature, founded in 1070, housed Vietnam's first university from 1076. Legend says a golden turtle in Hoan Kiem Lake reclaimed a magic sword from King Lê Lợi."
    },
    "coords": {
      "x": 79,
      "y": 41
    }
  },
  {
    "id": "singapore",
    "name": "Singapore",
    "country": "Singapore",
    "lat": 1.35,
    "lon": 103.82,
    "continent": "Asia",
    "currency": "Singapore dollars",
    "language": "English, Malay, Mandarin and Tamil",
    "food": "chili crab",
    "landmark": "the Merlion",
    "spots": [
      "Changi Airport",
      "Raffles Hotel",
      "National Museum of Singapore"
    ],
    "flag": "red over white with a white crescent and five white stars",
    "clues": {
      "easy": [
        "They were paying in Singapore dollars.",
        "They wanted chili crab in Singapore, sauce down their shirt.",
        "They wanted a photo with the Merlion, half lion and half fish.",
        "They said they had a layover at Changi and wouldn't be leaving Singapore soon."
      ],
      "medium": [
        "Their flag: red over white, with a white crescent and five small white stars.",
        "They asked about the giant Supertrees at Gardens by the Bay.",
        "They wanted a pink gin cocktail at the Long Bar of the Raffles Hotel.",
        "They complained they couldn't buy chewing gum where they were going."
      ],
      "hard": [
        "They said their destination is a city-state about one degree north of the equator.",
        "They mentioned Stamford Raffles setting up a British trading post there in 1819.",
        "They said it left Malaysia and became independent in 1965.",
        "They talked about Lee Kuan Yew, the first prime minister, who led for 31 years."
      ]
    },
    "poster": {
      "sky": [
        "#ff9a8b",
        "#2d3a6b"
      ],
      "sun": "#ffe98a",
      "ground": "#1f4d5a",
      "accent": "#ef3340",
      "motif": "harbor"
    },
    "facts": {
      "capitalOf": "Singapore",
      "continent": "Asia",
      "timeZone": "SGT (UTC+8)",
      "founded": "1819 CE (modern city)",
      "climate": "Tropical rainforest; hot, humid, rainy",
      "summary": "An island city-state at the tip of the Malay Peninsula, just over one degree north of the equator. One of the world's busiest ports, it has four official languages: English, Malay, Mandarin, and Tamil.",
      "history": "Stamford Raffles founded a British trading post here in 1819. Singapore joined Malaysia in 1963 but separated and became fully independent in 1965 under Prime Minister Lee Kuan Yew.",
      "culture": "The Singapore Sling cocktail was created at the Raffles Hotel's Long Bar in the early 1900s. Hawker centers serving chili crab and Hainanese chicken rice are UNESCO-recognized cultural heritage."
    },
    "coords": {
      "x": 79,
      "y": 51
    }
  },
  {
    "id": "cape_town",
    "name": "Cape Town",
    "country": "South Africa",
    "lat": -33.92,
    "lon": 18.42,
    "continent": "Africa",
    "currency": "South African rand",
    "language": "Afrikaans",
    "food": "bobotie",
    "landmark": "Table Mountain",
    "spots": [
      "Cape Town International Airport",
      "Greenmarket Square",
      "Robben Island Museum"
    ],
    "flag": "a green Y-shape bordered in white and gold, with red, blue and black",
    "clues": {
      "easy": [
        "They were paying in South African rand.",
        "They were practicing Afrikaans with a taxi driver.",
        "They wanted bobotie in South Africa, then a sunset hike.",
        "They wanted the cable car up Table Mountain."
      ],
      "medium": [
        "Their flag: a green Y lying on its side, with red, blue, black, gold and white.",
        "They wanted to see African penguins waddling on Boulders Beach.",
        "They wanted to sail around the Cape of Good Hope.",
        "They asked about a flat-topped mountain that wears a tablecloth of cloud."
      ],
      "hard": [
        "They mentioned an island prison where Nelson Mandela spent 18 years.",
        "They said Jan van Riebeeck set up a ship-resupply station there in 1652.",
        "They said the country has three capitals, and this one hosts the parliament.",
        "They mentioned Christiaan Barnard, who performed the first human heart transplant there in 1967."
      ]
    },
    "poster": {
      "sky": [
        "#ffb88c",
        "#3a4a7a"
      ],
      "sun": "#ffe7a0",
      "ground": "#5a6b4a",
      "accent": "#007a4d",
      "motif": "mountains"
    },
    "facts": {
      "capitalOf": "South Africa (legislative capital)",
      "continent": "Africa",
      "timeZone": "SAST (UTC+2)",
      "founded": "1652 CE",
      "climate": "Mediterranean; dry summers, wet winters",
      "summary": "South Africa's oldest city and its legislative capital, set beneath flat-topped Table Mountain near the Cape of Good Hope. South Africa has three capitals: Pretoria (executive), Bloemfontein (judicial), and Cape Town.",
      "history": "Jan van Riebeeck founded a Dutch East India Company supply station here in 1652. Nelson Mandela was imprisoned on nearby Robben Island for 18 years before his release in 1990 and election as president in 1994.",
      "culture": "Boulders Beach is home to a colony of endangered African penguins. In 1967 Christiaan Barnard performed the world's first human heart transplant at the city's Groote Schuur Hospital."
    },
    "coords": {
      "x": 55,
      "y": 69
    }
  },
  {
    "id": "lagos",
    "name": "Lagos",
    "country": "Nigeria",
    "lat": 6.52,
    "lon": 3.38,
    "continent": "Africa",
    "currency": "Nigerian naira",
    "language": "Yoruba",
    "food": "jollof rice",
    "landmark": "the Lekki Conservation Centre canopy walk",
    "spots": [
      "Murtala Muhammed International Airport",
      "Balogun Market",
      "National Museum, Lagos"
    ],
    "flag": "green, white and green vertical stripes",
    "clues": {
      "easy": [
        "They were changing money into Nigerian naira.",
        "They were picking up Yoruba phrases and wanted a flight to Nigeria.",
        "They wanted smoky party jollof rice in Nigeria's biggest city.",
        "They wanted to cross the canopy walk at the Lekki Conservation Centre."
      ],
      "medium": [
        "Their flag: three vertical stripes, green, white, green.",
        "They wanted to visit the film sets of Nollywood.",
        "They asked about seeing Afrobeat at the Shrine, the club Fela Kuti made famous.",
        "They wanted to drive the Third Mainland Bridge across the lagoon."
      ],
      "hard": [
        "They said it was the national capital until 1991, when Abuja took over.",
        "They were reading Things Fall Apart by Chinua Achebe.",
        "They said they were going to the biggest city in Africa's most populous country.",
        "They mentioned Wole Soyinka, the first African to win the Nobel Prize in Literature."
      ]
    },
    "poster": {
      "sky": [
        "#ffcf6b",
        "#6b3a2a"
      ],
      "sun": "#fff4b8",
      "ground": "#2f6b4a",
      "accent": "#ff7b3a",
      "motif": "palms"
    },
    "facts": {
      "capitalOf": null,
      "continent": "Africa",
      "timeZone": "WAT (UTC+1)",
      "founded": "~15th century CE",
      "climate": "Tropical savanna; hot, humid, two rainy seasons",
      "summary": "Nigeria's largest city and one of the biggest in Africa, spread across islands and a lagoon on the Gulf of Guinea. Not the capital — Abuja is — but it is the country's commercial and cultural engine.",
      "history": "Originally a Yoruba settlement, Lagos was named by Portuguese traders for its lagoons. It became a British colony in 1861 and served as Nigeria's capital from independence in 1960 until 1991.",
      "culture": "Lagos is the heart of Nollywood, one of the world's largest film industries, and the birthplace of Afrobeat, pioneered by Fela Kuti. Balogun Market is one of West Africa's busiest markets."
    },
    "coords": {
      "x": 51,
      "y": 49
    }
  },
  {
    "id": "addis_ababa",
    "name": "Addis Ababa",
    "country": "Ethiopia",
    "lat": 9.03,
    "lon": 38.74,
    "continent": "Africa",
    "currency": "Ethiopian birr",
    "language": "Amharic",
    "food": "injera",
    "landmark": "the fossil skeleton Lucy",
    "spots": [
      "Bole International Airport",
      "Merkato",
      "National Museum of Ethiopia"
    ],
    "flag": "green, yellow and red horizontal stripes with a blue disc and yellow star",
    "clues": {
      "easy": [
        "They were changing money into Ethiopian birr.",
        "They were practicing Amharic, trying out the script.",
        "They wanted injera and spicy wat in Ethiopia's capital.",
        "They wanted to see Lucy, the 3.2-million-year-old fossil, in Ethiopia."
      ],
      "medium": [
        "Their flag: green, yellow and red stripes with a blue disc and a yellow star.",
        "They wanted a traditional coffee ceremony in the land where coffee was born.",
        "They wanted to get lost in Merkato, one of Africa's biggest open-air markets.",
        "They said the calendar there has 13 months and runs years behind the rest of the world."
      ],
      "hard": [
        "They said the city's name means new flower.",
        "They mentioned Abebe Bikila, who won the 1960 Olympic marathon barefoot.",
        "They talked about an army that crushed a European invasion at Adwa in 1896.",
        "They mentioned Emperor Haile Selassie and the African Union headquarters."
      ]
    },
    "poster": {
      "sky": [
        "#c8e6a0",
        "#3b4a6b"
      ],
      "sun": "#ffd23f",
      "ground": "#5a7a3a",
      "accent": "#da121a",
      "motif": "mountains"
    },
    "facts": {
      "capitalOf": "Ethiopia",
      "continent": "Africa",
      "timeZone": "EAT (UTC+3)",
      "founded": "1886 CE",
      "climate": "Subtropical highland; mild year-round",
      "summary": "Ethiopia's capital sits about 2,355 meters up in the highlands, among the highest capitals in the world. Its name means 'new flower' in Amharic, and it hosts the headquarters of the African Union.",
      "history": "Emperor Menelik II and Empress Taytu founded Addis Ababa in 1886. Ethiopia defeated an Italian invasion at the Battle of Adwa in 1896 and kept its independence through the colonial era, apart from an Italian occupation from 1936 to 1941.",
      "culture": "The National Museum holds Lucy, a 3.2-million-year-old early human ancestor found in 1974. Ethiopia uses its own calendar of 13 months and is widely regarded as the birthplace of coffee."
    },
    "coords": {
      "x": 61,
      "y": 47
    }
  },
  {
    "id": "mexico_city",
    "name": "Mexico City",
    "country": "Mexico",
    "lat": 19.43,
    "lon": -99.13,
    "continent": "North America",
    "currency": "Mexican pesos",
    "language": "Spanish",
    "food": "tacos al pastor",
    "landmark": "the pyramids of Teotihuacan",
    "spots": [
      "Benito Juárez International Airport",
      "Mercado de la Merced",
      "National Museum of Anthropology"
    ],
    "flag": "green, white and red vertical stripes with an eagle on a cactus eating a snake",
    "clues": {
      "easy": [
        "They were paying in Mexican pesos.",
        "They wanted tacos al pastor in Mexico's capital.",
        "They spoke Spanish and wanted to climb the pyramids of Teotihuacan.",
        "They asked for the night bus to the capital of Mexico."
      ],
      "medium": [
        "Their flag: green, white and red with an eagle on a cactus eating a snake.",
        "They wanted to see marigold altars for the Day of the Dead.",
        "They asked where to hire mariachis in Plaza Garibaldi.",
        "They wanted to visit Frida Kahlo's Blue House in Coyoacán."
      ],
      "hard": [
        "They said the city was built on top of Tenochtitlan, on an old lake bed.",
        "They mentioned Hernán Cortés and the fall of an empire in 1521.",
        "They talked about the 1968 Summer Olympics, the first held in Latin America.",
        "They said the city sits about 2,240 meters up and sinks a little more every year."
      ]
    },
    "poster": {
      "sky": [
        "#ff9f68",
        "#5b2a4a"
      ],
      "sun": "#ffe066",
      "ground": "#a0522d",
      "accent": "#2a9d8f",
      "motif": "pyramids"
    },
    "facts": {
      "capitalOf": "Mexico",
      "continent": "North America",
      "timeZone": "CST (UTC-6)",
      "founded": "1325 CE (as Tenochtitlan)",
      "climate": "Subtropical highland; mild with a summer rainy season",
      "summary": "Mexico's capital sits in a high valley about 2,240 meters above sea level, on the drained bed of Lake Texcoco. It is the largest Spanish-speaking city in the world.",
      "history": "The Aztecs founded Tenochtitlan on an island in the lake in 1325. Hernán Cortés and his allies conquered it in 1521, and the Spanish built their capital on its ruins. The city hosted the 1968 Summer Olympics.",
      "culture": "The National Museum of Anthropology holds the Aztec Sun Stone. The pyramids of Teotihuacan, about 50 km northeast, were built centuries before the Aztecs arrived."
    },
    "coords": {
      "x": 22,
      "y": 42
    }
  },
  {
    "id": "havana",
    "name": "Havana",
    "country": "Cuba",
    "lat": 23.11,
    "lon": -82.37,
    "continent": "North America",
    "currency": "Cuban pesos",
    "language": "Spanish",
    "food": "ropa vieja",
    "landmark": "the Malecón seawall",
    "spots": [
      "José Martí International Airport",
      "Hotel Nacional de Cuba",
      "Museum of the Revolution"
    ],
    "flag": "five blue and white stripes with a red triangle and a white star",
    "clues": {
      "easy": [
        "They were changing money into Cuban pesos.",
        "They wanted a plate of ropa vieja in Cuba's capital.",
        "They spoke Spanish and wanted a sunset stroll on the Malecón.",
        "They were after a box of hand-rolled cigars from Cuba."
      ],
      "medium": [
        "Their flag: blue and white stripes with a red triangle holding a white star.",
        "They wanted a ride in a two-tone 1950s convertible down the seafront.",
        "They wanted a daiquiri at El Floridita, Hemingway's old bar.",
        "They kept humming the Buena Vista Social Club and asking about salsa clubs."
      ],
      "hard": [
        "They talked about Fidel Castro's rebels rolling into the city in January 1959.",
        "They mentioned the 1962 missile crisis that nearly started a nuclear war.",
        "They said their destination lies only about 100 miles south of Key West.",
        "They were quoting José Martí, the poet who died fighting for independence in 1895."
      ]
    },
    "poster": {
      "sky": [
        "#ffb4a2",
        "#3d5a80"
      ],
      "sun": "#ffd166",
      "ground": "#3a7d7c",
      "accent": "#ef476f",
      "motif": "palms"
    },
    "facts": {
      "capitalOf": "Cuba",
      "continent": "North America",
      "timeZone": "CST (UTC-5)",
      "founded": "1519 CE",
      "climate": "Tropical savanna; warm year-round",
      "summary": "Cuba's capital on the island's north coast, facing the Florida Straits. Old Havana's colonial fortresses and plazas are a UNESCO World Heritage Site, and its seafront Malecón stretches about 8 km.",
      "history": "Spanish settlers moved the city to its present harbor site in 1519, and it became a key port for treasure fleets. Fidel Castro's revolution took power in 1959, and the Cuban Missile Crisis followed in 1962.",
      "culture": "Ernest Hemingway lived outside Havana for two decades and drank daiquiris at El Floridita. Classic 1950s American cars still serve as taxis on its streets."
    },
    "coords": {
      "x": 27,
      "y": 40
    }
  },
  {
    "id": "toronto",
    "name": "Toronto",
    "country": "Canada",
    "lat": 43.65,
    "lon": -79.38,
    "continent": "North America",
    "currency": "Canadian dollars",
    "language": "English",
    "food": "peameal bacon sandwiches",
    "landmark": "the CN Tower",
    "spots": [
      "Toronto Pearson International Airport",
      "St. Lawrence Market",
      "Royal Ontario Museum"
    ],
    "flag": "red and white with a red maple leaf",
    "clues": {
      "easy": [
        "They were paying in Canadian dollars.",
        "They wanted to ride up the CN Tower and walk its glass floor.",
        "They said they were bound for Canada's biggest city.",
        "They wanted a peameal bacon sandwich at the market, then a train across Canada."
      ],
      "medium": [
        "Their flag: red, white and red with a red maple leaf in the center.",
        "They wanted to visit the Hockey Hall of Fame and see the Stanley Cup.",
        "They asked about a day trip to the Horseshoe Falls at Niagara.",
        "They wanted to catch a Raptors game and buy maple syrup."
      ],
      "hard": [
        "They said the town was called York until it was renamed in 1834.",
        "They mentioned insulin, discovered at the university there by Banting and Best in 1921.",
        "They said the name comes from a Mohawk word meaning where trees stand in the water.",
        "They said it's the capital of Ontario, but not of the country."
      ]
    },
    "poster": {
      "sky": [
        "#c6dbf0",
        "#2b3a67"
      ],
      "sun": "#ffd97d",
      "ground": "#3d5a6c",
      "accent": "#d52b1e",
      "motif": "skyscrapers"
    },
    "facts": {
      "capitalOf": null,
      "continent": "North America",
      "timeZone": "EST (UTC-5)",
      "founded": "1793 CE (as York)",
      "climate": "Humid continental; cold winters, warm summers",
      "summary": "Canada's largest city and the capital of Ontario, on the shore of Lake Ontario. Not the national capital — Ottawa is. About half of its residents were born outside Canada.",
      "history": "The British founded the town of York in 1793; it was renamed Toronto when incorporated as a city in 1834. Frederick Banting and Charles Best discovered insulin at the University of Toronto in 1921.",
      "culture": "The CN Tower, completed in 1976, was the world's tallest freestanding structure for over 30 years. The Hockey Hall of Fame houses the Stanley Cup."
    },
    "coords": {
      "x": 28,
      "y": 30
    }
  },
  {
    "id": "lima",
    "name": "Lima",
    "country": "Peru",
    "lat": -12.05,
    "lon": -77.04,
    "continent": "South America",
    "currency": "Peruvian soles",
    "language": "Spanish",
    "food": "ceviche",
    "landmark": "Machu Picchu",
    "spots": [
      "Jorge Chávez International Airport",
      "Surquillo Market",
      "Larco Museum"
    ],
    "flag": "red, white and red vertical stripes",
    "clues": {
      "easy": [
        "They were changing money into Peruvian soles.",
        "They wanted fresh ceviche in Peru's capital.",
        "They spoke Spanish and said they'd go on to Machu Picchu.",
        "They asked for the first flight to the capital of Peru."
      ],
      "medium": [
        "Their flag: three vertical bands, red, white, red — and no maple leaf.",
        "They wanted to fly over the giant Nazca Lines in the desert.",
        "They asked about hiking the Inca Trail and seeing llamas and alpacas.",
        "They wanted to see Lake Titicaca and its floating reed islands."
      ],
      "hard": [
        "They said Francisco Pizarro founded it in 1535 as the City of Kings.",
        "They mentioned Mario Vargas Llosa, who won the Nobel Prize in Literature in 2010.",
        "They said it hardly ever rains there, just a grey sea fog called garúa.",
        "They said a famous marmalade-loving bear came from the darkest part of the country."
      ]
    },
    "poster": {
      "sky": [
        "#f2c094",
        "#4a4e69"
      ],
      "sun": "#ffe8a3",
      "ground": "#7a6a53",
      "accent": "#d91023",
      "motif": "mountains"
    },
    "facts": {
      "capitalOf": "Peru",
      "continent": "South America",
      "timeZone": "PET (UTC-5)",
      "founded": "1535 CE",
      "climate": "Mild coastal desert; foggy, almost rainless",
      "summary": "Peru's capital sits on a desert coast beside the Pacific. Thanks to the cold Humboldt Current it almost never rains, but a grey fog called garúa hangs over the city for much of the year.",
      "history": "Francisco Pizarro founded Lima in 1535 as the 'City of Kings,' and it became the seat of Spain's Viceroyalty of Peru, ruling most of Spanish South America. Peru declared independence in Lima in 1821.",
      "culture": "Lima is famed for ceviche and is often called the food capital of South America. Machu Picchu, the Inca citadel high in the Andes near Cusco, is Peru's most famous site."
    },
    "coords": {
      "x": 29,
      "y": 58
    }
  },
  {
    "id": "bogota",
    "name": "Bogotá",
    "country": "Colombia",
    "lat": 4.71,
    "lon": -74.07,
    "continent": "South America",
    "currency": "Colombian pesos",
    "language": "Spanish",
    "food": "ajiaco",
    "landmark": "Monserrate",
    "spots": [
      "El Dorado International Airport",
      "Paloquemao Market",
      "Gold Museum"
    ],
    "flag": "yellow, blue and red horizontal stripes, the yellow twice as wide",
    "clues": {
      "easy": [
        "They were changing money into Colombian pesos.",
        "They wanted a bowl of ajiaco soup in Colombia's capital.",
        "They spoke Spanish and wanted the cable car up Monserrate.",
        "They asked for a bus to the capital of Colombia, high in the mountains."
      ],
      "medium": [
        "Their flag: a wide yellow band over thinner blue and red bands.",
        "They wanted to see a museum holding tens of thousands of pre-Hispanic gold pieces.",
        "They asked about buying emeralds and the best mountain-grown coffee.",
        "They wanted to see the white church perched on a peak above the old Candelaria district."
      ],
      "hard": [
        "They talked about the legend of El Dorado and a gilded chief at Lake Guatavita.",
        "They were reading Gabriel García Márquez, One Hundred Years of Solitude.",
        "They said it was the capital of the vast republic Simón Bolívar founded in 1819.",
        "They said the city sits about 2,640 meters up, at roughly 4 degrees north of the equator."
      ]
    },
    "poster": {
      "sky": [
        "#b5d99c",
        "#2e3a5c"
      ],
      "sun": "#ffd100",
      "ground": "#3f6b4f",
      "accent": "#ce1126",
      "motif": "mountains"
    },
    "facts": {
      "capitalOf": "Colombia",
      "continent": "South America",
      "timeZone": "COT (UTC-5)",
      "founded": "1538 CE",
      "climate": "Subtropical highland; cool and rainy",
      "summary": "Colombia's capital sits on a high Andean plateau about 2,640 meters above sea level, making it one of the highest capitals in the world. It is overlooked by the peak of Monserrate.",
      "history": "Gonzalo Jiménez de Quesada founded Santa Fe de Bogotá in 1538 on the site of a Muisca settlement. After independence it was the capital of Simón Bolívar's Gran Colombia (1819-1831).",
      "culture": "The Gold Museum holds over 30,000 gold objects from pre-Hispanic cultures, linked to the legend of El Dorado. Nobel laureate Gabriel García Márquez studied in Bogotá."
    },
    "coords": {
      "x": 29,
      "y": 50
    }
  },
  {
    "id": "santiago",
    "name": "Santiago",
    "country": "Chile",
    "lat": -33.45,
    "lon": -70.67,
    "continent": "South America",
    "currency": "Chilean pesos",
    "language": "Spanish",
    "food": "pastel de choclo",
    "landmark": "the snowcapped Andes",
    "spots": [
      "Arturo Merino Benítez International Airport",
      "Mercado Central",
      "Chilean Museum of Pre-Columbian Art"
    ],
    "flag": "white over red with a blue square and a white star",
    "clues": {
      "easy": [
        "They were changing money into Chilean pesos.",
        "They wanted pastel de choclo in the capital of Chile.",
        "They spoke Spanish and wanted to ski the Andes from Chile's capital.",
        "They asked for the night flight to Chile."
      ],
      "medium": [
        "Their flag: white over red, with a blue square and a single white star.",
        "They asked how to get to Easter Island to see the moai.",
        "They wanted to stargaze in the Atacama, the driest desert on Earth.",
        "They said they'd visit the poet Pablo Neruda's house on San Cristóbal Hill."
      ],
      "hard": [
        "They said the country is over 4,000 km long but rarely more than 200 km wide.",
        "They mentioned the 1960 Valdivia earthquake, the strongest ever recorded.",
        "They said Pedro de Valdivia founded the city in 1541.",
        "They were quoting Gabriela Mistral, the first Latin American to win the Nobel in Literature."
      ]
    },
    "poster": {
      "sky": [
        "#f7a072",
        "#3a3f6b"
      ],
      "sun": "#ffe5b4",
      "ground": "#5c4b6b",
      "accent": "#0039a6",
      "motif": "mountains"
    },
    "facts": {
      "capitalOf": "Chile",
      "continent": "South America",
      "timeZone": "CLT (UTC-4)",
      "founded": "1541 CE",
      "climate": "Mediterranean; warm dry summers, cool wet winters",
      "summary": "Chile's capital lies in a central valley with the snowcapped Andes rising to the east. Chile itself stretches over 4,000 km along South America's Pacific coast while averaging under 200 km wide.",
      "history": "Spanish conquistador Pedro de Valdivia founded Santiago in 1541. Chile won independence from Spain in 1818. The 1960 Valdivia earthquake in southern Chile was the most powerful ever recorded.",
      "culture": "Poets Gabriela Mistral and Pablo Neruda both won the Nobel Prize in Literature; Neruda's house La Chascona sits at the foot of San Cristóbal Hill. Ski resorts lie about an hour from downtown."
    },
    "coords": {
      "x": 30,
      "y": 69
    }
  },
  {
    "id": "auckland",
    "name": "Auckland",
    "country": "New Zealand",
    "lat": -36.85,
    "lon": 174.76,
    "continent": "Oceania",
    "currency": "New Zealand dollars",
    "language": "English and Māori",
    "food": "hāngī",
    "landmark": "the Sky Tower",
    "spots": [
      "Auckland Airport",
      "Auckland Fish Market",
      "Auckland War Memorial Museum"
    ],
    "flag": "blue with the Union Jack and four red stars of the Southern Cross",
    "clues": {
      "easy": [
        "They were paying in New Zealand dollars.",
        "They said kia ora and asked about learning Māori.",
        "They wanted to try a hāngī, food cooked in an earth oven, in New Zealand.",
        "They wanted to bungee jump off the Sky Tower."
      ],
      "medium": [
        "Their flag: blue with a Union Jack and four red stars outlined in white.",
        "They wanted to see the All Blacks perform the haka before a rugby match.",
        "They asked where to spot a kiwi bird and how to visit the Hobbiton movie set.",
        "They called their destination the City of Sails and wanted a yacht on the harbour."
      ],
      "hard": [
        "They said the city is built on a field of about 50 volcanoes.",
        "They mentioned the first country to give women the vote, in 1893.",
        "They talked about Edmund Hillary, whose face is on the five-dollar note.",
        "They mentioned Ernest Rutherford, the physicist who first split the atom."
      ]
    },
    "poster": {
      "sky": [
        "#9ee3d0",
        "#264653"
      ],
      "sun": "#ffe08a",
      "ground": "#2a6f4f",
      "accent": "#e76f51",
      "motif": "volcano"
    },
    "facts": {
      "capitalOf": null,
      "continent": "Oceania",
      "timeZone": "NZST (UTC+12)",
      "founded": "1840 CE",
      "climate": "Temperate oceanic; mild and humid",
      "summary": "New Zealand's largest city, set on an isthmus between two harbors and built over a field of about 50 volcanoes. Not the capital — Wellington is. Its many yachts earn it the nickname 'City of Sails.'",
      "history": "Māori settled the isthmus, which they called Tāmaki Makaurau, centuries before Europeans arrived. Auckland was founded in 1840 and served as the colony's capital until 1865, when Wellington took over.",
      "culture": "New Zealand became the first self-governing country to grant women the vote in 1893. The Sky Tower, completed in 1997, is the tallest freestanding structure in the Southern Hemisphere."
    },
    "coords": {
      "x": 99,
      "y": 70
    }
  }
];

export default CITIES;
