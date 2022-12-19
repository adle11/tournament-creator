export interface PlayersFilter {
  ageRange: number[] | null;
  nationality: string | null;
}

export const defaultPlayersFilter: PlayersFilter = {
  ageRange: [0, 100],
  nationality: null
};
