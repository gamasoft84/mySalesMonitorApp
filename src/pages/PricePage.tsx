import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import VehicleList from "./VehicleList";

const pricesCars = [
  {
    id: 1,
    name: "Rio Sedán",
    price: "$248,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2021/rio-sd/new/components/Rio_SD.png",
    year: 2021,
  },
  {
    id: 2,
    name: "Rio HatchBack",
    price: "$282,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2021/rio-hb/RioHB_246x130.png",
    year: 2021,
  },
  {
    id: 3,
    name: "Forte Sedán",
    price: "$331,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/vehicles/thumnails_2020/menu_showrooms/Perfil-Home-ForteSd.png",
    year: 2021,
  },
  {
    id: 4,
    name: "Forte HatchBack",
    price: "$349,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/vehicles/thumnails_2020/menu_showrooms/Perfil-Home-ForteHb.png",
    year: 2021,
  },
  {
    id: 5,
    name: "Optima",
    price: "$576,500",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/vehicles/thumnails_2020/menu_showrooms/Perfil-Home-Optima.png",
    year: 2020,
  },
  {
    id: 6,
    name: "Stinger",
    price: "$659,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/vehicles/thumnails_2020/menu_showrooms/Perfil-Home-Stinger.png",
    year: 2021,
  },
  {
    id: 7,
    name: "Soul",
    price: "$306,900",
    url:
      "https://www.kia.com/content/dam/kwcms_dealer/mx_es/gt/main_2020/thumbnails_cars/HOME-CARROS-SOUL.png",
    year: 2021,
  },
  {
    id: 8,
    name: "Seltos",
    price: "355,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/vehicles/thumnails_2020/menu_showrooms/Perfil-Home-Seltos.png",
    year: 2021,
  },
  {
    id: 9,
    name: "Niro",
    price: "$588,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/vehicles/thumnails_2020/menu_showrooms/Perfil-Home-Niro.png",
    year: 2021,
  },
  {
    id: 10,
    name: "Sportage",
    price: "$415,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/vehicles/thumnails_2020/menu_showrooms/Perfil-Home-Sportage.png",
    year: 2021,
  },
  {
    id: 11,
    name: "Sorento",
    price: "$584,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2021/sorento/kia_sorento_icono_showroom.png",
    year: 2021,
  },
  {
    id: 12,
    name: "Sedona",
    price: "$592,900",
    url:
      "https://www.kia.com/content/dam/kwcms/mx/es/images/vehicles/thumnails_2020/menu_showrooms/Perfil-Home-Sedona.png",
    year: 2020,
  },
];

const PricePage: React.FC = () => {
  return (
    <VehicleList vehicles={pricesCars}/>
  );
};

export default PricePage;
