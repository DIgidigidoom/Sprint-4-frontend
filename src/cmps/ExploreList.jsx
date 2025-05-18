import { getTagsList } from '../services/util.service'
import { ExplorePreview } from './ExplorePreview.jsx'

export function ExploreList() {
    const tags = getTagsList()

    return (
        <section className="explore-list">
            {tags.map((tag, idx) => (
                <ExplorePreview key={idx} tag={tag} />
            ))}
        </section>
    )
}
