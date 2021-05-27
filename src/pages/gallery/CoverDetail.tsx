import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonLoading,
  IonSlide,
  IonSlides,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import { getImagesByModelByYear } from "../../helpers/getDataCMS";

interface Params {
  model: string;
  year: string;
}

interface InfoImages {
  id: string;
  category: string;
  description: string;
  url: string;
}

const CoverDetail: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [images, setImages] = useState<InfoImages[]>([]);

  useIonViewWillEnter(() => {
    getImagesByModelByYear(params.model, params.year).then((data) => {
      setImages(data);
      setShowLoading(false);
    });
  });

  const params = useParams<Params>();
  const [singleSwiper, setSingleSwiper] = useState<any>({});
  const [thumbsSwiper, setThumbsSwiper] = useState<any>({});

  const singleSlider = {
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: singleSwiper,
    },
  };

  const thumbSlider = {
    spaceBetween: 2,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    //autoplay:true,
    speed: 25000,
  };

  const initSingle = async function (this: any) {
    setSingleSwiper(await this.getSwiper());
  };

  const initThumbs = async function (this: any) {
    setThumbsSwiper(await this.getSwiper());
  };

  const swipe = async function (this: any) {
    thumbsSwiper.slideTo(await this.getActiveIndex());
  };

  const tap = function (index: number) {
    singleSwiper.slideTo(index);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            {params.model} {params.year}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{params.year}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSlides
          onIonSlidesDidLoad={initSingle}
          scrollbar={true}
          options={singleSlider}
          mode="ios"
          className="single-slider"
          onIonSlideDidChange={swipe}
        >
          {images.map((image: InfoImages, index: number) => {
            return (
              <IonSlide key={index} onClick={() => tap(index)}>
                <img src={image.url}></img>
              </IonSlide>
            );
          })}
        </IonSlides>

        <IonSlides
          options={thumbSlider}
          mode="ios"
          className="thumbs-slider"
          onIonSlidesDidLoad={initThumbs}
        >
          {images.map((image: InfoImages, index: number) => {
            return (
              <IonSlide key={index} onClick={() => tap(index)}>
                <img src={image.url}></img>
              </IonSlide>
            );
          })}
        </IonSlides>
      </IonContent>

      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
    </IonPage>
  );
};

export default CoverDetail;
