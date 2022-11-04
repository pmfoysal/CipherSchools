import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function getTime(date) {
   return dayjs(date).fromNow();
}
