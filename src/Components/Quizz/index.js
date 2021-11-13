import { useEffect, useState } from 'react'
import './Quizz.css'

const data = [
    
]

const keyToTheTest = {
    'ESTJ': {
        character: 'Chief Wigam',
        strengths: `Enthusiastic people who are driven 
        to fulfil their obligations and duties. 
        They are committed to
        relationships which they
        consider to be lifelong &
        unalterable – Good in a
        tight spot`,
        weaknesses: `Tendency to always
        needing to be in charge
        and maybe controlling of
        friends & colleagues.`,
        img: 'https://e7.pngegg.com/pngimages/448/156/png-clipart-the-simpsons-character-chief-wiggum-barney-gumble-nelson-muntz-homer-simpson-grampa-simpson-the-simpsons-movie-police-officer-springfield.png'
    },
    'ESFJ': {
        character: 'Ned Flanders',
        strengths: `Warm hearted individuals
        who highly value their
        relationships. Customer
        focused with the ability to
        bring out the best of people.`,
        weaknesses: `Can be self-sacrificing and
        may not pay enough
        attention to their own needs`,
        img: 'https://e7.pngegg.com/pngimages/647/157/png-clipart-ned-flanders-krusty-the-clown-homer-simpson-marge-simpson-bart-simpson-bart-simpson-cartoon-fictional-character-thumbnail.png'
    },
    'ISTJ': {
        character: 'Principal Skinner',
        strengths: `Honour their
        commitments, Able to
        take constructive
        criticism well `,
        weaknesses: `Tendency to believe
        that they're always
        right, Their value for
        structure may seem
        rigid to others`,
        img: 'https://e7.pngegg.com/pngimages/736/774/png-clipart-principal-skinner-mr-burns-moe-szyslak-lisa-simpson-mr-burns-television-hand.png'
    },
    'ISFJ': {
        character: 'Marge Simpson',
        strengths: `Warm, friendly and
        affirming by nature,
        Excellent
        organizational
        capabilities `,
        weaknesses: `Extreme dislike of
        conflict and criticism, ,
        Unlikely to express
        their needs, which
        may cause pent-up
        frustrations`,
        img: 'https://e7.pngegg.com/pngimages/400/900/png-clipart-marge-simpson-homer-simpson-bart-simpson-lisa-simpson-maggie-simpson-bart-simpson-marge-simpson-homer-simpson.png'
    },
    'ESTP': {
        character: 'Bart Simpson',
        strengths: `They love action and
        always seem to be doing
        something. Clear-headed
        when dealing with
        emergencies. Enjoy
        lavishing loved ones with
        big gifts. good to have on
        your side, corporate suit`,
        weaknesses: `Get bored easily. Enjoys
        lavishing loved ones with
        big gifts`,
        img: 'https://e1.pngegg.com/pngimages/581/384/png-clipart-los-simpsons-1-texto-p-bart-simpson.png'
    },
    'ESFP': {
        character: 'Homer Simpson',
        strengths: `Generous & will go out
        of their way to help a
        colleagues. Live for the
        moment & know how to
        make the most of each
        moment. `,
        weaknesses: `Can take conflict
        personally. Resist
        relationships that require
        them to function on a
        high intuitive or thinking
        level `,
        img: 'https://e7.pngegg.com/pngimages/243/287/png-clipart-homer-simpson-bart-simpson-mr-burns-marge-simpson-sticker-bart-simpson-sticker-cartoon.png'
    },
    'ISTP': {
        character: 'Sideshow Bob',
        strengths: `Usually self-confident, are
        not threatened by conflict
        or criticism `,
        weaknesses: `They thrive on action and
        excitement, and may stir
        things up to create it`,
        img: 'https://e7.pngegg.com/pngimages/433/839/png-clipart-sideshow-bob-bart-simpson-homer-simpson-the-simpsons-tapped-out-maggie-simpson-bart-simpson-television-vertebrate.png'
    },
    'ISFP': {
        character: 'Smithers',
        strengths: `Flexible and laid-back,
        usually willing to defer
        to their mates, Warm,
        friendly and affirming
        by nature `,
        weaknesses: `Extreme dislike of
        conflict and criticism,
        Tendency to hold back
        their thoughts and
        feelings, unless drawn
        out`,
        img: 'https://e7.pngegg.com/pngimages/774/281/png-clipart-the-simpson-character-illustration-waylon-smithers-mr-burns-grampa-simpson-homer-simpson-krusty-the-clown-the-simpsons-springfield-vertebrate.png'
    },
    'ENTJ': {
        character: 'Krusty the Clown',
        strengths: `Enjoys lively intellectual
        conversations -
        welcoming such
        interactions as a learning
        opportunity`,
        weaknesses: `Can be direct &
        confrontational `,
        img: 'https://e7.pngegg.com/pngimages/60/648/png-clipart-homer-simpson-krusty-the-clown-bart-simpson-lisa-simpson-marge-simpson-bart-simpson-hand-vertebrate.png'
    },
    'ENTP': {
        character: 'Kent Brockman',
        strengths: `Laid back and can get
        along with almost all
        other types of people.
        Enjoy dicussing &
        debating theories and
        concepts that interests
        them.`,
        weaknesses: `Can initiate arguments
        because they enjoy the
        debate. `,
        img: 'https://e7.pngegg.com/pngimages/131/448/png-clipart-the-simpson-mayor-character-kent-brockman-waylon-smithers-bart-simpson-milhouse-van-houten-homer-simpson-the-simpsons-springfield-hand.png'
    },
    'INTJ': {
        character: 'Mr Burns',
        strengths: `Not threatened by conflict
        or criticism, Able to leave
        relationships which
        should be ended`,
        weaknesses: `May be insensitive at
        times,
        Tendency to be unwilling
        or unable to accept blame`,
        img: 'url'
    },
    'INTP': {
        character: 'Prof Frink',
        strengths: `Approach things which
        interest them very
        enthusiastically, Richly
        imaginative and creative `,
        weaknesses: `Tend to be suspicious
        and distrusting of others,
        Tend to "blow off" conflict
        situations by ignoring
        them, or else they "blow
        up" in heated anger`,
        img: 'https://e7.pngegg.com/pngimages/842/204/png-clipart-man-holding-coin-purse-illustration-mr-burns-waylon-smithers-homer-simpson-bart-simpson-grampa-simpson-the-simpsons-movie-springfield-hand.png'
    },
    'ENFJ': {
        character: 'Apu',
        strengths: `Warm sociable people
        who are keenly in tune
        with other’s feeling &
        perspectives`,
        weaknesses: `s Well defined value
        systems can make them
        inflexible in some areas `,
        img: 'https://e7.pngegg.com/pngimages/547/602/png-clipart-apu-nahasapeemapetilon-ned-flanders-sideshow-bob-homer-simpson-bart-simpson-bart-simpson-springfield-hand.png'
    },
    'ENFP': {
        character: 'Barney Grumble',
        strengths: `See the best in people
        and likely to bring out the
        best in people. Put a lot of
        effort into making thing
        work out between people`,
        weaknesses: `No weaknesses`,
        img: 'https://e7.pngegg.com/pngimages/368/559/png-clipart-barney-gumble-homer-simpson-barney-rubble-disco-stu-edna-krabappel-barney-stinson-poster.png'
    },
    'INFJ': {
        character: 'Lisa Simpson',
        strengths: `Have very high
        expectations for
        themselves and others
        (both a strength and
        weakness) , Sensitive
        and concerned for others'
        feelings `,
        weaknesses: `Extreme dislike of conflict
        and criticism`,
        img: 'https://e7.pngegg.com/pngimages/853/496/png-clipart-lisa-simpson-homer-simpson-bart-simpson-marge-simpson-maggie-simpson-bart-simpson-lisa-simpson-homer-simpson.png'
    },
    'INFP': {
        character: 'Ralph Wigam ',
        strengths: `Have Driven to meet
        other's needs, Strive for
        "win-win" situations `,
        weaknesses: `May tend to be shy and
        reserved , Perfectionist
        tendencies may cause
        them to not give
        themselves enough
        credit`,
        img: 'https://e7.pngegg.com/pngimages/768/938/png-clipart-ralph-wiggum-chief-wiggum-barney-gumble-apu-nahasapeemapetilon-moe-szyslak-os-simpsons-television-food.png'
    }

}

export default function Quizz() {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        setQuestions(data)
    }, [])

    return (
        <>
        <h1>Quizz</h1>
         {questions.map(question => < Question question={question}/>)}
        <Question />
        </>
    )
}

function Question(props) {
    console.log(props.question)
    return (
        <div className="question-card">
        <h3>Choose one of the options that characterise you</h3>
        <form>
            <div className="option">
            <h4></h4>
            <input type="radio" id="ok" value="ok" name="my-form"/>
            <label htmlFor="ok">It's absolutelly me!</label>
            </div>
            <div className="option">
            <h4></h4>
            <input type="radio" id="notOk" value="notOk" name="my-form" />
            <label htmlFor="notOk">No, no, no!</label>
            </div>
        </form>

        {/* <from>
            
            <input type="radio" id="true" value="true"/>
            <label for="true">It's absolutelly me!</label>
            
            <input type="radio" name="false" id="false" value="false"/>
            <label for="true">No, no, no! </label>
        </from> */}
        </div>
    )
}