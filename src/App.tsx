import NotificationCard from "./ NotificationCard"
import NotificationBox from "./NotifiactionBox"
import { getNotifications } from "./api"

const notifications = getNotifications()

function App() {
  const newNutoficationsNumber = notifications.reduce((sum, notification) => {
    if (notification.isNew) {
      sum += 1
    }
    return sum
  }, 0)

  return (
    <div className="flex h-screen justify-center bg-snow sm:items-center sm:px-6">
      <NotificationBox newNotificationsNumber={newNutoficationsNumber}>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        ))}
      </NotificationBox>
    </div>
  )
}

export default App
