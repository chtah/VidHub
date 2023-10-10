export interface VideoPostDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  postedBy: {
    id: string
    username: string
    name: string
    registeredAt: string
  }
  createdAt: string
  updatedAt: string
}

export interface CreateVideoDTO {
  videoUrl: string
  comment: string
  rating: number
}

export interface LoginDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}

export interface userDataDTO {
  id: string
  username: string
  name: string
  registeredAt: string
}

export interface VideoEditDTO {
  comment: string
  rating: number
}
