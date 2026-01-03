let searchData = [];

// Load search data
fetch('data/search.json')
  .then(res => res.json())
  .then(data => {
    searchData = data;
  })
  .catch(err => console.error("Search data error:", err));

function handleSearch(input, type) {
  const query = input.value.trim().toLowerCase();

  const resultsContainer =
    type === "mobile"
      ? document.getElementById("mobileSearchResults")
      : document.getElementById("desktopSearchResults");

  if (!query) {
    resultsContainer.innerHTML = "";
    resultsContainer.style.display = "none";
    return;
  }

  const results = searchData.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.content.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = `<div class="search-item">No results found</div>`;
  } else {
    resultsContainer.innerHTML = results.map(item => `
      <a href="${item.url}" class="search-item">
        <strong>${item.title}</strong>
        <p>${item.content}</p>
      </a>
    `).join("");
  }

  resultsContainer.style.display = "block";
}
