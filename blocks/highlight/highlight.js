/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const [highlightWrapper] = block.children;

  const divWrapper = document.createElement('div');
  console.info('thiss block highlight', block);
  divWrapper.textContent = highlightWrapper.textContent.trim();
  highlightWrapper.replaceChildren(divWrapper);
}
