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
import { getCountByTypeKMM } from "../helpers/getDataKMM";

import './Summary.scss';


const Summary: React.FunctionComponent = () => {
  const [totalLeads, setTotalLeads] = useState(0);
  const [totalQuotations, setTotalQuotations] = useState(0);
  const [totalTestDrive, setTotalTestDrive] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    setShowLoading(true);
    getCountByTypeKMM("Leads").then((total) => {
      setTotalLeads(total);
    });
    getCountByTypeKMM("Quotations").then((total) => {
      setTotalQuotations(total);
    });
    getCountByTypeKMM("DriveTests").then((total) => {
      setTotalTestDrive(total);
    });
    setShowLoading(false);
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

      <IonContent>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Loading..."}
        />


        <IonCard routerLink={"/page/Leads"} className="card-center" color="">
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
