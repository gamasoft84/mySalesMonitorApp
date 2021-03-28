import {
  IonBadge,
  IonItem,
  IonLabel,
  IonLoading,
  IonTitle,
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
  "success",
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
  const [total, setTotal] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setShowLoading(true);

    getDataKMM(name).then((data) => {
      setData(data);
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

  return (
    <div>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
      {!showLoading ? (
        <IonItem>
          <IonLabel>TOTAL</IonLabel>
          <IonBadge color={colors[0]} slot="end">
            {total}
          </IonBadge>
        </IonItem>
      ) : (
        ""
      )}

      {data.map((d, index) => (
        <IonItem key={index}>
          <IonLabel>{d.dealer}</IonLabel>
          <IonBadge color={colors[index % 7]} slot="end">
            {d.total}
          </IonBadge>
        </IonItem>
      ))}
    </div>
  );
};
