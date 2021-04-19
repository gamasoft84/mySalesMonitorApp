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
} from "@ionic/react";

import { IonItem, IonLabel } from "@ionic/react";
import { InfoDealer } from "../data/IDealer";

const DealersPage: React.FC = () => {
  const [data, setData] = useState<InfoDealer[]>([]);
  const [searchText, setSearchText] = useState('');
  const [dataSearch, setDataSearch] = useState<InfoDealer[]>([]);

  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    var dealersDataSort = dealersData.sort((a,b) => a.dlrName.localeCompare(b.dlrName) )
    setData(dealersDataSort);       
    setShowLoading(false);
  });

  const onChangeSearch = (value: string) =>{
    setSearchText(value);
    if(data.length > 0){
      let dataFilter = data.filter( d => 
        d.dlrName.toLowerCase().includes(value.toLowerCase())  ||  d.adrStateNm.toLowerCase().includes(value.toLowerCase()))
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
          <IonTitle>Info Dealers</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonToolbar>
      <IonSearchbar  inputmode="text" placeholder="Search ..." animated onIonChange={(e) => onChangeSearch(e.detail.value || '')}></IonSearchbar>
    </IonToolbar>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Info Dealers</IonTitle>
            </IonToolbar>
          </IonHeader>

        {dataSearch.map((d, index) => (
          <IonItem key={index} routerLink={`/page/dealer/${d.dlrCd}`}>
            <IonLabel className="ion-text-wrap">{d.dlrName}</IonLabel>  
            <IonLabel className="ion-text-wrap">{d.adrStateNm}</IonLabel>            
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
