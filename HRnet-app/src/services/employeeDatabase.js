// Employee Database in JSON format
// It is used to populate the database with employees

const employeeDatabase = [
  {
    id: 'LeBronJamesHuman Resources',
    firstName: 'LeBron',
    lastName: 'James',
    dateOfBirth: '24/09/1988',
    startDate: '01/01/2001',
    street: '99 boulevard Bryas',
    city: 'Creil',
    state: 'Indiana',
    zipCode: '60100',
    department: 'Human Resources'
  },
  {
    id: 'StephenCurrySales',
    firstName: 'Stephen',
    lastName: 'Curry',
    dateOfBirth: '18/12/1999',
    startDate: '01/01/2001',
    street: '56 cours Franklin Roosevelt',
    city: 'Marseille',
    state: 'District of Columbia',
    zipCode: '13007',
    department: 'Sales'
  },
  {
    id: 'KevinDurantSales',
    firstName: 'Kevin',
    lastName: 'Durant',
    dateOfBirth: '02/11/1989',
    startDate: '01/01/2001',
    street: '50 rue de Penthièvre',
    city: 'Privas',
    state: 'District of Columbia',
    zipCode: '07000',
    department: 'Sales'
  },
  {
    id: 'KobeBryantSales',
    firstName: 'Kobe',
    lastName: 'Bryant',
    dateOfBirth: '02/04/1977',
    startDate: '01/01/2001',
    street: '6 rue de Geneve',
    city: 'Alfortville',
    state: 'District of Columbia',
    zipCode: '94140',
    department: 'Sales'
  },
  {
    id: 'MichaelJordanMarketing',
    firstName: 'Michael',
    lastName: 'Jordan',
    dateOfBirth: '17/02/1963',
    startDate: '01/01/1984',
    street: '23 Jump Street',
    city: 'Chicago',
    state: 'Illinois',
    zipCode: '60601',
    department: 'Marketing'
  },
  {
    id: 'MagicJohnsonEngineering',
    firstName: 'Magic',
    lastName: 'Johnson',
    dateOfBirth: '14/08/1959',
    startDate: '01/01/1980',
    street: '32 Showtime Avenue',
    city: 'Los Angeles',
    state: 'California',
    zipCode: '90001',
    department: 'Engineering'
  },
  {
    id: 'LarryBirdLegal',
    firstName: 'Larry',
    lastName: 'Bird',
    dateOfBirth: '07/12/1956',
    startDate: '01/01/1980',
    street: '33 Celtics Lane',
    city: 'Boston',
    state: 'Massachusetts',
    zipCode: '02101',
    department: 'Legal'
  },
  {
    id: 'TimDuncanHuman Resources',
    firstName: 'Tim',
    lastName: 'Duncan',
    dateOfBirth: '25/04/1976',
    startDate: '01/01/1997',
    street: '21 Bankshot Road',
    city: 'San Antonio',
    state: 'Texas',
    zipCode: '78201',
    department: 'Human Resources'
  },
  {
    id: 'ShaquilleONealSales',
    firstName: 'Shaquille',
    lastName: 'O\'Neal',
    dateOfBirth: '06/03/1972',
    startDate: '01/01/1992',
    street: '34 Dunk Street',
    city: 'Orlando',
    state: 'Florida',
    zipCode: '32801',
    department: 'Sales'
  },
  {
    id: 'KareemAbdulJabbarMarketing',
    firstName: 'Kareem',
    lastName: 'Abdul-Jabbar',
    dateOfBirth: '16/04/1947',
    startDate: '01/01/1969',
    street: '35 Skyhook Avenue',
    city: 'Los Angeles',
    state: 'California',
    zipCode: '90001',
    department: 'Marketing'
  },
  {
    id: 'HakeemOlajuwonEngineering',
    firstName: 'Hakeem',
    lastName: 'Olajuwon',
    dateOfBirth: '21/01/1963',
    startDate: '01/01/1984',
    street: '36 Dream Shake Road',
    city: 'Houston',
    state: 'Texas',
    zipCode: '77001',
    department: 'Engineering'
  },
  {
    id: 'BillRussellLegal',
    firstName: 'Bill',
    lastName: 'Russell',
    dateOfBirth: '12/02/1934',
    startDate: '01/01/1956',
    street: '37 Championship Lane',
    city: 'Boston',
    state: 'Massachusetts',
    zipCode: '02101',
    department: 'Legal'
  },
  {
    id: 'AllenIversonSales',
    firstName: 'Allen',
    lastName: 'Iverson',
    dateOfBirth: '07/06/1975',
    startDate: '01/01/1996',
    street: '38 Crossover Street',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zipCode: '19101',
    department: 'Sales'
  },
  {
    id: 'DirkNowitzkiMarketing',
    firstName: 'Dirk',
    lastName: 'Nowitzki',
    dateOfBirth: '19/06/1978',
    startDate: '01/01/1999',
    street: '39 Fadeaway Road',
    city: 'Dallas',
    state: 'Texas',
    zipCode: '75201',
    department: 'Marketing'
  },
  {
    id: 'WiltChamberlainEngineering',
    firstName: 'Wilt',
    lastName: 'Chamberlain',
    dateOfBirth: '21/08/1936',
    startDate: '01/01/1959',
    street: '40 Scoring Avenue',
    city: 'Los Angeles',
    state: 'California',
    zipCode: '90001',
    department: 'Engineering'
  },
  {
    id: 'JerryWestLegal',
    firstName: 'Jerry',
    lastName: 'West',
    dateOfBirth: '28/05/1938',
    startDate: '01/01/1960',
    street: '41 Logo Lane',
    city: 'Los Angeles',
    state: 'California',
    zipCode: '90001',
    department: 'Legal'
  },
  {
    id: 'CharlesBarkleySales',
    firstName: 'Charles',
    lastName: 'Barkley',
    dateOfBirth: '20/02/1963',
    startDate: '01/01/1984',
    street: '42 Rebound Street',
    city: 'Phoenix',
    state: 'Arizona',
    zipCode: '85001',
    department: 'Sales'
  },
  {
    id: 'KarlMaloneMarketing',
    firstName: 'Karl',
    lastName: 'Malone',
    dateOfBirth: '24/07/1963',
    startDate: '01/01/1985',
    street: '43 Mailman Road',
    city: 'Salt Lake City',
    state: 'Utah',
    zipCode: '84101',
    department: 'Marketing'
  },
  {
    id: 'JohnStocktonEngineering',
    firstName: 'John',
    lastName: 'Stockton',
    dateOfBirth: '26/03/1962',
    startDate: '01/01/1984',
    street: '44 Assists Lane',
    city: 'Salt Lake City',
    state: 'Utah',
    zipCode: '84101',
    department: 'Engineering'
  },
  {
    id: 'ScottiePippenLegal',
    firstName: 'Scottie',
    lastName: 'Pippen',
    dateOfBirth: '25/09/1965',
    startDate: '01/01/1987',
    street: '45 Defense Avenue',
    city: 'Chicago',
    state: 'Illinois',
    zipCode: '60601',
    department: 'Legal'
  },
  {
    id: 'DwyaneWadeSales',
    firstName: 'Dwyane',
    lastName: 'Wade',
    dateOfBirth: '17/01/1982',
    startDate: '01/01/2003',
    street: '46 Flash Street',
    city: 'Miami',
    state: 'Florida',
    zipCode: '33101',
    department: 'Sales'
  },
  {
    id: 'KevinGarnettMarketing',
    firstName: 'Kevin',
    lastName: 'Garnett',
    dateOfBirth: '19/05/1976',
    startDate: '01/01/1995',
    street: '47 Big Ticket Road',
    city: 'Minneapolis',
    state: 'Minnesota',
    zipCode: '55401',
    department: 'Marketing'
  },
  {
    id: 'ShaunLivingstonEngineering',
    firstName: 'Shaun',
    lastName: 'Livingston',
    dateOfBirth: '11/09/1985',
    startDate: '01/01/2004',
    street: '48 Midrange Lane',
    city: 'San Francisco',
    state: 'California',
    zipCode: '94101',
    department: 'Engineering'
  },
  {
    id: 'ClydeDrexlerLegal',
    firstName: 'Clyde',
    lastName: 'Drexler',
    dateOfBirth: '22/06/1962',
    startDate: '01/01/1983',
    street: '49 Glide Avenue',
    city: 'Portland',
    state: 'Oregon',
    zipCode: '97201',
    department: 'Legal'
  },
  {
    id: 'PaulPierceSales',
    firstName: 'Paul',
    lastName: 'Pierce',
    dateOfBirth: '13/10/1977',
    startDate: '01/01/1999',
    street: '50 Truth Street',
    city: 'Boston',
    state: 'Massachusetts',
    zipCode: '02101',
    department: 'Sales'
  },
  {
    id: 'SteveNashMarketing',
    firstName: 'Steve',
    lastName: 'Nash',
    dateOfBirth: '07/02/1974',
    startDate: '01/01/1996',
    street: '51 Point Guard Road',
    city: 'Phoenix',
    state: 'Arizona',
    zipCode: '85001',
    department: 'Marketing'
  },
  {
    id: 'ReggieMillerEngineering',
    firstName: 'Reggie',
    lastName: 'Miller',
    dateOfBirth: '24/08/1965',
    startDate: '01/01/1987',
    street: '52 Clutch Avenue',
    city: 'Indianapolis',
    state: 'Indiana',
    zipCode: '46201',
    department: 'Engineering'
  },
  {
    id: 'IsiahThomasLegal',
    firstName: 'Isiah',
    lastName: 'Thomas',
    dateOfBirth: '30/04/1961',
    startDate: '01/01/1981',
    street: '53 Pistons Lane',
    city: 'Detroit',
    state: 'Michigan',
    zipCode: '48201',
    department: 'Legal'
  },
  {
    id: 'ChrisMullinSales',
    firstName: 'Chris',
    lastName: 'Mullin',
    dateOfBirth: '30/07/1963',
    startDate: '01/01/1985',
    street: '54 St. John\'s Road',
    city: 'New York',
    state: 'New York',
    zipCode: '10001',
    department: 'Sales'
  },
  {
    id: 'DavidRobinsonMarketing',
    firstName: 'David',
    lastName: 'Robinson',
    dateOfBirth: '06/08/1965',
    startDate: '01/01/1989',
    street: '55 Admiral Street',
    city: 'San Antonio',
    state: 'Texas',
    zipCode: '78201',
    department: 'Marketing'
  },
  {
    id: 'JasonKiddLegal',
    firstName: 'Jason',
    lastName: 'Kidd',
    dateOfBirth: '23/03/1973',
    startDate: '01/01/1994',
    street: '57 Playmaker Lane',
    city: 'Dallas',
    state: 'Texas',
    zipCode: '75201',
    department: 'Legal'
  },
  {
    id: 'JamesHardenSales',
    firstName: 'James',
    lastName: 'Harden',
    dateOfBirth: '26/08/1989',
    startDate: '01/01/2009',
    street: '58 Beard Street',
    city: 'Houston',
    state: 'Texas',
    zipCode: '77001',
    department: 'Sales'
  },
  {
    id: 'ChrisPaulMarketing',
    firstName: 'Chris',
    lastName: 'Paul',
    dateOfBirth: '06/05/1985',
    startDate: '01/01/2005',
    street: '59 Point God Road',
    city: 'New Orleans',
    state: 'Louisiana',
    zipCode: '70101',
    department: 'Marketing'
  },
  {
    id: 'RussellWestbrookEngineering',
    firstName: 'Russell',
    lastName: 'Westbrook',
    dateOfBirth: '12/11/1988',
    startDate: '01/01/2008',
    street: '60 Triple Double Boulevard',
    city: 'Long Beach',
    state: 'California',
    zipCode: '90802',
    department: 'Engineering'
  },
  {
    id: 'DamianLillardLegal',
    firstName: 'Damian',
    lastName: 'Lillard',
    dateOfBirth: '15/07/1990',
    startDate: '01/01/2012',
    street: '61 Dame Time Street',
    city: 'Oakland',
    state: 'California',
    zipCode: '94612',
    department: 'Legal'
  },
  {
    id: 'JimmyButlerSales',
    firstName: 'Jimmy',
    lastName: 'Butler',
    dateOfBirth: '14/09/1989',
    startDate: '01/01/2011',
    street: '62 Buckets Avenue',
    city: 'Tomball',
    state: 'Texas',
    zipCode: '77375',
    department: 'Sales'
  },
  {
    id: 'KawhiLeonardMarketing',
    firstName: 'Kawhi',
    lastName: 'Leonard',
    dateOfBirth: '29/06/1991',
    startDate: '01/01/2011',
    street: '63 Klaw Road',
    city: 'San Diego',
    state: 'California',
    zipCode: '92101',
    department: 'Marketing'
  },
  {
    id: 'GiannisAntetokounmpoEngineering',
    firstName: 'Giannis',
    lastName: 'Antetokounmpo',
    dateOfBirth: '06/12/1994',
    startDate: '01/01/2013',
    street: '64 Greek Freak Lane',
    city: 'Milwaukee',
    state: 'Wisconsin',
    zipCode: '53201',
    department: 'Engineering'
  },
  {
    id: 'AnthonyDavisLegal',
    firstName: 'Anthony',
    lastName: 'Davis',
    dateOfBirth: '11/03/1993',
    startDate: '01/01/2012',
    street: '65 Brow Street',
    city: 'New Orleans',
    state: 'Louisiana',
    zipCode: '70101',
    department: 'Legal'
  },
  {
    id: 'JoelEmbiidSales',
    firstName: 'Joel',
    lastName: 'Embiid',
    dateOfBirth: '16/03/1994',
    startDate: '01/01/2014',
    street: '66 Process Avenue',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zipCode: '19101',
    department: 'Sales'
  },
  {
    id: 'KyrieIrvingMarketing',
    firstName: 'Kyrie',
    lastName: 'Irving',
    dateOfBirth: '23/03/1992',
    startDate: '01/01/2011',
    street: '67 Uncle Drew Road',
    city: 'Cleveland',
    state: 'Ohio',
    zipCode: '44101',
    department: 'Marketing' 
  },
  {
    id: 'PaulGeorgeEngineering',
    firstName: 'Paul',
    lastName: 'George',
    dateOfBirth: '02/05/1990',
    startDate: '01/01/2010',
    street: '68 Playoff P Lane',
    city: 'Palmdale',
    state: 'California',
    zipCode: '93550',
    department: 'Engineering'
  },
  {
    id: 'KlayThompsonLegal',
    firstName: 'Klay',
    lastName: 'Thompson',
    dateOfBirth: '08/02/1990',
    startDate: '01/01/2011',
    street: '69 Splash Avenue',
    city: 'Los Angeles',
    state: 'California',
    zipCode: '90001',
    department: 'Legal'
  },
  {
    id: 'DraymondGreenSales',
    firstName: 'Draymond',
    lastName: 'Green',
    dateOfBirth: '04/03/1990',
    startDate: '01/01/2012',
    street: '70 DPOY Street',
    city: 'Saginaw',
    state: 'Michigan',
    zipCode: '48601',
    department: 'Sales'
  },
  {
    id: 'DeMarcusCousinsMarketing',
    firstName: 'DeMarcus',
    lastName: 'Cousins',
    dateOfBirth: '13/08/1990',
    startDate: '01/01/2010',
    street: '71 Boogie Road',
    city: 'Mobile',
    state: 'Alabama',
    zip: '36601',
    department: 'Marketing'
  },
  {
    id: 'KyleLowryEngineering',
    firstName: 'Kyle',
    lastName: 'Lowry',
    dateOfBirth: '25/03/1986',
    startDate: '01/01/2006',
    street: '72 Bulldog Lane',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zipCode: '19101',
    department: 'Engineering'
  },
  {
    id: 'KembaWalkerLegal',
    firstName: 'Kemba',
    lastName: 'Walker',
    dateOfBirth: '08/05/1990',
    startDate: '01/01/2011',
    street: '73 Cardiac Kemba Road',
    city: 'Bronx',
    state: 'New York',
    zipCode: '10451',
    department: 'Legal'
  },
  {
    id: 'NikolaJokicSales',
    firstName: 'Nikola',
    lastName: 'Jokic',
    dateOfBirth: '19/02/1995',
    startDate: '01/01/2015',
    street: '74 Joker Street',
    city: 'Sombor',
    state: 'Vojvodina',
    zipCode: '25000',
    department: 'Sales'
  },
  {
    id: 'BenSimmonsMarketing',
    firstName: 'Ben',
    lastName: 'Simmons',
    dateOfBirth: '20/07/1996',
    startDate: '01/01/2016',
    street: '75 Point Forward Lane',
    city: 'Melbourne',
    state: 'Victoria',
    zipCode: '3000',
    department: 'Marketing'
  },
  {
    id: 'BlakeGriffinEngineering',
    firstName: 'Blake',
    lastName: 'Griffin',
    dateOfBirth: '16/03/1989',
    startDate: '01/01/2009',
    street: '76 Lob City Road',
    city: 'Oklahoma City',
    state: 'Oklahoma',
    zipCode: '73101',
    department: 'Engineering'
  },
  {
    id: 'BradleyBealLegal',
    firstName: 'Bradley',
    lastName: 'Beal',
    dateOfBirth: '28/06/1993',
    startDate: '01/01/2012',
    street: '77 Big Panda Street',
    city: 'St. Louis',
    state: 'Missouri',
    zipCode: '63101',
    department: 'Legal'
  },
  {
    id: 'DonovanMitchellSales',
    firstName: 'Donovan',
    lastName: 'Mitchell',
    dateOfBirth: '07/09/1996',
    startDate: '01/01/2017',
    street: '78 Spida Street',
    city: 'Greenwich',
    state: 'Connecticut',
    zipCode: '06830',
    department: 'Sales'
  },
  {
    id: 'DevinBookerMarketing',
    firstName: 'Devin',
    lastName: 'Booker',
    dateOfBirth: '30/10/1996',
    startDate: '01/01/2015',
    street: '79 Bucket Getter Lane',
    city: 'Grand Rapids',
    state: 'Michigan',
    zipCode: '49501',
    department: 'Marketing'
  },
  {
    id: 'JaysonTatumEngineering',
    firstName: 'Jayson',
    lastName: 'Tatum',
    dateOfBirth: '03/03/1998',
    startDate: '01/01/2017',
    street: '80 Tatum Island',
    city: 'St. Louis',
    state: 'Missouri',
    zipCode: '63101',
    department: 'Engineering'
  },
  {
    id: 'KarlAnthonyTownsLegal',
    firstName: 'Karl-Anthony',
    lastName: 'Towns',
    dateOfBirth: '15/11/1995',
    startDate: '01/01/2015',
    street: '81 KAT Road',
    city: 'Edison',
    state: 'New Jersey',
    zipCode: '08817',
    department: 'Legal'
  },
  {
    id: 'DAngeloRussellSales',
    firstName: 'D\'Angelo',
    lastName: 'Russell',
    dateOfBirth: '23/02/1996',
    startDate: '01/01/2015',
    street: '82 Ice in my Veins Street',
    city: 'Louisville',
    state: 'Kentucky',
    zipCode: '40201',
    department: 'Sales'
  },
  {
    id: 'DeMarDeRozanMarketing',
    firstName: 'DeMar',
    lastName: 'DeRozan',
    dateOfBirth: '07/08/1989',
    startDate: '01/01/2009',
    street: '83 DeRozan Road',
    city: 'Compton',
    state: 'California',
    zipCode: '90220',
    department: 'Marketing'
  },
  {
    id: 'AndreDrummondEngineering',
    firstName: 'Andre',
    lastName: 'Drummond',
    dateOfBirth: '10/08/1993',
    startDate: '01/01/2012',
    street: '84 Rebound Road',
    city: 'Mount Vernon',
    state: 'New York',
    zipCode: '10550',
    department: 'Engineering'
  },
  {
    id: 'ZachLaVineLegal',
    firstName: 'Zach',
    lastName: 'LaVine',
    dateOfBirth: '10/03/1995',
    startDate: '01/01/2014',
    street: '85 Dunk Contest Lane',
    city: 'Seattle',
    state: 'Washington',
    zipCode: '98101',
    department: 'Legal'
  },
  {
    id: 'JrueHolidaySales',
    firstName: 'Jrue',
    lastName: 'Holiday',
    dateOfBirth: '12/06/1990',
    startDate: '01/01/2009',
    street: '86 Jrue Lane',
    city: 'Los Angeles',
    state: 'California',
    zipCode: '90001',
    department: 'Sales'
  },
  {
    id: 'LukaDoncicMarketing',
    firstName: 'Luka',
    lastName: 'Doncic',
    dateOfBirth: '28/02/1999',
    startDate: '01/01/2018',
    street: '87 Doncic Street',
    city: 'Ljubljana',
    state: 'Ljubljana',
    zipCode: '1000',
    department: 'Marketing'
  },
  {
    id: 'NikolaVucevicEngineering',
    firstName: 'Nikola',
    lastName: 'Vucevic',
    dateOfBirth: '24/10/1990',
    startDate: '01/01/2011',
    street: '88 Vooch Road',
    city: 'Montenegro',
    state: 'Montenegro',
    zipCode: '81000',
    department: 'Engineering'
  },
  {
    id: 'MikeConleyLegal',
    firstName: 'Mike',
    lastName: 'Conley',
    dateOfBirth: '11/10/1987',
    startDate: '01/01/2007',
    street: '89 Grindfather Lane',
    city: 'Fayetteville',
    state: 'Arkansas',
    zipCode: '72701',
    department: 'Legal'
  },
  {
    id: 'JuliusRandleSales',
    firstName: 'Julius',
    lastName: 'Randle',
    dateOfBirth: '29/11/1994',
    startDate: '01/01/2014',
    street: '90 Bulldozer Street',
    city: 'Dallas',
    state: 'Texas',
    zipCode: '75201',
    department: 'Sales'
  },
  {
    id: 'KristapsPorzingisMarketing',
    firstName: 'Kristaps',
    lastName: 'Porzingis',
    dateOfBirth: '02/08/1995',
    startDate: '01/01/2015',
    street: '91 Unicorn Lane',
    city: 'Liepaja',
    state: 'Liepaja',
    zipCode: '3401',
    department: 'Marketing'
  },
  {
    id: 'TraeYoungEngineering',
    firstName: 'Trae',
    lastName: 'Young',
    dateOfBirth: '19/09/1998',
    startDate: '01/01/2018',
    street: '92 Ice Trae Road',
    city: 'Lubbock',
    state: 'Texas',
    zipCode: '79401',
    department: 'Engineering'
  },
  {
    id: 'ZionWilliamsonLegal',
    firstName: 'Zion',
    lastName: 'Williamson',
    dateOfBirth: '06/07/2000',
    startDate: '01/01/2019',
    street: '93 Zion Lane',
    city: 'Salisbury',
    state: 'North Carolina',
    zipCode: '28144',
    department: 'Legal'
  },
  {
    id: 'JaylenBrownSales',
    firstName: 'Jaylen',
    lastName: 'Brown',
    dateOfBirth: '24/10/1996',
    startDate: '01/01/2016',
    street: '94 Jaylen Lane',
    city: 'Marietta',
    state: 'Georgia',
    zipCode: '30006',
    department: 'Sales'
  },
  {
    id: 'DeAaronFoxMarketing',
    firstName: 'De\'Aaron',
    lastName: 'Fox',
    dateOfBirth: '20/12/1997',
    startDate: '01/01/2017',
    street: '95 Swipa Road',
    city: 'New Orleans',
    state: 'Louisiana',
    zipCode: '70101',
    department: 'Marketing'
  },
  {
    id: 'BuddyHieldEngineering',
    firstName: 'Buddy',
    lastName: 'Hield',
    dateOfBirth: '17/12/1992',
    startDate: '01/01/2016',
    street: '96 Buddy Buckets Lane',
    city: 'Freeport',
    state: 'Bahamas',
    zipCode: '00000',
    department: 'Engineering'
  },
  {
    id: 'JamalMurrayLegal',
    firstName: 'Jamal',
    lastName: 'Murray',
    dateOfBirth: '23/02/1997',
    startDate: '01/01/2016',
    street: '97 Blue Arrow Street',
    city: 'Kitchener',
    state: 'Ontario',
    zipCode: 'N2A 1A1',
    department: 'Legal'
  },
  {
    id: 'CarisLeVertSales',
    firstName: 'Caris',
    lastName: 'LeVert',
    dateOfBirth: '25/08/1994',
    startDate: '01/01/2016',
    street: '98 LeVert Lane',
    city: 'Columbus',
    state: 'Ohio',
    zipCode: '43201',
    department: 'Sales'
  },
  {
    id: 'BrandonIngramMarketing',
    firstName: 'Brandon',
    lastName: 'Ingram',
    dateOfBirth: '02/09/1997',
    startDate: '01/01/2016',
    street: '99 Slim Reaper Road',
    city: 'Kinston',
    state: 'North Carolina',
    zipCode: '28501',
    department: 'Marketing'
  },
  {
    id: 'DomantasSabonisEngineering',
    firstName: 'Domantas',
    lastName: 'Sabonis',
    dateOfBirth: '03/05/1996',
    startDate: '01/01/2016',
    street: '100 Saboner Lane',
    city: 'Portland',
    state: 'Oregon',
    zipCode: '97201',
    department: 'Engineering'
  },
  {
    id: 'PascalSiakamLegal',
    firstName: 'Pascal',
    lastName: 'Siakam',
    dateOfBirth: '02/04/1994',
    startDate: '01/01/2016',
    street: '101 Spicy P Road',
    city: 'Douala',
    state: 'Florida',
    zipCode: '1000',
    department: 'Legal'
  },
  {
    id: 'ShaiGilgeousAlexanderSales',
    firstName: 'Shai',
    lastName: 'Gilgeous-Alexander',
    dateOfBirth: '12/07/1998',
    startDate: '01/01/2018',
    street: '102 SGA Lane',
    city: 'Toronto',
    state: 'Florida',
    zipCode: 'M5V 1J2',
    department: 'Sales'
  },
  {
    id: 'MylesTurnerMarketing',
    firstName: 'Myles',
    lastName: 'Turner',
    dateOfBirth: '24/03/1996',
    startDate: '01/01/2015',
    street: '103 Block Party Road',
    city: 'Bedford',
    state: 'Texas',
    zipCode: '76021',
    department: 'Marketing'
  },
  {
    id: 'JarenJacksonJrEngineering',
    firstName: 'Jaren',
    lastName: 'Jackson Jr.',
    dateOfBirth: '15/09/1999',
    startDate: '01/01/2018',
    street: '104 Triple J Lane',
    city: 'Indianapolis',
    state: 'Indiana',
    zipCode: '46201',
    department: 'Engineering'
  },
  {
    id: 'JonathanIsaacLegal',
    firstName: 'Jonathan',
    lastName: 'Isaac',
    dateOfBirth: '03/10/1997',
    startDate: '01/01/2017',
    street: '105 JI Lane',
    city: 'New York',
    state: 'New York',
    zipCode: '10001',
    department: 'Legal'
  },
  {
    id: 'LonzoBallSales',
    firstName: 'Lonzo',
    lastName: 'Ball',
    dateOfBirth: '27/10/1997',
    startDate: '01/01/2017',
    street: '106 Zo Lane',
    city: 'Anaheim',
    state: 'California',
    zipCode: '92801',
    department: 'Sales'
  },
  {
    id: 'BamAdebayoMarketing',
    firstName: 'Bam',
    lastName: 'Adebayo',
    dateOfBirth: '18/07/1997',
    startDate: '01/01/2017',
    street: '107 Bam Lane',
    city: 'Newark',
    state: 'New Jersey',
    zipCode: '07101',
    department: 'Marketing'
  },
  {
    id: 'DennisSmithJrEngineering',
    firstName: 'Dennis',
    lastName: 'Smith Jr.',
    dateOfBirth: '25/11/1997',
    startDate: '01/01/2017',
    street: '108 DSJ Lane',
    city: 'Fayetteville',
    state: 'North Carolina',
    zipCode: '28301',
    department: 'Engineering'
  },
  {
    id: 'JohnCollinsLegal',
    firstName: 'John',
    lastName: 'Collins',
    dateOfBirth: '23/09/1997',
    startDate: '01/01/2017',
    street: '109 JC Lane',
    city: 'West Palm Beach',
    state: 'Florida',
    zipCode: '33401',
    department: 'Legal'
  },
  {
    id: 'DarioSaricSales',
    firstName: 'Dario',
    lastName: 'Saric',
    dateOfBirth: '08/04/1994',
    startDate: '01/01/2016',
    street: '110 Homie Lane',
    city: 'Sibenik',
    state: 'Florida',
    zipCode: '22000',
    department: 'Sales'
  },
  {
    id: 'MalikMonkMarketing',
    firstName: 'Malik',
    lastName: 'Monk',
    dateOfBirth: '04/02/1998',
    startDate: '01/01/2017',
    street: '111 Monk Lane',
    city: 'Jonesboro',
    state: 'Arkansas',
    zipCode: '72401',
    department: 'Marketing'
  },
  {
    id: 'MarvinBagleyIIIEngineering',
    firstName: 'Marvin',
    lastName: 'Bagley III',
    dateOfBirth: '14/03/1999',
    startDate: '01/01/2018',
    street: '112 Bagley Lane',
    city: 'Phoenix',
    state: 'Arizona',
    zipCode: '85001',
    department: 'Engineering'
  },
  {
    id: 'JoshJacksonLegal',
    firstName: 'Josh',
    lastName: 'Jackson',
    dateOfBirth: '10/02/1997',
    startDate: '01/01/2017',
    street: '113 JJ Lane',
    city: 'Detroit',
    state: 'Michigan',
    zipCode: '48201',
    department: 'Legal'
  },
  {
    id: 'WendellCarterJrSales',
    firstName: 'Wendell',
    lastName: 'Carter Jr.',
    dateOfBirth: '16/04/1999',
    startDate: '01/01/2018',
    street: '114 WCJ Lane',
    city: 'Atlanta',
    state: 'Georgia',
    zipCode: '30301',
    department: 'Sales'
  },
  {
    id: 'HarryGilesMarketing',
    firstName: 'Harry',
    lastName: 'Giles',
    dateOfBirth: '22/04/1998',
    startDate: '01/01/2017',
    street: '115 HG Lane',
    city: 'Winston-Salem',
    state: 'North Carolina',
    zipCode: '27101',
    department: 'Marketing'
  },
  {
    id: 'FrankNtilikinaEngineering',
    firstName: 'Frank',
    lastName: 'Ntilikina',
    dateOfBirth: '28/07/1998',
    startDate: '01/01/2017',
    street: '116 Frank Lane',
    city: 'Brussels',
    state: 'Ohio',
    zipCode: '1000',
    department: 'Engineering'
  },
  {
    id: 'TerranceFergusonLegal',
    firstName: 'Terrance',
    lastName: 'Ferguson',
    dateOfBirth: '17/05/1998',
    startDate: '01/01/2017',
    street: '117 TF Lane',
    city: 'Dallas',
    state: 'Texas',
    zipCode: '75201',
    department: 'Legal'
  },
  {
    id: 'JarrettAllenSales',
    firstName: 'Jarrett',
    lastName: 'Allen',
    dateOfBirth: '21/04/1998',
    startDate: '01/01/2017',
    street: '118 Fro Lane',
    city: 'Austin',
    state: 'Texas',
    zipCode: '73301',
    department: 'Sales'
  },
  {
    id: 'OGAnunobyMarketing',
    firstName: 'OG',
    lastName: 'Anunoby',
    dateOfBirth: '17/07/1997',
    startDate: '01/01/2017',
    street: '119 OG Lane',
    city: 'London',
    state: 'Ohio',
    zipCode: 'SW1A 1AA',
    department: 'Marketing'
  },
  {
    id: 'LukeKennardEngineering',
    firstName: 'Luke',
    lastName: 'Kennard',
    dateOfBirth: '24/06/1996',
    startDate: '01/01/2017',
    street: '120 Kennard Lane',
    city: 'Columbus',
    state: 'Ohio',
    zipCode: '43201',
    department: 'Engineering'
  },
  {
    id: 'DennisSchroderLegal',
    firstName: 'Dennis',
    lastName: 'Schroder',
    dateOfBirth: '15/09/1993',
    startDate: '01/01/2013',
    street: '121 Dennis Lane',
    city: 'Braunschweig',
    state: 'Lower Saxony',
    zipCode: '38100',
    department: 'Legal'
  },
  {
    id: 'DillonBrooksSales',
    firstName: 'Dillon',
    lastName: 'Brooks',
    dateOfBirth: '22/01/1996',
    startDate: '01/01/2017',
    street: '122 DB Lane',
    city: 'Mississauga',
    state: 'Ontario',
    zipCode: 'L4T 0A1',
    department: 'Sales'
  },
  {
    id: 'BogdanBogdanovicMarketing',
    firstName: 'Bogdan',
    lastName: 'Bogdanovic',
    dateOfBirth: '18/08/1992',
    startDate: '01/01/2017',
    street: '123 Bogi Lane',
    city: 'Belgrade',
    state: 'Belgrade',
    zipCode: '11000',
    department: 'Marketing'
  },
  {
    id: 'MonteMorrisEngineering',
    firstName: 'Monte',
    lastName: 'Morris',
    dateOfBirth: '27/06/1995',
    startDate: '01/01/2017',
    street: '124 Monte Lane',
    city: 'Grand Rapids',
    state: 'Michigan',
    zipCode: '49501',
    department: 'Engineering'
  },
  {
    id: 'DwayneBaconLegal',
    firstName: 'Dwayne',
    lastName: 'Bacon',
    dateOfBirth: '30/08/1995',
    startDate: '01/01/2017',
    street: '125 Bacon Lane',
    city: 'Lakeland',
    state: 'Florida',
    zipCode: '33801',
    department: 'Legal'
  },
  {
    id: 'KyleKuzmaSales',
    firstName: 'Kyle',
    lastName: 'Kuzma',
    dateOfBirth: '24/07/1995',
    startDate: '01/01/2017',
    street: '126 Kuz Lane',
    city: 'Flint',
    state: 'Michigan',
    zipCode: '48501',
    department: 'Sales'
  },
  {
    id: 'JoshHartMarketing',
    firstName: 'Josh',
    lastName: 'Hart',
    dateOfBirth: '06/03/1995',
    startDate: '01/01/2017',
    street: '127 Hart Lane', 
    city: 'Silver Spring',
    state: 'Maryland',
    zipCode: '20901',
    department: 'Marketing'
  },
  {
    id: 'FrankMasonEngineering',
    firstName: 'Frank',
    lastName: 'Mason',
    dateOfBirth: '03/04/1994',
    startDate: '01/01/2017',
    street: '128 FM Lane',
    city: 'Petersburg',
    state: 'Virginia',
    zipCode: '23801',
    department: 'Engineering'
  },
  {
    id: 'MalikBeasleyLegal',
    firstName: 'Malik',
    lastName: 'Beasley',
    dateOfBirth: '26/11/1996',
    startDate: '01/01/2017',
    street: '129 Beasley Lane',
    city: 'Atlanta',
    state: 'Georgia',
    zipCode: '30301',
    department: 'Legal'
  },
  {
    id: 'ThomasBryantSales',
    firstName: 'Thomas',
    lastName: 'Bryant',
    dateOfBirth: '31/07/1997',
    startDate: '01/01/2017',
    street: '130 TB Lane',
    city: 'Rochester',
    state: 'New York',
    zipCode: '14601',
    department: 'Sales'
  },
  {
    id: 'TonyBradleyMarketing',
    firstName: 'Tony',
    lastName: 'Bradley',
    dateOfBirth: '08/01/1998',
    startDate: '01/01/2017',
    street: '131 TB Lane',
    city: 'Bartow',
    state: 'Florida',
    zipCode: '33830',
    department: 'Marketing'
  },
  {
    id: 'CalebSwaniganEngineering',
    firstName: 'Caleb',
    lastName: 'Swanigan',
    dateOfBirth: '18/04/1997',
    startDate: '01/01/2017',
    street: '132 CS Lane',
    city: 'Indianapolis',
    state: 'Indiana',
    zipCode: '46201',
    department: 'Engineering'
  },
  {
    id: 'DenzelValentineLegal',
    firstName: 'Denzel',
    lastName: 'Valentine',
    dateOfBirth: '14/11/1993',
    startDate: '01/01/2017',
    street: '133 Valentine Lane',
    city: 'Lansing',
    state: 'Michigan',
    zipCode: '48901',
    department: 'Legal'
  },
  {
    id: 'DejounteMurraySales',
    firstName: 'Dejounte',
    lastName: 'Murray',
    dateOfBirth: '19/09/1996',
    startDate: '01/01/2017',
    street: '134 Murray Lane',
    city: 'Seattle',
    state: 'Washington',
    zipCode: '98101',
    department: 'Sales'
  },
  {
    id: 'JakobPoeltlMarketing',
    firstName: 'Jakob',
    lastName: 'Poeltl',
    dateOfBirth: '15/10/1995',
    startDate: '01/01/2017',
    street: '135 Poeltl Lane',
    city: 'Vienna',
    state: 'Vienna',
    zipCode: '1000',
    department: 'Marketing'
  },
  {
    id: 'DamyeanDotsonEngineering',
    firstName: 'Damyean',
    lastName: 'Dotson',
    dateOfBirth: '06/05/1994',
    startDate: '01/01/2017',
    street: '136 Dotson Lane',
    city: 'Houston',
    state: 'Texas',
    zipCode: '77001',
    department: 'Engineering'
  },
  {
    id: 'DwayneBaconLegal',
    firstName: 'Dwayne',
    lastName: 'Bacon',
    dateOfBirth: '30/08/1995',
    startDate: '01/01/2017',
    street: '137 Bacon Lane',
    city: 'Lakeland',
    state: 'Florida',
    zipCode: '33801',
    department: 'Legal'
  },
  {
    id: 'KyleKuzmaSales',
    firstName: 'Kyle',
    lastName: 'Kuzma',
    dateOfBirth: '24/07/1995',
    startDate: '01/01/2017',
    street: '138 Kuz Lane',
    city: 'Flint',
    state: 'Michigan',
    zipCode: '48501',
    department: 'Sales'
  },
  {
    id: 'JoshHartMarketing',
    firstName: 'Josh',
    lastName: 'Hart',
    dateOfBirth: '06/03/1995',
    startDate: '01/01/2017',
    street: '139 Hart Lane', 
    city: 'Silver Spring',
    state: 'Maryland',
    zipCode: '20901',
    department: 'Marketing'
  },
  {
    id: 'FrankMasonEngineering',
    firstName: 'Frank',
    lastName: 'Mason',
    dateOfBirth: '03/04/1994',
    startDate: '01/01/2017',
    street: '140 FM Lane',
    city: 'Petersburg',
    state: 'Virginia',
    zipCode: '23801',
    department: 'Engineering'
  },
  {
    id: 'MalikBeasleyLegal',
    firstName: 'Malik',
    lastName: 'Beasley',
    dateOfBirth: '26/11/1996',
    startDate: '01/01/2017',
    street: '141 Beasley Lane',
    city: 'Atlanta',
    state: 'Georgia',
    zipCode: '30301',
    department: 'Legal'
  },
  {
    id: 'ThomasBryantSales',
    firstName: 'Thomas',
    lastName: 'Bryant',
    dateOfBirth: '31/07/1997',
    startDate: '01/01/2017',
    street: '142 TB Lane',
    city: 'Rochester',
    state: 'New York',
    zipCode: '14601',
    department: 'Sales'
  },
  {
    id: 'TonyBradleyMarketing',
    firstName: 'Tony',
    lastName: 'Bradley',
    dateOfBirth: '08/01/1998',
    startDate: '01/01/2017',
    street: '143 TB Lane',
    city: 'Bartow',
    state: 'Florida',
    zipCode: '33830',
    department: 'Marketing'
  },
  {
    id: 'CalebSwaniganEngineering',
    firstName: 'Caleb',
    lastName: 'Swanigan',
    dateOfBirth: '18/04/1997',
    startDate: '01/01/2017',
    street: '144 CS Lane',
    city: 'Indianapolis',
    state: 'Indiana',
    zipCode: '46201',
    department: 'Engineering'
  }
]

// Generate random employees for performance testing
function generateRandomEmployee(id) {
  const firstNames = ["LeBron", "Stephen", "Kevin", "Kobe", "Michael", "Magic", "Larry", "Tim", "Shaquille", "Kareem"];
  const lastNames = ["James", "Curry", "Durant", "Bryant", "Jordan", "Johnson", "Bird", "Duncan", "O'Neal", "Jabbar"];
  const streets = ["Boulevard Bryas", "Cours Franklin Roosevelt", "Rue de Penthièvre", "Rue de Geneve", "Jump Street"];
  const cities = ["Creil", "Marseille", "Privas", "Alfortville", "Chicago"];
  const states = ["Indiana", "District of Columbia", "California", "Texas", "Massachusetts"];
  const departments = ["Human Resources", "Sales", "Marketing", "Engineering", "Legal"];
  
  return {
    id: `${firstNames[Math.floor(Math.random() * firstNames.length)]}${lastNames[Math.floor(Math.random() * lastNames.length)]}${departments[Math.floor(Math.random() * departments.length)]}${id}`,
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    dateOfBirth: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}/${Math.floor(Math.random() * 40) + 1960}`,
    startDate: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}/${Math.floor(Math.random() * 20) + 2000}`,
    street: streets[Math.floor(Math.random() * streets.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    state: states[Math.floor(Math.random() * states.length)],
    zipCode: `${Math.floor(Math.random() * 90000) + 10000}`,
    department: departments[Math.floor(Math.random() * departments.length)]
  };
}

// Choose the number of employees to generate
for (let i = 0; i < 900; i++) {
  employeeDatabase.push(generateRandomEmployee(i + 1));
}

// Function to convert date from DD/MM/YYYY to YYYY-MM-DD
function convertDate(dateStr) {
  const parts = dateStr.split('/');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

// Loop through each employee and reformat the dates
employeeDatabase.forEach(employee => {
  employee.dateOfBirth = convertDate(employee.dateOfBirth);
  employee.startDate = convertDate(employee.startDate);
});

export { employeeDatabase }
