interface RaceEvent {
  id: string;
  commonName: string;
  officialName: string;
  location: string;
  dates: EventDates;
  circuit: string;
  logo: string;
}

interface EventDates {
  practices: string[];
  qualys: string[];
  races: string[];
  duration?: Number;
}
