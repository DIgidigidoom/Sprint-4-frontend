import {  useSelector } from 'react-redux'

export function StaitionSearch() {

    const youtubeResults = useSelector(storeState => storeState.youtubeModule.youtubeResults)

    return (
        youtubeResults.length > 0 && (
				<ul className="search-results">
					{youtubeResults.map(video => (
						<li key={video.id}>
							<img src={video.thumbnail} alt={video.title} />
							<div>{video.title}</div>
						</li>
					))}
				</ul>
			)
    )
}