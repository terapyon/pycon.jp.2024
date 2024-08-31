import {ConferenceEvent} from '@/types/Talk';

export const conferenceEvents: ConferenceEvent[] = [
  {
    code: 'opening1',
    speakers: [],
    title: 'Opening (Day1)',
    slot: {
      room_id: 0,
      start: '2024-09-27T10:00:00+09:00',
      end: '2024-09-27T10:30:00+09:00',
    },
    date: 'day1',
    is_event: true,
    hide_end: true,
    start_minute: 0,
    end_minute: 30,
  },
  {
    code: 'keynote1',
    speakers: [],
    title: 'Keynote (Day1)',
    slot: {
      room_id: 0,
      start: '2024-09-27T10:30:00+09:00',
      end: '2024-09-27T11:30:00+09:00',
    },
    date: 'day1',
    is_event: true,
    hide_start: true,
    start_minute: 30,
    end_minute: 90,
  },
  {
    code: 'lunch1',
    speakers: [],
    title: 'Lunch Break',
    slot: {
      room_id: 0,
      start: '2024-09-27T12:00:00+09:00',
      end: '2024-09-27T13:00:00+09:00',
    },
    date: 'day1',
    is_event: true,
    start_minute: 120,
    end_minute: 180,
  },
  {
    code: 'coffee_break1',
    speakers: [],
    title: 'Coffee Break',
    slot: {
      room_id: 0,
      start: '2024-09-27T15:10:00+09:00',
      end: '2024-09-27T15:50:00+09:00',
    },
    date: 'day1',
    is_event: true,
    start_minute: 310,
    end_minute: 350,
  },
  {
    code: 'lt1',
    speakers: [],
    title: 'Lightning Talks',
    slot: {
      room_id: 0,
      start: '2024-09-27T17:30:00+09:00',
      end: '2024-09-27T18:00:00+09:00',
    },
    date: 'day1',
    is_event: true,
    start_minute: 450,
    end_minute: 480,
  },
  {
    code: 'party',
    speakers: [],
    title: 'Party',
    slot: {
      room_id: 0,
      start: '2024-09-27T18:30:00+09:00',
      end: '2024-09-27T19:30:00+09:00',
    },
    date: 'day1',
    is_event: true,
    hide_end: true,
    start_minute: 510,
    end_minute: 570,
  },
  {
    code: 'opening2',
    speakers: [],
    title: 'Opening (Day2)',
    slot: {
      room_id: 0,
      start: '2024-09-28T10:00:00+09:00',
      end: '2024-09-28T10:20:00+09:00',
    },
    date: 'day2',
    is_event: true,
    start_minute: 0,
    end_minute: 20,
  },
  {
    code: 'lunch2',
    speakers: [],
    title: 'Lunch Break',
    slot: {
      room_id: 0,
      start: '2024-09-28T11:40:00+09:00',
      end: '2024-09-28T12:40:00+09:00',
    },
    date: 'day2',
    is_event: true,
    start_minute: 100,
    end_minute: 160,
  },
  {
    code: 'coffee_break2',
    speakers: [],
    title: 'Coffee Break',
    slot: {
      room_id: 0,
      start: '2024-09-28T14:50:00+09:00',
      end: '2024-09-28T15:30:00+09:00',
    },
    date: 'day2',
    is_event: true,
    start_minute: 290,
    end_minute: 330,
  },
  {
    code: 'keynote2',
    speakers: [],
    title: 'Keynote (Day2)',
    slot: {
      room_id: 0,
      start: '2024-09-28T17:30:00+09:00',
      end: '2024-09-28T18:20:00+09:00',
    },
    date: 'day2',
    is_event: true,
    start_minute: 450,
    end_minute: 500,
  },
  {
    code: 'PyCon JP Association',
    speakers: [],
    title: 'PyCon JP Association',
    slot: {
      room_id: 0,
      start: '2024-09-28T18:20:00+09:00',
      end: '2024-09-28T18:40:00+09:00',
    },
    date: 'day2',
    is_event: true,
    start_minute: 500,
    end_minute: 520,
  },
  {
    code: 'closing',
    speakers: [],
    title: 'Closing',
    slot: {
      room_id: 0,
      start: '2024-09-28T18:40:00+09:00',
      end: '2024-09-28T19:00:00+09:00',
    },
    date: 'day2',
    is_event: true,
    start_minute: 520,
    end_minute: 540,
  },
];