import React, { useState, useEffect } from "react";

import {
  IonLoading,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { IonBadge, IonItem, IonLabel } from "@ionic/react";
import { getCountTotalErrorsByType } from "../helpers/getDataKMM";

interface InfoErrors {
  message: string;
  total: number;
  totalMsgAllowed: number;
  critic: Boolean;
}


const ErrorsByTypePage: React.FC = () => {
  const [dataCritic, setDataCritic] = useState<InfoErrors[]>([]);
  const [dataNoCritic, setDataNoCritic] = useState<InfoErrors[]>([]);

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    getCountTotalErrorsByType().then((data) => {
      setDataCritic(data.filter((d:InfoErrors) => d.critic));
      setDataNoCritic(data.filter((d:InfoErrors) => !d.critic));
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
          <IonTitle>Monitor Errors</IonTitle>
        </IonToolbar>
      </IonHeader>
      

      <IonContent >

        <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Monitor Errors.</IonTitle>
            </IonToolbar>
          </IonHeader>

        {dataCritic.map((d, index) => (
          <IonItem key={index} color={d.totalMsgAllowed<d.total && d.critic ? 'warning': ''}>
            <IonLabel className="ion-text-wrap">{d.message}</IonLabel>
            <IonBadge color={d.critic ? 'danger': 'success'} slot="end">
              {d.total}
            </IonBadge>
          </IonItem>
        ))}
        {dataNoCritic.map((d, index) => (
          <IonItem key={index} color={d.totalMsgAllowed<d.total && d.critic ? 'warning': ''}>
            <IonLabel className="ion-text-wrap">{d.message}</IonLabel>
            <IonBadge color={d.critic ? 'danger': 'success'} slot="end">
              {d.total}
            </IonBadge>
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

export default ErrorsByTypePage;
