import {
  IonBadge,
  IonItem,
  IonLabel,
  IonLoading,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { getDataKMM } from "../helpers/getDataKMM";

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
  const [dataSearch, setDataSerch] = useState<InfoDealer[]>([]);

  const [total, setTotal] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setShowLoading(true);

    getDataKMM(name).then((data) => {
      setData(data);
      setDataSerch(data)
      let total =
        data.length > 0
          ? data.length > 1
            ? data
                .map((d: InfoDealer) => d.total)
                .reduce((a: number, b: number) => a + b)
            : data[0].total
          : 0;
      setTotal(total);
      setShowLoading(false);
    });
  }, [name]);

  const onChangeSearch = (value: string) =>{
    if(data.length > 0){

      let dataFilter = data.filter( d => d.dealer.toLowerCase().includes(value.toLowerCase()))
      setDataSerch(dataFilter);

     let total =
     dataFilter.length > 0
        ? dataFilter.length > 1
          ? dataFilter
              .map((d: InfoDealer) => d.total)
              .reduce((a: number, b: number) => a + b)
          : dataFilter[0].total
        : 0;

      setTotal(total);

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
      <IonSearchbar placeholder="Search ..." animated onIonChange={(e) => onChangeSearch(e.detail.value || '')}></IonSearchbar>
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
