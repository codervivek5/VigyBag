const owner = 'codervivek5';
const repo = 'VigyBag';

async function fetchAllContributors() {
  try {
    let allContributors = [];
    let page = 1;

    while (true) {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?page=${page}&per_page=100`);
      const contributors = await response.json();

      if (contributors.length === 0) {
        break; // No more contributors
      }

      allContributors = allContributors.concat(contributors);
      page++;
    }

    const contributorsList = document.querySelector('.contributors-list');

    allContributors.sort((a, b) => b.contributions - a.contributions);

    allContributors.forEach(contributor => {
      const contributorElement = document.createElement('div');
      contributorElement.classList.add('contributor-element', 'text-center', 'text-gray-300', 'bg-gray-800', 'py-8', 'px-4', 'mx-auto', 'max-w-screen-sm', 'rounded-lg', 'border', 'border-gray-600', 'transition', 'transform', 'hover:scale-105', 'hover:bg-gray-700', 'hover:shadow-md');

      const profileImage = document.createElement('a');
      profileImage.href = `https://github.com/${contributor.login}`;
      profileImage.target = '_blank';
      const image = document.createElement('img');
      image.src = contributor.avatar_url;
      image.alt = `${contributor.login} profile picture`;
      image.classList.add('mx-auto', 'mb-4', 'w-36', 'h-36', 'rounded-full');
      profileImage.appendChild(image);
      contributorElement.appendChild(profileImage);

      const username = document.createElement('h3');
      username.textContent = contributor.login;
      username.classList.add('mb-1', 'text-2xl', 'font-bold', 'tracking-tight', 'text-gray-100');
      const profileLink = document.createElement('a');
      profileLink.href = `https://github.com/${contributor.login}`;
      profileLink.appendChild(username);
      contributorElement.appendChild(profileLink);

      const role = document.createElement('p');
      if (contributor.login === owner) {
        role.textContent = 'Project Admin';
      } else {
        role.textContent = 'Contributor';
      }
      role.classList.add('text-gray-400', 'mb-1');
      contributorElement.appendChild(role);

      const commitsCount = document.createElement('p');
      commitsCount.classList.add('text-gray-500', 'dark:text-gray-300', 'text-sm');

      if (contributor.contributions >= 3) {
        commitsCount.textContent = `No. of Commits: ${contributor.contributions}`;
      } else {
        commitsCount.textContent = `No. of Commits: ${contributor.contributions}`;
      }

      contributorElement.appendChild(commitsCount);
      contributorsList.appendChild(contributorElement);
    });
  } catch (error) {
    console.error('Error fetching contributors:', error);
  }
}

fetchAllContributors();
