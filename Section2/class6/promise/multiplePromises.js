function stuDetails(stuId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ stuId, stuName: 'Ram Dahal' }), 1000);
    });
}

function passoutYear(stu) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ...stu, passoutYear: 2027 }), 3000);
    });
}

function nowInSem(stu) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ...stu, currentSemester: 'second semester running' }), 2000);
    });
}

stuDetails(1)
    .then(stu => {
        console.log('Student Details:', stu);
        return passoutYear(stu);
    })
    .then(stuWithYear => {
        console.log('Passout Year:', stuWithYear.passoutYear);
        return nowInSem(stuWithYear);
    })
    .then(stuWithSem => {
        console.log('Current Semester:', stuWithSem.currentSemester);
        console.log('Final Student Details:', stuWithSem);
    })
    .catch(error => console.error('Error:', error));
