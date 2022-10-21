import NotificationCard from "./ NotificationCard"
import NotificationBox from "./NotifiactionBox"
import { getInitialNotifications, getNextNotifications } from "./api"

const notifications = getInitialNotifications()

const nextNotifications = getNextNotifications(51)

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
        {nextNotifications.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        ))}
      </NotificationBox>
    </div>
  )
}

export default App
