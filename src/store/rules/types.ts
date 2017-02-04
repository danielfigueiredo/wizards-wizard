export type TFetchRacesAligmentAction = { type: 'FETCH_RACES_ALIGNMENTS' };

export type TRacesAndAlignments = {
  tiefling: string[];
  human: string[];
  elf: string[];
};

export type TFetchRacesAligmentCompletedAction =
  { type: 'FETCH_RACES_ALIGNMENTS_COMPLETED', payload: TRacesAndAlignments };

export interface IRules {
  racesAndAlignments: TRacesAndAlignments;
}
