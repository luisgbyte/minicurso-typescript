// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
}

const account: AccountInfo = {
  id: 123,
  name: "Luis",
  email: "example@email.com"
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: "Luis",
  level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: "Luis",
  nickname: "Luis",
  level: 100
}
