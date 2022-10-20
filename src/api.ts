type SharedProps = {
  id: string
  isNew?: boolean
  date: Date
  user: {
    name: string
    link: string
    avatar: string
  }
}

type ConditionalProps =
  | {
      type: "FOLLOWED"
      item?: never
      picture?: never
      message?: never
    }
  | {
      type: "JOINED" | "REACTED" | "LEFT"
      item: {
        name: string
        link: string
      }
      picture?: never
      message?: never
    }
  | {
      type: "COMMENTED"
      picture: string
      item?: never
      message?: never
    }
  | {
      type: "MESSAGED"
      message: string
      item?: never
      picture?: never
    }

export type GetNotificationsProps = SharedProps & ConditionalProps

export function getNotifications(): GetNotificationsProps[] {
  return [
    {
      id: "mark-webber-1",
      type: "REACTED",
      isNew: true,
      date: new Date(),
      user: {
        name: "Mark Webber",
        link: "#",
        avatar: "/assets/avatars/avatar-mark-webber.webp",
      },
      item: {
        link: "#",
        name: "My first tournament today!",
      },
    },
    {
      id: "angela-gray-1",
      type: "FOLLOWED",
      date: new Date(),
      user: {
        name: "Angela Gray",
        link: "#",
        avatar: "/assets/avatars/avatar-angela-gray.webp",
      },
    },
    {
      id: "jacob-thompson-1",
      type: "JOINED",
      date: new Date(),
      user: {
        name: "Jacob Thompson",
        link: "#",
        avatar: "/assets/avatars/avatar-jacob-thompson.webp",
      },
      item: {
        name: "Chess Club",
        link: "#",
      },
    },
    {
      id: "rizky-asanuddin-1",
      type: "MESSAGED",
      date: new Date(),
      user: {
        name: "Rizky Hasanuddin",
        link: "#",
        avatar: "/assets/avatars/avatar-rizky-hasanuddin.webp",
      },
      message:
        "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    },
    {
      id: "rizky-hasanuddin-2",
      type: "COMMENTED",
      date: new Date(),
      user: {
        name: "Rizky Hasanuddin",
        link: "#",
        avatar: "/assets/avatars/avatar-rizky-hasanuddin.webp",
      },
      picture: "/assets/image-chess.webp",
    },
  ]
}
