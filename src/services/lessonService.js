
class LessonService {
    createLesson = (moduleId, lesson) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/modules/${moduleId}/lessons`, {
            method: 'POST',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findLessonsForModule = (moduleId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/modules/${moduleId}/lessons`)
            .then(response => response.json())
    }

    findLesson = (lessonId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/courses/${lessonId}`)
            .then(response => response.json())
    }

    updateLesson = (lessonId, lesson) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/courses/${lessonId}`, {
            method: 'PUT',
            body: JSON.stringify(lesson),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }

    deleteLesson = (lessonId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/courses/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}

export default LessonService