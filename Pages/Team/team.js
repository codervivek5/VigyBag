const owner = 'codervivek5'; // Replace with the owner's GitHub username
const repo = 'VigyBag';  // Replace with the repository name

async function fetchContributors() {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`);
    const contributors = await response.json();

    const contributorsList = document.querySelector('.contributors-list');

    contributors.sort((a, b) => b.contributions - a.contributions); // Sort contributors in descending order of contributions

    contributors.forEach(contributor => {
      const contributorElement = document.createElement('div');
      contributorElement.classList.add('contributor-element', 'text-center', 'text-gray-300', 'bg-gray-800', 'py-8', 'px-4', 'mx-auto', 'max-w-screen-sm', 'rounded-lg', 'border', 'border-gray-600', 'transition', 'transform', 'hover:scale-105', 'hover:bg-gray-700', 'hover:shadow-md'); // Apply dark theme styles

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
      commitsCount.textContent = `No. of Commits: ${contributor.contributions}`;
      commitsCount.classList.add('text-gray-500', 'dark:text-gray-300', 'text-sm');
      contributorElement.appendChild(commitsCount);

      contributorsList.appendChild(contributorElement);
    });
  } catch (error) {
    console.error('Error fetching contributors:', error);
  }
}

fetchContributors();
