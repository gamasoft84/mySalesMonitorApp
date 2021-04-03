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
  IonToggle,
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
  moonOutline,
  moonSharp
} from "ionicons/icons";
import { useState } from "react";

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
  const [darkMode, setDarkMode] = useState(true);
  const [srcLogo, setSrcLogo] = useState('logo_kia_b.png');


  const toggleDarkModeHandler = () => {
    setDarkMode(!darkMode);
    setSrcLogo(darkMode ? 'logo_kia_w.png': 'logo_kia_b.png');
    document.body.classList.toggle("dark");
  }


  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent> 
        <IonList id="inbox-list" className="ion-margin-top">
          <img src={srcLogo} height="60%" width="60%"/>

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

            <IonItem lines="none"> 
              <IonIcon
                    slot="start"
                    ios={moonOutline}
                    md={moonSharp}
                    className="component-icon component-icon-dark"
                    color="primary"
                  />
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle checked={darkMode} onIonChange={toggleDarkModeHandler} />
            </IonItem>

        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
