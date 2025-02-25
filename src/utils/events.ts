import fs from 'fs';
import path from 'path';

export function getSortedEvents() {
  const dataDirectory = path.resolve('./src/data');

  const files = fs.readdirSync(dataDirectory);

  const jsonFiles = files.filter((file) => file.endsWith('.json'));

  let events: any[] = [];

  jsonFiles.forEach((file) => {
    const filePath = path.join(dataDirectory, file);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    try {
      const parsedData = JSON.parse(fileData);
      events = [...events, ...parsedData];
    } catch (error) {
      console.error(`Error parsing JSON from file ${file}:`, error);
    }
  });

  events.sort((a, b) => {
    return new Date(a.dates.mainEvent) - new Date(b.dates.mainEvent);
  });

  return events;
}
