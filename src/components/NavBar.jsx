export default function () {
    const menu = [
        {
            id: 1,
            link: '#',
            text: 'CHARACTERS'
        },
        {
            id: 2,
            link: '#',
            text: 'COMICS'
        },
        {
            id: 3,
            link: '#',
            text: 'MOVIES'
        },
        {
            id: 4,
            link: '#',
            text: 'TV'
        },
        {
            id: 5,
            link: '#',
            text: 'GAMES'
        },
        {
            id: 6,
            link: '#',
            text: 'COLLECTIBLES'
        },
        {
            id: 7,
            link: '#',
            text: 'VIDEOS'
        },
        {
            id: 8,
            link: '#',
            text: 'FANS'
        },
        {
            id: 9,
            link: '#',
            text: 'NEWS'
        },
        {
            id: 10,
            link: '#',
            text: 'SHOP'
        }
    ]

    return (
        <nav>
            {
                menu.map(item => (
                    <a key={item.id} href={item.link}>{item.text}</a>
                ))
            }
        </nav>
    )
}