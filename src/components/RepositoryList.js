import React, {useState, useEffect} from 'react'
import './RepositoryList.css' // Import CSS here
import {Link} from 'react-router-dom'

function RepositoryList() {
  const [repositories, setRepositories] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

    const apiUrl = `https://api.github.com/search/repositories?q=created:>${oneMonthAgo.toISOString()}&sort=stars&order=desc&page=${page}`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setRepositories(data.items || []))
      .catch(error => console.error('Error fetching data:', error))
  }, [page])

  return (
    <div>
      <h1 className="repository-list-heading">Most Starred Repos</h1>
      <div className="repository-list">
        {repositories.map(repo => (
          <div key={repo.id} className="repository-card">
            <img
              src={repo.owner.avatar_url}
              alt={`${repo.owner.login}'s avatar`}
              className="avatar"
            />
            <h2 className="repository-name">{repo.name}</h2>
            <p className="repository-description">{repo.description}</p>
            <div className="repository-details">
              <p>Stars: {repo.stargazers_count}</p>
              <p>Issues: {repo.open_issues_count}</p>
              <p>Last Pushed: {repo.pushed_at}</p>
              <p>by {repo.owner.login}</p>

              <Link to={`/repo/${repo.owner.login}/${repo.name}`}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)} className="load-more-button">
        Load More
      </button>
    </div>
  )
}

export default RepositoryList
