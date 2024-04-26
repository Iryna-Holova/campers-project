export const scrollNotVisibleToTop = (el, container) => {
  const elRect = el.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  if (elRect.top >= containerRect.top && elRect.bottom <= containerRect.bottom)
    return;
  el.scrollIntoView({
    alignToTop: true,
    behavior: 'smooth',
  });
};
