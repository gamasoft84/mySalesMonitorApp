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
  IonSearchbar,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";

import { IonItem, IonLabel } from "@ionic/react";
import { InfoDealer } from "../data/IDealer";

const DealersPage: React.FC = () => {
  const [data, setData] = useState<InfoDealer[]>([]);
  const [dataSearch, setDataSearch] = useState<InfoDealer[]>([]);
  const [totalDealers, setTotalDealers] = useState(0);

  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    //var dealersDataSort = dealersData.sort((a,b) => a.dlrNm.localeCompare(b.dlrNm) )
    setData(dealersData);       
    setDataSearch(dealersData);
    setTotalDealers(dealersData.length);       
    setShowLoading(false);
  });

  const onChangeSearch = (value: string) =>{
    if(data.length > 0){
      let dataFilter = data.filter( d => 
        d.dlrNm.toLowerCase().includes(value.toLowerCase())  ||  
        d.adrStateNm.toLowerCase().includes(value.toLowerCase()) ||
        d.grpNm.toLowerCase().includes(value.toLowerCase()) ||
        d.dmsNm.toLowerCase().includes(value.toLowerCase()) ||
        d.crmNm?.toLowerCase().includes(value.toLowerCase())
        )
      setTotalDealers(dataFilter.length);
      setDataSearch(dataFilter);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dealers ({totalDealers})</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonToolbar>
      <IonSearchbar  inputmode="text" placeholder="Search ..." animated onIonChange={(e) => onChangeSearch(e.detail.value || '')}></IonSearchbar>
    </IonToolbar>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Dealers ({totalDealers})</IonTitle>
            </IonToolbar>
          </IonHeader>
    
          <IonItem>
            <IonLabel className="ion-text-wrap" color="secondary">DEALER</IonLabel>  
            <IonLabel className="ion-text-wrap" color="secondary">STATE</IonLabel>
            <IonLabel className="ion-text-wrap ion-hide-xs-down" color="secondary">GROUP</IonLabel> 
            <IonLabel className="ion-text-wrap ion-hide-sm-down" color="secondary">DMS</IonLabel>            
            <IonLabel className="ion-text-wrap ion-hide-sm-down" color="secondary">CRM</IonLabel>            
          </IonItem>
        {dataSearch.map((d, index) => (
          <IonItem key={index} routerLink={`/page/dealer/${d.dlrCd}`}>
            <IonLabel className="ion-text-wrap">{d.dlrNm}</IonLabel>  
            <IonLabel className="ion-text-wrap">{d.adrStateNm}</IonLabel>
            <IonLabel className="ion-text-wrap ion-hide-xs-down">{d.grpNm}</IonLabel> 
            <IonLabel className="ion-text-wrap ion-hide-sm-down">{d.dmsNm}</IonLabel>            
            <IonLabel className="ion-text-wrap ion-hide-sm-down">{d.crmNm}</IonLabel>            
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
