import {
  IonList,
  IonItem,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonThumbnail,
  IonLoading,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonAvatar,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { getCountByTypeKMM } from "../helpers/getDataKMM";
import { Plugins } from '@capacitor/core';


const Summary: React.FunctionComponent = () => {
  const [totalLeads, setTotalLeads] = useState(0);
  const [totalQuotations, setTotalQuotations] = useState(0);
  const [totalTestDrive, setTotalTestDrive] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

const { LocalNotifications } = Plugins;
//const { Geolocation } = Plugins;

// get the users current position
  useEffect(() => {


    LocalNotifications.schedule({
      notifications: [
        {
          title: "Monitor MySales",
          body: "[BNP Interface] Error message: Read timed out \n[4]",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 2) },
          actionTypeId: "",
          sound: "sirena.wav",
          iconColor:"success",
          smallIcon:"http://placekitten.com/g/300/200",  
          extra: null
        },
       
        {
          title: "Monitor MySales",
          body: "[DP Interface] Error message: Invalid credentials \n[23]",
          id: 3,
          schedule: { at: new Date(Date.now() + 1000 * 7) },
          actionTypeId: "BBBB",
          sound: "sirena.wav",
          iconColor:"black",
          smallIcon:"http://placekitten.com/g/300/200",  
          extra: null
        },
        {
          title: "Monitor MySales",
          body: "[DP Interface] Error message: User not found \n[600]",
          id: 2,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          actionTypeId: "AAAA",
          sound: "sirena.wav",
          iconColor:"danger",
          smallIcon:"http://placekitten.com/g/300/200",  
          extra: null
        },

      ]
    });


   
   /* const coord = async () => {
      const position = await Geolocation.getCurrentPosition();
      // grab latitude & longitude
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude)
      console.log(longitude)
    }
    coord();*/

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
        
        
        <IonGrid fixed>
            <IonRow>
                <IonCol size="12" size-sm="6" size-xl="4">                        
                    

                    <IonCard routerLink={'/page/Leads'}>
                      <img src="Leads.png" height="100px" width="100px"/>
                      <IonCardHeader>
                        <IonCardSubtitle>Leads</IonCardSubtitle>
                        <IonCardTitle>{totalLeads}</IonCardTitle>
                      </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink={'/page/Quotations'}>
                      <img src="Quotation.png" height="100px" width="100px"/>
                      <IonCardHeader>
                        <IonCardSubtitle>Quotations</IonCardSubtitle>
                        <IonCardTitle>{totalQuotations}</IonCardTitle>
                      </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink={'/page/DriveTests'}>
                      <img src="TestDrive.png" height="100px" width="100px"/>
                      <IonCardHeader>
                        <IonCardSubtitle>Drive Tests</IonCardSubtitle>
                        <IonCardTitle>{totalTestDrive}</IonCardTitle>
                      </IonCardHeader>
                    </IonCard>

                </IonCol>
            </IonRow>
          </IonGrid>


      </IonContent>
    </IonPage>
    
  );
};

export default Summary;
