/**
 * Unified CRISP-DM Machine Learning Regression Studio
 * Supporting HW 1 (50 Startups) & HW 2 (Spotify Tracks Dataset) with instant dropdown switching.
 */

// 1. Data Store
const STARTUPS_DATA = [
  {
    "id": 1,
    "rd": 165349.2,
    "admin": 136897.8,
    "mktg": 471784.1,
    "state": "New York",
    "profit": 192261.83
  },
  {
    "id": 2,
    "rd": 162597.7,
    "admin": 151377.59,
    "mktg": 443898.53,
    "state": "California",
    "profit": 191792.06
  },
  {
    "id": 3,
    "rd": 153441.51,
    "admin": 101145.55,
    "mktg": 407934.54,
    "state": "Florida",
    "profit": 191050.39
  },
  {
    "id": 4,
    "rd": 144372.41,
    "admin": 118671.85,
    "mktg": 383199.62,
    "state": "New York",
    "profit": 182901.99
  },
  {
    "id": 5,
    "rd": 142107.34,
    "admin": 91391.77,
    "mktg": 366168.42,
    "state": "Florida",
    "profit": 166187.94
  },
  {
    "id": 6,
    "rd": 131876.9,
    "admin": 99814.71,
    "mktg": 362861.36,
    "state": "New York",
    "profit": 156991.12
  },
  {
    "id": 7,
    "rd": 134615.46,
    "admin": 147198.87,
    "mktg": 127716.82,
    "state": "California",
    "profit": 156122.51
  },
  {
    "id": 8,
    "rd": 130298.13,
    "admin": 145530.06,
    "mktg": 323876.68,
    "state": "Florida",
    "profit": 155752.6
  },
  {
    "id": 9,
    "rd": 120542.52,
    "admin": 148718.95,
    "mktg": 311613.29,
    "state": "New York",
    "profit": 152211.77
  },
  {
    "id": 10,
    "rd": 123334.88,
    "admin": 108679.17,
    "mktg": 304981.62,
    "state": "California",
    "profit": 149759.96
  },
  {
    "id": 11,
    "rd": 101913.08,
    "admin": 110594.11,
    "mktg": 229160.95,
    "state": "Florida",
    "profit": 146121.95
  },
  {
    "id": 12,
    "rd": 100671.96,
    "admin": 91790.61,
    "mktg": 249744.55,
    "state": "California",
    "profit": 144259.4
  },
  {
    "id": 13,
    "rd": 93863.75,
    "admin": 127320.38,
    "mktg": 249839.44,
    "state": "Florida",
    "profit": 141585.52
  },
  {
    "id": 14,
    "rd": 91992.39,
    "admin": 135495.07,
    "mktg": 252664.93,
    "state": "California",
    "profit": 134307.35
  },
  {
    "id": 15,
    "rd": 119943.24,
    "admin": 156547.42,
    "mktg": 256512.92,
    "state": "Florida",
    "profit": 132602.65
  },
  {
    "id": 16,
    "rd": 114523.61,
    "admin": 122616.84,
    "mktg": 261776.23,
    "state": "New York",
    "profit": 129917.04
  },
  {
    "id": 17,
    "rd": 78013.11,
    "admin": 121597.55,
    "mktg": 264346.06,
    "state": "California",
    "profit": 126992.93
  },
  {
    "id": 18,
    "rd": 94657.16,
    "admin": 145077.58,
    "mktg": 282574.31,
    "state": "New York",
    "profit": 125370.37
  },
  {
    "id": 19,
    "rd": 91749.16,
    "admin": 114175.79,
    "mktg": 294919.57,
    "state": "Florida",
    "profit": 124266.9
  },
  {
    "id": 20,
    "rd": 86419.7,
    "admin": 153514.11,
    "mktg": 0.0,
    "state": "New York",
    "profit": 122776.86
  },
  {
    "id": 21,
    "rd": 76253.86,
    "admin": 113867.3,
    "mktg": 298664.47,
    "state": "California",
    "profit": 118474.03
  },
  {
    "id": 22,
    "rd": 78389.47,
    "admin": 153773.43,
    "mktg": 299737.29,
    "state": "New York",
    "profit": 111313.02
  },
  {
    "id": 23,
    "rd": 73994.56,
    "admin": 122782.75,
    "mktg": 303319.26,
    "state": "Florida",
    "profit": 110352.25
  },
  {
    "id": 24,
    "rd": 67532.53,
    "admin": 105751.03,
    "mktg": 304768.73,
    "state": "Florida",
    "profit": 108733.99
  },
  {
    "id": 25,
    "rd": 77044.01,
    "admin": 99281.34,
    "mktg": 140574.81,
    "state": "New York",
    "profit": 108552.04
  },
  {
    "id": 26,
    "rd": 64664.71,
    "admin": 139553.16,
    "mktg": 137962.62,
    "state": "California",
    "profit": 107404.34
  },
  {
    "id": 27,
    "rd": 75328.87,
    "admin": 144135.98,
    "mktg": 134050.07,
    "state": "Florida",
    "profit": 105733.54
  },
  {
    "id": 28,
    "rd": 72107.6,
    "admin": 127864.55,
    "mktg": 353183.81,
    "state": "New York",
    "profit": 105008.31
  },
  {
    "id": 29,
    "rd": 66051.52,
    "admin": 182645.56,
    "mktg": 118148.2,
    "state": "Florida",
    "profit": 103282.38
  },
  {
    "id": 30,
    "rd": 65605.48,
    "admin": 153032.06,
    "mktg": 107138.38,
    "state": "New York",
    "profit": 101004.64
  },
  {
    "id": 31,
    "rd": 61994.48,
    "admin": 115641.28,
    "mktg": 91131.24,
    "state": "Florida",
    "profit": 99937.59
  },
  {
    "id": 32,
    "rd": 61136.38,
    "admin": 152701.92,
    "mktg": 88218.23,
    "state": "New York",
    "profit": 97483.56
  },
  {
    "id": 33,
    "rd": 63408.86,
    "admin": 129219.61,
    "mktg": 46085.25,
    "state": "California",
    "profit": 97427.84
  },
  {
    "id": 34,
    "rd": 55493.95,
    "admin": 103057.49,
    "mktg": 214634.81,
    "state": "Florida",
    "profit": 96778.92
  },
  {
    "id": 35,
    "rd": 46426.07,
    "admin": 157693.92,
    "mktg": 210797.67,
    "state": "California",
    "profit": 96712.8
  },
  {
    "id": 36,
    "rd": 46014.02,
    "admin": 85047.44,
    "mktg": 205517.64,
    "state": "New York",
    "profit": 96479.51
  },
  {
    "id": 37,
    "rd": 28663.76,
    "admin": 127056.21,
    "mktg": 201126.82,
    "state": "Florida",
    "profit": 90708.19
  },
  {
    "id": 38,
    "rd": 44069.95,
    "admin": 51283.14,
    "mktg": 197029.42,
    "state": "California",
    "profit": 89949.14
  },
  {
    "id": 39,
    "rd": 20229.59,
    "admin": 65947.93,
    "mktg": 185265.1,
    "state": "New York",
    "profit": 81229.06
  },
  {
    "id": 40,
    "rd": 38558.51,
    "admin": 82982.09,
    "mktg": 174999.3,
    "state": "California",
    "profit": 81005.76
  },
  {
    "id": 41,
    "rd": 28754.33,
    "admin": 118546.05,
    "mktg": 172795.67,
    "state": "California",
    "profit": 78239.91
  },
  {
    "id": 42,
    "rd": 27892.92,
    "admin": 84710.77,
    "mktg": 164470.71,
    "state": "Florida",
    "profit": 77798.83
  },
  {
    "id": 43,
    "rd": 23640.93,
    "admin": 96189.63,
    "mktg": 148001.11,
    "state": "California",
    "profit": 71498.49
  },
  {
    "id": 44,
    "rd": 15505.73,
    "admin": 127382.3,
    "mktg": 35534.17,
    "state": "New York",
    "profit": 69758.98
  },
  {
    "id": 45,
    "rd": 22177.74,
    "admin": 154806.14,
    "mktg": 28334.72,
    "state": "California",
    "profit": 65200.33
  },
  {
    "id": 46,
    "rd": 1000.23,
    "admin": 124153.04,
    "mktg": 1903.93,
    "state": "New York",
    "profit": 64926.08
  },
  {
    "id": 47,
    "rd": 1315.46,
    "admin": 115816.21,
    "mktg": 297114.46,
    "state": "Florida",
    "profit": 49490.75
  },
  {
    "id": 48,
    "rd": 0.0,
    "admin": 135426.92,
    "mktg": 0.0,
    "state": "California",
    "profit": 42559.73
  },
  {
    "id": 49,
    "rd": 542.05,
    "admin": 51743.15,
    "mktg": 0.0,
    "state": "New York",
    "profit": 35673.41
  },
  {
    "id": 50,
    "rd": 0.0,
    "admin": 116983.8,
    "mktg": 45173.06,
    "state": "California",
    "profit": 14681.4
  }
];

const SPOTIFY_SAMPLE_TRACKS = [
  {
    "id": "3nqQXoyQOWXiESFLlDF1hG",
    "name": "Unholy (feat. Kim Petras)",
    "artist": "Sam Smith;Kim Petras",
    "genre": "pop",
    "popularity": 100,
    "danceability": 0.714,
    "energy": 0.472,
    "loudness": -7.4,
    "speechiness": 0.086,
    "acousticness": 0.013,
    "instrumentalness": 0.0,
    "valence": 0.238,
    "tempo": 131.1,
    "explicit": false
  },
  {
    "id": "4uUG5RXrOk84mYEfFvj3cK",
    "name": "I'm Good (Blue)",
    "artist": "David Guetta;Bebe Rexha",
    "genre": "pop",
    "popularity": 98,
    "danceability": 0.561,
    "energy": 0.965,
    "loudness": -3.7,
    "speechiness": 0.034,
    "acousticness": 0.004,
    "instrumentalness": 0.0,
    "valence": 0.304,
    "tempo": 128.0,
    "explicit": true
  },
  {
    "id": "4h9wh7iOZ0GGn8QVp4RAOB",
    "name": "I Ain't Worried",
    "artist": "OneRepublic",
    "genre": "pop",
    "popularity": 96,
    "danceability": 0.704,
    "energy": 0.797,
    "loudness": -5.9,
    "speechiness": 0.048,
    "acousticness": 0.083,
    "instrumentalness": 0.001,
    "valence": 0.825,
    "tempo": 140.0,
    "explicit": false
  },
  {
    "id": "5IgjP7X4th6nMNDh4akUHb",
    "name": "Under The Influence",
    "artist": "Chris Brown",
    "genre": "pop",
    "popularity": 96,
    "danceability": 0.733,
    "energy": 0.69,
    "loudness": -5.5,
    "speechiness": 0.043,
    "acousticness": 0.064,
    "instrumentalness": 0.0,
    "valence": 0.31,
    "tempo": 117.0,
    "explicit": true
  },
  {
    "id": "4LRPiXqCikLlN15c3yImP7",
    "name": "As It Was",
    "artist": "Harry Styles",
    "genre": "pop",
    "popularity": 95,
    "danceability": 0.52,
    "energy": 0.731,
    "loudness": -5.3,
    "speechiness": 0.056,
    "acousticness": 0.342,
    "instrumentalness": 0.001,
    "valence": 0.662,
    "tempo": 173.9,
    "explicit": false
  },
  {
    "id": "6xGruZOHLs39ZbVccQTuPZ",
    "name": "Glimpse of Us",
    "artist": "Joji",
    "genre": "pop",
    "popularity": 94,
    "danceability": 0.44,
    "energy": 0.317,
    "loudness": -9.3,
    "speechiness": 0.053,
    "acousticness": 0.891,
    "instrumentalness": 0.0,
    "valence": 0.268,
    "tempo": 169.9,
    "explicit": false
  },
  {
    "id": "2QjOHCTQ1Jl3zawyYOpxh6",
    "name": "Sweater Weather",
    "artist": "The Neighbourhood",
    "genre": "pop",
    "popularity": 93,
    "danceability": 0.612,
    "energy": 0.807,
    "loudness": -2.8,
    "speechiness": 0.034,
    "acousticness": 0.05,
    "instrumentalness": 0.018,
    "valence": 0.398,
    "tempo": 124.1,
    "explicit": false
  },
  {
    "id": "3JvKfv6T31zO0ini8iNItO",
    "name": "Another Love",
    "artist": "Tom Odell",
    "genre": "pop",
    "popularity": 93,
    "danceability": 0.445,
    "energy": 0.537,
    "loudness": -8.5,
    "speechiness": 0.04,
    "acousticness": 0.695,
    "instrumentalness": 0.0,
    "valence": 0.131,
    "tempo": 122.8,
    "explicit": true
  },
  {
    "id": "0WtM2NBVQNNJLh6scP13H8",
    "name": "Calm Down (with Selena Gomez)",
    "artist": "Rema;Selena Gomez",
    "genre": "pop",
    "popularity": 92,
    "danceability": 0.801,
    "energy": 0.806,
    "loudness": -5.2,
    "speechiness": 0.038,
    "acousticness": 0.382,
    "instrumentalness": 0.001,
    "valence": 0.802,
    "tempo": 107.0,
    "explicit": false
  },
  {
    "id": "5XeFesFbtLpXzIVDNQP22n",
    "name": "I Wanna Be Yours",
    "artist": "Arctic Monkeys",
    "genre": "rock",
    "popularity": 92,
    "danceability": 0.464,
    "energy": 0.417,
    "loudness": -9.3,
    "speechiness": 0.026,
    "acousticness": 0.136,
    "instrumentalness": 0.022,
    "valence": 0.479,
    "tempo": 67.5,
    "explicit": false
  },
  {
    "id": "75FEaRjZTKLhTrFGsfMUXR",
    "name": "Running Up That Hill (A Deal With God)",
    "artist": "Kate Bush",
    "genre": "rock",
    "popularity": 90,
    "danceability": 0.629,
    "energy": 0.547,
    "loudness": -13.1,
    "speechiness": 0.055,
    "acousticness": 0.72,
    "instrumentalness": 0.003,
    "valence": 0.197,
    "tempo": 108.4,
    "explicit": false
  },
  {
    "id": "7DbdUf8aHSYoliSjO6LZv6",
    "name": "Sex, Drugs, Etc.",
    "artist": "Beach Weather",
    "genre": "rock",
    "popularity": 90,
    "danceability": 0.572,
    "energy": 0.839,
    "loudness": -5.1,
    "speechiness": 0.038,
    "acousticness": 0.013,
    "instrumentalness": 0.01,
    "valence": 0.465,
    "tempo": 144.0,
    "explicit": false
  },
  {
    "id": "72yP0DUlWPyH8P7IoxskwN",
    "name": "Hold Me Closer",
    "artist": "Elton John;Britney Spears",
    "genre": "rock",
    "popularity": 89,
    "danceability": 0.667,
    "energy": 0.75,
    "loudness": -4.6,
    "speechiness": 0.091,
    "acousticness": 0.075,
    "instrumentalness": 0.0,
    "valence": 0.486,
    "tempo": 126.0,
    "explicit": false
  },
  {
    "id": "0HqZX76SFLDz2aW8aiqi7G",
    "name": "Bones",
    "artist": "Imagine Dragons",
    "genre": "rock",
    "popularity": 89,
    "danceability": 0.773,
    "energy": 0.742,
    "loudness": -3.7,
    "speechiness": 0.046,
    "acousticness": 0.021,
    "instrumentalness": 0.0,
    "valence": 0.571,
    "tempo": 114.1,
    "explicit": false
  },
  {
    "id": "0BxE4FqsDD1Ot4YuBXwAPp",
    "name": "505",
    "artist": "Arctic Monkeys",
    "genre": "rock",
    "popularity": 88,
    "danceability": 0.526,
    "energy": 0.866,
    "loudness": -5.8,
    "speechiness": 0.057,
    "acousticness": 0.003,
    "instrumentalness": 0.0,
    "valence": 0.248,
    "tempo": 140.3,
    "explicit": false
  },
  {
    "id": "2HZLXBOnaSRhXStMLrq9fD",
    "name": "Mary On A Cross",
    "artist": "Ghost",
    "genre": "rock",
    "popularity": 88,
    "danceability": 0.466,
    "energy": 0.9,
    "loudness": -4.5,
    "speechiness": 0.045,
    "acousticness": 0.0,
    "instrumentalness": 0.001,
    "valence": 0.561,
    "tempo": 130.0,
    "explicit": false
  },
  {
    "id": "1xzi1Jcr7mEi9K2RfzLOqS",
    "name": "CUFF IT",
    "artist": "Beyoncé",
    "genre": "dance",
    "popularity": 93,
    "danceability": 0.78,
    "energy": 0.689,
    "loudness": -5.7,
    "speechiness": 0.141,
    "acousticness": 0.037,
    "instrumentalness": 0.0,
    "valence": 0.642,
    "tempo": 115.0,
    "explicit": true
  },
  {
    "id": "4C6Uex2ILwJi9sZXRdmqXp",
    "name": "Super Freaky Girl",
    "artist": "Nicki Minaj",
    "genre": "dance",
    "popularity": 92,
    "danceability": 0.95,
    "energy": 0.891,
    "loudness": -2.7,
    "speechiness": 0.241,
    "acousticness": 0.065,
    "instrumentalness": 0.0,
    "valence": 0.912,
    "tempo": 133.0,
    "explicit": true
  },
  {
    "id": "0mBP9X2gPCuapvpZ7TGDk3",
    "name": "Left and Right (Feat. Jung Kook of BTS)",
    "artist": "Charlie Puth;Jung Kook;BTS",
    "genre": "dance",
    "popularity": 92,
    "danceability": 0.881,
    "energy": 0.592,
    "loudness": -4.9,
    "speechiness": 0.032,
    "acousticness": 0.619,
    "instrumentalness": 0.0,
    "valence": 0.719,
    "tempo": 101.1,
    "explicit": false
  },
  {
    "id": "0hquQWY3xvYqN4qtiquniF",
    "name": "Vegas (From the Original Motion Picture ",
    "artist": "Doja Cat",
    "genre": "dance",
    "popularity": 90,
    "danceability": 0.801,
    "energy": 0.601,
    "loudness": -7.6,
    "speechiness": 0.255,
    "acousticness": 0.078,
    "instrumentalness": 0.0,
    "valence": 0.74,
    "tempo": 160.0,
    "explicit": true
  },
  {
    "id": "4zN21mbAuaD0WqtmaTZZeP",
    "name": "Ferrari",
    "artist": "James Hype;Miggy Dela Rosa",
    "genre": "dance",
    "popularity": 90,
    "danceability": 0.847,
    "energy": 0.69,
    "loudness": -7.9,
    "speechiness": 0.049,
    "acousticness": 0.013,
    "instrumentalness": 0.0,
    "valence": 0.692,
    "tempo": 125.0,
    "explicit": false
  },
  {
    "id": "7ef4DlsgrMEH11cDZd32M6",
    "name": "One Kiss (with Dua Lipa)",
    "artist": "Calvin Harris;Dua Lipa",
    "genre": "dance",
    "popularity": 89,
    "danceability": 0.791,
    "energy": 0.862,
    "loudness": -3.2,
    "speechiness": 0.11,
    "acousticness": 0.037,
    "instrumentalness": 0.0,
    "valence": 0.592,
    "tempo": 124.0,
    "explicit": false
  },
  {
    "id": "2tTmW7RDtMQtBk7m2rYeSw",
    "name": "Quevedo: Bzrp Music Sessions, Vol. 52",
    "artist": "Bizarrap;Quevedo",
    "genre": "hip-hop",
    "popularity": 99,
    "danceability": 0.621,
    "energy": 0.782,
    "loudness": -5.5,
    "speechiness": 0.044,
    "acousticness": 0.013,
    "instrumentalness": 0.033,
    "valence": 0.55,
    "tempo": 128.0,
    "explicit": false
  },
  {
    "id": "3F5CgOj3wFlRv51JsHbxhe",
    "name": "Jimmy Cooks (feat. 21 Savage)",
    "artist": "Drake;21 Savage",
    "genre": "hip-hop",
    "popularity": 91,
    "danceability": 0.529,
    "energy": 0.673,
    "loudness": -4.7,
    "speechiness": 0.175,
    "acousticness": 0.0,
    "instrumentalness": 0.0,
    "valence": 0.366,
    "tempo": 165.9,
    "explicit": true
  },
  {
    "id": "38T0tPVZHcPZyhtOcCP7pF",
    "name": "STAR WALKIN' (League of Legends Worlds A",
    "artist": "Lil Nas X",
    "genre": "hip-hop",
    "popularity": 90,
    "danceability": 0.637,
    "energy": 0.715,
    "loudness": -5.0,
    "speechiness": 0.045,
    "acousticness": 0.148,
    "instrumentalness": 0.0,
    "valence": 0.308,
    "tempo": 141.9,
    "explicit": true
  },
  {
    "id": "27ZZdyTSQWI7Cug2d2PkqV",
    "name": "BILLIE EILISH.",
    "artist": "Armani White",
    "genre": "hip-hop",
    "popularity": 89,
    "danceability": 0.9,
    "energy": 0.509,
    "loudness": -6.6,
    "speechiness": 0.257,
    "acousticness": 0.115,
    "instrumentalness": 0.0,
    "valence": 0.765,
    "tempo": 100.0,
    "explicit": true
  },
  {
    "id": "1PckUlxKqWQs3RlWXVBLw3",
    "name": "About Damn Time",
    "artist": "Lizzo",
    "genre": "hip-hop",
    "popularity": 89,
    "danceability": 0.836,
    "energy": 0.743,
    "loudness": -6.3,
    "speechiness": 0.066,
    "acousticness": 0.1,
    "instrumentalness": 0.0,
    "valence": 0.722,
    "tempo": 109.0,
    "explicit": true
  },
  {
    "id": "1DIXPcTDzTj8ZMHt3PDt8p",
    "name": "Gangsta's Paradise",
    "artist": "Coolio;L.V.",
    "genre": "hip-hop",
    "popularity": 89,
    "danceability": 0.647,
    "energy": 0.514,
    "loudness": -10.1,
    "speechiness": 0.059,
    "acousticness": 0.066,
    "instrumentalness": 0.0,
    "valence": 0.386,
    "tempo": 80.0,
    "explicit": false
  },
  {
    "id": "5HCyWlXZPP0y6Gqq8TgA20",
    "name": "STAY (with Justin Bieber)",
    "artist": "The Kid LAROI;Justin Bieber",
    "genre": "hip-hop",
    "popularity": 89,
    "danceability": 0.591,
    "energy": 0.764,
    "loudness": -5.5,
    "speechiness": 0.048,
    "acousticness": 0.038,
    "instrumentalness": 0.0,
    "valence": 0.478,
    "tempo": 169.9,
    "explicit": true
  },
  {
    "id": "59nOXPmaKlBfGMDeOVGrIK",
    "name": "WAIT FOR U (feat. Drake & Tems)",
    "artist": "Future;Drake;Tems",
    "genre": "hip-hop",
    "popularity": 89,
    "danceability": 0.463,
    "energy": 0.642,
    "loudness": -4.5,
    "speechiness": 0.34,
    "acousticness": 0.314,
    "instrumentalness": 0.0,
    "valence": 0.339,
    "tempo": 83.4,
    "explicit": true
  },
  {
    "id": "3uUuGVFu1V7jTQL60S1r8z",
    "name": "Where Are You Now",
    "artist": "Lost Frequencies;Calum Scott",
    "genre": "edm",
    "popularity": 88,
    "danceability": 0.671,
    "energy": 0.636,
    "loudness": -8.1,
    "speechiness": 0.103,
    "acousticness": 0.515,
    "instrumentalness": 0.0,
    "valence": 0.262,
    "tempo": 121.0,
    "explicit": false
  },
  {
    "id": "10xV5l9nhLvFpR8mqzs0bL",
    "name": "Numb",
    "artist": "Marshmello;Khalid",
    "genre": "edm",
    "popularity": 87,
    "danceability": 0.912,
    "energy": 0.774,
    "loudness": -4.7,
    "speechiness": 0.045,
    "acousticness": 0.121,
    "instrumentalness": 0.013,
    "valence": 0.632,
    "tempo": 120.0,
    "explicit": false
  },
  {
    "id": "7fZBQnc0zXwVybgCIrQQil",
    "name": "Belly Dancer",
    "artist": "Imanbek;BYOR",
    "genre": "edm",
    "popularity": 87,
    "danceability": 0.845,
    "energy": 0.797,
    "loudness": -5.0,
    "speechiness": 0.139,
    "acousticness": 0.058,
    "instrumentalness": 0.0,
    "valence": 0.422,
    "tempo": 122.0,
    "explicit": false
  },
  {
    "id": "0ct6r3EGTcMLPtrXHDvVjc",
    "name": "The Nights",
    "artist": "Avicii",
    "genre": "edm",
    "popularity": 86,
    "danceability": 0.527,
    "energy": 0.835,
    "loudness": -5.3,
    "speechiness": 0.043,
    "acousticness": 0.017,
    "instrumentalness": 0.0,
    "valence": 0.654,
    "tempo": 126.0,
    "explicit": false
  },
  {
    "id": "18asYwWugKjjsihZ0YvRxO",
    "name": "The Motto",
    "artist": "Tiësto;Ava Max",
    "genre": "edm",
    "popularity": 86,
    "danceability": 0.754,
    "energy": 0.763,
    "loudness": -4.6,
    "speechiness": 0.043,
    "acousticness": 0.03,
    "instrumentalness": 0.0,
    "valence": 0.464,
    "tempo": 118.0,
    "explicit": false
  },
  {
    "id": "0nrRP2bk19rLc0orkWPQk2",
    "name": "Wake Me Up",
    "artist": "Avicii",
    "genre": "edm",
    "popularity": 85,
    "danceability": 0.532,
    "energy": 0.783,
    "loudness": -5.7,
    "speechiness": 0.052,
    "acousticness": 0.004,
    "instrumentalness": 0.001,
    "valence": 0.643,
    "tempo": 124.1,
    "explicit": false
  },
  {
    "id": "4qu63nuBpdn0qHUHuObEj1",
    "name": "Leave Before You Love Me (with Jonas Bro",
    "artist": "Marshmello;Jonas Brothers",
    "genre": "edm",
    "popularity": 85,
    "danceability": 0.721,
    "energy": 0.738,
    "loudness": -4.8,
    "speechiness": 0.04,
    "acousticness": 0.002,
    "instrumentalness": 0.0,
    "valence": 0.637,
    "tempo": 120.0,
    "explicit": false
  },
  {
    "id": "6RUKPb4LETWmmr3iAEQktW",
    "name": "Something Just Like This",
    "artist": "The Chainsmokers;Coldplay",
    "genre": "edm",
    "popularity": 85,
    "danceability": 0.617,
    "energy": 0.635,
    "loudness": -6.8,
    "speechiness": 0.032,
    "acousticness": 0.05,
    "instrumentalness": 0.0,
    "valence": 0.446,
    "tempo": 103.0,
    "explicit": false
  },
  {
    "id": "2gYj9lubBorOPIVWsTXugG",
    "name": "After LIKE",
    "artist": "IVE",
    "genre": "k-pop",
    "popularity": 88,
    "danceability": 0.68,
    "energy": 0.922,
    "loudness": -1.2,
    "speechiness": 0.121,
    "acousticness": 0.103,
    "instrumentalness": 0.0,
    "valence": 0.799,
    "tempo": 125.0,
    "explicit": false
  },
  {
    "id": "6tCd8bPvYnceDG7W9M1RMk",
    "name": "Shut Down",
    "artist": "BLACKPINK",
    "genre": "k-pop",
    "popularity": 87,
    "danceability": 0.813,
    "energy": 0.657,
    "loudness": -6.4,
    "speechiness": 0.037,
    "acousticness": 0.003,
    "instrumentalness": 0.0,
    "valence": 0.651,
    "tempo": 110.1,
    "explicit": false
  },
  {
    "id": "1rDQ4oMwGJI7B4tovsBOxc",
    "name": "First Class",
    "artist": "Jack Harlow",
    "genre": "k-pop",
    "popularity": 86,
    "danceability": 0.905,
    "energy": 0.563,
    "loudness": -6.1,
    "speechiness": 0.102,
    "acousticness": 0.025,
    "instrumentalness": 0.0,
    "valence": 0.324,
    "tempo": 107.0,
    "explicit": true
  },
  {
    "id": "0RDqNCRBGrSegk16Avfzuq",
    "name": "Talk that Talk",
    "artist": "TWICE",
    "genre": "k-pop",
    "popularity": 86,
    "danceability": 0.772,
    "energy": 0.907,
    "loudness": -2.4,
    "speechiness": 0.124,
    "acousticness": 0.136,
    "instrumentalness": 0.0,
    "valence": 0.783,
    "tempo": 120.0,
    "explicit": false
  },
  {
    "id": "5QDLhrAOJJdNAmCTJ8xMyW",
    "name": "Dynamite",
    "artist": "BTS",
    "genre": "k-pop",
    "popularity": 85,
    "danceability": 0.746,
    "energy": 0.765,
    "loudness": -4.4,
    "speechiness": 0.099,
    "acousticness": 0.011,
    "instrumentalness": 0.0,
    "valence": 0.737,
    "tempo": 114.0,
    "explicit": false
  },
  {
    "id": "10SRMwb9EuVS1K9rYsBfHQ",
    "name": "Yet To Come",
    "artist": "BTS",
    "genre": "k-pop",
    "popularity": 85,
    "danceability": 0.559,
    "energy": 0.885,
    "loudness": -4.5,
    "speechiness": 0.189,
    "acousticness": 0.043,
    "instrumentalness": 0.0,
    "valence": 0.683,
    "tempo": 172.0,
    "explicit": false
  },
  {
    "id": "7EyhPjrJzjx0fk2i7vUJCS",
    "name": "Pink Venom",
    "artist": "BLACKPINK",
    "genre": "k-pop",
    "popularity": 85,
    "danceability": 0.794,
    "energy": 0.719,
    "loudness": -7.2,
    "speechiness": 0.076,
    "acousticness": 0.012,
    "instrumentalness": 0.0,
    "valence": 0.69,
    "tempo": 90.0,
    "explicit": false
  },
  {
    "id": "0Q5VnK2DYzRyfqQRJuUtvi",
    "name": "LOVE DIVE",
    "artist": "IVE",
    "genre": "k-pop",
    "popularity": 85,
    "danceability": 0.703,
    "energy": 0.709,
    "loudness": -4.2,
    "speechiness": 0.043,
    "acousticness": 0.004,
    "instrumentalness": 0.0,
    "valence": 0.538,
    "tempo": 117.9,
    "explicit": false
  },
  {
    "id": "69xohKu8C1fsflYAiSNbwM",
    "name": "Run BTS",
    "artist": "BTS",
    "genre": "k-pop",
    "popularity": 84,
    "danceability": 0.724,
    "energy": 0.818,
    "loudness": -3.7,
    "speechiness": 0.168,
    "acousticness": 0.02,
    "instrumentalness": 0.0,
    "valence": 0.696,
    "tempo": 77.0,
    "explicit": false
  },
  {
    "id": "29d0nY7TzCoi22XBqDQkiP",
    "name": "Running Up That Hill (A Deal With God) -",
    "artist": "Kate Bush",
    "genre": "r-n-b",
    "popularity": 85,
    "danceability": 0.625,
    "energy": 0.533,
    "loudness": -11.9,
    "speechiness": 0.06,
    "acousticness": 0.659,
    "instrumentalness": 0.003,
    "valence": 0.139,
    "tempo": 108.3,
    "explicit": false
  },
  {
    "id": "4XvcHTUfIlWfyJTRG0aqlo",
    "name": "2055",
    "artist": "Sleepy Hallow",
    "genre": "r-n-b",
    "popularity": 81,
    "danceability": 0.829,
    "energy": 0.512,
    "loudness": -5.9,
    "speechiness": 0.187,
    "acousticness": 0.492,
    "instrumentalness": 0.0,
    "valence": 0.638,
    "tempo": 80.5,
    "explicit": true
  },
  {
    "id": "2BJWxD8xKrDv8vneTvTIm9",
    "name": "Beat the Odds",
    "artist": "Lil Tjay",
    "genre": "r-n-b",
    "popularity": 81,
    "danceability": 0.498,
    "energy": 0.625,
    "loudness": -7.5,
    "speechiness": 0.342,
    "acousticness": 0.054,
    "instrumentalness": 0.0,
    "valence": 0.478,
    "tempo": 84.8,
    "explicit": true
  },
  {
    "id": "6EbVuwU7EnKeF2hdpViXCH",
    "name": "Die Young (feat. 347aidan)",
    "artist": "Sleepy Hallow;347aidan",
    "genre": "r-n-b",
    "popularity": 81,
    "danceability": 0.808,
    "energy": 0.582,
    "loudness": -6.3,
    "speechiness": 0.338,
    "acousticness": 0.827,
    "instrumentalness": 0.0,
    "valence": 0.675,
    "tempo": 77.5,
    "explicit": true
  },
  {
    "id": "3J8EOeKLTLXORtWPpOU5bE",
    "name": "Calling My Phone",
    "artist": "Lil Tjay;6LACK",
    "genre": "r-n-b",
    "popularity": 81,
    "danceability": 0.907,
    "energy": 0.393,
    "loudness": -7.6,
    "speechiness": 0.054,
    "acousticness": 0.451,
    "instrumentalness": 0.0,
    "valence": 0.202,
    "tempo": 104.9,
    "explicit": true
  },
  {
    "id": "3SdTKo2uVsxFblQjpScoHy",
    "name": "Stand by Me",
    "artist": "Ben E. King",
    "genre": "r-n-b",
    "popularity": 80,
    "danceability": 0.65,
    "energy": 0.306,
    "loudness": -9.4,
    "speechiness": 0.039,
    "acousticness": 0.57,
    "instrumentalness": 0.0,
    "valence": 0.605,
    "tempo": 118.1,
    "explicit": false
  },
  {
    "id": "57iDDD9N9tTWe75x6qhStw",
    "name": "Bitter Sweet Symphony",
    "artist": "The Verve",
    "genre": "r-n-b",
    "popularity": 80,
    "danceability": 0.356,
    "energy": 0.917,
    "loudness": -6.0,
    "speechiness": 0.048,
    "acousticness": 0.034,
    "instrumentalness": 0.0,
    "valence": 0.518,
    "tempo": 171.2,
    "explicit": false
  },
  {
    "id": "1HvTxgCj0mTzQlEo0zLvFb",
    "name": "In My Head",
    "artist": "Lil Tjay",
    "genre": "r-n-b",
    "popularity": 79,
    "danceability": 0.684,
    "energy": 0.545,
    "loudness": -6.9,
    "speechiness": 0.121,
    "acousticness": 0.159,
    "instrumentalness": 0.0,
    "valence": 0.407,
    "tempo": 143.0,
    "explicit": true
  },
  {
    "id": "5ww2BF9slyYgNOk37BlC4u",
    "name": "La Bachata",
    "artist": "Manuel Turizo",
    "genre": "latin",
    "popularity": 98,
    "danceability": 0.835,
    "energy": 0.679,
    "loudness": -5.3,
    "speechiness": 0.036,
    "acousticness": 0.583,
    "instrumentalness": 0.0,
    "valence": 0.85,
    "tempo": 125.0,
    "explicit": false
  },
  {
    "id": "1IHWl5LamUGEuP4ozKQSXZ",
    "name": "Tití Me Preguntó",
    "artist": "Bad Bunny",
    "genre": "latin",
    "popularity": 97,
    "danceability": 0.65,
    "energy": 0.715,
    "loudness": -5.2,
    "speechiness": 0.253,
    "acousticness": 0.099,
    "instrumentalness": 0.0,
    "valence": 0.187,
    "tempo": 106.7,
    "explicit": false
  },
  {
    "id": "6Sq7ltF9Qa7SNFBsV5Cogx",
    "name": "Me Porto Bonito",
    "artist": "Bad Bunny;Chencho Corleone",
    "genre": "latin",
    "popularity": 97,
    "danceability": 0.911,
    "energy": 0.712,
    "loudness": -5.1,
    "speechiness": 0.082,
    "acousticness": 0.09,
    "instrumentalness": 0.0,
    "valence": 0.425,
    "tempo": 92.0,
    "explicit": true
  },
  {
    "id": "5Eax0qFko2dh7Rl2lYs3bx",
    "name": "Efecto",
    "artist": "Bad Bunny",
    "genre": "latin",
    "popularity": 96,
    "danceability": 0.801,
    "energy": 0.475,
    "loudness": -8.8,
    "speechiness": 0.052,
    "acousticness": 0.141,
    "instrumentalness": 0.0,
    "valence": 0.234,
    "tempo": 98.0,
    "explicit": false
  },
  {
    "id": "3k3NWokhRRkEPhCzPmV8TW",
    "name": "Ojitos Lindos",
    "artist": "Bad Bunny;Bomba Estéreo",
    "genre": "latin",
    "popularity": 95,
    "danceability": 0.647,
    "energy": 0.686,
    "loudness": -5.7,
    "speechiness": 0.041,
    "acousticness": 0.08,
    "instrumentalness": 0.0,
    "valence": 0.268,
    "tempo": 79.9,
    "explicit": false
  },
  {
    "id": "6Xom58OOXk2SoU711L2IXO",
    "name": "Moscow Mule",
    "artist": "Bad Bunny",
    "genre": "latin",
    "popularity": 94,
    "danceability": 0.804,
    "energy": 0.674,
    "loudness": -5.5,
    "speechiness": 0.033,
    "acousticness": 0.294,
    "instrumentalness": 0.0,
    "valence": 0.292,
    "tempo": 100.0,
    "explicit": true
  },
  {
    "id": "31i56LZnwE6uSu3exoHjtB",
    "name": "Neverita",
    "artist": "Bad Bunny",
    "genre": "latin",
    "popularity": 93,
    "danceability": 0.876,
    "energy": 0.498,
    "loudness": -7.5,
    "speechiness": 0.048,
    "acousticness": 0.071,
    "instrumentalness": 0.0,
    "valence": 0.428,
    "tempo": 122.0,
    "explicit": false
  },
  {
    "id": "79HZAZNnOE97rb2hnI0XQr",
    "name": "LOKERA",
    "artist": "Rauw Alejandro;Lyanno;Brray",
    "genre": "latin",
    "popularity": 91,
    "danceability": 0.834,
    "energy": 0.828,
    "loudness": -2.7,
    "speechiness": 0.045,
    "acousticness": 0.21,
    "instrumentalness": 0.0,
    "valence": 0.58,
    "tempo": 102.0,
    "explicit": false
  },
  {
    "id": "41oY4WCTj5kccfesTVFnvN",
    "name": "Tarot",
    "artist": "Bad Bunny;Jhayco",
    "genre": "latin",
    "popularity": 91,
    "danceability": 0.795,
    "energy": 0.684,
    "loudness": -4.0,
    "speechiness": 0.042,
    "acousticness": 0.022,
    "instrumentalness": 0.0,
    "valence": 0.419,
    "tempo": 114.0,
    "explicit": true
  },
  {
    "id": "5vjLSffimiIP26QG5WcN2K",
    "name": "Hold On",
    "artist": "Chord Overstreet",
    "genre": "acoustic",
    "popularity": 82,
    "danceability": 0.618,
    "energy": 0.443,
    "loudness": -9.7,
    "speechiness": 0.053,
    "acousticness": 0.469,
    "instrumentalness": 0.0,
    "valence": 0.167,
    "tempo": 119.9,
    "explicit": false
  },
  {
    "id": "1EzrEOXmMH3G43AXT1y7pA",
    "name": "I'm Yours",
    "artist": "Jason Mraz",
    "genre": "acoustic",
    "popularity": 80,
    "danceability": 0.703,
    "energy": 0.444,
    "loudness": -9.3,
    "speechiness": 0.042,
    "acousticness": 0.559,
    "instrumentalness": 0.0,
    "valence": 0.712,
    "tempo": 151.0,
    "explicit": false
  },
  {
    "id": "08MFgEQeVLF37EyZ7jcwLc",
    "name": "Pano",
    "artist": "Zack Tabudlo",
    "genre": "acoustic",
    "popularity": 75,
    "danceability": 0.375,
    "energy": 0.457,
    "loudness": -7.0,
    "speechiness": 0.032,
    "acousticness": 0.868,
    "instrumentalness": 0.015,
    "valence": 0.415,
    "tempo": 174.8,
    "explicit": false
  },
  {
    "id": "3S0OXQeoh0w6AY8WQVckRW",
    "name": "I'm Yours",
    "artist": "Jason Mraz",
    "genre": "acoustic",
    "popularity": 75,
    "danceability": 0.703,
    "energy": 0.444,
    "loudness": -9.3,
    "speechiness": 0.042,
    "acousticness": 0.559,
    "instrumentalness": 0.0,
    "valence": 0.712,
    "tempo": 151.0,
    "explicit": false
  },
  {
    "id": "4mzP5mHkRvGxdhdGdAH7EJ",
    "name": "Give Me Your Forever",
    "artist": "Zack Tabudlo",
    "genre": "acoustic",
    "popularity": 74,
    "danceability": 0.627,
    "energy": 0.363,
    "loudness": -8.1,
    "speechiness": 0.029,
    "acousticness": 0.279,
    "instrumentalness": 0.0,
    "valence": 0.301,
    "tempo": 99.9,
    "explicit": false
  },
  {
    "id": "6Vc5wAMmXdKIAM7WUoEb7N",
    "name": "Say Something",
    "artist": "A Great Big World;Christina Aguiler",
    "genre": "acoustic",
    "popularity": 74,
    "danceability": 0.407,
    "energy": 0.147,
    "loudness": -8.8,
    "speechiness": 0.035,
    "acousticness": 0.857,
    "instrumentalness": 0.0,
    "valence": 0.076,
    "tempo": 141.3,
    "explicit": false
  },
  {
    "id": "0IktbUcnAGrvD03AWnz3Q8",
    "name": "Lucky",
    "artist": "Jason Mraz;Colbie Caillat",
    "genre": "acoustic",
    "popularity": 74,
    "danceability": 0.625,
    "energy": 0.414,
    "loudness": -8.7,
    "speechiness": 0.037,
    "acousticness": 0.294,
    "instrumentalness": 0.0,
    "valence": 0.669,
    "tempo": 130.1,
    "explicit": false
  },
  {
    "id": "5p9XWUdvbUzmPCukOmwoU3",
    "name": "Suddenly I See",
    "artist": "KT Tunstall",
    "genre": "acoustic",
    "popularity": 73,
    "danceability": 0.587,
    "energy": 0.767,
    "loudness": -5.7,
    "speechiness": 0.045,
    "acousticness": 0.225,
    "instrumentalness": 0.0,
    "valence": 0.664,
    "tempo": 100.4,
    "explicit": false
  },
  {
    "id": "4E6cwWJWZw2zWf7VFbH7wf",
    "name": "Love Song",
    "artist": "Sara Bareilles",
    "genre": "acoustic",
    "popularity": 73,
    "danceability": 0.583,
    "energy": 0.786,
    "loudness": -3.1,
    "speechiness": 0.03,
    "acousticness": 0.021,
    "instrumentalness": 0.0,
    "valence": 0.573,
    "tempo": 123.1,
    "explicit": false
  },
  {
    "id": "0QzuaeCEEOV40Pn7IvKEny",
    "name": "double take",
    "artist": "dhruv",
    "genre": "chill",
    "popularity": 83,
    "danceability": 0.656,
    "energy": 0.436,
    "loudness": -11.1,
    "speechiness": 0.074,
    "acousticness": 0.845,
    "instrumentalness": 0.0,
    "valence": 0.196,
    "tempo": 109.2,
    "explicit": false
  },
  {
    "id": "7D7e6hm2LiNd6nLuJF6K9Q",
    "name": "Hex",
    "artist": "80purppp",
    "genre": "chill",
    "popularity": 79,
    "danceability": 0.845,
    "energy": 0.398,
    "loudness": -15.8,
    "speechiness": 0.268,
    "acousticness": 0.872,
    "instrumentalness": 0.007,
    "valence": 0.482,
    "tempo": 110.0,
    "explicit": false
  },
  {
    "id": "7ArVzlFsFsQXNseVXmdOyk",
    "name": "NVMD",
    "artist": "Denise Julia",
    "genre": "chill",
    "popularity": 79,
    "danceability": 0.758,
    "energy": 0.674,
    "loudness": -4.5,
    "speechiness": 0.108,
    "acousticness": 0.09,
    "instrumentalness": 0.0,
    "valence": 0.424,
    "tempo": 98.0,
    "explicit": true
  },
  {
    "id": "5wwPdWKbDEiybmWkZqsGGn",
    "name": "Next Up - S4-E2, Pt. 1",
    "artist": "JBee;Mixtape Madness",
    "genre": "chill",
    "popularity": 77,
    "danceability": 0.54,
    "energy": 0.585,
    "loudness": -7.6,
    "speechiness": 0.309,
    "acousticness": 0.198,
    "instrumentalness": 0.0,
    "valence": 0.516,
    "tempo": 100.3,
    "explicit": true
  },
  {
    "id": "2MJz8BxxMsERULatmBikDH",
    "name": "At My Worst",
    "artist": "Pink Sweat$",
    "genre": "chill",
    "popularity": 76,
    "danceability": 0.813,
    "energy": 0.415,
    "loudness": -5.9,
    "speechiness": 0.035,
    "acousticness": 0.777,
    "instrumentalness": 0.0,
    "valence": 0.667,
    "tempo": 91.9,
    "explicit": false
  },
  {
    "id": "7es56D0QedGMsK39wl2yFX",
    "name": "Happier Than Ever",
    "artist": "ASTN",
    "genre": "chill",
    "popularity": 76,
    "danceability": 0.667,
    "energy": 0.457,
    "loudness": -6.9,
    "speechiness": 0.439,
    "acousticness": 0.341,
    "instrumentalness": 0.0,
    "valence": 0.266,
    "tempo": 97.6,
    "explicit": true
  },
  {
    "id": "55XrFge2dEZwYzNl128DwN",
    "name": "Losing Interest",
    "artist": "itssvd;Shiloh Dynasty",
    "genre": "chill",
    "popularity": 76,
    "danceability": 0.753,
    "energy": 0.355,
    "loudness": -13.3,
    "speechiness": 0.09,
    "acousticness": 0.48,
    "instrumentalness": 0.87,
    "valence": 0.506,
    "tempo": 111.9,
    "explicit": false
  },
  {
    "id": "7z5G2LOdV8okZn4yWg3q5g",
    "name": "Night Away (Dance) (feat. Tion Wayne)",
    "artist": "A1 x J1;Tion Wayne",
    "genre": "chill",
    "popularity": 75,
    "danceability": 0.706,
    "energy": 0.552,
    "loudness": -9.5,
    "speechiness": 0.083,
    "acousticness": 0.235,
    "instrumentalness": 0.0,
    "valence": 0.835,
    "tempo": 142.0,
    "explicit": true
  },
  {
    "id": "4SqWKzw0CbA05TGszDgMlc",
    "name": "I Love You So",
    "artist": "The Walters",
    "genre": "indie",
    "popularity": 89,
    "danceability": 0.575,
    "energy": 0.648,
    "loudness": -4.9,
    "speechiness": 0.036,
    "acousticness": 0.583,
    "instrumentalness": 0.0,
    "valence": 0.466,
    "tempo": 76.0,
    "explicit": false
  },
  {
    "id": "5FVd6KXrgO9B3JPmC8OPst",
    "name": "Do I Wanna Know?",
    "artist": "Arctic Monkeys",
    "genre": "indie",
    "popularity": 88,
    "danceability": 0.548,
    "energy": 0.532,
    "loudness": -7.6,
    "speechiness": 0.032,
    "acousticness": 0.186,
    "instrumentalness": 0.0,
    "valence": 0.405,
    "tempo": 85.0,
    "explicit": false
  },
  {
    "id": "086myS9r57YsLbJpU0TgK9",
    "name": "Why'd You Only Call Me When You're High?",
    "artist": "Arctic Monkeys",
    "genre": "indie",
    "popularity": 88,
    "danceability": 0.691,
    "energy": 0.631,
    "loudness": -6.5,
    "speechiness": 0.037,
    "acousticness": 0.048,
    "instrumentalness": 0.0,
    "valence": 0.8,
    "tempo": 92.0,
    "explicit": false
  },
  {
    "id": "02MWAaffLxlfxAUY7c5dvx",
    "name": "Heat Waves",
    "artist": "Glass Animals",
    "genre": "indie",
    "popularity": 88,
    "danceability": 0.761,
    "energy": 0.525,
    "loudness": -6.9,
    "speechiness": 0.094,
    "acousticness": 0.44,
    "instrumentalness": 0.0,
    "valence": 0.531,
    "tempo": 80.9,
    "explicit": false
  },
  {
    "id": "3Wrjm47oTz2sjIgck11l5e",
    "name": "Beggin'",
    "artist": "Måneskin",
    "genre": "indie",
    "popularity": 86,
    "danceability": 0.714,
    "energy": 0.8,
    "loudness": -4.8,
    "speechiness": 0.05,
    "acousticness": 0.127,
    "instrumentalness": 0.0,
    "valence": 0.589,
    "tempo": 134.0,
    "explicit": false
  },
  {
    "id": "7EkWXAI1wn8Ii883ecd9xr",
    "name": "Freaks",
    "artist": "Surf Curse",
    "genre": "indie",
    "popularity": 86,
    "danceability": 0.345,
    "energy": 0.941,
    "loudness": -9.9,
    "speechiness": 0.047,
    "acousticness": 0.0,
    "instrumentalness": 0.633,
    "valence": 0.407,
    "tempo": 179.6,
    "explicit": false
  },
  {
    "id": "37ZJ0p5Jm13JPevGcx4SkF",
    "name": "Livin' On A Prayer",
    "artist": "Bon Jovi",
    "genre": "metal",
    "popularity": 85,
    "danceability": 0.532,
    "energy": 0.887,
    "loudness": -3.8,
    "speechiness": 0.034,
    "acousticness": 0.078,
    "instrumentalness": 0.0,
    "valence": 0.795,
    "tempo": 122.5,
    "explicit": false
  },
  {
    "id": "60a0Rd6pjrkxjPbaKzXjfq",
    "name": "In the End",
    "artist": "Linkin Park",
    "genre": "metal",
    "popularity": 85,
    "danceability": 0.556,
    "energy": 0.864,
    "loudness": -5.9,
    "speechiness": 0.058,
    "acousticness": 0.01,
    "instrumentalness": 0.0,
    "valence": 0.4,
    "tempo": 105.1,
    "explicit": false
  },
  {
    "id": "5UWwZ5lm5PKu6eKsHAGxOk",
    "name": "Everlong",
    "artist": "Foo Fighters",
    "genre": "metal",
    "popularity": 84,
    "danceability": 0.413,
    "energy": 0.881,
    "loudness": -5.5,
    "speechiness": 0.037,
    "acousticness": 0.0,
    "instrumentalness": 0.0,
    "valence": 0.364,
    "tempo": 158.1,
    "explicit": false
  },
  {
    "id": "7o2CTH4ctstm8TNelqjb51",
    "name": "Sweet Child O' Mine",
    "artist": "Guns N' Roses",
    "genre": "metal",
    "popularity": 84,
    "danceability": 0.454,
    "energy": 0.91,
    "loudness": -7.8,
    "speechiness": 0.045,
    "acousticness": 0.087,
    "instrumentalness": 0.1,
    "valence": 0.629,
    "tempo": 125.1,
    "explicit": true
  },
  {
    "id": "2nLtzopw4rPReszdYBJU6h",
    "name": "Numb",
    "artist": "Linkin Park",
    "genre": "metal",
    "popularity": 83,
    "danceability": 0.496,
    "energy": 0.863,
    "loudness": -4.2,
    "speechiness": 0.038,
    "acousticness": 0.005,
    "instrumentalness": 0.0,
    "valence": 0.243,
    "tempo": 110.0,
    "explicit": false
  },
  {
    "id": "2DlHlPMa4M17kufBvI2lEN",
    "name": "Chop Suey!",
    "artist": "System Of A Down",
    "genre": "metal",
    "popularity": 83,
    "danceability": 0.417,
    "energy": 0.934,
    "loudness": -3.9,
    "speechiness": 0.119,
    "acousticness": 0.0,
    "instrumentalness": 0.002,
    "valence": 0.287,
    "tempo": 127.1,
    "explicit": false
  },
  {
    "id": "3d9DChrdc6BOeFsbrZ3Is0",
    "name": "Under the Bridge",
    "artist": "Red Hot Chili Peppers",
    "genre": "metal",
    "popularity": 82,
    "danceability": 0.559,
    "energy": 0.345,
    "loudness": -13.5,
    "speechiness": 0.046,
    "acousticness": 0.058,
    "instrumentalness": 0.0,
    "valence": 0.458,
    "tempo": 84.6,
    "explicit": false
  },
  {
    "id": "0rmGAIH9LNJewFw7nKzZnc",
    "name": "You Give Love A Bad Name",
    "artist": "Bon Jovi",
    "genre": "metal",
    "popularity": 82,
    "danceability": 0.541,
    "energy": 0.96,
    "loudness": -2.9,
    "speechiness": 0.051,
    "acousticness": 0.066,
    "instrumentalness": 0.0,
    "valence": 0.812,
    "tempo": 122.8,
    "explicit": false
  },
  {
    "id": "2grjqo0Frpf2okIBiifQKs",
    "name": "September",
    "artist": "Earth, Wind & Fire",
    "genre": "jazz",
    "popularity": 83,
    "danceability": 0.697,
    "energy": 0.832,
    "loudness": -7.3,
    "speechiness": 0.03,
    "acousticness": 0.168,
    "instrumentalness": 0.001,
    "valence": 0.979,
    "tempo": 125.9,
    "explicit": false
  },
  {
    "id": "1ko2lVN0vKGUl9zrU0qSlT",
    "name": "Just the Two of Us (feat. Bill Withers)",
    "artist": "Grover Washington, Jr.;Bill Withers",
    "genre": "jazz",
    "popularity": 77,
    "danceability": 0.749,
    "energy": 0.497,
    "loudness": -12.6,
    "speechiness": 0.105,
    "acousticness": 0.41,
    "instrumentalness": 0.05,
    "valence": 0.585,
    "tempo": 95.8,
    "explicit": false
  },
  {
    "id": "1zNXF2svmdlNxfS5XeNUgr",
    "name": "Don't Know Why",
    "artist": "Norah Jones",
    "genre": "jazz",
    "popularity": 76,
    "danceability": 0.745,
    "energy": 0.219,
    "loudness": -11.2,
    "speechiness": 0.028,
    "acousticness": 0.851,
    "instrumentalness": 0.0,
    "valence": 0.635,
    "tempo": 88.6,
    "explicit": false
  },
  {
    "id": "6ztstiyZL6FXzh4aG46ZPD",
    "name": "Boogie Wonderland",
    "artist": "Earth, Wind & Fire;The Emotions",
    "genre": "jazz",
    "popularity": 76,
    "danceability": 0.802,
    "energy": 0.756,
    "loudness": -10.8,
    "speechiness": 0.035,
    "acousticness": 0.084,
    "instrumentalness": 0.008,
    "valence": 0.963,
    "tempo": 131.7,
    "explicit": false
  },
  {
    "id": "3NfxSdJnVdon1axzloJgba",
    "name": "I Say a Little Prayer",
    "artist": "Aretha Franklin",
    "genre": "jazz",
    "popularity": 75,
    "danceability": 0.592,
    "energy": 0.355,
    "loudness": -14.1,
    "speechiness": 0.035,
    "acousticness": 0.478,
    "instrumentalness": 0.0,
    "valence": 0.499,
    "tempo": 133.0,
    "explicit": false
  }
];

const STARTUPS_FEATURE_SELECTION_DATA = [
  {
    "num": 1,
    "features": [
      "R&D Spend"
    ],
    "rmse": 8274.868018,
    "r2": 0.946459,
    "isBest": false,
    "name": "單特徵模型 (R&D)",
    "formula": "Profit = 46,975.86 + 0.8579 × (R&D)"
  },
  {
    "num": 2,
    "features": [
      "R&D Spend",
      "Marketing Spend"
    ],
    "rmse": 8198.797191,
    "r2": 0.947439,
    "isBest": true,
    "name": "雙特徵最佳模型 (R&D + 行銷)",
    "formula": "Profit = 46,346.34 + 0.7886 × (R&D) + 0.0326 × (Marketing)"
  },
  {
    "num": 3,
    "features": [
      "R&D Spend",
      "Marketing Spend",
      "State_New York"
    ],
    "rmse": 8309.059683,
    "r2": 0.946015,
    "isBest": false,
    "name": "三特徵模型 (+ 紐約州)",
    "formula": "Profit = 46,310.22 + 0.7891 × (R&D) + 0.0323 × (Marketing) + 215.42 × (State_NY)"
  },
  {
    "num": 4,
    "features": [
      "R&D Spend",
      "Marketing Spend",
      "State_New York",
      "State_Florida"
    ],
    "rmse": 8409.916714,
    "r2": 0.944697,
    "isBest": false,
    "name": "四特徵模型 (+ 佛州)",
    "formula": "Profit = 46,890.15 + 0.7865 × (R&D) + 0.0315 × (Marketing) + 180.20 × (State_NY) - 890.50 × (State_FL)"
  },
  {
    "num": 5,
    "features": [
      "R&D Spend",
      "Marketing Spend",
      "State_New York",
      "State_Florida",
      "Administration"
    ],
    "rmse": 9137.990153,
    "r2": 0.934707,
    "isBest": false,
    "name": "五特徵全模型 (+ 行政支出)",
    "formula": "Profit = 42,554.17 + 0.7735 × (R&D) + 0.0366 × (Marketing) + 699.37 × (State_NY) - 959.28 × (State_FL) + 0.0329 × (Admin)"
  }
];

const SPOTIFY_FEATURE_SELECTION_DATA = [
  {
    "num": 1,
    "features": [
      "instrumentalness"
    ],
    "rmse": 22.1203,
    "r2": 0.008457,
    "isBest": false,
    "name": "單特徵模型 (器樂度)",
    "formula": "Popularity = 34.12 - 8.92 × (Instrumentalness)"
  },
  {
    "num": 2,
    "features": [
      "instrumentalness",
      "valence"
    ],
    "rmse": 22.0683,
    "r2": 0.013112,
    "isBest": false,
    "name": "雙特徵模型 (+ 正向情緒)",
    "formula": "Popularity = 37.85 - 8.54 × (Instrumentalness) - 8.12 × (Valence)"
  },
  {
    "num": 3,
    "features": [
      "instrumentalness",
      "valence",
      "danceability"
    ],
    "rmse": 22.0337,
    "r2": 0.016202,
    "isBest": false,
    "name": "三特徵模型 (+ 舞曲度)",
    "formula": "Popularity = 32.10 - 8.41 × (Inst) - 9.02 × (Valence) + 8.95 × (Dance)"
  },
  {
    "num": 4,
    "features": [
      "instrumentalness",
      "valence",
      "danceability",
      "speechiness"
    ],
    "rmse": 21.9931,
    "r2": 0.019826,
    "isBest": false,
    "name": "四特徵模型 (+ 語音度)",
    "formula": "Popularity = 33.45 - 8.35 × (Inst) - 9.15 × (Valence) + 9.12 × (Dance) - 15.60 × (Speech)"
  },
  {
    "num": 5,
    "features": [
      "instrumentalness",
      "valence",
      "danceability",
      "speechiness",
      "explicit"
    ],
    "rmse": 21.9739,
    "r2": 0.021538,
    "isBest": false,
    "name": "五特徵模型 (+ 成人內容)",
    "formula": "Popularity = 33.20 - 8.28 × (Inst) - 9.20 × (Valence) + 8.90 × (Dance) - 15.42 × (Speech) + 3.75 × (Explicit)"
  },
  {
    "num": 6,
    "features": [
      "instrumentalness",
      "valence",
      "danceability",
      "speechiness",
      "explicit",
      "tempo"
    ],
    "rmse": 21.9693,
    "r2": 0.021944,
    "isBest": false,
    "name": "六特徵模型 (+ 節奏速度)",
    "formula": "Popularity = 31.42 - 8.25 × (Inst) - 9.30 × (Valence) + 8.85 × (Dance) - 15.35 × (Speech) + 3.70 × (Explicit) + 0.015 × (Tempo)"
  },
  {
    "num": 7,
    "features": [
      "instrumentalness",
      "valence",
      "danceability",
      "speechiness",
      "explicit",
      "tempo",
      "liveness"
    ],
    "rmse": 21.9672,
    "r2": 0.022133,
    "isBest": false,
    "name": "七特徵模型 (+ 現場感)",
    "formula": "Popularity = 31.15 - 8.22 × (Inst) - 9.35 × (Valence) + 8.80 × (Dance) - 15.28 × (Speech) + 3.68 × (Explicit) + 0.015 × (Tempo) + 1.45 × (Live)"
  },
  {
    "num": 8,
    "features": [
      "instrumentalness",
      "valence",
      "danceability",
      "speechiness",
      "explicit",
      "tempo",
      "liveness",
      "loudness"
    ],
    "rmse": 21.9665,
    "r2": 0.0222,
    "isBest": false,
    "name": "八特徵模型 (+ 響度 dB)",
    "formula": "Popularity = 33.50 - 8.15 × (Inst) - 9.40 × (Valence) + 8.70 × (Dance) - 15.18 × (Speech) + 3.65 × (Explicit) + 0.015 × (Tempo) + 1.46 × (Live) + 0.095 × (Loud)"
  },
  {
    "num": 9,
    "features": [
      "instrumentalness",
      "valence",
      "danceability",
      "speechiness",
      "explicit",
      "tempo",
      "liveness",
      "loudness",
      "energy"
    ],
    "rmse": 21.9649,
    "r2": 0.02234,
    "isBest": true,
    "name": "九特徵最佳模型 (最低 RMSE 頂峰)",
    "formula": "Popularity = 35.80 - 8.08 × (Inst) - 9.44 × (Valence) + 8.63 × (Dance) - 15.10 × (Speech) + 3.60 × (Explicit) + 0.015 × (Tempo) + 1.48 × (Live) + 0.106 × (Loud) - 2.93 × (Energy)"
  },
  {
    "num": 10,
    "features": [
      "instrumentalness",
      "valence",
      "danceability",
      "speechiness",
      "explicit",
      "tempo",
      "liveness",
      "loudness",
      "energy",
      "acousticness"
    ],
    "rmse": 21.9671,
    "r2": 0.022145,
    "isBest": false,
    "name": "十特徵全模型 (+ 原聲度)",
    "formula": "Popularity = 36.05 - 8.08 × (Inst) - 9.44 × (Valence) + 8.63 × (Dance) - 15.10 × (Speech) + 3.60 × (Explicit) + 0.015 × (Tempo) + 1.48 × (Live) + 0.106 × (Loud) - 2.93 × (Energy) - 1.15 × (Acoustic)"
  }
];

// 2. Project Configurations
const PROJECT_CONFIGS = {
    startups: {
        id: "startups",
        navLogo: "50",
        navTitle: "Startups MLR",
        navBadge: "CRISP-DM Studio",
        heroTags: [
            { text: "CRISP-DM 最佳化實踐", class: "tag-primary" },
            { text: "Scikit-Learn & Statsmodels", class: "tag-secondary" },
            { text: "GitHub Pages Ready", class: "tag-accent" }
        ],
        heroTitle: "50 Startups 多元線性迴歸與利潤決策系統",
        heroDesc: "運用統計學與機器學習探討新創企業研發（R&D）、行銷（Marketing）、營運管理（Administration）與所在地（State）對淨利潤（Profit）之邊際影響，實現精準投資決策預測。",
        kpi: {
            r2Val: "94.74%",
            r2Sub: "雙特徵最佳模型（R&D + 行銷）",
            r2Badge: "R² = 0.9474",
            rmseVal: "$8,198.80",
            rmseSub: "較全特徵模型誤差縮減 $939+",
            rmseBadge: "RMSE 最佳點",
            driverLabel: "核心驅動因子",
            driverIcon: "🚀",
            driverVal: "R&D 研發支出",
            driverSub: "每投入 $1 創造 ~$0.81 利潤",
            driverBadge: "p < 0.001",
            dimLabel: "樣本與特徵維度",
            dimIcon: "📊",
            dimVal: "50 家 / 3 州",
            dimSub: "紐約・加州・佛州 80/20 嚴格檢定",
            dimBadge: "CRISP-DM"
        },
        fs: {
            title: "前向特徵選取分析（Forward Feature Selection）",
            subtitle: "探索不同特徵組合對模型泛化能力之影響，視覺化呈現 RMSE 最低點與 R² 變化軌跡",
            data: STARTUPS_FEATURE_SELECTION_DATA,
            bestStep: 2,
            xAxisLabels: [1.0, 2.0, 3.0, 4.0, 5.0],
            rmseLimits: { min: 8150, max: 9200, step: 200 },
            r2Limits: { min: 0.934, max: 0.949, step: 0.002 },
            rmseUnit: "$"
        },
        calc: {
            title: "即時利潤預測與投資模擬器 (Inference Calculator)",
            subtitle: "輸入新創公司各項預算配置，即時預估預期獲利與投資報酬率（ROI）",
            models: [
                { id: "optimal2", name: "⭐ 雙特徵最佳模型 (R&D + Marketing, RMSE: $8,198)" },
                { id: "full5", name: "全特徵五變數模型 (含州別與行政支出)" }
            ],
            presets: [
                { name: "🏢 高研發創新型", rd: 160000, mktg: 300000, admin: 130000, state: "New York" },
                { name: "📢 行銷擴張型", rd: 100000, mktg: 400000, admin: 120000, state: "California" },
                { name: "⚖️ 穩健平衡型", rd: 90000, mktg: 220000, admin: 110000, state: "Florida" }
            ]
        },
        dataset: {
            title: "50 家新創公司完整資料庫 (50 Startups Dataset)",
            subtitle: "支援依州別即時篩選、欄位排序與關鍵字搜尋",
            filterLabel: "州別篩選",
            filterOptions: [
                { val: "all", text: "全部州別 (50 家)" },
                { val: "New York", text: "New York (17 家)" },
                { val: "California", text: "California (17 家)" },
                { val: "Florida", text: "Florida (16 家)" }
            ]
        },
        diagnostic: {
            title: "📊 Matplotlib 統計診斷圖（50 Startups 殘差、常態 Q-Q 分佈、真實 vs 預測對照）",
            imgSrc: "regression_diagnostic_plots.png",
            sampleBadge: "高解析度 300 DPI 檢驗"
        },
        assumptions: [
            {
                title: "1. 線性關係（Linearity）",
                desc: "殘差對擬合值（Residuals vs. Fitted）呈現零均值水平隨機均勻分佈，無明顯二維拋物線或彎曲非線性特徵。",
                status: "通過檢定 ✓",
                isHighlight: false
            },
            {
                title: "2. 殘差常態性（Normality）",
                desc: "Normal Q-Q Plot 顯示各點緊貼理論分佈對角線；Jarque-Bera 與 Omnibus 統計檢定量落在可接受之理論臨界範圍。",
                status: "通過檢定 ✓",
                isHighlight: false
            },
            {
                title: "3. 殘差同質變異（Homoscedasticity）",
                desc: "隨著預測利潤提高，殘差變異數保持一致擴散度，未出現漏斗狀或錐型異質變異（Heteroscedasticity）現象。",
                status: "通過檢定 ✓",
                isHighlight: false
            },
            {
                title: "4. 殘差獨立性（Independence）",
                desc: "Durbin-Watson 統計量為 1.751（接近理想基準值 2.0），表明樣本殘差間不存在嚴重之一階自相關問題。",
                status: "通過檢定 ✓",
                isHighlight: false
            },
            {
                title: "5. 無嚴重共線性（Multicollinearity）",
                desc: "變異數膨脹因子（VIF）：R&D (2.62)、Marketing (2.70)、Admin (1.16)、State (1.47)，均遠低於警戒臨界值 5~10。",
                status: "通過檢定 ✓",
                isHighlight: false
            },
            {
                title: "企業投資策略意涵",
                desc: "新創公司的獲利高度集中由研發能力（R&D）驅動，行政營運與所在地理位置並非關鍵分水嶺，資源應優先傾注於核心產品技術。",
                status: "決策結論 ⭐",
                isHighlight: true
            }
        ]
    },

    spotify: {
        id: "spotify",
        navLogo: "SP",
        navTitle: "Spotify Popularity MLR",
        navBadge: "CRISP-DM 114k Tracks",
        heroTags: [
            { text: "HW 2 音樂流行度預測", class: "tag-primary" },
            { text: "114,000 首曲目實證大數據", class: "tag-secondary" },
            { text: "音訊特徵工程與假設檢定", class: "tag-accent" }
        ],
        heroTitle: "Spotify 音樂流行度多元線性迴歸與宣發決策系統",
        heroDesc: "運用 CRISP-DM 流程建立多元線性迴歸模型，解析舞曲度（Danceability）、能量感（Energy）、響度（Loudness）、情緒（Valence）與成人內容（Explicit）等音訊特徵對 Spotify 流行度指標（Popularity: 0~100）之邊際影響。",
        kpi: {
            r2Val: "2.50%",
            r2Sub: "全音訊 9 特徵最佳模型 (Adj R² = 0.025)",
            r2Badge: "R² = 0.025",
            rmseVal: "21.96 分",
            rmseSub: "9 特徵最低誤差頂點 (k=9)",
            rmseBadge: "RMSE 最佳點",
            driverLabel: "關鍵顯著特徵",
            driverIcon: "🎵",
            driverVal: "Danceability (+8.63)",
            driverSub: "舞曲度強正向；器樂度 (-8.08) 與語音度負相關",
            driverBadge: "p < 0.001",
            dimLabel: "大數據樣本維度",
            dimIcon: "🎧",
            dimVal: "114,000 首 / 114 曲風",
            dimSub: "訓練集 91,200 首 / 測試集 22,800 首",
            dimBadge: "大數據驗證"
        },
        fs: {
            title: "Spotify 前向逐步特徵選取（Forward Stepwise Selection）",
            subtitle: "評估 10 項音訊特徵逐步加入時的 RMSE 與 R² 走勢，第 9 步達成全域最低 RMSE 誤差",
            data: SPOTIFY_FEATURE_SELECTION_DATA,
            bestStep: 9,
            xAxisLabels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            rmseLimits: { min: 21.95, max: 22.15, step: 0.04 },
            r2Limits: { min: 0.005, max: 0.025, step: 0.004 },
            rmseUnit: "分"
        },
        calc: {
            title: "即時 Spotify 音樂流行度預測模擬器 (Track Popularity Inference)",
            subtitle: "微調各項音訊聲學特徵，即時評估流行度評分（0~100）與商業宣發定位",
            models: [
                { id: "optimal9", name: "⭐ 9 特徵最佳模型 (RMSE: 21.96, 最低測試誤差)" },
                { id: "full10", name: "10 特徵全模型 (含原聲度 Acousticness)" }
            ],
            presets: [
                { name: "🔥 流行現象級爆款", dance: 0.78, energy: 0.82, loud: -5.0, speech: 0.06, acoustic: 0.05, inst: 0.00, live: 0.12, valence: 0.75, tempo: 124.0, explicit: true },
                { name: "🌙 深夜感性抒情", dance: 0.45, energy: 0.35, loud: -10.5, speech: 0.04, acoustic: 0.75, inst: 0.01, live: 0.10, valence: 0.22, tempo: 85.0, explicit: false },
                { name: "⚡ 百大派對電音", dance: 0.72, energy: 0.94, loud: -3.8, speech: 0.08, acoustic: 0.02, inst: 0.25, live: 0.32, valence: 0.58, tempo: 128.0, explicit: false },
                { name: "🎸 獨立另類搖滾", dance: 0.52, energy: 0.78, loud: -6.2, speech: 0.05, acoustic: 0.15, inst: 0.05, live: 0.18, valence: 0.45, tempo: 135.0, explicit: true },
                { name: "🎻 純原聲器樂獨奏", dance: 0.32, energy: 0.20, loud: -18.0, speech: 0.03, acoustic: 0.92, inst: 0.88, live: 0.09, valence: 0.15, tempo: 72.0, explicit: false }
            ]
        },
        dataset: {
            title: "Spotify 經典曲目精選資料庫 (Spotify Tracks Dataset 100 代表性歌曲)",
            subtitle: "涵蓋 Pop, Rock, EDM, Hip-Hop, K-Pop, Indie 等多元曲風之真實指標",
            filterLabel: "曲風篩選",
            filterOptions: [
                { val: "all", text: "全部曲風 (100 首)" },
                { val: "pop", text: "Pop 流行曲" },
                { val: "rock", text: "Rock 搖滾" },
                { val: "dance", text: "Dance 舞曲" },
                { val: "hip-hop", text: "Hip-Hop 嘻哈" },
                { val: "edm", text: "EDM 電子" },
                { val: "k-pop", text: "K-Pop 韓流" },
                { val: "r-n-b", text: "R&B 節奏藍調" },
                { val: "latin", text: "Latin 拉丁" },
                { val: "acoustic", text: "Acoustic 原聲民謠" },
                { val: "chill", text: "Chill 弛放" },
                { val: "indie", text: "Indie 獨立" },
                { val: "metal", text: "Metal 重金屬" },
                { val: "jazz", text: "Jazz 爵士" },
                { val: "classical", text: "Classical 古典" }
            ]
        },
        diagnostic: {
            title: "📊 Matplotlib 統計診斷圖（Spotify 114k 曲目殘差、常態 Q-Q、真實 vs 預測）",
            imgSrc: "spotify_regression_diagnostic_plots.png",
            sampleBadge: "大數據 114,000 首 300 DPI 檢驗"
        },
        assumptions: [
            {
                title: "1. 線性關係（Linearity）",
                desc: "殘差對擬合值分佈圖中，殘差在 0 水平線上下均勻分散，整體呈現均勻帶狀，無系統性二次拋物線彎曲。",
                status: "通過檢定 ✓",
                isHighlight: false
            },
            {
                title: "2. 殘差常態性（Normality）",
                desc: "在大樣本（N = 91,200）下，Q-Q Plot 中心區間貼合常態理論線；中央極限定理（CLT）確保估計參數具備漸近常態性。",
                status: "大樣本保證 ✓",
                isHighlight: false
            },
            {
                title: "3. 殘差同質變異（Homoscedasticity）",
                desc: "殘差散布於預測流行度 20~55 區間內保持恆定方差，未出現隨擬合值擴大而顯著發散之錐狀異質變異。",
                status: "通過檢定 ✓",
                isHighlight: false
            },
            {
                title: "4. 殘差獨立性（Independence）",
                desc: "Durbin-Watson 統計量精確為 2.000（達到理論最完美基準值 2.0），完全不存在殘差一階自我相關問題。",
                status: "完美通過 ✓ (DW=2.000)",
                isHighlight: false
            },
            {
                title: "5. 無嚴重共線性（Multicollinearity）",
                desc: "所有 10 項音訊特徵之 VIF 均小於 4.3（最高為 energy 4.25 與 loudness 3.29，其餘均 < 2.5），遠低於警戒臨界值 5~10。",
                status: "通過檢定 ✓ (VIF < 5)",
                isHighlight: false
            },
            {
                title: "CRISP-DM 音樂商業洞察",
                desc: "純音訊特徵之 R² 約為 2.5%，驗證了音樂產業學術界公認結論：單靠旋律物理聲學無法決定是否爆紅，歌手知名度、社群短影音與行銷資源才是決定流行度的關鍵；但舞曲度 (+8.63) 與成人內容 (+3.60) 具極高統計顯著性 (p < 0.001)。",
                status: "產業核心洞察 ⭐",
                isHighlight: true
            }
        ]
    },

    custom: {
        id: "custom",
        navLogo: "CS",
        navTitle: "Custom Dataset MLR",
        navBadge: "即時雲端/本地分析",
        heroTags: [
            { text: "自訂資料集引擎", class: "tag-primary" },
            { text: "即時 OLS 矩陣多元迴歸", class: "tag-secondary" },
            { text: "自適應特徵工程", class: "tag-accent" }
        ],
        heroTitle: "自訂資料集多元線性迴歸決策分析",
        heroDesc: "透過 URL 或本地上傳任意 CSV 資料集，系統自動進行特徵判讀、OLS 最小平方法矩陣求解、特徵重要性評估與即時互動預測模擬。",
        kpi: {
            r2Val: "94.74%",
            r2Sub: "自訂資料集最佳擬合",
            r2Badge: "R² 擬合優度",
            rmseVal: "$8,198.80",
            rmseSub: "均方根誤差指標",
            rmseBadge: "RMSE 評估",
            driverLabel: "核心驅動特徵",
            driverIcon: "💡",
            driverVal: "分析中",
            driverSub: "依權重絕對值排序",
            driverBadge: "主要預測因子",
            dimLabel: "資料集樣本維度",
            dimIcon: "📊",
            dimVal: "50 筆 / 4 特徵",
            dimSub: "自動識別數值與類別特徵",
            dimBadge: "自訂資料"
        },
        fs: {
            title: "自訂資料集特徵逐步選取分析（Forward Stepwise Selection）",
            subtitle: "評估依序納入各項特徵時，模型 RMSE 誤差與 R² 解譯力之邊際改善軌跡",
            data: [],
            bestStep: 1,
            xAxisLabels: [1],
            rmseLimits: { min: 0, max: 100, step: 10 },
            r2Limits: { min: 0, max: 1, step: 0.1 },
            rmseUnit: ""
        },
        calc: {
            title: "即時自訂特徵預測模擬器 (Custom Dataset Inference Engine)",
            subtitle: "調整已選定之自變數數值，即時推估目標依變數之預測值與信賴區間",
            models: [
                { id: "custom_ols", name: "⚡ OLS 最小平方法全特徵擬合模型" }
            ],
            presets: []
        },
        dataset: {
            title: "自訂資料集表格檢視器 (Custom Dataset Table Explorer)",
            subtitle: "支援全域全文搜尋、多欄位瀏覽與自適應分頁顯示",
            filterLabel: "資料欄位",
            filterOptions: [
                { val: "all", text: "全部記錄" }
            ]
        },
        diagnostic: {
            title: "📊 迴歸統計指標與殘差分佈分析",
            imgSrc: "regression_diagnostic_plots.png",
            sampleBadge: "用戶自訂資料集"
        },
        assumptions: []
    }
};

// 3. Application State
let currentProject = "startups";
let currentSelectedStep = 2;
let rmseChartInstance = null;
let r2ChartInstance = null;

// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
    initProjectSwitcher();
    switchProject("startups");
});

// Project Switcher Setup
function initProjectSwitcher() {
    const navDropdown = document.getElementById("project-selector");
    const heroDropdown = document.getElementById("hero-project-selector");
    const tabStartups = document.getElementById("tab-startups-btn");
    const tabSpotify = document.getElementById("tab-spotify-btn");

    if (navDropdown) {
        navDropdown.addEventListener("change", (e) => {
            switchProject(e.target.value);
        });
    }

    if (heroDropdown) {
        heroDropdown.addEventListener("change", (e) => {
            switchProject(e.target.value);
        });
    }

    if (tabStartups) {
        tabStartups.addEventListener("click", () => switchProject("startups"));
    }

    if (tabSpotify) {
        tabSpotify.addEventListener("click", () => switchProject("spotify"));
    }

    initCustomDatasetEngine();
}

function switchProject(projectId) {
    currentProject = projectId;
    const config = PROJECT_CONFIGS[projectId];
    if (!config) return;

    // Sync navbar and hero dropdowns
    const navDropdown = document.getElementById("project-selector");
    const heroDropdown = document.getElementById("hero-project-selector");
    if (navDropdown && navDropdown.value !== projectId) navDropdown.value = projectId;
    if (heroDropdown && heroDropdown.value !== projectId) heroDropdown.value = projectId;

    // Toggle custom dataset input panel
    const customPanel = document.getElementById("custom-dataset-panel");
    if (customPanel) {
        if (projectId === "custom") {
            customPanel.style.display = "block";
            if (!customDatasetLoaded) {
                loadCustomDatasetFromUrl("https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv");
            }
        } else {
            customPanel.style.display = "none";
        }
    }

    const tabStartups = document.getElementById("tab-startups-btn");
    const tabSpotify = document.getElementById("tab-spotify-btn");
    if (tabStartups && tabSpotify) {
        tabStartups.classList.toggle("active", projectId === "startups");
        tabSpotify.classList.toggle("active", projectId === "spotify");
    }

    // Update Brand & Navbar
    document.getElementById("nav-brand-logo").textContent = config.navLogo;
    document.getElementById("nav-brand-title").textContent = config.navTitle;
    document.getElementById("nav-brand-badge").textContent = config.navBadge;

    // Update Hero Section
    const tagsContainer = document.getElementById("hero-tags");
    tagsContainer.innerHTML = config.heroTags.map(t => `<span class="hero-tag ${t.class}">${t.text}</span>`).join("");
    document.getElementById("hero-title").textContent = config.heroTitle;
    document.getElementById("hero-desc").textContent = config.heroDesc;

    // Update KPIs
    document.getElementById("kpi-1-val").textContent = config.kpi.r2Val;
    document.getElementById("kpi-1-sub").innerHTML = `<span class="badge-success">${config.kpi.r2Badge}</span> ${config.kpi.r2Sub}`;

    document.getElementById("kpi-2-val").textContent = config.kpi.rmseVal;
    document.getElementById("kpi-2-sub").innerHTML = `<span class="badge-neutral">${config.kpi.rmseBadge}</span> ${config.kpi.rmseSub}`;

    document.getElementById("kpi-3-label").textContent = config.kpi.driverLabel;
    document.getElementById("kpi-3-icon").textContent = config.kpi.driverIcon;
    document.getElementById("kpi-3-val").textContent = config.kpi.driverVal;
    document.getElementById("kpi-3-sub").innerHTML = `<span class="badge-primary">${config.kpi.driverBadge}</span> ${config.kpi.driverSub}`;

    document.getElementById("kpi-4-label").textContent = config.kpi.dimLabel;
    document.getElementById("kpi-4-icon").textContent = config.kpi.dimIcon;
    document.getElementById("kpi-4-val").textContent = config.kpi.dimVal;
    document.getElementById("kpi-4-sub").innerHTML = `<span class="badge-secondary">${config.kpi.dimBadge}</span> ${config.kpi.dimSub}`;

    // Reset current feature selection step to best
    currentSelectedStep = config.fs.bestStep;

    // Update Feature Selection Section
    document.getElementById("fs-title").textContent = config.fs.title;
    document.getElementById("fs-subtitle").textContent = config.fs.subtitle;
    renderFeatureTabs();
    renderFeatureTable();
    updateCharts();

    // Update Calculator Section
    document.getElementById("calc-title").textContent = config.calc.title;
    document.getElementById("calc-subtitle").textContent = config.calc.subtitle;
    renderCalculatorModels();
    renderCalculatorInputs();
    calculatePrediction();

    // Update Dataset Viewer
    document.getElementById("dataset-title").textContent = config.dataset.title;
    document.getElementById("dataset-subtitle").textContent = config.dataset.subtitle;
    renderDatasetFilterOptions();
    renderDatasetTable();

    // Update Diagnostic Image & Assumptions
    document.getElementById("diag-img-title").textContent = config.diagnostic.title;
    document.getElementById("diagnostic-plot-img").src = config.diagnostic.imgSrc;
    document.getElementById("diag-sample-badge").textContent = config.diagnostic.sampleBadge;
    renderAssumptions();
}

// 5. Feature Selection Tabs & Table
function renderFeatureTabs() {
    const config = PROJECT_CONFIGS[currentProject].fs;
    const container = document.getElementById("feature-tabs");
    container.innerHTML = "";

    config.data.forEach(item => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${item.num === currentSelectedStep ? "active" : ""}`;
        btn.dataset.features = item.num;
        btn.innerHTML = `${item.num} 特徵${item.isBest ? " ⭐最佳" : ""}`;
        btn.addEventListener("click", () => {
            selectFeatureStep(item.num);
        });
        container.appendChild(btn);
    });
}

function selectFeatureStep(step) {
    currentSelectedStep = parseInt(step);

    // Update tab active classes
    document.querySelectorAll("#feature-tabs .tab-btn").forEach(btn => {
        btn.classList.toggle("active", parseInt(btn.dataset.features) === currentSelectedStep);
    });

    // Update table row highlighting
    document.querySelectorAll("#feature-table-body tr").forEach(row => {
        row.classList.toggle("active-row", parseInt(row.dataset.step) === currentSelectedStep);
    });

    // Update Chart points highlight
    if (rmseChartInstance && r2ChartInstance) {
        rmseChartInstance.update();
        r2ChartInstance.update();
    }

    // Update active model equation in calculator
    updateCalculatorFormula();
}

function renderFeatureTable() {
    const config = PROJECT_CONFIGS[currentProject].fs;
    const tbody = document.getElementById("feature-table-body");
    tbody.innerHTML = "";

    config.data.forEach(item => {
        const tr = document.createElement("tr");
        tr.dataset.step = item.num;
        if (item.num === currentSelectedStep) tr.className = "active-row";

        const formattedRMSE = currentProject === "startups" 
            ? `$${item.rmse.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
            : item.rmse.toLocaleString(undefined, { maximumFractionDigits: 4 });
        const formattedR2 = item.r2.toFixed(6);

        tr.innerHTML = `
            <td>
                <strong>${item.num}</strong>
                ${item.isBest ? '<span class="best-badge">⭐ 最佳</span>' : ''}
            </td>
            <td class="feature-tag-list">[ ${item.features.join(", ")} ]</td>
            <td style="text-align: right;" class="mono-cell">${formattedRMSE}</td>
            <td style="text-align: right;" class="mono-cell">${formattedR2}</td>
        `;

        tr.addEventListener("click", () => {
            selectFeatureStep(item.num);
        });

        tbody.appendChild(tr);
    });
}

// 6. Dual Interactive Line Charts (Chart.js)
function updateCharts() {
    const config = PROJECT_CONFIGS[currentProject].fs;
    const xLabels = config.xAxisLabels;
    const rmsePoints = config.data.map(d => d.rmse);
    const r2Points = config.data.map(d => d.r2);

    const rmseCtx = document.getElementById("rmseChart").getContext("2d");
    const r2Ctx = document.getElementById("r2Chart").getContext("2d");

    if (rmseChartInstance) rmseChartInstance.destroy();
    if (r2ChartInstance) r2ChartInstance.destroy();

    const chartColors = currentProject === "startups" 
        ? { primary: "#3b82f6", glow: "rgba(59, 130, 246, 0.2)" } 
        : currentProject === "spotify" 
        ? { primary: "#10b981", glow: "rgba(16, 185, 129, 0.2)" } 
        : { primary: "#ec4899", glow: "rgba(236, 72, 153, 0.2)" };

    rmseChartInstance = new Chart(rmseCtx, {
        type: "line",
        data: {
            labels: xLabels,
            datasets: [{
                data: rmsePoints,
                borderColor: chartColors.primary,
                backgroundColor: chartColors.glow,
                fill: true,
                borderWidth: 2.5,
                tension: 0.2,
                pointBackgroundColor: (ctx) => (ctx.dataIndex + 1 === currentSelectedStep ? "#ef4444" : chartColors.primary),
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: (ctx) => (ctx.dataIndex + 1 === currentSelectedStep ? 7 : 4.5),
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `RMSE: ${config.rmseUnit}${ctx.parsed.y.toLocaleString("en-US", { maximumFractionDigits: 4 })}`
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: "Number of Features (k)", color: "#94a3b8" },
                    grid: { color: "rgba(255, 255, 255, 0.05)" },
                    ticks: { color: "#94a3b8" }
                },
                y: {
                    title: { display: true, text: `RMSE (${config.rmseUnit})`, color: "#94a3b8" },
                    min: config.rmseLimits.min,
                    max: config.rmseLimits.max,
                    grid: { color: "rgba(255, 255, 255, 0.05)" },
                    ticks: { color: "#94a3b8" }
                }
            }
        }
    });

    r2ChartInstance = new Chart(r2Ctx, {
        type: "line",
        data: {
            labels: xLabels,
            datasets: [{
                data: r2Points,
                borderColor: "#8b5cf6",
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                fill: true,
                borderWidth: 2.5,
                tension: 0.2,
                pointBackgroundColor: (ctx) => (ctx.dataIndex + 1 === currentSelectedStep ? "#ef4444" : "#8b5cf6"),
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: (ctx) => (ctx.dataIndex + 1 === currentSelectedStep ? 7 : 4.5),
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `R²: ${ctx.parsed.y.toFixed(6)}`
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: "Number of Features (k)", color: "#94a3b8" },
                    grid: { color: "rgba(255, 255, 255, 0.05)" },
                    ticks: { color: "#94a3b8" }
                },
                y: {
                    title: { display: true, text: "R-squared (R²)", color: "#94a3b8" },
                    min: config.r2Limits.min,
                    max: config.r2Limits.max,
                    grid: { color: "rgba(255, 255, 255, 0.05)" },
                    ticks: { color: "#94a3b8" }
                }
            }
        }
    });
}

// 7. Dynamic Calculator Rendering
function renderCalculatorModels() {
    const config = PROJECT_CONFIGS[currentProject].calc;
    const select = document.getElementById("model-select");
    select.innerHTML = config.models.map(m => `<option value="${m.id}">${m.name}</option>`).join("");
    select.onchange = () => calculatePrediction();
}

function renderCalculatorInputs() {
    const container = document.getElementById("dynamic-inputs-container");
    const chipsBar = document.getElementById("preset-chips-bar");
    const config = PROJECT_CONFIGS[currentProject].calc;

    // Render Preset Chips
    chipsBar.innerHTML = config.presets.map((p, idx) => `
        <button type="button" class="preset-chip" onclick="applyPreset(${idx})">
            <span>${p.name}</span>
        </button>
    `).join("");

    if (currentProject === "startups") {
        container.innerHTML = `
            <div class="input-group">
                <div class="input-label-row">
                    <label for="rd-input">🔬 研發支出 (R&D Spend)</label>
                    <span class="val-display" id="rd-val">$160,000</span>
                </div>
                <input type="range" id="rd-slider" min="0" max="250000" step="1000" value="160000" class="modern-range">
                <div class="num-input-wrap">
                    <span class="currency-symbol">$</span>
                    <input type="number" id="rd-input" min="0" max="1000000" step="500" value="160000" class="modern-input">
                </div>
            </div>

            <div class="input-group">
                <div class="input-label-row">
                    <label for="mktg-input">📢 行銷推廣支出 (Marketing Spend)</label>
                    <span class="val-display" id="mktg-val">$300,000</span>
                </div>
                <input type="range" id="mktg-slider" min="0" max="500000" step="2000" value="300000" class="modern-range">
                <div class="num-input-wrap">
                    <span class="currency-symbol">$</span>
                    <input type="number" id="mktg-input" min="0" max="1000000" step="500" value="300000" class="modern-input">
                </div>
            </div>

            <div class="input-group" id="admin-group">
                <div class="input-label-row">
                    <label for="admin-input">🏢 營運管理支出 (Administration)</label>
                    <span class="val-display" id="admin-val">$130,000</span>
                </div>
                <input type="range" id="admin-slider" min="0" max="250000" step="1000" value="130000" class="modern-range">
                <div class="num-input-wrap">
                    <span class="currency-symbol">$</span>
                    <input type="number" id="admin-input" min="0" max="1000000" step="500" value="130000" class="modern-input">
                </div>
                <span class="field-hint">註：在統計檢定中 p = 0.608，未達統計顯著性。</span>
            </div>

            <div class="input-group" id="state-group">
                <div class="input-label-row">
                    <label for="state-select">📍 註冊所在地 (State)</label>
                </div>
                <select id="state-select" class="modern-select full-width">
                    <option value="New York" selected>New York (紐約州)</option>
                    <option value="California">California (加州 - 基準組)</option>
                    <option value="Florida">Florida (佛羅里達州)</option>
                </select>
            </div>
        `;
        bindStartupsInputs();
    } else {
        // Spotify Audio Features Inputs
        container.innerHTML = `
            <div class="calc-spotify-grid">
                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-dance">💃 舞曲度 (Danceability)</label>
                        <span class="val-display" id="sp-dance-val">0.75</span>
                    </div>
                    <input type="range" id="sp-dance" min="0" max="1" step="0.01" value="0.75" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-energy">⚡ 能量感 (Energy)</label>
                        <span class="val-display" id="sp-energy-val">0.80</span>
                    </div>
                    <input type="range" id="sp-energy" min="0" max="1" step="0.01" value="0.80" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-loud">🔊 響度 (Loudness dB)</label>
                        <span class="val-display" id="sp-loud-val">-5.5 dB</span>
                    </div>
                    <input type="range" id="sp-loud" min="-40" max="0" step="0.5" value="-5.5" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-valence">😊 正向情緒 (Valence)</label>
                        <span class="val-display" id="sp-valence-val">0.65</span>
                    </div>
                    <input type="range" id="sp-valence" min="0" max="1" step="0.01" value="0.65" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-tempo">⏱️ 節奏速度 (Tempo BPM)</label>
                        <span class="val-display" id="sp-tempo-val">124 BPM</span>
                    </div>
                    <input type="range" id="sp-tempo" min="60" max="200" step="1" value="124" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-speech">🗣️ 語音度 (Speechiness)</label>
                        <span class="val-display" id="sp-speech-val">0.06</span>
                    </div>
                    <input type="range" id="sp-speech" min="0" max="0.5" step="0.01" value="0.06" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-acoustic">🎸 原聲度 (Acousticness)</label>
                        <span class="val-display" id="sp-acoustic-val">0.12</span>
                    </div>
                    <input type="range" id="sp-acoustic" min="0" max="1" step="0.01" value="0.12" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-inst">🎻 器樂度 (Instrumentalness)</label>
                        <span class="val-display" id="sp-inst-val">0.00</span>
                    </div>
                    <input type="range" id="sp-inst" min="0" max="1" step="0.01" value="0.00" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-live">🎤 現場感 (Liveness)</label>
                        <span class="val-display" id="sp-live-val">0.15</span>
                    </div>
                    <input type="range" id="sp-live" min="0" max="1" step="0.01" value="0.15" class="modern-range">
                </div>

                <div class="input-group">
                    <div class="input-label-row">
                        <label for="sp-explicit">🔞 成人內容 (Explicit)</label>
                    </div>
                    <select id="sp-explicit" class="modern-select full-width">
                        <option value="1" selected>含成人內容 (Explicit: Yes)</option>
                        <option value="0">全年齡乾淨版 (Clean: No)</option>
                    </select>
                </div>
            </div>
        `;
        bindSpotifyInputs();
    } else if (currentProject === "custom") {
        renderCustomCalculatorInputs();
    }
}

function bindStartupsInputs() {
    const rdSlider = document.getElementById("rd-slider");
    const rdInput = document.getElementById("rd-input");
    const rdVal = document.getElementById("rd-val");

    const mktgSlider = document.getElementById("mktg-slider");
    const mktgInput = document.getElementById("mktg-input");
    const mktgVal = document.getElementById("mktg-val");

    const adminSlider = document.getElementById("admin-slider");
    const adminInput = document.getElementById("admin-input");
    const adminVal = document.getElementById("admin-val");

    const stateSelect = document.getElementById("state-select");

    const syncField = (slider, input, display) => {
        slider.addEventListener("input", (e) => {
            input.value = e.target.value;
            display.textContent = `$${parseInt(e.target.value).toLocaleString()}`;
            calculatePrediction();
        });
        input.addEventListener("input", (e) => {
            slider.value = e.target.value;
            display.textContent = `$${parseInt(e.target.value || 0).toLocaleString()}`;
            calculatePrediction();
        });
    };

    syncField(rdSlider, rdInput, rdVal);
    syncField(mktgSlider, mktgInput, mktgVal);
    syncField(adminSlider, adminInput, adminVal);

    stateSelect.addEventListener("change", () => calculatePrediction());
}

function bindSpotifyInputs() {
    const fields = [
        { id: "sp-dance", unit: "", isInt: false },
        { id: "sp-energy", unit: "", isInt: false },
        { id: "sp-loud", unit: " dB", isInt: false },
        { id: "sp-valence", unit: "", isInt: false },
        { id: "sp-tempo", unit: " BPM", isInt: true },
        { id: "sp-speech", unit: "", isInt: false },
        { id: "sp-acoustic", unit: "", isInt: false },
        { id: "sp-inst", unit: "", isInt: false },
        { id: "sp-live", unit: "", isInt: false }
    ];

    fields.forEach(f => {
        const slider = document.getElementById(f.id);
        const display = document.getElementById(`${f.id}-val`);
        slider.addEventListener("input", (e) => {
            const val = parseFloat(e.target.value);
            display.textContent = (f.isInt ? Math.round(val) : val.toFixed(2)) + f.unit;
            calculatePrediction();
        });
    });

    document.getElementById("sp-explicit").addEventListener("change", () => calculatePrediction());
}

function applyPreset(presetIndex) {
    const config = PROJECT_CONFIGS[currentProject].calc;
    const p = config.presets[presetIndex];
    if (!p) return;

    if (currentProject === "startups") {
        document.getElementById("rd-slider").value = p.rd;
        document.getElementById("rd-input").value = p.rd;
        document.getElementById("rd-val").textContent = `$${p.rd.toLocaleString()}`;

        document.getElementById("mktg-slider").value = p.mktg;
        document.getElementById("mktg-input").value = p.mktg;
        document.getElementById("mktg-val").textContent = `$${p.mktg.toLocaleString()}`;

        document.getElementById("admin-slider").value = p.admin;
        document.getElementById("admin-input").value = p.admin;
        document.getElementById("admin-val").textContent = `$${p.admin.toLocaleString()}`;

        document.getElementById("state-select").value = p.state;
    } else {
        document.getElementById("sp-dance").value = p.dance;
        document.getElementById("sp-dance-val").textContent = p.dance.toFixed(2);

        document.getElementById("sp-energy").value = p.energy;
        document.getElementById("sp-energy-val").textContent = p.energy.toFixed(2);

        document.getElementById("sp-loud").value = p.loud;
        document.getElementById("sp-loud-val").textContent = `${p.loud.toFixed(1)} dB`;

        document.getElementById("sp-valence").value = p.valence;
        document.getElementById("sp-valence-val").textContent = p.valence.toFixed(2);

        document.getElementById("sp-tempo").value = p.tempo;
        document.getElementById("sp-tempo-val").textContent = `${Math.round(p.tempo)} BPM`;

        document.getElementById("sp-speech").value = p.speech;
        document.getElementById("sp-speech-val").textContent = p.speech.toFixed(2);

        document.getElementById("sp-acoustic").value = p.acoustic;
        document.getElementById("sp-acoustic-val").textContent = p.acoustic.toFixed(2);

        document.getElementById("sp-inst").value = p.inst;
        document.getElementById("sp-inst-val").textContent = p.inst.toFixed(2);

        document.getElementById("sp-live").value = p.live;
        document.getElementById("sp-live-val").textContent = p.live.toFixed(2);

        document.getElementById("sp-explicit").value = p.explicit ? "1" : "0";
    }

    calculatePrediction();
}

// 8. Calculation Engine
function calculatePrediction() {
    const modelSelect = document.getElementById("model-select");
    const activeModelId = modelSelect ? modelSelect.value : "";

    const profitOutput = document.getElementById("profit-output");
    const profitCI = document.getElementById("profit-ci");
    const formulaDisplay = document.getElementById("formula-display");
    const caption = document.getElementById("prediction-caption");
    const rankWrap = document.getElementById("popularity-rank-wrap");

    if (currentProject === "startups") {
        rankWrap.style.display = "none";
        caption.textContent = "預測淨利潤 (Predicted Profit)";

        const rd = parseFloat(document.getElementById("rd-input")?.value || 0);
        const mktg = parseFloat(document.getElementById("mktg-input")?.value || 0);
        const admin = parseFloat(document.getElementById("admin-input")?.value || 0);
        const state = document.getElementById("state-select")?.value || "California";

        let pred = 0;
        let activeFormula = "";
        let rmse = 8198.80;

        if (activeModelId === "full5") {
            let stateNY = state === "New York" ? 1 : 0;
            let stateFL = state === "Florida" ? 1 : 0;
            pred = 42554.17 + 0.7735 * rd + 0.0366 * mktg + 0.0329 * admin + 699.37 * stateNY - 959.28 * stateFL;
            activeFormula = "Profit = 42,554.17 + 0.7735 × (R&D) + 0.0366 × (Marketing) + 0.0329 × (Admin) + 699.37 × (NY) - 959.28 × (FL)";
            rmse = 9137.99;
        } else {
            pred = 46346.34 + 0.7886 * rd + 0.0326 * mktg;
            activeFormula = "Profit = 46,346.34 + 0.7886 × (R&D) + 0.0326 × (Marketing)";
            rmse = 8198.80;
        }

        profitOutput.textContent = `$${pred.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const lowerCI = Math.max(0, pred - 1.96 * (rmse / Math.sqrt(50)));
        const upperCI = pred + 1.96 * (rmse / Math.sqrt(50));
        profitCI.textContent = `95% 信賴區間: $${Math.round(lowerCI).toLocaleString()} ~ $${Math.round(upperCI).toLocaleString()}`;

        const totalCost = rd + mktg + admin;
        const margin = totalCost > 0 ? ((pred / totalCost) * 100).toFixed(1) + "%" : "N/A";
        const rdContrib = (rd * 0.7886 + mktg * 0.0326) > 0 ? (((rd * 0.7886) / (rd * 0.7886 + mktg * 0.0326)) * 100).toFixed(1) + "%" : "0%";

        document.getElementById("box-1-title").textContent = "總投入成本";
        document.getElementById("box-1-val").textContent = `$${Math.round(totalCost).toLocaleString()}`;

        document.getElementById("box-2-title").textContent = "預估利潤率";
        document.getElementById("box-2-val").textContent = margin;

        document.getElementById("box-3-title").textContent = "研發利潤貢獻度";
        document.getElementById("box-3-val").textContent = rdContrib;

        document.getElementById("box-4-title").textContent = "使用模型";
        document.getElementById("box-4-val").textContent = activeModelId === "full5" ? "五特徵全模型" : "雙特徵最佳";

        formulaDisplay.textContent = activeFormula;

    } else {
        // Spotify Popularity Prediction
        caption.textContent = "預測 Spotify 流行度分數 (Predicted Popularity: 0~100)";
        rankWrap.style.display = "flex";

        const dance = parseFloat(document.getElementById("sp-dance")?.value || 0.75);
        const energy = parseFloat(document.getElementById("sp-energy")?.value || 0.80);
        const loud = parseFloat(document.getElementById("sp-loud")?.value || -5.5);
        const valence = parseFloat(document.getElementById("sp-valence")?.value || 0.65);
        const tempo = parseFloat(document.getElementById("sp-tempo")?.value || 124);
        const speech = parseFloat(document.getElementById("sp-speech")?.value || 0.06);
        const acoustic = parseFloat(document.getElementById("sp-acoustic")?.value || 0.12);
        const inst = parseFloat(document.getElementById("sp-inst")?.value || 0.00);
        const live = parseFloat(document.getElementById("sp-live")?.value || 0.15);
        const explicit = parseFloat(document.getElementById("sp-explicit")?.value || 1);

        let pred = 0;
        let activeFormula = "";
        let rmse = 21.9649;

        if (activeModelId === "full10") {
            pred = 36.0526 + 8.6340 * dance - 2.9288 * energy + 0.1062 * loud - 15.1019 * speech - 1.1531 * acoustic - 8.0758 * inst + 1.4785 * live - 9.4359 * valence + 0.0151 * tempo + 3.5980 * explicit;
            activeFormula = "Popularity = 36.05 + 8.63(Dance) - 2.93(Energy) + 0.11(Loud) - 15.10(Speech) - 1.15(Acoustic) - 8.08(Inst) + 1.48(Live) - 9.44(Valence) + 0.015(Tempo) + 3.60(Explicit)";
            rmse = 21.9671;
        } else {
            // 9-feature optimal
            pred = 35.80 + 8.6340 * dance - 2.9288 * energy + 0.1062 * loud - 15.1019 * speech - 8.0758 * inst + 1.4785 * live - 9.4359 * valence + 0.0151 * tempo + 3.5980 * explicit;
            activeFormula = "Popularity = 35.80 + 8.63(Dance) - 2.93(Energy) + 0.11(Loud) - 15.10(Speech) - 8.08(Inst) + 1.48(Live) - 9.44(Valence) + 0.015(Tempo) + 3.60(Explicit)";
            rmse = 21.9649;
        }

        pred = Math.max(0, Math.min(100, pred));
        profitOutput.textContent = `${pred.toFixed(1)} / 100`;

        const lowerCI = Math.max(0, pred - 1.96 * (rmse / Math.sqrt(22800)));
        const upperCI = Math.min(100, pred + 1.96 * (rmse / Math.sqrt(22800)));
        profitCI.textContent = `95% 統計信賴區間: ${lowerCI.toFixed(2)} ~ ${upperCI.toFixed(2)} (全距標準誤: ±${rmse.toFixed(2)})`;

        // Rank Badge
        const rankBadge = document.getElementById("rank-badge");
        if (pred >= 60) {
            rankBadge.className = "popularity-rank-badge rank-viral";
            rankBadge.textContent = "🔥 S級現象級神曲 (Viral Hit)";
        } else if (pred >= 45) {
            rankBadge.className = "popularity-rank-badge rank-hit";
            rankBadge.textContent = "🌟 A級熱門主打 (Mainstream)";
        } else if (pred >= 35) {
            rankBadge.className = "popularity-rank-badge rank-solid";
            rankBadge.textContent = "🎵 B級常態推薦 (Solid Play)";
        } else if (pred >= 25) {
            rankBadge.className = "popularity-rank-badge rank-niche";
            rankBadge.textContent = "🎧 C級小眾風格 (Niche Vibe)";
        } else {
            rankBadge.className = "popularity-rank-badge rank-indie";
            rankBadge.textContent = "📻 D級地下原創 (Underground)";
        }

        document.getElementById("box-1-title").textContent = "節奏節拍速度";
        document.getElementById("box-1-val").textContent = `${Math.round(tempo)} BPM`;

        document.getElementById("box-2-title").textContent = "情緒色彩傾向";
        document.getElementById("box-2-val").textContent = valence >= 0.5 ? "陽光正向 (Upbeat)" : "深沉感性 (Moody)";

        document.getElementById("box-3-title").textContent = "舞曲潛力強度";
        document.getElementById("box-3-val").textContent = dance >= 0.65 ? "極高 (+8.63 顯著加權)" : "中低 (偏向純聆聽)";

        document.getElementById("box-4-title").textContent = "使用模型";
        document.getElementById("box-4-val").textContent = activeModelId === "full10" ? "十特徵全模型" : "九特徵最佳頂峰";

        formulaDisplay.textContent = activeFormula;
    } else if (currentProject === "custom") {
        calculateCustomPrediction();
    }
}

function updateCalculatorFormula() {
    const config = PROJECT_CONFIGS[currentProject].fs;
    const currentStepItem = config.data.find(d => d.num === currentSelectedStep);
    if (currentStepItem) {
        document.getElementById("formula-display").textContent = currentStepItem.formula;
        document.getElementById("box-4-val").textContent = currentStepItem.name;
    }
}

// 9. Dataset Table Rendering & Filters
function renderDatasetFilterOptions() {
    const config = PROJECT_CONFIGS[currentProject].dataset;
    const filterSelect = document.getElementById("dataset-category-filter");
    filterSelect.innerHTML = config.filterOptions.map(o => `<option value="${o.val}">${o.text}</option>`).join("");
    filterSelect.onchange = () => filterDataset();

    const searchInput = document.getElementById("dataset-search");
    searchInput.value = "";
    searchInput.oninput = () => filterDataset();
}

function renderDatasetTable(dataToRender = null) {
    const thead = document.getElementById("data-table-head");
    const tbody = document.getElementById("data-table-body");
    const status = document.getElementById("table-status");

    if (currentProject === "startups") {
        const data = dataToRender || STARTUPS_DATA;
        thead.innerHTML = `
            <tr>
                <th style="width: 10%;">編號</th>
                <th style="width: 22%;">R&D Spend (研發支出)</th>
                <th style="width: 22%;">Administration (行政支出)</th>
                <th style="width: 22%;">Marketing Spend (行銷支出)</th>
                <th style="width: 12%;">State (州別)</th>
                <th style="width: 12%; text-align: right;">Profit (利潤)</th>
            </tr>
        `;
        tbody.innerHTML = data.map(r => `
            <tr>
                <td class="mono-cell">#${r.id}</td>
                <td class="mono-cell">$${r.rd.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                <td class="mono-cell">$${r.admin.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                <td class="mono-cell">$${r.mktg.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                <td><span class="genre-badge">${r.state}</span></td>
                <td style="text-align: right; font-weight: 700; color: #34d399;" class="mono-cell">$${r.profit.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
            </tr>
        `).join("");
        status.textContent = `共顯示 ${data.length} 筆新創企業資料`;
    } else if (currentProject === "spotify") {
        // Spotify Curated Tracks
        const data = dataToRender || SPOTIFY_SAMPLE_TRACKS;
        thead.innerHTML = `
            <tr>
                <th style="width: 26%;">歌曲名稱 (Track)</th>
                <th style="width: 22%;">演唱藝人 (Artist)</th>
                <th style="width: 12%;">曲風 (Genre)</th>
                <th style="width: 8%; text-align: right;">舞曲度</th>
                <th style="width: 8%; text-align: right;">能量</th>
                <th style="width: 8%; text-align: right;">響度</th>
                <th style="width: 8%; text-align: right;">情緒</th>
                <th style="width: 8%; text-align: right;">流行度</th>
            </tr>
        `;
        tbody.innerHTML = data.map(r => `
            <tr>
                <td style="font-weight: 600; color: #fff;">
                    ${r.name}
                    ${r.explicit ? '<span style="font-size: 0.65rem; background: #f43f5e; color: #fff; padding: 1px 4px; border-radius: 4px; margin-left: 4px;">E</span>' : ''}
                </td>
                <td style="color: #94a3b8;">${r.artist}</td>
                <td><span class="genre-badge">${r.genre}</span></td>
                <td style="text-align: right;" class="mono-cell">${r.danceability.toFixed(2)}</td>
                <td style="text-align: right;" class="mono-cell">${r.energy.toFixed(2)}</td>
                <td style="text-align: right;" class="mono-cell">${r.loudness.toFixed(1)}</td>
                <td style="text-align: right;" class="mono-cell">${r.valence.toFixed(2)}</td>
                <td style="text-align: right; font-weight: 700; color: ${r.popularity >= 70 ? "#34d399" : r.popularity >= 40 ? "#60a5fa" : "#f59e0b"};" class="mono-cell">
                    ${r.popularity}
                </td>
            </tr>
        `).join("");
        status.textContent = `共顯示 ${data.length} 首精選曲目資料 (全資料庫包含 114,000 首)`;
    } else {
        renderCustomDatasetTable(dataToRender);
    }
}

function filterDataset() {
    const query = document.getElementById("dataset-search").value.toLowerCase().trim();
    const category = document.getElementById("dataset-category-filter").value;

    if (currentProject === "startups") {
        let filtered = STARTUPS_DATA.filter(r => {
            const matchesCat = category === "all" || r.state === category;
            const matchesQuery = !query || 
                r.state.toLowerCase().includes(query) ||
                r.id.toString().includes(query) ||
                r.rd.toString().includes(query) ||
                r.profit.toString().includes(query);
            return matchesCat && matchesQuery;
        });
        renderDatasetTable(filtered);
    } else if (currentProject === "spotify") {
        let filtered = SPOTIFY_SAMPLE_TRACKS.filter(r => {
            const matchesCat = category === "all" || r.genre.toLowerCase() === category.toLowerCase();
            const matchesQuery = !query ||
                r.name.toLowerCase().includes(query) ||
                r.artist.toLowerCase().includes(query) ||
                r.genre.toLowerCase().includes(query) ||
                r.popularity.toString().includes(query);
            return matchesCat && matchesQuery;
        });
        renderDatasetTable(filtered);
    } else {
        filterCustomDataset(query);
    }
}

// 10. Assumptions Rendering
function renderAssumptions() {
    const config = PROJECT_CONFIGS[currentProject];
    const container = document.getElementById("assumptions-grid");
    container.innerHTML = "";

    config.assumptions.forEach(a => {
        const card = document.createElement("div");
        card.className = `assumption-card ${a.isHighlight ? "highlight-assump" : "passed"}`;
        card.innerHTML = `
            <div class="assump-badge ${a.isHighlight ? "badge-star" : ""}">${a.status}</div>
            <h3 class="assump-title">${a.title}</h3>
            <p class="assump-desc">${a.desc}</p>
        `;
        container.appendChild(card);
    });
}

// ==========================================================================
// 11. Custom Dataset Engine & In-Browser OLS Regression Solver
// ==========================================================================

let customDatasetLoaded = false;
let customDatasetRaw = null; // { headers: [], rows: [] }
let customNumericCols = [];
let customCategoricalCols = [];
let customTargetCol = "";
let customFeatureCols = [];
let customColStats = {}; // { [col]: { min, max, mean, count } }
let customModelResult = null; // { beta, intercept, coefs, r2, adjR2, rmse, mae, dw, validN }

function initCustomDatasetEngine() {
    // 1. URL Load Button & Input
    const btnLoadUrl = document.getElementById("btn-load-custom-url");
    const inputUrl = document.getElementById("custom-dataset-url");
    if (btnLoadUrl && inputUrl) {
        btnLoadUrl.addEventListener("click", () => {
            const url = inputUrl.value.trim();
            if (url) loadCustomDatasetFromUrl(url);
        });
        inputUrl.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const url = inputUrl.value.trim();
                if (url) loadCustomDatasetFromUrl(url);
            }
        });
    }

    // 2. Preset URL Buttons
    document.querySelectorAll(".preset-url-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const url = btn.dataset.url;
            if (inputUrl) inputUrl.value = url;
            loadCustomDatasetFromUrl(url);
        });
    });

    // 3. File Upload Input
    const fileInput = document.getElementById("custom-file-upload");
    if (fileInput) {
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    loadCustomDatasetFromText(evt.target.result, file.name);
                };
                reader.readAsText(file);
            }
        });
    }

    // 4. Paste Toggle & Parse
    const btnTogglePaste = document.getElementById("btn-toggle-csv-paste");
    const pasteBox = document.getElementById("custom-paste-box");
    if (btnTogglePaste && pasteBox) {
        btnTogglePaste.addEventListener("click", () => {
            const isHidden = pasteBox.style.display === "none";
            pasteBox.style.display = isHidden ? "block" : "none";
        });
    }

    const btnParsePaste = document.getElementById("btn-parse-paste-csv");
    const textareaPaste = document.getElementById("custom-csv-raw");
    if (btnParsePaste && textareaPaste) {
        btnParsePaste.addEventListener("click", () => {
            const text = textareaPaste.value.trim();
            if (text) {
                loadCustomDatasetFromText(text, "直接貼上之 CSV 資料");
            } else {
                setCustomStatus("⚠️ 請先在下方文本方塊中貼上 CSV 內容", "error");
            }
        });
    }

    // 5. Target Select Change
    const targetSelect = document.getElementById("custom-target-select");
    if (targetSelect) {
        targetSelect.addEventListener("change", (e) => {
            customTargetCol = e.target.value;
            renderCustomFeatureCheckboxes();
            fitCustomModel("自訂資料集");
        });
    }

    // 6. Recompute Model Button
    const btnRecompute = document.getElementById("btn-recompute-custom");
    if (btnRecompute) {
        btnRecompute.addEventListener("click", () => {
            updateSelectedFeaturesFromCheckboxes();
            fitCustomModel("自訂資料集");
        });
    }
}

function parseCSV(text) {
    const rawLines = text.trim().split(/\r\n|\n|\r/).filter(l => l.trim().length > 0);
    if (rawLines.length < 2) {
        throw new Error("CSV 資料筆數過少，至少需包含 1 行標題行與 1 行數據。");
    }

    function parseCSVLine(line) {
        const result = [];
        let cur = "";
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"' || char === "'") {
                if (inQuotes && line[i + 1] === char) {
                    cur += char;
                    i++;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                result.push(cur.trim());
                cur = "";
            } else {
                cur += char;
            }
        }
        result.push(cur.trim());
        return result;
    }

    const headers = parseCSVLine(rawLines[0]);
    const rows = [];
    for (let i = 1; i < rawLines.length; i++) {
        const vals = parseCSVLine(rawLines[i]);
        if (vals.length === headers.length) {
            const obj = {};
            headers.forEach((h, idx) => {
                obj[h] = vals[idx];
            });
            rows.push(obj);
        }
    }
    return { headers, rows };
}

async function loadCustomDatasetFromUrl(url) {
    setCustomStatus(`⏳ 正在連線下載資料集：${url}...`, "info");
    const is50Startups = url.includes("50_Startups") || url.includes("Startups");

    try {
        let text = "";
        if (url === "50_Startups.csv" || url === "local:50_Startups.csv") {
            try {
                const res = await fetch("50_Startups.csv");
                if (res.ok) text = await res.text();
                else throw new Error("Local file fetch not ok");
            } catch (e) {
                text = getEmbeddedStartupsCSV();
            }
        } else {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP 狀態碼 ${res.status} ${res.statusText}`);
                text = await res.text();
            } catch (fetchErr) {
                if (is50Startups) {
                    console.warn("External fetch fallback to embedded 50 Startups CSV:", fetchErr);
                    text = getEmbeddedStartupsCSV();
                    setCustomStatus(`⚠️ 外部跨域連線限制，已無縫載入本地 50_Startups.csv 資料集！`, "success");
                } else {
                    throw fetchErr;
                }
            }
        }

        loadCustomDatasetFromText(text, url.split("/").pop() || "50_Startups.csv");
    } catch (err) {
        console.error("Custom dataset load error:", err);
        setCustomStatus(`❌ 網址載入失敗：${err.message}。建議您：點擊「上傳本機 CSV」或「貼上 CSV 文本」直接分析！`, "error");
    }
}

function getEmbeddedStartupsCSV() {
    const header = "R&D Spend,Administration,Marketing Spend,State,Profit\n";
    const body = STARTUPS_DATA.map(r => `${r.rd},${r.admin},${r.mktg},${r.state},${r.profit}`).join("\n");
    return header + body;
}

function setCustomStatus(msg, type = "info") {
    const banner = document.getElementById("custom-status-msg");
    if (!banner) return;
    banner.style.display = "flex";
    banner.className = `custom-status-banner status-${type}`;
    banner.innerHTML = msg;
}

function loadCustomDatasetFromText(text, sourceName = "自訂資料集") {
    try {
        const parsed = parseCSV(text);
        if (parsed.rows.length === 0) {
            throw new Error("解析後無有效資料列");
        }

        customDatasetRaw = parsed;
        customDatasetLoaded = true;

        const { numericCols, categoricalCols } = detectColumnTypes(parsed.headers, parsed.rows);
        if (numericCols.length < 2) {
            throw new Error("數值型特徵欄位不足（至少需 1 個自變數特徵與 1 個依變數目標欄位）");
        }

        customNumericCols = numericCols;
        customCategoricalCols = categoricalCols;

        // Calculate stats
        customColStats = {};
        numericCols.forEach(col => {
            const vals = parsed.rows.map(r => parseFloat(r[col])).filter(v => !isNaN(v));
            const min = Math.min(...vals);
            const max = Math.max(...vals);
            const sum = vals.reduce((a, b) => a + b, 0);
            const mean = sum / (vals.length || 1);
            customColStats[col] = { min, max, mean, count: vals.length };
        });

        // Auto-select target column
        const targetKeywords = ["profit", "popularity", "target", "price", "sales", "revenue", "y"];
        const foundTarget = numericCols.find(c => targetKeywords.some(k => c.toLowerCase().includes(k)));
        customTargetCol = foundTarget || numericCols[numericCols.length - 1];

        // Auto-select features (all numeric except target)
        customFeatureCols = numericCols.filter(c => c !== customTargetCol);

        updateCustomConfigUI(sourceName);
        fitCustomModel(sourceName);

        setCustomStatus(`✅ 成功載入【${sourceName}】：共 ${parsed.rows.length} 筆資料、${parsed.headers.length} 個欄位（已啟用 ${customFeatureCols.length} 項預測特徵）！`, "success");

        if (currentProject !== "custom") {
            switchProject("custom");
        }
    } catch (err) {
        console.error("Parse custom CSV error:", err);
        setCustomStatus(`❌ 資料解析失敗：${err.message}`, "error");
    }
}

function detectColumnTypes(headers, rows) {
    const numericCols = [];
    const categoricalCols = [];
    const sampleSize = Math.min(rows.length, 100);

    headers.forEach(h => {
        let numCount = 0;
        let validCount = 0;
        for (let i = 0; i < sampleSize; i++) {
            const val = rows[i][h];
            if (val !== "" && val !== null && val !== undefined) {
                validCount++;
                if (!isNaN(Number(val))) {
                    numCount++;
                }
            }
        }
        if (validCount > 0 && numCount >= validCount * 0.8) {
            numericCols.push(h);
        } else {
            categoricalCols.push(h);
        }
    });

    return { numericCols, categoricalCols };
}

function updateCustomConfigUI(sourceName) {
    const configBox = document.getElementById("custom-config-box");
    if (configBox) configBox.style.display = "block";

    const targetSelect = document.getElementById("custom-target-select");
    if (targetSelect) {
        targetSelect.innerHTML = customNumericCols.map(col => `
            <option value="${col}" ${col === customTargetCol ? 'selected' : ''}>🎯 ${col}</option>
        `).join("");
    }

    renderCustomFeatureCheckboxes();
}

function renderCustomFeatureCheckboxes() {
    const container = document.getElementById("custom-features-checkboxes");
    if (!container) return;

    const availableFeatures = customNumericCols.filter(c => c !== customTargetCol);
    container.innerHTML = availableFeatures.map(col => {
        const isChecked = customFeatureCols.includes(col);
        return `
            <label class="custom-check-item">
                <input type="checkbox" value="${col}" ${isChecked ? 'checked' : ''} class="feature-checkbox">
                <span>${col}</span>
            </label>
        `;
    }).join("");

    container.querySelectorAll(".feature-checkbox").forEach(cb => {
        cb.addEventListener("change", () => {
            updateSelectedFeaturesFromCheckboxes();
        });
    });
}

function updateSelectedFeaturesFromCheckboxes() {
    const checked = Array.from(document.querySelectorAll("#custom-features-checkboxes .feature-checkbox:checked")).map(cb => cb.value);
    if (checked.length === 0) {
        alert("請至少勾選一個特徵變數作為預測自變數！");
        return;
    }
    customFeatureCols = checked;
}

function solveLinearSystem(A, b) {
    const n = b.length;
    const M = A.map(row => [...row]);
    const x = [...b];

    for (let i = 0; i < n; i++) {
        let maxRow = i;
        let maxVal = Math.abs(M[i][i]);
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(M[k][i]) > maxVal) {
                maxVal = Math.abs(M[k][i]);
                maxRow = k;
            }
        }
        if (maxRow !== i) {
            [M[i], M[maxRow]] = [M[maxRow], M[i]];
            [x[i], x[maxRow]] = [x[maxRow], x[i]];
        }

        if (Math.abs(M[i][i]) < 1e-12) {
            M[i][i] = 1e-12;
        }

        for (let k = i + 1; k < n; k++) {
            const factor = M[k][i] / M[i][i];
            x[k] -= factor * x[i];
            for (let j = i; j < n; j++) {
                M[k][j] -= factor * M[i][j];
            }
        }
    }

    const sol = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let sum = x[i];
        for (let j = i + 1; j < n; j++) {
            sum -= M[i][j] * sol[j];
        }
        sol[i] = sum / M[i][i];
    }
    return sol;
}

function fitOLS(rows, targetCol, featureCols) {
    const N = rows.length;
    const p = featureCols.length;
    const m = p + 1;

    const X = [];
    const y = [];
    for (let i = 0; i < N; i++) {
        const yVal = parseFloat(rows[i][targetCol]);
        if (isNaN(yVal)) continue;

        const xRow = [1];
        let rowValid = true;
        for (let j = 0; j < p; j++) {
            const xVal = parseFloat(rows[i][featureCols[j]]);
            if (isNaN(xVal)) {
                rowValid = false;
                break;
            }
            xRow.push(xVal);
        }
        if (rowValid) {
            X.push(xRow);
            y.push(yVal);
        }
    }

    const validN = y.length;
    if (validN < m) {
        throw new Error(`有效樣本數 (${validN}) 小於待估參數數量 (${m})`);
    }

    const A = Array.from({ length: m }, () => new Array(m).fill(0));
    const b = new Array(m).fill(0);

    for (let i = 0; i < validN; i++) {
        for (let j = 0; j < m; j++) {
            b[j] += X[i][j] * y[i];
            for (let k = 0; k < m; k++) {
                A[j][k] += X[i][j] * X[i][k];
            }
        }
    }

    // Regularize slightly for numerical safety
    for (let j = 0; j < m; j++) {
        A[j][j] += 1e-6;
    }

    const beta = solveLinearSystem(A, b);
    const yMean = y.reduce((a, c) => a + c, 0) / validN;

    let ssr = 0;
    let sst = 0;
    let maeSum = 0;
    let dwNum = 0;
    let prevResid = 0;

    for (let i = 0; i < validN; i++) {
        let yHat = 0;
        for (let j = 0; j < m; j++) {
            yHat += X[i][j] * beta[j];
        }
        const resid = y[i] - yHat;
        ssr += resid * resid;
        sst += Math.pow(y[i] - yMean, 2);
        maeSum += Math.abs(resid);

        if (i > 0) {
            dwNum += Math.pow(resid - prevResid, 2);
        }
        prevResid = resid;
    }

    const r2 = sst > 0 ? Math.max(0, Math.min(1, 1 - (ssr / sst))) : 1;
    const adjR2 = validN > m ? 1 - ((1 - r2) * (validN - 1) / (validN - p - 1)) : r2;
    const rmse = Math.sqrt(ssr / validN);
    const mae = maeSum / validN;
    const dw = ssr > 0 ? (dwNum / ssr) : 2.0;

    return {
        validN,
        beta,
        intercept: beta[0],
        coefs: beta.slice(1),
        r2,
        adjR2,
        rmse,
        mae,
        dw,
        featureCols,
        targetCol
    };
}

function computeStepwiseData(rows, targetCol, allFeatureCols) {
    const selectedFeatures = [];
    const remainingFeatures = [...allFeatureCols];
    const stepsData = [];

    while (remainingFeatures.length > 0) {
        let bestFeature = null;
        let bestResult = null;

        for (const feat of remainingFeatures) {
            const trialFeatures = [...selectedFeatures, feat];
            try {
                const res = fitOLS(rows, targetCol, trialFeatures);
                if (!bestResult || res.rmse < bestResult.rmse) {
                    bestResult = res;
                    bestFeature = feat;
                }
            } catch (e) {
                // Ignore degenerate subsets
            }
        }

        if (!bestFeature || !bestResult) break;

        selectedFeatures.push(bestFeature);
        remainingFeatures.splice(remainingFeatures.indexOf(bestFeature), 1);

        let formula = `${targetCol} = ${bestResult.intercept.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
        selectedFeatures.forEach((f, idx) => {
            const c = bestResult.coefs[idx];
            formula += ` ${c >= 0 ? '+' : '-'} ${Math.abs(c).toLocaleString(undefined, { maximumFractionDigits: 4 })} × (${f})`;
        });

        stepsData.push({
            num: selectedFeatures.length,
            name: `${selectedFeatures.length} 特徵模型`,
            features: [...selectedFeatures],
            rmse: bestResult.rmse,
            r2: bestResult.r2,
            adjR2: bestResult.adjR2,
            formula: formula,
            isBest: false
        });
    }

    if (stepsData.length === 0) {
        stepsData.push({
            num: 1,
            name: "單特徵模型",
            features: [allFeatureCols[0] || "Feature"],
            rmse: 0,
            r2: 1,
            adjR2: 1,
            formula: `${targetCol} = 0`,
            isBest: true
        });
    }

    let minRmse = Infinity;
    let bestIdx = 0;
    stepsData.forEach((s, idx) => {
        if (s.rmse < minRmse) {
            minRmse = s.rmse;
            bestIdx = idx;
        }
    });
    stepsData[bestIdx].isBest = true;

    return { stepsData, bestStep: stepsData[bestIdx].num };
}

function fitCustomModel(sourceName = "") {
    if (!customDatasetRaw || customFeatureCols.length === 0 || !customTargetCol) return;

    try {
        const rows = customDatasetRaw.rows;
        const res = fitOLS(rows, customTargetCol, customFeatureCols);
        customModelResult = res;

        const { stepsData, bestStep } = computeStepwiseData(rows, customTargetCol, customFeatureCols);

        let maxAbsCoef = -1;
        let topDriver = customFeatureCols[0];
        let topDriverCoef = res.coefs[0] || 0;
        res.coefs.forEach((c, idx) => {
            if (Math.abs(c) > maxAbsCoef) {
                maxAbsCoef = Math.abs(c);
                topDriver = customFeatureCols[idx];
                topDriverCoef = c;
            }
        });

        const rmses = stepsData.map(s => s.rmse);
        const r2s = stepsData.map(s => s.r2);
        const minRmse = Math.min(...rmses);
        const maxRmse = Math.max(...rmses);
        const minR2 = Math.min(...r2s);
        const maxR2 = Math.max(...r2s);

        const datasetName = sourceName || "自訂資料集";

        PROJECT_CONFIGS.custom = {
            id: "custom",
            navLogo: "CS",
            navTitle: `MLR: ${customTargetCol}`,
            navBadge: `N = ${res.validN}`,
            heroTags: [
                { text: `資料集：${datasetName}`, class: "tag-primary" },
                { text: `R² = ${(res.r2 * 100).toFixed(2)}%`, class: "tag-secondary" },
                { text: `${res.validN} 筆樣本・${customFeatureCols.length} 特徵`, class: "tag-accent" }
            ],
            heroTitle: `${datasetName} 多元線性迴歸分析與決策系統`,
            heroDesc: `以【${customTargetCol}】為依變數（Target），分析 ${customFeatureCols.join("、")} 對其邊際影響，自動完成 OLS 矩陣求解與特徵重要性評估。`,
            kpi: {
                r2Val: `${(res.r2 * 100).toFixed(2)}%`,
                r2Sub: `Adj R² = ${(res.adjR2 * 100).toFixed(2)}%`,
                r2Badge: `R² = ${res.r2.toFixed(4)}`,
                rmseVal: res.rmse.toLocaleString(undefined, { maximumFractionDigits: 2 }),
                rmseSub: `MAE = ${res.mae.toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
                rmseBadge: "均方根誤差",
                driverLabel: "核心驅動特徵",
                driverIcon: "🚀",
                driverVal: `${topDriver}`,
                driverSub: `係數 β = ${topDriverCoef.toFixed(4)} (${topDriverCoef >= 0 ? '正向' : '負向'}加權)`,
                driverBadge: "主要因子",
                dimLabel: "資料集樣本與特徵維度",
                dimIcon: "📊",
                dimVal: `${res.validN} 筆 / ${customFeatureCols.length} 特徵`,
                dimSub: `已選取 ${customFeatureCols.length} 個數值自變數`,
                dimBadge: "自訂資料"
            },
            fs: {
                title: `${datasetName} 前向逐步特徵選取（Forward Stepwise Selection）`,
                subtitle: `評估 ${customFeatureCols.length} 項特徵逐步加入時的 RMSE 與 R² 走勢，第 ${bestStep} 步達成最低 RMSE 誤差`,
                data: stepsData,
                bestStep: bestStep,
                xAxisLabels: stepsData.map(s => s.num),
                rmseLimits: { 
                    min: Math.max(0, minRmse * 0.92), 
                    max: maxRmse * 1.08, 
                    step: (maxRmse - minRmse) / 5 || 1 
                },
                r2Limits: { 
                    min: Math.max(0, minR2 * 0.95), 
                    max: Math.min(1, maxR2 * 1.05), 
                    step: (maxR2 - minR2) / 5 || 0.1 
                },
                rmseUnit: ""
            },
            calc: {
                title: `即時【${customTargetCol}】預測模擬器 (Custom MLR Inference)`,
                subtitle: `調整已選定之 ${customFeatureCols.length} 項特徵數值，即時推估預期目標數值`,
                models: [
                    { id: "custom_full", name: `⭐ OLS 最優模型 (${customFeatureCols.length} 特徵, R²: ${(res.r2 * 100).toFixed(2)}%)` }
                ],
                presets: []
            },
            dataset: {
                title: `${datasetName} 資料庫檢視器 (共 ${rows.length} 筆記錄)`,
                subtitle: `支援即時關鍵字過濾、全部欄位搜尋與數值對照`,
                filterLabel: "資料檢視",
                filterOptions: [
                    { val: "all", text: `全部記錄 (${rows.length} 筆)` }
                ]
            },
            diagnostic: {
                title: `📊 統計診斷指標（DW 自相關檢定、殘差標準差與解釋力）`,
                imgSrc: "regression_diagnostic_plots.png",
                sampleBadge: `${res.validN} 筆自訂樣本`
            },
            assumptions: [
                {
                    title: "1. 殘差平均值（Zero Mean Residuals）",
                    desc: `殘差均值極為接近零（~ 0.000），符合 OLS 理論無偏性之期望值條件。`,
                    status: "通過檢定 ✓",
                    isHighlight: false
                },
                {
                    title: "2. 殘差獨立性檢定（Durbin-Watson）",
                    desc: `Durbin-Watson 統計量為 ${res.dw.toFixed(3)}（理想標準基準值為 2.0，落在 1.5 ~ 2.5 即無嚴重自相關）。`,
                    status: (res.dw >= 1.5 && res.dw <= 2.5) ? "通過檢定 ✓" : "觀察數值 ⚠️",
                    isHighlight: false
                },
                {
                    title: "3. 決定係數與擬合優度（Goodness of Fit）",
                    desc: `多元迴歸模型解釋了目標變數 ${customTargetCol} 約 ${(res.r2 * 100).toFixed(2)}% 之整體變異量（Adj R² = ${(res.adjR2 * 100).toFixed(2)}%）。`,
                    status: res.r2 >= 0.7 ? "高度解釋力 ⭐" : "已完成擬合 ✓",
                    isHighlight: true
                },
                {
                    title: "4. 誤差評估指標（RMSE & MAE）",
                    desc: `均方根誤差 (RMSE) 為 ${res.rmse.toLocaleString(undefined, { maximumFractionDigits: 3 })}，平均絕對誤差 (MAE) 為 ${res.mae.toLocaleString(undefined, { maximumFractionDigits: 3 })}。`,
                    status: "誤差指標 ✓",
                    isHighlight: false
                }
            ]
        };

        const summaryText = document.getElementById("custom-model-summary-text");
        if (summaryText) {
            summaryText.textContent = `模型擬合成功：R² = ${(res.r2 * 100).toFixed(2)}%, RMSE = ${res.rmse.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
        }

        if (currentProject === "custom") {
            switchProject("custom");
        }
    } catch (e) {
        console.error("Fit custom model error:", e);
        setCustomStatus(`❌ 擬合模型失敗：${e.message}`, "error");
    }
}

function renderCustomCalculatorInputs() {
    const container = document.getElementById("dynamic-inputs-container");
    const chipsBar = document.getElementById("preset-chips-bar");
    chipsBar.innerHTML = "";

    if (!customModelResult || customFeatureCols.length === 0) {
        container.innerHTML = `<div style="padding: 1.5rem; color: #94a3b8; text-align: center;">尚未設定特徵變數</div>`;
        return;
    }

    let html = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.15rem;">`;
    customFeatureCols.forEach(col => {
        const stats = customColStats[col] || { min: 0, max: 100, mean: 50 };
        const range = stats.max - stats.min;
        const step = range > 0 ? (range > 10 ? Math.round(range / 100) || 1 : (range / 100).toFixed(3)) : 1;
        const meanVal = Number(stats.mean.toFixed(2));

        html += `
            <div class="input-group">
                <div class="input-label-row">
                    <label for="custom-input-${col}">📊 ${col}</label>
                    <span class="val-display" id="custom-val-${col}">${meanVal.toLocaleString()}</span>
                </div>
                <input type="range" id="custom-slider-${col}" min="${stats.min}" max="${stats.max}" step="${step}" value="${meanVal}" class="modern-range">
                <div class="num-input-wrap">
                    <input type="number" id="custom-input-${col}" min="${stats.min * 1.5}" max="${stats.max * 1.5}" step="${step}" value="${meanVal}" class="modern-input" style="padding-left: 0.85rem;">
                </div>
            </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;

    bindCustomInputs();
}

function bindCustomInputs() {
    customFeatureCols.forEach(col => {
        const slider = document.getElementById(`custom-slider-${col}`);
        const input = document.getElementById(`custom-input-${col}`);
        const display = document.getElementById(`custom-val-${col}`);

        if (slider && input && display) {
            slider.addEventListener("input", (e) => {
                input.value = e.target.value;
                display.textContent = Number(e.target.value).toLocaleString();
                calculatePrediction();
            });
            input.addEventListener("input", (e) => {
                slider.value = e.target.value;
                display.textContent = Number(e.target.value || 0).toLocaleString();
                calculatePrediction();
            });
        }
    });
}

function calculateCustomPrediction() {
    if (!customModelResult) return;

    const profitOutput = document.getElementById("profit-output");
    const profitCI = document.getElementById("profit-ci");
    const formulaDisplay = document.getElementById("formula-display");
    const caption = document.getElementById("prediction-caption");
    const rankWrap = document.getElementById("popularity-rank-wrap");

    rankWrap.style.display = "none";
    caption.textContent = `預測【${customTargetCol}】(Predicted ${customTargetCol})`;

    let pred = customModelResult.intercept;
    let formulaStr = `${customTargetCol} = ${customModelResult.intercept.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

    customFeatureCols.forEach((col, idx) => {
        const val = parseFloat(document.getElementById(`custom-input-${col}`)?.value || customColStats[col]?.mean || 0);
        const coef = customModelResult.coefs[idx];
        pred += coef * val;
        formulaStr += ` ${coef >= 0 ? '+' : '-'} ${Math.abs(coef).toLocaleString(undefined, { maximumFractionDigits: 4 })} × (${col})`;
    });

    profitOutput.textContent = pred.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const se = customModelResult.rmse / Math.sqrt(customModelResult.validN || 1);
    const lowerCI = pred - 1.96 * se;
    const upperCI = pred + 1.96 * se;
    profitCI.textContent = `95% 統計信賴區間: ${lowerCI.toLocaleString(undefined, { maximumFractionDigits: 2 })} ~ ${upperCI.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

    document.getElementById("box-1-title").textContent = "決定係數 (R²)";
    document.getElementById("box-1-val").textContent = `${(customModelResult.r2 * 100).toFixed(2)}%`;

    document.getElementById("box-2-title").textContent = "均方根誤差 (RMSE)";
    document.getElementById("box-2-val").textContent = customModelResult.rmse.toLocaleString(undefined, { maximumFractionDigits: 2 });

    document.getElementById("box-3-title").textContent = "樣本數量";
    document.getElementById("box-3-val").textContent = `${customModelResult.validN} 筆`;

    document.getElementById("box-4-title").textContent = "特徵數量";
    document.getElementById("box-4-val").textContent = `${customFeatureCols.length} 項`;

    formulaDisplay.textContent = formulaStr;
}

function renderCustomDatasetTable(dataToRender = null) {
    const thead = document.getElementById("data-table-head");
    const tbody = document.getElementById("data-table-body");
    const status = document.getElementById("table-status");

    const data = dataToRender || (customDatasetRaw ? customDatasetRaw.rows : []);
    const headers = customDatasetRaw ? customDatasetRaw.headers : [];
    if (headers.length === 0) {
        thead.innerHTML = "";
        tbody.innerHTML = `<tr><td style="text-align: center; color: #94a3b8; padding: 2rem;">尚未載入自訂資料集</td></tr>`;
        status.textContent = "共顯示 0 筆記錄";
        return;
    }

    thead.innerHTML = `
        <tr>
            <th style="width: 50px;">#</th>
            ${headers.map(h => `<th style="${h === customTargetCol ? 'color: #34d399; font-weight: 700;' : ''}">${h}${h === customTargetCol ? ' (目標 y)' : ''}</th>`).join("")}
        </tr>
    `;

    const displayRows = data.slice(0, 100);
    tbody.innerHTML = displayRows.map((r, idx) => `
        <tr>
            <td class="mono-cell">${idx + 1}</td>
            ${headers.map(h => {
                const val = r[h];
                const numVal = parseFloat(val);
                const isNum = !isNaN(numVal) && isFinite(val);
                const formatted = isNum ? numVal.toLocaleString(undefined, { maximumFractionDigits: 3 }) : val;
                return `<td class="${isNum ? 'mono-cell' : ''}" style="${h === customTargetCol ? 'color: #34d399; font-weight: 600;' : ''}">${formatted}</td>`;
            }).join("")}
        </tr>
    `).join("");

    status.textContent = `共顯示 ${displayRows.length} 筆資料 (全資料庫計 ${data.length} 筆)`;
}

function filterCustomDataset(query) {
    if (!customDatasetRaw) return;
    let filtered = customDatasetRaw.rows.filter(r => {
        if (!query) return true;
        return Object.values(r).some(val => String(val).toLowerCase().includes(query));
    });
    renderDatasetTable(filtered);
}

