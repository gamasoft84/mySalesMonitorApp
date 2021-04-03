import {
  IonBadge,
  IonItem,
  IonLabel,
  IonLoading,
  IonSearchbar,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { getDataKMM } from "../helpers/getDataKMM";
import { getTotalDealer } from "../helpers/utils";

interface InfoDealer {
  group: string;
  dealer: string;
  total: number;
}

interface ContainerProps {
  name: string;
}
const colors = [
  "secondary",
  "tertiary",
  "warning",
  "danger",
  "light",
  "medium",
  "dark",
];

export const DetailTypeKMM: React.FC<ContainerProps> = ({ name }) => {
  const [data, setData] = useState<InfoDealer[]>([]);
  const [searchText, setSearchText] = useState('');
  const [dataSearch, setDataSearch] = useState<InfoDealer[]>([]);


  const [total, setTotal] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    setSearchText('');
    getDataKMM(name).then((data) => {
        setData(data);
        setDataSearch(data)
        setTotal(getTotalDealer(data));
        setShowLoading(false);
    });
  });

  const onChangeSearch = (value: string) =>{
    setSearchText(value);
    if(data.length > 0){
      let dataFilter = data.filter( d => d.dealer.toLowerCase().includes(value.toLowerCase()))
      setDataSearch(dataFilter);
      setTotal(getTotalDealer(dataFilter));
    }
  }

  return (
    <div>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />

    <IonToolbar>
      <IonSearchbar value={searchText} inputmode="text" placeholder="Search ..." animated onIonChange={(e) => onChangeSearch(e.detail.value || '')}></IonSearchbar>
    </IonToolbar>


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
        </IonItem>
      ))}
    </div>
  );
};
