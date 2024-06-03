import React, { useEffect } from 'react'

function Team() {
    useEffect(() => {
        fetch(`https://api.github.com/repos/${username}/${repo}/contributors?page=${page}&per_page=100`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
          })
          .catch(error => {
            console.error('Error fetching GitHub data:', error);
          });
      }, []);

  return (
    <>
    
    </>
  )
}

export default Team