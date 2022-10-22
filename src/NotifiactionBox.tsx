import {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react"

import { getNextNotifications, SingleNotificationType } from "./api"
import { NotificationsContext } from "./NotificationsContextProvider"

const getNotificationsCount = (notificationsArray: SingleNotificationType[]) =>
  notificationsArray.filter(({ isNew }) => isNew).length

const NotificationBox: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [notifications, setNotifications] = useContext(NotificationsContext)
  const notificationsCount = notifications
    ? getNotificationsCount(notifications)
    : 0

  const handleMarkAllAsRead = () => {
    if (!notificationsCount) return

    setNotifications((prevNotifications) =>
      prevNotifications.map((prevNotification) => ({
        ...prevNotification,
        isNew: false,
      })),
    )
  }

  useEffect(() => {
    if (notificationsCount > 0) return

    const timeoutRef = setTimeout(() => {
      setNotifications((prevNotifications) => {
        const newNotifications = [
          ...getNextNotifications(6),
          ...prevNotifications,
        ]

        return newNotifications.length >= 20
          ? newNotifications.slice(0, -10)
          : newNotifications
      })
    }, 1500)

    return () => {
      clearTimeout(timeoutRef)
    }
  }, [notificationsCount])

  return (
    <div className="w-full max-w-3xl bg-white px-4 py-6 shadow-soft sm:p-8 md:rounded-lg">
      <div className="mb-6 flex justify-between">
        <div className="flex gap-2">
          <h1 className="text-xl font-extrabold text-veryDarkGreyBlue">
            Notifications
          </h1>
          {Boolean(notificationsCount) && (
            <span className="rounded-lg bg-blue py-1 px-3 font-extrabold text-white">
              {notificationsCount}
            </span>
          )}
        </div>
        <button
          onClick={handleMarkAllAsRead}
          type="button"
          className="text-darkGreyBlue hover:text-blue"
        >
          Mark all as read
        </button>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto sm:max-h-[80vh]">
        {children || <p>There are no notifications :(</p>}
      </div>
    </div>
  )
}

export default NotificationBox
