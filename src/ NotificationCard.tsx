import { useContext } from "react"
import { SingleNotificationType } from "./api"
import { getRelativeTime, StrictUnion } from "./helpers"
import { NotificationsContext } from "./NotificationsContextProvider"

type NotificationMessagesType = {
  [k in SingleNotificationType["type"]]: string
}

const NotificationMessages: NotificationMessagesType = {
  FOLLOWED: "followed you",
  JOINED: "has joined your group",
  LEFT: "has left your group",
  MESSAGED: "sent you a private message",
  COMMENTED: "commented on your picture",
  REACTED: "has reacted to your post",
}

const NotificationCard = ({
  id,
  isNew,
  date,
  user,
  type,
  picture,
  message,
  item,
}: StrictUnion<SingleNotificationType>) => {
  const [_, setNotifications] = useContext(NotificationsContext)

  const handleMarkAsRead = () => {
    if (!isNew) return

    setNotifications((prevNotifications) =>
      prevNotifications.map((prevNotification) =>
        prevNotification.id === id
          ? {
              ...prevNotification,
              isNew: false,
            }
          : prevNotification,
      ),
    )
  }

  return (
    <div
      tabIndex={0}
      onClick={handleMarkAsRead}
      className={`w-full rounded-md p-4 text-left sm:p-5 ${
        isNew ? "bg-lightGreyBlue" : "cursor-default"
      }`}
    >
      <div className="flex gap-4">
        <img
          className="h-11 w-11 rounded-full"
          src={user.avatar}
          alt={user.name}
        />
        <div className="flex flex-col">
          <div>
            <p
              className={
                isNew
                  ? "after:inline-block after:h-2 after:w-2 after:-translate-y-1/4 after:rounded-full after:bg-red after:content-['']"
                  : undefined
              }
            >
              <a
                className="font-extrabold text-veryDarkGreyBlue hover:text-blue"
                href={user.link}
              >
                {user.name}
              </a>{" "}
              {NotificationMessages[type]}{" "}
              {item && (
                <>
                  <a
                    className="font-extrabold hover:text-blue"
                    href={item.link}
                  >
                    {item.name}
                  </a>{" "}
                </>
              )}
            </p>
            <time className="text-greyBlue">{getRelativeTime(date)}</time>
          </div>
          {message && (
            <blockquote className="mt-4 cursor-pointer rounded-md border border-veryLightGreyBlue bg-white p-4 hover:border-lightGreyBlue hover:bg-veryLightGreyBlue">
              {message}
            </blockquote>
          )}
        </div>
        {picture && (
          <a className="ml-auto mr-0" href={picture}>
            <img
              className="h-11 w-11 rounded-sm"
              src={picture}
              alt={user.name + " picture"}
            />
          </a>
        )}
      </div>
    </div>
  )
}

export default NotificationCard
