/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const [contentBoxWrapper] = block.children;

  const divWrapper = document.createElement('div');
  console.info('thiss block content box', block.children);
  divWrapper.textContent = contentBoxWrapper.textContent.trim();
  contentBoxWrapper.replaceChildren(divWrapper);
}
