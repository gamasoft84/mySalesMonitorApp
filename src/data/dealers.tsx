import { InfoDealer } from "./IDealer";

const dealersData : InfoDealer[]= 
[
	{
	  "dlrName": "Kia Aeropuerto",
	  "dlrCd": "ADF06",
	  "postCd": "15730",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Venustiano Carranza",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Ahome",
	  "dlrCd": "DSR01",
	  "postCd": "81200",
	  "adrStateNm": "Sinaloa",
	  "adrCityNm": "Ahome",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Altaria",
	  "dlrCd": "AAS01",
	  "postCd": "20115",
	  "adrStateNm": "Aguascalientes",
	  "adrCityNm": "Aguascalientes",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Altas Montañas",
	  "dlrCd": "CVZ01",
	  "postCd": "94570",
	  "adrStateNm": "Veracruz",
	  "adrCityNm": "Córdoba",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Angelopolis",
	  "dlrCd": "APL01",
	  "postCd": "72190",
	  "adrStateNm": "Puebla",
	  "adrCityNm": "Puebla",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Animas",
	  "dlrCd": "AVZ01",
	  "postCd": "91198",
	  "adrStateNm": "Veracruz",
	  "adrCityNm": "Xalapa",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Bahia",
	  "dlrCd": "ACC01",
	  "postCd": "24095",
	  "adrStateNm": "Campeche",
	  "adrCityNm": "Campeche",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Baja Sur",
	  "dlrCd": "HSR01",
	  "postCd": "23098",
	  "adrStateNm": "Baja California Sur",
	  "adrCityNm": "La Paz",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Bajío",
	  "dlrCd": "AGT06",
	  "postCd": "37180",
	  "adrStateNm": "Guanajuato",
	  "adrCityNm": "León",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Bernardez",
	  "dlrCd": "AZS01",
	  "postCd": "98618",
	  "adrStateNm": "Zacatecas",
	  "adrCityNm": "Guadalupe",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Boca",
	  "dlrCd": "BTC01",
	  "postCd": "94298",
	  "adrStateNm": "Veracruz",
	  "adrCityNm": "Boca del Río",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Bonampak",
	  "dlrCd": "AQR01",
	  "postCd": "77500",
	  "adrStateNm": "Quintana Roo",
	  "adrCityNm": "Benito Juárez",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Cabos",
	  "dlrCd": "ESR01",
	  "postCd": "23400",
	  "adrStateNm": "Baja California Sur",
	  "adrCityNm": "Los Cabos",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Cajeme",
	  "dlrCd": "FSR01",
	  "postCd": "85000",
	  "adrStateNm": "Sonora",
	  "adrCityNm": "Cajeme",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Campestre",
	  "dlrCd": "AGT02",
	  "postCd": "38130",
	  "adrStateNm": "Guanajuato",
	  "adrCityNm": "Celaya",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Capital",
	  "dlrCd": "AGT04",
	  "postCd": "36251",
	  "adrStateNm": "Guanajuato",
	  "adrCityNm": "Guanajuato",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Carretera 57",
	  "dlrCd": "ASP01",
	  "postCd": "78399",
	  "adrStateNm": "San Luis Potosí",
	  "adrCityNm": "San Luis",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Carretera Nacional",
	  "dlrCd": "ACL03",
	  "postCd": "64878",
	  "adrStateNm": "Nuevo Leon",
	  "adrCityNm": "Monterrey",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Center",
	  "dlrCd": "AHG01",
	  "postCd": "42186",
	  "adrStateNm": "Hidalgo",
	  "adrCityNm": "Mineral de la Reforma",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Cholula",
	  "dlrCd": "FPL01",
	  "postCd": "72410",
	  "adrStateNm": "Puebla",
	  "adrCityNm": "Puebla",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Coacalco",
	  "dlrCd": "BMC05",
	  "postCd": "55700",
	  "adrStateNm": "Estado de Mexico",
	  "adrCityNm": "Coacalco de Berriozábal",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Coapa",
	  "dlrCd": "ADF12",
	  "postCd": "16020",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Xochimilco",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Coatza",
	  "dlrCd": "CTC01",
	  "postCd": "96558",
	  "adrStateNm": "Veracruz",
	  "adrCityNm": "Coatzacoalcos",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Coliman",
	  "dlrCd": "DJC02",
	  "postCd": "28090",
	  "adrStateNm": "Colima",
	  "adrCityNm": "Colima",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Corregidora",
	  "dlrCd": "CAS01",
	  "postCd": "76009",
	  "adrStateNm": "Querétaro",
	  "adrCityNm": "Querétaro",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Country",
	  "dlrCd": "ASR01",
	  "postCd": "80107",
	  "adrStateNm": "Sinaloa",
	  "adrCityNm": "Culiacán",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Contry Club",
	  "dlrCd": "EJC01",
	  "postCd": "44648",
	  "adrStateNm": "Jalisco",
	  "adrCityNm": "Guadalajara",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Cuautitlan",
	  "dlrCd": "AMC06",
	  "postCd": "54730",
	  "adrStateNm": "Estado de Mexico",
	  "adrCityNm": "Cuautitlán Izcalli",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia del Duero",
	  "dlrCd": "FDF05",
	  "postCd": "59600",
	  "adrStateNm": "Michoacan",
	  "adrCityNm": "Zamora",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Del Valle",
	  "dlrCd": "ADF03",
	  "postCd": "03020",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Benito Juárez",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Diamante",
	  "dlrCd": "AGR01",
	  "postCd": "39890",
	  "adrStateNm": "Guerrero",
	  "adrCityNm": "Acapulco de Juárez",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia División del Norte",
	  "dlrCd": "ADF13",
	  "postCd": "03320",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Benito Juárez",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Ecatepec",
	  "dlrCd": "AMC05",
	  "postCd": "55540",
	  "adrStateNm": "Estado de Mexico",
	  "adrCityNm": "Ecatepec de Morelos",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Esmeralda",
	  "dlrCd": "AMC07",
	  "postCd": "52936",
	  "adrStateNm": "Estado de Mexico",
	  "adrCityNm": "Atizapán de Zaragoza",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Frontera",
	  "dlrCd": "DNL02",
	  "postCd": "88710",
	  "adrStateNm": "Tamaulipas",
	  "adrCityNm": "Reynosa",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Futura",
	  "dlrCd": "BBC01",
	  "postCd": "21259",
	  "adrStateNm": "Baja California",
	  "adrCityNm": "Mexicali",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Galerias",
	  "dlrCd": "AJC02",
	  "postCd": "45017",
	  "adrStateNm": "Jalisco",
	  "adrCityNm": "Zapopan",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Gonzalez Gallo",
	  "dlrCd": "FJC02",
	  "postCd": "44870",
	  "adrStateNm": "Jalisco",
	  "adrCityNm": "Guadalajara",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Gonzalitos",
	  "dlrCd": "CNL02",
	  "postCd": "64050",
	  "adrStateNm": "Nuevo León",
	  "adrCityNm": "Monterrey",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Guadiana",
	  "dlrCd": "ADG01",
	  "postCd": "34208",
	  "adrStateNm": "Durango",
	  "adrCityNm": "Durango",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Innova",
	  "dlrCd": "ABC01",
	  "postCd": "22010",
	  "adrStateNm": "Baja California",
	  "adrCityNm": "Tijuana",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Interlomas",
	  "dlrCd": "AMC03",
	  "postCd": "52760",
	  "adrStateNm": "Estado de Mexico",
	  "adrCityNm": "Huixquilucan",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Iztapalapa",
	  "dlrCd": "CMC03",
	  "postCd": "09060",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Iztapalapa",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Juarez",
	  "dlrCd": "ACH02",
	  "postCd": "32340",
	  "adrStateNm": "Chihuahua",
	  "adrCityNm": "Cd. Juárez",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Juventud",
	  "dlrCd": "ACH01",
	  "postCd": "31216",
	  "adrStateNm": "Chihuahua",
	  "adrCityNm": "Chihuahua",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Laguna",
	  "dlrCd": "ACL04",
	  "postCd": "27400",
	  "adrStateNm": "Coahuila",
	  "adrCityNm": "Torreón",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Laredo",
	  "dlrCd": "ENL02",
	  "postCd": "88278",
	  "adrStateNm": "Tamaulipas",
	  "adrCityNm": "Nuevo Laredo",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Linda Vista",
	  "dlrCd": "ANL02",
	  "postCd": "67130",
	  "adrStateNm": "Nuevo Leon",
	  "adrCityNm": "Monterrey",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Lomas",
	  "dlrCd": "ASP02",
	  "postCd": "78210",
	  "adrStateNm": "San Luis Potosi",
	  "adrCityNm": "San Luis Potosí",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Lomas Verdes",
	  "dlrCd": "AMC02",
	  "postCd": "53020",
	  "adrStateNm": "Estado de México",
	  "adrCityNm": "Naucalpan de Juárez",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Lopez Mateos",
	  "dlrCd": "AJC01",
	  "postCd": "45086",
	  "adrStateNm": "Jalisco",
	  "adrCityNm": "Zapopan",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Los Fuertes",
	  "dlrCd": "EOC01",
	  "postCd": "72240",
	  "adrStateNm": "Puebla",
	  "adrCityNm": "Puebla",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Malinche",
	  "dlrCd": "EPL01",
	  "postCd": "90450",
	  "adrStateNm": "Tlaxcala",
	  "adrCityNm": "Yauhquemehcan",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Manantial",
	  "dlrCd": "DPL01",
	  "postCd": "75750",
	  "adrStateNm": "Puebla",
	  "adrCityNm": "Tehuacan",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Mariano Escobedo",
	  "dlrCd": "ADF07",
	  "postCd": "11400",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "CDMX",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Metepec",
	  "dlrCd": "BMC02",
	  "postCd": "52166",
	  "adrStateNm": "Estado de México",
	  "adrCityNm": "Metepec",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Mil Cumbres",
	  "dlrCd": "CDF05",
	  "postCd": "58254",
	  "adrStateNm": "Michoacán",
	  "adrCityNm": "Morelia",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Morelos",
	  "dlrCd": "BSR01",
	  "postCd": "83148",
	  "adrStateNm": "Sonora",
	  "adrCityNm": "Hermosillo",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Nayarita",
	  "dlrCd": "EJC02",
	  "postCd": "63000",
	  "adrStateNm": "Nayarit",
	  "adrCityNm": "Tepic",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Norte",
	  "dlrCd": "AYN01",
	  "postCd": "97115",
	  "adrStateNm": "Yucatan",
	  "adrCityNm": "Mérida",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Nova Qro",
	  "dlrCd": "AQT01",
	  "postCd": "76125",
	  "adrStateNm": "Querétaro",
	  "adrCityNm": "Querétaro",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Pacific",
	  "dlrCd": "CJC02",
	  "postCd": "82128",
	  "adrStateNm": "Sinaloa",
	  "adrCityNm": "Mazatlán",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Pape",
	  "dlrCd": "DCL01",
	  "postCd": "25200",
	  "adrStateNm": "Coahuila",
	  "adrCityNm": "Saltillo",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Paricutin",
	  "dlrCd": "EDF05",
	  "postCd": "60190",
	  "adrStateNm": "Michoacán",
	  "adrCityNm": "Uruapan",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Patria",
	  "dlrCd": "AJC03",
	  "postCd": "44660",
	  "adrStateNm": "Jalisco",
	  "adrCityNm": "Guadalajara",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Pedregal",
	  "dlrCd": "ADF05",
	  "postCd": "01900",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Álvaro Obregón",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Peninsula",
	  "dlrCd": "CQR01",
	  "postCd": "97219",
	  "adrStateNm": "Yucatan",
	  "adrCityNm": "Mérida",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Playacar",
	  "dlrCd": "CYN01",
	  "postCd": "77710",
	  "adrStateNm": "Quintana Roo",
	  "adrCityNm": "Solidaridad",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Plaza del Valle",
	  "dlrCd": "AOC01",
	  "postCd": "68130",
	  "adrStateNm": "Oaxaca",
	  "adrCityNm": "Oaxaca de Juárez",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Poliforum",
	  "dlrCd": "CGT06",
	  "postCd": "37500",
	  "adrStateNm": "Guanajuato",
	  "adrCityNm": "León",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
		"dlrName": "Kia Polanco",
		"dlrCd": "SWR001",
		"postCd": "11000",
		"adrStateNm": "CDMX",
		"adrCityNm": "Miguel Hidalgo",
		"latitude": "19.420824613045703",
		"longitude": "-99.08221819836864"
	  },
	{
	  "dlrName": "Kia Primavera",
	  "dlrCd": "AMS01",
	  "postCd": "62290",
	  "adrStateNm": "Morelos",
	  "adrCityNm": "Cuernavaca",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Ruiz Cortines",
	  "dlrCd": "ATC01",
	  "postCd": "86100",
	  "adrStateNm": "Tabasco",
	  "adrCityNm": "Centro",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia San Joaquin",
	  "dlrCd": "CDF07",
	  "postCd": "11489",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Miguel Hidalgo",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia San Juan",
	  "dlrCd": "BQT01",
	  "postCd": "76800",
	  "adrStateNm": "Queretaro",
	  "adrCityNm": "San Juan del Río",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Santa Anita",
	  "dlrCd": "DJC03",
	  "postCd": "45640",
	  "adrStateNm": "Jalisco",
	  "adrCityNm": "Tlajomulco de Zúñiga",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Santa Fe",
	  "dlrCd": "ADF11",
	  "postCd": "05348",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Cuajimalpa de Morelos",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Satelite",
	  "dlrCd": "AMC01",
	  "postCd": "54055",
	  "adrStateNm": "Estado de Mexico",
	  "adrCityNm": "Tlalnepantla",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Sendero",
	  "dlrCd": "CCL01",
	  "postCd": "66428",
	  "adrStateNm": "Nuevo Leon",
	  "adrCityNm": "San Nicolás de los Garza",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Serdan",
	  "dlrCd": "COC01",
	  "postCd": "72140",
	  "adrStateNm": "Puebla",
	  "adrCityNm": "Puebla",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Sureste",
	  "dlrCd": "DTC01",
	  "postCd": "29056",
	  "adrStateNm": "Chiapas",
	  "adrCityNm": "Tuxtla Gutiérrez",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Tajín",
	  "dlrCd": "CTS01",
	  "postCd": "93210",
	  "adrStateNm": "Veracruz",
	  "adrCityNm": "Poza Rica de Hidalgo",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Tlahuac",
	  "dlrCd": "CDF12",
	  "postCd": "09880",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Iztapalapa",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Vallarta",
	  "dlrCd": "CJC03",
	  "postCd": "48291",
	  "adrStateNm": "Jalisco",
	  "adrCityNm": "Puerto Vallarta",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Valle Oriente",
	  "dlrCd": "ANL01 ",
	  "postCd": "66269",
	  "adrStateNm": "Nuevo Leon",
	  "adrCityNm": "San Pedro Garza García",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Vallejo",
	  "dlrCd": "ADF02",
	  "postCd": "07720",
	  "adrStateNm": "CDMX",
	  "adrCityNm": "Gustavo A. Madero",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Via Alta",
	  "dlrCd": "CGT03",
	  "postCd": "36740",
	  "adrStateNm": "Guanajuato",
	  "adrCityNm": "Salamanca",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Victoria",
	  "dlrCd": "DTS01",
	  "postCd": "87027",
	  "adrStateNm": "Tamaulipas",
	  "adrCityNm": "Victoria",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Villas",
	  "dlrCd": "AGT03",
	  "postCd": "36670",
	  "adrStateNm": "Guanajuato",
	  "adrCityNm": "Irapuato",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	},
	{
	  "dlrName": "Kia Vision",
	  "dlrCd": "DBC01",
	  "postCd": "22880",
	  "adrStateNm": "Baja California",
	  "adrCityNm": "Ensenada",
	  "latitude": "19.420824613045703",
	  "longitude": "-99.08221819836864"
	}
  ];

export default dealersData;