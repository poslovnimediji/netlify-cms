function defaultEmptyBlock(text = '') {
  return {
    type: 'p',
    children: [{ text }],
  };
}

export default defaultEmptyBlock;
