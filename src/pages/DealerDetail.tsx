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
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonFabButton,
  IonIcon,
  IonFab,
  useIonViewDidEnter
} from "@ionic/react";

import { getDealerDetail } from "../helpers/getDataKMM";
import { CallNumber } from "@ionic-native/call-number";
import { InfoDealer } from "../models/IDealer";
import { useParams } from "react-router";
import Map from "../components/Map";


import {
  phonePortraitSharp
} from "ionicons/icons";


interface Params {
  id: string;
}


const DealerDetail: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [dealer, setDealer] = useState<InfoDealer>();
  let params = useParams<Params>();


  useIonViewDidEnter(() => {

    console.log('ID:' + params.id);
    getDealerDetail(params.id).then((data) => {
      data.dlrCd = params.id;
      setDealer(data);
      setShowLoading(false);
  });   
  }) 



  const call = ()=>{
    CallNumber.callNumber(dealer?.telephone || "", true);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{dealer?.dlrNm}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{dealer?.dlrNm}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonText color="primary">DEALER CODE</IonText>
                  </IonCol>
                  <IonCol>
                    B20VA<IonText color="success">{dealer?.dlrCd}</IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                  <IonText color="primary">ADDRESS</IonText>
                  </IonCol>
                  <IonCol>
                    {dealer?.address}, {dealer?.adrCityNm}, {dealer?.postCd}{" "}
                    {dealer?.adrStateNm}.
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText color="primary">TELEPHONE</IonText>
                  </IonCol>
                  <IonCol>{dealer?.telephone}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText color="primary">RFC</IonText>
                  </IonCol>
                  <IonCol>{dealer?.rfc}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText color="primary">GROUP</IonText>
                  </IonCol>
                  <IonCol>{dealer?.grpNm}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText color="primary">DMS</IonText>
                  </IonCol>
                  <IonCol>{dealer?.dmsNm}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText color="primary">CRM</IonText>
                  </IonCol>
                  <IonCol>{dealer?.crmNm}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText color="primary">Integration with Sirena</IonText>
                  </IonCol>
                  <IonCol>{dealer?.sirena}
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardSubtitle>
            <IonCardTitle className="ion-ion-text-center">
          
            </IonCardTitle>
          </IonCardHeader>
            
          <IonCardContent>
              {dealer?.latitude && dealer?.longitude?
                    <Map
                    googleMapURL={
                      "https://maps.googleapis.com/maps/api/js?v=e.exp&key=AIzaSyCT9ElJnsAcgUwqc2AbKTwpv53DSZO6ckM"
                    }
                    containerElement={<div style={{ height: "400px" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    loadingElement={<p>Cargando</p>}
                    latitude = { parseFloat(dealer?.latitude != undefined ? String(dealer?.latitude) : '19.428367952216863') }
                    longitude = { parseFloat(dealer?.longitude != undefined ? String(dealer?.longitude) : '-99.16313675985361') }
                  />
              : ""}
          </IonCardContent>
        </IonCard>
      </IonContent>

  


      {dealer?.telephone ?
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={phonePortraitSharp} onClick={() => call()} />
        </IonFabButton>
      </IonFab>
      : ""}

      
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
    </IonPage>
  );
};

export default DealerDetail;
