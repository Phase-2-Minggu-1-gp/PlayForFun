# PlayForFun

PlayForFun API

* **URL**

  http://localhost:3000/users/register

* **Method:**
  

     `POST` 


*  **URL Params**
 
     
    `none`
  


* **Data Params**

  
    `none`
 

* **Success Response:**
  
  * **Code:** 201 <br />
   **Content:** 
 ``````
    {
        "msg": "register success",
        "user": {
            "id": 1,
            "email": "yesia@gmail.com"
    }
``````
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ``````
     { error : "invalid input" }
    ``````

    OR

  * **Code:** 500 NOT FOUND <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>

* **URL**

  http://localhost:3000/users/login

* **Method:**
  

     `POST` 


*  **URL Params**
 
     
    `none`
  


* **Data Params**

  
    `none`
 

* **Success Response:**
  
  * **Code:** 200 <br />
   **Content:** 
    ``````
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }
    ``````
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ``````
     { error : "invalid input" }
    ``````

    OR

  * **Code:** 500 NOT FOUND <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>

* **URL**

  http://localhost:3000/pokemon/list

* **Method:**
  
    `GET` 
  
*  **URL Params**
 
     ``````
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `````` 
    "pokemon": [
        {
            "id": "pl2-104",
            "name": "Floatzel GL",
            "imageUrl": "https://images.pokemontcg.io/pl2/104.png",
            "types": [
                "Water"
            ],
            "hp": "100",
            "attacks": [
                {
                    "cost": [
                        "Water",
                        "Water"
                    ],
                    "name": "Energy Cyclone",
                    "text": "Choose as many Energy cards from your hand as you like and show them to your opponent. This attack does 20 damage times the number of Energy cards you chose. Put those Energy cards on top of your deck. Shuffle your deck afterward.",
                    "damage": "20×",
                    "convertedEnergyCost": 2
                }
            ],
            "weaknesses": [
                {
                    "type": "Lightning",
                    "value": "×2"
                }
            ]
        },......
    ``````
   
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>

* **URL**

  http://localhost:3000/pokemon/water

* **Method:**
  
    `GET` 
  
*  **URL Params**
 
     ``````
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `````` 
    "pokemon": [
        {
            "id": "pl2-104",
            "name": "Floatzel GL",
            "imageUrl": "https://images.pokemontcg.io/pl2/104.png",
            "types": [
                "Water"
            ],
            "hp": "100",
            "attacks": [
                {
                    "cost": [
                        "Water",
                        "Water"
                    ],
                    "name": "Energy Cyclone",
                    "text": "Choose as many Energy cards from your hand as you like and show them to your opponent. This attack does 20 damage times the number of Energy cards you chose. Put those Energy cards on top of your deck. Shuffle your deck afterward.",
                    "damage": "20×",
                    "convertedEnergyCost": 2
                }
            ],
            "weaknesses": [
                {
                    "type": "Lightning",
                    "value": "×2"
                }
            ]
        },......
    ``````
   
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>

* **URL**

  http://localhost:3000/pokemon/grass

* **Method:**
  
    `GET` 
  
*  **URL Params**
 
     ``````
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `````` 
    "pokemon": [
        {
            "id": "xy7-10",
            "name": "Vespiquen",
            "imageUrl": "https://images.pokemontcg.io/xy7/10.png",
            "types": [
                "Grass"
            ],
            "hp": "90",
            "attacks": [
                {
                    "cost": [
                        "Colorless"
                    ],
                    "name": "Intelligence Gathering",
                    "text": "You may draw cards until you have 6 cards in your hand.",
                    "damage": "10",
                    "convertedEnergyCost": 1
                },
                {
                    "cost": [
                        "Colorless",
                        "Colorless"
                    ],
                    "name": "Bee Revenge",
                    "text": "This attack does 10 more damage for each Pokémon in your discard pile.",
                    "damage": "20+",
                    "convertedEnergyCost": 2
                }
            ],
            "weaknesses": [
                {
                    "type": "Fire",
                    "value": "×2"
                }
            ]
        }......
    ``````
   
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>

* **URL**

  http://localhost:3000/pokemon/pcychic

* **Method:**
  
    `GET` 
  
*  **URL Params**
 
     ``````
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `````` 
    "pokemon": [
        {
            "id": "pl2-103",
            "name": "Alakazam 4",
            "imageUrl": "https://images.pokemontcg.io/pl2/103.png",
            "types": [
                "Psychic"
            ],
            "hp": "100",
            "attacks": [
                {
                    "cost": [
                        "Psychic",
                        "Psychic",
                        "Colorless"
                    ],
                    "name": "Mind Shock",
                    "text": "This attack's damage isn't affected by Weakness or Resistance.",
                    "damage": "50",
                    "convertedEnergyCost": 3
                }
            ],
            "weaknesses": [
                {
                    "type": "Psychic",
                    "value": "×2"
                }
            ]
        },
        {
            "id": "dp6-107",
            "name": "Misdreavus",
            "imageUrl": "https://images.pokemontcg.io/dp6/107.png",
            "types": [
                "Psychic"
            ],
            "hp": "60",
            "attacks": [
                {
                    "cost": [
                        "Free"
                    ],
                    "name": "Show Off",
                    "text": "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
                    "damage": "",
                    "convertedEnergyCost": 0
                },
                {
                    "cost": [
                        "Psychic"
                    ],
                    "name": "Payback",
                    "text": "If your opponent has only 1 Prize card left, this attack does 10 damage plus 20 more damage.",
                    "damage": "10+",
                    "convertedEnergyCost": 1
                }
            ],
            "weaknesses": [
                {
                    "type": "Darkness",
                    "value": "+10"
                }
            ]
        }......
    ``````
   
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>

* **URL**

  http://localhost:3000/pokemon/lighting

* **Method:**
  
    `GET` 
  
*  **URL Params**
 
     ``````
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `````` 
    "pokemon": [
        {
            "id": "xy11-41",
            "name": "Joltik",
            "imageUrl": "https://images.pokemontcg.io/xy11/41.png",
            "types": [
                "Lightning"
            ],
            "hp": "30",
            "attacks": [
                {
                    "cost": [
                        "Lightning"
                    ],
                    "name": "Attach",
                    "text": "",
                    "damage": "10",
                    "convertedEnergyCost": 1
                }
            ],
            "weaknesses": [
                {
                    "type": "Fighting",
                    "value": "×2"
                }
            ]
        },
        {
            "id": "ex16-16",
            "name": "Magneton",
            "imageUrl": "https://images.pokemontcg.io/ex16/16.png",
            "types": [
                "Lightning"
            ],
            "hp": "70",
            "attacks": [
                {
                    "cost": [
                        "Lightning",
                        "Colorless"
                    ],
                    "name": "Magnetic Force",
                    "text": "Does 10 damage times the amount of Energy attached to all of your Pokémon (including Magneton).",
                    "damage": "10×",
                    "convertedEnergyCost": 2
                }
            ],
            "weaknesses": [
                {
                    "type": "Fighting",
                    "value": "×2"
                }
            ]
        }......
    ``````
   
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>


* **URL**

  http://localhost:3000/mtg/cards

* **Method:**
  
    `GET` 
  
*  **URL Params**
 
     ``````
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `````` 
    "cards": [
        {
            "name": "Abundance",
            "manaCost": "{2}{G}{G}",
            "cmc": 4,
            "colors": [
                "Green"
            ],
            "colorIdentity": [
                "G"
            ],
            "type": "Enchantment",
            "supertypes": [],
            "types": [
                "Enchantment"
            ],
            "subtypes": [],
            "rarity": "Rare",
            "set": "10E",
            "setName": "Tenth Edition",
            "text": "If you would draw a card, you may instead choose land or nonland and reveal cards from the top of your library until you reveal a card of the chosen kind. Put that card into your hand and put all other cards revealed this way on the bottom of your library in any order.",
            "artist": "Rebecca Guay",
            "number": "249",
            "layout": "normal",
            "multiverseid": 130483,
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130483&type=card",
            "rulings": [
                {
                    "date": "2004-10-04",
                    "text": "This replacement effect replaces the draw, so nothing that triggers on a draw will trigger."
                },
                {
                    "date": "2004-10-04",
                    "text": "If you use this on a multi-card draw, each replaced draw is handled separately. In other words, you reveal and then put on the bottom of the library for the first card, then do the same for the second, and so on. In a multi-card draw you do not have to choose how many of those draws will be replaced before you do any drawing or use of this card."
                },
                {
                    "date": "2004-10-04",
                    "text": "If no card of the chosen type is found before your library empties, you don’t get a card, but you do get to order all the cards in your library any way you choose."
                },
                {
                    "date": "2007-07-15",
                    "text": "If your library is empty, Abundance can prevent you from losing the game for being unable to draw a card. If an effect or turn-based action would cause you to draw a card, you can replace that draw with Abundance’s replacement effect. (It doesn’t matter that you’d be unable to actually draw a card.) Since Abundance’s effect has you put a card into your hand instead of drawing a card, you’ll never be forced to draw a card with an empty library."
                }
            ],
            "foreignNames": [
                {
                    "name": "Überfluss",
                    "text": "Falls du eine Karte ziehen würdest, kannst du stattdessen Land oder Nichtland bestimmen und Karten oben von deiner Bibliothek aufdecken, bis du eine Karte der bestimmten Art aufdeckst. Nimm diese Karte auf deine Hand und lege alle anderen auf diese Weise aufgedeckten Karten in beliebiger Reihenfolge unter deine Bibliothek.",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148402&type=card",
                    "language": "German",
                    "multiverseid": 148402
                },
                {
                    "name": "Abundancia",
                    "text": "Si fueras a robar una carta, en vez de eso, puedes elegir tierra o no tierra y mostrar cartas de la parte superior de tu biblioteca hasta que muestres una carta del tipo elegido. Pon esa carta en tu mano y pon todas las otras cartas mostradas de esta manera en la parte inferior de tu biblioteca en cualquier orden.",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=150565&type=card",
                    "language": "Spanish",
                    "multiverseid": 150565
                },
                {
                    "name": "Abondance",
                    "text": "Si vous deviez piocher une carte, vous pouvez, à la place, choisir terrain ou non-terrain et révéler des cartes du dessus de votre bibliothèque jusqu'à ce que vous révéliez une carte du type choisi. Mettez cette carte dans votre main, et mettez ensuite toutes les autres cartes révélées de cette manière au-dessous de votre bibliothèque, dans l'ordre de votre choix.",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=150182&type=card",
                    "language": "French",
                    "multiverseid": 150182
                },
                {
                    "name": "Abbondanza",
                    "text": "Se stai per pescare una carta, puoi invece scegliere terra o non terra e rivelare carte dalla cima del tuo grimorio fino a che non riveli una carta del tipo scelto. Aggiungi quella carta alla tua mano e metti tutte le altre carte rivelate in questo modo in fondo al tuo grimorio in qualsiasi ordine.",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148785&type=card",
                    "language": "Italian",
                    "multiverseid": 148785
                },
                {
                    "name": "豊穣",
                    "text": "あなたがカードを１枚引く場合、代わりにあなたは土地か土地でないかを選んでもよい。そうしたなら、あなたのライブラリーの一番上のカードを、選んだ種類のカードが公開されるまで公開し続ける。 そのカードをあなたの手札に加え、これにより公開された他のすべてのカードを望む順番であなたのライブラリーの一番下に置く。",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148019&type=card",
                    "language": "Japanese",
                    "multiverseid": 148019
                },
                {
                    "name": "Abundância",
                    "text": "Se for comprar um card, em vez disso, você pode escolher se deve ser ou não um terreno, e revelar cards do topo de seu grimório até revelar um card do tipo escolhido. Coloque aquele card em sua mão e coloque todos os outros cards revelados deste modo no fundo de seu grimório em qualquer ordem.",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149799&type=card",
                    "language": "Portuguese (Brazil)",
                    "multiverseid": 149799
                },
                {
                    "name": "Изобилие",
                    "text": "Если вы должны взять карту, вместо этого вы можете выбрать \"земля\" или \"неземля\" и показывать карты с верха вашей библиотеки до тех пор, пока вы не покажете карту выбранного вида. Положите ту карту в вашу руку и положите все остальные показанные таким образом карты в низ вашей библиотеки в любом порядке.",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149416&type=card",
                    "language": "Russian",
                    "multiverseid": 149416
                },
                {
                    "name": "丰衣足食",
                    "text": "若你将抓一张牌，则你可以改为选择地牌或非地牌，并从你牌库顶开始展示牌，直到你展示出一张该种类的牌为止。 将该牌置于你手上，然后将以此法展示的其它牌以任意顺序置于你的牌库底。",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=147636&type=card",
                    "language": "Chinese Simplified",
                    "multiverseid": 147636
                }
            ],
            "printings": [
                "10E",
                "C17",
                "DDR",
                "USG"
            ],
            "originalText": "If you would draw a card, you may instead choose land or nonland and reveal cards from the top of your library until you reveal a card of the chosen kind. Put that card into your hand and put all other cards revealed this way on the bottom of your library in any order.",
            "originalType": "Enchantment",
            "legalities": [
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "id": "1669af17-d287-5094-b005-4b143441442f"
        },...
        ``````
   
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>

* **URL**

  http://localhost:3000/mtg/cards/:id

* **Method:**
  
    `GET` 
  
*  **URL Params**
 
     ``````
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }


**Required:**
 
   `id=[integer]`
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `````` 
    "card": {
        "name": "Ankh of Mishra",
        "manaCost": "{2}",
        "cmc": 2,
        "colors": [],
        "colorIdentity": [],
        "type": "Artifact",
        "supertypes": [],
        "types": [
            "Artifact"
        ],
        "subtypes": [],
        "rarity": "Rare",
        "set": "LEA",
        "setName": "Limited Edition Alpha",
        "text": "Whenever a land enters the battlefield, Ankh of Mishra deals 2 damage to that land's controller.",
        "artist": "Amy Weber",
        "number": "230",
        "layout": "normal",
        "multiverseid": 1,
        "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=1&type=card",
        "rulings": [
            {
                "date": "2004-10-04",
                "text": "This triggers on any land entering the battlefield. This includes playing a land or putting a land onto the battlefield using a spell or ability."
            },
            {
                "date": "2004-10-04",
                "text": "It determines the land’s controller at the time the ability resolves. If the land leaves the battlefield before the ability resolves, the land’s last controller before it left is used."
            }
        ],
        "foreignNames": [],
        "printings": [
            "2ED",
            "3ED",
            "4BB",
            "4ED",
            "5ED",
            "6ED",
            "CED",
            "CEI",
            "FBB",
            "LEA",
            "LEB",
            "ME1",
            "SUM",
            "VMA"
        ],
        "originalText": "Ankh does 2 damage to anyone who puts a new land into play.",
        "originalType": "Continuous Artifact",
        "legalities": [
            {
                "format": "Commander",
                "legality": "Legal"
            },
            {
                "format": "Duel",
                "legality": "Legal"
            },
            {
                "format": "Legacy",
                "legality": "Legal"
            },
            {
                "format": "Oldschool",
                "legality": "Legal"
            },
            {
                "format": "Penny",
                "legality": "Legal"
            },
            {
                "format": "Vintage",
                "legality": "Legal"
            }
        ],
        "id": "288f479b-0c22-5670-8a41-2a7a881fffe2"
    },...
        ``````
   
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>

* **URL**

  http://localhost:3000/superheroes/

* **Method:**
  
    `GET` 
  
*  **URL Params**
 
     ``````
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5ZXNpYUBnbWFpbC5jb20iLCJpYXQiOjE1OTg5MjE4OTB9.SYXtZ_jojsEUvo2hiHKhctPLwYmKebGTN6zBvpnCUvE"
    }


**Required:**
 
   `id=[integer]`
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `````` 
    "card": {
        "name": "Ankh of Mishra",
        "manaCost": "{2}",
        "cmc": 2,
        "colors": [],
        "colorIdentity": [],
        "type": "Artifact",
        "supertypes": [],
        "types": [
            "Artifact"
        ],
        "subtypes": [],
        "rarity": "Rare",
        "set": "LEA",
        "setName": "Limited Edition Alpha",
        "text": "Whenever a land enters the battlefield, Ankh of Mishra deals 2 damage to that land's controller.",
        "artist": "Amy Weber",
        "number": "230",
        "layout": "normal",
        "multiverseid": 1,
        "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=1&type=card",
        "rulings": [
            {
                "date": "2004-10-04",
                "text": "This triggers on any land entering the battlefield. This includes playing a land or putting a land onto the battlefield using a spell or ability."
            },
            {
                "date": "2004-10-04",
                "text": "It determines the land’s controller at the time the ability resolves. If the land leaves the battlefield before the ability resolves, the land’s last controller before it left is used."
            }
        ],
        "foreignNames": [],
        "printings": [
            "2ED",
            "3ED",
            "4BB",
            "4ED",
            "5ED",
            "6ED",
            "CED",
            "CEI",
            "FBB",
            "LEA",
            "LEB",
            "ME1",
            "SUM",
            "VMA"
        ],
        "originalText": "Ankh does 2 damage to anyone who puts a new land into play.",
        "originalType": "Continuous Artifact",
        "legalities": [
            {
                "format": "Commander",
                "legality": "Legal"
            },
            {
                "format": "Duel",
                "legality": "Legal"
            },
            {
                "format": "Legacy",
                "legality": "Legal"
            },
            {
                "format": "Oldschool",
                "legality": "Legal"
            },
            {
                "format": "Penny",
                "legality": "Legal"
            },
            {
                "format": "Vintage",
                "legality": "Legal"
            }
        ],
        "id": "288f479b-0c22-5670-8a41-2a7a881fffe2"
    },...
        ``````
   
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```


----------------------------------------------------------------
<br/>