export interface IAlbum {
  "im:name": {
    label: string;
  };
  "im:image": [{
    label: string;
    attributes: {
      height: string;
    };
  }];
  title: {
    label: string;
  };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: string;
    "attributes": {
      label: string;
          }
  }
  id: {
    label: string;
    attributes: {
      "im:id": string
          }
        }
}
