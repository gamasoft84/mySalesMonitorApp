import React, { useState } from "react";
import dealersData from "../data/dealers"

import {
  IonLoading,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";

import { IonItem, IonLabel } from "@ionic/react";
import { InfoDealer } from "../data/IDealer";

const DealersPage: React.FC = () => {
  const [data, setData] = useState<InfoDealer[]>([]);

  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    var dealersDataSort = dealersData.sort((a,b) => a.dlrName.localeCompare(b.dlrName) )
    setData(dealersDataSort); 
    console.log(dealersDataSort);
      
    setShowLoading(false);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Info Dealers</IonTitle>
        </IonToolbar>
      </IonHeader>
      

      <IonContent fullscreen>
        <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Info Dealers</IonTitle>
            </IonToolbar>
          </IonHeader>

        {data.map((d, index) => (
          <IonItem key={index}>
            <IonLabel className="ion-text-wrap">{d.dlrName}</IonLabel>  
            <IonLabel className="ion-text-wrap">{d.dlrCd}</IonLabel>  
            <IonLabel className="ion-text-wrap">{d.adrStateNm}</IonLabel>            
            <IonLabel className="ion-text-wrap">{d.adrCityNm}</IonLabel>            
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

export default DealersPage;
