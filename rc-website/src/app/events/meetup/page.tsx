import { redirect } from 'next/navigation';

export default function MeetupRedirect() {
  redirect('/events');
}