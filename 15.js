let data = [
    {
        name: 'student1'
        , age: 18
        , diplomaCode: 0
        , genderCode: 'x'
        , stuId: 24
    }
]
const fieldOfStudyCode = {
    experimentalScience: 0
    , humanities: 1
    , professionalTechnic: 2
}
let a = []
let b = []
let c = 0;

data.map(item => {
    if (item.stuId === 24 && item.genderCode === 'x') {
        a.push(item.name)
    }
    if (item.age > 18) {
        b.push(item.name)
    }
    if (item.stuId === 24) {
        c += 1
    }
    c = data.length() / c * 100
})