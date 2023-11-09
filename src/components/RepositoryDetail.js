import React, {useState, useEffect} from 'react'
import './RepositoryDetail.css' // Import CSS here

function RepositoryDetail({match}) {
  const {owner, repo} = match.params
  const [repository, setRepository] = useState(null)

  useEffect(() => {
    // Fetch the data for the specific repository
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setRepository(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [owner, repo])

  if (!repository) {
    return <div>Loading...</div>
  }

  return (
    <div className="repository-detail">
      <h1 className="repository-name">{repository.name}</h1>
      <img
        src={repository.owner.avatar_url}
        alt={`${repository.owner.login}'s avatar`}
        className="avatar"
      />
      <p className="repository-description">{repository.description}</p>
      <div className="repository-details">
        <p>Stars: {repository.stargazers_count}</p>
        <p>Issues: {repository.open_issues_count}</p>
        <p>Last Pushed: {repository.pushed_at}</p>
      </div>
      <p className="owner-name">Owner: {repository.owner.login}</p>
    </div>
  )
}

export default RepositoryDetail
