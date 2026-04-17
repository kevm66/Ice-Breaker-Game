const questions = [
    // Multiple choice A/B questions
    { type: "choice", options: { en: ["Cats", "Dogs"], de: ["Katzen", "Hunde"], ko: ["고양이", "개"], hi: ["बिल्लियाँ", "कुत्ते"] } },
    { type: "choice", options: { en: ["Coffee", "Tea"], de: ["Kaffee", "Tee"], ko: ["커피", "차"], hi: ["कॉफ़ी", "चाय"] } },
    { type: "choice", options: { en: ["Books", "Movies"], de: ["Bücher", "Filme"], ko: ["책", "영화"], hi: ["किताबें", "फ़िल्में"] } },
    { type: "choice", options: { en: ["Summer", "Winter"], de: ["Sommer", "Winter"], ko: ["여름", "겨울"], hi: ["गर्मी", "सर्दी"] } },
    { type: "choice", options: { en: ["Sweet", "Savory"], de: ["Süß", "Herzhaft"], ko: ["달콤한", "짭짤한"], hi: ["मीठा", "नमकीन"] } },
    { type: "choice", options: { en: ["Plan everything", "Go with the flow"], de: ["Alles planen", "Spontan sein"], ko: ["모두 계획", "즉흥적"], hi: ["सब योजना बनाना", "सहज होना"] } },
    { type: "choice", options: { en: ["Morning", "Night"], de: ["Morgen", "Nacht"], ko: ["아침", "밤"], hi: ["सुबह", "रात"] } },
    { type: "choice", options: { en: ["City", "Countryside"], de: ["Stadt", "Land"], ko: ["도시", "시골"], hi: ["शहर", "ग्रामीण"] } },
    { type: "choice", options: { en: ["Solo travel", "Group travel"], de: ["Alleinreisen", "Gruppenreisen"], ko: ["혼자 여행", "단체 여행"], hi: ["अकेले यात्रा", "समूह यात्रा"] } },
    { type: "choice", options: { en: ["Physical books", "Ebooks"], de: ["Gedruckte Bücher", "E-Books"], ko: ["종이책", "전자책"], hi: ["भौतिक किताबें", "ई-बुक"] } },
    { type: "choice", options: { en: ["Cooking", "Baking"], de: ["Kochen", "Backen"], ko: ["요리", "베이킹"], hi: ["खाना बनाना", "बेकिंग"] } },
    { type: "choice", options: { en: ["Board games", "Video games"], de: ["Brettspiele", "Videospiele"], ko: ["보드게임", "비디오게임"], hi: ["बोर्ड गेम", "वीडियो गेम"] } },
    { type: "choice", options: { en: ["Roller coasters", "Water slides"], de: ["Achterbahnen", "Wasserrutschen"], ko: ["롤러코스터", "워터슬라이드"], hi: ["रोलर कोस्टर", "वॉटर स्लाइड"] } },
    { type: "choice", options: { en: ["Breakfast", "Dinner"], de: ["Frühstück", "Abendessen"], ko: ["아침식사", "저녁식사"], hi: ["नाश्ता", "रात का खाना"] } },
    { type: "choice", options: { en: ["Mountains", "Oceans"], de: ["Berge", "Meer"], ko: ["산", "바다"], hi: ["पहाड़", "समुद्र"] } },
    { type: "choice", options: { en: ["Hand-written notes", "Digital notes"], de: ["Handschriftliche Notizen", "Digitale Notizen"], ko: ["손글씨 메모", "디지털 메모"], hi: ["हाथ से लिखे नोट्स", "डिजिटल नोट्स"] } },
    { type: "choice", options: { en: ["Rainy days", "Sunny days"], de: ["Regentage", "Sonnige Tage"], ko: ["비오는 날", "맑은 날"], hi: ["बरसात के दिन", "धूप वाले दिन"] } },
    { type: "choice", options: { en: ["Art museum", "Science museum"], de: ["Kunstmuseum", "Wissenschaftsmuseum"], ko: ["미술관", "과학관"], hi: ["कला संग्रहालय", "विज्ञान संग्रहालय"] } },
    { type: "choice", options: { en: ["Dine-in", "Delivery"], de: ["Im Restaurant", "Lieferung"], ko: ["매장식사", "배달"], hi: ["रेस्तरां में खाना", "डिलीवरी"] } },
    { type: "choice", options: { en: ["Painting", "Photography"], de: ["Malen", "Fotografie"], ko: ["그림", "사진"], hi: ["पेंटिंग", "फ़ोटोग्राफ़ी"] } },
    { type: "choice", options: { en: ["Wine", "Beer"], de: ["Wein", "Bier"], ko: ["와인", "맥주"], hi: ["वाइन", "बीयर"] } },
    { type: "choice", options: { en: ["Movie theater", "Movies at home"], de: ["Kino", "Filme zu Hause"], ko: ["영화관", "집에서 영화"], hi: ["सिनेमा हॉल", "घर पर फ़िल्में"] } },
    { type: "choice", options: { en: ["Pineapple on pizza", "No pineapple on pizza"], de: ["Ananas auf Pizza", "Keine Ananas auf Pizza"], ko: ["파인애플 피자", "파인애플 없는 피자"], hi: ["पिज़्ज़ा पर अनानास", "पिज़्ज़ा पर अनानास नहीं"] } },
    { type: "choice", options: { en: ["Early bird", "Night owl"], de: ["Frühaufsteher", "Nachteule"], ko: ["아침형 인간", "올빼미형 인간"], hi: ["सुबह जल्दी उठने वाला", "रात का उल्लू"] } },
    { type: "choice", options: { en: ["iOS", "Android"], de: ["iOS", "Android"], ko: ["iOS", "안드로이드"], hi: ["iOS", "Android"] } },
    { type: "choice", options: { en: ["Call", "Text"], de: ["Anrufen", "SMS"], ko: ["전화", "문자"], hi: ["कॉल", "टेक्स्ट"] } },
    { type: "choice", options: { en: ["Beach vacation", "City break"], de: ["Strandurlaub", "Städtereise"], ko: ["해변 휴가", "도시 여행"], hi: ["बीच की छुट्टी", "शहर की छुट्टी"] } },
    { type: "choice", options: { en: ["Shower", "Bath"], de: ["Dusche", "Badewanne"], ko: ["샤워", "목욕"], hi: ["शावर", "बाथ"] } },
    { type: "choice", options: { en: ["Car", "Public transport"], de: ["Auto", "Öffentliche Verkehrsmittel"], ko: ["자동차", "대중교통"], hi: ["कार", "सार्वजनिक परिवहन"] } },
    { type: "choice", options: { en: ["Podcasts", "Music"], de: ["Podcasts", "Musik"], ko: ["팟캐스트", "음악"], hi: ["पॉडकास्ट", "संगीत"] } },
    { type: "choice", options: { en: ["Comedy", "Drama"], de: ["Komödie", "Drama"], ko: ["코미디", "드라마"], hi: ["कॉमेडी", "ड्रामा"] } },
    { type: "choice", options: { en: ["Fiction", "Non-fiction"], de: ["Fiktion", "Sachbücher"], ko: ["소설", "논픽션"], hi: ["कल्पना", "गैर-कल्पना"] } },
    { type: "choice", options: { en: ["Chocolate", "Vanilla"], de: ["Schokolade", "Vanille"], ko: ["초콜릿", "바닐라"], hi: ["चॉकलेट", "वनीला"] } },
    { type: "choice", options: { en: ["Singing", "Dancing"], de: ["Singen", "Tanzen"], ko: ["노래", "춤"], hi: ["गाना", "नृत्य"] } },
    { type: "choice", options: { en: ["Hot weather", "Cold weather"], de: ["Heißes Wetter", "Kaltes Wetter"], ko: ["더운 날씨", "추운 날씨"], hi: ["गर्म मौसम", "ठंडा मौसम"] } },
    { type: "choice", options: { en: ["Window seat", "Aisle seat"], de: ["Fensterplatz", "Gangplatz"], ko: ["창가 좌석", "복도 좌석"], hi: ["खिड़की की सीट", "गलियारे की सीट"] } },
    { type: "choice", options: { en: ["Pizza", "Burgers"], de: ["Pizza", "Burger"], ko: ["피자", "버거"], hi: ["पिज़्ज़ा", "बर्गर"] } },
    { type: "choice", options: { en: ["Early riser", "Sleep in"], de: ["Früh aufstehen", "Ausschlafen"], ko: ["일찍 일어남", "늦잠"], hi: ["जल्दी उठना", "देर तक सोना"] } },
    { type: "choice", options: { en: ["Gym", "Outdoor exercise"], de: ["Fitnessstudio", "Training im Freien"], ko: ["헬스장", "야외 운동"], hi: ["जिम", "बाहरी व्यायाम"] } },
    { type: "choice", options: { en: ["Netflix", "YouTube"], de: ["Netflix", "YouTube"], ko: ["넷플릭스", "유튜브"], hi: ["Netflix", "YouTube"] } },
    { type: "choice", options: { en: ["Save money", "Spend money"], de: ["Geld sparen", "Geld ausgeben"], ko: ["돈 절약", "돈 쓰기"], hi: ["पैसा बचाना", "पैसा खर्च करना"] } },
    { type: "choice", options: { en: ["Team sports", "Individual sports"], de: ["Mannschaftssport", "Individualsport"], ko: ["팀 스포츠", "개인 스포츠"], hi: ["टीम खेल", "व्यक्तिगत खेल"] } },
    { type: "choice", options: { en: ["Sunrise", "Sunset"], de: ["Sonnenaufgang", "Sonnenuntergang"], ko: ["일출", "일몰"], hi: ["सूर्योदय", "सूर्यास्त"] } },
    { type: "choice", options: { en: ["Camping", "Hotel"], de: ["Camping", "Hotel"], ko: ["캠핑", "호텔"], hi: ["कैंपिंग", "होटल"] } },
    { type: "choice", options: { en: ["Cake", "Pie"], de: ["Kuchen", "Torte"], ko: ["케이크", "파이"], hi: ["केक", "पाई"] } },
    { type: "choice", options: { en: ["Salty snacks", "Sweet snacks"], de: ["Salzige Snacks", "Süße Snacks"], ko: ["짭짤한 간식", "달콤한 간식"], hi: ["नमकीन स्नैक्स", "मीठे स्नैक्स"] } },
    { type: "choice", options: { en: ["Horror movies", "Rom-coms"], de: ["Horrorfilme", "Romantische Komödien"], ko: ["공포 영화", "로맨틱 코미디"], hi: ["डरावनी फ़िल्में", "रोमांटिक कॉमेडी"] } },
    { type: "choice", options: { en: ["Action movies", "Thrillers"], de: ["Actionfilme", "Thriller"], ko: ["액션 영화", "스릴러"], hi: ["एक्शन फ़िल्में", "थ्रिलर"] } },
    { type: "choice", options: { en: ["Spicy food", "Mild food"], de: ["Scharfes Essen", "Mildes Essen"], ko: ["매운 음식", "순한 음식"], hi: ["मसालेदार भोजन", "हल्का भोजन"] } },
    { type: "choice", options: { en: ["Introvert", "Extrovert"], de: ["Introvertiert", "Extrovertiert"], ko: ["내향적", "외향적"], hi: ["अंतर्मुखी", "बहिर्मुखी"] } },
    { type: "choice", options: { en: ["Big party", "Small gathering"], de: ["Große Party", "Kleine Zusammenkunft"], ko: ["큰 파티", "작은 모임"], hi: ["बड़ी पार्टी", "छोटी मुलाक़ात"] } },
    { type: "choice", options: { en: ["Work from home", "Work from office"], de: ["Von zu Hause arbeiten", "Vom Büro arbeiten"], ko: ["재택근무", "사무실 근무"], hi: ["घर से काम", "ऑफ़िस से काम"] } },
    { type: "choice", options: { en: ["Mac", "PC"], de: ["Mac", "PC"], ko: ["맥", "PC"], hi: ["Mac", "PC"] } },
    { type: "choice", options: { en: ["Manual transmission", "Automatic transmission"], de: ["Schaltgetriebe", "Automatikgetriebe"], ko: ["수동 변속기", "자동 변속기"], hi: ["मैनुअल ट्रांसमिशन", "ऑटोमैटिक ट्रांसमिशन"] } },
    { type: "choice", options: { en: ["Pasta", "Rice"], de: ["Pasta", "Reis"], ko: ["파스타", "쌀"], hi: ["पास्ता", "चावल"] } },
    { type: "choice", options: { en: ["Concerts", "Festivals"], de: ["Konzerte", "Festivals"], ko: ["콘서트", "페스티벌"], hi: ["संगीत कार्यक्रम", "त्योहार"] } },
    { type: "choice", options: { en: ["Reality TV", "Documentaries"], de: ["Reality-TV", "Dokumentationen"], ko: ["리얼리티 TV", "다큐멘터리"], hi: ["रियलिटी टीवी", "वृत्तचित्र"] } },
    { type: "choice", options: { en: ["Online shopping", "In-store shopping"], de: ["Online-Shopping", "Einkaufen im Geschäft"], ko: ["온라인 쇼핑", "매장 쇼핑"], hi: ["ऑनलाइन शॉपिंग", "स्टोर में शॉपिंग"] } },
    { type: "choice", options: { en: ["Pen", "Pencil"], de: ["Kugelschreiber", "Bleistift"], ko: ["펜", "연필"], hi: ["पेन", "पेंसिल"] } },
    { type: "choice", options: { en: ["Laptop", "Desktop"], de: ["Laptop", "Desktop"], ko: ["노트북", "데스크탑"], hi: ["लैपटॉप", "डेस्कटॉप"] } },
    { type: "choice", options: { en: ["Headphones", "Speakers"], de: ["Kopfhörer", "Lautsprecher"], ko: ["헤드폰", "스피커"], hi: ["हेडफ़ोन", "स्पीकर"] } },
    { type: "choice", options: { en: ["Run", "Walk"], de: ["Laufen", "Gehen"], ko: ["달리기", "걷기"], hi: ["दौड़ना", "चलना"] } },
    { type: "choice", options: { en: ["Sunrise hike", "Sunset picnic"], de: ["Sonnenaufgangswanderung", "Sonnenuntergangs-Picknick"], ko: ["일출 하이킹", "일몰 피크닉"], hi: ["सूर्योदय हाइक", "सूर्यास्त पिकनिक"] } },
    { type: "choice", options: { en: ["Card games", "Dice games"], de: ["Kartenspiele", "Würfelspiele"], ko: ["카드 게임", "주사위 게임"], hi: ["कार्ड गेम", "डाइस गेम"] } },
    { type: "choice", options: { en: ["Sci-fi", "Fantasy"], de: ["Science-Fiction", "Fantasy"], ko: ["공상과학", "판타지"], hi: ["साइ-फ़ाई", "फ़ैंटेसी"] } },
    { type: "choice", options: { en: ["Historical fiction", "Contemporary fiction"], de: ["Historische Fiktion", "Zeitgenössische Fiktion"], ko: ["역사 소설", "현대 소설"], hi: ["ऐतिहासिक कथा", "समकालीन कथा"] } },
    { type: "choice", options: { en: ["Biographies", "Self-help books"], de: ["Biografien", "Selbsthilfebücher"], ko: ["전기", "자기계발서"], hi: ["जीवनी", "स्व-सहायता किताबें"] } },
    { type: "choice", options: { en: ["Stand-up comedy", "Improv comedy"], de: ["Stand-up-Comedy", "Improvisationskomödie"], ko: ["스탠드업 코미디", "즉흥 코미디"], hi: ["स्टैंड-अप कॉमेडी", "इम्प्रोव कॉमेडी"] } },
    { type: "choice", options: { en: ["Live music", "DJ"], de: ["Live-Musik", "DJ"], ko: ["라이브 음악", "DJ"], hi: ["लाइव संगीत", "DJ"] } },
    { type: "choice", options: { en: ["Brunch", "Dinner party"], de: ["Brunch", "Dinner-Party"], ko: ["브런치", "디너 파티"], hi: ["ब्रंच", "डिनर पार्टी"] } },
    { type: "choice", options: { en: ["Ice cream", "Frozen yogurt"], de: ["Eis", "Gefrorener Joghurt"], ko: ["아이스크림", "프로즌 요거트"], hi: ["आइसक्रीम", "फ़्रोज़न योगर्ट"] } },
    { type: "choice", options: { en: ["Cookies", "Brownies"], de: ["Kekse", "Brownies"], ko: ["쿠키", "브라우니"], hi: ["कुकीज़", "ब्राउनी"] } },
    { type: "choice", options: { en: ["Smoothies", "Milkshakes"], de: ["Smoothies", "Milkshakes"], ko: ["스무디", "밀크셰이크"], hi: ["स्मूदी", "मिल्कशेक"] } },
    { type: "choice", options: { en: ["Juice", "Soda"], de: ["Saft", "Limonade"], ko: ["주스", "탄산음료"], hi: ["जूस", "सोडा"] } },
    { type: "choice", options: { en: ["Staying up late", "Waking up early"], de: ["Lange aufbleiben", "Früh aufwachen"], ko: ["늦게 자기", "일찍 일어나기"], hi: ["देर तक जागना", "जल्दी उठना"] } },
    { type: "choice", options: { en: ["Minimalist", "Collector"], de: ["Minimalist", "Sammler"], ko: ["미니멀리스트", "수집가"], hi: ["मिनिमलिस्ट", "संग्रहकर्ता"] } },
    { type: "choice", options: { en: ["Texting", "Video calls"], de: ["Textnachrichten", "Videoanrufe"], ko: ["문자", "영상통화"], hi: ["टेक्स्टिंग", "वीडियो कॉल"] } },
    { type: "choice", options: { en: ["Sneakers", "Dress shoes"], de: ["Turnschuhe", "Lederschuhe"], ko: ["운동화", "구두"], hi: ["स्नीकर्स", "ड्रेस जूते"] } },
    { type: "choice", options: { en: ["Dogs allowed", "No dogs"], de: ["Hunde erlaubt", "Keine Hunde"], ko: ["반려견 허용", "반려견 금지"], hi: ["कुत्ते की अनुमति", "कुत्ते नहीं"] } },
    { type: "choice", options: { en: ["Spontaneous", "Scheduled"], de: ["Spontan", "Geplant"], ko: ["즉흥적", "계획적"], hi: ["सहज", "निर्धारित"] } },
    { type: "choice", options: { en: ["Email", "Instant message"], de: ["E-Mail", "Sofortnachricht"], ko: ["이메일", "인스턴트 메시지"], hi: ["ईमेल", "त्वरित संदेश"] } },
    { type: "choice", options: { en: ["Crossword puzzles", "Sudoku"], de: ["Kreuzworträtsel", "Sudoku"], ko: ["낱말퍼즐", "스도쿠"], hi: ["क्रॉसवर्ड पहेलियाँ", "सुडोकू"] } },
    { type: "choice", options: { en: ["Analog watch", "Digital watch"], de: ["Analoge Uhr", "Digitale Uhr"], ko: ["아날로그 시계", "디지털 시계"], hi: ["एनालॉग घड़ी", "डिजिटल घड़ी"] } },
    { type: "choice", options: { en: ["Countryside drive", "City walk"], de: ["Landfahrt", "Stadtspaziergang"], ko: ["시골 드라이브", "도시 산책"], hi: ["ग्रामीण ड्राइव", "शहर की सैर"] } },
    { type: "choice", options: { en: ["Classical music", "Jazz"], de: ["Klassische Musik", "Jazz"], ko: ["클래식 음악", "재즈"], hi: ["शास्त्रीय संगीत", "जैज़"] } },
    { type: "choice", options: { en: ["Risk taker", "Play it safe"], de: ["Risikobereit", "Auf Nummer sicher"], ko: ["위험 감수", "안전 추구"], hi: ["जोखिम लेने वाला", "सुरक्षित खेलें"] } },
    { type: "choice", options: { en: ["Hardcover", "Paperback"], de: ["Gebunden", "Taschenbuch"], ko: ["양장본", "페이퍼백"], hi: ["हार्डकवर", "पेपरबैक"] } },
    { type: "choice", options: { en: ["Zoo", "Aquarium"], de: ["Zoo", "Aquarium"], ko: ["동물원", "수족관"], hi: ["चिड़ियाघर", "एक्वेरियम"] } },
    { type: "choice", options: { en: ["Theme park", "Water park"], de: ["Freizeitpark", "Wasserpark"], ko: ["테마파크", "워터파크"], hi: ["थीम पार्क", "वॉटर पार्क"] } },
    { type: "choice", options: { en: ["Printed photos", "Digital photos"], de: ["Gedruckte Fotos", "Digitale Fotos"], ko: ["인화 사진", "디지털 사진"], hi: ["मुद्रित तस्वीरें", "डिजिटल तस्वीरें"] } },
    { type: "choice", options: { en: ["Farmer's market", "Supermarket"], de: ["Bauernmarkt", "Supermarkt"], ko: ["농산물 시장", "슈퍼마켓"], hi: ["किसान बाज़ार", "सुपरमार्केट"] } },
    { type: "choice", options: { en: ["Road trip", "Flight"], de: ["Roadtrip", "Flug"], ko: ["로드트립", "비행기"], hi: ["रोड ट्रिप", "उड़ान"] } },
    { type: "choice", options: { en: ["Bicycle", "Scooter"], de: ["Fahrrad", "Roller"], ko: ["자전거", "스쿠터"], hi: ["साइकिल", "स्कूटर"] } },
    { type: "choice", options: { en: ["Listening", "Talking"], de: ["Zuhören", "Reden"], ko: ["듣기", "말하기"], hi: ["सुनना", "बात करना"] } },
    { type: "choice", options: { en: ["Sunrise yoga", "Evening meditation"], de: ["Sonnenaufgangs-Yoga", "Abendmeditation"], ko: ["아침 요가", "저녁 명상"], hi: ["सूर्योदय योग", "शाम ध्यान"] } },
    { type: "choice", options: { en: ["Jeans", "Sweatpants"], de: ["Jeans", "Jogginghose"], ko: ["청바지", "트레이닝복"], hi: ["जींस", "स्वेटपैंट"] } },
    { type: "choice", options: { en: ["Candles", "Essential oils"], de: ["Kerzen", "Ätherische Öle"], ko: ["양초", "에센셜 오일"], hi: ["मोमबत्तियाँ", "आवश्यक तेल"] } },
    { type: "choice", options: { en: ["Stargazing", "Cloud watching"], de: ["Sternebeobachtung", "Wolkenbeobachtung"], ko: ["별 보기", "구름 보기"], hi: ["तारे देखना", "बादल देखना"] } },
    { type: "choice", options: { en: ["Urban exploring", "Nature hiking"], de: ["Stadterkundung", "Naturwandern"], ko: ["도시 탐험", "자연 하이킹"], hi: ["शहरी अन्वेषण", "प्रकृति लंबी पैदल यात्रा"] } },
    { type: "choice", options: { en: ["Public speaking", "Writing"], de: ["Öffentliches Sprechen", "Schreiben"], ko: ["대중 연설", "글쓰기"], hi: ["सार्वजनिक बोलना", "लेखन"] } },
    { type: "choice", options: { en: ["Karaoke", "Live band"], de: ["Karaoke", "Live-Band"], ko: ["가라오케", "라이브 밴드"], hi: ["कराओके", "लाइव बैंड"] } },

    // Open-ended questions
    { type: "open", question: { en: "Favourite sport?", de: "Lieblingssport?", ko: "좋아하는 스포츠?", hi: "पसंदीदा खेल?" } },
    { type: "open", question: { en: "Favourite band?", de: "Lieblingsband?", ko: "좋아하는 밴드?", hi: "पसंदीदा बैंड?" } },
    { type: "open", question: { en: "Favourite movie?", de: "Lieblingsfilm?", ko: "좋아하는 영화?", hi: "पसंदीदा फ़िल्म?" } },
    { type: "open", question: { en: "Number of languages you speak?", de: "Anzahl der Sprachen, die Sie sprechen?", ko: "구사할 수 있는 언어 수?", hi: "आप कितनी भाषाएँ बोलते हैं?" } },
    { type: "open", question: { en: "Favourite ice-cream flavour?", de: "Lieblings-Eisgeschmack?", ko: "좋아하는 아이스크림 맛?", hi: "पसंदीदा आइसक्रीम स्वाद?" } },
    { type: "open", question: { en: "Favourite hobby?", de: "Lieblingshobby?", ko: "좋아하는 취미?", hi: "पसंदीदा शौक?" } },
    { type: "open", question: { en: "Dream holiday destination?", de: "Traumurlaubsziel?", ko: "꿈의 휴가지?", hi: "सपनों की छुट्टी का स्थान?" } },
    { type: "open", question: { en: "Favourite food?", de: "Lieblingsessen?", ko: "좋아하는 음식?", hi: "पसंदीदा भोजन?" } },
    { type: "open", question: { en: "Favourite city?", de: "Lieblingsstadt?", ko: "좋아하는 도시?", hi: "पसंदीदा शहर?" } },
    { type: "open", question: { en: "Favourite book?", de: "Lieblingsbuch?", ko: "좋아하는 책?", hi: "पसंदीदा किताब?" } },
    { type: "open", question: { en: "Favourite TV show?", de: "Lieblings-TV-Serie?", ko: "좋아하는 TV 프로그램?", hi: "पसंदीदा टीवी शो?" } },
    { type: "open", question: { en: "Favourite season?", de: "Lieblingsjahreszeit?", ko: "좋아하는 계절?", hi: "पसंदीदा मौसम?" } },
    { type: "open", question: { en: "Favourite colour?", de: "Lieblingsfarbe?", ko: "좋아하는 색?", hi: "पसंदीदा रंग?" } },
    { type: "open", question: { en: "Favourite restaurant?", de: "Lieblingsrestaurant?", ko: "좋아하는 레스토랑?", hi: "पसंदीदा रेस्तरां?" } },
    { type: "open", question: { en: "Favourite childhood memory?", de: "Lieblingskindheitserinnerung?", ko: "좋아하는 어린 시절 추억?", hi: "पसंदीदा बचपन की याद?" } },
    { type: "open", question: { en: "Favourite way to relax?", de: "Lieblings-Art sich zu entspannen?", ko: "좋아하는 휴식 방법?", hi: "आराम करने का पसंदीदा तरीका?" } },
    { type: "open", question: { en: "Favourite type of music?", de: "Lieblingsmusikrichtung?", ko: "좋아하는 음악 장르?", hi: "पसंदीदा संगीत शैली?" } },
    { type: "open", question: { en: "Favourite actor or actress?", de: "Lieblingsschauspieler/-in?", ko: "좋아하는 배우?", hi: "पसंदीदा अभिनेता?" } },
    { type: "open", question: { en: "Favourite board game?", de: "Lieblingsbrettspiel?", ko: "좋아하는 보드게임?", hi: "पसंदीदा बोर्ड गेम?" } },
    { type: "open", question: { en: "Favourite video game?", de: "Lieblingsvideospiel?", ko: "좋아하는 비디오게임?", hi: "पसंदीदा वीडियो गेम?" } },
    { type: "open", question: { en: "Favourite app on your phone?", de: "Lieblings-App auf dem Handy?", ko: "좋아하는 휴대폰 앱?", hi: "फ़ोन पर पसंदीदा ऐप?" } },
    { type: "open", question: { en: "Favourite podcast?", de: "Lieblingspodcast?", ko: "좋아하는 팟캐스트?", hi: "पसंदीदा पॉडकास्ट?" } },
    { type: "open", question: { en: "Favourite type of cuisine?", de: "Lieblings-Küche?", ko: "좋아하는 요리?", hi: "पसंदीदा व्यंजन?" } },
    { type: "open", question: { en: "Favourite animal?", de: "Lieblingstier?", ko: "좋아하는 동물?", hi: "पसंदीदा जानवर?" } },
    { type: "open", question: { en: "Favourite drink?", de: "Lieblingsgetränk?", ko: "좋아하는 음료?", hi: "पसंदीदा पेय?" } },
    { type: "open", question: { en: "Favourite pizza topping?", de: "Lieblings-Pizzabelag?", ko: "좋아하는 피자 토핑?", hi: "पसंदीदा पिज़्ज़ा टॉपिंग?" } },
    { type: "open", question: { en: "Favourite breakfast food?", de: "Lieblingsfrühstück?", ko: "좋아하는 아침 식사?", hi: "पसंदीदा नाश्ता?" } },
    { type: "open", question: { en: "Favourite dessert?", de: "Lieblingsdessert?", ko: "좋아하는 디저트?", hi: "पसंदीदा मिठाई?" } },
    { type: "open", question: { en: "Favourite time of day?", de: "Lieblingstageszeit?", ko: "좋아하는 시간대?", hi: "दिन का पसंदीदा समय?" } },
    { type: "open", question: { en: "Favourite holiday?", de: "Lieblingsfeiertag?", ko: "좋아하는 휴일?", hi: "पसंदीदा छुट्टी?" } },
    { type: "open", question: { en: "What superpower would you want?", de: "Welche Superkraft würden Sie wollen?", ko: "어떤 초능력을 원하시나요?", hi: "आप कौन सी महाशक्ति चाहेंगे?" } },
    { type: "open", question: { en: "What's your hidden talent?", de: "Was ist Ihr verstecktes Talent?", ko: "숨겨진 재능은?", hi: "आपकी छिपी हुई प्रतिभा क्या है?" } },
    { type: "open", question: { en: "What's on your bucket list?", de: "Was steht auf Ihrer Bucket-Liste?", ko: "버킷 리스트는?", hi: "आपकी बकेट लिस्ट में क्या है?" } },
    { type: "open", question: { en: "Weirdest food you've tried?", de: "Seltsamste Essen, das Sie probiert haben?", ko: "먹어본 가장 이상한 음식?", hi: "सबसे अजीब भोजन जो आपने खाया?" } },
    { type: "open", question: { en: "Most adventurous thing you've done?", de: "Abenteuerlichste Sache, die Sie gemacht haben?", ko: "가장 모험적인 일은?", hi: "सबसे साहसिक काम?" } },
    { type: "open", question: { en: "Childhood dream job?", de: "Kindheitstraumberuf?", ko: "어린 시절 꿈의 직업?", hi: "बचपन की सपनों की नौकरी?" } },
    { type: "open", question: { en: "What makes you laugh?", de: "Was bringt Sie zum Lachen?", ko: "무엇이 당신을 웃게 하나요?", hi: "आपको क्या हंसाता है?" } },
    { type: "open", question: { en: "First concert you attended?", de: "Erstes Konzert, das Sie besucht haben?", ko: "처음 참석한 콘서트?", hi: "पहला संगीत कार्यक्रम?" } },
    { type: "open", question: { en: "Celebrity crush?", de: "Promi-Schwarm?", ko: "좋아하는 유명인?", hi: "पसंदीदा सेलिब्रिटी?" } },
    { type: "open", question: { en: "Favourite emoji?", de: "Lieblings-Emoji?", ko: "좋아하는 이모지?", hi: "पसंदीदा इमोजी?" } },
    { type: "open", question: { en: "Dream car?", de: "Traumauto?", ko: "꿈의 자동차?", hi: "सपनों की कार?" } },
    { type: "open", question: { en: "Favourite quote?", de: "Lieblingszitat?", ko: "좋아하는 명언?", hi: "पसंदीदा उद्धरण?" } },
    { type: "open", question: { en: "Favourite snack?", de: "Lieblingssnack?", ko: "좋아하는 간식?", hi: "पसंदीदा नाश्ता?" } },
    { type: "open", question: { en: "Favourite childhood cartoon?", de: "Lieblings-Kinderzeichentrick?", ko: "좋아하는 어린이 만화?", hi: "पसंदीदा बचपन का कार्टून?" } },
    { type: "open", question: { en: "What's your go-to comfort food?", de: "Was ist Ihr Lieblingsessen zum Trösten?", ko: "위안 음식은?", hi: "आपका पसंदीदा आरामदायक भोजन?" } },
    { type: "open", question: { en: "Favourite place you've visited?", de: "Lieblingsort, den Sie besucht haben?", ko: "방문한 가장 좋은 곳?", hi: "पसंदीदा स्थान जहाँ आप गए?" } },
    { type: "open", question: { en: "What skill do you want to learn?", de: "Welche Fähigkeit möchten Sie lernen?", ko: "배우고 싶은 기술은?", hi: "आप कौन सा कौशल सीखना चाहते हैं?" } },
    { type: "open", question: { en: "Best gift you've ever received?", de: "Bestes Geschenk, das Sie je erhalten haben?", ko: "받은 최고의 선물?", hi: "अब तक का सबसे अच्छा उपहार?" } },
    { type: "open", question: { en: "Favourite word?", de: "Lieblingswort?", ko: "좋아하는 단어?", hi: "पसंदीदा शब्द?" } },
    { type: "open", question: { en: "What's your signature dish?", de: "Was ist Ihr Signature-Gericht?", ko: "시그니처 요리는?", hi: "आपका विशेष व्यंजन?" } },
    { type: "open", question: { en: "Most inspiring person?", de: "Inspirierendste Person?", ko: "가장 영감을 주는 사람?", hi: "सबसे प्रेरणादायक व्यक्ति?" } },
    { type: "open", question: { en: "What's your karaoke song?", de: "Was ist Ihr Karaoke-Lied?", ko: "노래방 곡은?", hi: "आपका कराओके गीत?" } },
    { type: "open", question: { en: "Favourite smell?", de: "Lieblingsduft?", ko: "좋아하는 향기?", hi: "पसंदीदा गंध?" } },
    { type: "open", question: { en: "What's your morning routine?", de: "Was ist Ihre Morgenroutine?", ko: "아침 루틴은?", hi: "आपकी सुबह की दिनचर्या?" } },
    { type: "open", question: { en: "Best advice you've received?", de: "Bester Rat, den Sie erhalten haben?", ko: "받은 최고의 조언?", hi: "सबसे अच्छी सलाह?" } },
    { type: "open", question: { en: "Favourite childhood game?", de: "Lieblings-Kinderspiel?", ko: "좋아하는 어린 시절 게임?", hi: "पसंदीदा बचपन का खेल?" } },
    { type: "open", question: { en: "What's your spirit animal?", de: "Was ist Ihr Geisttier?", ko: "영혼의 동물은?", hi: "आपका आत्मा पशु?" } },
    { type: "open", question: { en: "Most memorable birthday?", de: "Unvergesslichster Geburtstag?", ko: "가장 기억에 남는 생일?", hi: "सबसे यादगार जन्मदिन?" } }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;
let usedQuestions = [];
let selectedChoice = null;
let currentPlayerName = '';

const startBtn = document.getElementById('startBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const viewLeaderboardBtn = document.getElementById('viewLeaderboardBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const clearLeaderboardBtn = document.getElementById('clearLeaderboardBtn');
const clearLeaderboardViewBtn = document.getElementById('clearLeaderboardViewBtn');
const questionCard = document.getElementById('questionCard');
const nameInput = document.getElementById('nameInput');
const playerNameInput = document.getElementById('playerName');
const gameControls = document.getElementById('gameControls');
const currentPlayerDisplay = document.getElementById('currentPlayer');
const timer = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const results = document.getElementById('results');
const leaderboardView = document.getElementById('leaderboardView');
const timeLeftDisplay = document.getElementById('timeLeft');
const scoreCount = document.getElementById('scoreCount');
const finalScore = document.getElementById('finalScore');
const finalPlayerName = document.getElementById('finalPlayerName');
const leaderboardList = document.getElementById('leaderboardList');
const leaderboardListView = document.getElementById('leaderboardListView');
const questionLeft = document.getElementById('questionLeft');
const questionRight = document.getElementById('questionRight');
const choiceLeft = document.getElementById('choiceLeft');
const choiceRight = document.getElementById('choiceRight');
const questionTypeLabel = document.getElementById('questionTypeLabel');
const srAnnouncements = document.getElementById('srAnnouncements');
const gameHeader = document.getElementById('gameHeader');
const langBtn = document.getElementById('langBtn');
const langIcon = document.getElementById('langIcon');
const langText = document.getElementById('langText');

// Language state
let currentLanguage = 'en';

// Translations
const translations = {
    en: {
        title: 'Ice Breaker',
        mainTitle: 'In the hot seat',
        rule1: 'Each participant gets 30 seconds on the timer',
        rule2: 'Answer as many questions as possible',
        rule3: 'There will either be a multiple choice question or an open-ended question',
        rule4: 'Most answers wins',
        rule5: 'Say/speak your answer out loud 🗣️',
        enterName: 'Enter your name:',
        namePlaceholder: 'Your name',
        timerInfo: "Timer starts when you click 'Start Game'",
        startGame: 'Start Game',
        viewLeaderboard: 'View Leaderboard',
        player: 'Player:',
        seconds: 'seconds',
        questionsAnswered: 'Questions answered:',
        selected: '✓ Selected',
        or: 'or',
        nextQuestion: 'Next Question →',
        gameOver: 'Game Over!',
        answered: 'answered',
        questions: 'questions',
        leaderboard: 'Leaderboard',
        clearLeaderboard: 'Clear Leaderboard Data',
        playAgain: 'Play Again',
        backToHome: 'Back to Home',
        yourScore: '(Your score)'
    },
    de: {
        title: 'Eisbrecher',
        mainTitle: 'Auf dem heißen Stuhl',
        rule1: 'Jeder Teilnehmer hat 30 Sekunden Zeit',
        rule2: 'Beantworten Sie so viele Fragen wie möglich',
        rule3: 'Es wird entweder eine Multiple-Choice-Frage oder eine offene Frage geben',
        rule4: 'Die meisten Antworten gewinnen',
        rule5: 'Sagen/Sprechen Sie Ihre Antwort laut 🗣️',
        enterName: 'Geben Sie Ihren Namen ein:',
        namePlaceholder: 'Ihr Name',
        timerInfo: "Timer startet, wenn Sie auf 'Spiel starten' klicken",
        startGame: 'Spiel starten',
        viewLeaderboard: 'Bestenliste anzeigen',
        player: 'Spieler:',
        seconds: 'Sekunden',
        questionsAnswered: 'Fragen beantwortet:',
        selected: '✓ Ausgewählt',
        or: 'oder',
        nextQuestion: 'Nächste Frage →',
        gameOver: 'Spiel vorbei!',
        answered: 'beantwortete',
        questions: 'Fragen',
        leaderboard: 'Bestenliste',
        clearLeaderboard: 'Bestenliste löschen',
        playAgain: 'Nochmal spielen',
        backToHome: 'Zurück zur Startseite',
        yourScore: '(Ihre Punktzahl)'
    },
    ko: {
        title: '아이스 브레이커',
        mainTitle: '핫 시트에서',
        rule1: '각 참가자는 타이머에서 30초를 받습니다',
        rule2: '가능한 한 많은 질문에 답하세요',
        rule3: '객관식 질문 또는 개방형 질문이 있습니다',
        rule4: '가장 많은 답변이 승리합니다',
        rule5: '답변을 큰 소리로 말하세요 🗣️',
        enterName: '이름을 입력하세요:',
        namePlaceholder: '귀하의 이름',
        timerInfo: "'게임 시작'을 클릭하면 타이머가 시작됩니다",
        startGame: '게임 시작',
        viewLeaderboard: '리더보드 보기',
        player: '플레이어:',
        seconds: '초',
        questionsAnswered: '답변한 질문:',
        selected: '✓ 선택됨',
        or: '또는',
        nextQuestion: '다음 질문 →',
        gameOver: '게임 종료!',
        answered: '답변함',
        questions: '질문',
        leaderboard: '리더보드',
        clearLeaderboard: '리더보드 데이터 삭제',
        playAgain: '다시 플레이',
        backToHome: '홈으로 돌아가기',
        yourScore: '(당신의 점수)'
    },
    hi: {
        title: 'आइस ब्रेकर',
        mainTitle: 'गरम सीट पर',
        rule1: 'प्रत्येक प्रतिभागी को टाइमर पर 30 सेकंड मिलते हैं',
        rule2: 'जितने हो सके उतने प्रश्नों के उत्तर दें',
        rule3: 'या तो एक बहुविकल्पीय प्रश्न या एक खुला प्रश्न होगा',
        rule4: 'सबसे अधिक उत्तर जीतते हैं',
        rule5: 'अपना उत्तर जोर से बोलें 🗣️',
        enterName: 'अपना नाम दर्ज करें:',
        namePlaceholder: 'आपका नाम',
        timerInfo: "'गेम शुरू करें' पर क्लिक करने पर टाइमर शुरू होता है",
        startGame: 'गेम शुरू करें',
        viewLeaderboard: 'लीडरबोर्ड देखें',
        player: 'खिलाड़ी:',
        seconds: 'सेकंड',
        questionsAnswered: 'उत्तर दिए गए प्रश्न:',
        selected: '✓ चयनित',
        or: 'या',
        nextQuestion: 'अगला प्रश्न →',
        gameOver: 'खेल खत्म!',
        answered: 'उत्तर दिया',
        questions: 'प्रश्न',
        leaderboard: 'लीडरबोर्ड',
        clearLeaderboard: 'लीडरबोर्ड डेटा साफ़ करें',
        playAgain: 'फिर से खेलें',
        backToHome: 'होम पर वापस जाएं',
        yourScore: '(आपका स्कोर)'
    }
};

// Update UI with translations
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('hotSeatLanguage', lang);

    // Update icon and button text to show next language with emoji
    const languageOrder = ['en', 'de', 'ko', 'hi'];
    const currentIndex = languageOrder.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languageOrder.length;
    const nextLang = languageOrder[nextIndex];

    const langEmojis = {
        'en': '🇬🇧',
        'de': '🇩🇪',
        'ko': '🇰🇷',
        'hi': '🇮🇳'
    };

    const langLabels = {
        'en': 'EN',
        'de': 'DE',
        'ko': '한국어',
        'hi': 'हिन्दी'
    };

    langIcon.textContent = langEmojis[nextLang];
    langText.textContent = langLabels[nextLang];

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update title with emoji
    const titleElement = document.querySelector('[data-i18n="title"]');
    if (titleElement) {
        titleElement.innerHTML = translations[lang].title + ' <span role="img" aria-label="ice cube">🧊</span>';
    }
}

// Load saved language preference
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('hotSeatLanguage');
    if (savedLang) {
        updateLanguage(savedLang);
    }
}

// Toggle language
function toggleLanguage() {
    const languageOrder = ['en', 'de', 'ko', 'hi'];
    const currentIndex = languageOrder.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageOrder.length;
    const newLang = languageOrder[nextIndex];

    updateLanguage(newLang);

    // If game is in progress, refresh the current question to show new language
    if (!questionCard.classList.contains('hidden')) {
        showQuestion();
    }
}

// Screen reader announcement helper
function announceToScreenReader(message) {
    srAnnouncements.textContent = message;
    setTimeout(() => {
        srAnnouncements.textContent = '';
    }, 1000);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function loadLeaderboard() {
    const data = localStorage.getItem('hotSeatLeaderboard');
    return data ? JSON.parse(data) : [];
}

function saveToLeaderboard(name, score) {
    const leaderboard = loadLeaderboard();
    leaderboard.push({
        name: name,
        score: score,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('hotSeatLeaderboard', JSON.stringify(leaderboard));
}

function displayLeaderboard(currentScore, targetElement = leaderboardList) {
    const leaderboard = loadLeaderboard();

    if (leaderboard.length === 0) {
        targetElement.innerHTML = '<div class="leaderboard-empty">No scores yet. Be the first!</div>';
        return;
    }

    // Find the most recent entry before sorting (the one just added)
    const mostRecentTimestamp = currentScore !== undefined ?
        Math.max(...leaderboard.map(entry => new Date(entry.timestamp).getTime())) : null;

    // Sort by score (highest first), then by timestamp (earliest first)
    leaderboard.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return new Date(a.timestamp) - new Date(b.timestamp);
    });

    let currentGameIndex = -1;

    targetElement.innerHTML = leaderboard.map((entry, index) => {
        const isCurrentGame = currentScore !== undefined &&
                              entry.score === currentScore &&
                              entry.name === currentPlayerName &&
                              mostRecentTimestamp !== null &&
                              new Date(entry.timestamp).getTime() === mostRecentTimestamp;

        if (isCurrentGame) {
            currentGameIndex = index;
        }

        // Get translation safely
        const lang = currentLanguage || 'en';
        const yourScoreText = (translations[lang] && translations[lang].yourScore) ? translations[lang].yourScore : '(Your score)';

        return `
            <div class="leaderboard-item ${isCurrentGame ? 'current' : ''}" id="${isCurrentGame ? 'currentPlayerScore' : ''}" role="listitem" aria-label="Rank ${index + 1}, ${entry.name}, ${entry.score} points${isCurrentGame ? ', your current score' : ''}">
                <span class="leaderboard-rank" aria-hidden="true">#${index + 1}</span>
                <span class="leaderboard-name" aria-hidden="true">${entry.name}</span>
                <span class="leaderboard-score" aria-hidden="true">${entry.score}</span>
                ${isCurrentGame ? `<span class="your-score-indicator">${yourScoreText}</span>` : ''}
            </div>
        `;
    }).join('');

    // Auto-scroll to current player's score after a short delay
    if (currentGameIndex !== -1 && currentScore !== undefined) {
        setTimeout(() => {
            const currentPlayerElement = document.getElementById('currentPlayerScore');
            if (currentPlayerElement) {
                // Scroll within the leaderboard-list container
                const listContainer = currentPlayerElement.parentElement;

                // Make sure the container is visible and has dimensions
                if (listContainer && listContainer.clientHeight > 0) {
                    const elementTop = currentPlayerElement.offsetTop;
                    const elementHeight = currentPlayerElement.offsetHeight;
                    const containerHeight = listContainer.clientHeight;

                    // Calculate scroll position to center the element
                    const scrollTo = elementTop - (containerHeight / 2) + (elementHeight / 2);

                    listContainer.scrollTo({
                        top: Math.max(0, scrollTo),
                        behavior: 'smooth'
                    });
                }
            }
        }, 500);
    }
}

function clearLeaderboard(targetElement = leaderboardList) {
    if (confirm('Are you sure you want to clear all leaderboard data? This cannot be undone.')) {
        localStorage.removeItem('hotSeatLeaderboard');
        targetElement.innerHTML = '<div class="leaderboard-empty">No scores yet. Be the first!</div>';
        // Update both leaderboard views if they exist
        if (leaderboardList) {
            leaderboardList.innerHTML = '<div class="leaderboard-empty">No scores yet. Be the first!</div>';
        }
        if (leaderboardListView) {
            leaderboardListView.innerHTML = '<div class="leaderboard-empty">No scores yet. Be the first!</div>';
        }
    }
}

function viewLeaderboard() {
    nameInput.classList.add('hidden');
    gameHeader.classList.add('hidden');
    leaderboardView.classList.remove('hidden');
    displayLeaderboard(undefined, leaderboardListView);
}

function backToHome() {
    leaderboardView.classList.add('hidden');
    gameHeader.classList.remove('hidden');
    nameInput.classList.remove('hidden');
}

function loadPlayerName() {
    // Don't auto-fill name - let user enter fresh each time
    playerNameInput.value = '';
}

function seedLeaderboardWithTestData() {
    const testNames = [
        'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince',
        'Ethan Hunt', 'Fiona Gallagher', 'George Wilson', 'Hannah Montana',
        'Ian Malcolm', 'Julia Roberts', 'Kevin Hart', 'Laura Palmer',
        'Michael Scott', 'Nancy Drew', 'Oscar Martinez', 'Pam Beesly',
        'Quinn Fabray', 'Rachel Green', 'Steve Rogers', 'Tina Fey',
        'Uma Thurman', 'Victor Stone', 'Wanda Maximoff', 'Xavier Charles',
        'Yara Greyjoy', 'Zack Morris', 'Amy Santiago', 'Ben Wyatt',
        'Claire Dunphy', 'Dwight Schrute'
    ];

    // Check if leaderboard already has data
    const existingData = localStorage.getItem('hotSeatLeaderboard');
    if (existingData) {
        const parsed = JSON.parse(existingData);
        if (parsed.length > 0) {
            return; // Don't seed if there's already data
        }
    }

    // Generate test data
    const testData = testNames.map((name, index) => ({
        name: name,
        score: Math.floor(Math.random() * 15) + 1, // Random score between 1 and 15
        timestamp: new Date(Date.now() - (index * 3600000)).toISOString() // Stagger timestamps by 1 hour each
    }));

    localStorage.setItem('hotSeatLeaderboard', JSON.stringify(testData));
}

// Seed test data on page load
seedLeaderboardWithTestData();

// Load language preference on page load
loadLanguagePreference();

function startGame() {
    const name = playerNameInput.value.trim();

    if (!name) {
        alert('Please enter your name before starting!');
        playerNameInput.focus();
        return;
    }

    currentPlayerName = name;
    localStorage.setItem('hotSeatPlayerName', name);

    score = 0;
    timeLeft = 30;
    usedQuestions = shuffleArray(questions);
    currentQuestionIndex = 0;
    selectedChoice = null;

    nameInput.classList.add('hidden');
    results.classList.add('hidden');
    gameControls.classList.remove('hidden');
    questionCard.classList.remove('hidden');

    // Hide instructions 1-4, keep instruction 5 visible
    document.querySelectorAll('.home-only').forEach(el => el.classList.add('hidden'));

    currentPlayerDisplay.textContent = currentPlayerName;
    updateScore();
    showQuestion();
    startTimer();

    announceToScreenReader(`Game started. ${currentPlayerName}, you have 30 seconds. First question ready.`);
    choiceLeft.focus();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        // Announce countdown at key intervals
        if (timeLeft === 10) {
            announceToScreenReader('10 seconds remaining');
        } else if (timeLeft === 5) {
            announceToScreenReader('5 seconds remaining');
        }

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function showQuestion() {
    if (currentQuestionIndex >= usedQuestions.length) {
        usedQuestions = shuffleArray(questions);
        currentQuestionIndex = 0;
    }

    const question = usedQuestions[currentQuestionIndex];

    // Reset selection styling
    choiceLeft.classList.remove('selected');
    choiceRight.classList.remove('selected');
    choiceLeft.classList.remove('choice-left', 'choice-right', 'open-ended');
    choiceRight.classList.remove('choice-left', 'choice-right', 'open-ended');
    choiceLeft.setAttribute('aria-pressed', 'false');
    choiceRight.setAttribute('aria-pressed', 'false');
    selectedChoice = null;

    // Determine primary and secondary languages
    const primaryLang = currentLanguage;
    // If primary is English, secondary is German
    // Otherwise, secondary is always English
    const secondaryLang = (primaryLang === 'en') ? 'de' : 'en';

    if (question.type === 'choice') {
        // Multiple choice A/B question
        choiceLeft.style.display = 'flex';
        choiceRight.style.display = 'flex';
        document.querySelector('.divider').style.display = 'block';

        // Apply color coding
        choiceLeft.classList.add('choice-left');
        choiceRight.classList.add('choice-right');

        // Set question type label
        if (primaryLang === 'en') {
            questionTypeLabel.textContent = 'Choose 1 of 2 options';
        } else if (primaryLang === 'de') {
            questionTypeLabel.textContent = 'Wählen Sie 1 von 2 Optionen';
        } else if (primaryLang === 'ko') {
            questionTypeLabel.textContent = '2개 옵션 중 1개 선택';
        } else if (primaryLang === 'hi') {
            questionTypeLabel.textContent = '2 विकल्पों में से 1 चुनें';
        }

        // Use primary language if available, fallback to English
        const primaryOptions = question.options[primaryLang] || question.options['en'];
        const secondaryOptions = question.options[secondaryLang] || question.options['en'];

        // Display bilingual options
        questionLeft.innerHTML = `${primaryOptions[0]}<br><small style="opacity: 0.7; font-size: 0.8em;">${secondaryOptions[0]}</small>`;
        questionRight.innerHTML = `${primaryOptions[1]}<br><small style="opacity: 0.7; font-size: 0.8em;">${secondaryOptions[1]}</small>`;

        // Announce to screen readers
        announceToScreenReader(`Question ${score + 1}. ${primaryOptions[0]} or ${primaryOptions[1]}`);
    } else {
        // Open-ended question
        choiceLeft.style.display = 'flex';
        choiceRight.style.display = 'none';
        document.querySelector('.divider').style.display = 'none';

        // Apply purple color for open-ended
        choiceLeft.classList.add('open-ended');

        // Set question type label
        if (primaryLang === 'en') {
            questionTypeLabel.textContent = 'Open-ended question';
        } else if (primaryLang === 'de') {
            questionTypeLabel.textContent = 'Offene Frage';
        } else if (primaryLang === 'ko') {
            questionTypeLabel.textContent = '개방형 질문';
        } else if (primaryLang === 'hi') {
            questionTypeLabel.textContent = 'खुला प्रश्न';
        }

        // Use primary language if available, fallback to English
        const primaryQuestion = question.question[primaryLang] || question.question['en'];
        const secondaryQuestion = question.question[secondaryLang] || question.question['en'];

        questionLeft.innerHTML = `${primaryQuestion}<br><small style="opacity: 0.7; font-size: 0.8em;">${secondaryQuestion}</small>`;

        // Announce to screen readers
        announceToScreenReader(`Question ${score + 1}. ${primaryQuestion}`);
    }
}

function nextQuestion() {
    score++;
    currentQuestionIndex++;
    updateScore();
    showQuestion();
}

function updateScore() {
    scoreCount.textContent = score;
}

function endGame() {
    clearInterval(timerInterval);

    questionCard.classList.add('hidden');
    gameControls.classList.add('hidden');
    results.classList.remove('hidden');

    finalScore.textContent = score;
    finalPlayerName.textContent = currentPlayerName;

    saveToLeaderboard(currentPlayerName, score);
    displayLeaderboard(score);

    announceToScreenReader(`Game over! ${currentPlayerName}, you answered ${score} questions. Leaderboard is now displayed.`);

    // Focus on play again button for easy restart
    setTimeout(() => {
        playAgainBtn.focus();
    }, 100);
}

function playAgain() {
    results.classList.add('hidden');
    nameInput.classList.remove('hidden');

    // Show instructions 1-4 again
    document.querySelectorAll('.home-only').forEach(el => el.classList.remove('hidden'));

    playerNameInput.focus();
}

function selectChoice(choice) {
    // Remove previous selection
    choiceLeft.classList.remove('selected');
    choiceRight.classList.remove('selected');
    choiceLeft.setAttribute('aria-pressed', 'false');
    choiceRight.setAttribute('aria-pressed', 'false');

    // Add selection to clicked choice
    const selectedButton = choice === 'left' ? choiceLeft : choiceRight;
    const selectedText = choice === 'left' ? questionLeft.textContent : questionRight.textContent;

    selectedButton.classList.add('selected');
    selectedButton.setAttribute('aria-pressed', 'true');
    selectedChoice = choice;

    // Announce selection to screen readers
    announceToScreenReader(`Selected ${selectedText}. Moving to next question.`);

    // Auto-advance to next question after a brief delay
    setTimeout(() => {
        nextQuestion();
    }, 300);
}

// Load saved player name on page load
loadPlayerName();

startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', playAgain);
viewLeaderboardBtn.addEventListener('click', viewLeaderboard);
backToHomeBtn.addEventListener('click', backToHome);
clearLeaderboardBtn.addEventListener('click', () => clearLeaderboard(leaderboardList));
clearLeaderboardViewBtn.addEventListener('click', () => clearLeaderboard(leaderboardListView));
langBtn.addEventListener('click', toggleLanguage);

choiceLeft.addEventListener('click', () => selectChoice('left'));
choiceRight.addEventListener('click', () => selectChoice('right'));

playerNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        startGame();
    }
});
