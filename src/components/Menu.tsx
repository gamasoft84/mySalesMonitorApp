import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAvatar,
} from "@ionic/react";

import {
  personCircleOutline,
  personCircleSharp,
  carSportOutline,
  carSharp,
  clipboardOutline,
  clipboardSharp,
  statsChartOutline,
  statsChartSharp,
  analyticsOutline,
  analyticsSharp,
  cashOutline,
  cashSharp,
  cameraOutline,
  cameraSharp,
} from "ionicons/icons";

import { useLocation } from "react-router-dom";

import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Summary",
    url: "/page/Summary",
    iosIcon: statsChartOutline,
    mdIcon: statsChartSharp,
  },
  {
    title: "Leads",
    url: "/page/Leads",
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp,
  },
  {
    title: "Quotations",
    url: "/page/Quotations",
    iosIcon: clipboardOutline,
    mdIcon: clipboardSharp,
  },
  {
    title: "Drive Tests",
    url: "/page/DriveTests",
    iosIcon: carSportOutline,
    mdIcon: carSharp,
  },
  {
    title: "Monitor Errors",
    url: "/page/MonitorErrors",
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp,
  },
  {
    title: "Login Users",
    url: "/page/UserAccess",
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp,
  },
  {
    title: "Prices",
    url: "/page/Prices",
    iosIcon: cashOutline,
    mdIcon: cashSharp,
  },
  {
    title: "Take Picture",
    url: "/page/TakePicture",
    iosIcon: cameraOutline,
    mdIcon: cameraSharp,
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent> 
        <IonList id="inbox-list" className="ion-margin-top">
          <img src="kia_logo.png" />

          <IonListHeader slot="end" color="primary">Monitor MySales V1.0
          </IonListHeader>
          <IonNote>by ricardo.gama@kia-mexico.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                    color="primary"
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
