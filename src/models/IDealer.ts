
export interface InfoDealer {
    dlrCd : string;
    dlrNm : string;
    dmsNm : string;
    grpNm : string;
    crmNm : string | null;
    postCd : string;
    adrStateNm : string;
    adrCityNm : string;
    rfc : string;
    telephone : string;
    address : string;
    latitude? : number,
    longitude? : number
    sirena? : string;
  }