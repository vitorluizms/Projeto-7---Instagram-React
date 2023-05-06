import Story from './Story.js'

export default function Stories() {
    const storyDados = [
        {
            link: 'assets/img/9gag.svg',
            name: '9gag'
        },
        {
            link: 'assets/img/meowed.svg',
            name: 'meowed'
        },
        {
            link: 'assets/img/barked.svg',
            name: 'barked'
        },
        {
            link: 'assets/img/nathanwpylestrangeplanet.svg',
            name: 'nathanwpylestrangeplanet'
        },
        {
            link: 'assets/img/wawawicomics.svg',
            name: 'wawawicomics'
        },
        {
            link: 'assets/img/respondeai.svg',
            name: 'respondeai'
        },
        {
            link: 'assets/img/filomoderna.svg',
            name: 'filomoderna'
        },
        {
            link:  'assets/img/memeriagourmet.svg',
            name: 'memeriagourmet'
        }
    ]

    return (
            <div class='esquerdo'>
                <div class='stories'>
                    {storyDados.map(dados => <Story link={dados.link} name={dados.name} />)}

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
            </div>
    )

}