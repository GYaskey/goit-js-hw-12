export function renderImages(arr) {
  if (!arr || arr.hits.length === 0) {
    return '';
  }

  return arr.hits
    .map(image => {
      return `<li class="img-item">
  <a href="${image.largeImageURL}" class="img-link">
    <img src="${image.webformatURL}" alt="${image.tags}" class="img-picture" />
  </a>
  <ul class="img-stats">
    <li>
      <p class="img-text">
        Likes
        <span class="img-stat">${image.likes}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Views
        <span class="img-stat">${image.views}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Comments
        <span class="img-stat">${image.comments}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Downloads
        <span class="img-stat">${image.downloads}</span>
      </p>
    </li>
  </ul>
</li>
`;
    })
    .join('');
}
