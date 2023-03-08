type NewsItem = string | null
export type News = {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: NewsItem,
    url: NewsItem
    urlToImage: NewsItem,
    publishedAt: string,
    content: NewsItem
}