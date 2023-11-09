import React, {useState, useEffect} from 'react'
import './RepositoryDetail.css' // Import CSS here
import {Link, useParams} from 'react-router-dom'

function RepositoryDetail() {
  const {owner, name} = useParams()
  const [repository, setRepository] = useState(null)

  useEffect(() => {
    const apiUrl = `https://api.github.com/repos/${owner}/${name}`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setRepository(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [owner, name])

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
        <p>Owner Name: {repository.owner.login}</p>
      </div>
      <Link to="/">Back to List</Link>
    </div>
  )
}

export default RepositoryDetail
