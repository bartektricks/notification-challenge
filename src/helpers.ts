import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { SingleNotificationType } from "./api"

type UnionKeys<T> = T extends T ? keyof T : never
type StrictUnionHelper<T, TAll> = T extends unknown
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>>
  : never

export type StrictUnion<T> = StrictUnionHelper<T, T>

dayjs.extend(relativeTime)

export function getRelativeTime(eventDate: Date) {
  return dayjs().from(dayjs(eventDate))
}

export function getNotificationsCount(notifications: SingleNotificationType[]) {
  return notifications.reduce((sum, { isNew }) => {
    if (isNew) {
      sum += 1
    }

    return sum
  }, 0)
}
