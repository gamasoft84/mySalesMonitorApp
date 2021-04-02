import React, { useState, useEffect } from "react";

import {
  IonLoading,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";

import { IonBadge, IonItem, IonLabel } from "@ionic/react";
import { getCountTotalLoginsByDevices } from "../helpers/getDataKMM";
import {
  phonePortraitOutline,tabletPortraitOutline,laptopOutline
} from "ionicons/icons";

const colors = [
  "secondary",
  "tertiary",
  "warning",
  "danger",
  "light",
  "medium",
  "dark",
];

interface InfoDealer {
  dealer: string;
  total: number;
  typeDevice: string;
}


const LoiginByDevice: React.FC = () => {
  const [data, setData] = useState<InfoDealer[]>([]);
  const [total, setTotal] = useState(0);


  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    getCountTotalLoginsByDevices().then((data) => {
      data.sort(((a:InfoDealer, b:InfoDealer) => b.total - a.total));

      setData(data);
      let total =
        data.length > 0
          ? data.length > 1
            ? data
                .map((d: InfoDealer) => d.total)
                .reduce((a: number, b: number) => a + b)
            : data[0].total
          : 0;
      setTotal(total);
    });
    setShowLoading(false);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login users</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      {!showLoading ? (
        <IonItem>
          <IonLabel>TOTAL</IonLabel>
          <IonBadge color="success" slot="end">
            {total}
          </IonBadge>
        </IonItem>
      ) : (
        ""
      )}

        {data.map((d, index) => (
          <IonItem key={index}>
            <IonLabel>{d.dealer}</IonLabel>
            <IonBadge color={colors[index % 6]} slot="end">
              {d.total}
            </IonBadge>
            <IonIcon
                    slot="start"
                    ios={d.typeDevice === 'Android' || d.typeDevice === 'Mobile' || d.typeDevice === 'iPhone'
                      ? phonePortraitOutline : d.typeDevice === 'PC' ? laptopOutline: tabletPortraitOutline}
                    md={d.typeDevice === 'Android' || d.typeDevice === 'Mobile' || d.typeDevice === 'iPhone'
                      ? phonePortraitOutline : d.typeDevice === 'PC' ? laptopOutline: tabletPortraitOutline}  
                    color={d.typeDevice === 'iPad-12' ? 'success' : colors[5]}
                    
                  />
          </IonItem>
        ))}
        
      </IonContent>

      <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Loading..."}
        />

    </IonPage>
  );
};

export default LoiginByDevice;
