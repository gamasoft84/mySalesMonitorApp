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
} from "@ionic/react";

import { CallNumber } from "@ionic-native/call-number";
import { InfoDealer } from "../data/IDealer";
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

  const params = useParams<Params>();

  useEffect(() => {
    console.log(params);

    console.log(params.id);
    var dealer = dealersData.filter((d) => d.dlrCd === params.id).pop();
    setDealer(dealer);
    setShowLoading(false);
  }, [params.id]);

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
          {dealer?.dlrCd && dealer?.dlrCd == "DCL01" ? (
            <img src="https://lh3.googleusercontent.com/p/AF1QipPiKjgRDtJQG6IZhbk8rHRPwtsP7FYeRA2rhMwH=s1600-w400" />
          ) : (
            ""
          )}

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
              </IonGrid>
            </IonCardSubtitle>
            <IonCardTitle className="ion-ion-text-center">
          
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {dealer?.dlrCd && dealer?.dlrCd == "DCL01" ? (
              <Map
                googleMapURL={
                  "https://maps.googleapis.com/maps/api/js?v=e.exp&key=AIzaSyCT9ElJnsAcgUwqc2AbKTwpv53DSZO6ckM"
                }
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                loadingElement={<p>Cargando</p>}
              />
            ) : (
              ""
            )}
 
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
