export type BoardArrayType = {
    index : number,
    mark : string
}[]
export type useWebSocketsType = {
    webSocketURL : string
    subscriptionPublicChannelURL : string,
    subscriptionPrivateChannelURL : string,
    sendURL : string
}
export type WebSocketGameMessage = {
    sender : string,
    mark : string,
    index : number
}