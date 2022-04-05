/// <reference types="react-scripts" />
type Status = 'work' | 'family' | 'friends' | 'others';

type Contact = {
  id: number
  name: string,
  phone: string,
  info: string,
  group: string,
};

interface ContactNew extends Contact {
  [key: string]: string | number;
}
