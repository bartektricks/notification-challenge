import { faker } from "@faker-js/faker"

export type SingleNotificationType = ReturnType<typeof getRandomNotification>

const NotificationTypes = [
  "FOLLOWED",
  "JOINED",
  "REACTED",
  "LEFT",
  "COMMENTED",
  "MESSAGED",
] as const

const getRandomNotification = () => {
  const notificationType = faker.helpers.arrayElement(NotificationTypes)
  const name = faker.name.fullName()

  const userData = {
    id: faker.datatype.uuid(),
    type: notificationType,
    isNew: true,
    date: faker.date.recent(0.1),
    user: {
      name,
      link: faker.helpers.slugify(name),
      avatar: faker.image.avatar(),
    },
  }

  if (notificationType === "FOLLOWED") {
    return userData
  }

  if (notificationType === "COMMENTED") {
    return {
      ...userData,
      picture: faker.image.image(45, 45, true),
    }
  }

  if (notificationType === "MESSAGED") {
    return {
      ...userData,
      message: faker.lorem.paragraph(faker.helpers.arrayElement([1, 2, 3])),
    }
  }

  const productName = faker.commerce.productName()

  return {
    ...userData,
    item: {
      name: productName,
      link: faker.helpers.slugify(productName),
    },
  }
}

export function getNextNotifications(count: number) {
  return Array(count)
    .fill(0)
    .map(() => getRandomNotification())
}

export function getInitialNotifications(): SingleNotificationType[] {
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
      isNew: true,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
      user: {
        name: "Rizky Hasanuddin",
        link: "#",
        avatar: "/assets/avatars/avatar-rizky-hasanuddin.webp",
      },
      picture: "/assets/image-chess.webp",
    },
  ]
}
