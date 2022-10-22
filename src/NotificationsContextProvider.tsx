import { createContext, FC, PropsWithChildren, useState } from "react"
import { getInitialNotifications, SingleNotificationType } from "./api"

function useNotificationStore() {
  return useState<SingleNotificationType[]>(getInitialNotifications())
}

export type NotificationStoreType = ReturnType<typeof useNotificationStore>

export const NotificationsContext = createContext<NotificationStoreType>([
  [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function () {},
])

const NotificationsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useNotificationStore()

  return (
    <NotificationsContext.Provider value={store}>
      {children}
    </NotificationsContext.Provider>
  )
}

export default NotificationsContextProvider
