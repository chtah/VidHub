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
