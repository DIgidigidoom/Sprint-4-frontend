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
  }
]


