import { getTagsList, getCloudinaryImg } from '../services/util.service'

export function ExploreList() {
    const tags = getTagsList()

    return (
        <section className="explore-list">
            {tags.map((tag, idx) => (
                <div className='tag-card-container'>
                    <article
                        key={idx}
                        className="tag-card"
                        style={{ backgroundColor: tag.color }}
                    >
                        <h3>{tag.name}</h3>
                        <img src={getCloudinaryImg(tag.imgUrl)} alt={tag.name} />
                    </article>
                </div>
            ))}
        </section>
    )
}
