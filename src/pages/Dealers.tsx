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
  IonSearchbar
} from "@ionic/react";

import { IonItem, IonLabel } from "@ionic/react";
import { InfoDealer } from "../models/IDealer";

const DealersPage: React.FC = () => {
  const [dataSearch, setDataSearch] = useState<InfoDealer[]>([]);
  const [totalDealers, setTotalDealers] = useState(0);
  const [searchText, setSearchText] = useState('');

  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {      
    let dealers = searchText ? addFilter(searchText) : dealersData;
    setDataSearch(dealers);
    setTotalDealers(dealers.length);
    setShowLoading(false); 
  });

  const onChangeSearch = (value: string) =>{
      let dataFilter = addFilter(value);
      setTotalDealers(dataFilter.length);
      setDataSearch(dataFilter);
      setSearchText(value);
  }

  const addFilter = (value: string) =>{    
    return  dealersData.filter( d => 
      d.dlrNm.toLowerCase().includes(value.toLowerCase())  ||  
      d.adrStateNm.toLowerCase().includes(value.toLowerCase()) ||
      d.grpNm.toLowerCase().includes(value.toLowerCase()) ||
      d.dmsNm.toLowerCase().includes(value.toLowerCase()) ||
      d.dlrCd.toLowerCase().includes(value.toLowerCase()) ||
      d.crmNm?.toLowerCase().includes(value.toLowerCase())
      )
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
      <IonSearchbar  value={searchText} placeholder="Search ..." animated onIonChange={(e) => onChangeSearch(e.detail.value || '')}></IonSearchbar>
    </IonToolbar>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Dealers ({totalDealers})</IonTitle>
            </IonToolbar>
          </IonHeader>
    
          <IonItem>
            <IonLabel className="ion-text-wrap" color="primary">DEALER</IonLabel>  
            <IonLabel className="ion-text-wrap" color="primary">STATE</IonLabel>
            <IonLabel className="ion-text-wrap ion-hide-xs-down" color="primary">GROUP</IonLabel> 
            <IonLabel className="ion-text-wrap ion-hide-sm-down" color="primary">DMS</IonLabel>            
            <IonLabel className="ion-text-wrap ion-hide-sm-down" color="primary">CRM</IonLabel>            
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
