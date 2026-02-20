import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function ReleasesTable() {
  const [data, setData] = useState([]);
  const releasesUrl = useBaseUrl('/releases.json');

  useEffect(() => {
    fetch(releasesUrl)
      .then(res => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, [releasesUrl]);

  const repos = data.sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );

  if (repos.length === 0) return <p>Loading releases...</p>;

  return (
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Repo</th>
              <th>Tag</th>
              <th>Published</th>
              <th>Releases Page</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((info, idx) => (
              <tr key={idx}>
                <td>
                  <a href={info.repo_url} target='_blank' rel='noreferrer'>
                    {info.repo_url.replace("https://github.com/", "")}
                  </a>
                </td>
                <td>{info.tag}</td>
                {/* <td>{new Date(info.published_at).toLocaleDateString()}</td> */}
                {/* <td>{new Date(info.published_at).toISOString().replace('T', ' ').replace('.000Z', ' UTC')}</td> */}
                <td>{info.published_at ? new Date(info.published_at).toISOString().replace('T', ' ').replace('.000Z', ' UTC') : 'N/A'}</td>
                <td>
                  <a href={info.releases_page_url} target='_blank' rel='noreferrer'>
                    Releases
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
