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
import {
  phonePortraitOutline,tabletPortraitOutline,laptopOutline
} from "ionicons/icons";
import { getDetailUsersByDealer } from "../helpers/getDataKMM";
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
  deviceType: string;
}

const LoiginByDevice: React.FC = () => {
  const [data, setData] = useState<InfoDealer[]>([]);
  const [dataSearch, setDataSearch] = useState<InfoDealer[]>([]);
  const [total, setTotal] = useState();
  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    getDetailUsersByDealer().then((data) => {
      setData(data);
      setDataSearch(data);
      setTotal(getTotalDealer(data));
      setShowLoading(false);
    });
  });

  const onChangeSearch = (value: string) =>{
    if(data.length > 0){
      let dataFilter;
      if(value.includes('#') && value.length > 1){//Find by type device
        let customSearchText = value.substring(1).toLowerCase();
          if('m'.includes(customSearchText)){ //mobile
            dataFilter = data.filter( d => d.deviceType === 'Android' || d.deviceType == 'Mobile' || d.deviceType === 'iPhone');
          }else if('p'.includes(customSearchText)){//pc
            dataFilter = data.filter( d => d.deviceType === 'PC');
          }else if('i'.includes(customSearchText)){//ipad
            dataFilter = data.filter( d => d.deviceType === 'iPad-12');
          }
          setDataSearch(dataFilter || []);
          setTotal(getTotalDealer(dataFilter));
      }else {//find dealer        
         value = value.replace('#','');
         dataFilter = data.filter( d => d.dealer.toLowerCase().includes(value.toLowerCase()));
         setDataSearch(dataFilter || []);
         setTotal(getTotalDealer(dataFilter));
      }
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
    
    <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Loading..."}
        />

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

        {dataSearch.map((d, index) => (
          <IonItem key={index}>
            <IonLabel>{d.dealer}</IonLabel>
            <IonBadge color={colors[index % 6]} slot="end">
              {d.total}
            </IonBadge>
            <IonIcon
                    slot="start"
                    ios={d.deviceType === 'Android' || d.deviceType === 'Mobile' || d.deviceType === 'iPhone'
                      ? phonePortraitOutline : d.deviceType === 'PC' ? laptopOutline: tabletPortraitOutline}
                    md={d.deviceType === 'Android' || d.deviceType === 'Mobile' || d.deviceType === 'iPhone'
                      ? phonePortraitOutline : d.deviceType === 'PC' ? laptopOutline: tabletPortraitOutline}  
                    color={d.deviceType === 'iPad-12' ? 'success' : colors[5]}             
                  />
          </IonItem>
        ))}
        
      </IonContent>

    </IonPage>
  );
};

export default LoiginByDevice;
