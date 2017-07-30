export function generateGroove(opts) {
  return `
  Tempo ${opts.tempo || 120}
  Keysig C
  Transpose up per 4

  Groove Metronome2-4
    z * 2

  Chord Off
  Arpeggio Off
  Scale Off
  Bass Off
  Walk Off
  Plectrum Off
  Solo Off
  Melody Off
  Groove ${opts.groove || 'pop'}
  1 z
  2 z
  3 z
  4 z
  5 z
  6 z
  7 z
  8 z
  9 z
  10 z
  11 z
  12 z
  13 z
  14 z
  15 z
  16 z
  17 z
  18 z
  19 z
  20 z
  21 z
  22 z
  23 z
  24 z
  25 z
  26 z
  27 z
  28 z
  29 z
  30 z
  31 z
  32 z
  33 z
  34 z
  35 z
  36 z
  37 z
  38 z
  39 z
  40 z
  `;
}