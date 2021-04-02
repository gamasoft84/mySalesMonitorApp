import React, { useState } from "react";

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
  useIonViewWillEnter,
  IonSearchbar,
} from "@ionic/react";

import { IonBadge, IonItem, IonLabel } from "@ionic/react";
import { getCountTotalLoginsByDevices } from "../helpers/getDataKMM";
import {
  phonePortraitOutline,tabletPortraitOutline,laptopOutline
} from "ionicons/icons";
import { getTotalDealer } from "../helpers/utils";

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
  const [dataSearch, setDataSerch] = useState<InfoDealer[]>([]);

  const [total, setTotal] = useState(0);

  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    getCountTotalLoginsByDevices().then((data) => {
      data.sort(((a:InfoDealer, b:InfoDealer) => b.total - a.total));
      setData(data);
      setTotal(getTotalDealer(data));
    });
    setShowLoading(false);
  });

  const onChangeSearch = (value: string) =>{
    if(data.length > 0){
      let dataFilter = data.filter( d => d.dealer.toLowerCase().includes(value.toLowerCase()))
      setDataSerch(dataFilter);
      setTotal(getTotalDealer(dataFilter));
    }
  }

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

    <IonToolbar>
      <IonSearchbar  inputmode="text" placeholder="Search ..." animated onIonChange={(e) => onChangeSearch(e.detail.value || '')}></IonSearchbar>
    </IonToolbar>

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
