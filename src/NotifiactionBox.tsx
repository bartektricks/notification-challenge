import { FunctionComponent, PropsWithChildren } from "react"

type NotificationBoxProps = PropsWithChildren & {
  newNotificationsNumber?: number
}

const NotificationBox: FunctionComponent<NotificationBoxProps> = ({
  newNotificationsNumber,
  children,
}) => {
  return (
    <div className="w-full max-w-3xl bg-white px-4 py-6 shadow-soft sm:p-8 md:rounded-lg">
      <div className="mb-6 flex justify-between">
        <div className="flex gap-2">
          <h2 className="text-xl font-extrabold text-veryDarkGreyBlue">
            Notifications
          </h2>
          {newNotificationsNumber && (
            <span className="rounded-lg bg-blue py-1 px-3 font-extrabold text-white">
              {newNotificationsNumber}
            </span>
          )}
        </div>
        <button type="button" className="text-darkGreyBlue hover:text-blue">
          Mark all as read
        </button>
      </div>
      <div className="flex max-h-[80vh] flex-col gap-2 overflow-y-auto">
        {children || <p>There are no notifications :(</p>}
      </div>
    </div>
  )
}

export default NotificationBox
