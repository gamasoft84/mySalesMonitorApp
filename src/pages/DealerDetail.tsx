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
import { InfoDealer } from "../data/IDealer";
import { useParams } from "react-router";

interface Params{
  id: string
}

const DealerDetail: React.FC = () => {

  const [showLoading, setShowLoading] = useState(true);
  const [dealer, setDealer] = useState<InfoDealer>();


  const params = useParams<Params>();

  useIonViewWillEnter(() => {
    console.log(params.id);
    var dealer = dealersData.filter(d => d.dlrCd === params.id).pop();
    setDealer(dealer);  
    setShowLoading(false);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Detail Dealers</IonTitle>
        </IonToolbar>
      </IonHeader>
      

      <IonContent fullscreen>
        <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Detail Dealers</IonTitle>
            </IonToolbar>
          </IonHeader>

        <h1>{dealer?.dlrName}</h1>
        <h3>{dealer?.dlrCd}</h3>
        <h3>{dealer?.adrStateNm}</h3>
        <h3>{dealer?.adrCityNm}</h3>
        <h3>{dealer?.latitude}</h3>
        <h3>{dealer?.longitude}</h3 >
      </IonContent>

      <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Loading..."}
        />

    </IonPage>
  );
};

export default DealerDetail;
