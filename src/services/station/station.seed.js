

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
    "_id": "772d9a4477b2",
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
        "id": "bYH9OOzY_J4",
        "title": "Blue in Green",
        "url": "youtube/bYH9OOzY_J4.mp4",
        "imgUrl": "https://i.ytimg.com/vi/bYH9OOzY_J4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811949
      },
      {
        "id": "zqNTltOGh5c",
        "title": "So What",
        "url": "youtube/zqNTltOGh5c.mp4",
        "imgUrl": "https://i.ytimg.com/vi/zqNTltOGh5c/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811949
      }
    ],
    "msgs": [
      {
        "id": "ma54a694bcabe",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "eaa135ae7724",
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
        "url": "youtube/QkF3oxziUI4.mp4",
        "imgUrl": "https://i.ytimg.com/vi/QkF3oxziUI4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      },
      {
        "id": "fJ9rUzIMcZQ",
        "title": "Bohemian Rhapsody",
        "url": "youtube/fJ9rUzIMcZQ.mp4",
        "imgUrl": "https://i.ytimg.com/vi/fJ9rUzIMcZQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      }
    ],
    "msgs": [
      {
        "id": "m48c7d7a73436",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "968ef3533f6d",
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
        "url": "youtube/btPJPFnesV4.mp4",
        "imgUrl": "https://i.ytimg.com/vi/btPJPFnesV4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      },
      {
        "id": "AJtDXIazrMo",
        "title": "Stronger",
        "url": "youtube/AJtDXIazrMo.mp4",
        "imgUrl": "https://i.ytimg.com/vi/AJtDXIazrMo/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      }
    ],
    "msgs": [
      {
        "id": "mad9ac4da20aa",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "570d56c1eedb",
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
        "url": "youtube/hHW1oY26kxQ.mp4",
        "imgUrl": "https://i.ytimg.com/vi/hHW1oY26kxQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      },
      {
        "id": "5qap5aO4i9A",
        "title": "dreamscape",
        "url": "youtube/5qap5aO4i9A.mp4",
        "imgUrl": "https://i.ytimg.com/vi/5qap5aO4i9A/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      }
    ],
    "msgs": [
      {
        "id": "m70d10260ef89",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "7153af937c14",
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
        "url": "youtube/ea2WoUtbzuw.mp4",
        "imgUrl": "https://i.ytimg.com/vi/ea2WoUtbzuw/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      },
      {
        "id": "4Tr0otuiQuU",
        "title": "Moonlight Sonata",
        "url": "youtube/4Tr0otuiQuU.mp4",
        "imgUrl": "https://i.ytimg.com/vi/4Tr0otuiQuU/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      }
    ],
    "msgs": [
      {
        "id": "m88fbf83c5ad8",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "25fa95de11f9",
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
        "url": "youtube/LanCLS_hIo4.mp4",
        "imgUrl": "https://i.ytimg.com/vi/LanCLS_hIo4/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      },
      {
        "id": "zXt56MB-3vc",
        "title": "Red Red Wine",
        "url": "youtube/zXt56MB-3vc.mp4",
        "imgUrl": "https://i.ytimg.com/vi/zXt56MB-3vc/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      }
    ],
    "msgs": [
      {
        "id": "m3f09b9ffb97f",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "c8c9e220c1b4",
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
        "url": "youtube/gCYcHz2k5x0.mp4",
        "imgUrl": "https://i.ytimg.com/vi/gCYcHz2k5x0/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      },
      {
        "id": "Uj1ykZWtPYI",
        "title": "Levels",
        "url": "youtube/Uj1ykZWtPYI.mp4",
        "imgUrl": "https://i.ytimg.com/vi/Uj1ykZWtPYI/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      }
    ],
    "msgs": [
      {
        "id": "m705a87a0b1ea",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "f38d37d72b0c",
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
        "url": "youtube/fHI8X4OXluQ.mp4",
        "imgUrl": "https://i.ytimg.com/vi/fHI8X4OXluQ/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      },
      {
        "id": "TUVcZfQe-Kw",
        "title": "Levitating",
        "url": "youtube/TUVcZfQe-Kw.mp4",
        "imgUrl": "https://i.ytimg.com/vi/TUVcZfQe-Kw/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      }
    ],
    "msgs": [
      {
        "id": "mebe2258654a9",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  },
  {
    "_id": "483e4492181b",
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
        "url": "youtube/tIdIqbv7SPo.mp4",
        "imgUrl": "https://i.ytimg.com/vi/tIdIqbv7SPo/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      },
      {
        "id": "COiIC3A0ROM",
        "title": "Let\u2019s Stay Together",
        "url": "youtube/COiIC3A0ROM.mp4",
        "imgUrl": "https://i.ytimg.com/vi/COiIC3A0ROM/mqdefault.jpg",
        "addedBy": "{minimal-user}",
        "likedBy": [
          "{minimal-user}"
        ],
        "addedAt": 1746978811950
      }
    ],
    "msgs": [
      {
        "id": "mddad299829c9",
        "from": "{mini-user}",
        "txt": "Awesome vibes!"
      }
    ]
  }
];