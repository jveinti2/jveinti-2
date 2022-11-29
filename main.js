const API = "https://api.github.com/users/jveinti2/repos";

const getData = async (urlApi) => {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

(async () => {
  try {
    const repos = await getData(API);
    const reposList = repos
      .map((repo) => {
        console.log(repo);
        return `
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                <a href="${repo.html_url}">${repo.name}</a>
              </p>
            </li>
          </ul>

            `;}).slice(0, 5)
      .join("");
    document.getElementById("contentRepos").innerHTML = reposList;
  } catch (error) {
    console.log(error);
  }
})();
