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
  practices?: Date[];
  qualys?: Date[];
  duration?: Number;
  races: Date[];
}
