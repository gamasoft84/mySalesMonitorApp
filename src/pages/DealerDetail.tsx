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
  }, [params.id]);

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
            B20VA<IonText color="success">{dealer?.dlrCd}</IonText>
            <IonCardSubtitle>
              <p>GROUP: {dealer?.grpNm}</p>
              <p>DMS: {dealer?.dmsNm}</p>
              <p>CRM: {dealer?.crmNm ? dealer?.crmNm : "-"}</p>
              <p>
                ADDRESS: {dealer?.address}, {dealer?.adrCityNm},{" "}
                {dealer?.postCd} {dealer?.adrStateNm}.
              </p>
              <p>TELEPHONE: {dealer?.telephone}</p>
              <p>RFC: {dealer?.rfc}</p>
            </IonCardSubtitle>
            <IonCardTitle></IonCardTitle>
          </IonCardHeader>

          <IonCardContent></IonCardContent>
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
