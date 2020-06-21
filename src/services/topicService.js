
class TopicService {
    createTopic = (lessonId, topic) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/lessons/${lessonId}/topics`, {
            method: 'POST',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    deleteTopic = (topicId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/topics/${topicId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }

    findTopic = (topicId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/topics/${topicId}`)
            .then(response => response.json())
    }

    findTopicsForLesson = (lessonId) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/lessons/${lessonId}/topics`)
            .then(response => response.json())
    }

    updateTopic = (topicId, topic) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/001228183/topics/${topicId}`, {
            method: 'PUT',
            body: JSON.stringify(topic),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }
}

export default TopicService