import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  useIonViewWillEnter,
} from "@ionic/react";

import React, { useState } from "react";
import { getTotalByDayKMM } from "../helpers/getDataKMM";

import './Summary.scss';


const Summary: React.FunctionComponent = () => {
  const [totalLeads, setTotalLeads] = useState();
  const [totalQuotations, setTotalQuotations] = useState();
  const [totalTestDrive, setTotalTestDrive] = useState();
  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    getTotalByDayKMM().then((data) => {
      setTotalLeads(data.totalLeads);
      setTotalQuotations(data.totalQuotations);
      setTotalTestDrive(data.totalTestsDrive);
      setShowLoading(false);
    });
  }, []);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Summary</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonLoading
          cssClass='customLoading'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Loading..."}
        />

      <IonContent>
        <IonCard routerLink={"/page/Leads"} className="card-center">
          <img src="Lead.png" height="100" width="90" className="ion-margin-top"/>
          <IonCardHeader>
            <IonCardSubtitle>Leads</IonCardSubtitle>
            <IonCardTitle>{totalLeads}</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard routerLink={"/page/Quotations"} className="card-center">
          <img src="Quotation.png" height="100" width="100" className="ion-margin-top"/>
          <IonCardHeader>
            <IonCardSubtitle>Quotations</IonCardSubtitle>
            <IonCardTitle>{totalQuotations}</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard routerLink={"/page/DriveTests"} className="card-center">
          <img src="TestDrive.png" height="100" width="100" className="ion-margin-top"/>
          <IonCardHeader>
            <IonCardSubtitle>Drive Tests</IonCardSubtitle>
            <IonCardTitle>{totalTestDrive}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Summary;
