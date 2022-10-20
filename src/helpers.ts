import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export function getRelativeTime(eventDate: Date) {
  return dayjs().from(dayjs(eventDate))
}
