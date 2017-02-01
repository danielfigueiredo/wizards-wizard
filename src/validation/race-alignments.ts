const validRaceAlignments = {
  tiefling: [
    'Chaotic Neutral',
    'Neutral',
    'Chaotic Evil',
    'Neutral Evil'
  ],
  human: [
    'Lawful Good',
    'Neutral Good',
    'Chaotic Good',
    'Neutral',
    'Lawful Neutral',
    'Neutral Evil',
    'Lawful Evil'
  ],
  elf: [
    'Neutral',
    'Neutral Good',
    'Lawful Neutral',
    'Lawful Good'
  ],
};

export const isRaceAlignmentValid = (character) => {
  const race = character.bioSummary.race.toLowerCase();
  const valid = validRaceAlignments[race].find(
    val => val === character.bioSummary.alignment
  );
  return valid !== undefined;
};
