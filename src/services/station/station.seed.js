export function seedStationsToLocalStorage() {
  const STORAGE_KEY = 'stationDB'

  // Only seed if not already present
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
    "tags": [
      "Jazz",
      "Relax"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "TLDflhhdPCg",
        "title": "Blue in Green",
        "url": "TLDflhhdPCg",
        "imgUrl": "https://i.ytimg.com/vi/TLDflhhdPCg/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      },
      {
        "id": "ylXk1LBvIqU",
        "title": "So What",
        "url": "ylXk1LBvIqU",
        "imgUrl": "https://i.ytimg.com/vi/ylXk1LBvIq/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      },
      {
        "id": "vmDDOFXSgAs",
        "title": "Take Five",
        "url": "vmDDOFXSgAs",
        "imgUrl": "https://i.ytimg.com/vi/vmDDOFXSgAs/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370
      },
      {
        "id": "CpB7-8SGlJ0",
        "title": "Autumn Leaves - Cannonball Adderley",
        "url": "CpB7-8SGlJ0",
        "imgUrl": "https://i.ytimg.com/vi/CpB7-8SGlJ0/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370
      },
      {
        "id": "z4PKzz81m5c",
        "title": "Chet Baker - Almost Blue",
        "url": "z4PKzz81m5c",
        "imgUrl": "https://i.ytimg.com/vi/z4PKzz81m5c/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": ["{minimal-user}"],
        "addedAt": 1746986007370
      }
    ],
    "msgs": [
      {
        "id": "ma9e79a0912ee",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "190c4c7d4071",
    "name": "Rock Classics",
    "tags": [
      "Rock",
      "Legends"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "QkF3oxziUI4",
        "title": "Stairway to Heaven",
        "url": "QkF3oxziUI4",
        "imgUrl": "https://i.ytimg.com/vi/QkF3oxziUI4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      },
      {
        "id": "fJ9rUzIMcZQ",
        "title": "Bohemian Rhapsody",
        "url": "fJ9rUzIMcZQ",
        "imgUrl": "https://i.ytimg.com/vi/fJ9rUzIMcZQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      }
    ],
    "msgs": [
      {
        "id": "mc63a2efa25e9",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "d86fe95a7743",
    "name": "Workout Boost",
    "tags": [
      "Workout",
      "Energy"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "btPJPFnesV4",
        "title": "Eye of the Tiger",
        "url": "btPJPFnesV4",
        "imgUrl": "https://i.ytimg.com/vi/btPJPFnesV4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      },
      {
        "id": "AJtDXIazrMo",
        "title": "Stronger",
        "url": "AJtDXIazrMo",
        "imgUrl": "https://i.ytimg.com/vi/AJtDXIazrMo/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      }
    ],
    "msgs": [
      {
        "id": "mfbcfe05c1218",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "b277701f83e5",
    "name": "Lofi Moods",
    "tags": [
      "Lofi",
      "Study"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "hHW1oY26kxQ",
        "title": "lucky day",
        "url": "hHW1oY26kxQ",
        "imgUrl": "https://i.ytimg.com/vi/hHW1oY26kxQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      },
      {
        "id": "5qap5aO4i9A",
        "title": "dreamscape",
        "url": "5qap5aO4i9A",
        "imgUrl": "https://i.ytimg.com/vi/5qap5aO4i9A/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      }
    ],
    "msgs": [
      {
        "id": "mce33418fc9a2",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "50fad7a73dc3",
    "name": "Classical Calm",
    "tags": [
      "Classical",
      "Piano"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "ea2WoUtbzuw",
        "title": "Clair de Lune",
        "url": "ea2WoUtbzuw",
        "imgUrl": "https://i.ytimg.com/vi/ea2WoUtbzuw/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      },
      {
        "id": "4Tr0otuiQuU",
        "title": "Moonlight Sonata",
        "url": "4Tr0otuiQuU",
        "imgUrl": "https://i.ytimg.com/vi/4Tr0otuiQuU/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      }
    ],
    "msgs": [
      {
        "id": "m671ea5deac22",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "734278733651",
    "name": "Reggae Vibes",
    "tags": [
      "Reggae",
      "Chill"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "LanCLS_hIo4",
        "title": "Three Little Birds",
        "url": "LanCLS_hIo4",
        "imgUrl": "https://i.ytimg.com/vi/LanCLS_hIo4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      },
      {
        "id": "zXt56MB-3vc",
        "title": "Red Red Wine",
        "url": "zXt56MB-3vc",
        "imgUrl": "https://i.ytimg.com/vi/zXt56MB-3vc/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      }
    ],
    "msgs": [
      {
        "id": "m1c9ad01a9f0f",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "ea6685e71e6d",
    "name": "Electronic Pulse",
    "tags": [
      "EDM",
      "Party"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "gCYcHz2k5x0",
        "title": "Animals",
        "url": "gCYcHz2k5x0",
        "imgUrl": "https://i.ytimg.com/vi/gCYcHz2k5x0/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      },
      {
        "id": "Uj1ykZWtPYI",
        "title": "Levels",
        "url": "Uj1ykZWtPYI",
        "imgUrl": "https://i.ytimg.com/vi/Uj1ykZWtPYI/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007370
      }
    ],
    "msgs": [
      {
        "id": "m7df36a545b9d",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "93154d18e8c4",
    "name": "Pop Hits",
    "tags": [
      "Pop",
      "Top 40"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "fHI8X4OXluQ",
        "title": "Blinding Lights",
        "url": "fHI8X4OXluQ",
        "imgUrl": "https://i.ytimg.com/vi/fHI8X4OXluQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007371
      },
      {
        "id": "TUVcZfQe-Kw",
        "title": "Levitating",
        "url": "TUVcZfQe-Kw",
        "imgUrl": "https://i.ytimg.com/vi/TUVcZfQe-Kw/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007371
      }
    ],
    "msgs": [
      {
        "id": "m110d241da69b",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "581e59c62645",
    "name": "Soulful Sundays",
    "tags": [
      "Soul",
      "Smooth"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "http://some-photo/"
    },
    "likedByUsers": [
      "{minimal-user}",
      "{minimal-user}"
    ],
    "songs": [
      {
        "id": "tIdIqbv7SPo",
        "title": "Ain\u2019t No Sunshine",
        "url": "tIdIqbv7SPo",
        "imgUrl": "https://i.ytimg.com/vi/tIdIqbv7SPo/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007371
      },
      {
        "id": "COiIC3A0ROM",
        "title": "Let\u2019s Stay Together",
        "url": "COiIC3A0ROM",
        "imgUrl": "https://i.ytimg.com/vi/COiIC3A0ROM/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746986007371
      }
    ],
    "msgs": [
      {
        "id": "ma9e303ee3504",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  }
];