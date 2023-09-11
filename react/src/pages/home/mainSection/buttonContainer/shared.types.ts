export interface PlayerRanks {
    id: number,
    username: string,
    statistics : Statistics
}
export interface LeaderboardRanks {
    id: number;
    username: string;
    statistics : Statistics
  }
  export interface Statistics {
    draws : number;
    loses : number;
    wins : number;
    score : number
  }
  export type useFetchProps = {
    url : string,
    isJWT : boolean
  }
 export type RanksBoardProps = {
    type : string;
    playerData : LeaderboardRanks[] | PlayerRanks[] | undefined
}