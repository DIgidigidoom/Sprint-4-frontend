export function seedStationsToLocalStorage() {
  const STORAGE_KEY = 'stationDB'


  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stations))
    console.log(`✅ Seeded ${stations.length} stations to localStorage`)
  } else {
    console.log('ℹ️ Stations already exist in localStorage, skipping seed.')
  }
}

export const stations = [
  {
    "_id": "c2f36bbbdd74",
    "type" : "playlist",
    "name": "Jazz & Chill",
    "tags": ["Jazz", "Relax"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "jazzNchill_okhsih" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "TLDflhhdPCg",
        "title": "Blue in Green",
        "url": "TLDflhhdPCg",
        "imgUrl": "https://i.ytimg.com/vi/TLDflhhdPCg/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Miles Davis",
        "album": "Kind of Blue",
        "duration": 326
      },
      {
        "id": "ylXk1LBvIqU",
        "title": "So What",
        "url": "ylXk1LBvIqU",
        "imgUrl": "https://i.ytimg.com/vi/ylXk1LBvIq/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Miles Davis",
        "album": "Kind of Blue",
        "duration": 545
      },
      {
        "id": "vmDDOFXSgAs",
        "title": "Take Five",
        "url": "vmDDOFXSgAs",
        "imgUrl": "https://i.ytimg.com/vi/vmDDOFXSgAs/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "The Dave Brubeck Quartet",
        "album": "Time Out",
        "duration": 324
      },
      {
        "id": "CpB7-8SGlJ0",
        "title": "Autumn Leaves - Cannonball Adderley",
        "url": "CpB7-8SGlJ0",
        "imgUrl": "https://i.ytimg.com/vi/CpB7-8SGlJ0/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Cannonball Adderley",
        "album": "Somethin' Else",
        "duration": 689
      },
      {
        "id": "z4PKzz81m5c",
        "title": "Chet Baker - Almost Blue",
        "url": "z4PKzz81m5c",
        "imgUrl": "https://i.ytimg.com/vi/z4PKzz81m5c/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Chet Baker",
        "album": "Chet Baker Sings and Plays",
        "duration": 240
      }
    ],
    "msgs": [
      { "id": "ma9e79a0912ee", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "190c4c7d4071",
    "type" : "playlist",
    "name": "Rock Classics",
    "tags": ["Rock", "Legends"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "rockclassics_wt0e6h" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "QkF3oxziUI4",
        "title": "Stairway to Heaven",
        "url": "QkF3oxziUI4",
        "imgUrl": "https://i.ytimg.com/vi/QkF3oxziUI4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Led Zeppelin",
        "album": "Led Zeppelin IV",
        "duration": 482
      },
      {
        "id": "fJ9rUzIMcZQ",
        "title": "Bohemian Rhapsody",
        "url": "fJ9rUzIMcZQ",
        "imgUrl": "https://i.ytimg.com/vi/fJ9rUzIMcZQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Queen",
        "album": "A Night at the Opera",
        "duration": 355
      }
    ],
    "msgs": [
      { "id": "mc63a2efa25e9", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "d86fe95a7743",
    "type" : "playlist",
    "name": "Workout Boost",
    "tags": ["Workout", "Energy"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "workoutboosy_gstrn6" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "btPJPFnesV4",
        "title": "Eye of the Tiger",
        "url": "btPJPFnesV4",
        "imgUrl": "https://i.ytimg.com/vi/btPJPFnesV4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Survivor",
        "album": "Eye of the Tiger",
        "duration": 245
      },
      {
        "id": "AJtDXIazrMo",
        "title": "Stronger",
        "url": "AJtDXIazrMo",
        "imgUrl": "https://i.ytimg.com/vi/AJtDXIazrMo/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Kanye West",
        "album": "Graduation",
        "duration": 311
      }
    ],
    "msgs": [
      { "id": "mfbcfe05c1218", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "b277701f83e5",
    "type" : "playlist",
    "name": "Lofi Moods",
    "tags": ["Lofi", "Study"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "Lofi_Moods_cqwysk" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "hHW1oY26kxQ",
        "title": "lucky day",
        "url": "hHW1oY26kxQ",
        "imgUrl": "https://i.ytimg.com/vi/hHW1oY26kxQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Oddyssey",
        "album": "Lofi Chill",
        "duration": 178
      },
      {
        "id": "5qap5aO4i9A",
        "title": "dreamscape",
        "url": "5qap5aO4i9A",
        "imgUrl": "https://i.ytimg.com/vi/5qap5aO4i9A/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Chillhop Music",
        "album": "Chillhop Essentials",
        "duration": 1200
      }
    ],
    "msgs": [
      { "id": "mce33418fc9a2", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "50fad7a73dc3",
    "type" : "playlist",
    "name": "Classical Calm",
    "tags": ["Classical", "Piano"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "classicalcalm_v0uct2" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "ea2WoUtbzuw",
        "title": "Clair de Lune",
        "url": "ea2WoUtbzuw",
        "imgUrl": "https://i.ytimg.com/vi/ea2WoUtbzuw/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Claude Debussy",
        "album": "Suite bergamasque",
        "duration": 297
      },
      {
        "id": "4Tr0otuiQuU",
        "title": "Moonlight Sonata",
        "url": "4Tr0otuiQuU",
        "imgUrl": "https://i.ytimg.com/vi/4Tr0otuiQuU/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Ludwig van Beethoven",
        "album": "Moonlight Sonata",
        "duration": 900
      }
    ],
    "msgs": [
      { "id": "m671ea5deac22", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "734278733651",
    "type" : "playlist",
    "name": "Reggae Vibes",
    "tags": ["Reggae", "Chill"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "ReggaeVibes_o7clhl" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "LanCLS_hIo4",
        "title": "Three Little Birds",
        "url": "LanCLS_hIo4",
        "imgUrl": "https://i.ytimg.com/vi/LanCLS_hIo4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Bob Marley",
        "album": "Exodus",
        "duration": 180
      },
      {
        "id": "zXt56MB-3vc",
        "title": "Red Red Wine",
        "url": "zXt56MB-3vc",
        "imgUrl": "https://i.ytimg.com/vi/zXt56MB-3vc/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "UB40",
        "album": "Labour of Love",
        "duration": 210
      }
    ],
    "msgs": [
      { "id": "m1c9ad01a9f0f", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "ea6685e71e6d",
    "type" : "playlist",
    "name": "Electronic Pulse",
    "tags": ["EDM", "Party"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "ElectronicPulse_kcqv36" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "gCYcHz2k5x0",
        "title": "Animals",
        "url": "gCYcHz2k5x0",
        "imgUrl": "https://i.ytimg.com/vi/gCYcHz2k5x0/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Martin Garrix",
        "album": "Animals",
        "duration": 301
      },
      {
        "id": "Uj1ykZWtPYI",
        "title": "Levels",
        "url": "Uj1ykZWtPYI",
        "imgUrl": "https://i.ytimg.com/vi/Uj1ykZWtPYI/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370,
        "artist": "Avicii",
        "album": "Levels",
        "duration": 227
      }
    ],
    "msgs": [
      { "id": "m7df36a545b9d", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "93154d18e8c4",
    "type" : "playlist",
    "name": "Pop Hits",
    "tags": ["Pop", "Top 40"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "PopHits_xi3nbd" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "fHI8X4OXluQ",
        "title": "Blinding Lights",
        "url": "fHI8X4OXluQ",
        "imgUrl": "https://i.ytimg.com/vi/fHI8X4OXluQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007371,
        "artist": "The Weeknd",
        "album": "After Hours",
        "duration": 200
      },
      {
        "id": "TUVcZfQe-Kw",
        "title": "Levitating",
        "url": "TUVcZfQe-Kw",
        "imgUrl": "https://i.ytimg.com/vi/TUVcZfQe-Kw/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007371,
        "artist": "Dua Lipa",
        "album": "Future Nostalgia",
        "duration": 203
      }
    ],
    "msgs": [
      { "id": "m110d241da69b", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "581e59c62645",
    "type" : "playlist",
    "name": "Soulful Sundays",
    "tags": ["Soul", "Smooth"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "SoulfulSundays_syks3t" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "tIdIqbv7SPo",
        "title": "Ain’t No Sunshine",
        "url": "tIdIqbv7SPo",
        "imgUrl": "https://i.ytimg.com/vi/tIdIqbv7SPo/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007371,
        "artist": "Bill Withers",
        "album": "Just As I Am",
        "duration": 124
      },
      {
        "id": "COiIC3A0ROM",
        "title": "Let’s Stay Together",
        "url": "COiIC3A0ROM",
        "imgUrl": "https://i.ytimg.com/vi/COiIC3A0ROM/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007371,
        "artist": "Al Green",
        "album": "Let's Stay Together",
        "duration": 217
      }
    ],
    "msgs": [
      { "id": "ma9e303ee3504", "from": "{mini-user}", "txt": "Awesome vibes!" }
    ]
  },
  {
    "_id": "db3acaae283a",
    "type" : "album",
    "name": "Led Zeppelin Essentials",
    "tags": ["Rock", "Essential", "Led Zeppelin"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "ledzeppelin_ugkqoa" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "XkqvH5v-jtU",
        "title": "Kashmir",
        "url": "XkqvH5v-jtU",
        "imgUrl": "https://i.ytimg.com/vi/XkqvH5v-jtU/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Led Zeppelin",
        "album": "Physical Graffiti",
        "duration": 515
      },
      {
        "id": "QkF3oxziUI4",
        "title": "Stairway to Heaven",
        "url": "QkF3oxziUI4",
        "imgUrl": "https://i.ytimg.com/vi/QkF3oxziUI4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Led Zeppelin",
        "album": "Led Zeppelin IV",
        "duration": 482
      },
      {
        "id": "HQmmM_qwG4k",
        "title": "Whole Lotta Love",
        "url": "HQmmM_qwG4k",
        "imgUrl": "https://i.ytimg.com/vi/HQmmM_qwG4k/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Led Zeppelin",
        "album": "Led Zeppelin II",
        "duration": 333
      },
      {
        "id": "RlNhD0oS5pk",
        "title": "Immigrant Song",
        "url": "RlNhD0oS5pk",
        "imgUrl": "https://i.ytimg.com/vi/RlNhD0oS5pk/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Led Zeppelin",
        "album": "Led Zeppelin III",
        "duration": 145
      },
      {
        "id": "6tlSx0jkuLM",
        "title": "Black Dog",
        "url": "6tlSx0jkuLM",
        "imgUrl": "https://i.ytimg.com/vi/6tlSx0jkuLM/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Led Zeppelin",
        "album": "Led Zeppelin IV",
        "duration": 296
      }
    ],
    "msgs": [{ "id": "67fdd7e6ff1d4", "from": "{mini-user}", "txt": "Led Zeppelin rocks!" }]
  },
  {
    "_id": "1ba7b03b018d",
    "type" : "album",
    "name": "Pink Floyd Essentials",
    "tags": ["Rock", "Essential", "Pink Floyd"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "pink_floyd_bbjyas" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "_FrOQC-zEog",
        "title": "Comfortably Numb",
        "url": "_FrOQC-zEog",
        "imgUrl": "https://i.ytimg.com/vi/_FrOQC-zEog/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Pink Floyd",
        "album": "The Wall",
        "duration": 384
      },
      {
        "id": "9jZ-yH6gzjU",
        "title": "Shine On You Crazy Diamond",
        "url": "9jZ-yH6gzjU",
        "imgUrl": "https://i.ytimg.com/vi/9jZ-yH6gzjU/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Pink Floyd",
        "album": "Wish You Were Here",
        "duration": 810
      },
      {
        "id": "JwYX52BP2Sk",
        "title": "Time",
        "url": "JwYX52BP2Sk",
        "imgUrl": "https://i.ytimg.com/vi/JwYX52BP2Sk/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Pink Floyd",
        "album": "The Dark Side of the Moon",
        "duration": 412
      },
      {
        "id": "IXdNnw99-Ic",
        "title": "Wish You Were Here",
        "url": "IXdNnw99-Ic",
        "imgUrl": "https://i.ytimg.com/vi/IXdNnw99-Ic/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Pink Floyd",
        "album": "Wish You Were Here",
        "duration": 334
      },
      {
        "id": "cpbbuaIA3Ds",
        "title": "Money",
        "url": "cpbbuaIA3Ds",
        "imgUrl": "https://i.ytimg.com/vi/cpbbuaIA3Ds/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417501,
        "artist": "Pink Floyd",
        "album": "The Dark Side of the Moon",
        "duration": 382
      }
    ],
    "msgs": [{ "id": "f4ffe9a8de874", "from": "{mini-user}", "txt": "Pink Floyd rocks!" }]
  },
  {
    "_id": "65638b90bbf2",
    "type" : "album",
    "name": "Muse Essentials",
    "tags": ["Rock", "Essential", "Muse"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "muse_ygjmw3" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "G_sBOsh-vyI",
        "title": "Knights of Cydonia",
        "url": "G_sBOsh-vyI",
        "imgUrl": "https://i.ytimg.com/vi/G_sBOsh-vyI/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Muse",
        "album": "Black Holes and Revelations",
        "duration": 366
      },
      {
        "id": "UXTlczyWJ-Y",
        "title": "Hysteria",
        "url": "UXTlczyWJ-Y",
        "imgUrl": "https://i.ytimg.com/vi/UXTlczyWJ-Y/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Muse",
        "album": "Absolution",
        "duration": 230
      },
      {
        "id": "dbB-mICjkQM",
        "title": "Plug In Baby",
        "url": "dbB-mICjkQM",
        "imgUrl": "https://i.ytimg.com/vi/dbB-mICjkQM/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Muse",
        "album": "Origin of Symmetry",
        "duration": 218
      },
      {
        "id": "w8KQmps-Sog",
        "title": "Uprising",
        "url": "w8KQmps-Sog",
        "imgUrl": "https://i.ytimg.com/vi/w8KQmps-Sog/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Muse",
        "album": "The Resistance",
        "duration": 304
      },
      {
        "id": "dt8VnJjXef0",
        "title": "Map of the Problematique",
        "url": "dt8VnJjXef0",
        "imgUrl": "https://i.ytimg.com/vi/dt8VnJjXef0/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Muse",
        "album": "Black Holes and Revelations",
        "duration": 292
      }
    ],
    "msgs": [{ "id": "1b04cc5650d04", "from": "{mini-user}", "txt": "Muse rocks!" }]
  },
  {
    "_id": "fc509f5781c0",
    "type" : "album",
    "name": "Queens of the Stone Age Essentials",
    "tags": ["Rock", "Essential", "Queens of the Stone Age"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "qotsa_fqnowt" },
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "s88r_q7oufE",
        "title": "No One Knows",
        "url": "s88r_q7oufE",
        "imgUrl": "https://i.ytimg.com/vi/s88r_q7oufE/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Queens of the Stone Age",
        "album": "Songs for the Deaf",
        "duration": 267
      },
      {
        "id": "DcHKOC64KnE",
        "title": "Go with the Flow",
        "url": "DcHKOC64KnE",
        "imgUrl": "https://i.ytimg.com/vi/DcHKOC64KnE/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Queens of the Stone Age",
        "album": "Songs for the Deaf",
        "duration": 200
      },
      {
        "id": "KviAVKpfrbA",
        "title": "Little Sister",
        "url": "KviAVKpfrbA",
        "imgUrl": "https://i.ytimg.com/vi/KviAVKpfrbA/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Queens of the Stone Age",
        "album": "Lullabies to Paralyze",
        "duration": 168
      },
      {
        "id": "RdBcfRhzzAA",
        "title": "The Lost Art of Keeping a Secret",
        "url": "RdBcfRhzzAA",
        "imgUrl": "https://i.ytimg.com/vi/RdBcfRhzzAA/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Queens of the Stone Age",
        "album": "Rated R",
        "duration": 217
      },
      {
        "id": "eVGyJ3Jlc5c",
        "title": "First It Giveth",
        "url": "eVGyJ3Jlc5c",
        "imgUrl": "https://i.ytimg.com/vi/eVGyJ3Jlc5c/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417502,
        "artist": "Queens of the Stone Age",
        "album": "Songs for the Deaf",
        "duration": 205
      }
    ],
    "msgs": [{ "id": "06f28228dc614", "from": "{mini-user}", "txt": "Queens of the Stone Age rocks!" }]
  },
  {
    "_id": "ba64db6f9aab",
    "type" : "album",
    "name": "Biffy Clyro Essentials",
    "tags": ["Rock", "Essential", "Biffy Clyro"],
    "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "biffyclyro_jcwnzm"},
    "likedByUsers": ["{minimal-user}", "{minimal-user}"],
    "songs": [
      {
        "id": "m1tZgPZf1fw",
        "title": "Many of Horror",
        "url": "m1tZgPZf1fw",
        "imgUrl": "https://i.ytimg.com/vi/m1tZgPZf1fw/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417503,
        "artist": "Biffy Clyro",
        "album": "Only Revolutions",
        "duration": 274
      },
      {
        "id": "WgZJ_Wk1Uk4",
        "title": "Mountains",
        "url": "WgZJ_Wk1Uk4",
        "imgUrl": "https://i.ytimg.com/vi/WgZJ_Wk1Uk4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417503,
        "artist": "Biffy Clyro",
        "album": "Only Revolutions",
        "duration": 222
      },
      {
        "id": "Tm8LGxTLtQk",
        "title": "Black Chandelier",
        "url": "Tm8LGxTLtQk",
        "imgUrl": "https://i.ytimg.com/vi/Tm8LGxTLtQk/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417503,
        "artist": "Biffy Clyro",
        "album": "Opposites",
        "duration": 258
      },
      {
        "id": "ZUyDCuq8yqM",
        "title": "Bubbles",
        "url": "ZUyDCuq8yqM",
        "imgUrl": "https://i.ytimg.com/vi/ZUyDCuq8yqM/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417503,
        "artist": "Biffy Clyro",
        "album": "Only Revolutions",
        "duration": 244
      },
      {
        "id": "oOVMdwfQZmk",
        "title": "Biblical",
        "url": "oOVMdwfQZmk",
        "imgUrl": "https://i.ytimg.com/vi/oOVMdwfQZmk/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1747210417503,
        "artist": "Biffy Clyro",
        "album": "Opposites",
        "duration": 241
      }
    ],
    "msgs": [{ "id": "cade04270c214", "from": "{mini-user}", "txt": "Biffy Clyro rocks!" }]
  },
  {
  "_id": "0de87268ae9c",
  "type" : "album",
  "name": "Rihanna Essentials",
  "tags": ["Pop", "Essential", "Rihanna"],
  "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "rihanah_smfacv" },
  "likedByUsers": ["{minimal-user}", "{minimal-user}"],
  "songs": [
    {
      "id": "uU7j3KkV1FY",
      "title": "Diamonds",
      "url": "uU7j3KkV1FY",
      "imgUrl": "https://i.ytimg.com/vi/uU7j3KkV1FY/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978737,
      "artist": "Rihanna",
      "album": "Unapologetic",
      "duration": 263
    },
    {
      "id": "CvBfHwUxHIk",
      "title": "Stay",
      "url": "CvBfHwUxHIk",
      "imgUrl": "https://i.ytimg.com/vi/CvBfHwUxHIk/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978737,
      "artist": "Rihanna",
      "album": "Unapologetic",
      "duration": 240
    },
    {
      "id": "ehcVomMexkY",
      "title": "We Found Love",
      "url": "ehcVomMexkY",
      "imgUrl": "https://i.ytimg.com/vi/ehcVomMexkY/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978737,
      "artist": "Rihanna",
      "album": "Talk That Talk",
      "duration": 220
    },
    {
      "id": "HBxt_v0WF6Y",
      "title": "Only Girl (In The World)",
      "url": "HBxt_v0WF6Y",
      "imgUrl": "https://i.ytimg.com/vi/HBxt_v0WF6Y/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978737,
      "artist": "Rihanna",
      "album": "Loud",
      "duration": 244
    },
    {
      "id": "XPpTgCho5ZA",
      "title": "Umbrella",
      "url": "XPpTgCho5ZA",
      "imgUrl": "https://i.ytimg.com/vi/XPpTgCho5ZA/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978737,
      "artist": "Rihanna",
      "album": "Good Girl Gone Bad",
      "duration": 265
    }
  ],
  "msgs": [{ "id": "5720298b8b244", "from": "{mini-user}", "txt": "Rihanna hits different!" }]
},
{
  "_id": "b47f701bf6f8",
  "type" : "album",
  "name": "Justin Timberlake Essentials",
  "tags": ["Pop", "Essential", "Justin Timberlake"],
  "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "justin_jzufds" },
  "likedByUsers": ["{minimal-user}", "{minimal-user}"],
  "songs": [
    {
      "id": "bSfXf9QqE28",
      "title": "Mirrors",
      "url": "bSfXf9QqE28",
      "imgUrl": "https://i.ytimg.com/vi/bSfXf9QqE28/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Justin Timberlake",
      "album": "The 20/20 Experience",
      "duration": 500
    },
    {
      "id": "3JZ4pnNtyxQ",
      "title": "Can't Stop The Feeling!",
      "url": "3JZ4pnNtyxQ",
      "imgUrl": "https://i.ytimg.com/vi/3JZ4pnNtyxQ/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Justin Timberlake",
      "album": "Trolls OST",
      "duration": 236
    },
    {
      "id": "W6RgU-UXB-0",
      "title": "SexyBack",
      "url": "W6RgU-UXB-0",
      "imgUrl": "https://i.ytimg.com/vi/W6RgU-UXB-0/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Justin Timberlake",
      "album": "FutureSex/LoveSounds",
      "duration": 260
    },
    {
      "id": "nO5mccQz2fY",
      "title": "Cry Me a River",
      "url": "nO5mccQz2fY",
      "imgUrl": "https://i.ytimg.com/vi/nO5mccQz2fY/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Justin Timberlake",
      "album": "Justified",
      "duration": 290
    },
    {
      "id": "4m48GqaOz90",
      "title": "Rock Your Body",
      "url": "4m48GqaOz90",
      "imgUrl": "https://i.ytimg.com/vi/4m48GqaOz90/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Justin Timberlake",
      "album": "Justified",
      "duration": 268
    }
  ],
  "msgs": [{ "id": "07339c2ee1644", "from": "{mini-user}", "txt": "Justin Timberlake hits different!" }]
},
{
  "_id": "67d145dabba4",
  "type" : "album",
  "name": "Michael Jackson Essentials",
  "tags": ["Pop", "Essential", "Michael Jackson"],
  "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "jackson_pzqdgu" },
  "likedByUsers": ["{minimal-user}", "{minimal-user}"],
  "songs": [
    {
      "id": "Zi_XLOBDo_Y",
      "title": "Billie Jean",
      "url": "Zi_XLOBDo_Y",
      "imgUrl": "https://i.ytimg.com/vi/Zi_XLOBDo_Y/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Michael Jackson",
      "album": "Thriller",
      "duration": 294
    },
    {
      "id": "sOnqjkJTMaA",
      "title": "Thriller",
      "url": "sOnqjkJTMaA",
      "imgUrl": "https://i.ytimg.com/vi/sOnqjkJTMaA/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Michael Jackson",
      "album": "Thriller",
      "duration": 357
    },
    {
      "id": "h_D3VFfhvs4",
      "title": "Beat It",
      "url": "h_D3VFfhvs4",
      "imgUrl": "https://i.ytimg.com/vi/h_D3VFfhvs4/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Michael Jackson",
      "album": "Thriller",
      "duration": 258
    },
    {
      "id": "5X-Mrc2l1d0",
      "title": "Man in the Mirror",
      "url": "5X-Mrc2l1d0",
      "imgUrl": "https://i.ytimg.com/vi/5X-Mrc2l1d0/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Michael Jackson",
      "album": "Bad",
      "duration": 303
    },
    {
      "id": "C-blEgMyJwU",
      "title": "Smooth Criminal",
      "url": "C-blEgMyJwU",
      "imgUrl": "https://i.ytimg.com/vi/C-blEgMyJwU/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978738,
      "artist": "Michael Jackson",
      "album": "Bad",
      "duration": 257
    }
  ],
  "msgs": [{ "id": "eb92ba6021b24", "from": "{mini-user}", "txt": "Michael Jackson hits different!" }]
},

{
  "_id": "fa24802f275e",
  "type" : "album",
  "name": "Beyoncé Essentials",
  "tags": ["Pop", "Essential", "Beyoncé"],
  "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "beyonce_kxezil" },
  "likedByUsers": ["{minimal-user}", "{minimal-user}"],
  "songs": [
    {
      "id": "ViwtNLUqkMY",
      "title": "Halo",
      "url": "ViwtNLUqkMY",
      "imgUrl": "https://i.ytimg.com/vi/ViwtNLUqkMY/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Beyoncé",
      "album": "I Am... Sasha Fierce",
      "duration": 261
    },
    {
      "id": "WDZJPJV__bQ",
      "title": "Single Ladies",
      "url": "WDZJPJV__bQ",
      "imgUrl": "https://i.ytimg.com/vi/WDZJPJV__bQ/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Beyoncé",
      "album": "I Am... Sasha Fierce",
      "duration": 193
    },
    {
      "id": "4m1EFMoRFvY",
      "title": "Crazy In Love",
      "url": "4m1EFMoRFvY",
      "imgUrl": "https://i.ytimg.com/vi/4m1EFMoRFvY/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Beyoncé",
      "album": "Dangerously in Love",
      "duration": 235
    },
    {
      "id": "Ob7vObnFUJc",
      "title": "Love On Top",
      "url": "Ob7vObnFUJc",
      "imgUrl": "https://i.ytimg.com/vi/Ob7vObnFUJc/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Beyoncé",
      "album": "4",
      "duration": 267
    },
    {
      "id": "LXXQLa-5n5w",
      "title": "Drunk in Love",
      "url": "LXXQLa-5n5w",
      "imgUrl": "https://i.ytimg.com/vi/LXXQLa-5n5w/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Beyoncé",
      "album": "Beyoncé",
      "duration": 321
    }
  ],
  "msgs": [{ "id": "2f0f71eba8044", "from": "{mini-user}", "txt": "Beyoncé hits different!" }]
},
{
  "_id": "72794c955084",
  "type" : "album",
  "name": "Ed Sheeran Essentials",
  "tags": ["Pop", "Essential", "Ed Sheeran"],
  "createdBy": { "_id": "u101", "fullname": "Spotify", "imgUrl": "sheeran_kmm8sm" },
  "likedByUsers": ["{minimal-user}", "{minimal-user}"],
  "songs": [
    {
      "id": "JGwWNGJdvx8",
      "title": "Shape of You",
      "url": "JGwWNGJdvx8",
      "imgUrl": "https://i.ytimg.com/vi/JGwWNGJdvx8/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Ed Sheeran",
      "album": "Divide",
      "duration": 234
    },
    {
      "id": "2Vv-BfVoq4g",
      "title": "Perfect",
      "url": "2Vv-BfVoq4g",
      "imgUrl": "https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Ed Sheeran",
      "album": "Divide",
      "duration": 263
    },
    {
      "id": "UAWcs5H-qgQ",
      "title": "Thinking Out Loud",
      "url": "UAWcs5H-qgQ",
      "imgUrl": "https://i.ytimg.com/vi/UAWcs5H-qgQ/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Ed Sheeran",
      "album": "x",
      "duration": 281
    },
    {
      "id": "lp-EO5I60KA",
      "title": "Photograph",
      "url": "lp-EO5I60KA",
      "imgUrl": "https://i.ytimg.com/vi/lp-EO5I60KA/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Ed Sheeran",
      "album": "x",
      "duration": 258
    },
    {
      "id": "0owj0CiM8WU",
      "title": "Castle on the Hill",
      "url": "0owj0CiM8WU",
      "imgUrl": "https://i.ytimg.com/vi/0owj0CiM8WU/mqdefault.jpg",
      "addedBy": "{minimal-user}",
      "likedBy": ["{minimal-user}"],
      "addedAt": 1747210978739,
      "artist": "Ed Sheeran",
      "album": "Divide",
      "duration": 261
    }
  ],
  "msgs": [{ "id": "f48958a96a034", "from": "{mini-user}", "txt": "Ed Sheeran hits different!" }]
}



]


