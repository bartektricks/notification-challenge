import NotificationCard from "./ NotificationCard"
import NotificationBox from "./NotifiactionBox"
import { useContext } from "react"
import { NotificationsContext } from "./NotificationsContextProvider"

function App() {
  const [notifications] = useContext(NotificationsContext)

  return (
    <main className="flex min-h-screen justify-center bg-snow sm:items-center sm:px-6">
      <NotificationBox>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        ))}
      </NotificationBox>
    </main>
  )
}

export default App
