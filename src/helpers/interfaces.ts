export interface Launch {
  id: number;
  name: string;
  date_utc: string;
  date_local: string;
  date_unix: number;
  details: string;
  flight_number: number;
  launchpad: {
    name: string;
  };
  links: {
    article: string;
    patch: {
      small: string;
      large: string;
    };
    youtube_id: string;
  };
  payloads: [
    {
      name: string;
      customers: string[];
      id: string;
    },
  ];
}
