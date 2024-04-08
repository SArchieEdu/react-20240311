export const selectCodecModule = (state) => state.codec;

export const selectCodecIds = (state) => selectCodecModule(state).ids;
export const selectCodecById = (state, id) =>
  selectCodecModule(state).entities[id];
