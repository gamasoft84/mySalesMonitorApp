import { getCovers } from "../../helpers/getDataCMS";
import { IonLoading, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react";
import CoverList from "./CoverList";

interface InfoCovers {
  id: string;
  url: string;
  name: string;
  description: string;
  year: string;
  model: string;
  modelCd: string;
  title: string;
}

const GalleryPage: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [coversAll, setCoversAll] = useState<InfoCovers[]>([]);
  const [covers, setCovers] = useState<InfoCovers[]>([]);


  useIonViewWillEnter(() => {
    getCovers().then((data) => {
      setCoversAll(data);
      setCovers(data);
      setShowLoading(false);
    });
  });

  const filterBySuv = () =>{
    setCovers(coversAll.filter(d => 
      d.model === 'kia-sedona' || d.model === 'niro' || d.model === 'seltos' ||
      d.model === 'sorento' || d.model === 'soul' || d.model === 'sportage'
      ));
  }

  const filterByCar = () =>{
    setCovers(coversAll.filter(d => 
      d.model === 'Stinger' || d.model === 'forte-hatchback' || d.model === 'forte-sedan' ||
      d.model === 'rio-hatchback' || d.model === 'rio-sedan' || d.model === 'kia-optima'
      ));  }

  const withoutFilter = () =>{
    setCovers(coversAll);
  }

  return (
    <>
      <IonLoading
        cssClass="customLoading"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
      <CoverList covers={covers} filterBySuv={filterBySuv} filterByCar={filterByCar} withoutFilter={withoutFilter}/>
    </>
  );
};

export default GalleryPage;
