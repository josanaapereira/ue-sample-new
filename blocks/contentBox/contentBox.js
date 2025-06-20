/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const [contentBoxWrapper] = block.children;

  const divWrapper = document.createElement('div');
  divWrapper.textContent = contentBoxWrapper.textContent.trim();
  contentBoxWrapper.replaceChildren(divWrapper);
}
