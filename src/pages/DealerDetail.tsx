import React, { useEffect, useState } from "react";
import dealersData from "../data/dealers";

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
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { InfoDealer } from "../data/IDealer";
import { useParams } from "react-router";

interface Params {
  id: string;
}

const DealerDetail: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [dealer, setDealer] = useState<InfoDealer>();

  const params = useParams<Params>();

  useEffect(() => {
    console.log(params);
    
    console.log(params.id);
    var dealer = dealersData.filter((d) => d.dlrCd === params.id).pop();
    setDealer(dealer);
    setShowLoading(false);
  },[params.id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{dealer?.dlrName}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Detail Dealer</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonCard>

        {dealer?.dlrCd && dealer?.dlrCd == 'SWR001' ? 
        <img src='https://www.techgames.com.mx/wp-content/uploads/2020/07/KIA-Polanco-Showroom.jpg'/>
        : ''}

        <IonCardHeader>
            B20VA<IonText color="success">{dealer?.dlrCd}</IonText>
          <IonCardSubtitle>
            {dealer?.adrCityNm}, {dealer?.adrStateNm}.
          </IonCardSubtitle>
          <IonCardTitle>
          
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
        </IonCardContent>
      </IonCard>

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
