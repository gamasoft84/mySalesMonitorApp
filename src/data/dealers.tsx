import { InfoDealer } from "./IDealer";


const dealersData : InfoDealer [] =
[
    {
        "dlrCd": "ADF06",
        "dlrNm": "Kia Aeropuerto",
        "dmsNm": "Business PRO",
        "grpNm": "Satélite",
        "crmNm": "Sicop",
        "postCd": "15730",
        "adrStateNm": "CDMX",
        "adrCityNm": "Venustiano Carranza",
        "rfc": "KMO141215B19",
        "telephone": "50255000",
        "address": "Fuerza Aérea Mexicana # 310",
        "latitude": 19.420844849336607,
        "longitude": -99.08217528268341
    },
    {
        "dlrCd": "DSR01",
        "dlrNm": "Kia Ahome",
        "dmsNm": "SAD",
        "grpNm": "Premier",
        "crmNm": "-",
        "postCd": "81200",
        "adrStateNm": "Sinaloa",
        "adrCityNm": "Ahome",
        "rfc": "APA150602688",
        "telephone": "6688164200",
        "address": "Blvd. Antonio Rosales 955 Sur Colonia Centro",
        "latitude": 25.786858618090207,
        "longitude": -109.00221840932282
    },
    {
        "dlrCd": "AAS01",
        "dlrNm": "Kia Altaria",
        "dmsNm": "Total Dealer",
        "grpNm": "Vanguardia",
        "crmNm": "-",
        "postCd": "20115",
        "adrStateNm": "Aguascalientes",
        "adrCityNm": "Aguascalientes",
        "rfc": "VKX1507204SA",
        "telephone": "4493003542",
        "address": "Blvd. Luis Donaldo Colosio Murrieta 606",
        "latitude": 21.925651939166844,
        "longitude": -102.29960712522715
    },
    {
        "dlrCd": "CVZ01",
        "dlrNm": "Kia Altas Montañas",
        "dmsNm": "Autoline",
        "grpNm": "Porres - Chedraui",
        "crmNm": "-",
        "postCd": "94570",
        "adrStateNm": "Veracruz",
        "adrCityNm": "Córdoba",
        "rfc": "VKX1507167L9",
        "telephone": "2717321360",
        "address": "prolongacion calle 10",
        "latitude": 18.882702052051734, 
        "longitude": -96.95819536864578
    },
    {
        "dlrCd": "APL01",
        "dlrNm": "Kia Angelopolis",
        "dmsNm": "Intelisis",
        "grpNm": "Excelencia",
        "crmNm": "-",
        "postCd": "72190",
        "adrStateNm": "Puebla",
        "adrCityNm": "Puebla",
        "rfc": "CCO150129ME8",
        "telephone": "52 2223035000",
        "address": "VIA ATLIXCAYOTL 5520 A RESERVA TERRITORIAL ATLIXCAYOTL",
        "latitude": 19.023377307699487, 
        "longitude": -98.24118433027539
    },
    {
        "dlrCd": "AVZ01",
        "dlrNm": "Kia Animas",
        "dmsNm": "Autoline",
        "grpNm": "Porres - Chedraui",
        "crmNm": "-",
        "postCd": "91198",
        "adrStateNm": "Veracruz",
        "adrCityNm": "Xalapa",
        "rfc": "VKX1507167L9",
        "telephone": "2282374200",
        "address": "Carr. Xalapa-Ver Km 3.5"
    },
    {
        "dlrCd": "ATS01",
        "dlrNm": "Kia Avenida",
        "dmsNm": "Business PRO",
        "grpNm": "Tampico",
        "crmNm": "Sicop",
		"postCd": "89100",
        "adrStateNm": "Tamaulipas",
        "adrCityNm": "Tampico",
        "rfc": "",
        "telephone": "833 800 6600",
        "address": "Av. Miguel Hidalgo 4901, Lomas de Rosales"
    },
    {
        "dlrCd": "ACC01",
        "dlrNm": "Kia Bahia",
        "dmsNm": "W32",
        "grpNm": "Montejo",
        "crmNm": "-",
        "postCd": "24095",
        "adrStateNm": "Campeche",
        "adrCityNm": "Campeche",
        "rfc": "ADI160224CZ6",
        "telephone": "01981 81818100",
        "address": "AV.MAESTROS CAMPECHANOS #558 COL. LAZARO CARDENAS"
    },
    {
        "dlrCd": "HSR01",
        "dlrNm": "Kia Baja Sur",
        "dmsNm": "SAD",
        "grpNm": "Premier",
        "crmNm": "-",
        "postCd": "23098",
        "adrStateNm": "Baja California Sur",
        "adrCityNm": "La Paz",
        "rfc": "",
        "telephone": "6121407430",
        "address": "Blvd. Consitutyentes de 1975 y calle Perla Sector Inalapa"
    },
    {
        "dlrCd": "AGT06",
        "dlrNm": "Kia Bajío",
        "dmsNm": "Quiter",
        "grpNm": "Autocom",
        "crmNm": "Sapmex",
        "postCd": "37180",
        "adrStateNm": "Guanajuato",
        "adrCityNm": "León",
        "rfc": "ADE190821NE9",
        "telephone": "477 775 5500",
        "address": "Blvd. Adolfo López Mateos 513, Zona del Campestre"
    },
    {
        "dlrCd": "AZS01",
        "dlrNm": "Kia Bernardez",
        "dmsNm": "SIIA-TC",
        "grpNm": "Torres Corzo",
        "crmNm": "Sicop",
        "postCd": "98618",
        "adrStateNm": "Zacatecas",
        "adrCityNm": "Guadalupe",
        "rfc": "GCA160215RM6",
        "telephone": "4929230033",
        "address": "Blvd. Lopez Portillo No. 216 Col. Dependencias Federales"
    },
    {
        "dlrCd": "BTC01",
        "dlrNm": "Kia Boca",
        "dmsNm": "AUTOTEC",
        "grpNm": "Farrera",
        "crmNm": "Sicop",
        "postCd": "94298",
        "adrStateNm": "Veracruz",
        "adrCityNm": "Boca del Río",
        "rfc": "CMG150115PZ8",
        "telephone": "2292761800",
        "address": "Ejercito Mexicano 1055 Col. Granjas los pinos"
    },
    {
        "dlrCd": "AQR01",
        "dlrNm": "Kia Bonampak",
        "dmsNm": "Quiter",
        "grpNm": "Montejo",
        "crmNm": "Sirena",
        "postCd": "77500",
        "adrStateNm": "Quintana Roo",
        "adrCityNm": "Benito Juárez",
        "rfc": "IPA150605LB3",
        "telephone": "9988867300",
        "address": "AV. BONAMPAK SM.10  MZ.2  LOTE 6A"
    },
    {
        "dlrCd": "SJC02",
        "dlrNm": "Kia Brisas",
        "dmsNm": "Kumi Motors",
        "grpNm": "Plasencia",
        "crmNm": "-",
        "postCd": "28218",
        "adrStateNm": "Colima",
        "adrCityNm": "Manzanillo",
        "rfc": "",
        "telephone": "314 688 2234",
        "address": "Del Mar 362, Playa Azul Salagua"
    },
    {
        "dlrCd": "ESR01",
        "dlrNm": "Kia Cabos",
        "dmsNm": "SAD",
        "grpNm": "Premier",
        "crmNm": "-",
        "postCd": "23400",
        "adrStateNm": "Baja California Sur",
        "adrCityNm": "Los Cabos",
        "rfc": "APA150602688",
        "telephone": "6241429100",
        "address": "Carrretera Transpenínsular Km 24.5 , Col. Cerro Colorado"
    },
    {
        "dlrCd": "FSR01",
        "dlrNm": "Kia Cajeme",
        "dmsNm": "SAD",
        "grpNm": "Premier",
        "crmNm": "-",
        "postCd": "85000",
        "adrStateNm": "Sonora",
        "adrCityNm": "Cajeme",
        "rfc": "APA150602688",
        "telephone": "6444108000",
        "address": "MIGUEL ALEMÁN #575 SUR COL. CENTRO"
    },
    {
        "dlrCd": "AGT02",
        "dlrNm": "Kia Campestre",
        "dmsNm": "SIIA-TC",
        "grpNm": "Torres Corzo",
        "crmNm": "Sicop",
        "postCd": "38130",
        "adrStateNm": "Guanajuato",
        "adrCityNm": "Celaya",
        "rfc": "GCA150706JP4",
        "telephone": "4616131700",
        "address": "BLVD. LOPEZ MATEOS 1508 A OTE COL. LAS DELICIAS"
    },
    {
        "dlrCd": "AGT04",
        "dlrNm": "Kia Capital",
        "dmsNm": "Autosystem",
        "grpNm": "Soni",
        "crmNm": "-",
        "postCd": "36251",
        "adrStateNm": "Guanajuato",
        "adrCityNm": "Guanajuato",
        "rfc": "GGU170322Q60",
        "telephone": "4731022800",
        "address": "BLVD. EUQUERIO GUERRERO #121 COL. BURÓCRATAS"
    },
    {
        "dlrCd": "ASP01",
        "dlrNm": "Kia Carretera 57",
        "dmsNm": "Dalton Soft",
        "grpNm": "Dalton",
        "crmNm": "Dalton Soft",
        "postCd": "78399",
        "adrStateNm": "San Luis Potosí",
        "adrCityNm": "San Luis",
        "rfc": "DAO141209TI2",
        "telephone": "8-70-60-00",
        "address": "Av Benito Juarez 1510, Valle Dorado"
    },
    {
        "dlrCd": "ACL03",
        "dlrNm": "Kia Carretera Nacional",
        "dmsNm": "Global DMS",
        "grpNm": "Surman",
        "crmNm": "-",
        "postCd": "64878",
        "adrStateNm": "Nuevo Leon",
        "adrCityNm": "Monterrey",
        "rfc": "",
        "telephone": "81 8288 7100",
        "address": "Carr Nacional 243, Los Remates,"
    },
    {
        "dlrCd": "AHG01",
        "dlrNm": "Kia Center",
        "dmsNm": "Autosystem",
        "grpNm": "Soni",
        "crmNm": "Sicop",
        "postCd": "42186",
        "adrStateNm": "Hidalgo",
        "adrCityNm": "Mineral de la Reforma",
        "rfc": "AAR150729331",
        "telephone": "7173900",
        "address": "Avenida Industrial la Paz número 97 Blvd Everardo Marquez entre Blvd Luis Donaldo Colosio"
    },
    {
        "dlrCd": "FPL01",
        "dlrNm": "Kia Cholula",
        "dmsNm": "Intelisis",
        "grpNm": "Excelencia",
        "crmNm": "-",
        "postCd": "72410",
        "adrStateNm": "Puebla",
        "adrCityNm": "Puebla",
        "rfc": "",
        "telephone": "2226891600",
        "address": "Recta Cholula-Puebla 1408, Cortijo de San Andrés, San Andres Cholula."
    },
    {
        "dlrCd": "BMC05",
        "dlrNm": "Kia Coacalco",
        "dmsNm": "Autoline",
        "grpNm": "Kasa",
        "crmNm": "Sicop",
        "postCd": "55700",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Coacalco de Berriozábal",
        "rfc": "NAG150617QUA",
        "telephone": "41227100",
        "address": "Vía José Lopez Portillo No. 206-209"
    },
    {
        "dlrCd": "ADF12",
        "dlrNm": "Kia Coapa",
        "dmsNm": "Business PRO",
        "grpNm": "Continental",
        "crmNm": "Sirena",
        "postCd": "16020",
        "adrStateNm": "CDMX",
        "adrCityNm": "Xochimilco",
        "rfc": "CCO190502K88",
        "telephone": "15194525",
        "address": "Periférico Sur 6611-i"
    },
    {
        "dlrCd": "CTC01",
        "dlrNm": "Kia Coatza",
        "dmsNm": "AUTOTEC",
        "grpNm": "Farrera",
        "crmNm": "Sicop",
        "postCd": "96558",
        "adrStateNm": "Veracruz",
        "adrCityNm": "Coatzacoalcos",
        "rfc": "CMG150115PZ8",
        "telephone": "921 21 15400",
        "address": "AV. UNIVERSIDAD VERACRUZANA #2205"
    },
    {
        "dlrCd": "DJC02",
        "dlrNm": "Kia Coliman",
        "dmsNm": "Kumi Motors",
        "grpNm": "Plasencia",
        "crmNm": "-",
        "postCd": "28090",
        "adrStateNm": "Colima",
        "adrCityNm": "Colima",
        "rfc": "KMO1501087I7",
        "telephone": "00 00000000",
        "address": "Av. Carlos de la Madrid bejar #720, colonia el Tecolote"
    },
    {
        "dlrCd": "CAS01",
        "dlrNm": "Kia Corregidora",
        "dmsNm": "Total Dealer",
        "grpNm": "Vanguardia",
        "crmNm": "-",
        "postCd": "76009",
        "adrStateNm": "Querétaro",
        "adrCityNm": "Querétaro",
        "rfc": "VKX1507204SA",
        "telephone": "442 388 33 33",
        "address": "Lateral Autopista México-Querétaro No. 1994, Col Plazas del Sol"
    },
    {
        "dlrCd": "ASR01",
        "dlrNm": "Kia Country",
        "dmsNm": "SAD",
        "grpNm": "Premier",
        "crmNm": "-",
        "postCd": "80107",
        "adrStateNm": "Sinaloa",
        "adrCityNm": "Culiacán",
        "rfc": "APA150602688",
        "telephone": "7586565",
        "address": "Blvd. Pedro Infante 3070 country tres Ríos"
    },
    {
        "dlrCd": "EJC01",
        "dlrNm": "Kia Country Club",
        "dmsNm": "Dalton Soft",
        "grpNm": "Dalton",
        "crmNm": "-",
        "postCd": "44648",
        "adrStateNm": "Jalisco",
        "adrCityNm": "Guadalajara",
        "rfc": "",
        "telephone": "01 33 8000 2000",
        "address": "Av. de las Américas #899, Italia Providencia"
    },
    {
        "dlrCd": "AMC06",
        "dlrNm": "Kia Cuautitlan",
        "dmsNm": "Business PRO",
        "grpNm": "Satélite",
        "crmNm": "Sicop",
        "postCd": "54730",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Cuautitlán Izcalli",
        "rfc": "KAU150417A34",
        "telephone": "89951000",
        "address": "AUTOPISTA MEXICO QUERETARO, SAN MATEO IXTACALCO"
    },
    {
        "dlrCd": "ECL01",
        "dlrNm": "Kia Cumbres",
        "dmsNm": "Quiter",
        "grpNm": "Cleber",
        "crmNm": "-",
        "postCd": "64349",
        "adrStateNm": "Nuevo León",
        "adrCityNm": "Monterrey",
        "rfc": "",
        "telephone": "81 2314 6161",
        "address": " Av Paseo de los Leones 10500, Cumbres Elite 7o. Sector"
    },
    {
        "dlrCd": "FDF05",
        "dlrNm": "Kia Del Duero",
        "dmsNm": "Intelisis",
        "grpNm": "Fame",
        "crmNm": "-",
        "postCd": "59600",
        "adrStateNm": "Michoacan",
        "adrCityNm": "Zamora",
        "rfc": "SWM090107L70",
        "telephone": "3515123500",
        "address": "Av. Francisco I. Madero Sur 579 Col Centro"
    },
    {
        "dlrCd": "ADF03",
        "dlrNm": "Kia Del Valle",
        "dmsNm": "SMARTIT",
        "grpNm": "Autofin",
        "crmNm": "Sicop",
        "postCd": "03020",
        "adrStateNm": "CDMX",
        "adrCityNm": "Benito Juárez",
        "rfc": "TAU150219F43",
        "telephone": "5555593936",
        "address": "Angel Urraza 1311"
    },
    {
        "dlrCd": "AGR01",
        "dlrNm": "Kia Diamante",
        "dmsNm": "SMARTIT",
        "grpNm": "Autofin",
        "crmNm": "Sicop",
        "postCd": "39890",
        "adrStateNm": "Guerrero",
        "adrCityNm": "Acapulco de Juárez",
        "rfc": "TAA160407IH6",
        "telephone": "7444885007",
        "address": "Blvd. de las Naciones #405"
    },
    {
        "dlrCd": "ADF13 ",
        "dlrNm": "Kia División del Norte",
        "dmsNm": "SMARTIT",
        "grpNm": "Autofin",
        "crmNm": "-",
        "postCd": "03320",
        "adrStateNm": "CDMX",
        "adrCityNm": "Benito Juárez",
        "rfc": "",
        "telephone": "55 9183 0161",
        "address": "Av. División del Nte. 1917 Col, Emperadores"
    },
    {
        "dlrCd": "AMC05",
        "dlrNm": "Kia Ecatepec",
        "dmsNm": "Autoline",
        "grpNm": "Kasa",
        "crmNm": "Sicop",
        "postCd": "55540",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Ecatepec de Morelos",
        "rfc": "NAG150617QUA",
        "telephone": "41227200",
        "address": "Av. Vía Morelos 398"
    },
    {
        "dlrCd": "AMC07",
        "dlrNm": "Kia Esmeralda",
        "dmsNm": "Business PRO",
        "grpNm": "Camcar",
        "crmNm": "Sicop",
        "postCd": "52936",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Atizapán de Zaragoza",
        "rfc": "EAK190702KK9",
        "telephone": "53087000",
        "address": "AV. BOSQUE ESMERALDA 2"
    },
    {
        "dlrCd": "DNL02",
        "dlrNm": "Kia Frontera",
        "dmsNm": "Global DMS",
        "grpNm": "Carone",
        "crmNm": "Sicop",
        "postCd": "88710",
        "adrStateNm": "Tamaulipas",
        "adrCityNm": "Reynosa",
        "rfc": "YMO141212MC6",
        "telephone": "00 00000000",
        "address": "Blvd. Hidalgo #1000 , Fracc. Palma real Reynosa"
    },
    {
        "dlrCd": "BBC01",
        "dlrNm": "Kia Futura",
        "dmsNm": "Intelisis",
        "grpNm": "Optima",
        "crmNm": "-",
        "postCd": "21259",
        "adrStateNm": "Baja California",
        "adrCityNm": "Mexicali",
        "rfc": "IMO150511PX7",
        "telephone": "6869009500",
        "address": "Calz. Cetys # 2671 Col. Rivera Mexicali Baja California"
    },
    {
        "dlrCd": "AJC02",
        "dlrNm": "Kia Galerias",
        "dmsNm": "Kumi Motors",
        "grpNm": "Plasencia",
        "crmNm": "Sirena",
        "postCd": "45017",
        "adrStateNm": "Jalisco",
        "adrCityNm": "Zapopan",
        "rfc": "",
        "telephone": "33 30015150",
        "address": "Av. Vallarta No. 5760, Fracc. Jocotán"
    },
    {
        "dlrCd": "FJC02",
        "dlrNm": "Kia Gonzalez Gallo",
        "dmsNm": "Kumi Motors",
        "grpNm": "Plasencia",
        "crmNm": "-",
        "postCd": "44870",
        "adrStateNm": "Jalisco",
        "adrCityNm": "Guadalajara",
        "rfc": "",
        "telephone": "33 33310000",
        "address": "Calz. Jesús González Gallo 1549, Atlas"
    },
    {
        "dlrCd": "CNL02",
        "dlrNm": "Kia Gonzalitos",
        "dmsNm": "Global DMS",
        "grpNm": "Carone",
        "crmNm": "Sicop",
        "postCd": "64050",
        "adrStateNm": "Nuevo León",
        "adrCityNm": "Monterrey",
        "rfc": "YMO141212MC6",
        "telephone": "00 00000000",
        "address": "Avenida José Eleuterio González 609, Independencia"
    },
    {
        "dlrCd": "ADG01",
        "dlrNm": "Kia Guadiana",
        "dmsNm": "Global DMS",
        "grpNm": "Hm Automotriz",
        "crmNm": "Sicop",
        "postCd": "34208",
        "adrStateNm": "Durango",
        "adrCityNm": "Durango",
        "rfc": "CAU160222PJ6",
        "telephone": "00 00000000",
        "address": "Blvd. Francisco Villla, #6010, Col. Ciudad Industrial"
    },
    {
        "dlrCd": "ABC01",
        "dlrNm": "Kia Innova",
        "dmsNm": "Intelisis",
        "grpNm": "Optima",
        "crmNm": "-",
        "postCd": "22010",
        "adrStateNm": "Baja California",
        "adrCityNm": "Tijuana",
        "rfc": "IMO150511PX7",
        "telephone": "664 900 9500",
        "address": "San Martin 16502, Río Tijuana 3a. Etapa, Rio Tijuana 3ra Etapa"
    },
    {
        "dlrCd": "AMC03",
        "dlrNm": "Kia Interlomas",
        "dmsNm": "Solomon",
        "grpNm": "Daytona",
        "crmNm": "-",
        "postCd": "52760",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Huixquilucan",
        "rfc": "EUR020306CK4",
        "telephone": "47743100",
        "address": "Boulevard Magnocentro 54, Col. Magnocentro"
    },
    {
        "dlrCd": "CMC03",
        "dlrNm": "Kia Iztapalapa",
        "dmsNm": "Solomon",
        "grpNm": "Daytona",
        "crmNm": "-",
        "postCd": "09060",
        "adrStateNm": "CDMX",
        "adrCityNm": "Iztapalapa",
        "rfc": "EUR020306CK4",
        "telephone": "5547748400",
        "address": "Av. Leyes de Reforma 111. Col. Paseos de Churubusco"
    },
    {
        "dlrCd": "ACH02",
        "dlrNm": "Kia Juarez",
        "dmsNm": "Intelisis",
        "grpNm": "Alden",
        "crmNm": "Sicop",
        "postCd": "32340",
        "adrStateNm": "Chihuahua",
        "adrCityNm": "Cd. Juárez",
        "rfc": "AKJ150703PH6",
        "telephone": "6561731900",
        "address": "Paseo Triunfo de la República # 5044-B Col. 2a. Burócrata"
    },
    {
        "dlrCd": "ACH01",
        "dlrNm": "Kia Juventud",
        "dmsNm": "Total Dealer",
        "grpNm": "Haddad",
        "crmNm": "HubSpot",
        "postCd": "31216",
        "adrStateNm": "Chihuahua",
        "adrCityNm": "Chihuahua",
        "rfc": "HAU1501264X2",
        "telephone": "6144396000",
        "address": "Lat. Periferico de la Juventud 6705"
    },
    {
        "dlrCd": "ACL04",
        "dlrNm": "Kia Laguna",
        "dmsNm": "Global DMS",
        "grpNm": "Hm Automotriz",
        "crmNm": "Sicop",
        "postCd": "27400",
        "adrStateNm": "Coahuila",
        "adrCityNm": "Torreón",
        "rfc": "AAU160405IP4",
        "telephone": "7074400",
        "address": "Blvd. Independencia #3990 Col. El Fresno"
    },
    {
        "dlrCd": "ENL02",
        "dlrNm": "Kia Laredo",
        "dmsNm": "Global DMS",
        "grpNm": "Carone",
        "crmNm": "-",
        "postCd": "88278",
        "adrStateNm": "Tamaulipas",
        "adrCityNm": "Nuevo Laredo",
        "rfc": "YMO141212MC6",
        "telephone": "8671362700",
        "address": "Avenida Reforma No. 4405, Colonia Campestre"
    },
    {
        "dlrCd": "ANL02",
        "dlrNm": "Kia Linda Vista",
        "dmsNm": "Global DMS",
        "grpNm": "Carone",
        "crmNm": "Sicop",
        "postCd": "67130",
        "adrStateNm": "Nuevo Leon",
        "adrCityNm": "Monterrey",
        "rfc": "YMO141212MC6",
        "telephone": "21337700",
        "address": "Av. Miguel Alemán #6062, Torres de Linda Vista Guadalupe"
    },
    {
        "dlrCd": "ASP02",
        "dlrNm": "Kia Lomas",
        "dmsNm": "SIIA-TC",
        "grpNm": "Torres Corzo",
        "crmNm": "-",
        "postCd": "78210",
        "adrStateNm": "San Luis Potosi",
        "adrCityNm": "San Luis Potosí",
        "rfc": "GCA170224U42",
        "telephone": "4444751100",
        "address": "BLVD. ANTONIO ROCHA CORDERO #392 COL VILLA ANTIGUA"
    },
    {
        "dlrCd": "AMC02",
        "dlrNm": "Kia Lomas Verdes",
        "dmsNm": "Intelisis",
        "grpNm": "Cever",
        "crmNm": "-",
        "postCd": "53020",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Naucalpan de Juárez",
        "rfc": "",
        "telephone": "41250000",
        "address": "Perif. Blvd. Manuel Ávila Camacho 745, Sta Maria Nativitas"
    },
    {
        "dlrCd": "AJC01",
        "dlrNm": "Kia Lopez Mateos",
        "dmsNm": "Dalton Soft",
        "grpNm": "Dalton",
        "crmNm": "Dalton Soft",
        "postCd": "45086",
        "adrStateNm": "Jalisco",
        "adrCityNm": "Zapopan",
        "rfc": "DAO141126SD1",
        "telephone": "00 00000000",
        "address": "Av. Adolfo López Mateos Sur 4251, Loma Bonita, 45086 Zapopan, Jalisco"
    },
    {
        "dlrCd": "EOC01",
        "dlrNm": "Kia Los Fuertes",
        "dmsNm": "Total Dealer",
        "grpNm": "Bonn",
        "crmNm": "-",
        "postCd": "72240",
        "adrStateNm": "Puebla",
        "adrCityNm": "Puebla",
        "rfc": "ASU150525NRA",
        "telephone": "2226891800",
        "address": "Calz. Ignacio Zaragoza 69, Adolfo López Mateos"
    },
    {
        "dlrCd": "EPL01",
        "dlrNm": "Kia Malinche",
        "dmsNm": "Intelisis",
        "grpNm": "Excelencia",
        "crmNm": "-",
        "postCd": "90450",
        "adrStateNm": "Tlaxcala",
        "adrCityNm": "Yauhquemehcan",
        "rfc": "CCO150129ME8",
        "telephone": "00 00000000",
        "address": "Carretera Fed. Apizaco Tlx. #260, Col. El Carmen Santa Úrsula Zimatepec, Mcp. Yauhquemehcan"
    },
    {
        "dlrCd": "DPL01",
        "dlrNm": "Kia Manantial",
        "dmsNm": "Intelisis",
        "grpNm": "Excelencia",
        "crmNm": "-",
        "postCd": "75750",
        "adrStateNm": "Puebla",
        "adrCityNm": "Tehuacan",
        "rfc": "CCO150129ME8",
        "telephone": "00 00000000",
        "address": "Blvd. Socorrro Romero #4008 Col. San Lorenzo Teotipilco, Tehuacan, Puebla"
    },
    {
        "dlrCd": "ADF07",
        "dlrNm": "Kia Mariano Escobedo",
        "dmsNm": "Dalton Soft",
        "grpNm": "Dalton",
        "crmNm": "Dalton Soft",
        "postCd": "11400",
        "adrStateNm": "CDMX",
        "adrCityNm": "Miguel Hidalgo",
        "rfc": "DAO150421LB8",
        "telephone": "00 00000000",
        "address": "Calz. Gral. Mariano Escobedo 16, Popotla"
    },
    {
        "dlrCd": "ACL01",
        "dlrNm": "Kia Max",
        "dmsNm": "Quiter",
        "grpNm": "Cleber",
        "crmNm": "-",
        "postCd": "25200",
        "adrStateNm": "Coahuila",
        "adrCityNm": "Saltillo",
        "rfc": "",
        "telephone": "844 191 5000",
        "address": "Carr. Monterrey - Saltillo Km 7.25, Los Rodríguez"
    },
    {
        "dlrCd": "BMC02",
        "dlrNm": "Kia Metepec",
        "dmsNm": "Intelisis",
        "grpNm": "Cever",
        "crmNm": "-",
        "postCd": "52166",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Metepec",
        "rfc": "",
        "telephone": "722 262 2000",
        "address": "Blvd. Toluca-Metepec No.101 Sur Col. La Michoacana"
    },
    {
        "dlrCd": "CDF05",
        "dlrNm": "Kia Mil Cumbres",
        "dmsNm": "Intelisis",
        "grpNm": "Fame",
        "crmNm": "-",
        "postCd": "58254",
        "adrStateNm": "Michoacán",
        "adrCityNm": "Morelia",
        "rfc": "SWM090107L70",
        "telephone": "00 00000000",
        "address": "Av. Acueducto #3891 Col. Lomas de las Américas"
    },
    {
        "dlrCd": "BSR01",
        "dlrNm": "Kia Morelos",
        "dmsNm": "SAD",
        "grpNm": "Premier",
        "crmNm": "-",
        "postCd": "83148",
        "adrStateNm": "Sonora",
        "adrCityNm": "Hermosillo",
        "rfc": "APA150602688",
        "telephone": "1090909",
        "address": "Blvd. José Maria Morelos 744 Col. Palermo"
    },
    {
        "dlrCd": "EJC02",
        "dlrNm": "Kia Nayarita",
        "dmsNm": "Kumi Motors",
        "grpNm": "Plasencia",
        "crmNm": "Sirena",
        "postCd": "63000",
        "adrStateNm": "Nayarit",
        "adrCityNm": "Tepic",
        "rfc": "KMO1501087I7",
        "telephone": "00 00000000",
        "address": "Avenida de los Insurgentes Pte No. 752. Colonia Estadios. Tepic, Nayarit"
    },
    {
        "dlrCd": "AYN01",
        "dlrNm": "Kia Norte",
        "dmsNm": "W32",
        "grpNm": "Bepensa",
        "crmNm": "-",
        "postCd": "97115",
        "adrStateNm": "Yucatan",
        "adrCityNm": "Mérida",
        "rfc": "YMO141212MC6",
        "telephone": "9134422",
        "address": "Periferico Norte Tablaje Catastral No 42305"
    },
    {
        "dlrCd": "AQT01",
        "dlrNm": "Kia Nova Qro",
        "dmsNm": "Intelisis",
        "grpNm": "Alden",
        "crmNm": "Sirena",
        "postCd": "76125",
        "adrStateNm": "Querétaro",
        "adrCityNm": "Querétaro",
        "rfc": "CUA021025AX4",
        "telephone": "(442) 211 99 99",
        "address": "Blvd. Bernardo Quintana No. 628, Col. Desarrollo San Pablo"
    },
    {
        "dlrCd": "CJC02",
        "dlrNm": "Kia Pacific",
        "dmsNm": "Kumi Motors",
        "grpNm": "Plasencia",
        "crmNm": "Sirena",
        "postCd": "82128",
        "adrStateNm": "Sinaloa",
        "adrCityNm": "Mazatlán",
        "rfc": "KMO1501087I7",
        "telephone": "(669) 500 3300",
        "address": "Av. Rafael Buelna #199 Col. Infonavit Playas Mazatlán Sinaloa"
    },
    {
        "dlrCd": "DCL01",
        "dlrNm": "Kia Pape",
        "dmsNm": "Quiter",
        "grpNm": "Cleber",
        "crmNm": "-",
        "postCd": "25200",
        "adrStateNm": "Coahuila",
        "adrCityNm": "Saltillo",
        "rfc": "RMO150624FJ4",
        "telephone": "45534543543",
        "address": "Carretera Saltillo - Monterrey KM. 7.25 Col. Los Rodriguez"
    },
    {
        "dlrCd": "EDF05",
        "dlrNm": "Kia Paricutin",
        "dmsNm": "Intelisis",
        "grpNm": "Fame",
        "crmNm": "-",
        "postCd": "60190",
        "adrStateNm": "Michoacán",
        "adrCityNm": "Uruapan",
        "rfc": "SWM090107L70",
        "telephone": "4525288080",
        "address": "Libramiento Oriente No. 5849, esquina con calle privada, Colonia Quirindavara"
    },
    {
        "dlrCd": "AJC03",
        "dlrNm": "Kia Patria",
        "dmsNm": "SIMA",
        "grpNm": "Camarena",
        "crmNm": "Sicop",
        "postCd": "44660",
        "adrStateNm": "Jalisco",
        "adrCityNm": "Guadalajara",
        "rfc": "ASE141209V96",
        "telephone": "30 00 00 00",
        "address": "Av. Patria 2175"
    },
    {
        "dlrCd": "ADF05",
        "dlrNm": "Kia Pedregal",
        "dmsNm": "Intelisis",
        "grpNm": "Fame",
        "crmNm": "-",
        "postCd": "01900",
        "adrStateNm": "CDMX",
        "adrCityNm": "Álvaro Obregón",
        "rfc": "SWM090107L70",
        "telephone": "5591363636",
        "address": "Blvd. Adolfo Ruíz Cortines No 4000 Bis, Col. Jardines del Pedregal"
    },
    {
        "dlrCd": "CQR01",
        "dlrNm": "Kia Peninsula",
        "dmsNm": "Quiter",
        "grpNm": "Montejo",
        "crmNm": "Sirena",
        "postCd": "97219",
        "adrStateNm": "Yucatan",
        "adrCityNm": "Mérida",
        "rfc": "IPA150605LB3",
        "telephone": "9999480048",
        "address": "CALLE 44H NUM 376 POR 44G FRACC. PASEOS DE CHENKU"
    },
    {
        "dlrCd": "CYN01",
        "dlrNm": "Kia Playacar",
        "dmsNm": "W32",
        "grpNm": "Bepensa",
        "crmNm": "-",
        "postCd": "77710",
        "adrStateNm": "Quintana Roo",
        "adrCityNm": "Solidaridad",
        "rfc": "YMO141212MC6",
        "telephone": "9842064630",
        "address": "Carretera Federal Cancún - Tulum Mz 73 Lt 5"
    },
    {
        "dlrCd": "AOC01",
        "dlrNm": "Kia Plaza del Valle",
        "dmsNm": "Total Dealer",
        "grpNm": "Bonn",
        "crmNm": "-",
        "postCd": "68130",
        "adrStateNm": "Oaxaca",
        "adrCityNm": "Oaxaca de Juárez",
        "rfc": "ASU150525NRA",
        "telephone": "9515023570",
        "address": "Av. Universidad No. 500 Col. Ex-Hacienda Candiani"
    },
    {
        "dlrCd": "CGT06",
        "dlrNm": "Kia Poliforum",
        "dmsNm": "Quiter",
        "grpNm": "Autocom",
        "crmNm": "Sicop",
        "postCd": "37500",
        "adrStateNm": "Guanajuato",
        "adrCityNm": "León",
        "rfc": "ADE190821NE9",
        "telephone": "4771480707",
        "address": "Blvd. Adolfo López Mateos N°1816 Col. El Mirador Oriental"
    },
    {
        "dlrCd": "AMS01",
        "dlrNm": "Kia Primavera",
        "dmsNm": "Business PRO",
        "grpNm": "Francomotors",
        "crmNm": "Sicop",
        "postCd": "62290",
        "adrStateNm": "Morelos",
        "adrCityNm": "Cuernavaca",
        "rfc": "RCU150707C80",
        "telephone": "7772288430",
        "address": "Av. poder legislativo esq. hernan cortes col vista hermosa"
    },
    {
        "dlrCd": "ATC01",
        "dlrNm": "Kia Ruiz Cortines",
        "dmsNm": "AUTOTEC",
        "grpNm": "Farrera",
        "crmNm": "Sicop",
        "postCd": "86100",
        "adrStateNm": "Tabasco",
        "adrCityNm": "Centro",
        "rfc": "CMG150115PZ8",
        "telephone": "9933 19 15 00",
        "address": "Blvd. Adolfo Ruiz Cortines # 2018 Col Atasta Villahermosa Tabasco"
    },
    {
        "dlrCd": "CDF07",
        "dlrNm": "Kia San Joaquin",
        "dmsNm": "Dalton Soft",
        "grpNm": "Dalton",
        "crmNm": "Dalton Soft",
        "postCd": "11489",
        "adrStateNm": "CDMX",
        "adrCityNm": "Miguel Hidalgo",
        "rfc": "DAO150421LB8",
        "telephone": "00 00000000",
        "address": "Av. Río San Joaquín 335, Amp Popo"
    },
    {
        "dlrCd": "BQT01",
        "dlrNm": "Kia San Juan",
        "dmsNm": "Intelisis",
        "grpNm": "Alden",
        "crmNm": "Sirena",
        "postCd": "76800",
        "adrStateNm": "Queretaro",
        "adrCityNm": "San Juan del Río",
        "rfc": "AKQ141209NN7",
        "telephone": "427 101 9550",
        "address": "Blvd Hidalgo 152 Col. Centro"
    },
    {
        "dlrCd": "DJC03",
        "dlrNm": "Kia Santa Anita",
        "dmsNm": "SIMA",
        "grpNm": "Camarena",
        "crmNm": "-",
        "postCd": "45640",
        "adrStateNm": "Jalisco",
        "adrCityNm": "Tlajomulco de Zúñiga",
        "rfc": "ASE141209V96",
        "telephone": "33 3000 3200",
        "address": "Av. Adolfo López Mateos Sur 3511, Los Gavilanes"
    },
    {
        "dlrCd": "ADF11",
        "dlrNm": "Kia Santa Fe",
        "dmsNm": "Business PRO",
        "grpNm": "Solana",
        "crmNm": "-",
        "postCd": "05348",
        "adrStateNm": "CDMX",
        "adrCityNm": "Cuajimalpa de Morelos",
        "rfc": "AKS1707256U3",
        "telephone": "41251000",
        "address": "Prolongacion Paseo de la Reforma #1130"
    },
    {
        "dlrCd": "AMC01",
        "dlrNm": "Kia Satelite",
        "dmsNm": "Intelisis",
        "grpNm": "Alden",
        "crmNm": "Sicop",
        "postCd": "54055",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Tlalnepantla",
        "rfc": "CUA021025AX4",
        "telephone": "55 5321 9900",
        "address": "Perif. Blvd. Manuel Ávila Camacho 3039"
    },
    {
        "dlrCd": "CCL01",
        "dlrNm": "Kia Sendero",
        "dmsNm": "Quiter",
        "grpNm": "Cleber",
        "crmNm": "-",
        "postCd": "66428",
        "adrStateNm": "Nuevo Leon",
        "adrCityNm": "San Nicolás de los Garza",
        "rfc": "RMO150624FJ4",
        "telephone": "8123146100",
        "address": "Av. Sendero Divisorio #202 Col. Casa Bella"
    },
    {
        "dlrCd": "COC01",
        "dlrNm": "Kia Serdan",
        "dmsNm": "Total Dealer",
        "grpNm": "Bonn",
        "crmNm": "HubSpot",
        "postCd": "72140",
        "adrStateNm": "Puebla",
        "adrCityNm": "Puebla",
        "rfc": "ASU150525NRA",
        "telephone": "2241070",
        "address": "Blvd Hermanos Serdan"
    },
    {
        "dlrCd": "DTC01",
        "dlrNm": "Kia Sureste",
        "dmsNm": "AUTOTEC",
        "grpNm": "Farrera",
        "crmNm": "Sicop",
        "postCd": "29056",
        "adrStateNm": "Chiapas",
        "adrCityNm": "Tuxtla Gutiérrez",
        "rfc": "CMG150115PZ8",
        "telephone": "9616155400",
        "address": "Libramiento Sur Pte. S/N Flamboyant"
    },
    {
        "dlrCd": "CTS01",
        "dlrNm": "Kia Tajín",
        "dmsNm": "Business PRO",
        "grpNm": "Tampico",
        "crmNm": "Sicop",
        "postCd": "93210",
        "adrStateNm": "Veracruz",
        "adrCityNm": "Poza Rica de Hidalgo",
        "rfc": "ICO7404276B0",
        "telephone": "(782)8261950",
        "address": "Carretera Poza Rica -Cazones KM50 Col. Reforma No. 3729"
    },
    {
        "dlrCd": "CMS01",
        "dlrNm": "Kia Texcoco",
        "dmsNm": "SIA",
        "grpNm": "Francomotors",
        "crmNm": "Sicop",
        "postCd": "56150",
        "adrStateNm": "Edo. Méx.",
        "adrCityNm": "Texcoco",
        "rfc": "",
        "telephone": "595 913 7700",
        "address": "Calle Emiliano Zapata S/N, Santa Ursula"
    },
    {
        "dlrCd": "CDF12",
        "dlrNm": "Kia Tlahuac",
        "dmsNm": "Business PRO",
        "grpNm": "Continental",
        "crmNm": "Sirena",
        "postCd": "09880",
        "adrStateNm": "CDMX",
        "adrCityNm": "Iztapalapa",
        "rfc": "CCO190502K88",
        "telephone": "5550370909",
        "address": "Canal de Garay 629"
    },
    {
        "dlrCd": "CJC03",
        "dlrNm": "Kia Vallarta",
        "dmsNm": "SIMA",
        "grpNm": "Camarena",
        "crmNm": "Sicop",
        "postCd": "48291",
        "adrStateNm": "Jalisco",
        "adrCityNm": "Puerto Vallarta",
        "rfc": "ASE141209V96",
        "telephone": "3221444401",
        "address": "Carretera a Tepic # 5735, Col. Las Juntas"
    },
    {
        "dlrCd": "ANL01",
        "dlrNm": "Kia Valle Oriente",
        "dmsNm": "Global DMS",
        "grpNm": "Surman",
        "crmNm": "Sicop",
        "postCd": "66269",
        "adrStateNm": "Nuevo Leon",
        "adrCityNm": "San Pedro Garza García",
        "rfc": "",
        "telephone": "81 8215 2300",
        "address": "Av Lázaro Cárdenas 2506, Sector Oriente"
    },
    {
        "dlrCd": "ADF02",
        "dlrNm": "Kia Vallejo",
        "dmsNm": "Global DMS",
        "grpNm": "Surman",
        "crmNm": "Sicop",
        "postCd": "07720",
        "adrStateNm": "CDMX",
        "adrCityNm": "Gustavo A. Madero",
        "rfc": "",
        "telephone": "55 2881 1900",
        "address": "Calz. Vallejo 991, Nueva Vallejo II Secc"
    },
    {
        "dlrCd": "CGT03",
        "dlrNm": "Kia Via Alta",
        "dmsNm": "SIIA-TC",
        "grpNm": "Torres Corzo",
        "crmNm": "-",
        "postCd": "36740",
        "adrStateNm": "Guanajuato",
        "adrCityNm": "Salamanca",
        "rfc": "",
        "telephone": "01 464 113 1300",
        "address": "Blvd. Faja de Oro 2302, El Pirul"
    },
    {
        "dlrCd": "DTS01",
        "dlrNm": "Kia Victoria",
        "dmsNm": "Business PRO",
        "grpNm": "Tampico",
        "crmNm": "Sicop",
        "postCd": "87027",
        "adrStateNm": "Tamaulipas",
        "adrCityNm": "Victoria",
        "rfc": "ICO7404276B0",
        "telephone": "8341070870",
        "address": "Blvd Tamaulipas Núm. 3500 Ej. Benito Juarez"
    },
    {
        "dlrCd": "AGT03",
        "dlrNm": "Kia Villas",
        "dmsNm": "SIIA-TC",
        "grpNm": "Torres Corzo",
        "crmNm": "Sicop",
        "postCd": "36670",
        "adrStateNm": "Guanajuato",
        "adrCityNm": "Irapuato",
        "rfc": "GCA160314GR6",
        "telephone": "462 6243080",
        "address": "BLVD. VILLAS DE IRAPUATO 2165 COL. EJIDO SAN FRANCISCO DE LAS CHARCAS"
    },
    {
        "dlrCd": "DBC01",
        "dlrNm": "Kia Vision",
        "dmsNm": "Intelisis",
        "grpNm": "Optima",
        "crmNm": "-",
        "postCd": "22880",
        "adrStateNm": "Baja California",
        "adrCityNm": "Ensenada",
        "rfc": "",
        "telephone": "01 646 900 9500",
        "address": "Lázaro Cárdenas 1509, Bahia Ensenada"
    },
    
]

export default dealersData;