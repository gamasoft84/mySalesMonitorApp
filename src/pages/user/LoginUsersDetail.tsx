import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonLoading,
  useIonViewWillEnter,
  IonBadge,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import { getDetailUsers } from "../../helpers/getDataKMM";

interface Params {
  dlrCd: string;
}

interface InfoUser {
  dlrCd: string;
  login: string;
  loginDt: string;
  name: string;
  rol: string;
}

const LoginUsersDetail: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [dataUsers, setDataUsers] = useState<InfoUser[]>([]);

  useIonViewWillEnter(() => {
    //let model = modelsData.filter((m) => m.code === params.model)[0];
    //let title = model ? model.name : "DESCONOCIDO";
    //setTitle(title);
    getDetailUsers().then((data) => {    
      if(params.dlrCd != 'all'){
        data = data.filter((d: InfoUser) =>  d.dlrCd === params.dlrCd);
      }  
      setDataUsers(data);
      setShowLoading(false);
    });
  });

  const params = useParams<Params>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            {params.dlrCd}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              {params.dlrCd}
            </IonTitle>
          </IonToolbar>
        </IonHeader>

      {dataUsers.map((d, index) => (
        <IonItem key={index}>
          <IonLabel>{d.dlrCd}</IonLabel>
          <IonLabel>{d.name}</IonLabel>
          <IonLabel>{d.rol}</IonLabel>
          <IonBadge color="success" slot="end">
            {d.loginDt}
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

export default LoginUsersDetail;
